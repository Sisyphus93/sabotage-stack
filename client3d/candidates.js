// While chat votes, the three candidates hover over the tower, each a block sculpture of its sabotage's icon on a disc in its ballot
// colour with a name plate, and each grows with its share of the votes. When the vote closes, the winner stays and the others fall away.
import * as THREE from 'three';
import { clamp, damp, lerp, easeOutBack, TAU } from './util.js';
import { dwellSpin } from './icon-voxel.js';

const SLOT = 116; // distance between candidates across the lane

// the share each candidate has of the vote (a floor keeps an empty vote from dividing by nothing)
export function sharesOf(fractions) {
  const f = (fractions || []).slice(0, 3).map(v => Math.max(0, Number(v) || 0)); while (f.length < 3) f.push(0);
  const total = f.reduce((a, b) => a + b, 0); return total > 0.001 ? f.map(v => v / total) : [1 / 3, 1 / 3, 1 / 3];
}
// how big a candidate stands for its share: a third of the vote is a little under life size, all of it nearly twice that
export function candidateScale(share) { return 0.62 + 1.0 * clamp(share, 0, 1); }
// "Chat Bribe: Superglue" -> "Superglue", "The Pisa Tilt" -> "Pisa Tilt": what fits on a plate
export function shortName(name) { let n = String(name || ''); if (n.includes(':')) n = n.split(':').pop(); return n.trim().replace(/^the\s+/i, ''); }

// The plate's size in world units. Sunset is pixelated three screen pixels at a time, which eats small lettering: its plates are bigger,
// bright cream with dark type, so they survive the pixel pass and the sun's bloom.
export const LABEL_SIZE = Object.freeze({ paper: [112, 35], sunset: [128, 40], primetime: [112, 35] });
export const SLOT_BY_THEME = Object.freeze({ paper: 116, sunset: 136, primetime: 116 }); // the plates sit side by side without touching
const labelSize = theme => LABEL_SIZE[theme] || LABEL_SIZE.paper;

// the name's font size: as large as the theme likes, but small enough to fit the plate without being squeezed (squeezed lettering turns
// to mush under the Sunset pixel pass)
export function fitFontSize(measure, text, startPx, maxWidth, minPx = 22) {
  let size = startPx; while (size > minPx && measure(size, text) > maxWidth) size -= 1; return size;
}

function plate(theme, name, percent, color) {
  const canvas = document.createElement('canvas'); canvas.width = 288; canvas.height = 92; const ctx = canvas.getContext('2d');
  const paper = theme === 'paper'; const sunset = theme === 'sunset';
  const face = sunset ? px => `${px}px VT323, monospace` : theme === 'primetime' ? (px, w = 700) => `${w} ${px}px \"Barlow Condensed\", sans-serif` : (px, w = 700) => `${w} ${px}px \"DM Sans\", sans-serif`;
  ctx.fillStyle = paper ? 'rgba(244,237,223,0.94)' : sunset ? '#FFF3E2' : 'rgba(8,12,40,0.92)';
  if (sunset) ctx.fillRect(4, 4, 280, 84); else { ctx.beginPath(); ctx.roundRect(4, 4, 280, 84, 24); ctx.fill(); }
  ctx.strokeStyle = color; ctx.lineWidth = 6; ctx.stroke();
  ctx.textBaseline = 'middle'; ctx.textAlign = 'center';
  const label = String(name).toUpperCase().slice(0, 18);
  ctx.fillStyle = paper ? '#2A2520' : sunset ? '#170B33' : '#ffffff';
  const size = fitFontSize((px, text) => { ctx.font = face(px); return ctx.measureText(text).width; }, label, sunset ? 40 : theme === 'primetime' ? 34 : 29, 258); ctx.font = face(size);
  if (sunset) { ctx.lineJoin = 'round'; ctx.lineWidth = 2.6; ctx.strokeStyle = ctx.fillStyle; ctx.strokeText(label, 144, 33, 262); } // (a thin pixel font, made bolder to survive the pixel pass)
  ctx.fillText(label, 144, 33, 262);
  ctx.fillStyle = sunset ? new THREE.Color(color).multiplyScalar(0.5).getStyle() : color; ctx.font = sunset ? face(42) : face(theme === 'primetime' ? 32 : 27, 800);
  if (sunset) { ctx.lineWidth = 2.6; ctx.strokeStyle = ctx.fillStyle; ctx.strokeText(`${percent}%`, 144, 68, 120); }
  ctx.fillText(`${percent}%`, 144, 68, 120);
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; texture.anisotropy = 4; return { canvas, texture };
}

export class VoteCandidates {
  constructor(theme, palette, colors, { makeIcon, nameOf }) {
    this.theme = theme; this.palette = palette; this.colors = colors; this.makeIcon = makeIcon; this.nameOf = nameOf; this.group = new THREE.Group(); this.group.name = 'vote-candidates';
    this.cards = []; this.open = false; this.winner = ''; this.closeT = 0; this.discGeo = new THREE.CylinderGeometry(30, 34, 7, 32); this.ringGeo = new THREE.RingGeometry(36, 41, 40);
    this.backGeo = new THREE.CircleGeometry(38, 40); this.label = labelSize(theme); this.slot = SLOT_BY_THEME[theme] || SLOT;
  }

  build(options) {
    this.clear();
    options.slice(0, 3).forEach((id, i) => {
      const holder = new THREE.Group(); const body = new THREE.Group(); holder.add(body); const color = this.colors[i];
      const disc = new THREE.Mesh(this.discGeo, new THREE.MeshStandardMaterial({ color, roughness: 0.5, metalness: 0.1, emissive: color, emissiveIntensity: this.theme === 'paper' ? 0.1 : 0.45 })); disc.position.y = -34; disc.castShadow = true; body.add(disc);
      const ring = new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(1.5), transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, toneMapped: false })); ring.rotation.x = -Math.PI / 2; ring.position.y = -29.5; body.add(ring);
      const icon = this.makeIcon(id); icon.scale.setScalar(1.15); body.add(icon);
      // a dark medallion behind the sculpture on the dark worlds: the sun's glare and the glow would otherwise wash a pale sculpture out
      let back = null; if (this.theme !== 'paper') { back = new THREE.Mesh(this.backGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(this.palette.ink), transparent: true, opacity: 0.9, depthWrite: false, fog: false, toneMapped: false })); back.position.z = -16; body.add(back); }
      const p = plate(this.theme, shortName(this.nameOf(id)), 0, color); const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: p.texture, transparent: true, depthWrite: false, fog: false, toneMapped: false })); label.scale.set(...labelSize(this.theme), 1); label.renderOrder = 9; holder.add(label); // the plate keeps a readable size: only the sculpture grows with the vote
      body.scale.setScalar(0.0001); this.group.add(holder);
      this.cards.push({ id, holder, body, disc, ring, icon, back, label, canvas: p.canvas, texture: p.texture, color, shown: '', scale: 0, seed: i * 2.1, fly: 0, share: 1 / 3 });
    });
    this.open = true; this.winner = ''; this.closeT = 0;
  }

  clear() {
    for (const c of this.cards) {
      this.group.remove(c.holder); if (c.icon.userData && c.icon.userData.dispose) c.icon.userData.dispose();
      c.disc.material.dispose(); c.ring.material.dispose(); c.label.material.dispose(); c.texture.dispose(); if (c.back) c.back.material.dispose();
    }
    this.cards.length = 0; this.open = false;
  }

  // state: { options: [ids] | null while no vote is open, fractions: [3], y, you: index | -1, winner: id | '', reduced, faceYaw, away: {x, y, z} (where a winner goes) }
  update(dt, time, { options = null, fractions = null, y = 220, you = -1, winner = '', reduced = false, away = null } = {}) {
    if (options && options.length && !this.open && !this.closing) this.build(options);
    if (options && this.open && options.join() !== this.cards.map(c => c.id).join()) { this.clear(); this.build(options); }
    if (!options && this.open) { this.open = false; this.closing = true; this.closeT = 0; this.winner = winner || this.winner; }
    if (!this.cards.length) { this.closing = false; return; }
    const shares = this.open ? sharesOf(fractions) : this.cards.map(c => c.share);
    if (this.closing) this.closeT += dt;
    this.cards.forEach((c, i) => {
      c.share = this.open ? shares[i] : c.share;
      const isWinner = this.closing && this.winner && c.id === this.winner;
      let goal = this.open ? candidateScale(c.share) : isWinner ? 1.5 : 0;
      if (this.closing && !isWinner) goal = 0;
      c.scale = reduced ? goal : damp(c.scale, goal, this.open ? 6 : 9, dt);
      const slotX = (i - 1) * this.slot; const bob = reduced ? 0 : Math.sin(time * 1.9 + c.seed) * 5;
      let px = slotX; let py = y + bob; let pz = 96;
      if (isWinner && away) { c.fly = Math.min(1, c.fly + dt / 0.55); const k = easeOutBack(c.fly, 1.1); px = lerp(slotX, away.x, k); py = lerp(y, away.y, k) + bob; pz = lerp(96, away.z, k); }
      c.holder.position.set(px, py, pz); c.body.scale.setScalar(Math.max(0.0001, c.scale)); c.holder.visible = c.scale > 0.01;
      c.label.position.set(0, -34 * c.scale - 30 - (this.label[1] - 35) * 0.5, 20); const lk = Math.min(1, c.scale * 1.4); c.label.scale.set(this.label[0] * lk, this.label[1] * lk, 1);
      c.icon.rotation.y = reduced ? 0.4 : dwellSpin(time + c.seed, 0.7 + c.share * 1.2); c.icon.rotation.x = 0.12;
      const leader = this.open && c.share === Math.max(...shares) && c.share > 0.38; const pulse = leader ? 0.55 + 0.35 * Math.sin(time * 6) : 0;
      c.ring.material.opacity = damp(c.ring.material.opacity, you === i ? 0.95 : pulse, 10, dt); c.ring.scale.setScalar(1 + (leader && !reduced ? 0.07 * Math.sin(time * 6) : 0));
      const percent = Math.round(c.share * 100); const key = `${percent}`;
      if (c.shown !== key) { c.shown = key; const p = plate(this.theme, shortName(this.nameOf(c.id)), percent, c.color); const old = c.texture; c.label.material.map = p.texture; c.label.material.needsUpdate = true; c.texture = p.texture; c.canvas = p.canvas; old.dispose(); }
    });
    if (this.closing && this.closeT > 0.7 && !this.cards.some(c => c.id === this.winner)) { this.clear(); this.closing = false; }
    if (this.closing && this.closeT > 1.6) { this.clear(); this.closing = false; }
  }

  // the winner is taken over by the badge beside the tower: it stops being drawn here
  release() { this.clear(); this.closing = false; }
  dispose() { this.clear(); this.discGeo.dispose(); this.ringGeo.dispose(); this.backGeo.dispose(); }
}
