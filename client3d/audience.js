// The chat, in person. Hundreds of tiny spectators on floating galleries that wrap vertically so they are always beside the
// camera however high the tower climbs. During a vote they raise colour-coded cards in proportion to the live tally.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { rng, damp, mod, clamp, smoothstep, TAU, hexToRgb01 } from './util.js';
import { BALLOT_COLORS } from './palette.js';

const TIER_H = 104;
const TIERS = 14;
const WRAP = TIER_H * TIERS;

function figureGeometry(theme) {
  const parts = [];
  if (theme === 'sunset') {
    const body = new THREE.BoxGeometry(18, 28, 11); body.translate(0, 14, 0);
    const head = new THREE.BoxGeometry(15, 15, 15); head.translate(0, 36, 0);
    const armL = new THREE.BoxGeometry(5, 20, 6); armL.translate(-12, 18, 0);
    const armR = new THREE.BoxGeometry(5, 20, 6); armR.translate(12, 18, 0);
    parts.push(body, head, armL, armR);
  } else if (theme === 'primetime') {
    const body = new THREE.CapsuleGeometry(10, 22, 4, 10); body.translate(0, 21, 0);
    const head = new THREE.SphereGeometry(10.5, 14, 10); head.translate(0, 47, 0);
    parts.push(body, head);
  } else {
    const profile = [[0, 0], [15, 0], [15.5, 4], [11, 32], [7.5, 43], [0, 44]].map(([x, y]) => new THREE.Vector2(x, y));
    const body = new THREE.LatheGeometry(profile, 14);
    const head = new THREE.SphereGeometry(11, 16, 12); head.translate(0, 55, 0);
    const hat = new THREE.ConeGeometry(8, 13, 12); hat.translate(0, 70, 0);
    parts.push(body, head, hat);
  }
  const merged = mergeGeometries(parts.map(p => p.toNonIndexed ? p.toNonIndexed() : p), false);
  for (const p of parts) p.dispose();
  merged.computeVertexNormals();
  return merged;
}

function shelfGeometry(theme, width, depth) {
  if (theme === 'sunset') return new THREE.BoxGeometry(width, 6, depth);
  if (theme === 'primetime') {
    const slab = new THREE.BoxGeometry(width, 9, depth); const trim = new THREE.BoxGeometry(width + 4, 3, 5); trim.translate(0, 2, depth / 2);
    const merged = mergeGeometries([slab, trim].map(g => g.toNonIndexed())); slab.dispose(); trim.dispose(); return merged;
  }
  // paper: a puffy cloud seat
  const g = new THREE.IcosahedronGeometry(1, 3); g.scale(width / 2, 11, depth / 2 + 6);
  const pos = g.attributes.position; const random = rng(width + depth);
  for (let i = 0; i < pos.count; i += 1) {
    const x = pos.getX(i); const y = pos.getY(i); const z = pos.getZ(i);
    const lump = Math.sin(x * 0.045) * 4 + Math.sin(x * 0.11 + z * 0.07) * 3 + random() * 0.3;
    pos.setXYZ(i, x, y > 0 ? y + lump * 0.5 : y * 0.45, z);
  }
  g.computeVertexNormals();
  return g;
}

export class Crowd {
  constructor(theme, palette, { max = 700, density = 1 } = {}) {
    this.theme = theme; this.palette = palette; this.group = new THREE.Group(); this.centerY = 0; this.excite = 0; this.time = 0;
    // hovering the home scene: the crowd turns to watch the pointer and gets a little more excited (see setAttention)
    this.attention = { x: 0, z: 0, amount: 0, interest: 0 };
    this.ballotColors = BALLOT_COLORS[theme] || BALLOT_COLORS.paper;
    const random = rng(101);
    const slots = [];
    const shelves = [];
    for (let k = 0; k < TIERS; k += 1) {
      for (const side of [-1, 1]) {
        // near galleries hug the stage; far galleries add depth on wide screens. The column behind the tower stays open sky.
        for (const ring of [0, 1]) {
          const cx = side * (ring === 0 ? 450 + (k % 4) * 64 : 980 + (k % 3) * 110) + (random() - 0.5) * 24;
          const cz = ring === 0 ? -70 - (k % 3) * 80 : -520 - (k % 2) * 120;
          const y = k * TIER_H + (ring ? 46 : 0); const sc = ring ? 1.5 : 1;
          shelves.push({ x: cx, y, z: cz, w: 250 * sc, d: 92 * sc });
          for (let row = 0; row < 2; row += 1) for (let i = 0; i < (ring ? 5 : 6); i += 1) {
            slots.push({ x: cx + (i - (ring ? 2 : 2.5)) * 38 * sc + (random() - 0.5) * 8, y: y + 6 * sc, z: cz + (row === 0 ? 16 : -18) * sc + (random() - 0.5) * 6, s: sc });
          }
        }
      }
    }
    // random order so lowering the density removes spectators evenly
    for (let i = slots.length - 1; i > 0; i -= 1) { const j = Math.floor(random() * (i + 1)); [slots[i], slots[j]] = [slots[j], slots[i]]; }
    this.slots = slots.slice(0, max); this.count = this.slots.length; this.max = this.count;
    const n = this.count;
    this.seed = new Float32Array(n); this.speed = new Float32Array(n); this.raise = new Float32Array(n); this.target = new Float32Array(n); this.option = new Int8Array(n).fill(-1);
    this.key = new Float32Array(n); this.lean = new Float32Array(n); this.facing = new Float32Array(n);
    for (let i = 0; i < n; i += 1) { this.seed[i] = random() * TAU; this.speed[i] = 1.2 + random() * 1.6; this.key[i] = random(); this.lean[i] = (random() - 0.5) * 0.12; this.facing[i] = (random() - 0.5) * 0.5; }

    const figMaterial = theme === 'sunset'
      ? new THREE.MeshStandardMaterial({ roughness: 0.8, flatShading: true, emissive: '#ffffff', emissiveIntensity: 0.18 })
      : theme === 'primetime'
        ? new THREE.MeshStandardMaterial({ roughness: 0.6, metalness: 0.1, color: '#0a1233', emissive: '#16308a', emissiveIntensity: 0.25 })
        : new THREE.MeshStandardMaterial({ roughness: 0.78, metalness: 0 });
    this.figures = new THREE.InstancedMesh(figureGeometry(theme), figMaterial, n);
    this.figures.frustumCulled = false; this.figures.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    const tints = theme === 'sunset' ? ['#FFC53D', '#2EC4B6', '#9B5DE5', '#FF5964', '#B983FF', '#FF8FAB']
      : theme === 'primetime' ? ['#1B3CAA', '#16308f', '#2447C9', '#0f1f6b', '#27399a', '#3b2a7a']
        : [palette.amber, palette.teal, palette.blue, palette.vermilion, palette.violet, palette.rose, '#EFE2C4'];
    const c = new THREE.Color();
    for (let i = 0; i < n; i += 1) {
      const base = tints[Math.floor(random() * tints.length) % tints.length];
      c.set(base); if (theme === 'paper') c.lerp(new THREE.Color('#F4EDDF'), 0.18 + random() * 0.18);
      this.figures.setColorAt(i, c);
    }
    this.figures.instanceColor.needsUpdate = true;

    const cardGeometry = new THREE.BoxGeometry(28, 36, 1.8); cardGeometry.translate(0, 18, 0);
    this.cards = new THREE.InstancedMesh(cardGeometry, new THREE.MeshStandardMaterial({ roughness: 0.5, metalness: 0.05, emissive: '#ffffff', emissiveIntensity: theme === 'paper' ? 0.04 : 0.55 }), n);
    this.cards.frustumCulled = false; this.cards.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    for (let i = 0; i < n; i += 1) this.cards.setColorAt(i, c.set('#ffffff'));
    this.cards.instanceColor.needsUpdate = true;

    const shelfGeometries = new Map(); this.shelfMeshes = [];
    for (const s of shelves) { const key = `${s.w}|${s.d}`; if (!shelfGeometries.has(key)) shelfGeometries.set(key, { geometry: shelfGeometry(theme, s.w, s.d), items: [] }); shelfGeometries.get(key).items.push(s); }
    const shelfMaterial = theme === 'sunset'
      ? new THREE.MeshStandardMaterial({ color: '#2b1155', emissive: '#FF4FD8', emissiveIntensity: 0.55, roughness: 0.6 })
      : theme === 'primetime'
        ? new THREE.MeshStandardMaterial({ color: '#0b1b5c', roughness: 0.3, metalness: 0.6, emissive: '#FFC83D', emissiveIntensity: 0.1 })
        : new THREE.MeshStandardMaterial({ color: '#FFF8EA', roughness: 0.95, emissive: '#FFF1D0', emissiveIntensity: 0.12 });
    for (const { geometry, items } of shelfGeometries.values()) {
      const mesh = new THREE.InstancedMesh(geometry, shelfMaterial, items.length); mesh.frustumCulled = false; mesh.receiveShadow = false;
      mesh.userData.items = items; this.shelfMeshes.push(mesh); this.group.add(mesh);
    }
    this.dummy = new THREE.Object3D(); this.dummy.rotation.order = 'YXZ'; // the turn is applied last, so a lean stays a lean in the figure's own frame
    this.group.add(this.figures, this.cards);
    this.density = 1; this.setDensity(density);
    this.ballot = null; this.ballotKey = '';
    this.shelfMaterial = shelfMaterial; this.figMaterial = figMaterial;
  }

  setDensity(d) {
    this.density = d; const n = Math.max(40, Math.round(this.max * d));
    this.figures.count = n; this.cards.count = n; this.visible = n;
  }

  setCenterY(y) { this.centerY = y; }

  // voted: 0..1 share of the crowd that has raised a card; fractions: how that share splits across the 3 options.
  setBallot(ballot) {
    if (!ballot) { if (this.ballot) { this.ballot = null; this.ballotKey = ''; } return; }
    const key = `${ballot.voted.toFixed(2)}|${ballot.fractions.map(f => f.toFixed(2)).join(',')}|${ballot.colors ? ballot.colors.join('') : ''}`;
    if (key === this.ballotKey) return;
    this.ballotKey = key; this.ballot = ballot;
    const colors = ballot.colors || this.ballotColors; const tmp = new THREE.Color();
    const total = ballot.fractions.reduce((a, b) => a + b, 0) || 1;
    for (let i = 0; i < this.count; i += 1) {
      if (this.key[i] < ballot.voted) {
        const pick = this.key[i] / Math.max(0.0001, ballot.voted);
        let acc = 0; let option = 2;
        for (let k = 0; k < 3; k += 1) { acc += ballot.fractions[k] / total; if (pick <= acc) { option = k; break; } }
        this.target[i] = 1;
        if (this.option[i] !== option) { this.option[i] = option; this.cards.setColorAt(i, tmp.set(colors[option])); }
      } else { this.target[i] = 0; }
    }
    this.cards.instanceColor.needsUpdate = true;
  }

  clearBallot() { this.ballot = null; this.ballotKey = ''; for (let i = 0; i < this.count; i += 1) this.target[i] = 0; }

  cheer(power = 1) { this.excite = Math.min(2.5, this.excite + power); }

  // x / z: where the pointer is, in the crowd's own space; amount 0..1: how much they look at it; interest 0..1: a steady buzz
  setAttention(x, z, amount, interest = 0) { const a = this.attention; a.x = x; a.z = z; a.amount = amount; a.interest = interest; }

  update(dt, time) {
    this.time = time; this.excite = damp(this.excite, 0, 1.6, dt);
    const d = this.dummy; const cy = this.centerY; const n = this.visible;
    const att = this.attention; const watch = att.amount > 0.004; const excite = this.excite + att.interest * 0.55;
    for (let i = 0; i < n; i += 1) {
      const slot = this.slots[i];
      this.raise[i] = damp(this.raise[i], this.target[i], 7 + (this.seed[i] % 3), dt);
      const wrapY = cy + mod(slot.y - cy + WRAP / 2, WRAP) - WRAP / 2;
      const bob = Math.sin(time * this.speed[i] + this.seed[i]) * 1.4 * (1 + excite);
      const hop = Math.max(0, Math.sin(time * (7 + this.speed[i]) + this.seed[i] * 3)) * excite * 9;
      // They watch the pointer: turn towards it (limited, so nobody turns their back) and crane that way, the nearer ones most.
      // Turning alone would hardly show on figures that are round, so the lean is what you see.
      let look = 0; let crane = 0; let towards = 0;
      if (watch) {
        const dx = att.x - slot.x; const dz = att.z - slot.z; const bearing = Math.atan2(dx, dz);
        look = clamp(bearing, -0.75, 0.75) * att.amount; crane = att.amount * smoothstep(1900, 420, Math.hypot(dx, dz)); towards = bearing;
      }
      const turn = this.facing[i] * (1 - att.amount * 0.7) + look + Math.sin(time * 0.6 + this.seed[i]) * 0.12;
      const lean = crane * 0.24 * (0.8 + 0.2 * Math.sin(time * 2.1 + this.seed[i]));
      d.position.set(slot.x, wrapY + bob + hop, slot.z);
      d.rotation.set(lean * Math.cos(towards - turn), turn, this.lean[i] + Math.sin(time * 2 * this.speed[i] + this.seed[i]) * 0.03 * (1 + excite) - lean * Math.sin(towards - turn));
      d.scale.set(slot.s, slot.s * (1 + crane * 0.09), slot.s); d.updateMatrix(); this.figures.setMatrixAt(i, d.matrix);
      const r = this.raise[i];
      if (r < 0.01) { d.scale.setScalar(0); }
      else {
        const lift = 44 * slot.s + r * 18 * slot.s;
        d.position.set(slot.x + 12 * slot.s, wrapY + bob + hop + lift, slot.z + 8);
        d.rotation.set(0, this.facing[i] * 0.4, Math.sin(time * 5 + this.seed[i]) * 0.1);
        d.scale.setScalar(slot.s * (0.3 + 0.7 * r));
      }
      d.updateMatrix(); this.cards.setMatrixAt(i, d.matrix);
    }
    this.figures.instanceMatrix.needsUpdate = true; this.cards.instanceMatrix.needsUpdate = true;
    for (const mesh of this.shelfMeshes) {
      const items = mesh.userData.items;
      for (let i = 0; i < items.length; i += 1) {
        const s = items[i]; const wrapY = cy + mod(s.y - cy + WRAP / 2, WRAP) - WRAP / 2;
        d.position.set(s.x, wrapY - 3, s.z); d.rotation.set(0, 0, 0); d.scale.setScalar(1); d.updateMatrix(); mesh.setMatrixAt(i, d.matrix);
      }
      mesh.instanceMatrix.needsUpdate = true;
    }
  }

  dispose() {
    this.figures.geometry.dispose(); this.figMaterial.dispose(); this.cards.geometry.dispose(); this.cards.material.dispose();
    for (const mesh of this.shelfMeshes) mesh.geometry.dispose(); this.shelfMaterial.dispose();
  }
}
