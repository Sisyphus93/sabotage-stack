// A small CPU-driven particle pool drawn as one Points object: dust, sparks, confetti, speed streaks.
import * as THREE from 'three';

const VERT = `
attribute float aSize;
attribute float aAlpha;
attribute vec3 aColor;
uniform float uScale;
varying float vAlpha;
varying vec3 vColor;
void main() {
  vAlpha = aAlpha; vColor = aColor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = max(1.0, aSize * uScale / max(1.0, -mv.z));
  gl_Position = projectionMatrix * mv;
}`;
const FRAG = `
uniform float uSquare;
varying float vAlpha;
varying vec3 vColor;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float disc = 1.0 - smoothstep(0.55, 1.0, length(p));
  float a = mix(disc, 1.0, uSquare) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor, a);
}`;

export class Particles {
  constructor(max = 900) {
    this.max = max;
    this.count = 0;
    this.items = [];
    this.positions = new Float32Array(max * 3);
    this.colors = new Float32Array(max * 3);
    this.sizes = new Float32Array(max);
    this.alphas = new Float32Array(max);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute('aColor', new THREE.BufferAttribute(this.colors, 3).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(this.sizes, 1).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute('aAlpha', new THREE.BufferAttribute(this.alphas, 1).setUsage(THREE.DynamicDrawUsage));
    this.material = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false,
      uniforms: { uScale: { value: 600 }, uSquare: { value: 0 } }
    });
    this.points = new THREE.Points(geometry, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = 20;
    geometry.setDrawRange(0, 0);
    this.scratch = new THREE.Color();
  }
  setStyle({ additive = false, square = false } = {}) {
    this.material.blending = additive ? THREE.AdditiveBlending : THREE.NormalBlending;
    this.material.uniforms.uSquare.value = square ? 1 : 0;
    this.material.needsUpdate = true;
  }
  setPixelScale(scale) { this.material.uniforms.uScale.value = scale; }
  emit(p) {
    if (this.items.length >= this.max) this.items.shift();
    const c = this.scratch.set(p.color || '#ffffff');
    this.items.push({
      x: p.x, y: p.y, z: p.z, vx: p.vx || 0, vy: p.vy || 0, vz: p.vz || 0,
      life: p.life || 1, age: 0, size: p.size || 6, r: c.r, g: c.g, b: c.b,
      gravity: p.gravity == null ? 300 : p.gravity, drag: p.drag || 0, alpha: p.alpha == null ? 1 : p.alpha,
      grow: p.grow || 0, floor: p.floor == null ? -Infinity : p.floor, flutter: p.flutter || 0, seed: Math.random() * 10
    });
  }
  burst(n, make) { for (let i = 0; i < n; i += 1) this.emit(make(i)); }
  clear() { this.items.length = 0; this.points.geometry.setDrawRange(0, 0); }
  update(dt) {
    const items = this.items;
    let write = 0;
    for (let i = 0; i < items.length; i += 1) {
      const p = items[i];
      p.age += dt;
      if (p.age >= p.life) continue;
      const drag = Math.max(0, 1 - p.drag * dt);
      p.vx *= drag; p.vz *= drag; p.vy = p.vy * drag - p.gravity * dt;
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      if (p.flutter) { p.x += Math.sin(p.age * 9 + p.seed) * p.flutter * dt; p.z += Math.cos(p.age * 7 + p.seed) * p.flutter * dt; }
      if (p.y < p.floor) { p.y = p.floor; p.vy = Math.abs(p.vy) * 0.3; p.vx *= 0.6; p.vz *= 0.6; }
      items[write] = p;
      const fade = 1 - p.age / p.life;
      this.positions[write * 3] = p.x; this.positions[write * 3 + 1] = p.y; this.positions[write * 3 + 2] = p.z;
      this.colors[write * 3] = p.r; this.colors[write * 3 + 1] = p.g; this.colors[write * 3 + 2] = p.b;
      this.sizes[write] = Math.max(0.5, p.size + p.grow * p.age) * (p.flutter ? 0.55 + 0.45 * Math.abs(Math.sin(p.age * 13 + p.seed)) : 1);
      this.alphas[write] = p.alpha * Math.min(1, fade * 2.2);
      write += 1;
    }
    items.length = write;
    const g = this.points.geometry;
    g.setDrawRange(0, write);
    g.attributes.position.needsUpdate = true; g.attributes.aColor.needsUpdate = true;
    g.attributes.aSize.needsUpdate = true; g.attributes.aAlpha.needsUpdate = true;
  }
  dispose() { this.points.geometry.dispose(); this.material.dispose(); }
}
