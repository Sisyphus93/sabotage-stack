'use strict';
/*
 * THE ATRIUM — a full-page, real WebGL 3D world for Sabotage Stack.
 *
 * Source of truth: client/world3d.js. scripts/sync-world3d.js inlines it into
 * sabotage-stack.html between the WORLD3D markers so the client stays one file.
 *
 * A real WebGL geometry pass draws a monumental block tower, a mirrored
 * plinth, orbital rings, floating cubes and glass shards over a procedural
 * nebula sky. The DOM floats above it as glass planes sharing the same camera
 * parallax (see the CSS 3D layer), so the *whole page* is one 3D space from
 * the first painted frame. Geometry — rather than a per-pixel raymarch — keeps
 * the atrium fluid on integrated GPUs and software rasterisers.
 *
 * No libraries, no textures, no network. WebGL1 / GLSL ES 1.00 for maximum
 * reach; a lightweight Canvas2D painter is used when WebGL is unavailable
 * (jsdom, locked-down browsers), and nothing throws in either case.
 */
(function exposeWorld3D(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module && module.exports) module.exports = api;
  if (root) root.SabotageStackWorld = api;
})(typeof window === 'object' && window ? window : null, function buildWorld3D() {
  const TAU = Math.PI * 2;
  const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
  const finite = (v, fallback) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : fallback;
  };

  // Three cinematic palettes. Colour A/B/C/D = accent, second accent, sky, light.
  const PALETTES = Object.freeze({
    paper: Object.freeze({
      name: 'ATRIUM', a: [1.00, 0.72, 0.32], b: [0.93, 0.35, 0.24], c: [0.055, 0.075, 0.14], d: [1.00, 0.84, 0.58],
      glass: '#0C1020', glow: '#FFC46B', ink: '#F6F0E4'
    }),
    sunset: Object.freeze({
      name: 'NEON VOID', a: [1.00, 0.77, 0.24], b: [1.00, 0.24, 0.58], c: [0.075, 0.030, 0.16], d: [1.00, 0.48, 0.28],
      glass: '#160A32', glow: '#FF5AC8', ink: '#FFF0FA'
    }),
    primetime: Object.freeze({
      name: 'PRIME TIME', a: [1.00, 0.79, 0.23], b: [0.20, 0.82, 0.94], c: [0.025, 0.065, 0.20], d: [1.00, 0.90, 0.60],
      glass: '#061238', glow: '#35D0E8', ink: '#EAF2FF'
    })
  });

  // ---- GLSL ------------------------------------------------------------------
  const SKY_VERT = `
precision highp float;
attribute vec2 aPos;
varying vec2 vUv;
void main(){
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

  const SKY_FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
varying vec2 vUv;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uTime;
uniform float uIntro;
uniform float uMood;
uniform vec3 uA;
uniform vec3 uB;
uniform vec3 uC;
uniform vec3 uD;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }

void main(){
  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float t = uTime;
  vec2 m = uMouse;
  vec3 col = mix(uC * 0.34, uC * 1.45, clamp(0.52 + uv.y * 0.62, 0.0, 1.0));

  // Two slow aurora bands give the nebula depth without per-pixel noise loops.
  float band = sin(uv.x * 3.1 + t * 0.07 + sin(uv.y * 4.0 + t * 0.05) * 0.75);
  float neb = smoothstep(0.18, 1.0, band) * exp(-abs(uv.y - 0.13) * 1.25);
  col += mix(uB, uA, 0.5 + 0.5 * sin(uv.x * 2.0 + t * 0.02)) * neb * 0.20;
  float band2 = sin(uv.x * 7.0 - uv.y * 3.0 - t * 0.04);
  col += uB * smoothstep(0.72, 1.0, band2) * 0.05;

  vec2 cell = floor(gl_FragCoord.xy / 3.0);
  float star = step(0.9974, hash(cell));
  float tw = 0.55 + 0.45 * sin(t * 2.1 + hash(cell + 7.3) * 42.0);
  col += star * tw * vec3(0.92, 0.96, 1.0) * 0.85;

  // The key light, its shafts and its bloom. The pointer moves it slightly.
  vec2 sp = vec2(0.31, 0.27) + m * 0.03;
  vec2 dv = vUv - sp;
  float dl = length(dv * vec2(1.0, 2.1));
  float rays = 0.5 + 0.5 * sin(atan(dv.y, dv.x) * 24.0 + t * 0.25);
  col += uD * exp(-dl * 3.4) * rays * 0.06;
  col += uD * pow(max(0.0, 1.0 - length(dv) * 2.1), 5.0) * 0.16;
  col += uD * pow(max(0.0, 1.0 - length(dv) * 3.2), 32.0) * 1.5;
  col += uA * pow(max(0.0, 1.0 - length(dv) * 1.4), 8.0) * 0.06;

  float dawn = smoothstep(0.0, 1.0, uIntro);
  col *= mix(0.58, 1.0, dawn);
  col *= mix(1.0, 0.74, uMood);
  float vig = 1.0 - 0.62 * pow(length(uv * vec2(0.72, 1.0)), 1.7);
  col *= clamp(vig, 0.0, 1.0);
  col += (hash(gl_FragCoord.xy + fract(t) * 91.0) - 0.5) * 0.022;
  col += vec3(0.012, 0.0, 0.026) * (1.0 - vUv.y);
  col = pow(max(col, 0.0), vec3(0.90));
  gl_FragColor = vec4(col, 1.0);
}
`;

  const VERT = `
precision highp float;
attribute vec3 aPos;
attribute vec3 aNormal;
attribute vec3 aColor;   // x = palette code, y = emission, z = metalness
attribute float aKind;
attribute vec3 aLocal;   // cube-local coordinates for bevel highlights
attribute vec4 aOrbit;   // x = animated, z = phase

uniform vec3 uCamPos;
uniform vec3 uCamRight;
uniform vec3 uCamUp;
uniform vec3 uCamFwd;
uniform float uFocal;
uniform float uAspect;
uniform float uNear;
uniform float uFar;
uniform float uTime;
uniform float uIntro;

varying vec3 vWorld;
varying vec3 vNormal;
varying vec3 vNL;
varying vec3 vColor;
varying vec3 vLocal;
varying float vKind;
varying float vDepth;

mat2 rot(float a){ float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }

void main(){
  vec3 p = aPos;
  vec3 n = aNormal;
  if(aOrbit.x > 0.0){
    float a = uTime * 0.22 + aOrbit.z;
    p.xz = rot(a) * p.xz;
    n.xz = rot(a) * n.xz;
    p.y += sin(uTime * 0.7 + aOrbit.z) * 0.22;
  }
  // A barely-there sway makes the whole monument feel alive, not frozen.
  float wob = sin(uTime * 0.30 + p.y * 0.55) * 0.018;
  p.xz = rot(wob) * p.xz;
  n.xz = rot(wob) * n.xz;
  p.y -= (1.0 - uIntro) * 0.60;

  vec3 rel = p - uCamPos;
  float z = dot(rel, uCamFwd);
  vec2 xy = vec2(dot(rel, uCamRight), dot(rel, uCamUp));
  float A = (uFar + uNear) / (uFar - uNear);
  float B = -2.0 * uFar * uNear / (uFar - uNear);
  gl_Position = vec4(xy.x * uFocal / uAspect, xy.y * uFocal, A * z + B, z);

  vWorld = p;
  vNormal = normalize(n);
  vNL = aNormal;
  vColor = aColor;
  vLocal = aLocal;
  vKind = aKind;
  vDepth = z;
}
`;

  const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
varying vec3 vWorld;
varying vec3 vNormal;
varying vec3 vNL;
varying vec3 vColor;
varying vec3 vLocal;
varying float vKind;
varying float vDepth;

uniform vec2 uRes;
uniform vec3 uCamPos;
uniform vec3 uA;
uniform vec3 uB;
uniform vec3 uC;
uniform vec3 uD;
uniform float uTime;
uniform float uIntro;
uniform float uMood;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }

vec3 palette(float code){
  if(code < 0.5) return uA;
  if(code < 1.5) return uB;
  if(code < 2.5) return vec3(0.16, 0.66, 0.60);
  if(code < 3.5) return vec3(0.42, 0.65, 0.82);
  return mix(uC, uA, 0.12);
}

void main(){
  vec3 n = normalize(vNormal);
  vec3 view = normalize(uCamPos - vWorld);
  vec3 key = normalize(vec3(0.62, 0.78, -0.55));
  vec3 fill = normalize(vec3(-0.72, 0.34, 0.62));
  float dif = max(dot(n, key), 0.0);
  float fil = max(dot(n, fill), 0.0);
  float shade = 0.34 + 0.66 * clamp(n.y * 0.5 + 0.6, 0.0, 1.0);
  float ao = 0.66 + 0.34 * clamp(vWorld.y * 0.20 + 0.42, 0.0, 1.0);
  vec3 h = normalize(key + view);
  float spec = pow(max(dot(n, h), 0.0), 38.0) * (1.0 + vColor.z);
  float fres = pow(1.0 - max(dot(n, view), 0.0), 3.0);

  vec3 base;
  if(vKind > 0.5 && vKind < 1.5) base = uC * 0.38;            // floor
  else if(vKind > 2.5 && vKind < 3.5) base = mix(uC, uA, 0.12); // plinth
  else if(vKind > 3.5 && vKind < 4.5) base = uA;              // orbit cube
  else if(vKind > 4.5 && vKind < 5.5) base = mix(uA, uB, 0.35); // ring
  else base = palette(vColor.x);

  vec3 col = base * (0.18 + 0.80 * dif * shade + 0.22 * fil) * ao;
  col += uD * spec * 0.52;
  col += mix(uA, uB, 0.5) * fres * 0.20;
  col += base * vColor.y;

  // Chamfer light on every block edge: the tower reads as real solid geometry.
  if(vKind > 1.5 && vKind < 2.5){
    vec3 q = abs(vLocal);
    float d1, d2;
    if(abs(vNL.x) > 0.5){ d1 = 1.0 - q.y; d2 = 1.0 - q.z; }
    else if(abs(vNL.y) > 0.5){ d1 = 1.0 - q.x; d2 = 1.0 - q.z; }
    else { d1 = 1.0 - q.x; d2 = 1.0 - q.y; }
    float edge = 1.0 - smoothstep(0.0, 0.11, min(d1, d2));
    col += mix(uD, vec3(1.0), 0.45) * edge * 0.22;
    col += uA * (0.5 + 0.5 * sin(vLocal.y * 9.0 + uTime * 0.7)) * 0.025;
  }

  if(vKind > 0.5 && vKind < 1.5){
    // Reflective floor: grid, radial halo and a soft colour smear of the tower.
    vec2 g = abs(fract(vWorld.xz * 0.5) - 0.5);
    float grid = 1.0 - smoothstep(0.0, 0.028, min(g.x, g.y));
    col += mix(uA, uB, 0.4) * grid * 0.10 * exp(-vDepth * 0.035);
    float r = length(vWorld.xz);
    col += uA * exp(-r * 0.28) * 0.10;
    float refl = exp(-abs(vWorld.x - 0.12 * sin(vWorld.z * 0.5)) * 1.8)
               * exp(-abs(vWorld.z) * 0.18)
               * (0.55 + 0.45 * sin(vWorld.z * 2.4));
    col += mix(uA, uB, 0.5) * refl * 0.30;
    col *= 0.72;
  }
  if(vKind > 2.5 && vKind < 3.5){
    float ring = 0.5 + 0.5 * sin(length(vWorld.xz) * 18.0);
    col *= 0.82 + 0.18 * ring;
    col += uD * spec * 0.40;
  }
  if(vKind > 3.5 && vKind < 4.5) col += uA * 0.55;
  if(vKind > 4.5 && vKind < 5.5){
    col += mix(uA, uB, 0.4) * 1.25;
    col += uD * pow(fres, 0.6) * 0.60;
  }
  if(vKind > 5.5) col += mix(uA, uB, 0.3) * 1.10;

  float fog = 1.0 - exp(-vDepth * 0.033);
  vec3 fogCol = mix(uC * 0.55, uB * 0.16, 0.35);
  col = mix(col, fogCol, clamp(fog + (1.0 - uIntro) * 0.32, 0.0, 0.88));
  col *= mix(1.0, 0.74, uMood);

  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  col *= clamp(1.0 - 0.32 * pow(length(uv * vec2(0.72, 1.0)), 1.7), 0.0, 1.0);
  col += (hash(gl_FragCoord.xy + fract(uTime) * 91.0) - 0.5) * 0.018;
  col = pow(max(col, 0.0), vec3(0.90));
  gl_FragColor = vec4(col, 1.0);
}
`;

  // ---- Static geometry -------------------------------------------------------
  // 17 floats per vertex: pos(3), normal(3), colour(3), kind(1), local(3), orbit(4).
  const STRIDE = 17;
  const NO_ORBIT = [0, 0, 0, 0];
  const ZERO_LOCAL = [0, 0, 0];

  function emit(out, p, n, colour, kind, local, orbit) {
    out.push(
      p[0], p[1], p[2],
      n[0], n[1], n[2],
      colour[0], colour[1], colour[2],
      kind,
      local[0], local[1], local[2],
      orbit[0], orbit[1], orbit[2], orbit[3]
    );
  }
  function tri(out, a, b, c, n, colour, kind, orbit) {
    emit(out, a.p, n, colour, kind, a.l || ZERO_LOCAL, orbit || NO_ORBIT);
    emit(out, b.p, n, colour, kind, b.l || ZERO_LOCAL, orbit || NO_ORBIT);
    emit(out, c.p, n, colour, kind, c.l || ZERO_LOCAL, orbit || NO_ORBIT);
  }
  function quad(out, a, b, c, d, n, colour, kind, orbit) {
    tri(out, a, b, c, n, colour, kind, orbit);
    tri(out, a, c, d, n, colour, kind, orbit);
  }
  function rotateX(v, a) {
    const c = Math.cos(a), s = Math.sin(a);
    return [v[0], c * v[1] - s * v[2], s * v[1] + c * v[2]];
  }

  const BOX_FACES = [
    { n: [1, 0, 0], v: [[1, -1, -1], [1, 1, -1], [1, 1, 1], [1, -1, 1]] },
    { n: [-1, 0, 0], v: [[-1, -1, 1], [-1, 1, 1], [-1, 1, -1], [-1, -1, -1]] },
    { n: [0, 1, 0], v: [[-1, 1, -1], [-1, 1, 1], [1, 1, 1], [1, 1, -1]] },
    { n: [0, -1, 0], v: [[-1, -1, 1], [-1, -1, -1], [1, -1, -1], [1, -1, 1]] },
    { n: [0, 0, 1], v: [[-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]] },
    { n: [0, 0, -1], v: [[1, -1, -1], [-1, -1, -1], [-1, 1, -1], [1, 1, -1]] }
  ];

  function addBox(out, centre, size, colour, kind, orbit) {
    const o = orbit || NO_ORBIT;
    for (const face of BOX_FACES) {
      const corners = face.v.map(l => ({
        l,
        p: [
          centre[0] + l[0] * size[0] * 0.5,
          centre[1] + l[1] * size[1] * 0.5,
          centre[2] + l[2] * size[2] * 0.5
        ]
      }));
      quad(out, corners[0], corners[1], corners[2], corners[3], face.n, colour, kind, o);
    }
  }

  function addPlane(out, y, extent, colour, kind) {
    const a = { p: [-extent, y, -extent] }, b = { p: [extent, y, -extent] };
    const c = { p: [extent, y, extent] }, d = { p: [-extent, y, extent] };
    quad(out, a, b, c, d, [0, 1, 0], colour, kind, NO_ORBIT);
  }

  function addCylinder(out, centre, radius, height, segments, colour, kind) {
    const y0 = centre[1] - height * 0.5, y1 = centre[1] + height * 0.5;
    for (let i = 0; i < segments; i += 1) {
      const a0 = TAU * i / segments, a1 = TAU * (i + 1) / segments;
      const c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1);
      const p0 = [centre[0] + c0 * radius, y0, centre[2] + s0 * radius];
      const p1 = [centre[0] + c1 * radius, y0, centre[2] + s1 * radius];
      const p2 = [centre[0] + c1 * radius, y1, centre[2] + s1 * radius];
      const p3 = [centre[0] + c0 * radius, y1, centre[2] + s0 * radius];
      quad(out, { p: p0 }, { p: p1 }, { p: p2 }, { p: p3 }, [c0, 0, s0], colour, kind, NO_ORBIT);
      quad(out,
        { p: [centre[0], y1, centre[2]] }, { p: p3 }, { p: p2 },
        { p: [centre[0], y1, centre[2]] }, [0, 1, 0], colour, kind, NO_ORBIT);
    }
  }

  function addTorus(out, cy, radius, tube, tilt, colour, kind, phase) {
    const segments = 48, sides = 4;
    const orbit = [1, 0, phase, 0];
    const point = (a, b) => {
      const rr = radius + Math.cos(b) * tube;
      const p = [Math.cos(a) * rr, cy + Math.sin(b) * tube, Math.sin(a) * rr];
      const n = [Math.cos(b) * Math.cos(a), Math.sin(b), Math.cos(b) * Math.sin(a)];
      return { p: rotateX(p, tilt), n: rotateX(n, tilt) };
    };
    for (let i = 0; i < segments; i += 1) {
      const a0 = TAU * i / segments, a1 = TAU * (i + 1) / segments;
      for (let j = 0; j < sides; j += 1) {
        const b0 = TAU * j / sides, b1 = TAU * (j + 1) / sides;
        const v0 = point(a0, b0), v1 = point(a1, b0), v2 = point(a1, b1), v3 = point(a0, b1);
        tri(out, { p: v0.p }, { p: v1.p }, { p: v2.p }, v0.n, colour, kind, orbit);
        tri(out, { p: v0.p }, { p: v2.p }, { p: v3.p }, v3.n, colour, kind, orbit);
      }
    }
  }

  function addShard(out, radius, y, phase, colour) {
    const orbit = [1, 0, phase, 0];
    const n = [0.2, 0.9, 0.35];
    const a = { p: [radius, y, 0] };
    const b = { p: [radius + 0.34, y + 0.13, 0.22] };
    const c = { p: [radius + 0.12, y + 0.52, -0.18] };
    tri(out, a, b, c, n, colour, 6, orbit);
  }

  function buildGeometry() {
    const out = [];
    const metal = [4, 0.06, 0.65];
    const floor = [4, 0, 0];
    const blockColours = [[0, 0, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0]];

    addPlane(out, -0.17, 46, floor, 1);
    addCylinder(out, [0, -0.10, 0], 3.35, 0.13, 48, metal, 3);

    // The 16-level monument: one box per level, each with a slight offset.
    for (let level = 0; level < 16; level += 1) {
      const w = 2.45 - 0.058 * level + 0.12 * Math.sin(level * 1.7);
      const ox = 0.17 * Math.sin(level * 1.31) + 0.05 * Math.cos(level * 0.73);
      addBox(out, [ox, 0.15 + level * 0.46, 0], [w, 0.36, 1.32], blockColours[level % 4], 2, NO_ORBIT);
    }

    // Five orbiting cubes and twelve glass shards.
    for (let i = 0; i < 5; i += 1) {
      const radius = 4.4 + i * 0.12;
      addBox(out, [radius, 1.5 + i * 1.2, 0], [0.34, 0.34, 0.34], [0, 0.55, 0.2], 4, [1, 0, i * 1.2566, 0]);
    }
    for (let i = 0; i < 12; i += 1) {
      addShard(out, 5.0 + (i % 3) * 0.5, 1.4 + i * 0.62, i * 0.83, [i % 2, 1.1, 0.1]);
    }

    // Three slowly precessing orbital rings.
    const ringColours = [[0, 1.2, 0.2], [1, 1.2, 0.2], [0, 1.1, 0.2]];
    for (let i = 0; i < 3; i += 1) {
      addTorus(out, 1.9 + i * 2.35, 3.55 + i * 0.32, 0.018, 0.10 + i * 0.08, ringColours[i], 5, i * 2.1);
    }
    return new Float32Array(out);
  }

  const MESH = buildGeometry();
  const MESH_VERTICES = MESH.length / STRIDE;

  // ---- Canvas2D fallback (also what jsdom exercises) --------------------------
  function paintFallback(ctx, w, h, s) {
    const p = PALETTES[s.theme] || PALETTES.paper;
    const rgb = a => 'rgb(' + a.map(v => clamp(Math.round(v * 255), 0, 255)).join(',') + ')';
    const rgba = (a, alpha) => 'rgba(' + a.map(v => clamp(Math.round(v * 255), 0, 255)).join(',') + ',' + alpha + ')';
    const t = s.time || 0;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#04060E');
    grad.addColorStop(0.55, rgb(p.c.map(v => v * 2.1)));
    grad.addColorStop(1, '#020308');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    for (let i = 0; i < 4; i += 1) {
      const x = w * (0.2 + 0.2 * i) + Math.sin(t * 0.15 + i) * w * 0.05;
      const y = h * (0.22 + 0.13 * (i % 2));
      const r = Math.max(w, h) * (0.28 + 0.06 * i);
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, rgba(i % 2 ? p.b : p.a, 0.13));
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }

    ctx.fillStyle = 'rgba(255,255,255,.55)';
    for (let i = 0; i < 90; i += 1) {
      const x = ((i * 73.13) % 1000) / 1000 * w;
      const y = ((i * 37.71) % 1000) / 1000 * h * 0.8;
      ctx.globalAlpha = (0.3 + 0.7 * Math.abs(Math.sin(t * 0.8 + i))) * 0.6;
      ctx.fillRect(x, y, i % 7 === 0 ? 2 : 1, i % 7 === 0 ? 2 : 1);
    }
    ctx.globalAlpha = 1;

    const horizon = h * 0.66, cx = w * 0.62;
    ctx.strokeStyle = rgba(p.a, 0.16);
    ctx.lineWidth = 1;
    for (let i = -18; i <= 18; i += 1) {
      ctx.beginPath();
      ctx.moveTo(cx + i * 14, horizon);
      ctx.lineTo(cx + i * w * 0.09, h);
      ctx.stroke();
    }
    for (let i = 1; i <= 12; i += 1) {
      const y = horizon + (h - horizon) * (i / 12) * (i / 12);
      ctx.globalAlpha = 0.12 + 0.5 * (i / 12);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    const bw = Math.min(w * 0.24, 190), bx = cx - bw / 2;
    const colours = [rgb(p.a), 'rgb(41,168,152)', 'rgb(107,166,209)', rgb(p.b)];
    for (let i = 0; i < 12; i += 1) {
      const levelW = bw * (1 - i * 0.035);
      const y = horizon - 16 - i * 20;
      const x = bx + Math.sin(i * 1.3) * 9;
      ctx.fillStyle = colours[i % 4];
      ctx.globalAlpha = 0.82;
      ctx.fillRect(x, y - 17, levelW, 16);
      ctx.fillStyle = 'rgba(255,255,255,.14)';
      ctx.fillRect(x, y - 17, levelW, 2);
    }
    ctx.globalAlpha = 1;

    const vg = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.2, w / 2, h / 2, Math.max(w, h) * 0.75);
    vg.addColorStop(0, 'rgba(0,0,0,0)');
    vg.addColorStop(1, 'rgba(0,0,0,.72)');
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, w, h);
  }

  // ---- WebGL helpers ---------------------------------------------------------
  function compileShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const info = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error('shader: ' + info);
    }
    return shader;
  }
  function makeProgram(gl, vsSource, fsSource) {
    const vs = compileShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, fsSource);
    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const info = gl.getProgramInfoLog(program);
      gl.deleteShader(vs); gl.deleteShader(fs); gl.deleteProgram(program);
      throw new Error('link: ' + info);
    }
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    return program;
  }
  function locations(gl, program, names) {
    const out = {};
    for (const name of names) out[name] = gl.getUniformLocation(program, name);
    return out;
  }
  function normalise(v) {
    const l = Math.hypot(v[0], v[1], v[2]) || 1;
    return [v[0] / l, v[1] / l, v[2] / l];
  }
  function cross(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  }
  function cameraFor(time, mx, my, intro, mood) {
    const ang = -0.34 + time * 0.055 + mx * 0.22 + (1 - intro) * 0.75;
    const elev = 0.20 + my * 0.075 + (1 - intro) * 0.18;
    const dist = 10.4 + (1 - intro) * 9.0 + mood * 1.4;
    const target = [0.35, 3.15 - mood * 0.4, 0];
    const ce = Math.cos(elev);
    const pos = [
      target[0] + Math.sin(ang) * ce * dist,
      target[1] + Math.sin(elev) * dist,
      target[2] + Math.cos(ang) * ce * dist
    ];
    const fwd = normalise([target[0] - pos[0], target[1] - pos[1], target[2] - pos[2]]);
    const right = normalise(cross(fwd, [0, 1, 0]));
    const up = cross(right, fwd);
    return { pos, fwd, right, up };
  }

  class World {
    constructor(canvas, options) {
      this.canvas = canvas;
      this.options = options || {};
      this.theme = this.options.theme || 'paper';
      this.backend = 'none';
      this.available = false;
      this.preview = false;
      this.w = 0; this.h = 0;
      this.lastDraw = -1e9;
      this.frames = 0;
      this.errors = [];
      this.gl = null;
      this.ctx2d = null;
      this.glCandidate = null;
      this.vertexCount = MESH_VERTICES;
      if (!canvas || typeof canvas.getContext !== 'function') return;
      try { this.initGL(); } catch (error) { this.errors.push(String(error && error.message || error)); }
      if (this.backend === 'none') {
        let target = canvas;
        // A canvas that already owns a WebGL context cannot also own a 2D one.
        // Swap in an identical fresh canvas before starting the software painter.
        if (this.glCandidate && typeof document !== 'undefined' && canvas.parentNode && typeof canvas.cloneNode === 'function') {
          try {
            const clone = canvas.cloneNode(false);
            canvas.parentNode.replaceChild(clone, canvas);
            this.canvas = clone;
            target = clone;
          } catch (error) { this.errors.push(String(error && error.message || error)); }
        }
        try {
          this.ctx2d = target.getContext('2d');
          if (this.ctx2d) { this.backend = 'canvas2d'; this.available = true; }
        } catch (error) { this.errors.push(String(error && error.message || error)); }
      }
    }

    initGL() {
      const canvas = this.canvas;
      const attrs = { alpha: false, antialias: false, depth: true, stencil: false, powerPreference: 'high-performance' };
      const gl = canvas.getContext('webgl', attrs) || canvas.getContext('experimental-webgl', attrs);
      if (!gl || typeof gl.createShader !== 'function' || typeof gl.createProgram !== 'function') return;
      this.glCandidate = gl;
      const skyProgram = makeProgram(gl, SKY_VERT, SKY_FRAG);
      const objProgram = makeProgram(gl, VERT, FRAG);
      const skyBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, skyBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
      const objBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, objBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, MESH, gl.STATIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);

      this.gl = gl;
      this.skyProgram = skyProgram;
      this.objProgram = objProgram;
      this.skyBuffer = skyBuffer;
      this.objBuffer = objBuffer;
      this.skyAttrib = { aPos: gl.getAttribLocation(skyProgram, 'aPos') };
      const spec = [
        ['aPos', 3, 0], ['aNormal', 3, 3], ['aColor', 3, 6],
        ['aKind', 1, 9], ['aLocal', 3, 10], ['aOrbit', 4, 13]
      ];
      this.objAttribs = spec.map(([name, size, offset]) => ({ name, size, offset, loc: gl.getAttribLocation(objProgram, name) }));
      this.skyU = locations(gl, skyProgram, ['uRes', 'uMouse', 'uTime', 'uIntro', 'uMood', 'uA', 'uB', 'uC', 'uD']);
      this.objU = locations(gl, objProgram, [
        'uRes', 'uCamPos', 'uCamRight', 'uCamUp', 'uCamFwd', 'uFocal', 'uAspect', 'uNear', 'uFar',
        'uTime', 'uIntro', 'uMood', 'uA', 'uB', 'uC', 'uD'
      ]);
      gl.disable(gl.CULL_FACE);
      gl.disable(gl.BLEND);
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
      gl.clearDepth(1);
      gl.clearColor(0, 0, 0, 1);
      this.backend = 'webgl';
      this.available = true;
    }

    setTheme(name) { this.theme = PALETTES[name] ? name : 'paper'; }
    setPreviewMode(on) { this.preview = Boolean(on); }

    resize() {
      const canvas = this.canvas;
      if (!canvas) return;
      const cssW = Number(canvas.clientWidth) || 0;
      const cssH = Number(canvas.clientHeight) || 0;
      const w = cssW || (typeof window !== 'undefined' ? window.innerWidth : 960) || 960;
      const h = cssH || (typeof window !== 'undefined' ? window.innerHeight : 600) || 600;
      // Geometry is cheap enough to render at a generous fraction of the screen.
      const scale = this.backend === 'webgl' ? 0.85 : 0.6;
      const cap = 1400;
      const ratio = Math.min(1, cap / w);
      const pw = Math.max(2, Math.round(w * scale * ratio));
      const ph = Math.max(2, Math.round(h * scale * ratio));
      if (canvas.width !== pw || canvas.height !== ph) {
        try { canvas.width = pw; canvas.height = ph; } catch (_) { /* read-only canvas */ }
      }
      this.w = canvas.width;
      this.h = canvas.height;
      if (this.gl) this.gl.viewport(0, 0, this.w, this.h);
    }

    stats() {
      const palette = PALETTES[this.theme] || PALETTES.paper;
      return Object.freeze({
        backend: this.backend,
        available: this.available,
        frames: this.frames,
        vertices: this.vertexCount,
        triangles: Math.floor(this.vertexCount / 3),
        palette: palette.name,
        theme: this.theme,
        errors: this.errors.slice()
      });
    }

    render(snapshot) {
      if (!this.available || !this.canvas) return;
      const s = snapshot || {};
      const now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
      if (!this.preview && now - this.lastDraw < 33) return;
      this.lastDraw = now;
      const theme = PALETTES[s.theme] || PALETTES[this.theme] || PALETTES.paper;
      const time = finite(s.time, 0);
      const intro = clamp(finite(s.intro == null ? 1 : s.intro, 1), 0, 1);
      const mood = clamp(finite(s.mood, 0), 0, 1);
      const mx = clamp(finite(s.pointerX, 0), -1, 1);
      const my = clamp(finite(s.pointerY, 0), -1, 1);
      this.resize();
      const gl = this.gl;
      if (gl) {
        if (typeof gl.isContextLost === 'function' && gl.isContextLost()) {
          this.available = false;
          this.errors.push('WebGL context lost');
          return;
        }
        const cam = cameraFor(time, mx, my, intro, mood);
        gl.viewport(0, 0, this.w, this.h);
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // Pass 1: procedural sky, with the depth buffer held out of the way.
        gl.disable(gl.DEPTH_TEST);
        gl.depthMask(false);
        gl.useProgram(this.skyProgram);
        const su = this.skyU;
        gl.uniform2f(su.uRes, this.w, this.h);
        gl.uniform2f(su.uMouse, mx, my);
        gl.uniform1f(su.uTime, time);
        gl.uniform1f(su.uIntro, intro);
        gl.uniform1f(su.uMood, mood);
        gl.uniform3fv(su.uA, theme.a); gl.uniform3fv(su.uB, theme.b);
        gl.uniform3fv(su.uC, theme.c); gl.uniform3fv(su.uD, theme.d);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.skyBuffer);
        const sa = this.skyAttrib.aPos;
        if (sa >= 0) {
          gl.enableVertexAttribArray(sa);
          gl.vertexAttribPointer(sa, 2, gl.FLOAT, false, 0, 0);
        }
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        // Pass 2: real depth-tested geometry over the sky.
        gl.depthMask(true);
        gl.clear(gl.DEPTH_BUFFER_BIT);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.useProgram(this.objProgram);
        const ou = this.objU;
        gl.uniform2f(ou.uRes, this.w, this.h);
        gl.uniform3fv(ou.uCamPos, cam.pos);
        gl.uniform3fv(ou.uCamRight, cam.right);
        gl.uniform3fv(ou.uCamUp, cam.up);
        gl.uniform3fv(ou.uCamFwd, cam.fwd);
        gl.uniform1f(ou.uFocal, 1.45);
        gl.uniform1f(ou.uAspect, Math.max(0.2, this.w / Math.max(2, this.h)));
        gl.uniform1f(ou.uNear, 0.12);
        gl.uniform1f(ou.uFar, 80.0);
        gl.uniform1f(ou.uTime, time);
        gl.uniform1f(ou.uIntro, intro);
        gl.uniform1f(ou.uMood, mood);
        gl.uniform3fv(ou.uA, theme.a); gl.uniform3fv(ou.uB, theme.b);
        gl.uniform3fv(ou.uC, theme.c); gl.uniform3fv(ou.uD, theme.d);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.objBuffer);
        for (const a of this.objAttribs) {
          if (a.loc < 0) continue;
          gl.enableVertexAttribArray(a.loc);
          gl.vertexAttribPointer(a.loc, a.size, gl.FLOAT, false, STRIDE * 4, a.offset * 4);
        }
        gl.drawArrays(gl.TRIANGLES, 0, this.vertexCount);
      } else if (this.ctx2d) {
        const ctx = this.ctx2d;
        const cw = ctx.canvas && ctx.canvas.width ? ctx.canvas.width : this.w;
        const ch = ctx.canvas && ctx.canvas.height ? ctx.canvas.height : this.h;
        paintFallback(ctx, Math.max(2, cw), Math.max(2, ch), {
          theme: PALETTES[s.theme] ? s.theme : this.theme,
          time
        });
      }
      this.frames += 1;
    }
  }

  return Object.freeze({
    VERSION: '2.0.0',
    PALETTES,
    VERT,
    FRAG,
    SKY_VERT,
    SKY_FRAG,
    MESH_VERTICES,
    VERTEX_STRIDE: STRIDE,
    create: (canvas, options) => new World(canvas, options),
    World
  });
});
