/*! Sabotage Stack 3D — a dependency-free WebGL diorama renderer.
 *  This file is generated into sabotage-stack.html by `node scripts/sync-core.js`.
 *
 *  The game keeps its 2D rules and hit-tests exactly as before; this renderer only *draws* the world.
 *  Nothing here may throw into the game loop: every public call is guarded so a missing GPU, a lost
 *  context, or an old driver simply leaves the crisp 2D canvas in charge.
 */
(() => {
  'use strict';
  if (typeof window === 'undefined') return;
  if (window.SabotageStackScene3D) return;

  // ───────────────────────────────── maths ─────────────────────────────────
  const TAU = Math.PI * 2;
  const clamp = (value, low, high) => value < low ? low : value > high ? high : value;
  const lerp = (a, b, t) => a + (b - a) * t;
  const smoothstep = (edge0, edge1, value) => {
    const t = clamp((value - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
    return t * t * (3 - 2 * t);
  };
  const hash1 = n => {
    const s = Math.sin(n * 127.1 + 311.7) * 43758.5453123;
    return s - Math.floor(s);
  };
  const hash2 = (x, y) => {
    const s = Math.sin(x * 127.1 + y * 311.7 + 74.7) * 43758.5453123;
    return s - Math.floor(s);
  };
  function valueNoise(x, y) {
    const xi = Math.floor(x); const yi = Math.floor(y);
    const xf = x - xi; const yf = y - yi;
    const u = xf * xf * (3 - 2 * xf); const v = yf * yf * (3 - 2 * yf);
    return lerp(lerp(hash2(xi, yi), hash2(xi + 1, yi), u), lerp(hash2(xi, yi + 1), hash2(xi + 1, yi + 1), u), v);
  }
  function fbm(x, y, octaves = 4) {
    let total = 0; let amplitude = 0.5; let frequency = 1; let norm = 0;
    for (let i = 0; i < octaves; i += 1) {
      total += valueNoise(x * frequency, y * frequency) * amplitude;
      norm += amplitude; amplitude *= 0.5; frequency *= 2.03;
    }
    return total / (norm || 1);
  }

  // Column-major 4x4 matrices, matching what WebGL expects.
  const mat4 = {
    perspective(fovY, aspect, near, far) {
      const f = 1 / Math.tan(fovY / 2);
      const nf = 1 / (near - far);
      return new Float32Array([f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0]);
    },
    lookAt(eye, target, up) {
      let zx = eye[0] - target[0]; let zy = eye[1] - target[1]; let zz = eye[2] - target[2];
      let length = Math.hypot(zx, zy, zz) || 1; zx /= length; zy /= length; zz /= length;
      let xx = up[1] * zz - up[2] * zy; let xy = up[2] * zx - up[0] * zz; let xz = up[0] * zy - up[1] * zx;
      length = Math.hypot(xx, xy, xz) || 1; xx /= length; xy /= length; xz /= length;
      const yx = zy * xz - zz * xy; const yy = zz * xx - zx * xz; const yz = zx * xy - zy * xx;
      return new Float32Array([
        xx, yx, zx, 0,
        xy, yy, zy, 0,
        xz, yz, zz, 0,
        -(xx * eye[0] + xy * eye[1] + xz * eye[2]),
        -(yx * eye[0] + yy * eye[1] + yz * eye[2]),
        -(zx * eye[0] + zy * eye[1] + zz * eye[2]),
        1
      ]);
    },
    multiply(a, b) {
      const out = new Float32Array(16);
      for (let col = 0; col < 4; col += 1) {
        for (let row = 0; row < 4; row += 1) {
          out[col * 4 + row] = a[row] * b[col * 4] + a[4 + row] * b[col * 4 + 1] + a[8 + row] * b[col * 4 + 2] + a[12 + row] * b[col * 4 + 3];
        }
      }
      return out;
    },
    project(m, x, y, z) {
      const out = [0, 0, 0, 0];
      for (let row = 0; row < 4; row += 1) out[row] = m[row] * x + m[4 + row] * y + m[8 + row] * z + m[12 + row];
      return out;
    }
  };

  const color = {
    parse(hex) {
      if (!hex || typeof hex !== 'string') return [0.8, 0.8, 0.8];
      let value = hex.trim().replace('#', '');
      if (value.length === 3) value = value.split('').map(c => c + c).join('');
      const n = parseInt(value.slice(0, 6), 16);
      if (!Number.isFinite(n)) return [0.8, 0.8, 0.8];
      return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
    },
    mix(a, b, t) { return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)]; },
    shade(a, amount) { return [clamp(a[0] * amount, 0, 1), clamp(a[1] * amount, 0, 1), clamp(a[2] * amount, 0, 1)]; },
    rgba(a, alpha) { return `rgba(${Math.round(a[0] * 255)},${Math.round(a[1] * 255)},${Math.round(a[2] * 255)},${alpha})`; }
  };

  // ───────────────────────────────── themes ─────────────────────────────────
  // Colours mirror the CSS themes so a 3D scene and its HUD always agree.
  const THEMES = {
    paper: {
      key: 'paper',
      skyTop: '#FCF8EE', skyHorizon: '#F2E8D5', skyLow: '#E9DCC3',
      sun: '#FFF6DC', sunDir: [-0.52, 0.66, 0.55], sunColor: '#FFF6E0', skyColor: '#EFE7D8',
      fog: '#EEE2CC', fogDensity: 0.0215,
      ground: '#DCCBAC', groundDeep: '#A89270', cliff: '#937F5F',
      building: '#8E7A5B', window: '#E3A33B',
      plinth: '#CBB187', plinthTop: '#F3E5C6', rim: '#D9A24B',
      dust: '#8A7A61', ember: '#E3A33B', ink: '#2A2520', vein: '#D8C9AC',
      ambient: [0.42, 0.39, 0.34], contrast: 1.02, grain: 1.0, stars: 0, aurora: 0, horizonGlow: 0.35,
      vignette: 0.16, beam: '#FFF3D2'
    },
    sunset: {
      key: 'sunset',
      skyTop: '#170B33', skyHorizon: '#7A2C8E', skyLow: '#FF6B35',
      sun: '#FFC53D', sunDir: [-0.62, 0.34, 0.70], sunColor: '#FFB347', skyColor: '#5B2A8F',
      fog: '#3A1256', fogDensity: 0.020,
      ground: '#2A1450', groundDeep: '#1B0B36', cliff: '#3B1A68',
      building: '#1B0B36', window: '#2EC4B6',
      plinth: '#5A2E7E', plinthTop: '#7B44A4', rim: '#FFC53D',
      dust: '#FF8FAB', ember: '#FF6B35', ink: '#170B33', vein: '#B983FF',
      ambient: [0.42, 0.26, 0.40], contrast: 1.12, grain: 0.3, stars: 1, aurora: 1, horizonGlow: 0.9,
      vignette: 0.26, beam: '#FFC53D'
    },
    primetime: {
      key: 'primetime',
      skyTop: '#061238', skyHorizon: '#173A9E', skyLow: '#0F2680',
      sun: '#FFC83D', sunDir: [0.55, 0.44, 0.70], sunColor: '#FFE9A8', skyColor: '#2A4CC0',
      fog: '#0C1F66', fogDensity: 0.021,
      ground: '#0E2470', groundDeep: '#081546', cliff: '#14307F',
      building: '#081546', window: '#FFC83D',
      plinth: '#1F3F96', plinthTop: '#2B54BA', rim: '#FFC83D',
      dust: '#9BC1FF', ember: '#FFC83D', ink: '#061238', vein: '#35D0E8',
      ambient: [0.34, 0.40, 0.68], contrast: 1.06, grain: 0.22, stars: 1, aurora: 0, horizonGlow: 0.55,
      vignette: 0.30, beam: '#FFC83D'
    }
  };
  const themeFor = name => THEMES[name] || THEMES.paper;

  // ───────────────────────────────── world design ─────────────────────────────────
  // Every gameplay coordinate is described in the game's own 360x520 design space. These constants
  // turn that flat space into a diorama: the tower tapers with height, blocks gain depth, and the
  // camera follows the action. Keep the mirrored copy in the page (2D fallback) in step.
  const W = Object.freeze({
    width: 360, height: 520, baseline: 480,
    near: 2.0455,
    rise: 0.062,
    blockH: 0.155,
    depthRatio: 0.62,
    bow: 0.30,
    half: 180
  });
  // Pedestal footprint, in world units. The widest block (a fresh 360px stage) is 2.05 wide, so the
  // plinth keeps a visible lip of sand around it — otherwise block and plinth merge into one slab.
  const STAGE = Object.freeze({ width: 2.46, depth: 1.80, lipWidth: 2.28, lipDepth: 1.64 });
  const wHalfAt = level => W.near / (W.near + W.rise * Math.max(0, level));
  const worldW = (w2d, level) => (w2d / W.half) * wHalfAt(level);
  const worldY = level => level * W.blockH;
  // 2D design space → world space lateral offset
  const worldX = (x2d, level) => ((x2d - W.half) / W.half) * wHalfAt(level);
  const bowAt = (level, bow) => bow * clamp(level / 24, 0, 3);

  // Tower bow: higher storeys drift toward the stack's own centre of mass so a lopsided
  // tower leans visibly. It is presentation only — rules still use the flat coordinates.
  function stackBow(stack) {
    if (!stack || stack.length < 2) return 0;
    let sum = 0; let weight = 0;
    for (let i = 0; i < stack.length; i += 1) {
      const block = stack[i];
      const centre = (Number(block.left) + Number(block.right)) / 2 - W.half;
      const w = i / Math.max(1, stack.length - 1);
      sum += centre * w * w; weight += w * w;
    }
    return weight ? (sum / weight) / W.half * W.bow : 0;
  }

  // ───────────────────────────────── shaders ─────────────────────────────────
  const VERT_SCENE = `
    attribute vec3 aPos; attribute vec3 aNormal; attribute vec3 aColor; attribute vec3 aInfo;
    uniform mat4 uProj; uniform mat4 uView;
    varying vec3 vWorld; varying vec3 vNormal; varying vec3 vColor; varying vec3 vInfo;
    void main() {
      vWorld = aPos; vNormal = aNormal; vColor = aColor; vInfo = aInfo;
      gl_Position = uProj * uView * vec4(aPos, 1.0);
    }`;

  const FRAG_SCENE = `
    precision mediump float;
    varying vec3 vWorld; varying vec3 vNormal; varying vec3 vColor; varying vec3 vInfo;
    uniform vec3 uCamPos; uniform vec3 uLightDir; uniform vec3 uSunColor; uniform vec3 uSkyColor;
    uniform vec3 uFogColor; uniform float uFogDensity; uniform float uTime; uniform float uAlpha;
    uniform float uTowerTop; uniform float uTowerRadius; uniform float uGroundShadow;
    uniform vec3 uInk; uniform vec3 uAmbient; uniform float uContrast;
    float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
    void main() {
      vec3 n = normalize(vNormal);
      vec3 viewDir = normalize(uCamPos - vWorld);
      int mode = int(vInfo.z + 0.5);
      float groundY = vInfo.x;
      float spray = max(0.02, vInfo.y);
      vec3 base = vColor;
      float grain = hash(floor(vWorld.xz * 80.0) + floor(vWorld.y * 80.0)) - 0.5;
      base += grain * 0.02;

      vec3 lightDir = normalize(uLightDir);
      float diff = max(dot(n, lightDir), 0.0);
      float hemi = 0.5 + 0.5 * n.y;
      // Ambient floor keeps dark themes readable instead of silhouetted; contrast is a gentle
      // S-curve around mid grey, authored per theme.
      vec3 lit = base * (uAmbient * (0.62 + hemi * 0.55) + uSunColor * diff * 0.82 + uSkyColor * hemi * 0.10);
      lit = clamp((lit - 0.5) * uContrast + 0.5, 0.0, 1.0);
      float key = pow(max(dot(viewDir, normalize(lightDir + vec3(0.0, 0.25, 0.0))), 0.0), 6.0);
      lit += uSunColor * key * 0.07;
      float rim = pow(1.0 - max(dot(n, viewDir), 0.0), 3.0);
      lit += uSunColor * rim * 0.18;

      if (mode == 1) {
        float fres = pow(1.0 - max(dot(n, viewDir), 0.0), 2.0);
        lit += uSunColor * fres * 0.6;
        float spark = step(0.86, hash(floor(vWorld.xz * 42.0) + floor(vWorld.y * 42.0) + floor(uTime * 1.5)));
        lit += vec3(spark) * 0.30;
      } else if (mode == 2) {
        // Emissive trim: bright but never blown out, so it accents rather than floods.
        float pulse = 0.82 + 0.18 * sin(uTime * 3.2 + vWorld.x * 2.1 + vWorld.y * 1.6);
        lit = mix(base * 0.55, vec3(1.0), clamp(dot(base, vec3(0.33)) * 0.45, 0.0, 0.35));
        lit *= 0.85 + pulse * 0.3;
      } else if (mode == 3) {
        float band = step(0.5, fract(vWorld.y * 2.6 + hash(floor(vWorld.xz * 2.4)) * 0.5));
        lit *= 0.95 + band * 0.05;
      }

      // Analytic tower shadow cast on the plateau. Surfaces facing up receive it.
      if (uGroundShadow > 0.5 && n.y > 0.55) {
        float towerHeight = max(0.0, uTowerTop - vWorld.y);
        vec2 dir = -lightDir.xz / max(0.12, lightDir.y);
        vec2 seg = dir * towerHeight;
        float segLen = length(seg);
        float s = segLen > 0.0001 ? clamp(dot(vWorld.xz, seg) / (segLen * segLen), 0.0, 1.0) : 0.0;
        vec2 nearest = seg * s;
        float dist = length(vWorld.xz - nearest);
        float radius = mix(uTowerRadius, uTowerRadius * 0.55, s) + spray * 0.18;
        float soft = smoothstep(radius + spray * 0.6, radius * 0.35, dist);
        lit *= 1.0 - soft * 0.62;
        // Tight ambient-occlusion ring where the tower meets the surface.
        float contact = smoothstep(uTowerRadius * 1.9 + spray * 0.5, uTowerRadius * 0.55, length(vWorld.xz));
        lit *= 1.0 - contact * 0.30;
      }
      if (n.y < -0.3) lit *= 0.7;

      float dist = length(uCamPos - vWorld);
      float fog = 1.0 - exp(-uFogDensity * uFogDensity * dist * dist);
      vec3 finalColor = mix(lit, uFogColor, clamp(fog * 1.05, 0.0, 1.0));
      gl_FragColor = vec4(finalColor, uAlpha);
    }`;

  const VERT_SKY = `
    attribute vec2 aPos; varying vec2 vUv; varying vec3 vRay;
    uniform vec3 uCamRight; uniform vec3 uCamUp; uniform vec3 uCamFwd;
    uniform float uTanHalf; uniform float uAspect;
    void main() {
      vUv = aPos;
      vRay = normalize(uCamFwd + uCamRight * (aPos.x * uTanHalf * uAspect) + uCamUp * (aPos.y * uTanHalf));
      gl_Position = vec4(aPos, 0.999, 1.0);
    }`;

  const FRAG_SKY = `
    precision mediump float;
    varying vec2 vUv; varying vec3 vRay;
    uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uLow; uniform vec3 uSunColor;
    uniform vec3 uSunDir; uniform float uStars; uniform float uAurora; uniform float uGlow;
    uniform float uTime; uniform float uGrain; uniform float uTheme;
    float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
    void main() {
      vec3 dir = normalize(vRay);
      float y = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0);
      vec3 sky = mix(uLow, uHorizon, smoothstep(0.34, 0.55, y));
      sky = mix(sky, uTop, smoothstep(0.48, 0.96, y));
      float sunDot = max(dot(dir, normalize(uSunDir)), 0.0);
      sky += uSunColor * pow(sunDot, 240.0) * 1.6;
      sky += uSunColor * pow(sunDot, 9.0) * uGlow * 0.5;
      if (uTheme > 0.5 && uTheme < 1.5) {
        vec2 sunPlane = normalize(vec2(dir.x, dir.y * 1.7 + 0.16));
        vec2 sunFlat = normalize(vec2(uSunDir.x, uSunDir.y * 1.7 + 0.16));
        float d = distance(sunPlane, sunFlat);
        float disc = smoothstep(0.32, 0.30, d);
        float stripes = step(0.42, fract((dir.y - 0.02) * 26.0 + uTime * 0.04));
        sky = mix(sky, uSunColor, disc * stripes * 0.9);
      }
      if (uStars > 0.01) {
        vec3 cell = floor(dir * 300.0);
        float star = step(0.9982, hash(cell.xy + dir.z * 13.0));
        float twinkle = 0.55 + 0.45 * sin(uTime * 1.7 + hash(cell.xy) * 20.0);
        sky += vec3(star * twinkle * uStars) * smoothstep(0.50, 0.72, y) * 1.2;
      }
      if (uAurora > 0.01) {
        float band = sin(dir.x * 5.0 + uTime * 0.16) * 0.5 + 0.5;
        float ribbon = smoothstep(0.6, 0.98, band) * smoothstep(0.46, 0.8, y) * smoothstep(0.95, 0.7, y);
        sky += mix(vec3(0.25, 0.95, 0.85), vec3(0.75, 0.45, 1.0), band) * ribbon * 0.13 * uAurora;
      }
      sky += (hash(floor(vUv * 900.0)) - 0.5) * 0.014 * uGrain;
      gl_FragColor = vec4(sky, 1.0);
    }`;

  const VERT_SPRITE = `
    attribute vec3 aPos; attribute vec2 aCorner; attribute vec4 aColor; attribute float aShape;
    uniform mat4 uProj; uniform mat4 uView;
    varying vec2 vCorner; varying vec4 vColor; varying float vShape;
    void main() {
      vCorner = aCorner; vColor = aColor; vShape = aShape;
      gl_Position = uProj * uView * vec4(aPos, 1.0);
    }`;

  const FRAG_SPRITE = `
    precision mediump float;
    varying vec2 vCorner; varying vec4 vColor; varying float vShape;
    void main() {
      float d = length(vCorner);
      float alpha;
      if (vShape < 0.5) {
        alpha = smoothstep(1.0, 0.15, d) * vColor.a;
      } else if (vShape < 1.5) {
        float star = max(0.0, 1.0 - abs(vCorner.x) * 7.0) * max(0.0, 1.0 - abs(vCorner.y) * 1.2);
        star += max(0.0, 1.0 - abs(vCorner.y) * 7.0) * max(0.0, 1.0 - abs(vCorner.x) * 1.2);
        star += smoothstep(0.55, 0.0, d) * 0.9;
        alpha = min(1.0, star) * vColor.a;
      } else if (vShape < 2.5) {
        alpha = smoothstep(0.34, 0.0, abs(d - 0.76)) * vColor.a;
      } else {
        alpha = smoothstep(1.0, 0.0, abs(vCorner.y)) * smoothstep(1.0, 0.15, abs(vCorner.x)) * vColor.a;
      }
      if (alpha < 0.004) discard;
      gl_FragColor = vec4(vColor.rgb, alpha);
    }`;

  const VERT_QUAD = `
    attribute vec2 aPos; varying vec2 vUv;
    void main() { vUv = aPos * 0.5 + 0.5; gl_Position = vec4(aPos, 0.0, 1.0); }`;

  const FRAG_VEIL = `
    precision mediump float;
    varying vec2 vUv;
    uniform vec2 uBeam; uniform vec2 uCenter; uniform float uRadius; uniform float uAspect; uniform vec3 uVeil;
    uniform vec3 uBeamColor; uniform float uTime;
    void main() {
      vec2 p = vUv - uCenter; p.x *= uAspect;
      float d = length(p);
      if (d < uRadius) discard;
      float edge = smoothstep(uRadius, uRadius + 0.006, d);
      float halo = smoothstep(uRadius + 0.12, uRadius, d) * 0.20;
      vec3 tone = mix(uVeil, uBeamColor, halo * (0.55 + 0.45 * sin(uTime * 2.0)));
      gl_FragColor = vec4(tone, edge);
    }`;

  const FRAG_VIGNETTE = `
    precision mediump float;
    varying vec2 vUv; uniform float uAmount; uniform vec3 uColor;
    void main() {
      vec2 p = (vUv - 0.5) * vec2(1.12, 1.0);
      float v = smoothstep(0.44, 0.96, length(p));
      gl_FragColor = vec4(uColor, v * uAmount);
    }`;

  function compile(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const log = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error(`shader: ${log}`);
    }
    return shader;
  }
  function program(gl, vertSource, fragSource, attributes) {
    const programObject = gl.createProgram();
    const vert = compile(gl, gl.VERTEX_SHADER, vertSource);
    const frag = compile(gl, gl.FRAGMENT_SHADER, fragSource);
    gl.attachShader(programObject, vert);
    gl.attachShader(programObject, frag);
    for (const [name, index] of Object.entries(attributes || {})) gl.bindAttribLocation(programObject, index, name);
    gl.linkProgram(programObject);
    gl.deleteShader(vert); gl.deleteShader(frag);
    if (!gl.getProgramParameter(programObject, gl.LINK_STATUS)) throw new Error(`link: ${gl.getProgramInfoLog(programObject)}`);
    const uniforms = {};
    const count = gl.getProgramParameter(programObject, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < count; i += 1) {
      const info = gl.getActiveUniform(programObject, i);
      if (info) uniforms[info.name] = gl.getUniformLocation(programObject, info.name);
    }
    return { program: programObject, uniforms };
  }

  // ───────────────────────────────── mesh building ─────────────────────────────────
  const FLOATS_PER_VERTEX = 12; // pos3 normal3 color3 info3
  class MeshBuilder {
    constructor() { this.data = []; }
    vertex(x, y, z, n, c, ground, spray, mode) {
      this.data.push(x, y, z, n[0], n[1], n[2], c[0], c[1], c[2], ground, spray, mode);
    }
    triangle(a, b, c) {
      for (const v of [a, b, c]) this.data.push(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11]);
    }
    quad(p0, p1, p2, p3, normal, c, ground, spray, mode) {
      const v = p => [p[0], p[1], p[2], normal[0], normal[1], normal[2], c[0], c[1], c[2], ground, spray, mode];
      const a = v(p0); const b = v(p1); const cc = v(p2); const d = v(p3);
      this.triangle(a, b, cc); this.triangle(a, cc, d);
    }
    flatQuadY(y, x0, z0, x1, z1, c, ground, spray, mode) {
      this.quad([x0, y, z0], [x1, y, z0], [x1, y, z1], [x0, y, z1], [0, 1, 0], c, ground, spray, mode);
    }
    // A slab with a lit top face, shaded sides and a slim painted border on top.
    // Culling is disabled, so winding is cosmetic — every face is always visible.
    box(cx, cy, cz, width, height, depth, c, options = {}) {
      const ground = options.ground != null ? options.ground : 0;
      const spray = options.spray != null ? options.spray : 0.6;
      const mode = options.mode || 0;
      const hx = Math.max(0.001, width / 2); const hy = Math.max(0.001, height / 2); const hz = Math.max(0.001, depth / 2);
      const top = color.shade(c, 1.10);
      const bottom = color.shade(c, 0.66);
      const front = color.shade(c, 1.0);
      const back = color.shade(c, 0.84);
      const right = color.shade(c, 0.94);
      const left = color.shade(c, 0.91);
      this.quad([cx - hx, cy + hy, cz - hz], [cx + hx, cy + hy, cz - hz], [cx + hx, cy + hy, cz + hz], [cx - hx, cy + hy, cz + hz], [0, 1, 0], top, ground, spray, mode);
      this.quad([cx - hx, cy - hy, cz + hz], [cx + hx, cy - hy, cz + hz], [cx + hx, cy - hy, cz - hz], [cx - hx, cy - hy, cz - hz], [0, -1, 0], bottom, ground, spray, mode);
      this.quad([cx - hx, cy - hy, cz + hz], [cx + hx, cy - hy, cz + hz], [cx + hx, cy + hy, cz + hz], [cx - hx, cy + hy, cz + hz], [0, 0, 1], front, ground, spray, mode);
      this.quad([cx + hx, cy - hy, cz - hz], [cx - hx, cy - hy, cz - hz], [cx - hx, cy + hy, cz - hz], [cx + hx, cy + hy, cz - hz], [0, 0, -1], back, ground, spray, mode);
      this.quad([cx + hx, cy - hy, cz + hz], [cx + hx, cy - hy, cz - hz], [cx + hx, cy + hy, cz - hz], [cx + hx, cy + hy, cz + hz], [1, 0, 0], right, ground, spray, mode);
      this.quad([cx - hx, cy - hy, cz - hz], [cx - hx, cy - hy, cz + hz], [cx - hx, cy + hy, cz + hz], [cx - hx, cy + hy, cz - hz], [-1, 0, 0], left, ground, spray, mode);
      if (options.border) {
        const inset = Math.min(hx, hz) * 0.14;
        const edge = options.borderColor || color.mix(c, [1, 1, 1], 0.4);
        const y = cy + hy + 0.0015;
        const bx0 = cx - hx + inset; const bx1 = cx + hx - inset;
        const bz0 = cz - hz + inset; const bz1 = cz + hz - inset;
        const t = Math.max(0.004, Math.min(hx, hz) * 0.055);
        this.flatQuadY(y, bx0, bz0, bx1, bz0 + t, edge, ground, spray, options.borderMode != null ? options.borderMode : mode);
        this.flatQuadY(y, bx0, bz1 - t, bx1, bz1, edge, ground, spray, options.borderMode != null ? options.borderMode : mode);
        this.flatQuadY(y, bx0, bz0 + t, bx0 + t, bz1 - t, edge, ground, spray, options.borderMode != null ? options.borderMode : mode);
        this.flatQuadY(y, bx1 - t, bz0 + t, bx1, bz1 - t, edge, ground, spray, options.borderMode != null ? options.borderMode : mode);
      }
    }
  }

  const createMesh = gl => ({ buffer: gl.createBuffer(), count: 0 });
  function uploadMesh(gl, mesh, builder) {
    if (!builder || !builder.data.length) { mesh.count = 0; return; }
    gl.bindBuffer(gl.ARRAY_BUFFER, mesh.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(builder.data), gl.STATIC_DRAW);
    mesh.count = builder.data.length / FLOATS_PER_VERTEX;
  }
  // Attribute enable state is global in WebGL, so every draw declares exactly the lanes it reads.
  function bindSceneAttributes(gl) {
    for (let lane = 0; lane < 4; lane += 1) gl.enableVertexAttribArray(lane);
  }
  function bindQuadAttributes(gl) {
    gl.enableVertexAttribArray(0);
    for (let lane = 1; lane < 4; lane += 1) gl.disableVertexAttribArray(lane);
  }
  function drawMesh(gl, mesh) {
    if (!mesh || !mesh.count) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, mesh.buffer);
    const stride = FLOATS_PER_VERTEX * 4;
    bindSceneAttributes(gl);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, stride, 0);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, stride, 12);
    gl.vertexAttribPointer(2, 3, gl.FLOAT, false, stride, 24);
    gl.vertexAttribPointer(3, 3, gl.FLOAT, false, stride, 36);
    gl.drawArrays(gl.TRIANGLES, 0, mesh.count);
  }
  function splitMesh(builder) {
    const solid = new MeshBuilder(); const glow = new MeshBuilder();
    for (let i = 0; i < builder.data.length; i += FLOATS_PER_VERTEX) {
      const mode = Math.round(builder.data[i + 11]);
      const target = mode === 2 ? glow : solid;
      for (let k = 0; k < FLOATS_PER_VERTEX; k += 1) target.data.push(builder.data[i + k]);
    }
    return { solid, glow };
  }

  // ───────────────────────────────── static world ─────────────────────────────────
  function buildTerrain(theme) {
    const builder = new MeshBuilder();
    const ground = color.parse(theme.ground);
    const deep = color.parse(theme.groundDeep);
    const cliff = color.parse(theme.cliff);

    const FLOOR = -0.30;            // the flat top the pedestal stands on
    const R = 4.35;                 // nominal island radius
    const FLAT = 3.15;              // dead-flat zone under the stage
    const rings = 24, segments = 144;
    const rimRadius = angle => R * (0.84 + 0.14 * fbm(Math.cos(angle) * 1.6 + 3.4, Math.sin(angle) * 1.6 + 8.1, 3));
    const rimDepth = angle => 0.55 + 0.85 * fbm(Math.cos(angle) * 2.1 + 12.3, Math.sin(angle) * 2.1 + 1.7, 3);

    const tintOf = (y, slope) => {
      const t = clamp((y + 3.6) / 4.0, 0, 1);
      const base = color.mix(deep, ground, smoothstep(0.05, 0.9, t));
      return color.mix(base, cliff, clamp(slope * 2.2, 0, 0.6));
    };

    // Radial heightfield: flat stage floor that eases down to a jagged rim.
    const topPoint = (angle, radius, edgeDepth) => {
      const out = radius / Math.max(0.001, rimRadius(angle));
      const drop = smoothstep(FLAT / R, 1, out) * edgeDepth;
      const ripple = (fbm(Math.cos(angle) * radius * 1.1 + 5.2, Math.sin(angle) * radius * 1.1 + 2.4, 3) - 0.5)
        * 0.10 * smoothstep(FLAT * 0.6, FLAT * 1.2, radius);
      return FLOOR - drop + ripple;
    };

    const slopeAt = (angle, radius, edgeDepth) => {
      const e = 0.06;
      const dy = topPoint(angle, Math.max(0.001, radius - e), edgeDepth) - topPoint(angle, radius + e, edgeDepth);
      return Math.abs(dy) / (2 * e);
    };

    const pushTri = (a, b, c) => {
      const pts = [a, b, c];
      const ux = b.x - a.x, uy = b.y - a.y, uz = b.z - a.z;
      const vx = c.x - a.x, vy = c.y - a.y, vz = c.z - a.z;
      let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
      const len = Math.hypot(nx, ny, nz) || 1; nx /= len; ny /= len; nz /= len;
      const slope = Math.max((Math.abs(a.dy || 0) + Math.abs(b.dy || 0) + Math.abs(c.dy || 0)) / 3, 0.04);
      for (const p of pts) {
        builder.vertex(p.x, p.y, p.z, [nx, ny, nz], color.shade(tintOf(p.y, slope), p.shade), p.y, 0.4 + slope * 0.5, 3);
      }
    };

    const ringPoint = (i, j) => {
      const angle = (j / segments) * TAU;
      const rr = rimRadius(angle);
      const t = i / rings;
      // Push samples toward the rim so the edge silhouette is well tessellated.
      const radius = rr * Math.pow(t, 0.82);
      const edgeDepth = rimDepth(angle);
      const y = topPoint(angle, radius, edgeDepth);
      return {
        x: Math.cos(angle) * radius, y, z: Math.sin(angle) * radius,
        dy: slopeAt(angle, Math.max(0.02, radius), edgeDepth),
        shade: 0.94 + ((i * 7 + j * 13) % 5) / 5 * 0.12
      };
    };

    for (let i = 0; i < rings; i += 1) {
      for (let j = 0; j < segments; j += 1) {
        const p00 = ringPoint(i, j), p10 = ringPoint(i + 1, j);
        const p11 = ringPoint(i + 1, j + 1), p01 = ringPoint(i, j + 1);
        if ((i + j) % 2 === 0) { pushTri(p00, p11, p10); pushTri(p00, p01, p11); }
        else { pushTri(p00, p01, p10); pushTri(p10, p01, p11); }
      }
    }

    // Underside: a rugged cone hanging off the rim, drawn double-sided via reversed winding.
    const undersideSteps = 11;
    const underside = [];
    for (let i = 0; i <= undersideSteps; i += 1) {
      const t = i / undersideSteps;
      const radiusScale = Math.pow(1 - t, 0.78);
      const y = FLOOR - rimDepth(0) - 0.35 - Math.pow(t, 0.72) * 5.4;
      const row = [];
      for (let j = 0; j <= segments; j += 1) {
        const angle = (j / segments) * TAU;
        const jitter = 1 + (fbm(Math.cos(angle) * 3.1 + t * 4.7, Math.sin(angle) * 3.1 + t * 2.3, 3) - 0.5) * 0.42 * (1 - t * 0.4);
        const radius = rimRadius(angle) * 0.985 * radiusScale * jitter;
        row.push({
          x: Math.cos(angle) * radius, y: y + (fbm(angle * 2.3 + t * 3.1, t * 6.1, 2) - 0.5) * 0.55 * (1 - t),
          z: Math.sin(angle) * radius, shade: 0.72 + ((i * 5 + j * 3) % 4) / 4 * 0.16
        });
      }
      underside.push(row);
    }
    for (let i = 0; i < undersideSteps; i += 1) {
      for (let j = 0; j < segments; j += 1) {
        const a = underside[i][j], b = underside[i][j + 1], c = underside[i + 1][j], d = underside[i + 1][j + 1];
        const tri = (p, q, r) => {
          const ux = q.x - p.x, uy = q.y - p.y, uz = q.z - p.z;
          const vx = r.x - p.x, vy = r.y - p.y, vz = r.z - p.z;
          let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
          const len = Math.hypot(nx, ny, nz) || 1; nx /= len; ny /= len; nz /= len;
          if (ny > 0) { nx = -nx; ny = -ny; nz = -nz; }
          const tone = color.shade(color.mix(deep, cliff, 0.45), p.shade);
          for (const v of [p, q, r]) builder.vertex(v.x, v.y, v.z, [nx, ny, nz], tone, v.y, 0.3, 3);
        };
        tri(a, b, c); tri(b, d, c);
      }
    }

    // Painted grid across the flat stage floor.
    const gridColor = color.mix(color.parse(theme.rim), [1, 1, 1], 0.34);
    const gridY = FLOOR + 0.004;
    for (let i = -5; i <= 5; i += 1) {
      const extent = Math.sqrt(Math.max(0, FLAT * FLAT * 0.88 - (i * 0.4) ** 2));
      builder.flatQuadY(gridY, i * 0.4 - 0.005, -extent, i * 0.4 + 0.005, extent, color.shade(gridColor, 0.72), gridY, 0.2, 2);
      builder.flatQuadY(gridY, -extent, i * 0.4 - 0.005, extent, i * 0.4 + 0.005, color.shade(gridColor, 0.72), gridY, 0.2, 2);
    }

    // Distant floor: a low mesa field far below the island, so it floats above a landscape
    // rather than hanging in empty sky.
    const mesaRings = 34;
    const mesaSteps = 9;
    const mesa = (angle, t) => {
      const radius = 11 + t * 26;
      const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
      const ridge = fbm(x * 0.09 + 3.3, z * 0.09 + 9.1, 4);
      const detail = fbm(x * 0.42 + 1.1, z * 0.42 + 4.7, 3);
      return {
        x, z,
        y: -7.4 + (ridge - 0.34) * 6.4 * (0.4 + t * 0.9) + (detail - 0.5) * 0.7,
        shade: 0.86 + ((Math.round(t * 10) * 7 + Math.round(angle * 20) * 3) % 5) / 5 * 0.2
      };
    };
    const mesaGrid = [];
    for (let i = 0; i <= mesaSteps; i += 1) {
      const row = [];
      for (let j = 0; j <= mesaRings; j += 1) row.push(mesa((j / mesaRings) * TAU, i / mesaSteps));
      mesaGrid.push(row);
    }
    for (let i = 0; i < mesaSteps; i += 1) {
      for (let j = 0; j < mesaRings; j += 1) {
        const a = mesaGrid[i][j], b = mesaGrid[i][j + 1], c = mesaGrid[i + 1][j], d = mesaGrid[i + 1][j + 1];
        const tri = (p, q, r) => {
          const ux = q.x - p.x, uy = q.y - p.y, uz = q.z - p.z;
          const vx = r.x - p.x, vy = r.y - p.y, vz = r.z - p.z;
          let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
          if (ny < 0) { nx = -nx; ny = -ny; nz = -nz; }
          const len = Math.hypot(nx, ny, nz) || 1;
          const tone = color.shade(color.mix(deep, cliff, 0.55), (p.shade + q.shade + r.shade) / 3);
          for (const v of [p, q, r]) builder.vertex(v.x, v.y, v.z, [nx / len, ny / len, nz / len], tone, v.y, 0.5, 3);
        };
        tri(a, b, c); tri(b, d, c);
      }
    }
    return builder;
  }

  function buildSkyline(theme, seed) {
    const builder = new MeshBuilder();
    const building = color.parse(theme.building);
    const windowColor = color.parse(theme.window);
    // A far ring of small towers on the horizon. The mesa field already supplies the large shapes;
    // these add scale cues without ever competing with the tower in the middle.
    const count = 64;
    for (let i = 0; i < count; i += 1) {
      const angle = (i / count) * TAU + hash1(i + seed) * 0.09;
      const radius = 30 + hash1(i * 3.7 + seed) * 26;
      const height = 0.7 + hash1(i * 7.3 + seed * 2) * 3.0;
      const width = 0.5 + hash1(i * 11.9 + seed) * 1.05;
      const depth = 0.5 + hash1(i * 5.1 + seed) * 0.9;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const baseY = -7.6 - hash1(i * 2.3) * 2.2;
      const tint = color.shade(building, 0.74 + hash1(i * 1.31) * 0.38);
      builder.box(x, baseY + height / 2, z, width, height, depth, tint, { ground: baseY, spray: width * 0.7, mode: 0 });
      if (hash1(i * 17.3) > 0.55) {
        const inward = Math.atan2(-z, -x);
        const s = Math.min(0.12, width * 0.22);
        builder.box(x + Math.cos(inward) * (width / 2 + 0.02), baseY + height * 0.62, z + Math.sin(inward) * (depth / 2 + 0.02),
          s, s * 1.5, s, windowColor, { ground: baseY, spray: 0.1, mode: 2 });
      }
    }
    return builder;
  }

  function buildPlinth(theme) {
    const builder = new MeshBuilder();
    const plinth = color.parse(theme.plinth);
    const top = color.parse(theme.plinthTop);
    const rim = color.parse(theme.rim);
    const HW = STAGE.width / 2, HD = STAGE.depth / 2;
    const LW = STAGE.lipWidth / 2, LD = STAGE.lipDepth / 2;
    // Two shallow slabs — a gallery pedestal, not a building. The lower slab flares out; the upper
    // one carries the play line. Base sits on the stage floor (-0.30); top is exactly y = 0.
    builder.box(0, -0.252, 0, STAGE.width, 0.096, STAGE.depth, plinth, { ground: 0, spray: 1.0, mode: 0 });
    builder.box(0, -0.156, 0, STAGE.width - 0.10, 0.096, STAGE.depth - 0.08, color.shade(plinth, 1.03), { ground: 0, spray: 1.0, mode: 0 });
    builder.box(0, -0.044, 0, LW, 0.128, LD, top, { ground: 0, spray: 0.95, mode: 0 });
    // Inlaid hairline border tracing the play surface.
    const rimY = 0.0215;
    builder.flatQuadY(rimY, -LW + 0.05, -LD + 0.05, LW - 0.05, -LD + 0.072, rim, 0, 0.35, 2);
    builder.flatQuadY(rimY, -LW + 0.05, LD - 0.072, LW - 0.05, LD - 0.05, rim, 0, 0.35, 2);
    builder.flatQuadY(rimY, -LW + 0.05, -LD + 0.072, -LW + 0.072, LD - 0.072, rim, 0, 0.35, 2);
    builder.flatQuadY(rimY, LW - 0.072, -LD + 0.072, LW - 0.05, LD - 0.072, rim, 0, 0.35, 2);
    // Emissive studs along the flared lower slab.
    for (let i = 0; i < 30; i += 1) {
      const angle = (i / 30) * TAU;
      builder.box(Math.cos(angle) * (HW - 0.06), -0.252, Math.sin(angle) * (HD - 0.05), 0.048, 0.048, 0.048, rim, { ground: 0, spray: 0.2, mode: 2 });
    }
    return builder;
  }

  function buildTowerMesh(stack, bow, theme, options = {}) {
    const builder = new MeshBuilder();
    const maxLevel = Math.max(1, stack.length - 1);
    for (let i = 0; i < stack.length; i += 1) {
      const block = stack[i];
      const level = Number.isInteger(block.level) ? block.level : i;
      const t = clamp(level / maxLevel, 0, 1);
      const k = wHalfAt(level);
      const centre2d = (Number(block.left) + Number(block.right)) / 2;
      const width2d = Math.max(1, Number(block.right) - Number(block.left));
      const cx = ((centre2d - W.half) / W.half) * k + bowAt(level, bow);
      const width = (width2d / W.half) * k;
      const depth = Math.max(0.15, width * W.depthRatio);
      const baseColor = color.parse(block.color || theme.rim);
      const lightTint = 0.95 + t * 0.08;
      builder.box(cx, level * W.blockH + W.blockH / 2, 0, width, W.blockH * 0.965, depth,
        color.shade(baseColor, lightTint),
        { ground: 0, spray: 0.85 + t * 0.35, mode: 0, border: true, borderColor: color.mix(baseColor, [1, 1, 1], 0.32) });
      if (block.perfect && width > 0.14) {
        builder.flatQuadY(level * W.blockH + W.blockH * 0.958, cx - width * 0.47, -depth * 0.5, cx + width * 0.47, -depth * 0.4, color.parse(theme.rim), 0, 0.5, 2);
        builder.flatQuadY(level * W.blockH + W.blockH * 0.958, cx - width * 0.47, depth * 0.4, cx + width * 0.47, depth * 0.5, color.parse(theme.rim), 0, 0.5, 2);
      }
    }
    return builder;
  }

  // ───────────────────────────────── sprite (particle) rendering ─────────────────────────────────
  class SpriteField {
    constructor(capacity = 1200) {
      this.capacity = capacity;
      this.items = [];
      this.alphaData = new Float32Array(capacity * 6 * 10);
      this.additiveData = new Float32Array(capacity * 6 * 10);
      this.floatsPerVertex = 10; // pos3 corner2 rgba4 shape1
    }
    spawn(spec) {
      if (this.items.length >= this.capacity) this.items.shift();
      this.items.push({
        x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, life: 0, max: 1, size: 0.1, sizeEnd: 0.02,
        color: [1, 1, 1], alpha: 1, shape: 0, gravity: 0, drag: 0.98, additive: false, fadeIn: 0, ...spec
      });
    }
    update(dt) {
      const alive = [];
      for (const p of this.items) {
        p.life += dt;
        if (p.life >= p.max) continue;
        p.vy -= p.gravity * dt;
        const drag = Math.pow(clamp(p.drag, 0.5, 1), Math.min(4, dt * 60));
        p.vx *= drag; p.vy *= drag; p.vz *= drag;
        p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
        if (![p.x, p.y, p.z].every(Number.isFinite)) continue;
        alive.push(p);
      }
      this.items = alive;
    }
    clear() { this.items.length = 0; }
    build(right, up) {
      let alphaCount = 0; let additiveCount = 0;
      const corners = [[-1, -1], [1, -1], [1, 1], [-1, -1], [1, 1], [-1, 1]];
      for (const p of this.items) {
        const t = clamp(p.life / p.max, 0, 1);
        const fadeIn = p.fadeIn ? smoothstep(0, p.fadeIn, t) : 1;
        const size = lerp(p.size, p.sizeEnd, t);
        const alpha = p.alpha * fadeIn * (1 - smoothstep(0.62, 1, t));
        if (alpha <= 0.003 || size <= 0.0004) continue;
        const target = p.additive ? this.additiveData : this.alphaData;
        const index = p.additive ? additiveCount : alphaCount;
        if (index >= this.capacity) { if (p.additive) additiveCount += 1; else alphaCount += 1; continue; }
        for (let v = 0; v < 6; v += 1) {
          const [cu, cv] = corners[v];
          const base = (index * 6 + v) * 10;
          target[base] = p.x + right[0] * size * cu + up[0] * size * cv;
          target[base + 1] = p.y + right[1] * size * cu + up[1] * size * cv;
          target[base + 2] = p.z + right[2] * size * cu + up[2] * size * cv;
          target[base + 3] = cu; target[base + 4] = cv;
          target[base + 5] = p.color[0]; target[base + 6] = p.color[1]; target[base + 7] = p.color[2];
          target[base + 8] = alpha; target[base + 9] = p.shape;
        }
        if (p.additive) additiveCount += 1; else alphaCount += 1;
      }
      return { alpha: alphaCount, additive: additiveCount };
    }
  }

  // ───────────────────────────────── engine ─────────────────────────────────
  function createEngine(options = {}) {
    const container = options.container;
    if (!container) throw new Error('Scene3D needs a container element.');
    const canvas = document.createElement('canvas');
    canvas.className = options.className || 'scene3d-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none;z-index:0;';
    container.appendChild(canvas);

    const attr = { alpha: false, antialias: true, depth: true, stencil: false, premultipliedAlpha: false, preserveDrawingBuffer: false, powerPreference: 'high-performance', failIfMajorPerformanceCaveat: false };
    let gl = null;
    try { gl = canvas.getContext('webgl2', attr) || canvas.getContext('webgl', attr) || canvas.getContext('experimental-webgl', attr); } catch (_) { gl = null; }
    if (!gl) { canvas.remove(); throw new Error('WebGL unavailable'); }

    const state = {
      ok: true, canvas, gl, width: 360, height: 520, dpr: 1,
      theme: themeFor(options.theme), themeName: options.theme in THEMES ? options.theme : 'paper',
      reducedMotion: Boolean(options.reducedMotion),
      time: 0, zoom: 0, cameraShake: 0, shakeSeed: Math.random() * 10,
      camera: null, lastStackLength: -1, lastPerfects: -1, lastEffectId: '', lastPhase: '',
      towerMesh: createMesh(gl), glowMesh: createMesh(gl),
      terrainMesh: createMesh(gl), plinthMesh: createMesh(gl), skylineMesh: createMesh(gl),
      dynMesh: createMesh(gl), dynGlowMesh: createMesh(gl),
      cachedStackKey: '', particles: new SpriteField(1300),
      flash: 0, flashColor: [1, 1, 1], punch: 0, heroClock: 0,
      bow: 0, towerTop: 0, towerRadius: 0.55, decorationsBuilt: false,
      orbit: { yaw: 0, pitch: 0, zoom: 1, targetYaw: 0, targetPitch: 0, targetZoom: 1 },
      confettiTimer: 0, heroMoverX: 0, heroMoverDir: 1, lastThemeName: ''
    };

    let programs = {};
    try {
      programs = {
        scene: program(gl, VERT_SCENE, FRAG_SCENE, { aPos: 0, aNormal: 1, aColor: 2, aInfo: 3 }),
        sky: program(gl, VERT_SKY, FRAG_SKY, { aPos: 0 }),
        sprite: program(gl, VERT_SPRITE, FRAG_SPRITE, { aPos: 0, aCorner: 1, aColor: 2, aShape: 3 }),
        veil: program(gl, VERT_QUAD, FRAG_VEIL, { aPos: 0 }),
        vignette: program(gl, VERT_QUAD, FRAG_VIGNETTE, { aPos: 0 })
      };
    } catch (error) {
      canvas.remove();
      try { const lose = gl.getExtension('WEBGL_lose_context'); if (lose) lose.loseContext(); } catch (_) { /* ignore */ }
      throw error;
    }

    const buffers = { quad: gl.createBuffer(), spritesAlpha: gl.createBuffer(), spritesAdditive: gl.createBuffer(), dynamic: gl.createBuffer() };
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.quad);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    gl.disable(gl.CULL_FACE);
    gl.depthFunc(gl.LEQUAL);
    gl.enable(gl.DEPTH_TEST);

    const rnd = (seed => () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; })(Math.floor(Math.random() * 1000) + 11);

    function rebuildDecorations() {
      uploadMesh(gl, state.terrainMesh, buildTerrain(state.theme));
      uploadMesh(gl, state.plinthMesh, buildPlinth(state.theme));
      uploadMesh(gl, state.skylineMesh, buildSkyline(state.theme, state.themeName === 'sunset' ? 7 : state.themeName === 'primetime' ? 13 : 1));
      state.decorationsBuilt = true;
    }

    function resize() {
      try {
        const rect = container.getBoundingClientRect ? container.getBoundingClientRect() : { width: 0, height: 0 };
        const cssWidth = Math.max(1, Math.round(rect.width || container.clientWidth || 360));
        const cssHeight = Math.max(1, Math.round(rect.height || container.clientHeight || 520));
        const dpr = clamp((typeof window !== 'undefined' && window.devicePixelRatio) || 1, 1, 2);
        const pixelWidth = Math.round(cssWidth * dpr); const pixelHeight = Math.round(cssHeight * dpr);
        if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) { canvas.width = pixelWidth; canvas.height = pixelHeight; }
        state.width = cssWidth; state.height = cssHeight; state.dpr = dpr;
        gl.viewport(0, 0, canvas.width, canvas.height);
      } catch (_) { /* keep last size */ }
    }

    // ── camera ──
    // Project a world point through a candidate camera, returning normalised device coords.
    function projectWith(camera, x, y, z) {
      const clip = mat4.project(mat4.multiply(camera.proj, camera.view), x, y, z);
      if (clip[3] <= 0.001) return null;
      return { x: clip[0] / clip[3], y: clip[1] / clip[3] };
    }

    function cameraFor(mode, extra = {}) {
      const towerHeight = Math.max(W.blockH, state.towerTop);
      const aspect = state.width / Math.max(1, state.height);
      const autoYaw = state.reducedMotion ? 0 : Math.sin(state.time * 0.12) * 0.13;
      const yaw = 0.5 + autoYaw + state.orbit.yaw;
      const pitch = (mode === 'hero' ? 0.26 : 0.235) + state.orbit.pitch + (extra.focusTop ? 0.07 : 0);
      const aspectFov = aspect < 0.78 ? 46 : aspect < 0.95 ? 42 : 38;
      const fov = (mode === 'hero' ? Math.max(32, aspectFov - 4) : aspectFov) - state.zoom * 6 - (extra.focusTop ? 4 : 0);

      // Frame the diorama by its real extents: pedestal footprint plus the tower and the incoming
      // block above it. Solving by projection keeps the tower large on portrait boards without
      // ever cropping the play surface — no per-aspect distance table needed.
      const stageHalfX = STAGE.width / 2, stageHalfZ = STAGE.depth / 2;
      const stageBottom = -0.30;
      const moverTop = towerHeight + W.blockH * 1.7;
      const contentTop = moverTop + W.blockH;
      // Centre the frame on the whole diorama — pedestal base to the incoming block — so a short
      // tower never leaves the plinth hanging off the bottom edge.
      const focus = mode === 'hero' ? 0.42 : 0.46;
      const targetY = extra.targetY != null ? extra.targetY : stageBottom + (contentTop - stageBottom) * focus;
      // Points that must stay in frame: the pedestal footprint (top and base) plus the tower.
      const corners = [];
      for (const sx of [-1, 1]) {
        for (const sz of [-1, 1]) {
          corners.push([sx * stageHalfX, stageBottom, sz * stageHalfZ]);
          corners.push([sx * stageHalfX, 0, sz * stageHalfZ]);
        }
      }
      for (const sy of [stageBottom, contentTop]) corners.push([0, sy, 0]);
      const limitX = 0.96, limitY = 0.94;
      const buildAt = distance => {
        const cosPitch = Math.cos(pitch);
        const eye = [Math.sin(yaw) * cosPitch * distance, targetY + Math.sin(pitch) * distance, Math.cos(yaw) * cosPitch * distance];
        const view = mat4.lookAt(eye, [0, targetY, 0], [0, 1, 0]);
        const proj = mat4.perspective(fov * Math.PI / 180, aspect, 0.03, 160);
        return { eye, target: [0, targetY, 0], view, proj };
      };
      const fits = distance => {
        const probe = buildAt(distance);
        for (const point of corners) {
          const ndc = projectWith(probe, point[0], point[1], point[2]);
          if (!ndc || Math.abs(ndc.x) > limitX || Math.abs(ndc.y) > limitY) return false;
        }
        return true;
      };
      let low = 1.4, high = 26;
      // If even the far bound crops, widen it rather than silently accepting a cropped frame.
      if (!fits(high)) { low = high; high = 60; }
      for (let i = 0; i < 20; i += 1) {
        const mid = (low + high) / 2;
        if (fits(mid)) high = mid; else low = mid;
      }
      // Zoom sabotages narrow the field; the orbit dial is a user-scale multiplier on top.
      const distance = high * 1.005 / clamp(state.orbit.zoom, 0.7, 1.45) * (extra.focusTop ? 0.78 : 1);
      const camera = buildAt(distance);
      if (state.cameraShake > 0 && !state.reducedMotion) {
        const t = state.time * 46 + state.shakeSeed * 10;
        camera.eye[0] += Math.sin(t * 1.7) * state.cameraShake * 0.075;
        camera.eye[1] += Math.sin(t * 2.3) * state.cameraShake * 0.055;
        camera.eye[2] += Math.cos(t * 1.3) * state.cameraShake * 0.045;
        camera.view = mat4.lookAt(camera.eye, camera.target, [0, 1, 0]);
      }
      const { eye, target, view, proj } = camera;
      const fwd = [target[0] - eye[0], target[1] - eye[1], target[2] - eye[2]];
      const fwdLen = Math.hypot(fwd[0], fwd[1], fwd[2]) || 1;
      const forward = [fwd[0] / fwdLen, fwd[1] / fwdLen, fwd[2] / fwdLen];
      const right = [forward[2], 0, -forward[0]];
      const rightLen = Math.hypot(right[0], 1e-6, right[2]) || 1;
      right[0] /= rightLen; right[1] = 0; right[2] /= rightLen;
      const up = [
        right[1] * forward[2] - right[2] * forward[1],
        right[2] * forward[0] - right[0] * forward[2],
        right[0] * forward[1] - right[1] * forward[0]
      ];
      return { eye, target, view, proj, right, up, forward, fov, aspect, distance };
    }

    // ── uniforms ──
    function setSceneUniforms(camera, extra = {}) {
      const u = programs.scene.uniforms;
      gl.useProgram(programs.scene.program);
      gl.uniformMatrix4fv(u.uProj, false, camera.proj);
      gl.uniformMatrix4fv(u.uView, false, camera.view);
      gl.uniform3fv(u.uCamPos, new Float32Array(camera.eye));
      const theme = state.theme;
      const lightLength = Math.hypot(theme.sunDir[0], theme.sunDir[1], theme.sunDir[2]) || 1;
      gl.uniform3fv(u.uLightDir, new Float32Array(theme.sunDir.map(v => v / lightLength)));
      gl.uniform3fv(u.uSunColor, new Float32Array(color.parse(theme.sunColor)));
      gl.uniform3fv(u.uSkyColor, new Float32Array(color.parse(theme.skyColor)));
      gl.uniform3fv(u.uFogColor, new Float32Array(color.parse(theme.fog)));
      gl.uniform1f(u.uFogDensity, theme.fogDensity * (extra.fogScale || 1));
      gl.uniform1f(u.uTime, state.time);
      gl.uniform1f(u.uAlpha, extra.alpha != null ? extra.alpha : 1);
      gl.uniform1f(u.uTowerTop, state.towerTop);
      gl.uniform1f(u.uTowerRadius, state.towerRadius);
      gl.uniform1f(u.uGroundShadow, extra.groundShadow == null ? 1 : extra.groundShadow);
      gl.uniform3fv(u.uInk, new Float32Array(color.parse(theme.ink)));
      gl.uniform3fv(u.uAmbient, new Float32Array(theme.ambient));
      gl.uniform1f(u.uContrast, theme.contrast == null ? 1 : theme.contrast);
    }

    function drawStatic(mesh, camera, extra = {}) {
      setSceneUniforms(camera, extra);
      drawMesh(gl, mesh);
    }
    function drawGlow(mesh, camera, extra = {}) {
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.depthMask(false);
      setSceneUniforms(camera, extra);
      drawMesh(gl, mesh);
      gl.depthMask(true);
      gl.disable(gl.BLEND);
    }

    function drawSky(camera) {
      const u = programs.sky.uniforms;
      gl.useProgram(programs.sky.program);
      gl.disable(gl.DEPTH_TEST);
      gl.depthMask(false);
      const theme = state.theme;
      gl.uniform3fv(u.uCamRight, new Float32Array(camera.right));
      gl.uniform3fv(u.uCamUp, new Float32Array(camera.up));
      gl.uniform3fv(u.uCamFwd, new Float32Array(camera.forward));
      gl.uniform1f(u.uTanHalf, Math.tan((camera.fov * Math.PI / 180) / 2));
      gl.uniform1f(u.uAspect, camera.aspect);
      gl.uniform3fv(u.uTop, new Float32Array(color.parse(theme.skyTop)));
      gl.uniform3fv(u.uHorizon, new Float32Array(color.parse(theme.skyHorizon)));
      gl.uniform3fv(u.uLow, new Float32Array(color.parse(theme.skyLow)));
      gl.uniform3fv(u.uSunColor, new Float32Array(color.parse(theme.sun)));
      gl.uniform3fv(u.uSunDir, new Float32Array(theme.sunDir));
      gl.uniform1f(u.uStars, theme.stars);
      gl.uniform1f(u.uAurora, theme.aurora);
      gl.uniform1f(u.uGlow, theme.horizonGlow);
      gl.uniform1f(u.uTime, state.time);
      gl.uniform1f(u.uGrain, theme.grain);
      gl.uniform1f(u.uTheme, theme.key === 'sunset' ? 1 : theme.key === 'primetime' ? 2 : 0);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.quad);
      bindQuadAttributes(gl);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      gl.depthMask(true);
      gl.enable(gl.DEPTH_TEST);
    }

    function drawSprites(camera, counts) {
      if (!counts.alpha && !counts.additive) return;
      const u = programs.sprite.uniforms;
      gl.useProgram(programs.sprite.program);
      gl.uniformMatrix4fv(u.uProj, false, camera.proj);
      gl.uniformMatrix4fv(u.uView, false, camera.view);
      gl.depthMask(false);
      gl.enable(gl.BLEND);
      const bind = (buffer, data, count) => {
        if (!count) return;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, data.subarray(0, count * 6 * 10), gl.DYNAMIC_DRAW);
        const stride = 10 * 4;
        bindSceneAttributes(gl);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, stride, 0);
        gl.vertexAttribPointer(1, 2, gl.FLOAT, false, stride, 12);
        gl.vertexAttribPointer(2, 4, gl.FLOAT, false, stride, 20);
        gl.vertexAttribPointer(3, 1, gl.FLOAT, false, stride, 36);
        gl.drawArrays(gl.TRIANGLES, 0, count * 6);
      };
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
      bind(buffers.spritesAdditive, state.particles.additiveData, counts.additive);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      bind(buffers.spritesAlpha, state.particles.alphaData, counts.alpha);
      gl.depthMask(true);
      gl.disable(gl.BLEND);
    }

    function drawFlash(amount, flashColor) {
      if (!amount || amount <= 0.002) return;
      const u = programs.vignette.uniforms;
      gl.useProgram(programs.vignette.program);
      gl.disable(gl.DEPTH_TEST);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
      gl.uniform1f(u.uAmount, Math.min(0.55, amount));
      gl.uniform3fv(u.uColor, new Float32Array(flashColor || [1, 1, 1]));
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.quad);
      bindQuadAttributes(gl);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      gl.disable(gl.BLEND);
      gl.enable(gl.DEPTH_TEST);
    }

    function drawVignette(amountOverride, colorOverride, additive) {
      const theme = state.theme;
      const amount = amountOverride != null ? amountOverride : theme.vignette;
      if (!amount) return;
      const u = programs.vignette.uniforms;
      gl.useProgram(programs.vignette.program);
      gl.disable(gl.DEPTH_TEST);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, additive ? gl.ONE : gl.ONE_MINUS_SRC_ALPHA);
      gl.uniform1f(u.uAmount, amount);
      gl.uniform3fv(u.uColor, new Float32Array(colorOverride || color.parse(theme.ink)));
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.quad);
      bindQuadAttributes(gl);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      gl.disable(gl.BLEND);
      gl.enable(gl.DEPTH_TEST);
    }

    function drawVeil(camera, uv, center, radius) {
      const u = programs.veil.uniforms;
      gl.useProgram(programs.veil.program);
      gl.disable(gl.DEPTH_TEST);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.uniform2f(u.uBeam, uv[0], uv[1]);
      gl.uniform2f(u.uCenter, center[0], center[1]);
      gl.uniform1f(u.uRadius, radius);
      gl.uniform1f(u.uAspect, camera.aspect);
      gl.uniform3fv(u.uVeil, new Float32Array(color.parse(state.theme.ink)));
      gl.uniform3fv(u.uBeamColor, new Float32Array(color.parse(state.theme.beam)));
      gl.uniform1f(u.uTime, state.time);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.quad);
      bindQuadAttributes(gl);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      gl.disable(gl.BLEND);
      gl.enable(gl.DEPTH_TEST);
    }

    function clearScene() {
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.disable(gl.BLEND);
      gl.enable(gl.DEPTH_TEST);
      gl.depthMask(true);
      gl.depthFunc(gl.LEQUAL);
      const c = color.parse(state.theme.fog);
      gl.clearColor(c[0], c[1], c[2], 1);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }

    // ── particle helpers ──
    function burst(x, y, z, count, colorArray, opts = {}) {
      const total = Math.round(count * (state.reducedMotion ? 0.4 : 1));
      for (let i = 0; i < total; i += 1) {
        const angle = rnd() * TAU;
        const speed = (opts.speed || 1.2) * (0.35 + rnd());
        state.particles.spawn({
          x, y, z,
          vx: Math.cos(angle) * speed,
          vy: (opts.up != null ? opts.up : 0.7) * (0.4 + rnd()),
          vz: Math.sin(angle) * speed * 0.55,
          max: (opts.life || 0.9) * (0.65 + rnd() * 0.7),
          size: (opts.size || 0.05) * (0.5 + rnd()), sizeEnd: 0.003,
          color: colorArray, alpha: opts.alpha != null ? opts.alpha : 1,
          shape: opts.shape != null ? opts.shape : 1,
          gravity: opts.gravity != null ? opts.gravity : 1.1,
          additive: opts.additive !== false, drag: 0.95, fadeIn: 0.04
        });
      }
    }
    function ringPulse(x, y, z, colorArray, opts = {}) {
      state.particles.spawn({
        x, y, z, max: opts.life || 0.7, size: opts.size || 0.2, sizeEnd: opts.sizeEnd || 0.9,
        color: colorArray, alpha: opts.alpha != null ? opts.alpha : 0.9, shape: 2, additive: true, fadeIn: 0.02
      });
    }
    function ambientDust(dt, camera) {
      if (state.reducedMotion) return;
      const paper = state.theme.key === 'paper';
      const rate = paper ? 10 : 18;
      const count = dt * rate;
      let n = Math.floor(count) + (rnd() < count % 1 ? 1 : 0);
      while (n-- > 0) {
        state.particles.spawn({
          x: (rnd() - 0.5) * 7.2, y: rnd() * 3.6 + 0.1, z: (rnd() - 0.5) * 4.6 - 0.8,
          vx: (rnd() - 0.5) * 0.12, vy: paper ? 0.02 + rnd() * 0.05 : 0.10 + rnd() * 0.16, vz: (rnd() - 0.5) * 0.08,
          max: 5 + rnd() * 5, size: 0.012 + rnd() * 0.022, sizeEnd: 0.004,
          color: color.parse(paper ? state.theme.dust : state.theme.ember), alpha: paper ? 0.32 : 0.5,
          shape: 0, additive: !paper, fadeIn: 1.0
        });
      }
      if (state.theme.stars) {
        let m = Math.floor(dt * 7);
        while (m-- > 0) {
          state.particles.spawn({
            x: (rnd() - 0.5) * 5.6, y: rnd() * 2.6 + 0.6, z: (rnd() - 0.5) * 3.0,
            vy: 0.05, max: 2.6 + rnd() * 2, size: 0.03 + rnd() * 0.05, sizeEnd: 0.004,
            color: color.parse(state.theme.rim), alpha: 0.85, shape: 1, additive: true, fadeIn: 0.3
          });
        }
      }
      void camera;
    }

    // ── frame reactions ──
    function noteState(snapshot) {
      const stackLength = snapshot.stack ? snapshot.stack.length : 0;
      const perfects = snapshot.perfects || 0;
      const effectId = snapshot.effect ? snapshot.effect.id : '';
      if (state.lastStackLength >= 0 && stackLength > state.lastStackLength && stackLength > 1) {
        const top = snapshot.stack[stackLength - 1];
        const level = Number(top && top.level) || stackLength - 1;
        const k = wHalfAt(level);
        const x = top ? ((Number(top.left) + Number(top.right)) / 2 - W.half) / W.half * k + bowAt(level, state.bow) : 0;
        burst(x, level * W.blockH + W.blockH * 0.5, 0, 11, color.parse(state.theme.dust), { speed: 0.5, up: 0.35, gravity: 0.9, life: 0.5, size: 0.03, additive: false, alpha: 0.5 });
        state.cameraShake = Math.max(state.cameraShake, 0.4);
      }
      if (state.lastPerfects >= 0 && perfects > state.lastPerfects) {
        const top = snapshot.stack[snapshot.stack.length - 1];
        const level = Number(top && top.level) || 0;
        const x = top ? ((Number(top.left) + Number(top.right)) / 2 - W.half) / W.half * wHalfAt(level) + bowAt(level, state.bow) : 0;
        burst(x, level * W.blockH + W.blockH * 1.1, 0, 26, color.parse(state.theme.rim), { speed: 1.3, up: 1.05, gravity: 0.7, life: 1.0, size: 0.05 });
        ringPulse(x, level * W.blockH + W.blockH, 0.2, color.parse(state.theme.rim), { life: 0.6, size: 0.12, sizeEnd: 0.85 });
        state.flash = Math.max(state.flash, 0.55);
        state.flashColor = color.parse(state.theme.rim);
        state.punch = 1;
      }
      if (snapshot.phase === 'collapse' && state.lastPhase !== 'collapse') {
        burst(0, 0.25, 0, 42, color.parse(state.theme.dust), { speed: 1.9, up: 1.3, gravity: 1.3, life: 1.5, size: 0.07, additive: false, alpha: 0.7 });
        ringPulse(0, 0.15, 0, color.parse(state.theme.cliff), { life: 1.0, size: 0.25, sizeEnd: 1.7 });
        state.cameraShake = Math.max(state.cameraShake, 1.7);
        state.flash = Math.max(state.flash, 0.3);
        state.flashColor = color.parse(state.theme.dust);
      }
      if (effectId && effectId !== state.lastEffectId) {
        state.punch = Math.max(state.punch, 0.8);
        state.flash = Math.max(state.flash, effectId === 'superglue' ? 0.22 : 0.12);
        state.flashColor = color.parse(effectId === 'superglue' ? state.theme.rim : state.theme.ink);
      }
      if (snapshot.effect && snapshot.effect.id === 'earthquake') {
        state.cameraShake = Math.max(state.cameraShake, Number(snapshot.effect.strength) || 0.7);
      }
      state.lastStackLength = stackLength;
      state.lastPerfects = perfects;
      state.lastEffectId = effectId;
      state.lastPhase = snapshot.phase;
    }

    function effectParticles(dt, snapshot) {
      const effect = snapshot.effect;
      if (!effect) return;
      const id = effect.id;
      const moving = snapshot.movingWorld;
      const topY = state.towerTop;
      const top = snapshot.stack && snapshot.stack.length ? snapshot.stack[snapshot.stack.length - 1] : null;
      const topX = top ? ((Number(top.left) + Number(top.right)) / 2 - W.half) / W.half * wHalfAt(Number(top.level) || 0) + bowAt(Number(top.level) || 0, state.bow) : 0;
      const rate = {
        turbo: 140, drunk: 22, slowmo: 18, magnet: 45, portal: 80, rollercoaster: 14, earthquake: 55, pisa: 30,
        spotlight: 34, peekaboo: 26, zoom: 0, double: 20, accordion: 40, crumble: 42, superglue: 40, calipers: 22
      }[id] || 0;
      const reducedScale = state.reducedMotion ? 0.25 : 1;
      if (!rate) return;
      let count = dt * rate * reducedScale;
      let budget = Math.min(5, Math.floor(count) + (rnd() < count % 1 ? 1 : 0));
      while (budget-- > 0) {
        if (id === 'turbo' && moving) {
          state.particles.spawn({
            x: moving.x + (rnd() - 0.5) * moving.width, y: moving.y + (rnd() - 0.5) * 0.06, z: moving.z + (rnd() - 0.5) * moving.depth,
            vx: -moving.dir * 1.7, vy: 0.03, max: 0.34, size: 0.09, sizeEnd: 0.015,
            color: color.mix(color.parse(state.theme.rim), [1, 1, 1], 0.4), alpha: 0.7, shape: 3, additive: true
          });
        } else if (id === 'drunk' && moving) {
          state.particles.spawn({
            x: moving.x + (rnd() - 0.5) * moving.width, y: moving.y - 0.03, z: moving.z + (rnd() - 0.5) * moving.depth,
            vx: (rnd() - 0.5) * 0.3, vy: 0.26 + rnd() * 0.2, max: 1.1, size: 0.03 + rnd() * 0.03, sizeEnd: 0.004,
            color: color.parse(state.theme.vein), alpha: 0.5, shape: 0, additive: false
          });
        } else if (id === 'slowmo') {
          state.particles.spawn({
            x: (rnd() - 0.5) * 2.2, y: rnd() * 1.7 + 0.2, z: (rnd() - 0.5) * 1.4,
            vy: -0.06, max: 2.6, size: 0.016, sizeEnd: 0.008, color: [1, 1, 1], alpha: 0.5, shape: 0, additive: false
          });
        } else if (id === 'magnet' && moving) {
          state.particles.spawn({
            x: moving.x + (rnd() - 0.5) * moving.width * 0.4, y: moving.y, z: moving.z,
            vx: (topX - moving.x) * 0.7 + (rnd() - 0.5) * 0.2, vy: -0.5 - rnd() * 0.3, max: 0.5,
            size: 0.035, sizeEnd: 0.003, color: color.parse(state.theme.vein), alpha: 0.8, shape: 1, additive: true
          });
        } else if (id === 'portal') {
          const side = rnd() < 0.5 ? -1 : 1;
          state.particles.spawn({
            x: side * 1.02, y: rnd() * Math.max(0.8, topY + 0.5), z: (rnd() - 0.5) * 0.5,
            vx: -side * 0.05, vy: 0.26 + rnd() * 0.3, max: 0.9, size: 0.03, sizeEnd: 0.002,
            color: color.parse(state.theme.vein), alpha: 0.9, shape: 0, additive: true
          });
        } else if (id === 'earthquake') {
          state.particles.spawn({
            x: (rnd() - 0.5) * 2.6, y: rnd() * topY * 0.85 + 0.05, z: (rnd() - 0.5) * 1.1,
            vx: (rnd() - 0.5) * 0.4, vy: 0.08 + rnd() * 0.3, vz: (rnd() - 0.5) * 0.2,
            max: 1.2, size: 0.02 + rnd() * 0.03, sizeEnd: 0.004, color: color.parse(state.theme.dust),
            alpha: 0.6, shape: 0, gravity: 0.5, additive: false
          });
        } else if (id === 'pisa') {
          state.particles.spawn({
            x: (rnd() - 0.5) * 1.6, y: rnd() * Math.max(0.6, topY), z: (rnd() - 0.5) * 0.7,
            vx: 0.1, vy: -0.2, max: 1.0, size: 0.014, sizeEnd: 0.002,
            color: color.parse(state.theme.dust), alpha: 0.45, shape: 0, additive: false
          });
        } else if (id === 'spotlight') {
          const side = Number(effect.spotlightSide) < 0 ? -1 : 1;
          state.particles.spawn({
            x: topX + side * 0.14 + (rnd() - 0.5) * 0.1, y: topY - rnd() * 0.8, z: (rnd() - 0.5) * 0.2,
            vx: (rnd() - 0.5) * 0.05, vy: 0.12, max: 1.6, size: 0.012, sizeEnd: 0.002,
            color: color.parse(state.theme.beam), alpha: 0.55, shape: 0, additive: true
          });
        } else if (id === 'peekaboo' && moving) {
          state.particles.spawn({
            x: moving.x + (rnd() - 0.5) * moving.width, y: moving.y + (rnd() - 0.5) * 0.06, z: moving.z,
            vy: 0.2, max: 0.5, size: 0.05, sizeEnd: 0.002, color: [1, 1, 1], alpha: 0.65, shape: 1, additive: true
          });
        } else if (id === 'double') {
          state.particles.spawn({
            x: (rnd() - 0.5) * 2, y: rnd() * Math.max(0.6, topY + 0.3), z: (rnd() - 0.5) * 0.6,
            max: 0.7, size: 0.03, sizeEnd: 0.003, color: color.parse(state.theme.vein), alpha: 0.55,
            shape: 1, additive: true, fadeIn: 0.2
          });
        } else if (id === 'accordion' && moving) {
          for (const side of [-1, 1]) {
            state.particles.spawn({
              x: moving.x + side * moving.width / 2, y: moving.y, z: moving.z,
              vx: side * 0.35, vy: 0.1, max: 0.35, size: 0.035, sizeEnd: 0.002,
              color: color.parse(state.theme.rim), alpha: 0.7, shape: 0, additive: true
            });
          }
        } else if (id === 'crumble') {
          state.particles.spawn({
            x: topX + (rnd() - 0.5) * 0.9, y: topY + 0.03, z: (rnd() - 0.5) * 0.4,
            vy: -0.05 - rnd() * 0.2, max: 1.1, size: 0.03, sizeEnd: 0.01, color: color.parse(state.theme.cliff),
            alpha: 0.7, shape: 0, gravity: 1.6, additive: false
          });
        } else if (id === 'superglue') {
          state.particles.spawn({
            x: topX + (rnd() - 0.5) * 0.7, y: topY + 0.06, z: (rnd() - 0.5) * 0.4,
            vy: 0.25 + rnd() * 0.2, max: 0.9, size: 0.03, sizeEnd: 0.002,
            color: color.parse(state.theme.rim), alpha: 0.95, shape: 1, additive: true
          });
        } else if (id === 'calipers') {
          for (const side of [-1, 1]) {
            state.particles.spawn({
              x: side * (0.6 + rnd() * 0.35), y: topY + (rnd() - 0.5) * 0.4, z: (rnd() - 0.5) * 0.3,
              vy: 0.15, max: 0.7, size: 0.02, sizeEnd: 0.002, color: color.parse(state.theme.rim),
              alpha: 0.7, shape: 0, additive: true
            });
          }
        }
      }
    }

    // ── tower / moving block geometry ──
    function syncTower(snapshot) {
      const key = `${state.themeName}:${snapshot.stack.length}:${snapshot.stack.map(b => `${Math.round(b.left)}-${Math.round(b.right)}-${b.perfect ? 1 : 0}`).join(',')}`;
      if (key === state.cachedStackKey) return;
      state.cachedStackKey = key;
      state.bow = stackBow(snapshot.stack);
      state.towerTop = snapshot.stack.length ? snapshot.stack.length * W.blockH : W.blockH;
      const top = snapshot.stack[snapshot.stack.length - 1];
      state.towerRadius = top ? Math.max(0.16, worldW(Number(top.right) - Number(top.left), Number(top.level) || 0) / 2) : 0.5;
      const parts = splitMesh(buildTowerMesh(snapshot.stack, state.bow, state.theme));
      uploadMesh(gl, state.towerMesh, parts.solid);
      uploadMesh(gl, state.glowMesh, parts.glow);
    }

    function moverBuilderFor(snapshot) {
      const builder = new MeshBuilder();
      const moving = snapshot.movingWorld;
      if (!moving) return builder;
      const double = snapshot.effect && snapshot.effect.id === 'double';
      const superglue = snapshot.effect && snapshot.effect.id === 'superglue';
      const tint = color.parse(moving.color || state.theme.rim);
      const width = Math.max(0.02, moving.width);
      const height = W.blockH * 0.965;
      const depth = Math.max(0.14, width * W.depthRatio);
      builder.box(moving.x, moving.y, moving.z, width, height, depth, tint, {
        ground: 0, spray: 0.9, mode: double ? 1 : 0, border: !double, borderColor: color.mix(tint, [1, 1, 1], 0.35)
      });
      // Direction pip on the leading face: tells you which way it is travelling.
      builder.box(moving.x + moving.dir * width * 0.36, moving.y + height * 0.1, depth * 0.5 + 0.006,
        0.028, height * 0.4, 0.006, color.parse(state.theme.ink), { ground: 0, spray: 0.2, mode: 0 });
      if (superglue) {
        builder.box(moving.x, moving.y + height / 2 + 0.012, moving.z, width * 0.96, 0.012, depth * 0.9, color.parse(state.theme.rim), { ground: 0, spray: 0.2, mode: 2 });
      }
      if (snapshot.effect && snapshot.effect.id === 'calipers') {
        for (const side of [-1, 1]) {
          builder.box(side * 1.0, moving.y, 0, 0.016, W.blockH * 1.6, 0.016, color.parse(state.theme.rim), { ground: 0, spray: 0.2, mode: 2 });
        }
      }
      if (double) {
        const ink = color.parse(state.theme.ink);
        builder.box(moving.x + width * 0.05, moving.y + height * 0.15, moving.z + depth / 2 + 0.002, 0.018, height * 0.55, 0.004, ink, { ground: 0, spray: 0.2, mode: 0 });
      }
      if (snapshot.effect && snapshot.effect.id === 'rollercoaster') {
        // Hovering coaster carriage: a thin track line beneath it and corner lights.
        const rail = color.parse(state.theme.rim);
        builder.box(moving.x, moving.y - height / 2 - 0.02, moving.z, width * 0.92, 0.012, 0.02, rail, { ground: 0, spray: 0.2, mode: 2 });
      }
      if (snapshot.effect && snapshot.effect.id === 'accordion') {
        // Breathing height: squash and stretch with the current width.
        const stretch = clamp(width / 0.55, 0.6, 1.3);
        builder.flatQuadY(moving.y + height * 0.5 + 0.002, moving.x - width * 0.5, -depth * 0.5, moving.x + width * 0.5, -depth * 0.44,
          color.parse(state.theme.rim), 0, 0.3, 2);
        void stretch;
      }
      return builder;
    }
    function decoyBuilderFor(snapshot) {
      const builder = new MeshBuilder();
      const decoy = snapshot.decoyWorld;
      if (!decoy) return builder;
      const width = Math.max(0.02, decoy.width);
      builder.box(decoy.x, decoy.y, decoy.z, width, W.blockH * 0.965, Math.max(0.14, width * W.depthRatio),
        color.parse(decoy.color || state.theme.rim), { ground: 0, spray: 0.8, mode: 1 });
      return builder;
    }
    function fallingBuilderFor(snapshot) {
      const builder = new MeshBuilder();
      if (!snapshot.falling || !snapshot.falling.length) return builder;
      for (const piece of snapshot.falling) {
        const level = clamp(Math.round(Number(piece.level) || 0), 0, 400);
        const k = wHalfAt(level);
        const width = Math.max(0.03, (Number(piece.width) || 0) / W.half * k);
        const part = new MeshBuilder();
        part.box(0, 0, 0, width, W.blockH * 0.9, Math.max(0.05, width * W.depthRatio),
          color.parse(piece.color || state.theme.rim), { ground: 0, spray: 0.3, mode: 0 });
        const c = Math.cos(Number(piece.angle) || 0); const s = Math.sin(Number(piece.angle) || 0);
        const x = Number(piece.x) || 0; const y = Number(piece.y) || 0; const z = Number(piece.z) || 0;
        for (let i = 0; i < part.data.length; i += FLOATS_PER_VERTEX) {
          const px = part.data[i]; const py = part.data[i + 1]; const pz = part.data[i + 2];
          const nx = part.data[i + 3]; const ny = part.data[i + 4]; const nz = part.data[i + 5];
          builder.data.push(
            x + px * c - py * s, y + px * s + py * c, z + pz,
            nx * c - ny * s, nx * s + ny * c, nz,
            part.data[i + 6], part.data[i + 7], part.data[i + 8], 0, 0.3, 0
          );
        }
      }
      return builder;
    }

    // ── render passes ──
    function settle(dt) {
      state.time += dt;
      state.heroClock += dt;
      const ease = state.reducedMotion ? 1 : Math.min(1, dt * 7);
      state.orbit.yaw += (state.orbit.targetYaw - state.orbit.yaw) * ease;
      state.orbit.pitch += (state.orbit.targetPitch - state.orbit.pitch) * ease;
      state.orbit.zoom += (state.orbit.targetZoom - state.orbit.zoom) * ease;
      state.cameraShake = Math.max(0, state.cameraShake - dt * 1.6);
      state.flash = Math.max(0, state.flash - dt * 2.6);
      state.punch = Math.max(0, state.punch - dt * 2.4);
      state.zoom += ((state.zoomTarget || 0) - state.zoom) * (state.reducedMotion ? 1 : Math.min(1, dt * 6));
    }

    function finishFrame(camera, extra = {}) {
      ambientDust(extra.dustDt || 0, camera);
      state.particles.update(extra.step || 0);
      const counts = state.particles.build(camera.right, camera.up);
      drawSprites(camera, counts);
    }

    function renderHero(step) {
      if (!state.heroWorld) {
        const demoStack = [{ left: 80, right: 280, color: '#E3A33B', level: 0, perfect: false }];
        const widths = [196, 188, 181, 175, 169, 164, 159, 155];
        let centre = 180;
        for (let i = 1; i <= widths.length; i += 1) {
          const width = widths[i - 1];
          centre += Math.sin(i * 1.9) * 3.6;
          demoStack.push({ left: centre - width / 2, right: centre + width / 2, color: ['#2F8478', '#7FA6BD', '#E3A33B', '#D5472F'][i % 4], level: i, perfect: i === 4 });
        }
        state.heroWorld = { stack: demoStack, moverLevel: widths.length + 1, moverWidth: 150 };
      }
      const hero = state.heroWorld;
      state.bow = stackBow(hero.stack);
      state.towerTop = hero.stack.length * W.blockH;
      const top = hero.stack[hero.stack.length - 1];
      state.towerRadius = Math.max(0.16, worldW(top.right - top.left, top.level) / 2);
      const key = `hero:${state.themeName}`;
      if (key !== state.cachedStackKey) {
        state.cachedStackKey = key;
        const parts = splitMesh(buildTowerMesh(hero.stack, state.bow, state.theme, { includeWalls: false }));
        uploadMesh(gl, state.towerMesh, parts.solid);
        uploadMesh(gl, state.glowMesh, parts.glow);
      }
      const level = hero.moverLevel;
      const moverWidth = worldW(hero.moverWidth, level);
      state.heroMoverX = Math.sin(state.heroClock * 0.55) * 0.36;
      const dir = Math.cos(state.heroClock * 0.55) >= 0 ? 1 : -1;
      const moverY = level * W.blockH + W.blockH * 0.5 + Math.sin(state.heroClock * 1.2) * 0.015;
      const moverColor = color.parse(state.theme.key === 'paper' ? '#D5472F' : state.theme.rim);
      const camera = cameraFor('hero', { stack: hero.stack });
      state.camera = camera;
      clearScene();
      drawSky(camera);
      drawStatic(state.terrainMesh, camera);
      drawStatic(state.skylineMesh, camera);
      drawStatic(state.plinthMesh, camera);
      drawStatic(state.towerMesh, camera);
      drawGlow(state.glowMesh, camera);
      const mover = new MeshBuilder();
      mover.box(state.heroMoverX, moverY, 0, moverWidth, W.blockH * 0.965, Math.max(0.14, moverWidth * W.depthRatio), moverColor,
        { ground: 0, spray: 0.8, mode: 0, border: true, borderColor: color.mix(moverColor, [1, 1, 1], 0.35) });
      uploadMesh(gl, state.dynMesh, mover);
      setSceneUniforms(camera, {});
      drawMesh(gl, state.dynMesh);
      if (!state.reducedMotion) {
        state.particles.spawn({
          x: state.heroMoverX + (rnd() - 0.5) * moverWidth, y: moverY + 0.03, z: 0,
          vy: 0.16, max: 1.0, size: 0.02, sizeEnd: 0.001, color: color.parse(state.theme.rim), alpha: 0.8, shape: 1, additive: true
        });
        state.particles.spawn({
          x: (rnd() - 0.5) * 3, y: 2.2 + rnd() * 1.4, z: (rnd() - 0.5) * 2,
          vy: 0.06, max: 3.4, size: 0.03, sizeEnd: 0.004, color: color.parse(state.theme.rim), alpha: 0.7, shape: 1, additive: true, fadeIn: 0.4
        });
      }
      finishFrame(camera, { step, dustDt: step * 0.6 });
      drawVignette();
      return true;
    }

    function renderResult(snapshot, step) {
      const stack = Array.isArray(snapshot.stack) && snapshot.stack.length ? snapshot.stack : [{ left: 80, right: 280, color: '#E3A33B', level: 0 }];
      const key = `result:${state.themeName}:${stack.length}:${state.revealSeed || 0}`;
      if (snapshot.revealSeed !== state.resultSeed) { state.resultSeed = snapshot.revealSeed; state.cachedStackKey = ''; }
      if (key !== state.cachedStackKey) {
        state.cachedStackKey = key;
        state.bow = stackBow(stack);
        state.towerTop = stack.length * W.blockH;
        const top = stack[stack.length - 1];
        state.towerRadius = Math.max(0.16, worldW(top.right - top.left, top.level || 0) / 2);
        const parts = splitMesh(buildTowerMesh(stack, state.bow, state.theme));
        uploadMesh(gl, state.towerMesh, parts.solid);
        uploadMesh(gl, state.glowMesh, parts.glow);
      }
      const camera = cameraFor('result', { stack });
      state.camera = camera;
      clearScene();
      drawSky(camera);
      drawStatic(state.terrainMesh, camera);
      drawStatic(state.skylineMesh, camera);
      drawStatic(state.plinthMesh, camera);
      drawStatic(state.towerMesh, camera);
      drawGlow(state.glowMesh, camera);
      if (snapshot.celebrate && !state.reducedMotion) {
        state.confettiTimer -= step;
        if (state.confettiTimer <= 0) {
          state.confettiTimer = 0.24;
          const palette = ['#E3A33B', '#2F8478', '#7FA6BD', '#D5472F'];
          burst((rnd() - 0.5) * 2.2, state.towerTop + 0.5, (rnd() - 0.5) * 1.0, 12,
            color.parse(palette[Math.floor(rnd() * palette.length)]), { speed: 0.9, up: 0.8, gravity: 0.75, life: 2.2, size: 0.05, additive: false, shape: 0 });
        }
      }
      finishFrame(camera, { step, dustDt: step * 0.5 });
      drawVignette();
      return true;
    }

    function renderGame(snapshot, step) {
      syncTower(snapshot);
      noteState(snapshot);
      const effect = snapshot.effect;
      state.zoomTarget = effect && effect.id === 'zoom' ? 1 : 0;
      const camera = cameraFor('game', { focusTop: effect && effect.id === 'zoom' });
      state.camera = camera;
      if (effect && effect.id === 'pisa' && !state.reducedMotion) {
        const angle = Math.sin(state.time * 1.3) * 0.055 + state.punch * 0.01;
        const cos = Math.cos(angle); const sin = Math.sin(angle);
        const up = [camera.up[0] * cos - camera.right[0] * sin, camera.up[1] * cos - camera.right[1] * sin, camera.up[2] * cos - camera.right[2] * sin];
        camera.up = up;
        camera.view = mat4.lookAt(camera.eye, camera.target, up);
      }
      clearScene();
      drawSky(camera);
      drawStatic(state.terrainMesh, camera);
      drawStatic(state.skylineMesh, camera);
      drawStatic(state.plinthMesh, camera);
      // portal gates: glowing frames on each wall
      if (effect && effect.id === 'portal') {
        const gates = new MeshBuilder();
        const topY = Math.max(1.4, state.towerTop + 0.5);
        const portalColor = color.parse(state.theme.vein);
        for (let i = 0; i < 30; i += 1) {
          const t = i / 30;
          const y = 0.12 + t * topY;
          const wobble = Math.sin(state.time * 2.4 + i * 0.6) * 0.05;
          for (const side of [-1, 1]) {
            gates.box(side * (1.03 + wobble), y, 0, 0.028, 0.13, 0.05, portalColor, { ground: 0, spray: 0.2, mode: 2 });
          }
        }
        uploadMesh(gl, state.dynMesh, gates);
        drawGlow(state.dynMesh, camera);
      }
      drawStatic(state.towerMesh, camera);
      drawGlow(state.glowMesh, camera);
      // moving block (alpha for Peekaboo, additive dust handled separately)
      // Landing guide: a dashed footprint on the tower's top face showing exactly where the block
      // will come down. Only drawn while a block is in flight, and only slightly brighter than the
      // surface, so it reads as a projection rather than a solid slab.
      const landing = snapshot.movingWorld;
      if (landing && snapshot.stack.length && landing.level > snapshot.stack.length - 1) {
        const guideY = (snapshot.stack.length - 1) * W.blockH + W.blockH * 0.966;
        const guide = new MeshBuilder();
        const guideColor = color.parse(state.theme.ink);
        const gw = landing.width * 0.46, gd = landing.depth * 0.46;
        const dash = 0.085, gap = 0.055;
        for (const side of [-1, 1]) {
          for (let t = -gw; t < gw - dash * 0.5; t += dash + gap) {
            const t1 = Math.min(gw, t + dash);
            guide.flatQuadY(guideY, landing.x + t, side * gd - 0.008, landing.x + t1, side * gd + 0.008, guideColor, 0, 0.3, 2);
            guide.flatQuadY(guideY, landing.x + side * gw - 0.008, t, landing.x + side * gw + 0.008, Math.min(gd, t + dash + gap), guideColor, 0, 0.3, 2);
          }
        }
        uploadMesh(gl, state.dynGlowMesh, guide);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.depthMask(false);
        setSceneUniforms(camera, { groundShadow: 0 });
        gl.uniform1f(programs.scene.uniforms.uAlpha, 0.34 + 0.1 * Math.sin(state.time * 3.0));
        drawMesh(gl, state.dynGlowMesh);
        gl.uniform1f(programs.scene.uniforms.uAlpha, 1);
        gl.depthMask(true);
        gl.disable(gl.BLEND);
      }
      const moverAlpha = snapshot.movingAlpha != null ? snapshot.movingAlpha : 1;
      if (moverAlpha > 0.01) {
        const builder = moverBuilderFor(snapshot);
        if (builder.data.length) {
          uploadMesh(gl, state.dynMesh, builder);
          gl.enable(gl.BLEND);
          gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
          drawStatic(state.dynMesh, camera, { alpha: moverAlpha });
          gl.disable(gl.BLEND);
        }
      }
      if (effect && effect.id === 'superglue') {
        const glue = new MeshBuilder();
        const moving = snapshot.movingWorld;
        if (moving) {
          glue.box(moving.x, moving.y + W.blockH * 0.5, moving.z, moving.width * 1.02, 0.014, Math.max(0.14, moving.width * W.depthRatio) * 1.05,
            color.parse(state.theme.rim), { ground: 0, spray: 0.2, mode: 2 });
        }
        uploadMesh(gl, state.dynGlowMesh, glue);
        drawGlow(state.dynGlowMesh, camera);
      }
      if (effect && effect.id === 'rollercoaster' && snapshot.movingWorld) {
        const drop = new MeshBuilder();
        const m = snapshot.movingWorld;
        const level = Math.max(0, Math.round((state.towerTop + 0.001) / W.blockH));
        const y = Math.max(0.02, level * W.blockH + 0.012);
        drop.flatQuadY(y, m.x - m.width * 0.5, -m.depth * 0.5, m.x + m.width * 0.5, m.depth * 0.5,
          color.parse(state.theme.rim), 0, 0.5, 2);
        uploadMesh(gl, state.dynGlowMesh, drop);
        drawGlow(state.dynGlowMesh, camera);
      }
      if (snapshot.decoyWorld) {
        const decoy = decoyBuilderFor(snapshot);
        uploadMesh(gl, state.dynGlowMesh, decoy);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        // glass decoy: translucent with a bright fresnel
        drawStatic(state.dynGlowMesh, camera, { alpha: snapshot.decoyAlpha != null ? snapshot.decoyAlpha : 0.55 });
        gl.disable(gl.BLEND);
      }
      if (snapshot.falling && snapshot.falling.length) {
        const falling = fallingBuilderFor(snapshot);
        if (falling.data.length) {
          uploadMesh(gl, state.dynMesh, falling);
          drawStatic(state.dynMesh, camera);
        }
      }
      // magnet arcs: dashed vertical beams under the mover
      if (effect && effect.id === 'magnet' && snapshot.movingWorld) {
        const arcs = new MeshBuilder();
        const m = snapshot.movingWorld;
        const top = snapshot.stack[snapshot.stack.length - 1];
        const targetX = top ? ((Number(top.left) + Number(top.right)) / 2 - W.half) / W.half * wHalfAt(Number(top.level) || 0) + bowAt(Number(top.level) || 0, state.bow) : 0;
        const beamColor = color.parse(state.theme.vein);
        for (let i = 0; i < 9; i += 1) {
          const t = i / 9;
          const x = lerp(m.x, targetX, t);
          arcs.box(x, lerp(m.y - 0.02, (snapshot.stack.length - 1) * W.blockH + W.blockH / 2, t), 0, 0.02, 0.02, 0.02, beamColor, { ground: 0, spray: 0.2, mode: 2 });
        }
        uploadMesh(gl, state.dynGlowMesh, arcs);
        drawGlow(state.dynGlowMesh, camera);
      }
      // spotlight beam and veil
      if (effect && effect.id === 'spotlight') {
        const top = snapshot.stack[snapshot.stack.length - 1];
        const level = Number(top && top.level) || 0;
        const beamX = top ? ((Number(top.left) + Number(top.right)) / 2 - W.half) / W.half * wHalfAt(level) + bowAt(level, state.bow) : 0;
        const side = Number(effect.spotlightSide) < 0 ? -1 : 1;
        const worldWidth = top ? worldW(Math.max(1, Number(top.right) - Number(top.left)), level) : 0.6;
        const bx = beamX + side * worldWidth * 0.42;
        const by = level * W.blockH + W.blockH;
        const cone = new MeshBuilder();
        const apex = [bx * 0.55, state.towerTop + 3.2, 0.6];
        const radius = 0.42;
        const segments = 20;
        for (let i = 0; i < segments; i += 1) {
          const a0 = (i / segments) * TAU; const a1 = ((i + 1) / segments) * TAU;
          const p0 = [bx + Math.cos(a0) * radius, by, Math.sin(a0) * radius];
          const p1 = [bx + Math.cos(a1) * radius, by, Math.sin(a1) * radius];
          cone.triangle(
            [apex[0], apex[1], apex[2], 0, 1, 0, ...color.parse(state.theme.beam), 0, 0.2, 2],
            [p1[0], p1[1], p1[2], 0, 1, 0, ...color.parse(state.theme.beam), 0, 0.2, 2],
            [p0[0], p0[1], p0[2], 0, 1, 0, ...color.parse(state.theme.beam), 0, 0.2, 2]
          );
        }
        uploadMesh(gl, state.dynGlowMesh, cone);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
        gl.depthMask(false);
        setSceneUniforms(camera, {});
        gl.uniform1f(programs.scene.uniforms.uAlpha, 0.075);
        drawMesh(gl, state.dynGlowMesh);
        gl.uniform1f(programs.scene.uniforms.uAlpha, 1);
        gl.depthMask(true);
        gl.disable(gl.BLEND);
        // The lit pool rings the tower: the beam lands off-centre, so track the beam for the cone
        // but open the circle around the middle of the stack, widened to keep the whole tower lit.
        const clip = mat4.project(mat4.multiply(camera.proj, camera.view), bx, by, 0);
        if (clip[3] > 0.001) {
          const uv = [clip[0] / clip[3] * 0.5 + 0.5, clip[1] / clip[3] * 0.5 + 0.5];
          const stackMid = state.towerTop * 0.55;
          const midClip = mat4.project(mat4.multiply(camera.proj, camera.view), 0, stackMid, 0);
          const center = midClip[3] > 0.001
            ? [(uv[0] + midClip[0] / midClip[3] * 0.5 + 0.5) / 2, (uv[1] + midClip[1] / midClip[3] * 0.5 + 0.5) / 2]
            : uv;
          const radiusScreen = clamp(0.30 * (3.4 / Math.max(1.6, camera.distance)) * 1.5, 0.2, 0.42);
          drawVeil(camera, uv, center, radiusScreen);
        }
      }
      finishFrame(camera, { step, dustDt: step });
      drawFlash(state.flash * 0.42, state.flashColor);
      drawVignette();
      return true;
    }

    function render(snapshot, dt) {
      if (!state.ok) return false;
      try {
        const themeName = snapshot && snapshot.theme && THEMES[snapshot.theme] ? snapshot.theme : 'paper';
        if (themeName !== state.themeName) {
          state.themeName = themeName;
          state.theme = themeFor(themeName);
          state.decorationsBuilt = false;
          state.cachedStackKey = '';
          state.particles.clear();
        }
        state.reducedMotion = Boolean(snapshot && snapshot.reducedMotion);
        const step = state.reducedMotion ? 0 : clamp(Number(dt) || 0, 0, 0.05);
        resize();
        settle(step);
        if (!state.decorationsBuilt) rebuildDecorations();
        if (!snapshot || snapshot.mode === 'hero') return renderHero(step);
        if (snapshot.mode === 'result') return renderResult(snapshot, step);
        return renderGame(snapshot, step);
      } catch (error) {
        state.ok = false;
        state.lastError = error && (error.stack || error.message) || String(error);
        try { console.warn('Sabotage Stack 3D paused itself:', state.lastError); } catch (_) { /* ignore */ }
        try { canvas.style.display = 'none'; } catch (_) { /* ignore */ }
        return false;
      }
    }

    function setTheme(name) {
      const next = THEMES[name] ? name : 'paper';
      if (next === state.themeName) return;
      state.themeName = next; state.theme = themeFor(next);
      state.cachedStackKey = ''; state.decorationsBuilt = false; state.particles.clear();
    }

    try { resize(); } catch (_) { /* ignore */ }

    return Object.freeze({
      ok: true,
      canvas,
      render,
      error: () => state.lastError || null,
      resize,
      setTheme,
      setReducedMotion(value) { state.reducedMotion = Boolean(value); },
      nudgeOrbit(deltaYaw, deltaPitch) {
        state.orbit.targetYaw = clamp(state.orbit.targetYaw + (Number(deltaYaw) || 0), -1.0, 1.0);
        state.orbit.targetPitch = clamp(state.orbit.targetPitch + (Number(deltaPitch) || 0), -0.35, 0.55);
      },
      setZoom(value) { state.orbit.targetZoom = clamp(Number(value) || 1, 0.75, 1.45); },
      resetOrbit() { state.orbit.targetYaw = 0; state.orbit.targetPitch = 0; state.orbit.targetZoom = 1; },
      project(x, y, z) {
        try {
          const camera = state.camera;
          if (!camera) return null;
          const clip = mat4.project(mat4.multiply(camera.proj, camera.view), x, y, z);
          if (clip[3] <= 0.001) return null;
          return { x: clip[0] / clip[3] * 0.5 + 0.5, y: clip[1] / clip[3] * 0.5 + 0.5 };
        } catch (_) { return null; }
      },
      dispose() {
        state.ok = false;
        try { canvas.remove(); } catch (_) { /* ignore */ }
        try { const lose = gl.getExtension('WEBGL_lose_context'); if (lose) lose.loseContext(); } catch (_) { /* ignore */ }
      }
    });
  }

  function isSupported() {
    try {
      const canvas = document.createElement('canvas');
      return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch (_) { return false; }
  }

  window.SabotageStackScene3D = Object.freeze({
    version: '1.0.0',
    isSupported,
    create(options) {
      try { return createEngine(options); } catch (error) {
        if (typeof console !== 'undefined' && console.warn) { try { console.warn('Sabotage Stack 3D is off:', error && (error.stack || error.message)); } catch (_) { /* ignore */ } }
        return null;
      }
    },
    lastError: null,
    themeNames: Object.freeze(Object.keys(THEMES))
  });
})();
