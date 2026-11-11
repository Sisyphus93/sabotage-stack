// Theme worlds for the 3D view. Each theme supplies: block style, lights, bloom, a full-screen backdrop shader,
// a ground diorama (finite island so the backdrop shows around it), and the side rails that mark the bounce walls.
import * as THREE from 'three';

export const DEPTH = 96;          // z size of every block (presentation only; the rules are one-dimensional)
export const BLOCK_H = 22;
export const HALF_W = 180;

function seeded(seed) {
  let s = seed >>> 0;
  return () => { s = (s + 0x6D2B79F5) >>> 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
export function canvasTexture(width, height, paint) {
  const canvas = document.createElement('canvas');
  canvas.width = width; canvas.height = height;
  paint(canvas.getContext('2d'), width, height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}
export function disposeTree(root) {
  root.traverse(node => {
    if (node.geometry) node.geometry.dispose();
    const materials = Array.isArray(node.material) ? node.material : node.material ? [node.material] : [];
    for (const material of materials) {
      for (const key of ['map', 'alphaMap', 'emissiveMap']) if (material[key]) material[key].dispose();
      material.dispose();
    }
  });
}

const BACKDROP_VERT = 'varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 1.0, 1.0); }';
const BACKDROP_HEAD = `
varying vec2 vUv;
uniform float uTime; uniform float uAlt; uniform float uAspect; uniform float uHorizon;
uniform vec3 c0; uniform vec3 c1; uniform vec3 c2; uniform vec3 c3; uniform vec3 c4; uniform vec3 c5;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float starField(vec2 uv, float scale, float density, float size) {
  vec2 g = uv * scale; vec2 id = floor(g); vec2 f = fract(g) - 0.5;
  float h = hash(id);
  vec2 off = (vec2(hash(id + 3.1), hash(id + 7.7)) - 0.5) * 0.6;
  float twinkle = 0.55 + 0.45 * sin(uTime * (1.0 + h * 2.0) + h * 40.0);
  return (1.0 - smoothstep(0.0, size, length(f - off))) * step(1.0 - density, h) * twinkle;
}`;
const BACKDROPS = {
  // c0/c1 day paper (bottom/top), c2/c3 dusk (bottom/top), c4 ink, c5 teal wash
  paper: `
void main() {
  vec2 uv = vUv;
  float k = smoothstep(1300.0, 3400.0, uAlt + uv.y * 500.0);
  vec3 col = mix(mix(c0, c1, uv.y), mix(c2, c3, uv.y), k);
  vec2 b = (uv - vec2(0.78, 0.72)) * vec2(uAspect, 0.75);
  col = mix(col, c5, 0.09 * (1.0 - smoothstep(0.0, 0.45, length(b))) * (1.0 - k));
  vec2 g = vec2(uv.x * uAspect * 6.0 + 0.3, uv.y * 6.0 + uAlt * 0.0022);
  vec2 f = abs(fract(g) - 0.5);
  float line = max(smoothstep(0.487, 0.5, f.x), smoothstep(0.487, 0.5, f.y));
  col = mix(col, c4, line * 0.085 * (1.0 - k * 0.5));
  float n = hash(floor(uv * vec2(uAspect, 1.0) * 480.0));
  col *= 1.0 - 0.03 * (n - 0.5);
  float star = starField(vec2(uv.x * uAspect, uv.y + uAlt * 0.0004), 13.0, 0.3, 0.07);
  col = mix(col, vec3(1.0, 0.95, 0.78), star * k);
  gl_FragColor = vec4(col, 1.0);
}`,
  // c0 zenith, c1 mid, c2 horizon, c3 below-horizon, c4 sun top, c5 sun bottom
  sunset: `
void main() {
  vec2 uv = vUv;
  float y = uv.y - uHorizon;
  vec3 sky = mix(c2, mix(c1, c0, smoothstep(0.1, 0.62, y)), smoothstep(0.0, 0.2, y));
  vec3 under = mix(mix(c2, c3, 0.72), c3, smoothstep(0.0, 0.18, -y));
  vec3 col = y > 0.0 ? sky : under;
  float fade = smoothstep(0.08, 0.4, y);
  col += vec3(1.0, 0.9, 1.0) * starField(vec2(uv.x * uAspect, uv.y + uAlt * 0.00025), 20.0, 0.32, 0.06) * fade;
  col += vec3(0.75, 0.9, 1.0) * starField(vec2(uv.x * uAspect + 3.7, uv.y + uAlt * 0.0004), 34.0, 0.2, 0.08) * fade * 0.7;
  float R = 0.21;
  vec2 p = vec2((uv.x - 0.5) * uAspect, y - 0.17);
  float r = length(p);
  float disc = 1.0 - smoothstep(R - 0.003, R + 0.003, r);
  float cut = mix(0.08, 0.8, clamp(-p.y / R, 0.0, 1.0));
  float bands = p.y > 0.0 ? 1.0 : step(cut, fract(p.y * 24.0 - uTime * 0.1));
  vec3 sun = mix(c5, c4, smoothstep(-R, R, p.y));
  col = mix(col, sun, disc * bands * step(0.0, y));
  col += c5 * 0.3 * exp(-r * r / (R * R * 2.2)) * smoothstep(-0.04, 0.08, y);
  col += c2 * 0.55 * exp(-abs(y) * 70.0);
  gl_FragColor = vec4(col, 1.0);
}`,
  // c0 centre blue, c1 edge navy, c2 ray tint, c3 gold
  primetime: `
void main() {
  vec2 uv = vUv;
  vec2 p = vec2((uv.x - 0.5) * uAspect, uv.y - 0.6);
  float r = length(p);
  vec3 col = mix(c0, c1, smoothstep(0.0, 0.8, r));
  float a = atan(p.y, p.x) + uTime * 0.05;
  float rays = smoothstep(0.15, 1.0, sin(a * 16.0));
  col += c2 * rays * 0.13 * smoothstep(0.04, 0.45, r) * (1.0 - smoothstep(0.5, 1.15, r));
  for (int i = 0; i < 2; i++) {
    float fi = float(i);
    vec2 g = vec2(uv.x * uAspect, uv.y + uAlt * 0.0003 * (1.0 + fi)) * mix(7.0, 12.0, fi) + fi * 17.3;
    vec2 id = floor(g); vec2 f = fract(g) - 0.5; float h = hash(id);
    vec2 off = (vec2(hash(id + 3.1), hash(id + 7.7)) - 0.5) * 0.5;
    float d = length(f - off);
    float dotv = (1.0 - smoothstep(0.03, 0.12 + 0.08 * h, d)) * step(0.55, h);
    float tw = 0.4 + 0.6 * sin(uTime * (0.8 + h * 2.0) + h * 50.0);
    col += mix(c3, vec3(1.0), h) * dotv * tw * 0.2;
  }
  gl_FragColor = vec4(col, 1.0);
}`
};
const BACKDROP_COLORS = {
  paper: ['#EFE5CF', '#F8F2E6', '#B9CFD6', '#2C3A5C', '#2A2520', '#2F8478'],
  sunset: ['#12082B', '#5B1B7D', '#FF6B35', '#170B33', '#FFE45C', '#FF3D8B'],
  primetime: ['#2148B8', '#050E30', '#9FC0FF', '#FFC83D', '#000000', '#000000']
};
export function makeBackdrop(name) {
  const uniforms = { uTime: { value: 0 }, uAlt: { value: 0 }, uAspect: { value: 0.69 }, uHorizon: { value: 0.5 } };
  BACKDROP_COLORS[name].forEach((hex, index) => { uniforms[`c${index}`] = { value: new THREE.Color(hex) }; });
  const material = new THREE.ShaderMaterial({ vertexShader: BACKDROP_VERT, fragmentShader: BACKDROP_HEAD + BACKDROPS[name], uniforms, depthTest: false, depthWrite: false });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
  mesh.frustumCulled = false;
  mesh.renderOrder = -1000;
  return mesh;
}

export const THEMES = {
  paper: {
    style: { rounded: true, radius: 3.4, roughness: 0.86, metalness: 0, emissive: 0, env: 0.45, edges: false },
    bloom: { strength: 0.08, radius: 0.4, threshold: 1.0 },
    hemi: ['#FFF8EA', '#CDBB98', 0.62], sun: ['#FFF1D6', 1.05], ambientEnv: 0.3,
    particles: { additive: false, square: true },
    ink: '#2A2520', accent: '#D5472F', glow: '#E3A33B', cool: '#2F8478', dust: '#CBB994', veil: '#2A2520', star: '#2A2520', spark: '#E3A33B',
    shadow: 0.34
  },
  sunset: {
    style: { rounded: false, radius: 0, roughness: 0.32, metalness: 0.15, emissive: 0.22, env: 0.5, edges: true },
    bloom: { strength: 0.5, radius: 0.6, threshold: 0.8 },
    hemi: ['#FF9BD6', '#2B1155', 0.55], sun: ['#FFC9A0', 1.0], ambientEnv: 0.3,
    particles: { additive: true, square: true },
    ink: '#170B33', accent: '#FF5964', glow: '#FFC53D', cool: '#2EC4B6', dust: '#FF8FD0', veil: '#0B0520', star: '#FFF3E2', spark: '#FFE45C',
    shadow: 0.5
  },
  primetime: {
    style: { rounded: true, radius: 4.6, roughness: 0.24, metalness: 0.1, emissive: 0.02, env: 0.75, edges: false },
    bloom: { strength: 0.3, radius: 0.6, threshold: 0.96 },
    hemi: ['#9DB8FF', '#0A1A55', 0.42], sun: ['#FFFFFF', 0.95], ambientEnv: 0.3,
    particles: { additive: true, square: true },
    ink: '#061238', accent: '#FF5A52', glow: '#FFC83D', cool: '#35D0E8', dust: '#C9D6FF', veil: '#030A24', star: '#061238', spark: '#FFC83D',
    shadow: 0.5
  }
};

/* ------------------------------------------------------------------ Paper: a desk-top cardboard diorama */
function paperEnv() {
  const group = new THREE.Group();
  const random = seeded(7);
  const deskTexture = canvasTexture(1024, 1024, (c, w, h) => {
    c.fillStyle = '#EFE4CE'; c.fillRect(0, 0, w, h);
    c.strokeStyle = 'rgba(42,37,32,.11)'; c.lineWidth = 2;
    for (let i = 0; i <= w; i += 64) { c.beginPath(); c.moveTo(i, 0); c.lineTo(i, h); c.moveTo(0, i); c.lineTo(w, i); c.stroke(); }
    c.strokeStyle = 'rgba(47,132,120,.35)'; c.lineWidth = 5; c.setLineDash([18, 14]);
    c.beginPath(); c.arc(w / 2, h / 2, 250, 0, Math.PI * 2); c.stroke();
    c.setLineDash([]); c.strokeStyle = 'rgba(213,71,47,.3)'; c.lineWidth = 3;
    c.beginPath(); c.arc(w / 2, h / 2, 420, 0, Math.PI * 2); c.stroke();
    for (let i = 0; i < 900; i += 1) { c.fillStyle = `rgba(42,37,32,${0.04 + random() * 0.08})`; c.fillRect(random() * w, random() * h, 2, 2); }
  });
  const desk = new THREE.Mesh(new THREE.CylinderGeometry(600, 600, 40, 72), [
    new THREE.MeshStandardMaterial({ color: '#D9C7A2', roughness: 0.95 }),
    new THREE.MeshStandardMaterial({ map: deskTexture, roughness: 0.96 }),
    new THREE.MeshStandardMaterial({ color: '#D9C7A2', roughness: 0.95 })
  ]);
  desk.position.y = -20; desk.receiveShadow = true;
  const ground = new THREE.Group(); ground.add(desk); group.add(ground);

  const card = new THREE.MeshStandardMaterial({ color: '#FBF6EA', roughness: 0.95 });
  const roofs = ['#E9B96B', '#74ADA3', '#A9C3D2', '#E08672'].map(color => new THREE.MeshStandardMaterial({ color, roughness: 0.9 }));
  const leaf = new THREE.MeshStandardMaterial({ color: '#8DBBAE', roughness: 0.95, flatShading: true });
  const props = new THREE.Group();
  for (let i = 0; i < 13; i += 1) {
    const angle = (18 + i * 12 + random() * 6) * Math.PI / 180;
    const radius = 360 + random() * 190;
    const x = Math.cos(angle) * radius; const z = -Math.sin(angle) * radius;
    if (i % 3 === 2) {
      const tree = new THREE.Group();
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(4, 5, 22, 6), card); trunk.position.y = 11;
      const crown = new THREE.Mesh(new THREE.ConeGeometry(22 + random() * 10, 62 + random() * 30, 7), leaf); crown.position.y = 22 + crown.geometry.parameters.height / 2;
      tree.add(trunk, crown); tree.position.set(x, 0, z); props.add(tree);
    } else {
      const w = 44 + random() * 34; const h = 36 + random() * 70; const d = 40 + random() * 26;
      const house = new THREE.Group();
      const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), card); body.position.y = h / 2;
      const roof = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.78, 26 + random() * 16, 4), roofs[i % roofs.length]);
      roof.position.y = h + roof.geometry.parameters.height / 2; roof.rotation.y = Math.PI / 4;
      house.add(body, roof); house.position.set(x, 0, z); house.rotation.y = random() * 0.8 - 0.4; props.add(house);
    }
  }
  props.traverse(node => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
  ground.add(props);

  const cloudMaterial = new THREE.MeshStandardMaterial({ color: '#FFFFFF', roughness: 1 });
  const puff = new THREE.SphereGeometry(1, 14, 10);
  const clouds = [];
  for (let i = 0; i < 12; i += 1) {
    const cloud = new THREE.Group();
    const parts = 3 + Math.floor(random() * 3);
    for (let j = 0; j < parts; j += 1) {
      const m = new THREE.Mesh(puff, cloudMaterial);
      const s = 26 + random() * 26;
      m.scale.set(s * 1.5, s * 0.72, s * 0.5);
      m.position.set((j - (parts - 1) / 2) * 34 + random() * 10, random() * 12, random() * 8);
      cloud.add(m);
    }
    const info = { node: cloud, x: random() * 1300 - 650, base: 260 + i * 105 + random() * 50, z: -170 - random() * 430, speed: 4 + random() * 9 };
    clouds.push(info); group.add(cloud);
  }
  const planeGeometry = new THREE.BufferGeometry();
  planeGeometry.setAttribute('position', new THREE.Float32BufferAttribute([
    0, 0, 16, -11, 2, -11, 0, 2, -11,   0, 0, 16, 0, 2, -11, 11, 2, -11,   0, 0, 16, 0, -5, -11, 0, 2, -11
  ], 3));
  planeGeometry.computeVertexNormals();
  const planeMaterial = new THREE.MeshStandardMaterial({ color: '#FFFFFF', roughness: 0.9, side: THREE.DoubleSide, flatShading: true });
  const planes = [];
  for (let i = 0; i < 3; i += 1) {
    const mesh = new THREE.Mesh(planeGeometry, planeMaterial);
    mesh.scale.setScalar(1.5 + i * 0.35); mesh.castShadow = true;
    planes.push({ mesh, radius: 300 + i * 70, speed: (0.32 - i * 0.07) * (i % 2 ? -1 : 1), phase: i * 2.1, lift: 60 + i * 95 });
    group.add(mesh);
  }
  const moon = new THREE.Mesh(new THREE.CircleGeometry(70, 40), new THREE.MeshBasicMaterial({ color: '#FFF3C4' }));
  moon.position.set(-250, 3300, -700); group.add(moon);

  return {
    group, ground,
    update({ t, targetY }) {
      const period = 12 * 105;
      for (const c of clouds) {
        const x = ((c.x + t * c.speed + 700) % 1400 + 1400) % 1400 - 700;
        const y = c.base + Math.max(0, Math.round((targetY - c.base) / period)) * period;
        c.node.position.set(x, y, c.z);
      }
      for (const p of planes) {
        const a = p.phase + t * p.speed;
        // Scenery never passes in front of the tower: nothing may cover the moving block.
        p.mesh.position.set(Math.cos(a) * (p.radius + 120), targetY + p.lift + Math.sin(t * 0.7 + p.phase) * 26, -330 - Math.sin(a) * 150);
        p.mesh.rotation.set(0, Math.atan2(-Math.sin(a) * (p.radius + 120) * Math.sign(p.speed), -Math.cos(a) * 150 * Math.sign(p.speed)), 0);
        p.mesh.rotateZ(Math.sin(t * 0.7 + p.phase) * 0.25 + (p.speed > 0 ? -0.3 : 0.3));
      }
    }
  };
}

/* ------------------------------------------------------------------ Sunset Stack '94: outrun grid and wireframes */
function sunsetEnv() {
  const group = new THREE.Group();
  const random = seeded(94);
  const grid = new THREE.Mesh(new THREE.PlaneGeometry(4400, 4400), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uTime: { value: 0 }, cLine: { value: new THREE.Color('#FF4FA3') }, cLine2: { value: new THREE.Color('#35E0F0') }, cFill: { value: new THREE.Color('#170B33') } },
    vertexShader: 'varying vec3 vW; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: `
      varying vec3 vW; uniform float uTime; uniform vec3 cLine; uniform vec3 cLine2; uniform vec3 cFill;
      void main() {
        vec2 g = vW.xz / 60.0; g.y -= uTime * 0.55;
        vec2 f = 0.5 - abs(fract(g) - 0.5);
        vec2 w = fwidth(g) * 1.4 + 0.018;
        float line = max(1.0 - smoothstep(0.0, w.x, f.x), 1.0 - smoothstep(0.0, w.y, f.y));
        float dist = length(vW.xz);
        float a = 1.0 - smoothstep(900.0, 1900.0, dist);
        vec3 lineColor = mix(cLine2, cLine, smoothstep(150.0, 1100.0, dist));
        gl_FragColor = vec4(cFill + lineColor * line * 1.35, a);
      }`
  }));
  grid.rotation.x = -Math.PI / 2; grid.renderOrder = -5;
  const shadowCatcher = new THREE.Mesh(new THREE.CircleGeometry(640, 48), new THREE.ShadowMaterial({ opacity: 0.55 }));
  shadowCatcher.rotation.x = -Math.PI / 2; shadowCatcher.position.y = 0.6; shadowCatcher.receiveShadow = true;
  const ring = new THREE.Mesh(new THREE.TorusGeometry(226, 2.2, 8, 96), new THREE.MeshBasicMaterial({ color: '#FFC53D' }));
  ring.rotation.x = Math.PI / 2; ring.position.y = 1.5;
  const ground = new THREE.Group(); ground.add(grid, shadowCatcher, ring); group.add(ground);

  const fillPositions = []; const linePositions = [];
  const steps = 46; let previous = null;
  for (let i = 0; i <= steps; i += 1) {
    const angle = (8 + (i / steps) * 164) * Math.PI / 180;
    const radius = 1750;
    const base = new THREE.Vector3(Math.cos(angle) * radius, 0, -Math.sin(angle) * radius);
    const peak = base.clone().setY(i % 2 ? 90 + random() * 210 : 20 + random() * 60);
    if (previous) {
      fillPositions.push(previous.base.x, 0, previous.base.z, base.x, 0, base.z, previous.peak.x, previous.peak.y, previous.peak.z,
        base.x, 0, base.z, peak.x, peak.y, peak.z, previous.peak.x, previous.peak.y, previous.peak.z);
      linePositions.push(previous.peak.x, previous.peak.y, previous.peak.z, peak.x, peak.y, peak.z, peak.x, peak.y, peak.z, base.x, 0, base.z,
        previous.peak.x, previous.peak.y, previous.peak.z, base.x, 0, base.z);
    }
    previous = { base, peak };
  }
  const fillGeometry = new THREE.BufferGeometry(); fillGeometry.setAttribute('position', new THREE.Float32BufferAttribute(fillPositions, 3));
  const lineGeometry = new THREE.BufferGeometry(); lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
  const mountains = new THREE.Group();
  mountains.add(new THREE.Mesh(fillGeometry, new THREE.MeshBasicMaterial({ color: '#1B0A3F', side: THREE.DoubleSide })));
  mountains.add(new THREE.LineSegments(lineGeometry, new THREE.LineBasicMaterial({ color: '#FF4FA3' })));
  ground.add(mountains);

  const shapes = [];
  const shapeGeometries = [new THREE.IcosahedronGeometry(46, 0), new THREE.OctahedronGeometry(42, 0), new THREE.TorusGeometry(34, 12, 6, 10), new THREE.TetrahedronGeometry(48, 0)];
  const shapeColors = ['#35E0F0', '#FF4FA3', '#FFC53D', '#B983FF'];
  for (let i = 0; i < 9; i += 1) {
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(shapeGeometries[i % 4]), new THREE.LineBasicMaterial({ color: shapeColors[i % 4] }));
    const side = i % 2 ? 1 : -1;
    shapes.push({ node: edges, x: side * (260 + random() * 260), base: 420 + i * 190 + random() * 60, z: -160 - random() * 380, spin: 0.2 + random() * 0.5, phase: random() * 6 });
    group.add(edges);
  }
  return {
    group, ground,
    update({ t, targetY }) {
      grid.material.uniforms.uTime.value = t;
      ring.scale.setScalar(1 + Math.sin(t * 2) * 0.012);
      const period = 9 * 190;
      for (const s of shapes) {
        const y = s.base + Math.max(0, Math.round((targetY - s.base) / period)) * period;
        s.node.position.set(s.x, y + Math.sin(t * 0.6 + s.phase) * 18, s.z);
        s.node.rotation.set(t * s.spin * 0.7 + s.phase, t * s.spin, 0);
      }
    }
  };
}

/* ------------------------------------------------------------------ Prime Time: a glossy game-show stage */
function primetimeEnv() {
  const group = new THREE.Group();
  const ground = new THREE.Group(); group.add(ground);
  const stage = new THREE.Mesh(new THREE.CylinderGeometry(470, 500, 34, 80), new THREE.MeshStandardMaterial({ color: '#0A1D66', roughness: 0.3, metalness: 0.35, envMapIntensity: 0.6 }));
  stage.position.y = -17; stage.receiveShadow = true; ground.add(stage);
  const gold = new THREE.MeshStandardMaterial({ color: '#FFC83D', roughness: 0.3, metalness: 0.85, emissive: '#7A5200', emissiveIntensity: 0.6 });
  const rim = new THREE.Mesh(new THREE.TorusGeometry(472, 7, 10, 96), gold); rim.rotation.x = Math.PI / 2; rim.position.y = 0; ground.add(rim);
  const glowRings = [];
  for (const [radius, color] of [[250, '#35D0E8'], [345, '#FFC83D'], [420, '#FF5A52']]) {
    const mesh = new THREE.Mesh(new THREE.RingGeometry(radius - 3, radius + 3, 96), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9 }));
    mesh.rotation.x = -Math.PI / 2; mesh.position.y = 0.8; ground.add(mesh); glowRings.push(mesh);
  }
  const bulbCount = 60;
  const bulbs = new THREE.InstancedMesh(new THREE.SphereGeometry(7, 10, 8), new THREE.MeshBasicMaterial({ color: '#FFFFFF' }), bulbCount);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < bulbCount; i += 1) {
    const a = i / bulbCount * Math.PI * 2;
    dummy.position.set(Math.cos(a) * 486, -4, Math.sin(a) * 486); dummy.updateMatrix(); bulbs.setMatrixAt(i, dummy.matrix);
  }
  bulbs.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(bulbCount * 3), 3);
  ground.add(bulbs);

  const coneMaterial = color => new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: { uColor: { value: new THREE.Color(color) }, uOpacity: { value: 0.2 } },
    vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: 'varying vec2 vUv; uniform vec3 uColor; uniform float uOpacity; void main() { gl_FragColor = vec4(uColor, uOpacity * pow(vUv.y, 1.6)); }'
  });
  const cones = [];
  const coneGeometry = new THREE.ConeGeometry(150, 1100, 28, 1, true);
  [['#FFC83D', -360], ['#35D0E8', -150], ['#FFFFFF', 130], ['#FF7FA8', 340]].forEach(([color, x], index) => {
    const pivot = new THREE.Group();
    const cone = new THREE.Mesh(coneGeometry, coneMaterial(color)); cone.position.y = -550; cone.renderOrder = 5;
    pivot.add(cone); pivot.position.set(x, 900, -330 - (index % 2) * 90);
    cones.push({ pivot, phase: index * 1.7, x }); group.add(pivot);
  });
  const color = new THREE.Color();
  const warm = new THREE.Color('#FFD76A'); const dim = new THREE.Color('#5A3F12');
  return {
    group, ground,
    update({ t, targetY }) {
      for (let i = 0; i < bulbCount; i += 1) {
        const on = ((i + Math.floor(t * 7)) % 4) < 2;
        color.copy(on ? warm : dim); bulbs.setColorAt(i, color);
      }
      bulbs.instanceColor.needsUpdate = true;
      glowRings.forEach((ring, index) => { ring.material.opacity = 0.55 + 0.4 * Math.sin(t * 2.2 - index * 1.3); });
      for (const c of cones) {
        c.pivot.position.y = targetY + 760;
        c.pivot.rotation.z = Math.sin(t * 0.45 + c.phase) * 0.42 + c.x * 0.0007;
        c.pivot.rotation.x = 0.26 + Math.sin(t * 0.3 + c.phase) * 0.1;
      }
    }
  };
}

export function makeEnvironment(name) {
  return name === 'sunset' ? sunsetEnv() : name === 'primetime' ? primetimeEnv() : paperEnv();
}

/* ------------------------------------------------------------------ Side rails: the walls the mover bounces off */
export function makeRails(name) {
  const group = new THREE.Group();
  const LENGTH = 6600;
  let update = () => {};
  if (name === 'sunset') {
    const material = new THREE.MeshBasicMaterial({ color: '#35E0F0' });
    for (const side of [-1, 1]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(2.4, LENGTH, 2.4), material);
      rail.position.set(side * (HALF_W + 4), 0, 0); group.add(rail);
    }
    update = targetY => { group.position.y = Math.max(LENGTH / 2, targetY); };
  } else if (name === 'primetime') {
    const material = new THREE.MeshStandardMaterial({ color: '#FFC83D', roughness: 0.28, metalness: 0.9 });
    const perSide = 26; const gap = 66;
    const bulbs = new THREE.InstancedMesh(new THREE.SphereGeometry(5, 8, 6), new THREE.MeshBasicMaterial({ color: '#FFFFFF' }), perSide * 2);
    bulbs.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(perSide * 6), 3);
    bulbs.frustumCulled = false;
    const rails = [];
    for (const side of [-1, 1]) {
      const rail = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, LENGTH, 10), material);
      rail.position.set(side * (HALF_W + 6), 0, 0); rails.push(rail); group.add(rail);
    }
    group.add(bulbs);
    const dummy = new THREE.Object3D(); const color = new THREE.Color();
    const on = new THREE.Color('#FFE9A8'); const off = new THREE.Color('#4A3410');
    update = (targetY, t) => {
      for (const rail of rails) rail.position.y = Math.max(LENGTH / 2, targetY);
      const start = Math.max(0, Math.floor((targetY - perSide * gap / 2) / gap));
      for (let s = 0; s < 2; s += 1) {
        for (let i = 0; i < perSide; i += 1) {
          const index = start + i;
          dummy.position.set((s ? 1 : -1) * (HALF_W + 6), 20 + index * gap, 6); dummy.updateMatrix();
          bulbs.setMatrixAt(s * perSide + i, dummy.matrix);
          color.copy(((index + Math.floor(t * 6)) % 3) === 0 ? on : off); bulbs.setColorAt(s * perSide + i, color);
        }
      }
      bulbs.instanceMatrix.needsUpdate = true; bulbs.instanceColor.needsUpdate = true;
    };
  } else {
    const period = BLOCK_H * 10;
    const texture = canvasTexture(32, 440, (c, w, h) => {
      c.fillStyle = '#E3D2AA'; c.fillRect(0, 0, w, h);
      c.fillStyle = '#2A2520';
      for (let i = 0; i < 10; i += 1) { const y = Math.round(i * h / 10); c.fillRect(0, y, i === 0 ? w : i === 5 ? w * 0.7 : w * 0.42, i === 0 ? 5 : 3); }
    });
    texture.wrapT = THREE.RepeatWrapping; texture.repeat.set(1, LENGTH / period);
    const material = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.9 });
    const rails = [];
    for (const side of [-1, 1]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(9, LENGTH, 4), material);
      rail.position.set(side * (HALF_W + 6), 0, 0); rail.castShadow = true; rails.push(rail); group.add(rail);
    }
    update = targetY => { for (const rail of rails) rail.position.y = LENGTH / 2 + Math.max(0, Math.floor((targetY - LENGTH / 2) / period)) * period; };
  }
  return { group, update };
}
