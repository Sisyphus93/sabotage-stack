// The sixteen sabotages as physical props around a tower. Everything reads the same effect state the 2D game draws from
// (id, elapsed, remaining, tiltDirection, spotlightSide, windDirection) plus the shared-core helpers; nothing here decides outcomes.
import * as THREE from 'three';
import { BLOCK_H, BLOCK_T, BLOCK_D, BOARD_W } from './blocks.js';
import { colorOf } from './world-common.js';
import { TAU, clamp, smoothstep, hexToRgb01 } from './util.js';

const levelY = level => level * BLOCK_H + BLOCK_H / 2;
const boardX = x => x - BOARD_W / 2;
const FRONT = BLOCK_D / 2 + 0.6;
const glow = (hex, k = 1.7) => { const c = colorOf(hex); return c.multiplyScalar(k); };

function additive(color, opacity = 1) {
  return new THREE.MeshBasicMaterial({ color: glow(color), transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false });
}

const dashVertex = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }';
const dashFragment = /* glsl */`varying vec2 vUv; uniform vec3 uColor; uniform float uTime, uDash, uSpeed, uOpacity;
  void main(){
    float d = fract(vUv.x * uDash - uTime * uSpeed);
    float a = smoothstep(0.0, 0.18, d) * smoothstep(0.78, 0.5, d);
    a *= smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.7, vUv.y);
    gl_FragColor = vec4(uColor, a * uOpacity);
  }`;
function dashMaterial(hex, { dash = 14, speed = 1.4, opacity = 1 } = {}) {
  return new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false,
    uniforms: { uColor: { value: glow(hex, 1.9) }, uTime: { value: 0 }, uDash: { value: dash }, uSpeed: { value: speed }, uOpacity: { value: opacity } }, vertexShader: dashVertex, fragmentShader: dashFragment });
}

// A flat ribbon that follows a polyline in the XY plane; cheap enough to rebuild every frame.
class Ribbon {
  constructor(count, width, material) {
    this.count = count; this.width = width;
    this.positions = new Float32Array(count * 6); const uv = new Float32Array(count * 4); const index = [];
    for (let i = 0; i < count; i += 1) {
      const u = i / (count - 1); uv.set([u, 0, u, 1], i * 4);
      if (i < count - 1) { const a = i * 2; index.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); geometry.setIndex(index);
    this.mesh = new THREE.Mesh(geometry, material); this.mesh.frustumCulled = false; this.mesh.renderOrder = 7;
  }
  set(fn, z = 0) {
    const n = this.count; const p = this.positions; const pts = [];
    for (let i = 0; i < n; i += 1) pts.push(fn(i / (n - 1)));
    for (let i = 0; i < n; i += 1) {
      const a = pts[Math.max(0, i - 1)]; const b = pts[Math.min(n - 1, i + 1)];
      let tx = b[0] - a[0]; let ty = b[1] - a[1]; const len = Math.hypot(tx, ty) || 1; tx /= len; ty /= len;
      const nx = -ty * this.width / 2; const ny = tx * this.width / 2;
      p.set([pts[i][0] + nx, pts[i][1] + ny, z, pts[i][0] - nx, pts[i][1] - ny, z], i * 6);
    }
    this.mesh.geometry.attributes.position.needsUpdate = true;
  }
  dispose() { this.mesh.geometry.dispose(); }
}

function crackTexture(color, paths, w = 256, h = 64, line = 5) {
  const canvas = document.createElement('canvas'); canvas.width = w; canvas.height = h;
  const ctx = canvas.getContext('2d'); ctx.strokeStyle = color; ctx.lineWidth = line; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  for (const path of paths) { ctx.beginPath(); path.forEach(([x, y], i) => (i ? ctx.lineTo(x * w, y * h) : ctx.moveTo(x * w, y * h))); ctx.stroke(); }
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; return texture;
}

export class EffectRig {
  constructor(tower) {
    this.tower = tower; this.group = new THREE.Group(); this.group.name = 'effects'; tower.body.add(this.group);
    this.kit = tower.kit; this.currentId = ''; this.built = new Map(); this.active = null; this.clock = 0; this.sparkTimer = 0;
    this.spot = null; this.mover = null;
  }
  get palette() { return this.kit.palette; }
  setKit(kit) { this.kit = kit; for (const entry of this.built.values()) { this.group.remove(entry.group); entry.dispose(); } this.built.clear(); this.active = null; this.currentId = ''; }
  attachMover(mesh) { this.mover = mesh; for (const entry of this.built.values()) if (entry.attach) entry.attach(mesh); }

  update(state, mover, dt, time) {
    const effect = state.effect; const id = effect ? effect.id : '';
    this.spot = null;
    if (id !== this.currentId) {
      if (this.active) { this.active.group.visible = false; if (this.active.off) this.active.off(mover); }
      this.currentId = id; this.active = null;
      if (id && BUILDERS[id]) {
        if (!this.built.has(id)) { const entry = BUILDERS[id](this); entry.group.visible = false; this.group.add(entry.group); this.built.set(id, entry); if (entry.attach && this.mover) entry.attach(this.mover); }
        this.active = this.built.get(id); this.active.group.visible = true; this.active.t0 = time;
        if (this.active.on) this.active.on(mover);
      }
    }
    if (!this.active) return;
    const blocks = state.blocks || []; const below = blocks[blocks.length - 1] || null;
    this.active.update({ state, effect, mover, below, moving: state.moving, dt, time, rig: this, tower: this.tower, helpers: state.helpers, reduced: this.tower.reduced });
  }

  emit(position, options) { const sparks = this.tower.fx && this.tower.fx.sparks; if (!sparks) return; const world = this.tower.root.localToWorld(position.clone()); sparks.emit({ pos: [world.x, world.y, world.z], ...options }); }
  dispose() { for (const entry of this.built.values()) entry.dispose(); this.built.clear(); this.tower.body.remove(this.group); }
}

const v = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const rgb = hex => hexToRgb01(hex);

// ---------------------------------------------------------------------------------------------------------------------
const BUILDERS = {
  turbo(rig) {
    const group = new THREE.Group(); const p = rig.palette; const lines = [];
    const geo = new THREE.PlaneGeometry(1, 1);
    for (let i = 0; i < 4; i += 1) { const m = new THREE.Mesh(geo, additive(i % 2 ? p.amber : p.vermilion, 0.8)); group.add(m); lines.push(m); }
    return {
      group,
      update({ moving, mover, time, reduced }) {
        group.visible = Boolean(mover && moving && mover.visible); if (!group.visible) return;
        const dir = Number(moving.direction) < 0 ? -1 : 1; const w = mover.userData.drawnWidth;
        lines.forEach((m, i) => {
          const len = (46 + i * 20 + Math.sin(time * 40 + i * 7) * 14) * (reduced ? 0.6 : 1);
          m.scale.set(len, 1.7, 1);
          m.position.set(mover.position.x - dir * (w / 2 + len / 2 + 3), mover.position.y + (i - 1.5) * 4.6, FRONT);
        });
        if (!reduced && Math.random() < 0.7) rig.emit(v(mover.position.x - dir * w / 2, mover.position.y + (Math.random() - 0.5) * 12, FRONT), { vel: [-dir * (90 + Math.random() * 110), (Math.random() - 0.5) * 60, 40], color: rgb(Math.random() > 0.5 ? p.amber : p.vermilion), size: 5, life: 0.45, drag: 2, gravity: 0 });
      },
      dispose() { geo.dispose(); lines.forEach(m => m.material.dispose()); }
    };
  },

  drunk(rig) {
    const group = new THREE.Group(); const p = rig.palette;
    const ribbon = new Ribbon(28, 3, dashMaterial(p.rose, { dash: 6, speed: 0.8, opacity: 0.9 })); group.add(ribbon.mesh);
    return {
      group,
      update({ mover, time, moving, reduced }) {
        group.visible = Boolean(mover && mover.visible); if (!group.visible) return;
        const w = mover.userData.drawnWidth; const x0 = mover.position.x; const y0 = mover.position.y + BLOCK_T / 2 + 9;
        ribbon.mesh.material.uniforms.uTime.value = time;
        ribbon.set(t => [x0 - w / 2 + t * w, y0 + Math.sin(t * TAU * 2 + time * 6) * 4.5], FRONT + 4);
        if (!reduced && Math.random() < 0.25) rig.emit(v(x0 + (Math.random() - 0.5) * w, y0, FRONT), { vel: [(Math.random() - 0.5) * 30, 40 + Math.random() * 40, 20], color: rgb(p.rose), size: 8, life: 1.1, drag: 0.8, gravity: 30, growth: 6, alpha: 0.7 });
      },
      dispose() { ribbon.dispose(); ribbon.mesh.material.dispose(); }
    };
  },

  slowmo(rig) {
    const group = new THREE.Group(); const p = rig.palette;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1, 0.05, 8, 64), additive(p.blue, 0.9)); group.add(ring);
    const hand = new THREE.Mesh(new THREE.PlaneGeometry(0.06, 0.8).translate(0, 0.4, 0), additive(p.amber, 1)); ring.add(hand);
    const ticks = new THREE.Group(); ring.add(ticks);
    for (let i = 0; i < 12; i += 1) { const t = new THREE.Mesh(new THREE.PlaneGeometry(0.05, i % 3 ? 0.1 : 0.18), additive(p.blue, 0.8)); const a = (i / 12) * TAU; t.position.set(Math.sin(a) * 0.9, Math.cos(a) * 0.9, 0); t.rotation.z = -a; ticks.add(t); }
    return {
      group,
      update({ mover, time, effect, reduced }) {
        group.visible = Boolean(mover && mover.visible); if (!group.visible) return;
        const r = 34; ring.scale.set(r, r, r); ring.position.set(mover.position.x, mover.position.y + 4, FRONT + 2);
        hand.rotation.z = reduced ? 0 : -((effect.elapsed || 0) * 0.55); ticks.rotation.z = 0;
        ring.material.opacity = 0.55 + 0.35 * Math.sin(time * 2);
      },
      dispose() { ring.geometry.dispose(); ring.material.dispose(); hand.geometry.dispose(); hand.material.dispose(); ticks.children.forEach(t => { t.geometry.dispose(); t.material.dispose(); }); }
    };
  },

  magnet(rig) {
    const group = new THREE.Group(); const p = rig.palette;
    const arcs = [0, 1, 2].map(i => new Ribbon(24, 2.2, dashMaterial(p.teal, { dash: 9, speed: -1.6 - i * 0.2, opacity: 0.95 })));
    arcs.forEach(a => group.add(a.mesh));
    const horse = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: p.vermilion, roughness: 0.35, metalness: 0.5, emissive: p.vermilion, emissiveIntensity: 0.15 });
    const arc = new THREE.Mesh(new THREE.TorusGeometry(15, 5, 10, 28, Math.PI), bodyMat); arc.rotation.z = 0; horse.add(arc);
    const tipMat = new THREE.MeshStandardMaterial({ color: '#f4f4f4', roughness: 0.3, metalness: 0.8 });
    for (const s of [-1, 1]) { const tip = new THREE.Mesh(new THREE.BoxGeometry(10, 11, 10), tipMat); tip.position.set(s * 15, -5, 0); horse.add(tip); }
    horse.rotation.x = Math.PI; group.add(horse); horse.scale.setScalar(1.1);
    return {
      group,
      update({ mover, below, moving, time, reduced }) {
        group.visible = Boolean(mover && mover.visible && below); if (!group.visible) return;
        const mx = mover.position.x; const my = mover.position.y; const tx = boardX((below.left + below.right) / 2); const ty = levelY(below.level) + BLOCK_T / 2 + 2;
        arcs.forEach((a, i) => {
          a.mesh.material.uniforms.uTime.value = time; const off = (i - 1) * 7;
          a.set(t => { const x = mx + off + (tx + off - mx - off) * t; const y = my - BLOCK_T / 2 + (ty - my + BLOCK_T / 2) * t - Math.sin(t * Math.PI) * (11 + i * 4); return [x, y]; }, FRONT + 2);
        });
        horse.position.set(mx, my + 34 + (reduced ? 0 : Math.sin(time * 3) * 3), FRONT); horse.rotation.y = reduced ? 0 : Math.sin(time * 1.4) * 0.35;
        if (!reduced && Math.random() < 0.3) rig.emit(v(mx + (Math.random() - 0.5) * 30, my - 6, FRONT), { vel: [(tx - mx) * 0.6, -30, 10], color: rgb(p.teal), size: 4, life: 0.5, drag: 2 });
      },
      dispose() { arcs.forEach(a => { a.dispose(); a.mesh.material.dispose(); }); arc.geometry.dispose(); bodyMat.dispose(); tipMat.dispose(); horse.children.forEach(c => c.geometry && c.geometry.dispose()); }
    };
  },

  portal(rig) {
    const group = new THREE.Group(); const p = rig.palette;
    const gateMat = side => new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false,
      uniforms: { uTime: { value: 0 }, uA: { value: glow(p.teal, 1.7) }, uB: { value: glow(p.amber, 1.7) }, uDir: { value: 1 } },
      vertexShader: dashVertex,
      fragmentShader: /* glsl */`varying vec2 vUv; uniform vec3 uA, uB; uniform float uTime, uDir;
        void main(){
          float edge = 1.0 - abs(vUv.x - 0.5) * 2.0;
          float swirl = sin(vUv.y * 38.0 + uDir * uTime * 5.0 + sin(vUv.x * 9.0 + uTime) * 2.0) * 0.5 + 0.5;
          float fade = smoothstep(0.0, 0.18, vUv.y) * smoothstep(1.0, 0.82, vUv.y);
          float core = smoothstep(0.55, 1.0, edge);
          vec3 c = mix(uA, uB, swirl);
          gl_FragColor = vec4(c, (0.18 + swirl * 0.4) * (0.35 + core * 0.65) * fade);
        }`
    });
    const gates = [-1, 1].map(side => { const m = new THREE.Mesh(new THREE.PlaneGeometry(26, 1), gateMat(side)); group.add(m); return m; });
    const rings = []; const ringGeo = new THREE.TorusGeometry(1, 0.1, 6, 26);
    for (let i = 0; i < 12; i += 1) { const m = new THREE.Mesh(ringGeo, additive(p.amber, 0.75)); m.scale.set(4, 11, 4); m.rotation.y = Math.PI / 2; group.add(m); rings.push(m); }
    return {
      group,
      update({ moving, mover, effect, time, state }) {
        const level = moving ? moving.level : (state.blocks.length || 1); const cy = levelY(level); const height = 380;
        const dir = Number(effect.windDirection) < 0 ? -1 : 1;
        gates.forEach((g, i) => { g.scale.y = height; g.position.set((i ? 1 : -1) * (BOARD_W / 2 - 4), cy + 40, 0); g.material.uniforms.uTime.value = time; g.material.uniforms.uDir.value = dir * (i ? -1 : 1); });
        rings.forEach((r, i) => { const side = i % 2 ? 1 : -1; const k = Math.floor(i / 2); const y = cy - 190 + ((k * 66 + time * 20 * dir * side) % 400 + 400) % 400; r.position.set(side * (BOARD_W / 2 - 4 + (side > 0 ? 2 : -2) * 0), y, 0); r.rotation.y = Math.PI / 2; r.rotation.z = time * 0.6 * side; });
      },
      dispose() { gates.forEach(g => { g.geometry.dispose(); g.material.dispose(); }); rings.forEach(r => r.material.dispose()); ringGeo.dispose(); }
    };
  },

  rollercoaster(rig) {
    const group = new THREE.Group(); const p = rig.palette;
    const rail = new Ribbon(40, 3, dashMaterial(p.teal, { dash: 20, speed: 0.6, opacity: 0.9 })); group.add(rail.mesh);
    const wheelGeo = new THREE.CylinderGeometry(4.2, 4.2, 3, 14); wheelGeo.rotateX(Math.PI / 2);
    const wheelMat = new THREE.MeshStandardMaterial({ color: p.ink, roughness: 0.4, metalness: 0.6 });
    const wheels = [0, 1].map(() => { const w = new THREE.Mesh(wheelGeo, wheelMat); w.castShadow = true; group.add(w); return w; });
    return {
      group,
      update({ mover, time, below, moving, reduced }) {
        group.visible = Boolean(mover && mover.visible); if (!group.visible) return;
        const baseY = levelY(moving.level) - BLOCK_T / 2 - 9;
        rail.mesh.material.uniforms.uTime.value = time;
        rail.set(t => [boardX(t * BOARD_W), baseY + Math.sin(t * 14 + time * 3) * 9], FRONT);
        const w = mover.userData.drawnWidth;
        wheels.forEach((m, i) => { m.position.set(mover.position.x + (i ? 1 : -1) * w * 0.34, mover.position.y - BLOCK_T / 2 - 3, FRONT - 6); m.rotation.z = -time * 6 * (Number(moving.direction) || 1); });
      },
      dispose() { rail.dispose(); rail.mesh.material.dispose(); wheelGeo.dispose(); wheelMat.dispose(); }
    };
  },

  pisa(rig) {
    const group = new THREE.Group();
    return {
      group,
      update({ effect, tower, time, reduced }) {
        if (reduced || Math.random() > 0.12) return;
        const x = (Math.random() < 0.5 ? -1 : 1) * (60 + Math.random() * 120);
        rig.emit(v(x, 2, FRONT), { vel: [(Math.random() - 0.5) * 40, 28 + Math.random() * 30, 20], color: [0.8, 0.74, 0.6], size: 14, life: 1.1, drag: 1.4, growth: 14, alpha: 0.35 });
      },
      dispose() {}
    };
  },

  earthquake(rig) {
    const group = new THREE.Group(); const p = rig.palette;
    const cracks = [];
    for (let i = 0; i < 6; i += 1) {
      const r = new Ribbon(14, 3.4, dashMaterial(p.vermilion, { dash: 3, speed: 0.4, opacity: 1 }));
      const a = (i / 6) * TAU + 0.4; const seed = i * 1.7;
      r.angle = a; r.seed = seed; r.mesh.rotation.x = -Math.PI / 2; r.mesh.position.y = 1.2; group.add(r.mesh); cracks.push(r);
    }
    return {
      group,
      update({ effect, time, reduced }) {
        const k = clamp((effect.elapsed || 0) / 0.5) * clamp((effect.remaining ?? 5) / 0.8);
        cracks.forEach(c => {
          c.mesh.material.uniforms.uTime.value = time; c.mesh.material.uniforms.uOpacity.value = k;
          c.set(t => { const r = 20 + t * 220; const a = c.angle + Math.sin(t * 9 + c.seed) * 0.16; return [Math.cos(a) * r, -Math.sin(a) * r]; }, 0);
        });
        if (!reduced && Math.random() < 0.5) {
          const a = Math.random() * TAU; const r = 160 + Math.random() * 110;
          rig.emit(v(Math.cos(a) * r, 2, Math.sin(a) * r * 0.6 + 40), { vel: [(Math.random() - 0.5) * 40, 40 + Math.random() * 70, 20], color: [0.85, 0.77, 0.62], size: 12, life: 1.2, drag: 1.1, growth: 12, alpha: 0.3 });
        }
      },
      dispose() { cracks.forEach(c => { c.dispose(); c.mesh.material.dispose(); }); }
    };
  },

  spotlight(rig) {
    const group = new THREE.Group(); const p = rig.palette;
    const coneGeo = new THREE.ConeGeometry(1, 1, 40, 1, true); coneGeo.translate(0, -0.5, 0);
    const cone = new THREE.Mesh(coneGeo, new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false,
      uniforms: { uColor: { value: glow(p.amber, 1.3) } },
      vertexShader: 'varying float vY; varying vec3 vN; varying vec3 vV; void main(){ vY = position.y; vec4 mv = modelViewMatrix*vec4(position,1.); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }',
      fragmentShader: 'varying float vY; varying vec3 vN; varying vec3 vV; uniform vec3 uColor; void main(){ float f = pow(abs(dot(vN,vV)),1.4); gl_FragColor = vec4(uColor, f * (1.0 + vY) * 0.28); }'
    }));
    group.add(cone);
    const pool = new THREE.Mesh(new THREE.RingGeometry(0.0, 1, 48), additive(p.amber, 0.28)); pool.rotation.x = -Math.PI / 2; group.add(pool);
    return {
      group,
      update({ below, effect, time, reduced }) {
        if (!below) { group.visible = false; return; }
        const side = Number(effect.spotlightSide) < 0 ? -1 : 1;
        const bx = boardX(side < 0 ? below.left + 7 : below.right - 7); const by = levelY(below.level);
        cone.position.set(bx, by + 620, 0); cone.scale.set(52, 620, 52);
        pool.position.set(bx, by + BLOCK_T / 2 + 0.6, 30); pool.scale.set(52, 52, 1);
        rig.spot = { x: bx, y: by, z: BLOCK_D / 2, radius: 52 };
        if (!reduced && Math.random() < 0.45) rig.emit(v(bx + (Math.random() - 0.5) * 80, by + 160 + Math.random() * 120, 0), { vel: [0, -60, 0], color: rgb(p.amber), size: 3, life: 1, drag: 0.2, alpha: 0.7 });
      },
      dispose() { coneGeo.dispose(); cone.material.dispose(); pool.geometry.dispose(); pool.material.dispose(); }
    };
  },

  peekaboo(rig) {
    const group = new THREE.Group(); const p = rig.palette;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1, 0.03, 6, 48), additive(p.teal, 0.6)); group.add(ring);
    return {
      group,
      update({ mover, effect, moving, helpers, time, reduced }) {
        group.visible = Boolean(mover && mover.visible); if (!group.visible) return;
        const alpha = mover.userData.alpha;
        ring.scale.set(mover.userData.drawnWidth / 2 + 14, 20, 1); ring.position.set(mover.position.x, mover.position.y, FRONT);
        ring.material.opacity = (1 - alpha) * 0.75;
        if (!reduced && alpha < 0.5 && Math.random() < 0.35) rig.emit(v(mover.position.x + (Math.random() - 0.5) * mover.userData.drawnWidth, mover.position.y + (Math.random() - 0.5) * 14, FRONT), { vel: [0, 12, 0], color: rgb(p.teal), size: 3.4, life: 0.7, alpha: 0.7, drag: 1 });
      },
      dispose() { ring.geometry.dispose(); ring.material.dispose(); }
    };
  },

  zoom(rig) {
    const group = new THREE.Group(); const p = rig.palette;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1, 0.04, 8, 64), additive(p.amber, 0.9)); group.add(ring);
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.7, 8), additive(p.vermilion, 0.9)); handle.position.set(0.88, -0.88, 0); handle.rotation.z = Math.PI / 4; ring.add(handle);
    return {
      group,
      update({ below, effect, time, reduced }) {
        if (!below) { group.visible = false; return; }
        const pulse = 1 + (reduced ? 0 : Math.sin(time * 3) * 0.04);
        const w = (below.right - below.left) * 0.5 + 24; ring.scale.set(w * pulse, w * pulse, 1);
        ring.position.set(boardX((below.left + below.right) / 2), levelY(below.level) + 14, FRONT + 4);
        ring.material.opacity = 0.5 * clamp((effect.remaining ?? 5) / 0.4);
      },
      dispose() { ring.geometry.dispose(); ring.material.dispose(); handle.geometry.dispose(); handle.material.dispose(); }
    };
  },

  double(rig) {
    const group = new THREE.Group(); const p = rig.palette; let crack = null; let mesh = null;
    const texture = crackTexture(p.ink, [[[0.53, 0.1], [0.48, 0.34], [0.55, 0.55], [0.49, 0.9]]], 256, 64, 8);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false });
    mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, BLOCK_T), material);
    return {
      group, attach(mover) { if (crack && crack.parent) crack.parent.remove(crack); crack = mesh; mover.add(crack); crack.position.z = FRONT; crack.scale.x = mover.userData.baseW; },
      off() { if (crack && crack.parent) crack.parent.remove(crack); },
      update({ mover }) { if (!crack || crack.parent !== mover) { if (mover) { mover.add(crack); crack.position.z = FRONT; crack.scale.x = mover.userData.baseW; } } },
      dispose() { texture.dispose(); material.dispose(); mesh.geometry.dispose(); }
    };
  },

  // accordion: no cue of its own. The mover's width breathing (the game's rule, drawn by the tower like any other block) is all there is.

  crumble(rig) {
    const group = new THREE.Group(); const p = rig.palette;
    const texture = crackTexture(p.ink, [[[0.24, 0.04], [0.31, 0.34], [0.2, 0.62], [0.27, 0.96]], [[0.31, 0.34], [0.42, 0.5]], [[0.68, 0.04], [0.61, 0.34], [0.72, 0.62], [0.65, 0.96]], [[0.61, 0.34], [0.5, 0.5]]], 256, 64, 6);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false });
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, BLOCK_T), material); group.add(plane);
    return {
      group,
      update({ below, time, reduced }) {
        if (!below) { group.visible = false; return; }
        const w = below.right - below.left; plane.scale.x = w; plane.position.set(boardX((below.left + below.right) / 2), levelY(below.level), FRONT);
        if (!reduced && Math.random() < 0.28) rig.emit(v(plane.position.x + (Math.random() - 0.5) * w * 0.7, plane.position.y - 4, FRONT), { vel: [(Math.random() - 0.5) * 18, -10, 18], color: [0.62, 0.55, 0.45], size: 3.2, life: 1.1, drag: 0.4, gravity: -200, alpha: 0.9 });
      },
      dispose() { texture.dispose(); material.dispose(); plane.geometry.dispose(); }
    };
  },

  superglue(rig) {
    const group = new THREE.Group(); const p = rig.palette;
    const glueMat = new THREE.MeshPhysicalMaterial({ color: p.amber, roughness: 0.08, metalness: 0, clearcoat: 1, transmission: 0, emissive: p.amber, emissiveIntensity: 0.55 });
    const strip = new THREE.Mesh(new THREE.CapsuleGeometry(2.6, 1, 6, 14).rotateZ(Math.PI / 2), glueMat); group.add(strip);
    const drip = new THREE.Mesh(new THREE.SphereGeometry(3, 12, 10), glueMat); group.add(drip);
    const band = new THREE.Mesh(new THREE.PlaneGeometry(28, BLOCK_D * 0.96).rotateX(-Math.PI / 2), additive(p.amber, 0.2)); group.add(band);
    return {
      group,
      attach() {}, off(mover) { if (mover && mover.material && mover.material.emissive) mover.material.emissiveIntensity = 0; },
      update({ below, mover, time, reduced }) {
        if (!below) { group.visible = false; return; }
        const w = below.right - below.left; const cx = boardX((below.left + below.right) / 2); const top = levelY(below.level) + BLOCK_T / 2;
        strip.scale.set((w - 8) / 6.2, 1, 1); strip.position.set(cx, top + 1.2, FRONT - 8);
        drip.position.set(cx + Math.sin(time * 0.5) * w * 0.2, top - 2 - ((time * 0.6) % 1) * 9, FRONT - 1); drip.scale.setScalar(0.7 + 0.3 * Math.sin(time * 4));
        band.position.set(cx, top + 0.7, 0);
        band.material.opacity = 0.14 + 0.1 * (reduced ? 1 : Math.sin(time * 4) * 0.5 + 0.5);
        if (mover && mover.visible && mover.material) { mover.material.emissive.set(p.amber); mover.material.emissiveIntensity = reduced ? 0.4 : 0.35 + 0.3 * Math.sin(time * 5); }
      },
      dispose() { glueMat.dispose(); strip.geometry.dispose(); drip.geometry.dispose(); band.geometry.dispose(); band.material.dispose(); }
    };
  },

  calipers(rig) {
    const group = new THREE.Group(); const p = rig.palette;
    const railGeo = new THREE.BoxGeometry(2, 1, 3); const rails = [0, 1].map(() => { const m = new THREE.Mesh(railGeo, additive(p.amber, 0.95)); group.add(m); return m; });
    const armGeo = new THREE.BoxGeometry(1, 2, 3); const arms = [0, 1, 2, 3].map(() => { const m = new THREE.Mesh(armGeo, additive(p.amber, 0.95)); group.add(m); return m; });
    const capGeo = new THREE.SphereGeometry(3.4, 12, 8); const caps = [0, 1].map(() => { const m = new THREE.Mesh(capGeo, additive(p.amber, 1)); group.add(m); return m; });
    return {
      group,
      update({ below, moving, helpers, time }) {
        if (!below || !moving || !helpers) { group.visible = false; return; }
        const b = helpers.caliperBounds(below, moving); const left = boardX(b.minLeft); const right = boardX(b.maxLeft + moving.width);
        const my = levelY(moving.level); const sy = levelY(below.level); const top = Math.max(my, sy) + 22; const bottom = sy - 13; const h = top - bottom;
        rails.forEach((r, i) => { r.scale.y = h; r.position.set(i ? right : left, (top + bottom) / 2, FRONT + 1); });
        const inward = [1, -1];
        [left, right].forEach((x, i) => { arms[i * 2].scale.x = 14; arms[i * 2].position.set(x + inward[i] * 7, my, FRONT + 1); arms[i * 2 + 1].scale.x = 14; arms[i * 2 + 1].position.set(x + inward[i] * 7, sy - BLOCK_H / 2, FRONT + 1); caps[i].position.set(x, top, FRONT + 1); });
        const pulse = 1 + Math.sin(time * 5) * 0.2; caps.forEach(c => c.scale.setScalar(pulse));
      },
      dispose() { railGeo.dispose(); armGeo.dispose(); capGeo.dispose(); [...rails, ...arms, ...caps].forEach(m => m.material.dispose()); }
    };
  }
};

export const EFFECT_IDS = Object.keys(BUILDERS).concat(['zoom']).filter((id, i, a) => a.indexOf(id) === i);
