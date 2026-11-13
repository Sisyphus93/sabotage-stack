// The things that come with some of the sabotages when chat strikes the title: two swirling portal gates, the arms of the
// drafting calipers, turbo's speed lines, the rollercoaster's rail. Each is built once, hidden, and shown while its sabotage
// is on (title-effects.js decides how much; this only dresses it).
import * as THREE from 'three';
import { colorOf } from './world-common.js';
import { TAU, clamp, smoothstep } from './util.js';

const glow = (hex, k = 1.7) => colorOf(hex).multiplyScalar(k);
const additive = (color, opacity = 1) => new THREE.MeshBasicMaterial({ color: glow(color), transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false });
const VERT = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }';

// the dashed, flowing line the rollercoaster rides on
const dashMaterial = (hex, { dash = 26, speed = 0.7 } = {}) => new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false,
  uniforms: { uColor: { value: glow(hex, 1.9) }, uTime: { value: 0 }, uDash: { value: dash }, uSpeed: { value: speed }, uOpacity: { value: 1 } }, vertexShader: VERT,
  fragmentShader: /* glsl */`varying vec2 vUv; uniform vec3 uColor; uniform float uTime, uDash, uSpeed, uOpacity;
    void main(){ float d = fract(vUv.x * uDash - uTime * uSpeed); float a = smoothstep(0.0, 0.18, d) * smoothstep(0.78, 0.5, d); a *= smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.7, vUv.y); gl_FragColor = vec4(uColor, a * uOpacity); }`
});

export class TitleProps {
  constructor(theme, palette) {
    this.theme = theme; this.palette = palette; this.group = new THREE.Group(); this.group.name = 'title-props'; this.disposables = [];
    const keep = o => { this.disposables.push(o); return o; };
    // ---- portal gates
    this.gates = []; const gateMat = side => keep(new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false,
      uniforms: { uTime: { value: 0 }, uA: { value: glow(palette.teal, 1.7) }, uB: { value: glow(palette.amber, 1.7) }, uDir: { value: 1 }, uOpacity: { value: 0 } }, vertexShader: VERT,
      fragmentShader: /* glsl */`varying vec2 vUv; uniform vec3 uA, uB; uniform float uTime, uDir, uOpacity;
        void main(){ float edge = 1.0 - abs(vUv.x - 0.5) * 2.0; float swirl = sin(vUv.y * 38.0 + uDir * uTime * 5.0 + sin(vUv.x * 9.0 + uTime) * 2.0) * 0.5 + 0.5;
          float fade = smoothstep(0.0, 0.18, vUv.y) * smoothstep(1.0, 0.82, vUv.y); float core = smoothstep(0.55, 1.0, edge);
          gl_FragColor = vec4(mix(uA, uB, swirl), (0.2 + swirl * 0.45) * (0.35 + core * 0.65) * fade * uOpacity); }`
    }));
    const planeGeo = keep(new THREE.PlaneGeometry(46, 1)); const ringGeo = keep(new THREE.TorusGeometry(1, 0.08, 6, 28));
    this.gateGroup = new THREE.Group(); this.gateGroup.visible = false; this.group.add(this.gateGroup);
    for (const side of [-1, 1]) {
      const mesh = new THREE.Mesh(planeGeo, gateMat(side)); mesh.userData.side = side; this.gateGroup.add(mesh); this.gates.push(mesh);
    }
    this.rings = []; const ringMat = keep(additive(palette.amber, 0.8));
    for (let i = 0; i < 14; i += 1) { const m = new THREE.Mesh(ringGeo, ringMat); m.rotation.y = Math.PI / 2; this.gateGroup.add(m); this.rings.push(m); }
    // ---- calipers: two steel legs that close in on the title, joined by a bow across the top
    this.jawGroup = new THREE.Group(); this.jawGroup.visible = false; this.group.add(this.jawGroup);
    const steel = keep(new THREE.MeshStandardMaterial({ color: '#E7ECF1', metalness: 0.85, roughness: 0.28 })); const brass = keep(new THREE.MeshStandardMaterial({ color: palette.amber, metalness: 0.6, roughness: 0.3 }));
    const legGeo = keep(new THREE.BoxGeometry(10, 1, 16)); const tipGeo = keep(new THREE.ConeGeometry(7, 34, 4)); const bowGeo = keep(new THREE.BoxGeometry(1, 8, 12)); const tickGeo = keep(new THREE.BoxGeometry(1.6, 8, 3));
    this.legs = [-1, 1].map(side => {
      const g = new THREE.Group(); const leg = new THREE.Mesh(legGeo, steel); leg.castShadow = true; g.add(leg);
      const tip = new THREE.Mesh(tipGeo, steel); tip.rotation.z = -side * Math.PI / 2; tip.position.set(-side * 22, 0, 0); g.add(tip); g.userData = { leg, tip, side }; this.jawGroup.add(g); return g;
    });
    this.bow = new THREE.Mesh(bowGeo, brass); this.bow.castShadow = true; this.jawGroup.add(this.bow);
    this.ticks = []; for (let i = 0; i < 24; i += 1) { const t = new THREE.Mesh(tickGeo, steel); this.jawGroup.add(t); this.ticks.push(t); }
    // ---- turbo's speed lines
    this.streakGroup = new THREE.Group(); this.streakGroup.visible = false; this.group.add(this.streakGroup);
    const streakGeo = keep(new THREE.PlaneGeometry(1, 1)); this.streaks = [];
    for (let i = 0; i < 12; i += 1) { const m = new THREE.Mesh(streakGeo, keep(additive(i % 2 ? palette.amber : palette.vermilion, 0.8))); m.userData = { y: (i + 0.5) / 12, speed: 700 + (i * 137) % 600, phase: (i * 0.37) % 1, len: 150 + (i * 53) % 150 }; this.streakGroup.add(m); this.streaks.push(m); }
    // ---- rollercoaster rail
    this.railGroup = new THREE.Group(); this.railGroup.visible = false; this.group.add(this.railGroup);
    this.railCount = 48; const positions = new Float32Array(this.railCount * 6); const uv = new Float32Array(this.railCount * 4); const index = [];
    for (let i = 0; i < this.railCount; i += 1) { const u = i / (this.railCount - 1); uv.set([u, 0, u, 1], i * 4); if (i < this.railCount - 1) { const a = i * 2; index.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); } }
    const railGeo = keep(new THREE.BufferGeometry()); railGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage)); railGeo.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); railGeo.setIndex(index);
    this.railMat = keep(dashMaterial(palette.teal)); this.rail = new THREE.Mesh(railGeo, this.railMat); this.rail.frustumCulled = false; this.railGroup.add(this.rail);
    this.railPositions = positions;
  }

  // pose: titlePose(); view: { time, layout, gateX, top (the height of the upper word's middle), reduced }
  update(pose, { time = 0, layout, gateX = 560, topMid = 250, reduced = false, floorY = 0 } = {}) {
    const id = pose ? pose.id : '';
    const showGates = id === 'portal' && pose.gates > 0.01; this.gateGroup.visible = showGates;
    if (showGates) {
      const h = 380; const dir = Math.sign(pose.wrap) || 1;
      this.gates.forEach(g => { g.scale.y = h; g.position.set(g.userData.side * gateX, topMid + 20, 0); const u = g.material.uniforms; u.uTime.value = time; u.uDir.value = dir * g.userData.side; u.uOpacity.value = pose.gates; });
      this.rings.forEach((r, i) => { const side = i % 2 ? 1 : -1; const k = Math.floor(i / 2); const y = topMid - 190 + ((k * 58 + time * 24 * dir * side) % 400 + 400) % 400; r.position.set(side * gateX, y, 0); r.scale.set(5 * pose.gates, 12 * pose.gates, 5 * pose.gates); });
    }
    const showJaws = id === 'calipers' && pose.jaws > 0.01; this.jawGroup.visible = showJaws;
    if (showJaws) {
      const k = pose.jaws; const half = layout.slabTW / 2; const top = layout.bottomTop + 27 + layout.capHeight + 44; const open = half + 70; const shut = half + 6; const x = open + (shut - open) * k;
      this.legs.forEach(g => {
        const { leg, tip, side } = g.userData; leg.scale.y = top; g.position.set(side * x, top / 2, 0); tip.position.set(-side * 22, -top / 2 + 6, 0); tip.rotation.z = -side * Math.PI / 2;
        // a second tip at the top, so the legs read as drafting arms
      });
      this.bow.scale.x = x * 2; this.bow.position.set(0, top + 2, 0);
      this.ticks.forEach((t, i) => { const u = (i + 0.5) / this.ticks.length; t.position.set((u - 0.5) * x * 2 * 0.96, top - 6, 7); t.scale.y = i % 4 === 0 ? 1.6 : 1; });
    }
    const showStreaks = id === 'turbo' && pose.streaks > 0.01; this.streakGroup.visible = showStreaks;
    if (showStreaks) {
      const span = layout.slabTW + 160; const base = layout.bottomTop + 27;
      this.streaks.forEach(m => {
        const d = m.userData; const dir = Math.sign(Math.sin(time * 5.6)) || 1; const t = ((time * d.speed / span + d.phase) % 1);
        m.scale.set(d.len * (0.6 + 0.4 * Math.sin(time * 30 + d.phase * 9)), 2.2, 1); m.position.set((dir > 0 ? t : 1 - t) * span - span / 2, base + d.y * layout.capHeight, 74); m.material.opacity = 0.75 * pose.streaks;
      });
    }
    const showRail = id === 'rollercoaster' && pose.rail > 0.01 && !reduced; this.railGroup.visible = showRail;
    if (showRail) {
      const n = this.railCount; const p = this.railPositions; const half = layout.slabTW / 2 + 40; const base = layout.bottomTop + 27 - 12; const letters = layout.letterCount || 8;
      const pts = []; for (let i = 0; i < n; i += 1) { const u = i / (n - 1); const x = (u - 0.5) * half * 2; const li = u * letters; pts.push([x, base + pose.rail * (Math.sin(time * 3.2 - li * 0.55) * 22 + 6) - 4]); }
      for (let i = 0; i < n; i += 1) {
        const a = pts[Math.max(0, i - 1)]; const b = pts[Math.min(n - 1, i + 1)]; let tx = b[0] - a[0]; let ty = b[1] - a[1]; const len = Math.hypot(tx, ty) || 1; tx /= len; ty /= len;
        const nx = -ty * 2.2; const ny = tx * 2.2; p.set([pts[i][0] + nx, pts[i][1] + ny, 70, pts[i][0] - nx, pts[i][1] - ny, 70], i * 6);
      }
      this.rail.geometry.attributes.position.needsUpdate = true; this.railMat.uniforms.uTime.value = time; this.railMat.uniforms.uOpacity.value = pose.rail;
    }
  }

  dispose() { for (const o of this.disposables) o.dispose(); this.disposables.length = 0; }
}
