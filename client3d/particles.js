// GPU-friendly particle systems driven from the CPU: glowing sparks/dust (Points) and tumbling confetti (InstancedMesh).
import * as THREE from 'three';
import { rng, TAU } from './util.js';

const sparkVertex = /* glsl */`
  attribute float aSize; attribute vec4 aColor; varying vec4 vColor; uniform float uScale;
  void main() {
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = max(1.0, aSize * uScale / max(1.0, -mv.z));
    gl_Position = projectionMatrix * mv;
  }
`;
const sparkFragment = /* glsl */`
  varying vec4 vColor;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float a = 1.0 - smoothstep(0.0, 1.0, d);
    a *= a;
    if (a < 0.01) discard;
    gl_FragColor = vec4(vColor.rgb, vColor.a * a);
  }
`;

export class Sparks {
  constructor(capacity = 1400, { blending = THREE.AdditiveBlending, depthTest = true } = {}) {
    this.capacity = capacity;
    this.cursor = 0;
    this.position = new Float32Array(capacity * 3);
    this.color = new Float32Array(capacity * 4);
    this.size = new Float32Array(capacity);
    this.vel = new Float32Array(capacity * 3);
    this.life = new Float32Array(capacity);
    this.maxLife = new Float32Array(capacity);
    this.drag = new Float32Array(capacity);
    this.gravity = new Float32Array(capacity);
    this.base = new Float32Array(capacity * 4);
    this.growth = new Float32Array(capacity);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(this.position, 3).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute('aColor', new THREE.BufferAttribute(this.color, 4).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    this.material = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 800 } }, vertexShader: sparkVertex, fragmentShader: sparkFragment,
      transparent: true, depthWrite: false, depthTest, blending
    });
    this.points = new THREE.Points(geometry, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = 8;
    this.density = 1;
    this.random = rng(7);
  }

  emit({ pos, vel = [0, 0, 0], color = [1, 1, 1], alpha = 1, size = 6, life = 1, drag = 0.6, gravity = 0, growth = 0 }) {
    if (this.density < 1 && Math.random() > this.density) return;
    const i = this.cursor; this.cursor = (this.cursor + 1) % this.capacity;
    this.position.set(pos, i * 3); this.vel.set(vel, i * 3);
    this.base.set([color[0], color[1], color[2], alpha], i * 4);
    this.size[i] = size; this.life[i] = life; this.maxLife[i] = life; this.drag[i] = drag; this.gravity[i] = gravity; this.growth[i] = growth;
  }

  burst({ pos, count = 24, speed = 160, spread = 1, color = [1, 0.8, 0.3], size = 5, life = 0.9, gravity = -260, up = 0.2, drag = 1.2, alpha = 1, growth = 0, direction = null }) {
    for (let n = 0; n < count; n += 1) {
      const theta = this.random() * TAU; const phi = Math.acos(2 * this.random() - 1);
      const v = speed * (0.35 + this.random() * 0.65);
      let vx = Math.sin(phi) * Math.cos(theta) * spread; let vy = Math.cos(phi) * spread + up; let vz = Math.sin(phi) * Math.sin(theta) * spread;
      if (direction) { vx = direction[0] + vx * 0.5; vy = direction[1] + vy * 0.5; vz = direction[2] + vz * 0.5; }
      this.emit({ pos, vel: [vx * v, vy * v, vz * v], color: color.map(c => c * (0.85 + this.random() * 0.3)), alpha, size: size * (0.6 + this.random() * 0.8), life: life * (0.6 + this.random() * 0.7), gravity, drag, growth });
    }
  }

  update(dt) {
    let alive = false;
    for (let i = 0; i < this.capacity; i += 1) {
      if (this.life[i] <= 0) { this.color[i * 4 + 3] = 0; continue; }
      alive = true;
      this.life[i] -= dt;
      const k = Math.max(0, 1 - this.drag[i] * dt);
      const o = i * 3;
      this.vel[o] *= k; this.vel[o + 1] = this.vel[o + 1] * k + this.gravity[i] * dt; this.vel[o + 2] *= k;
      this.position[o] += this.vel[o] * dt; this.position[o + 1] += this.vel[o + 1] * dt; this.position[o + 2] += this.vel[o + 2] * dt;
      const t = Math.max(0, this.life[i] / this.maxLife[i]);
      const c = i * 4;
      this.color[c] = this.base[c]; this.color[c + 1] = this.base[c + 1]; this.color[c + 2] = this.base[c + 2];
      this.color[c + 3] = this.base[c + 3] * Math.min(1, t * 2.2) * Math.min(1, (1 - t) * 14 + 0.15);
      if (this.growth[i]) this.size[i] += this.growth[i] * dt;
    }
    if (alive || this.dirty) {
      const g = this.points.geometry;
      g.attributes.position.needsUpdate = true; g.attributes.aColor.needsUpdate = true; g.attributes.aSize.needsUpdate = true;
    }
    this.dirty = alive;
  }

  setScale(pixelsPerUnitAtOne) { this.material.uniforms.uScale.value = pixelsPerUnitAtOne; }
  dispose() { this.points.geometry.dispose(); this.material.dispose(); }
}

export class Confetti {
  constructor(capacity = 360) {
    this.capacity = capacity; this.cursor = 0;
    const geometry = new THREE.PlaneGeometry(1, 0.55);
    this.material = new THREE.MeshStandardMaterial({ roughness: 0.45, metalness: 0.25, side: THREE.DoubleSide, vertexColors: false });
    this.mesh = new THREE.InstancedMesh(geometry, this.material, capacity);
    this.mesh.frustumCulled = false; this.mesh.castShadow = false;
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.pos = new Float32Array(capacity * 3); this.vel = new Float32Array(capacity * 3);
    this.rot = new Float32Array(capacity * 3); this.spin = new Float32Array(capacity * 3);
    this.life = new Float32Array(capacity); this.size = new Float32Array(capacity); this.phase = new Float32Array(capacity);
    this.dummy = new THREE.Object3D(); this.tint = new THREE.Color();
    this.random = rng(21);
    this.floor = -64;
    const hide = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let i = 0; i < capacity; i += 1) { this.mesh.setMatrixAt(i, hide); this.mesh.setColorAt(i, this.tint.set('#ffffff')); }
    this.density = 1;
  }

  burst({ pos, count = 60, speed = 260, colors = ['#E3A33B', '#2F8478', '#7FA6BD', '#D5472F'], size = 7, life = 3.2, cone = 1, direction = [0, 1, 0] }) {
    const n = Math.round(count * this.density);
    for (let k = 0; k < n; k += 1) {
      const i = this.cursor; this.cursor = (this.cursor + 1) % this.capacity;
      const theta = this.random() * TAU; const r = Math.sqrt(this.random()) * cone;
      const v = speed * (0.4 + this.random() * 0.8);
      this.pos.set(pos, i * 3);
      this.vel[i * 3] = (direction[0] + Math.cos(theta) * r) * v; this.vel[i * 3 + 1] = (direction[1] + (this.random() - 0.3) * 0.4) * v; this.vel[i * 3 + 2] = (direction[2] + Math.sin(theta) * r) * v;
      this.rot[i * 3] = this.random() * TAU; this.rot[i * 3 + 1] = this.random() * TAU; this.rot[i * 3 + 2] = this.random() * TAU;
      this.spin[i * 3] = (this.random() - 0.5) * 16; this.spin[i * 3 + 1] = (this.random() - 0.5) * 16; this.spin[i * 3 + 2] = (this.random() - 0.5) * 12;
      this.life[i] = life * (0.7 + this.random() * 0.6); this.size[i] = size * (0.7 + this.random() * 0.7); this.phase[i] = this.random() * TAU;
      this.mesh.setColorAt(i, this.tint.set(colors[Math.floor(this.random() * colors.length) % colors.length]));
    }
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }

  update(dt, time) {
    let touched = false;
    for (let i = 0; i < this.capacity; i += 1) {
      if (this.life[i] <= 0) { if (this.life[i] > -1) { this.dummy.scale.setScalar(0); this.dummy.updateMatrix(); this.mesh.setMatrixAt(i, this.dummy.matrix); this.life[i] = -2; touched = true; } continue; }
      touched = true;
      this.life[i] -= dt;
      const o = i * 3;
      // heavy drag plus a sideways sway gives the paper-flutter feel
      this.vel[o] *= 1 - 1.6 * dt; this.vel[o + 2] *= 1 - 1.6 * dt;
      this.vel[o + 1] = this.vel[o + 1] * (1 - 0.9 * dt) - 150 * dt;
      this.vel[o + 1] = Math.max(this.vel[o + 1], -110);
      this.pos[o] += (this.vel[o] + Math.sin(time * 3 + this.phase[i]) * 26) * dt;
      this.pos[o + 1] += this.vel[o + 1] * dt;
      this.pos[o + 2] += (this.vel[o + 2] + Math.cos(time * 2.4 + this.phase[i]) * 18) * dt;
      if (this.pos[o + 1] < this.floor) { this.pos[o + 1] = this.floor; this.vel[o + 1] = 0; this.spin[o] *= 0.2; this.spin[o + 1] *= 0.2; this.spin[o + 2] *= 0.2; }
      this.rot[o] += this.spin[o] * dt; this.rot[o + 1] += this.spin[o + 1] * dt; this.rot[o + 2] += this.spin[o + 2] * dt;
      const fade = Math.min(1, this.life[i] * 1.5);
      this.dummy.position.set(this.pos[o], this.pos[o + 1], this.pos[o + 2]);
      this.dummy.rotation.set(this.rot[o], this.rot[o + 1], this.rot[o + 2]);
      this.dummy.scale.setScalar(this.size[i] * fade);
      this.dummy.updateMatrix();
      this.mesh.setMatrixAt(i, this.dummy.matrix);
    }
    if (touched) this.mesh.instanceMatrix.needsUpdate = true;
  }

  dispose() { this.mesh.geometry.dispose(); this.material.dispose(); this.mesh.dispose(); }
}

// Expanding flat rings (landing shockwaves, perfect-drop halos, earthquake ripples).
export class Pulses {
  constructor(capacity = 10) {
    this.items = []; this.group = new THREE.Group();
    const geometry = new THREE.RingGeometry(0.86, 1, 64).rotateX(-Math.PI / 2);
    this.geometry = geometry;
    for (let i = 0; i < capacity; i += 1) {
      const material = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false });
      const mesh = new THREE.Mesh(geometry, material); mesh.visible = false; mesh.renderOrder = 7; this.group.add(mesh);
      this.items.push({ mesh, t: 1, life: 1, radius: 1, from: 0 });
    }
    this.cursor = 0;
  }
  pulse({ pos, color = '#FFD36B', radius = 140, life = 0.7, from = 0.2, strength = 1.6, vertical = false }) {
    const item = this.items[this.cursor]; this.cursor = (this.cursor + 1) % this.items.length;
    item.t = 0; item.life = life; item.radius = radius; item.from = from; item.strength = strength;
    item.mesh.position.set(pos[0], pos[1], pos[2]); item.mesh.rotation.x = vertical ? Math.PI / 2 : 0;
    item.mesh.material.color.set(color).multiplyScalar(strength); item.mesh.visible = true;
  }
  update(dt) {
    for (const item of this.items) {
      if (item.t >= 1) { item.mesh.visible = false; continue; }
      item.t = Math.min(1, item.t + dt / item.life);
      const e = 1 - (1 - item.t) ** 3; const scale = item.radius * (item.from + (1 - item.from) * e);
      item.mesh.scale.set(scale, 1, scale); item.mesh.material.opacity = (1 - item.t) ** 1.6;
    }
  }
  dispose() { this.geometry.dispose(); for (const item of this.items) item.mesh.material.dispose(); }
}
