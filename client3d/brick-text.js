// Lettering built of bricks, for the words and numbers that happen in the play field: a sabotage's name slams in above the tower
// and shatters, the height stands beside the lane as block digits, the final score floats over the results tower. Each text is one
// small instanced mesh made with the same brick wall the title uses (brick-layout.js) and the same brick material (title-stack.js).
import * as THREE from 'three';
import { brickWord } from './brick-layout.js';
import { makeBrickMaterial } from './title-stack.js';
import { themedBlockColor } from './palette.js';
import { clamp, lerp, smoothstep, easeOutCubic, easeOutBack, rng, TAU } from './util.js';

const CYCLE = ['#E3A33B', '#2F8478', '#7FA6BD', '#D5472F'];
const IDENT = new THREE.Quaternion(); const tp = new THREE.Vector3(); const ts = new THREE.Vector3(); const tq = new THREE.Quaternion(); const tv = new THREE.Vector3();
const euler = new THREE.Euler(); const M = new THREE.Matrix4(); const IM = new THREE.Matrix4();
const GRAVITY = 2300;

export class BrickText {
  constructor(theme, palette) {
    this.theme = theme; this.palette = palette; this.group = new THREE.Group(); this.group.name = 'brick-text'; this.items = []; this.random = rng(77); this.faceYaw = 0; this.events = [];
    this.geometry = new THREE.BoxGeometry(1, 1, 1); this.material = makeBrickMaterial(theme, palette, { line: theme === 'sunset' ? 1.1 : 0.9, clip: false });
  }

  // key: a name for this text (showing the same key again replaces what was there); style: 'slam' (drops in huge, stamps, holds for
  // `life` seconds, then shatters) or 'hold' (pops in and stays, bobbing, until hide() / replaced). cap: cap height in world units.
  // colors: bricks take these in turn, letter by letter. baseline: true stands the text on its position instead of centring on it.
  show({ key = null, text, position = [0, 0, 80], cap = 56, colors = CYCLE, style = 'slam', life = 1.8, tilt = 0, rows = 9, baseline = false, shatterOld = true, reduced = false }) {
    const str = String(text);
    if (key) {
      const old = this.items.find(i => i.key === key && i.state !== 'out' && i.state !== 'dead');
      if (old && old.text === str) { old.t = Math.min(old.t, old.style === 'slam' ? 0.4 : 0); old.life = life; old.base = position.slice(); if (old.state === 'out') old.state = 'hold'; return old; }
      if (old) this.release(old, shatterOld && !reduced);
    }
    const word = brickWord(this.palette.fontKey, str, { capHeight: cap, rows: this.theme === 'sunset' ? 0 : rows, xScale: this.theme === 'sunset' ? 1 : 0.9 });
    const bricks = word.bricks; const n = bricks.length; if (!n) return null;
    const mesh = new THREE.InstancedMesh(this.geometry, this.material, n); mesh.frustumCulled = false; mesh.castShadow = false; mesh.receiveShadow = false; mesh.renderOrder = 8;
    const R = this.random; const depth = cap * 0.36; const col = new THREE.Color(); const pieces = [];
    const shift = baseline ? 0 : -cap / 2;
    bricks.forEach((b, i) => {
      col.set(themedBlockColor(this.theme, colors[b.letter % colors.length])); col.offsetHSL(0, this.theme === 'paper' ? 0.05 : 0.1, this.theme === 'paper' ? -0.05 : 0.02); col.multiplyScalar(0.94 + R() * 0.12); mesh.setColorAt(i, col);
      pieces.push({ x: b.x, y: b.y + shift, w: b.w, h: b.h, d: depth, letter: b.letter, row: b.row, delay: b.letter * 0.025 + b.row * 0.012 + R() * 0.05, from: new THREE.Vector3((R() - 0.5) * 150, 90 + R() * 160, 150 + R() * 200), pos: new THREE.Vector3(), vel: new THREE.Vector3(), quat: new THREE.Quaternion(), spin: new THREE.Vector3(), shrink: 1 });
    });
    mesh.instanceColor.needsUpdate = true; this.group.add(mesh);
    const item = { key, text: str, mesh, pieces, t: 0, life, style, base: position.slice(), tilt, state: reduced ? 'hold' : 'in', width: word.width, cap, outT: 0, seed: R() * TAU, reduced, baseline, thump: 0 };
    this.items.push(item); this.compose(item, 0); return item;
  }

  hide(key, shatter = true) { for (const i of this.items) if (i.key === key && i.state !== 'out' && i.state !== 'dead') this.release(i, shatter && !i.reduced); }
  clear() { for (const i of this.items) this.dispose(i); this.items.length = 0; }
  dispose(item) { this.group.remove(item.mesh); item.mesh.dispose(); }

  // the text lets go of itself: every brick flies out from its place and falls (or, quietly, just goes)
  release(item, shatter) {
    if (item.state === 'out' || item.state === 'dead') return;
    item.state = 'out'; item.outT = 0; item.shatter = shatter; const R = this.random;
    for (const p of item.pieces) {
      p.pos.set(p.x, p.y, 0);
      if (shatter) {
        p.vel.set((p.x / Math.max(30, item.width * 0.5)) * (140 + R() * 220) + (R() - 0.5) * 120, 80 + R() * 320, 120 + R() * 360);
        p.spin.set((R() - 0.5) * 18, (R() - 0.5) * 18, (R() - 0.5) * 18);
      } else { p.vel.set(0, 0, 0); p.spin.set(0, 0, 0); }
      p.quat.identity(); p.shrink = 1;
    }
    if (shatter) this.events.push({ type: 'shatter', item });
  }

  // the item's own matrix: where it floats, how it faces, its squash after a slam
  itemMatrix(item, time, out) {
    const wob = item.reduced ? 0 : Math.sin(time * 1.3 + item.seed) * 1.4; const k = item.thump;
    tp.set(item.base[0], item.base[1] + wob + (item.state === 'in' ? 0 : 0), item.base[2]);
    euler.set(0, this.faceYaw + (item.reduced ? 0 : Math.sin(time * 0.9 + item.seed) * 0.08), item.tilt); tq.setFromEuler(euler);
    const sy = 1 - 0.1 * k; const sx = 1 + 0.06 * k; ts.set(sx, sy, 1);
    return out.compose(tp, tq, ts);
  }

  compose(item, time) {
    this.itemMatrix(item, time, IM); const mesh = item.mesh; const pieces = item.pieces;
    for (let i = 0; i < pieces.length; i += 1) {
      const p = pieces[i];
      if (item.state === 'out') {
        ts.set(p.w * p.shrink, p.h * p.shrink, p.d * p.shrink); M.compose(p.pos, p.quat, ts);
      } else {
        let k = 1; let s = 1;
        if (item.state === 'in') { const q = clamp((item.t - p.delay) / 0.3); k = easeOutCubic(q); s = lerp(2.1, 1, easeOutBack(q, 1.3)); if (q <= 0) s = 0.0001; }
        tp.set(p.x + p.from.x * (1 - k), p.y + p.from.y * (1 - k), p.from.z * (1 - k)); ts.set(p.w * s, p.h * s, p.d * s); M.compose(tp, IDENT, ts);
      }
      M.premultiply(IM); mesh.setMatrixAt(i, M);
    }
    mesh.instanceMatrix.needsUpdate = true;
  }

  update(dt, time, { faceYaw = this.faceYaw } = {}) {
    this.faceYaw = faceYaw;
    for (let n = this.items.length - 1; n >= 0; n -= 1) {
      const item = this.items[n]; item.t += dt; item.thump = Math.max(0, item.thump - dt * 5);
      if (item.state === 'in') {
        const done = item.t > 0.3 + 0.025 * 8 + 0.012 * 24 + 0.06;
        if (!item.landed && item.t > 0.24) { item.landed = true; item.thump = 1; this.events.push({ type: 'slam', item }); }
        if (done) item.state = 'hold';
      }
      if (item.state === 'hold' && item.style === 'slam' && item.life > 0 && item.t >= item.life) this.release(item, !item.reduced);
      if (item.state === 'out') {
        item.outT += dt;
        for (const p of item.pieces) {
          if (item.shatter) { // (a quiet release, under Reduced Motion, only shrinks away)
            p.vel.y -= GRAVITY * dt; p.pos.addScaledVector(p.vel, dt);
            const w = p.spin.length(); if (w > 1e-4) { tq.setFromAxisAngle(tv.copy(p.spin).multiplyScalar(1 / w), w * dt); p.quat.premultiply(tq); }
          }
          p.shrink = item.shatter ? 1 - smoothstep(0.8, 1.35, item.outT) : 1 - smoothstep(0, 0.2, item.outT);
        }
        if (item.outT > (item.shatter ? 1.4 : 0.22)) { item.state = 'dead'; }
      }
      if (item.state === 'dead') { this.dispose(item); this.items.splice(n, 1); continue; }
      this.compose(item, time);
    }
  }

  setTheme() { /* the owner rebuilds this object when the theme changes */ }
  destroy() { this.clear(); this.geometry.dispose(); this.material.dispose(); }
}
