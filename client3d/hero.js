// The ring of the sixteen sabotages that orbits the title. Hover one to read its name, click it to unleash it on the title.
// (The title itself, the stack of bricks that spells SABOTAGE STACK, lives in title-stack.js; what chat does to it, in title-effects.js.)
import * as THREE from 'three';
import { buildIcon, ICON_IDS } from './icons3d.js';
import { damp, smoothstep, TAU } from './util.js';
import { offsetFromPointer } from './hover.js';

// The sixteen sabotages as an orbiting ring of 3D icons, on the plinth round the foot of the title.
export class Arsenal {
  constructor(theme, palette, sabotages) {
    this.theme = theme; this.palette = palette; this.group = new THREE.Group(); this.items = []; this.hover = -1; this.t = 0;
    this.rx = 450; this.rz = 300; this.zc = 40; this.base = 30; this.gone = 0; // the ring's radii (across, towards the viewer), where it is centred and how high its icons stand
    const ids = sabotages && sabotages.length ? sabotages.map(s => s.id) : ICON_IDS;
    ids.forEach((id, i) => {
      const icon = buildIcon(id, theme); const holder = new THREE.Group(); holder.add(icon);
      const proxy = new THREE.Mesh(new THREE.SphereGeometry(46, 8, 6), new THREE.MeshBasicMaterial({ visible: false })); proxy.userData.index = i; holder.add(proxy);
      const sab = sabotages && sabotages.find(s => s.id === id);
      this.group.add(holder); this.items.push({ id, holder, icon, proxy, name: sab ? sab.name : id, angle: (i / ids.length) * TAU, scale: 1.5, spin: 0, lift: 0, seed: i * 1.7 });
    });
    this.proxies = this.items.map(i => i.proxy);
  }
  // view: { yaw, pointer, energy }. yaw is how far the camera has been orbited round the ring (the near-side icons are drawn a
  // little larger, whichever side that is); pointer + energy (see offsetFromPointer / hover.js) make the icons nearest the
  // pointer lean in and swell like a magnet, and the whole ring slows down so the icon you are reaching for stays put.
  update(dt, time, reduced, view = {}) {
    const yaw = view.yaw || 0; const sinY = Math.sin(yaw); const cosY = Math.cos(yaw);
    const pointer = !reduced && view.pointer && view.energy > 0.01 ? view.pointer : null; const energy = view.energy || 0;
    const rx = this.rx; const rz = this.rz; const base = this.base; const off = this.off || (this.off = { dx: 0, dy: 0 });
    this.gone = damp(this.gone, view.away ? 1 : 0, view.away ? 7 : 3.2, dt); this.group.visible = this.gone < 0.995; const vanish = 1 - this.gone; // the ring is swept away when the title blows up
    let strongest = 0;
    this.items.forEach(it => {
      it.mag = 0;
      if (!pointer) return;
      offsetFromPointer(pointer, it.holder.position.x, it.holder.position.y + 24, it.holder.position.z, off);
      it.mag = smoothstep(330, 50, Math.hypot(off.dx, off.dy)) * energy; it.dxs = off.dx; strongest = Math.max(strongest, it.mag);
    });
    this.slow = damp(this.slow === undefined ? 1 : this.slow, 1 - 0.85 * strongest, 7, dt);
    this.t += dt * (reduced ? 0.25 : 1) * this.slow;
    this.items.forEach((it, i) => {
      const a = it.angle + this.t * 0.13; const hovered = this.hover === i;
      it.scale = damp(it.scale, hovered ? 2.3 : 1.5 + it.mag * 0.45, 9, dt); it.lift = damp(it.lift, hovered ? 34 : it.mag * 16, 8, dt);
      it.tilt = damp(it.tilt || 0, hovered ? 0 : -Math.sign(it.dxs || 0) * it.mag * 0.4, 9, dt);
      it.spin += dt * (hovered ? 2.8 : 0.5 + it.mag * 1.2); const x = Math.cos(a) * rx; const z = Math.sin(a) * rz + this.zc;
      it.holder.position.set(x, base + it.lift + (reduced ? 0 : Math.sin(time * 1.3 + it.seed) * 5), z);
      it.holder.scale.setScalar(Math.max(0.0001, it.scale * vanish * (1 + (x * sinY + z * cosY) / 1800)));
      it.icon.rotation.y = it.spin + a * 0.3; it.icon.rotation.x = 0.1; it.icon.rotation.z = it.tilt;
    });
  }
  pick(raycaster) { const hit = raycaster.intersectObjects(this.proxies, false)[0]; return hit ? hit.object.userData.index : -1; }
  dispose() { for (const it of this.items) { it.icon.userData.dispose(); it.proxy.geometry.dispose(); it.proxy.material.dispose(); } }
}
