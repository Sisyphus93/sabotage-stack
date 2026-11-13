// Floating 3D lettering: PERFECT!, sabotage names, results numerals, and the height ruler beside the tower.
import * as THREE from 'three';
import { textGeometry } from './text3d.js';
import { easeOutBack, easeOutCubic, clamp, TAU, smoothstep } from './util.js';
import { colorOf } from './world-common.js';

export function letterMaterial(theme, color, glow = 0.55, transparent = true) {
  if (theme === 'sunset') return new THREE.MeshStandardMaterial({ color: colorOf(color), emissive: colorOf(color), emissiveIntensity: 0.9 + glow, roughness: 0.6, flatShading: true, transparent });
  if (theme === 'primetime') return new THREE.MeshPhysicalMaterial({ color: colorOf(color), emissive: colorOf(color), emissiveIntensity: 0.25 + glow * 0.5, roughness: 0.18, metalness: 0.6, clearcoat: 1, transparent });
  return new THREE.MeshPhysicalMaterial({ color: colorOf(color), emissive: colorOf(color), emissiveIntensity: glow * 0.25, roughness: 0.35, metalness: 0.05, clearcoat: 0.8, clearcoatRoughness: 0.25, transparent });
}

export class Popups {
  constructor(theme, palette) { this.group = new THREE.Group(); this.items = []; this.faceYaw = 0; this.setTheme(theme, palette); }
  setTheme(theme, palette) { this.theme = theme; this.palette = palette; this.clear(); }
  clear() { for (const item of this.items) this.dispose(item); this.items.length = 0; }
  dispose(item) { this.group.remove(item.mesh); item.mesh.material.dispose(); }

  // faceYaw: turns every label to face a camera that has been orbited round the scene (home view only; 0 elsewhere)
  // style: 'slam' (drops in huge and stamps), 'rise' (pops and drifts up), 'hold' (pops, stays until hide())
  show({ text, position = [0, 0, 80], size = 34, depth = 10, color = this.palette.amber, glow = 0.6, style = 'slam', life = 1.6, tilt = 0, key = null }) {
    if (key) {
      const old = this.items.find(item => item.key === key);
      // the same words under the same key: bring the label back; different words: it is a new label, built fresh
      if (old && old.text === text) { old.t = Math.min(old.t, old.life * 0.0); old.life = life; old.dying = false; old.base = position.slice(); return old; }
      if (old) { this.dispose(old); this.items.splice(this.items.indexOf(old), 1); }
    }
    const fontKey = this.palette.fontKey;
    const { geometry } = textGeometry(fontKey, text, { size, depth });
    const mesh = new THREE.Mesh(geometry, letterMaterial(this.theme, color, glow));
    mesh.castShadow = false; mesh.position.set(...position); mesh.renderOrder = 9;
    this.group.add(mesh);
    const item = { mesh, text, t: 0, life, style, base: position.slice(), tilt, key, dying: false, seed: Math.random() * TAU };
    this.items.push(item); return item;
  }
  hide(key) { const item = this.items.find(i => i.key === key); if (item) { item.dying = true; item.dieT = 0; } }

  update(dt, time) {
    for (let i = this.items.length - 1; i >= 0; i -= 1) {
      const item = this.items[i]; const m = item.mesh; item.t += dt;
      let k = item.life > 0 ? clamp(item.t / item.life) : 0; let alpha = 1; let scale = 1;
      const pop = easeOutBack(clamp(item.t / 0.38), 1.9);
      if (item.style === 'slam') {
        const s = item.t < 0.22 ? 2.6 - 1.6 * easeOutCubic(item.t / 0.22) : 1;
        scale = s * (item.t < 0.22 ? 1 : 1 + Math.exp(-(item.t - 0.22) * 9) * Math.cos((item.t - 0.22) * 26) * 0.06);
        m.position.set(item.base[0], item.base[1] + (item.t < 0.22 ? (1 - item.t / 0.22) * 46 : 0) + Math.sin(time * 1.3 + item.seed) * 1.4, item.base[2]);
        m.rotation.set(0, this.faceYaw + Math.sin(time * 0.9 + item.seed) * 0.12, item.tilt * (1 + Math.exp(-item.t * 6)));
        alpha = smoothstep(0, 0.1, item.t) * (1 - smoothstep(0.72, 1, k));
        if (item.life <= 0) alpha = 1;
      } else if (item.style === 'rise') {
        scale = pop; m.position.set(item.base[0], item.base[1] + item.t * 30, item.base[2]); m.rotation.set(0, this.faceYaw + Math.sin(time * 2 + item.seed) * 0.18, item.tilt);
        alpha = smoothstep(0, 0.08, item.t) * (1 - smoothstep(0.55, 1, k));
      } else { // hold
        scale = pop; m.position.set(item.base[0], item.base[1] + Math.sin(time * 1.7 + item.seed) * 2.2, item.base[2]); m.rotation.set(0, this.faceYaw + Math.sin(time * 0.8 + item.seed) * 0.16, item.tilt);
        alpha = 1;
      }
      if (item.dying) { item.dieT = (item.dieT || 0) + dt; alpha *= 1 - clamp(item.dieT / 0.35); scale *= 1 - 0.2 * clamp(item.dieT / 0.35); }
      m.scale.setScalar(Math.max(0.0001, scale)); m.material.opacity = clamp(alpha); m.visible = alpha > 0.01;
      if ((item.style !== 'hold' && item.life > 0 && item.t >= item.life) || (item.dying && item.dieT > 0.36)) { this.dispose(item); this.items.splice(i, 1); }
    }
  }
}

// A slender measuring pole with a numeral every five blocks, standing just outside the board edge.
export class Ruler {
  constructor(theme, palette, x = -214) {
    this.group = new THREE.Group(); this.theme = theme; this.palette = palette; this.x = x; this.labels = new Map(); this.max = 0;
    this.material = new THREE.MeshStandardMaterial({ color: colorOf(theme === 'paper' ? palette.ink : palette.cream), roughness: 0.6, emissive: colorOf(theme === 'paper' ? '#000000' : palette.cream), emissiveIntensity: theme === 'paper' ? 0 : 0.35, transparent: true, opacity: 0.8 });
    this.pole = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1, 2.2), this.material); this.pole.castShadow = false; this.group.add(this.pole);
    this.tickGeo = new THREE.BoxGeometry(12, 1.6, 2); this.ticks = []; this.group.position.set(x, 0, 24);
  }
  setHeight(levels) {
    const top = (Math.ceil((levels + 8) / 5) * 5);
    if (top === this.max) return; this.max = top;
    this.pole.scale.y = top * 22; this.pole.position.y = (top * 22) / 2;
    for (let n = 5; n <= top; n += 5) {
      if (this.labels.has(n)) continue;
      const tick = new THREE.Mesh(this.tickGeo, this.material); tick.position.set(6, n * 22, 0); this.group.add(tick); this.ticks.push(tick);
      const { geometry } = textGeometry(this.palette.fontKey, String(n), { size: 15, depth: 3, align: 'right' });
      const label = new THREE.Mesh(geometry, this.material); label.position.set(-5, n * 22 + 0, 0); label.rotation.y = this.facing || 0; label.castShadow = false; this.group.add(label); this.labels.set(n, label);
    }
  }
  setAlpha(a) { this.material.opacity = 0.8 * a; this.group.visible = a > 0.02; }
  // the numerals turn about the pole to face a camera that has been orbited round the scene (yaw 0, the default view, leaves them as they were)
  setFacing(yaw) {
    if (Math.abs(yaw - (this.facing || 0)) < 1e-5) return; this.facing = yaw;
    for (const label of this.labels.values()) label.rotation.y = yaw;
  }
  dispose() { this.pole.geometry.dispose(); this.tickGeo.dispose(); this.material.dispose(); }
}
