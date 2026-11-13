// Player avatar totems for the multiplayer lobby: every connected player stands on the plinth as a figure in their own colour
// inside a pulsing beacon ring, with googly eyes that follow the pointer. They drop in when somebody joins, hop and glow when
// somebody is ready, and shrink away when somebody leaves. Same figures as the crowd (audience.js), just bigger and individual.
import * as THREE from 'three';
import { figureGeometry, HEAD } from './audience.js';
import { themedBlockColor } from './palette.js';
import { clamp, damp, easeOutCubic } from './util.js';

const SCALE = 1.9;

// Where the i-th totem stands (plinth space): a fan on both sides of the tower, widening and receding with each pair.
export function totemSlot(i) {
  const side = i % 2 === 0 ? -1 : 1; const rank = Math.floor(i / 2);
  return { x: side * (115 + rank * 55), z: 55 - rank * 52 };
}
export const totemHeight = theme => ({ paper: 76, sunset: 44, primetime: 58 }[theme] || 76) * SCALE;

const easeOutBounce = t => { const n = 7.5625; const d = 2.75; if (t < 1 / d) return n * t * t; if (t < 2 / d) { t -= 1.5 / d; return n * t * t + 0.75; } if (t < 2.5 / d) { t -= 2.25 / d; return n * t * t + 0.9375; } t -= 2.625 / d; return n * t * t + 0.984375; };

export class Totems {
  constructor(theme, palette) {
    this.theme = theme; this.palette = palette; this.group = new THREE.Group(); this.group.visible = false; this.items = new Map();
    this.figure = figureGeometry(theme); this.eye = HEAD[theme] || HEAD.paper;
    this.eyeGeometry = new THREE.SphereGeometry(1, 12, 9); this.pupilGeometry = new THREE.SphereGeometry(1, 10, 7);
    this.ringGeometry = new THREE.RingGeometry(29, 34, 56); this.pulseGeometry = new THREE.RingGeometry(30, 32.5, 56); this.beamGeometry = new THREE.CylinderGeometry(25, 31, 190, 28, 1, true);
    this.eyeMaterial = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.2, emissive: '#ffffff', emissiveIntensity: 0.3, flatShading: theme === 'sunset' });
    this.pupilMaterial = new THREE.MeshStandardMaterial({ color: '#15111c', roughness: 0.3 });
    this.disposables = [];
  }

  bodyMaterial(color) {
    const c = new THREE.Color(color);
    if (this.theme === 'sunset') return new THREE.MeshStandardMaterial({ color: c, roughness: 0.7, flatShading: true, emissive: c, emissiveIntensity: 0.28 });
    if (this.theme === 'primetime') return new THREE.MeshPhysicalMaterial({ color: c, roughness: 0.25, metalness: 0.35, clearcoat: 1, emissive: c, emissiveIntensity: 0.12 });
    return new THREE.MeshPhysicalMaterial({ color: c, roughness: 0.55, clearcoat: 0.6, clearcoatRoughness: 0.35, emissive: c, emissiveIntensity: 0.06 });
  }

  add(id, color, time, index) {
    const tone = themedBlockColor(this.theme, color || '#E3A33B');
    const group = new THREE.Group(); const body = new THREE.Mesh(this.figure, this.bodyMaterial(tone)); body.scale.setScalar(SCALE); body.castShadow = true; group.add(body);
    const eyes = []; const pupils = [];
    for (const side of [-1, 1]) {
      const eye = new THREE.Mesh(this.eyeGeometry, this.eyeMaterial); eye.position.set(side * this.eye.x * SCALE, this.eye.y * SCALE, this.eye.z * SCALE); eye.scale.setScalar(this.eye.r * SCALE); group.add(eye); eyes.push(eye);
      const pupil = new THREE.Mesh(this.pupilGeometry, this.pupilMaterial); pupil.scale.setScalar(this.eye.r * SCALE * 0.52); group.add(pupil); pupils.push(pupil);
    }
    const glow = new THREE.Color(tone).multiplyScalar(1.7);
    const ringMaterial = new THREE.MeshBasicMaterial({ color: glow, transparent: true, opacity: 0.7, side: THREE.DoubleSide, toneMapped: false, depthWrite: false });
    const ring = new THREE.Mesh(this.ringGeometry, ringMaterial); ring.rotation.x = -Math.PI / 2; ring.position.y = 1.2; group.add(ring);
    const pulseMaterial = ringMaterial.clone(); const pulse = new THREE.Mesh(this.pulseGeometry, pulseMaterial); pulse.rotation.x = -Math.PI / 2; pulse.position.y = 1.4; group.add(pulse);
    const beamMaterial = new THREE.MeshBasicMaterial({ color: glow, transparent: true, opacity: 0.12, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, toneMapped: false, depthWrite: false });
    const beam = new THREE.Mesh(this.beamGeometry, beamMaterial); beam.position.y = 95; group.add(beam);
    this.group.add(group);
    const slot = totemSlot(index); const item = { id, color, group, body, eyes, pupils, ring, pulse, beam, ringMaterial, pulseMaterial, beamMaterial, bodyMaterial: body.material, born: time, leaving: -1, ready: false, x: slot.x, z: slot.z, seed: (this.items.size + 1) * 1.93, px: 0, py: 0, vx: 0, vy: 0, glowLevel: 0 };
    this.items.set(id, item); return item;
  }

  remove(item) {
    this.group.remove(item.group); item.bodyMaterial.dispose(); item.ringMaterial.dispose(); item.pulseMaterial.dispose(); item.beamMaterial.dispose(); this.items.delete(item.id);
  }

  // players: [{ id?, name, color, ready }] in join order. look: the pointer in -1..1 screen units, so the eyes follow it.
  sync(players, dt, time, look = { x: 0, y: 0 }, reduced = false) {
    const present = new Set();
    players.slice(0, 6).forEach((player, i) => {
      const id = String(player.id || player.playerId || `${i}:${player.name}`); present.add(id);
      const item = this.items.get(id) || this.add(id, player.color, time, i);
      item.leaving = -1; item.ready = Boolean(player.ready); item.index = i;
    });
    for (const item of [...this.items.values()]) {
      if (!present.has(item.id)) { if (item.leaving < 0) item.leaving = time; if (time - item.leaving > 0.45) { this.remove(item); continue; } }
    }
    const sdt = Math.min(dt, 0.033);
    for (const item of this.items.values()) {
      const slot = totemSlot(item.index || 0); item.x = reduced ? slot.x : damp(item.x, slot.x, 6, dt); item.z = reduced ? slot.z : damp(item.z, slot.z, 6, dt);
      const age = time - item.born; const spawn = reduced ? 1 : clamp(age / 0.95);
      const leave = item.leaving < 0 ? 0 : clamp((time - item.leaving) / 0.45);
      const drop = (1 - easeOutBounce(spawn)) * 260; const grow = (0.35 + 0.65 * easeOutCubic(clamp(spawn * 1.6))) * (1 - leave * leave);
      item.glowLevel = damp(item.glowLevel, item.ready ? 1 : 0, 5, dt);
      const hop = reduced ? 0 : (item.ready ? Math.max(0, Math.sin(time * 5.5 + item.seed)) * 9 : 0);
      const bob = reduced ? 0 : Math.sin(time * 2 + item.seed) * 2.2;
      item.group.position.set(item.x, drop + hop + bob * 0.5, item.z); item.group.scale.setScalar(Math.max(0.001, grow));
      item.group.rotation.y = reduced ? 0 : Math.sin(time * 1.3 + item.seed) * 0.12 + clamp(item.x / 900, -0.3, 0.3) * -1;
      // the beacon: the ring breathes, a second one expands from it and fades, the light column hums
      const breathe = 1 + (reduced ? 0 : 0.07 * Math.sin(time * (3 + item.glowLevel * 2.5) + item.seed));
      item.ring.scale.setScalar(breathe); item.ringMaterial.opacity = (0.5 + 0.2 * item.glowLevel + (reduced ? 0 : 0.15 * Math.sin(time * 3 + item.seed))) * (1 - leave);
      const cycle = reduced ? 0.4 : ((time * (0.55 + 0.35 * item.glowLevel) + item.seed) % 1); item.pulse.scale.setScalar(1 + cycle * 1.15); item.pulseMaterial.opacity = (1 - cycle) * (0.35 + 0.35 * item.glowLevel) * (1 - leave);
      item.beamMaterial.opacity = (0.07 + 0.11 * item.glowLevel + (reduced ? 0 : 0.02 * Math.sin(time * 4 + item.seed))) * (1 - leave); item.beam.scale.y = 0.6 + 0.4 * (item.ready ? 1 : 0.55);
      // googly eyes: loose pupils on springs aimed at the pointer; now and then a blink
      const tx = clamp(look.x * 1.3, -1, 1); const ty = clamp(look.y * 1.1 - 0.15, -1, 1);
      item.vx += ((tx - item.px) * 70 - item.vx * 6) * sdt; item.vy += ((ty - item.py) * 70 - item.vy * 6) * sdt; item.px += item.vx * sdt; item.py += item.vy * sdt;
      const ox = clamp(item.px, -1.2, 1.2) * 0.5; const oy = clamp(item.py, -1.2, 1.2) * 0.5; const oz = Math.sqrt(Math.max(0.12, 1 - ox * ox - oy * oy)) * 0.78;
      const blink = reduced ? 1 : (((time + item.seed * 2.1) % 3.7) < 0.12 ? 0.12 : 1);
      [-1, 1].forEach((side, k) => {
        const r = this.eye.r * SCALE;
        item.eyes[k].scale.set(r, r * blink, r);
        item.pupils[k].position.set(side * this.eye.x * SCALE + ox * r, this.eye.y * SCALE + oy * r * blink, this.eye.z * SCALE + oz * r); item.pupils[k].scale.set(r * 0.52, r * 0.52 * blink, r * 0.52);
      });
    }
  }

  dispose() {
    for (const item of [...this.items.values()]) this.remove(item);
    for (const g of [this.figure, this.eyeGeometry, this.pupilGeometry, this.ringGeometry, this.pulseGeometry, this.beamGeometry]) g.dispose();
    this.eyeMaterial.dispose(); this.pupilMaterial.dispose();
  }
}
