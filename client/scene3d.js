'use strict';
/*
 * Sabotage Stack 3D — a dependency-free, real-perspective 3D renderer.
 *
 * This module is the source of truth for the 3D arena. scripts/sync-scene3d.js
 * inlines it verbatim into sabotage-stack.html between the SCENE3D markers so
 * the client stays a single file that works from file:// with no server.
 *
 * It is a genuine 3D pipeline, not a parallax trick:
 *   world vertices -> 4x4 model/view matrices -> perspective projection
 *   -> near-plane clipping -> painter's-algorithm depth sort
 *   -> per-face Lambert + Blinn-Phong shading -> distance fog
 *   -> additive light/particles -> cinematic post pass.
 *
 * The original 2D canvas is still rendered every frame underneath (tests,
 * accessibility and the Classic 2D fallback all keep using it). This renderer
 * owns a separate overlay canvas, so no game rules or phases are touched.
 */
(function exposeScene3D(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module && module.exports) module.exports = api;
  if (root) root.SabotageStack3D = api;
})(typeof window === 'object' && window ? window : null, function buildScene3D() {
  // ---- world scale: 10 canvas px = 1 world unit -------------------------------
  const SCALE = 0.1;
  const HALF = 18;                 // 360 px / 2
  const BLOCK = 2.2;              // 22 px
  const DEPTH = 3.1;              // tower depth (front face at +DEPTH/2)
  const NEAR = 0.6;
  const FAR = 420;
  const FOV = 46 * Math.PI / 180;
  const MAX_PARTICLES = 220;
  const TAU = Math.PI * 2;

  // ---- small utilities --------------------------------------------------------
  const clamp = (v, lo, hi) => v < lo ? lo : v > hi ? hi : v;
  const lerp = (a, b, t) => a + (b - a) * t;
  const ease = (current, target, dt, tau) => current + (target - current) * (1 - Math.exp(-Math.max(0, dt) / tau));

  function parseColor(value, fallback) {
    if (Array.isArray(value)) return value.slice(0, 3);
    if (typeof value !== 'string') return fallback || [200, 200, 200];
    let hex = value.trim();
    if (hex.startsWith('#')) hex = hex.slice(1);
    else {
      const rgb = /rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/i.exec(hex);
      if (rgb) return [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])];
    }
    if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    if (!/^[0-9a-f]{6}$/i.test(hex)) return fallback || [200, 200, 200];
    return [parseInt(hex.slice(0, 2), 16), parseInt(hex.slice(2, 4), 16), parseInt(hex.slice(4, 6), 16)];
  }
  function css(c, alpha) {
    const a = alpha == null ? 1 : clamp(alpha, 0, 1);
    return 'rgba(' + (c[0] | 0) + ',' + (c[1] | 0) + ',' + (c[2] | 0) + ',' + (+a.toFixed(3)) + ')';
  }
  function scaled(c, factor) { return [clamp(c[0] * factor, 0, 255), clamp(c[1] * factor, 0, 255), clamp(c[2] * factor, 0, 255)]; }
  function mixed(a, b, t) { return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)]; }
  function rgbaFromHex(hex, alpha) { return css(parseColor(hex), alpha); }

  function rng(seed) {
    let s = (seed | 0) || 1;
    return function random() {
      s = (s * 1664525 + 1013904223) | 0;
      return ((s >>> 0) % 1000000) / 1000000;
    };
  }

  // ---- 4x4 matrix maths (column major, OpenGL convention) --------------------
  function vecSub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
  function vecCross(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
  function vecDot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
  function vecNorm(a) { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; }
  function matMul(a, b) {
    const out = new Array(16);
    for (let col = 0; col < 4; col += 1) {
      for (let row = 0; row < 4; row += 1) {
        out[col * 4 + row] = a[row] * b[col * 4] + a[4 + row] * b[col * 4 + 1]
          + a[8 + row] * b[col * 4 + 2] + a[12 + row] * b[col * 4 + 3];
      }
    }
    return out;
  }
  function matTransform(m, p) {
    const x = p[0], y = p[1], z = p[2];
    return [
      m[0] * x + m[4] * y + m[8] * z + m[12],
      m[1] * x + m[5] * y + m[9] * z + m[13],
      m[2] * x + m[6] * y + m[10] * z + m[14],
      m[3] * x + m[7] * y + m[11] * z + m[15]
    ];
  }
  function perspective(fovy, aspect, near, far) {
    const f = 1 / Math.tan(fovy / 2);
    return [
      f / aspect, 0, 0, 0,
      0, f, 0, 0,
      0, 0, (far + near) / (near - far), -1,
      0, 0, (2 * far * near) / (near - far), 0
    ];
  }
  function lookAt(eye, center, up) {
    const z = vecNorm(vecSub(eye, center));
    const x = vecNorm(vecCross(up, z));
    const y = vecCross(z, x);
    return [
      x[0], y[0], z[0], 0,
      x[1], y[1], z[1], 0,
      x[2], y[2], z[2], 0,
      -vecDot(x, eye), -vecDot(y, eye), -vecDot(z, eye), 1
    ];
  }
  function normalOf(pts) {
    const a = vecSub(pts[1], pts[0]);
    const b = vecSub(pts[2], pts[0]);
    return vecNorm(vecCross(a, b));
  }

  // ---- three fully different worlds ------------------------------------------
  const WORLD_DEFS = Object.freeze({
    // Warm architect's studio: soft daylight, paper dust, pale parchment grid.
    paper: Object.freeze({
      sky: ['#EFE6D2', '#F6EBD4', '#D9C7A2'],
      fog: '#E9DCBE', fogNear: 55, fogFar: 165, fogMax: 0.82,
      sun: '#FFD89A', sunGlow: '#FFE7BA', sunRadius: 0.125, sunBands: false,
      horizon: '#C8B28A', mountain: '#C9B998', mountain2: '#D8C7A6',
      grid: '#8E7B5A', gridAlpha: 0.30, gridStep: 8,
      platform: '#E8D8B6', platformEdge: '#A98D5F', platformGlow: '#FFF2CE',
      monolith: '#CEBC9B', shadow: '#5A4C37',
      ambient: 0.70, lightColor: '#FFF4D8', light: [-0.42, 0.86, 0.55], spec: 0.32, shininess: 22,
      rim: '#FFF8E6', ink: '#2A2520', accent: '#D5472F', accent2: '#E3A33B',
      stars: 0, starColor: '#FFFFFF', scanlines: false, vignette: 0.30,
      grain: 0.020, bloom: 0.55, label: 'PAPER STUDIO'
    }),
    // Sunset Stack '94: neon synthwave void, banded sun, magenta grid, heavy bloom.
    sunset: Object.freeze({
      sky: ['#1B0838', '#5A1268', '#FF6B35'],
      fog: '#3A1057', fogNear: 48, fogFar: 150, fogMax: 0.86,
      sun: '#FFC53D', sunGlow: '#FF4E9B', sunRadius: 0.24, sunBands: true,
      horizon: '#FF6B35', mountain: '#2A0D52', mountain2: '#43106B',
      grid: '#FF47B8', gridAlpha: 0.55, gridStep: 8,
      platform: '#2A0D4E', platformEdge: '#2EC4B6', platformGlow: '#FF5AC8',
      monolith: '#361063', shadow: '#150829',
      ambient: 0.44, lightColor: '#FFC6F0', light: [-0.55, 0.72, 0.62], spec: 0.60, shininess: 34,
      rim: '#2EC4B6', ink: '#170B33', accent: '#FF5964', accent2: '#FFC53D',
      stars: 90, starColor: '#FFE9FB', scanlines: true, vignette: 0.48,
      grain: 0.045, bloom: 1.0, label: 'SUNSET WIREFRAME'
    }),
    // Prime Time: deep-blue TV studio, gold trim, spotlights, glossy floor.
    primetime: Object.freeze({
      sky: ['#061238', '#0A1A55', '#2B57B8'],
      fog: '#0B1D5C', fogNear: 52, fogFar: 160, fogMax: 0.84,
      sun: '#FFC83D', sunGlow: '#35D0E8', sunRadius: 0.13, sunBands: false,
      horizon: '#1B3CAA', mountain: '#081548', mountain2: '#0F2A78',
      grid: '#FFC83D', gridAlpha: 0.38, gridStep: 8,
      platform: '#10246E', platformEdge: '#FFC83D', platformGlow: '#35D0E8',
      monolith: '#0C1C5C', shadow: '#030B2A',
      ambient: 0.52, lightColor: '#FFF4CE', light: [0.38, 0.88, 0.52], spec: 0.72, shininess: 42,
      rim: '#FFFFFF', ink: '#061238', accent: '#E5322D', accent2: '#FFC83D',
      stars: 46, starColor: '#DCE8FF', scanlines: true, vignette: 0.42,
      grain: 0.028, bloom: 0.85, label: 'PRIME TIME STUDIO'
    })
  });

  function worldFor(name) {
    const def = WORLD_DEFS[name] || WORLD_DEFS.paper;
    return {
      key: WORLD_DEFS[name] ? name : 'paper', def,
      sky: def.sky.map(hex => parseColor(hex)),
      fog: parseColor(def.fog), sun: parseColor(def.sun), sunGlow: parseColor(def.sunGlow),
      horizon: parseColor(def.horizon), mountain: parseColor(def.mountain), mountain2: parseColor(def.mountain2),
      grid: parseColor(def.grid), platform: parseColor(def.platform), platformEdge: parseColor(def.platformEdge),
      platformGlow: parseColor(def.platformGlow), monolith: parseColor(def.monolith),
      shadow: parseColor(def.shadow), lightColor: parseColor(def.lightColor), light: vecNorm(def.light),
      rim: parseColor(def.rim), ink: parseColor(def.ink), accent: parseColor(def.accent),
      accent2: parseColor(def.accent2), starColor: parseColor(def.starColor)
    };
  }

  // ---- demo towers (title attract mode) ---------------------------------------
  const DEMO_PALETTE = ['#E3A33B', '#2F8478', '#7FA6BD', '#D5472F'];
  function demoGame() {
    const stack = [{ left: 20, right: 340, level: 0, color: '#2F8478', perfect: false }];
    const widths = [292, 268, 243, 218, 196, 174, 150, 128];
    widths.forEach((width, index) => {
      const wobble = Math.sin(index * 1.7) * 13;
      const left = clamp(180 - width / 2 + wobble, 2, 360 - width);
      stack.push({ left, right: left + width, level: index + 1, color: DEMO_PALETTE[(index + 1) % 4], perfect: index % 3 === 1 });
    });
    const top = stack[stack.length - 1];
    const width = top.right - top.left;
    return {
      demo: 'orbit', phase: 'playing', elapsed: 0, stack,
      moving: { left: 0, width, level: stack.length, color: '#E3A33B', direction: 1 },
      fallingActors: [], activeEffect: null, perfectTime: 0, toastTime: 0,
      collapseShake: 0, collapsingLevels: [], collapseLevel: null
    };
  }
  function resultGame(result) {
    const blocks = Array.isArray(result && result.blocks) ? result.blocks : [];
    const collapsed = new Set((Array.isArray(result && result.collapsedBlocks) ? result.collapsedBlocks : []).map(b => b.level));
    const stack = blocks.filter(b => !collapsed.has(b.level)).map(b => ({
      left: b.left, right: b.right, level: b.level, color: b.color || '#2F8478', perfect: Boolean(b.perfect)
    }));
    if (!stack.length) stack.push({ left: 20, right: 340, level: 0, color: '#2F8478', perfect: false });
    return {
      demo: 'result', phase: 'result', elapsed: 0, stack, moving: null, fallingActors: [],
      activeEffect: null, perfectTime: 0, toastTime: 0, collapseShake: 0,
      collapsingLevels: [], collapseLevel: null, collapsed: Boolean(result && result.collapsed),
      newBest: Boolean(result && result.newBest)
    };
  }

  // ---- renderer ---------------------------------------------------------------
  class Renderer {
    constructor(canvas, options) {
      this.canvas = canvas || null;
      this.ctx = canvas && typeof canvas.getContext === 'function' ? canvas.getContext('2d') : null;
      this.options = options || {};
      this.mode = this.options.mode || 'game';
      this.world = worldFor(this.options.theme || 'paper');
      this.w = 360; this.h = 520; this.dpr = 1;
      this.time = 0; this.frame = 0;
      this.baseYaw = this.mode === 'game' ? -0.42 : -0.55;
      this.basePitch = 0.235;
      this.cam = {
        yaw: this.baseYaw, pitch: this.basePitch, dist: 66,
        targetY: 9.5, roll: 0, shakeX: 0, shakeY: 0, fov: FOV
      };
      this.user = { yaw: 0, pitch: 0, dolly: 0, parallaxX: 0, parallaxY: 0 };
      this.freeCam = false;
      this.autoOrbit = true;
      this.particles = [];
      this.rings = [];
      this.punch = 0;
      this.prev = { height: -1, perfect: 0, phase: '', effect: '' };
      this.stats = { faces: 0, particles: 0 };
      const random = rng(1337);
      this.stars = Array.from({ length: 120 }, () => ({ x: random(), y: random() * 0.62, r: 0.4 + random() * 1.3, phase: random() * TAU }));
      this.motes = Array.from({ length: 46 }, () => ({
        x: (random() - 0.5) * 90, y: random() * 46 + 2, z: (random() - 0.5) * 90,
        r: 0.6 + random() * 1.5, phase: random() * TAU, speed: 0.15 + random() * 0.5
      }));
      this.monoliths = Array.from({ length: 14 }, (_, index) => {
        const angle = (index / 14) * TAU + random() * 0.3;
        const radius = 42 + random() * 52;
        return { x: Math.sin(angle) * radius, z: Math.cos(angle) * radius, w: 3 + random() * 7, h: 5 + random() * 17, d: 3 + random() * 8 };
      });
    }

    get available() { return Boolean(this.ctx); }
    setTheme(name) { this.world = worldFor(name); }
    setReducedMotion() { /* read from the snapshot every frame */ }
    resetView() {
      this.user.yaw = 0; this.user.pitch = 0; this.user.dolly = 0;
      this.user.parallaxX = 0; this.user.parallaxY = 0;
    }
    setFreeCam(on) { this.freeCam = Boolean(on); }
    setAutoOrbit(on) { this.autoOrbit = Boolean(on); }
    orbit(dx, dy) {
      this.user.yaw = clamp(this.user.yaw + dx * 0.006, -2.4, 2.4);
      this.user.pitch = clamp(this.user.pitch - dy * 0.004, -0.55, 0.75);
    }
    dolly(delta) { this.user.dolly = clamp(this.user.dolly + delta, -28, 42); }
    parallax(nx, ny) { this.user.parallaxX = clamp(nx, -1, 1); this.user.parallaxY = clamp(ny, -1, 1); }

    // ---- public: fire a one-shot burst (also detected automatically) ----------
    burst(kind, data) {
      const o = data || {};
      const world = this.world;
      const colour = o.color ? parseColor(o.color) : (kind === 'perfect' ? world.accent2 : kind === 'collapse' ? world.accent : world.rim);
      const count = kind === 'perfect' ? 30 : kind === 'collapse' ? 46 : kind === 'vote' ? 16 : 12;
      const cy = (Number(o.y) || 0);
      const cx = (Number(o.x) || 0);
      const cz = (Number(o.z) || 0);
      const rand = rng((this.frame * 977 + count * 31) | 0);
      for (let i = 0; i < count && this.particles.length < MAX_PARTICLES; i += 1) {
        const angle = rand() * TAU;
        const speed = 3 + rand() * (kind === 'collapse' ? 17 : 11);
        this.particles.push({
          x: cx + (rand() - 0.5) * 4, y: cy + rand() * 1.6, z: cz + (rand() - 0.5) * DEPTH,
          vx: Math.cos(angle) * speed, vy: 3 + rand() * (kind === 'perfect' ? 14 : 9),
          vz: Math.sin(angle) * speed * 0.7,
          life: 0, max: 0.55 + rand() * 0.9, size: 0.4 + rand() * 1.3,
          color: i % 4 === 0 ? world.rim : colour, glow: kind !== 'collapse'
        });
      }
      if (kind === 'perfect' || kind === 'collapse') {
        this.rings.push({ x: cx, y: cy, z: cz, life: 0, max: kind === 'collapse' ? 1.1 : 0.8, radius: kind === 'collapse' ? 22 : 13, color: colour });
        this.punch = kind === 'perfect' ? 1 : -0.7;
      }
    }

    // ---- main entry -------------------------------------------------------------
    render(snapshot) {
      if (!this.ctx) return;
      const s = snapshot || {};
      const ctx = this.ctx;
      const dt = clamp(Number(s.dt) || 0, 0, 0.05);
      const reduced = Boolean(s.reducedMotion);
      const world = this.world;
      this.time += dt;
      this.frame += 1;
      if (s.theme && s.theme !== world.key) this.world = worldFor(s.theme);
      const W = this.world;

      this.resize();
      const w = this.w, h = this.h;
      const game = s.game || null;
      const stack = game && Array.isArray(game.stack) ? game.stack : [];
      const effect = game && game.activeEffect ? game.activeEffect : null;
      const effectId = effect && effect.id ? String(effect.id) : '';
      const effectElapsed = Number(effect && effect.elapsed) || 0;
      const topY = Math.max(BLOCK, stack.length * BLOCK);

      // Detect game events without the client having to know about the 3D layer.
      const height = stack.length;
      if (this.prev.height >= 0 && height > this.prev.height && this.mode === 'game') {
        const b = stack[stack.length - 1] || {};
        this.burst('drop', { x: worldX((Number(b.left) + Number(b.right)) / 2 || 180), y: (height - 1) * BLOCK, color: b.color });
      }
      const perfectTime = Number(game && game.perfectTime) || 0;
      if (perfectTime > 0 && this.prev.perfect <= 0 && this.mode === 'game') {
        const b = stack[stack.length - 1] || {};
        this.burst('perfect', { x: worldX((Number(b.left) + Number(b.right)) / 2 || 180), y: (height - 1) * BLOCK });
      }
      const phase = String(game && game.phase || '');
      if (phase === 'collapse' && this.prev.phase !== 'collapse' && this.mode === 'game') {
        this.burst('collapse', { y: Math.max(0, topY - 10) });
      }
      if (effectId && effectId !== this.prev.effect && this.mode === 'game') {
        this.burst('vote', { y: topY + 3, color: W.def.accent2 });
      }
      this.prev.height = height; this.prev.perfect = perfectTime;
      this.prev.phase = phase; this.prev.effect = effectId;

      // ---- camera -------------------------------------------------------------
      const showcase = this.mode !== 'game';
      const collapse = phase === 'collapse';
      let targetY = Math.max(9.5, topY - 9);
      if (collapse) targetY -= 3;
      if (showcase) targetY = Math.max(8, topY * 0.48);
      this.punch *= Math.exp(-dt * 3.2);
      let dist = (showcase ? 58 : 66) + this.user.dolly - (reduced ? 0 : this.punch * 3.5);
      if (collapse) dist += 10 * (1 - clamp(Number(game && game.collapseClock) || 0, 0, 1.1) / 1.1);
      if (effectId === 'zoom') dist *= 0.74;
      if (showcase) dist += Math.max(0, topY - 18) * 0.42;

      const autoYaw = (reduced || !this.autoOrbit) ? 0 : (showcase ? Math.sin(this.time * 0.22) * 0.55 + this.time * 0.055 : Math.sin(this.time * 0.19) * 0.115);
      let yaw = this.baseYaw + this.user.yaw + autoYaw + (reduced ? 0 : this.user.parallaxX * 0.12);
      let pitch = clamp(this.basePitch + this.user.pitch - (reduced ? 0 : this.user.parallaxY * 0.06), -0.04, 0.72);
      let roll = 0;
      if (!reduced) {
        if (effectId === 'drunk') { roll = Math.sin(this.time * 2.4) * 0.075; yaw += Math.sin(this.time * 1.6) * 0.09; }
        if (effectId === 'earthquake') { yaw += Math.sin(effectElapsed * 41) * 0.012; pitch += Math.cos(effectElapsed * 33) * 0.009; }
        if (collapse) roll += Math.sin(this.time * 26) * 0.02;
      }
      let shakeX = 0, shakeY = 0;
      if (!reduced && collapse && Number(game && game.collapseShake) > 0) {
        const power = clamp(Number(game.collapseShake) / 0.62, 0, 1);
        shakeX = Math.sin(this.time * 71) * 0.7 * power;
        shakeY = Math.cos(this.time * 93) * 0.45 * power;
      }
      if (!reduced && effectId === 'earthquake') {
        shakeX += Math.sin(effectElapsed * 63) * 0.45;
        shakeY += Math.cos(effectElapsed * 77) * 0.3;
      }
      this.cam.targetY = ease(this.cam.targetY, targetY, dt, showcase ? 0.9 : 0.28);
      this.cam.dist = ease(this.cam.dist, dist, dt, 0.3);
      this.cam.roll = ease(this.cam.roll, roll, dt, 0.16);
      const ty = this.cam.targetY + shakeY;
      const eye = [
        Math.sin(yaw) * Math.cos(pitch) * this.cam.dist + shakeX,
        ty + Math.sin(pitch) * this.cam.dist,
        Math.cos(yaw) * Math.cos(pitch) * this.cam.dist
      ];
      const center = [shakeX * 0.4, ty, 0];
      const up = [Math.sin(this.cam.roll), Math.cos(this.cam.roll), 0];
      const view = lookAt(eye, center, up);
      const proj = perspective(FOV, w / Math.max(1, h), NEAR, FAR);
      const vp = matMul(proj, view);
      this.cam.yaw = yaw; this.cam.pitch = pitch; this.cam.eye = eye;

      // ---- projection helpers bound to this frame ------------------------------
      const projectPoly = pts => {
        const clip = pts.map(p => matTransform(vp, p));
        const out = [];
        for (let i = 0; i < clip.length; i += 1) {
          const a = clip[i], b = clip[(i + 1) % clip.length];
          const ina = a[3] >= NEAR, inb = b[3] >= NEAR;
          if (ina) out.push(a);
          if (ina !== inb) {
            const t = (NEAR - a[3]) / (b[3] - a[3]);
            out.push([lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t), NEAR]);
          }
        }
        if (out.length < 3) return null;
        let depth = 0;
        const screen = out.map(c => {
          depth += c[3];
          return [w * 0.5 + (c[0] / c[3]) * w * 0.5, h * 0.5 - (c[1] / c[3]) * h * 0.5];
        });
        return { screen, depth: depth / out.length };
      };
      const projectPoint = p => {
        const c = matTransform(vp, p);
        if (c[3] < NEAR) return null;
        return { x: w * 0.5 + (c[0] / c[3]) * w * 0.5, y: h * 0.5 - (c[1] / c[3]) * h * 0.5, depth: c[3] };
      };
      const line3D = (a, b) => {
        const ca = matTransform(vp, a), cb = matTransform(vp, b);
        if (ca[3] < NEAR && cb[3] < NEAR) return null;
        if (ca[3] < NEAR) { const t = (NEAR - ca[3]) / (cb[3] - ca[3]); ca[0] = lerp(ca[0], cb[0], t); ca[1] = lerp(ca[1], cb[1], t); ca[2] = lerp(ca[2], cb[2], t); ca[3] = NEAR; }
        if (cb[3] < NEAR) { const t = (NEAR - cb[3]) / (ca[3] - cb[3]); cb[0] = lerp(cb[0], ca[0], t); cb[1] = lerp(cb[1], ca[1], t); cb[2] = lerp(cb[2], ca[2], t); cb[3] = NEAR; }
        return {
          a: [w * 0.5 + (ca[0] / ca[3]) * w * 0.5, h * 0.5 - (ca[1] / ca[3]) * h * 0.5],
          b: [w * 0.5 + (cb[0] / cb[3]) * w * 0.5, h * 0.5 - (cb[1] / cb[3]) * h * 0.5],
          depth: (ca[3] + cb[3]) / 2
        };
      };

      const items = [];
      const eyeVec = [eye[0], eye[1], eye[2]];
      const lightColor = W.lightColor;
      const white = [255, 255, 255];
      const mapColor = typeof s.mapColor === 'function' ? s.mapColor : (c => c);

      function litColor(base, pts, opts) {
        const n = normalOf(pts);
        const centroid = pts.reduce((acc, p) => [acc[0] + p[0], acc[1] + p[1], acc[2] + p[2]], [0, 0, 0]).map(v => v / pts.length);
        const viewDir = vecNorm(vecSub(eyeVec, centroid));
        const diffuse = Math.max(0, vecDot(n, W.light));
        let brightness = W.def.ambient + (1 - W.def.ambient) * diffuse;
        if (n[1] > 0.6) brightness += 0.10;
        if (n[2] < -0.6) brightness *= 0.86;
        const half = vecNorm([W.light[0] + viewDir[0], W.light[1] + viewDir[1], W.light[2] + viewDir[2]]);
        const spec = Math.pow(Math.max(0, vecDot(n, half)), W.def.shininess) * W.def.spec;
        let color = mixed(scaled(base, brightness), lightColor, 0.06 * diffuse);
        if (spec > 0.002) color = mixed(color, white, clamp(spec, 0, 0.72));
        if (opts && opts.tint) color = mixed(color, opts.tint, opts.tintAmount || 0.3);
        return color;
      }
      function pushPoly(pts, base, opts) {
        const o = opts || {};
        if (!o.doubleSided) {
          const n = normalOf(pts);
          const centroid = pts.reduce((acc, p) => [acc[0] + p[0], acc[1] + p[1], acc[2] + p[2]], [0, 0, 0]).map(v => v / pts.length);
          if (vecDot(n, vecSub(eyeVec, centroid)) <= 0) return;
        }
        const projected = projectPoly(pts);
        if (!projected) return;
        let color = o.flat ? base : litColor(base, pts, o);
        const fogAmount = clamp((projected.depth - W.def.fogNear) / (W.def.fogFar - W.def.fogNear), 0, 1) * W.def.fogMax;
        color = mixed(color, W.fog, fogAmount);
        items.push({
          t: 'poly', d: projected.depth, pts: projected.screen,
          alpha: o.alpha == null ? 1 : o.alpha,
          fill: css(color, o.alpha == null ? 1 : o.alpha),
          stroke: o.stroke == null ? css(mixed(color, W.ink, 0.42), 0.55) : o.stroke,
          width: o.lineWidth == null ? 0.7 : o.lineWidth,
          top: Boolean(o.top), blend: o.additive ? 'lighter' : null
        });
      }
      function pushLine(a, b, color, alpha, width, glow) {
        const projected = line3D(a, b);
        if (!projected) return;
        items.push({ t: 'line', d: projected.depth, a: projected.a, b: projected.b, color: css(color, alpha), width, glow: Boolean(glow) });
      }
      function pushGlow(point, radius, color, alpha) {
        const p = projectPoint(point);
        if (!p) return;
        const r = clamp(radius * 240 / Math.max(12, p.depth), 3, 260);
        items.push({ t: 'glow', d: p.depth, x: p.x, y: p.y, r, color, alpha });
      }

      // A chamfered octagonal prism: 8 side faces, a glossy top, and rim edges.
      function addPrism(x0, x1, y0, y1, z0, z1, base, opts) {
        const o = opts || {};
        const cut = Math.min(0.42, (x1 - x0) * 0.10, (z1 - z0) * 0.24);
        const ring = [
          [x0 + cut, z0], [x1 - cut, z0], [x1, z0 + cut], [x1, z1 - cut],
          [x1 - cut, z1], [x0 + cut, z1], [x0, z1 - cut], [x0, z0 + cut]
        ];
        const lean = o.lean || 0;
        const pivotY = o.pivotY || 0;
        const spin = o.spin || 0;
        const spinCx = (x0 + x1) / 2, spinCy = (y0 + y1) / 2;
        const warp = p => {
          let x = p[0] + (p[1] - pivotY) * lean;
          let y = p[1];
          if (spin) {
            const dx = x - spinCx, dy = y - spinCy;
            x = spinCx + dx * Math.cos(spin) - dy * Math.sin(spin);
            y = spinCy + dx * Math.sin(spin) + dy * Math.cos(spin);
          }
          return [x, y, p[2]];
        };
        const bottom = ring.map(p => warp([p[0], y0, p[1]]));
        const top = ring.map(p => warp([p[0], y1, p[1]]));
        for (let i = 0; i < 8; i += 1) {
          const j = (i + 1) % 8;
          pushPoly([bottom[i], top[i], top[j], bottom[j]], base, { stroke: o.stroke, alpha: o.alpha, tint: o.tint, tintAmount: o.tintAmount, lineWidth: o.lineWidth });
        }
        pushPoly(top.slice().reverse(), base, { top: true, stroke: o.stroke, alpha: o.alpha, tint: o.tint, tintAmount: o.tintAmount });
        if (o.rim) {
          for (let i = 0; i < 8; i += 1) {
            const j = (i + 1) % 8;
            const alpha = (i === 4 || i === 3) ? 0.72 : 0.34;
            pushLine(top[i], top[j], o.rimColor || W.rim, (o.rimAlpha == null ? 1 : o.rimAlpha) * alpha, 1.1, true);
          }
          pushLine(bottom[4], top[4], o.rimColor || W.rim, 0.22 * (o.rimAlpha == null ? 1 : o.rimAlpha), 0.9, true);
        }
      }

      // ---- sky (screen space, parallax-linked to the 3D camera) ---------------
      ctx.save();
      ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
      skyGrad.addColorStop(0, css(W.sky[0]));
      skyGrad.addColorStop(0.54, css(W.sky[1]));
      skyGrad.addColorStop(1, css(W.sky[2]));
      ctx.fillStyle = skyGrad; ctx.fillRect(0, 0, w, h);
      const sunX = w * (0.70 - Math.sin(yaw) * 0.16);
      const sunY = h * (0.29 + pitch * 0.14);
      const sunR = h * W.def.sunRadius;

      if (W.def.stars) {
        for (let i = 0; i < Math.min(W.def.stars, this.stars.length); i += 1) {
          const star = this.stars[i];
          const twinkle = reduced ? 1 : 0.55 + 0.45 * Math.sin(this.time * 1.7 + star.phase);
          ctx.globalAlpha = twinkle * 0.8;
          ctx.fillStyle = css(W.starColor);
          ctx.fillRect(star.x * w, star.y * h, star.r, star.r);
        }
        ctx.globalAlpha = 1;
      }
      // Atmospheric glow behind the sun.
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      const halo = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunR * 3.6);
      halo.addColorStop(0, css(W.sunGlow, 0.40 * W.def.bloom));
      halo.addColorStop(0.35, css(W.sunGlow, 0.15 * W.def.bloom));
      halo.addColorStop(1, css(W.sunGlow, 0));
      ctx.fillStyle = halo; ctx.fillRect(0, 0, w, h);
      ctx.restore();
      // Sun / moon disc with optional synthwave bands.
      ctx.save();
      ctx.beginPath(); ctx.arc(sunX, sunY, sunR, 0, TAU); ctx.clip();
      const discGrad = ctx.createLinearGradient(0, sunY - sunR, 0, sunY + sunR);
      discGrad.addColorStop(0, css(scaled(W.sun, 1.14)));
      discGrad.addColorStop(0.55, css(W.sun));
      discGrad.addColorStop(1, css(mixed(W.sun, W.sunGlow, 0.6)));
      ctx.fillStyle = discGrad; ctx.fillRect(sunX - sunR, sunY - sunR, sunR * 2, sunR * 2);
      if (W.def.sunBands) {
        ctx.fillStyle = css(W.sky[0], 0.82);
        for (let i = 0; i < 7; i += 1) {
          const y = sunY + sunR * 0.06 + i * sunR * 0.20;
          ctx.fillRect(sunX - sunR, y, sunR * 2, Math.max(1.2, sunR * (0.025 + i * 0.012)));
        }
      }
      ctx.restore();
      // Volumetric rays.
      if (!reduced && W.def.bloom > 0.6) {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        for (let i = 0; i < 5; i += 1) {
          const a = this.time * 0.08 + i * 1.27;
          ctx.fillStyle = css(W.sunGlow, 0.028);
          ctx.beginPath();
          ctx.moveTo(sunX, sunY);
          ctx.lineTo(sunX + Math.cos(a) * w * 1.4, sunY + Math.sin(a) * h * 1.5 + h * 0.25);
          ctx.lineTo(sunX + Math.cos(a + 0.10) * w * 1.4, sunY + Math.sin(a + 0.10) * h * 1.5 + h * 0.25);
          ctx.closePath(); ctx.fill();
        }
        ctx.restore();
      }
      // Parallax silhouettes on the horizon.
      const horizonY = h * 0.635;
      const drift = -Math.sin(yaw) * w * 0.16;
      for (let layer = 0; layer < 2; layer += 1) {
        ctx.beginPath();
        ctx.moveTo(-40, h);
        const base = horizonY + layer * h * 0.045;
        for (let x = -40; x <= w + 40; x += 24) {
          const n = Math.sin((x + drift * (layer ? 0.7 : 1)) * 0.017 + layer * 2.3) * (layer ? 13 : 26)
            + Math.sin((x + drift) * 0.043 + layer) * (layer ? 6 : 11);
          ctx.lineTo(x, base - n);
        }
        ctx.lineTo(w + 40, h); ctx.closePath();
        ctx.fillStyle = css(layer ? W.mountain2 : W.mountain, layer ? 0.85 : 0.95);
        ctx.fill();
      }
      const haze = ctx.createLinearGradient(0, horizonY - h * 0.05, 0, horizonY + h * 0.18);
      haze.addColorStop(0, css(W.horizon, 0.0));
      haze.addColorStop(0.45, css(W.horizon, 0.34));
      haze.addColorStop(1, css(W.horizon, 0));
      ctx.fillStyle = haze; ctx.fillRect(0, horizonY - h * 0.05, w, h * 0.24);
      ctx.restore();

      // ---- ground: grid, platform, tower shadow --------------------------------
      ctx.save();
      ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      const drawGridLine = (a, b, alpha) => {
        const l = line3D(a, b);
        if (!l) return;
        const fade = clamp(1 - (l.depth - W.def.fogNear) / (W.def.fogFar - W.def.fogNear), 0, 1);
        ctx.strokeStyle = css(W.grid, alpha * fade * W.def.gridAlpha);
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(l.a[0], l.a[1]); ctx.lineTo(l.b[0], l.b[1]); ctx.stroke();
      };
      const R = 140;
      for (let x = -R; x <= R; x += W.def.gridStep) drawGridLine([x, 0, -R], [x, 0, R], Math.abs(x) % (W.def.gridStep * 4) === 0 ? 1 : 0.55);
      for (let z = -R; z <= R; z += W.def.gridStep) drawGridLine([-R, 0, z], [R, 0, z], Math.abs(z) % (W.def.gridStep * 4) === 0 ? 1 : 0.55);

      // Circular stage platform (a real 3D polygon on the ground plane).
      const radius = 25;
      const discPts = [];
      for (let i = 0; i < 48; i += 1) {
        const a = (i / 48) * TAU;
        discPts.push([Math.cos(a) * radius, 0.02, Math.sin(a) * radius]);
      }
      const discPoly = projectPoly(discPts);
      if (discPoly) {
        const centre = projectPoint([0, 0.02, 0]);
        if (centre) {
          const g = ctx.createRadialGradient(centre.x, centre.y, 0, centre.x, centre.y, Math.max(30, w * 0.55));
          g.addColorStop(0, css(mixed(W.platform, W.platformGlow, 0.42), 0.97));
          g.addColorStop(0.55, css(W.platform, 0.95));
          g.addColorStop(1, css(W.mountain, 0.92));
          ctx.fillStyle = g;
        } else ctx.fillStyle = css(W.platform);
        ctx.beginPath();
        discPoly.screen.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]));
        ctx.closePath(); ctx.fill();
        ctx.strokeStyle = css(W.platformEdge, 0.75); ctx.lineWidth = 1.6; ctx.stroke();
        for (let ringIndex = 1; ringIndex <= 3; ringIndex += 1) {
          const ringPts = [];
          for (let i = 0; i < 48; i += 1) {
            const a = (i / 48) * TAU;
            ringPts.push([Math.cos(a) * radius * ringIndex / 4, 0.03, Math.sin(a) * radius * ringIndex / 4]);
          }
          const rp = projectPoly(ringPts);
          if (!rp) continue;
          ctx.beginPath();
          rp.screen.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]));
          ctx.closePath();
          ctx.strokeStyle = css(W.platformEdge, 0.16 + ringIndex * 0.06); ctx.lineWidth = 1; ctx.stroke();
        }
        // Stage glow bleeding into the air above the disc.
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        const glow = ctx.createRadialGradient(centre ? centre.x : w / 2, centre ? centre.y : h * 0.78, 0, centre ? centre.x : w / 2, centre ? centre.y : h * 0.78, w * 0.55);
        glow.addColorStop(0, css(W.platformGlow, 0.20 * W.def.bloom));
        glow.addColorStop(1, css(W.platformGlow, 0));
        ctx.fillStyle = glow; ctx.fillRect(0, h * 0.35, w, h * 0.65);
        ctx.restore();
      }
      // A projected, light-skewed silhouette of the whole tower.
      const light = W.light;
      const skewX = -light[0] / Math.max(0.2, light[1]) * topY;
      const skewZ = -light[2] / Math.max(0.2, light[1]) * topY;
      const shadowPts = [
        [-HALF - 1, 0.05, -DEPTH / 2], [HALF + 1, 0.05, -DEPTH / 2],
        [HALF + 1 + skewX, 0.05, DEPTH / 2 + skewZ], [-HALF - 1 + skewX, 0.05, DEPTH / 2 + skewZ]
      ];
      const shadowPoly = projectPoly(shadowPts);
      if (shadowPoly) {
        ctx.beginPath();
        shadowPoly.screen.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]));
        ctx.closePath();
        ctx.fillStyle = css(W.shadow, 0.15); ctx.fill();
      }
      // Dark contact pads keep the distant monoliths visually planted on the ground.
      for (const m of this.monoliths) {
        const pad = [];
        for (let i = 0; i < 12; i += 1) {
          const a = (i / 12) * TAU;
          pad.push([m.x + Math.cos(a) * m.w * 0.9, 0.04, m.z + Math.sin(a) * m.d * 0.9]);
        }
        const pp = projectPoly(pad);
        if (!pp) continue;
        ctx.beginPath();
        pp.screen.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]));
        ctx.closePath();
        ctx.fillStyle = css(W.shadow, 0.30); ctx.fill();
      }
      ctx.restore();

      // ---- distant monoliths (real 3D, fog-drowned) ----------------------------
      for (const m of this.monoliths) {
        addPrism(m.x - m.w / 2, m.x + m.w / 2, 0, m.h, m.z - m.d / 2, m.z + m.d / 2, W.monolith, { stroke: null, alpha: 0.9 });
      }

      // ---- the tower ----------------------------------------------------------
      const collapsing = new Set(Array.isArray(game && game.collapsingLevels) ? game.collapsingLevels : []);
      let lean = 0;
      if (effectId === 'pisa' && !reduced) {
        const dir = Number(effect && effect.tiltDirection) < 0 ? -1 : 1;
        lean = Math.sin(effectElapsed * 1.4) * 0.075 * dir;
      }
      const cullBelow = this.cam.targetY - 34;
      for (const block of stack) {
        const level = Number(block.level) || 0;
        if (collapsing.has(level)) continue;
        const y0 = level * BLOCK, y1 = y0 + BLOCK - 0.07;
        if (y1 < cullBelow) continue;
        const base = parseColor(mapColor(block.color || '#2F8478'), [140, 160, 160]);
        const isTop = level >= stack.length - 3;
        const opts = {
          lean, pivotY: 0,
          tint: block.perfect ? W.accent2 : null,
          tintAmount: block.perfect ? 0.22 : 0,
          rim: isTop || Boolean(block.perfect),
          rimColor: block.perfect ? W.accent2 : W.rim,
          rimAlpha: block.perfect ? 0.9 : 0.5,
          stroke: null
        };
        addPrism(worldX(Number(block.left) || 0), worldX(Number(block.right) || 360), y0, y1, -DEPTH / 2, DEPTH / 2, base, opts);
        // Perfect blocks get an emissive seam on the front face.
        if (block.perfect && isTop) {
          pushLine([worldX(block.left) + 0.2, y0 + 0.35, DEPTH / 2 + 0.01],
            [worldX(block.right) - 0.2, y0 + 0.35, DEPTH / 2 + 0.01], W.accent2, 0.55, 1.4, true);
        }
      }

      // ---- falling debris (the game's own 2D actors, lifted into 3D) ----------
      const actors = Array.isArray(game && game.fallingActors) ? game.fallingActors : [];
      for (const actor of actors) {
        if (actor.collapseActor && !actor.started) continue;
        const width = (Number(actor.width) || 30) * SCALE;
        const x0 = worldX(Number(actor.x) || 0);
        const yTop = (480 - (Number(actor.y) || 0)) * SCALE;
        const base = parseColor(mapColor(actor.color || '#2F8478'), [140, 160, 160]);
        addPrism(x0, x0 + width, yTop - BLOCK, yTop, -DEPTH / 2, DEPTH / 2, base, {
          spin: Number(actor.angle) || 0, alpha: clamp(1 - (Number(actor.age) || 0) / 1.3, 0, 1),
          rim: true, rimColor: W.accent, rimAlpha: 0.4, stroke: null
        });
      }

      // ---- moving block, decoy, trails ----------------------------------------
      const moving = game && game.moving;
      if (moving && (phase === 'playing' || game.demo === 'orbit')) {
        let mx = Number(moving.left) || 0;
        let mw = Number(moving.width) || 120;
        if (game.demo === 'orbit' && !reduced) {
          mx = (Math.sin(this.time * 0.72) * 0.5 + 0.5) * (360 - mw);
        }
        if (effectId === 'slowmo' && !reduced) mw *= 1 - 0.08 * Math.min(1, effectElapsed * 2);
        let my = (Number(moving.level) || stack.length) * BLOCK;
        if (effectId === 'rollercoaster' && !reduced) my += Math.sin(effectElapsed * 7 + (Number(moving.rollerPhase) || 0) * TAU) * 1.3;
        let alpha = 1;
        if (effectId === 'peekaboo' && !reduced) alpha = clamp(0.18 + 0.82 * (0.5 + 0.5 * Math.sin(effectElapsed * 9.5)), 0.08, 1);
        const base = parseColor(mapColor(moving.color || '#E3A33B'), [220, 170, 70]);
        const x0 = worldX(mx), x1 = worldX(mx + mw);
        const z0 = -DEPTH / 2, z1 = DEPTH / 2;
        // Motion ghosts for time-bending sabotages.
        if (!reduced && (effectId === 'slowmo' || effectId === 'turbo' || effectId === 'magnet')) {
          for (let g = 3; g >= 1; g -= 1) {
            const shift = (Number(moving.direction) < 0 ? 1 : -1) * g * 0.9;
            addPrism(x0 + shift, x1 + shift, my, my + BLOCK - 0.07, z0, z1, base,
              { alpha: 0.10 / g, rim: false, stroke: null });
          }
        }
        if (effectId === 'double' && moving.decoy) {
          const d = moving.decoy;
          addPrism(worldX(Number(d.left) || 0), worldX((Number(d.left) || 0) + (Number(d.width) || mw)), my, my + BLOCK - 0.07, z0, z1,
            parseColor(mapColor(d.color || moving.color), base), { alpha: 0.42, rim: true, rimColor: W.accent, rimAlpha: 0.7, stroke: null });
        }
        const hot = effectId === 'superglue';
        addPrism(x0, x1, my, my + BLOCK - 0.07, z0, z1, base, {
          alpha, rim: true, rimColor: hot ? W.accent2 : W.rim, rimAlpha: 1,
          tint: hot ? W.accent2 : null, tintAmount: 0.28, stroke: null
        });
        pushGlow([(x0 + x1) / 2, my + BLOCK / 2, z1 + 0.6], hot ? 5.5 : 3.2, hot ? W.accent2 : W.rim, (hot ? 0.42 : 0.20) * alpha);
        // Vertical drop guide — a laser line from the mover to the stack.
        if (!reduced && phase === 'playing') {
          pushLine([(x0 + x1) / 2, my, z1 + 0.05], [(x0 + x1) / 2, my - 3.2, z1 + 0.05], W.rim, 0.20, 1, true);
        }
      }

      // ---- sabotages, rebuilt as 3D light --------------------------------------
      const below = stack[stack.length - 1] || { left: 20, right: 340, level: 0 };
      const belowY = (Number(below.level) || 0) * BLOCK + BLOCK;
      const belowCx = worldX((Number(below.left) + Number(below.right)) / 2 || 180);
      if (effectId === 'portal' && !reduced) {
        for (const side of [-1, 1]) {
          const gx = side * (HALF + 1.4);
          for (let k = 0; k < 4; k += 1) {
            const ry = topY * (0.2 + k * 0.22) + Math.sin(this.time * 2 + k) * 0.6;
            const pts = [];
            for (let i = 0; i < 24; i += 1) {
              const a = (i / 24) * TAU;
              pts.push([gx, ry + Math.sin(a) * 2.2, Math.cos(a) * 3.6]);
            }
            for (let i = 0; i < pts.length; i += 1) pushLine(pts[i], pts[(i + 1) % pts.length], W.rim, 0.18 + k * 0.07, 1.3, true);
          }
          pushGlow([gx, topY * 0.6, 0], 5, W.accent2, 0.22);
        }
      }
      if (effectId === 'magnet' && moving && !reduced) {
        const mx = worldX((Number(moving.left) || 0) + (Number(moving.width) || 0) / 2);
        for (let arc = 0; arc < 3; arc += 1) {
          const steps = 10;
          let prev = null;
          for (let i = 0; i <= steps; i += 1) {
            const t = i / steps;
            const p = [lerp(mx, belowCx, t), myPos(moving, stack) - Math.sin(t * Math.PI) * (1.4 + arc * 0.55) - arc * 0.35, DEPTH / 2 + 0.3 + arc * 0.4];
            if (prev) pushLine(prev, p, W.rim, 0.48 - arc * 0.12, 1.5, true);
            prev = p;
          }
        }
      }
      if (effectId === 'calipers' && moving) {
        for (const edge of [below.left, below.right]) {
          const x = worldX(Number(edge) || 0);
          pushLine([x, belowY, DEPTH / 2 + 0.2], [x, belowY + 9, DEPTH / 2 + 0.2], W.accent2, 0.55, 1.2, true);
        }
      }
      if (effectId === 'superglue' && !reduced) {
        for (let i = 0; i < 5; i += 1) {
          const x = belowCx + (i - 2) * 1.3;
          pushLine([x, belowY, DEPTH / 2], [x + Math.sin(this.time * 3 + i) * 0.3, belowY + 1.8, DEPTH / 2 + 0.2], W.accent2, 0.4, 1.1, true);
        }
      }
      if (effectId === 'crumble' && !reduced) {
        const bx0 = worldX(below.left), bx1 = worldX(below.right);
        for (let i = 0; i < 4; i += 1) {
          const x = lerp(bx0, bx1, (i + 0.5) / 4);
          pushLine([x, belowY - 1.5, DEPTH / 2 + 0.02], [x + (i % 2 ? 0.7 : -0.7), belowY - 0.2, DEPTH / 2 + 0.02], W.ink, 0.5, 1.4, false);
        }
      }
      if (effectId === 'spotlight' && !reduced) {
        const side = Number(effect && effect.spotlightSide) < 0 ? -1 : 1;
        const beamX = worldX(side < 0 ? Number(below.left) + 7 : Number(below.right) - 7);
        const apex = [beamX, topY + 34, 4];
        for (let i = 0; i < 12; i += 1) {
          const a = (i / 12) * TAU;
          pushLine(apex, [beamX + Math.cos(a) * 4.5, belowY, Math.sin(a) * 3.2 + DEPTH / 2], W.accent2, 0.055, 1, true);
        }
        pushGlow([beamX, belowY + 1, DEPTH / 2], 6, W.accent2, 0.42);
      }
      if (effectId === 'accordion' && moving && !reduced) {
        pushGlow([worldX((Number(moving.left) || 0) + (Number(moving.width) || 0) / 2), myPos(moving, stack), DEPTH / 2], 2.6, W.accent2, 0.18);
      }

      // ---- holographic staging: orbit rings, floating shards, height ruler -----
      if (!reduced && topY > 3) {
        for (let ringIndex = 0; ringIndex < 3; ringIndex += 1) {
          const ry = topY * (0.28 + ringIndex * 0.24) + 1.2;
          const radius = 20.5 + ringIndex * 2.4 + Math.sin(this.time * 0.7 + ringIndex) * 0.5;
          const pts = [];
          for (let i = 0; i < 40; i += 1) {
            const a = (i / 40) * TAU + this.time * (ringIndex % 2 ? -0.13 : 0.16);
            pts.push([Math.cos(a) * radius, ry + Math.sin(this.time * 0.9 + ringIndex * 2) * 0.4, Math.sin(a) * radius * 0.72]);
          }
          for (let i = 0; i < pts.length; i += 1) {
            pushLine(pts[i], pts[(i + 1) % pts.length], ringIndex === 1 ? W.accent2 : W.rim, 0.085 + ringIndex * 0.025, 1, true);
          }
        }
        // Five little light shards orbit the tower on independent clocks.
        for (let i = 0; i < 5; i += 1) {
          const a = this.time * 0.3 + i * TAU / 5;
          const radius = 22 + (i % 2) * 3.5;
          const y = 3 + (topY + 4) * ((i * 0.23 + this.time * 0.045) % 1);
          const cx = Math.cos(a) * radius, cz = Math.sin(a) * radius * 0.8;
          const spin = this.time * 0.9 + i;
          addPrism(cx - 0.55, cx + 0.55, y, y + 1.15, cz - 0.55, cz + 0.55, i % 2 ? W.accent2 : W.rim,
            { alpha: 0.55, spin, rim: true, rimColor: W.rim, rimAlpha: 0.6, stroke: null });
        }
        // A vertical survey ruler on the left edge of the stage.
        const rx = -HALF - 3.2;
        pushLine([rx, 0, DEPTH / 2], [rx, Math.min(topY + 5, 78), DEPTH / 2], W.rim, 0.16, 1, true);
        for (let level = 5; level <= stack.length; level += 5) {
          const y = level * BLOCK;
          pushLine([rx, y, DEPTH / 2], [rx + 1.7, y, DEPTH / 2], W.accent2, 0.42, 1.2, true);
        }
      }
      // Prime Time studio beams from the lighting rig overhead.
      if (W.key === 'primetime' && !reduced) {
        for (let i = 0; i < 3; i += 1) {
          const bx = (i - 1) * 13;
          const apex = [bx, topY + 26, -7];
          for (let k = 0; k < 10; k += 1) {
            const a = (k / 10) * TAU;
            pushLine(apex, [bx + Math.cos(a) * 7, 0.1, 2 + Math.sin(a) * 5], W.accent2, 0.045, 1, true);
          }
          pushGlow(apex, 3.6, W.accent2, 0.16);
        }
      }
      // Landing guide: a luminous footprint on the top face of the stack so a
      // 3D camera never makes alignment a guessing game.
      if (moving && phase === 'playing' && stack.length) {
        const gy = (Number(below.level) || 0) * BLOCK + BLOCK + 0.03;
        const gx0 = worldX(Number(moving.left) || 0);
        const gx1 = worldX((Number(moving.left) || 0) + (Number(moving.width) || 0));
        const zf = -DEPTH / 2, zb = DEPTH / 2;
        const corners = [[gx0, gy, zf], [gx1, gy, zf], [gx1, gy, zb], [gx0, gy, zb]];
        for (let i = 0; i < 4; i += 1) pushLine(corners[i], corners[(i + 1) % 4], W.rim, 0.46, 1.4, true);
        pushLine([belowCx, gy, zb], [belowCx, gy + 1.1, zb], W.accent2, 0.55, 1.3, true);
      }

      // ---- ambient motes + event particles ------------------------------------
      const particleItems = [];
      for (const mote of this.motes) {
        const y = mote.y + (reduced ? 0 : Math.sin(this.time * mote.speed + mote.phase) * 1.4);
        const x = mote.x + (reduced ? 0 : Math.sin(this.time * 0.18 + mote.phase) * 2.5);
        const p = projectPoint([x, y, mote.z]);
        if (!p || p.depth > 190) continue;
        particleItems.push({ x: p.x, y: p.y, r: clamp(mote.r * 190 / p.depth, 0.6, 5), color: W.rim, alpha: 0.22 * clamp(1 - p.depth / 190, 0, 1), d: p.depth });
      }
      const rand = rng((this.frame * 7919) | 0);
      for (const p of this.particles) {
        p.life += dt;
        if (p.life >= p.max) continue;
        p.vy -= 26 * dt;
        p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
        const projected = projectPoint([p.x, Math.max(0.05, p.y), p.z]);
        if (!projected) continue;
        particleItems.push({
          x: projected.x, y: projected.y, r: clamp(p.size * 260 / Math.max(12, projected.depth), 0.9, 14),
          color: p.color, alpha: clamp(1 - p.life / p.max, 0, 1) * (p.glow ? 0.85 : 0.6), d: projected.depth
        });
      }
      this.particles = this.particles.filter(p => p.life < p.max).slice(-MAX_PARTICLES);
      for (const ring of this.rings) ring.life += dt;
      this.rings = this.rings.filter(r => r.life < r.max);

      // ---- paint sorted primitives ---------------------------------------------
      items.sort((a, b) => b.d - a.d);
      particleItems.sort((a, b) => b.d - a.d);
      ctx.save();
      ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      ctx.lineJoin = 'round'; ctx.lineCap = 'round';
      let pi = 0;
      const useSheen = items.length <= 620; // keep tall towers cheap on modest GPUs
      for (const item of items) {
        // Interleave particles by depth so sparks can pass behind the tower.
        while (pi < particleItems.length && particleItems[pi].d > item.d) {
          this.paintParticle(ctx, particleItems[pi]); pi += 1;
        }
        if (item.t === 'poly') {
          ctx.globalAlpha = 1;
          if (item.blend) ctx.globalCompositeOperation = item.blend;
          ctx.beginPath();
          item.pts.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]));
          ctx.closePath();
          let minY = Infinity, maxY = -Infinity;
          for (const p of item.pts) { if (p[1] < minY) minY = p[1]; if (p[1] > maxY) maxY = p[1]; }
          if (useSheen && maxY - minY > 1.4 && maxY - minY < h) {
            const base = parseColor(item.fill);
            const lift = item.top ? 0.20 : 0.09;
            const g = ctx.createLinearGradient(0, minY, 0, maxY);
            g.addColorStop(0, css(mixed(base, [255, 255, 255], lift), item.alpha));
            g.addColorStop(1, css(mixed(base, W.ink, item.top ? 0.05 : 0.17), item.alpha));
            ctx.fillStyle = g;
          } else ctx.fillStyle = item.fill;
          ctx.fill();
          if (item.stroke) { ctx.strokeStyle = item.stroke; ctx.lineWidth = item.width; ctx.stroke(); }
          if (item.blend) ctx.globalCompositeOperation = 'source-over';
        } else if (item.t === 'line') {
          if (item.glow) ctx.globalCompositeOperation = 'lighter';
          ctx.strokeStyle = item.color; ctx.lineWidth = item.width;
          ctx.beginPath(); ctx.moveTo(item.a[0], item.a[1]); ctx.lineTo(item.b[0], item.b[1]); ctx.stroke();
          ctx.globalCompositeOperation = 'source-over';
        } else if (item.t === 'glow') {
          ctx.save(); ctx.globalCompositeOperation = 'lighter';
          const g = ctx.createRadialGradient(item.x, item.y, 0, item.x, item.y, item.r);
          g.addColorStop(0, css(item.color, item.alpha));
          g.addColorStop(0.4, css(item.color, item.alpha * 0.4));
          g.addColorStop(1, css(item.color, 0));
          ctx.fillStyle = g; ctx.fillRect(item.x - item.r, item.y - item.r, item.r * 2, item.r * 2);
          ctx.restore();
        }
      }
      while (pi < particleItems.length) { this.paintParticle(ctx, particleItems[pi]); pi += 1; }
      ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';

      // Expanding shock rings on the platform (a 3D ellipse on y = 0).
      for (const ring of this.rings) {
        const t = ring.life / ring.max;
        const radius = ring.radius * t;
        const pts = [];
        for (let i = 0; i < 36; i += 1) {
          const a = (i / 36) * TAU;
          pts.push([ring.x + Math.cos(a) * radius, 0.06, ring.z + Math.sin(a) * radius * 0.55]);
        }
        const rp = projectPoly(pts);
        if (!rp) continue;
        ctx.save(); ctx.globalCompositeOperation = 'lighter';
        ctx.beginPath();
        rp.screen.forEach((p, i) => i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]));
        ctx.closePath();
        ctx.strokeStyle = css(ring.color, (1 - t) * 0.8); ctx.lineWidth = 2.2 * (1 - t) + 0.6; ctx.stroke();
        ctx.restore();
      }
      this.stats.faces = items.length; this.stats.particles = particleItems.length;
      ctx.restore();

      // ---- cinematic post pass -------------------------------------------------
      this.post(ctx, {
        w, h, W, reduced, effectId, effectElapsed, phase, game, sunX, sunY, yaw,
        collapse: collapse, shake: Math.abs(shakeX) + Math.abs(shakeY),
        topPoint: projectPoint([belowCx, belowY, DEPTH / 2])
      });
    }

    paintParticle(ctx, p) {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, Math.max(1, p.r * 2.2));
      g.addColorStop(0, css(p.color, p.alpha));
      g.addColorStop(0.35, css(p.color, p.alpha * 0.5));
      g.addColorStop(1, css(p.color, 0));
      ctx.fillStyle = g;
      ctx.fillRect(p.x - p.r * 2.2, p.y - p.r * 2.2, p.r * 4.4, p.r * 4.4);
      ctx.restore();
    }

    post(ctx, o) {
      const { w, h, W, reduced, effectId, phase, collapse, shake } = o;
      ctx.save();
      ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

      // Spotlight: an honest blackout veil with a real cone of light painted in 3D.
      if (effectId === 'spotlight' && o.topPoint) {
        const beam = o.topPoint;
        const r = Math.max(52, w * 0.23);
        const veil = ctx.createRadialGradient(beam.x, beam.y, r * 0.24, beam.x, beam.y, r * 1.9);
        veil.addColorStop(0, css(W.ink, 0.02));
        veil.addColorStop(0.35, css(W.ink, 0.30));
        veil.addColorStop(1, css(W.ink, 0.94));
        ctx.fillStyle = veil; ctx.fillRect(0, 0, w, h);
        ctx.save(); ctx.globalCompositeOperation = 'lighter';
        const cone = ctx.createRadialGradient(beam.x, beam.y, 0, beam.x, beam.y, r);
        cone.addColorStop(0, css(W.accent2, 0.30));
        cone.addColorStop(1, css(W.accent2, 0));
        ctx.fillStyle = cone; ctx.fillRect(0, 0, w, h);
        ctx.restore();
      }
      // Turbo / earthquake speed streaks.
      if (!reduced && (effectId === 'turbo' || shake > 0.2 || effectId === 'earthquake')) {
        ctx.save(); ctx.globalCompositeOperation = 'lighter';
        const strength = effectId === 'turbo' ? 0.14 : 0.07;
        const rand = rng((this.frame * 131) | 0);
        for (let i = 0; i < 12; i += 1) {
          const x = rand() * w, y = rand() * h;
          ctx.strokeStyle = css(W.rim, strength * (0.4 + rand() * 0.6));
          ctx.lineWidth = 1 + rand();
          ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (rand() - 0.5) * 22, y + 8 + rand() * 22); ctx.stroke();
        }
        ctx.restore();
      }
      // Collapse flash and dust.
      if (collapse) {
        const power = clamp(Number(o.game && o.game.collapseShake) || 0, 0, 0.62) / 0.62;
        ctx.fillStyle = css(W.accent, power * 0.13); ctx.fillRect(0, 0, w, h);
      }
      // A brief warm lens bloom when a perfect drop lands.
      if (!reduced && this.punch > 0.02) {
        ctx.save(); ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = css(W.accent2, this.punch * 0.055); ctx.fillRect(0, 0, w, h);
        ctx.restore();
      }
      // Slow-motion chromatic bloom.
      if (!reduced && effectId === 'slowmo') {
        ctx.save(); ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = css(W.accent2, 0.035); ctx.fillRect(0, 0, w, h);
        ctx.restore();
      }
      // Chromatic edges: cheap, subtle, motion-aware.
      if (!reduced) {
        const chroma = 0.10 + (shake || 0) * 0.16;
        ctx.save(); ctx.globalCompositeOperation = 'lighter';
        const left = ctx.createLinearGradient(0, 0, w * 0.14, 0);
        left.addColorStop(0, css(W.accent, chroma)); left.addColorStop(1, css(W.accent, 0));
        ctx.fillStyle = left; ctx.fillRect(0, 0, w * 0.14, h);
        const right = ctx.createLinearGradient(w, 0, w * 0.86, 0);
        right.addColorStop(0, css(W.rim, chroma * 0.7)); right.addColorStop(1, css(W.rim, 0));
        ctx.fillStyle = right; ctx.fillRect(w * 0.86, 0, w * 0.14, h);
        ctx.restore();
      }
      // Scanlines for the neon worlds.
      if (W.def.scanlines) {
        ctx.fillStyle = css(W.ink, 0.085);
        for (let y = 0; y < h; y += 4) ctx.fillRect(0, y, w, 1);
      }
      // Vignette.
      const vig = ctx.createRadialGradient(w * 0.5, h * 0.46, Math.min(w, h) * 0.18, w * 0.5, h * 0.5, Math.max(w, h) * 0.78);
      vig.addColorStop(0, css(W.ink, 0));
      vig.addColorStop(0.72, css(W.ink, W.def.vignette * 0.35));
      vig.addColorStop(1, css(W.ink, W.def.vignette));
      ctx.fillStyle = vig; ctx.fillRect(0, 0, w, h);
      // Film grain (deterministic per frame, disabled for reduced motion).
      if (!reduced && W.def.grain > 0) {
        const rand = rng((this.frame * 104729) | 0);
        ctx.fillStyle = css(W.rim, W.def.grain);
        for (let i = 0; i < 46; i += 1) ctx.fillRect(rand() * w, rand() * h, 1.4, 1.4);
      }
      // Framing marks + technical readout: a little cinematic UI baked into the render.
      ctx.strokeStyle = css(W.rim, 0.20); ctx.lineWidth = 1;
      const pad = 9, len = 13;
      ctx.beginPath();
      ctx.moveTo(pad, pad + len); ctx.lineTo(pad, pad); ctx.lineTo(pad + len, pad);
      ctx.moveTo(w - pad - len, pad); ctx.lineTo(w - pad, pad); ctx.lineTo(w - pad, pad + len);
      ctx.moveTo(pad, h - pad - len); ctx.lineTo(pad, h - pad); ctx.lineTo(pad + len, h - pad);
      ctx.moveTo(w - pad - len, h - pad); ctx.lineTo(w - pad, h - pad); ctx.lineTo(w - pad, h - pad - len);
      ctx.stroke();
      if (w > 260 && h > 340) {
        ctx.font = '600 9px ui-monospace, "SFMono-Regular", Menlo, monospace';
        ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
        ctx.fillStyle = css(W.rim, 0.52);
        const yawDeg = Math.round(o.yaw * 180 / Math.PI);
        ctx.fillText('◆ 3D ARENA  ·  ' + W.def.label, pad + 8, h - pad - 9);
        ctx.textAlign = 'right';
        ctx.fillText('YAW ' + (yawDeg > 0 ? '+' : '') + yawDeg + '°  ·  ' + (phase === 'collapse' ? 'COLLAPSE' : effectId ? effectId.toUpperCase() : 'LIVE'), w - pad - 8, h - pad - 9);
      }
      ctx.restore();
    }

    resize() {
      if (!this.canvas) return;
      const canvas = this.canvas;
      const parent = canvas.parentElement;
      let cssW = Number(canvas.clientWidth) || 0;
      let cssH = Number(canvas.clientHeight) || 0;
      if (!cssW && parent) cssW = Number(parent.clientWidth) || 0;
      if (!cssH && parent) cssH = Number(parent.clientHeight) || 0;
      // jsdom does no layout: fall back to the logical 360x520 board so that the
      // headless pixel tests still exercise the real renderer.
      if (!cssW || !cssH) { cssW = 360; cssH = 520; }
      const ratio = (typeof window !== 'undefined' && Number(window.devicePixelRatio)) || 1;
      const dpr = clamp(ratio, 1, 2);
      const pw = Math.round(cssW * dpr), ph = Math.round(cssH * dpr);
      if (canvas.width !== pw || canvas.height !== ph) {
        try { canvas.width = pw; canvas.height = ph; } catch (_) { /* read-only canvas: keep going */ }
      }
      this.dpr = dpr; this.w = cssW; this.h = cssH;
    }
  }

  function worldX(px) { return ((Number(px) || 0) - 180) * SCALE; }
  function myPos(moving, stack) { return ((Number(moving && moving.level) || stack.length) + 0.5) * BLOCK; }

  return Object.freeze({
    VERSION: '1.0.0',
    WORLDS: WORLD_DEFS,
    create: (canvas, options) => new Renderer(canvas, options),
    Renderer, worldFor, demoGame, resultGame,
    math: Object.freeze({ matMul, matTransform, perspective, lookAt, normalOf, vecNorm, vecCross, vecDot }),
    util: Object.freeze({ parseColor, css, clamp, lerp, rng })
  });
});
