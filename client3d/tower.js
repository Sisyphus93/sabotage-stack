// One tower: placed blocks, the moving block, sabotage cues, falling debris. It is driven purely by diffing the
// plain game state it is handed each frame, so solo, Teamwork, Competitive and the results screen share it.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { DEPTH, BLOCK_H, HALF_W, makeRails, canvasTexture } from './themes.js';

const VISUAL_H = BLOCK_H - 1;
const rand = (min, max) => min + Math.random() * (max - min);
const UNIT_BOX = new THREE.BoxGeometry(1, 1, 1);
const UNIT_EDGES = new THREE.EdgesGeometry(UNIT_BOX);
const STAR_GEOMETRY = (() => {
  const shape = new THREE.Shape();
  for (let i = 0; i < 10; i += 1) {
    const radius = i % 2 ? 2.9 : 6.4; const a = Math.PI / 2 + i * Math.PI / 5;
    if (i === 0) shape.moveTo(Math.cos(a) * radius, Math.sin(a) * radius); else shape.lineTo(Math.cos(a) * radius, Math.sin(a) * radius);
  }
  shape.closePath();
  return new THREE.ShapeGeometry(shape);
})();

function mix(hexA, hexB, amount) { return new THREE.Color(hexA).lerp(new THREE.Color(hexB), amount); }

// Shared, theme-dependent resources (geometry and material caches).
export class Kit {
  constructor(name, theme, colorMap) {
    this.name = name; this.theme = theme; this.colorMap = colorMap || {};
    this.geometries = new Map(); this.materials = new Map(); this.edgeMaterials = new Map(); this.textures = new Map();
    this.starMaterial = new THREE.MeshBasicMaterial({ color: theme.star });
  }
  color(hex) {
    const key = typeof hex === 'string' ? hex.toUpperCase() : '';
    return this.colorMap[key] || (typeof hex === 'string' && hex ? hex : this.theme.cool);
  }
  geometry(width) {
    if (!this.theme.style.rounded) return UNIT_BOX;
    const w = Math.max(1, Math.round(width * 4) / 4);
    let geometry = this.geometries.get(w);
    if (!geometry) {
      const radius = Math.max(0.4, Math.min(this.theme.style.radius, w / 2 - 0.05, VISUAL_H / 2 - 0.05));
      geometry = new RoundedBoxGeometry(w, VISUAL_H, DEPTH, 3, radius);
      if (this.geometries.size > 500) { for (const g of this.geometries.values()) g.dispose(); this.geometries.clear(); }
      this.geometries.set(w, geometry);
    }
    return geometry;
  }
  material(hex) {
    const themed = this.color(hex);
    let material = this.materials.get(themed);
    if (!material) {
      const style = this.theme.style;
      material = new THREE.MeshStandardMaterial({
        color: themed, roughness: style.roughness, metalness: style.metalness, envMapIntensity: style.env,
        emissive: themed, emissiveIntensity: style.emissive
      });
      this.materials.set(themed, material);
    }
    return material;
  }
  edgeMaterial(hex) {
    const themed = this.color(hex);
    let material = this.edgeMaterials.get(themed);
    if (!material) { material = new THREE.LineBasicMaterial({ color: mix(themed, '#FFFFFF', 0.55) }); this.edgeMaterials.set(themed, material); }
    return material;
  }
  crackTexture(kind) {
    let texture = this.textures.get(kind);
    if (!texture) {
      const dark = this.theme.ink;
      texture = kind === 'shell'
        ? canvasTexture(64, 64, c => {
          c.strokeStyle = dark; c.lineWidth = 7; c.lineCap = 'round'; c.lineJoin = 'round';
          c.beginPath(); c.moveTo(36, 8); c.lineTo(26, 24); c.lineTo(40, 36); c.lineTo(28, 56); c.stroke();
          c.strokeStyle = 'rgba(255,255,255,.75)'; c.lineWidth = 2; c.stroke();
        })
        : canvasTexture(256, 64, c => {
          c.strokeStyle = dark; c.lineWidth = 4; c.lineCap = 'round'; c.lineJoin = 'round';
          for (const [fraction, lean] of [[0.24, 1], [0.68, -1]]) {
            const x = 256 * fraction;
            c.beginPath(); c.moveTo(x, 3); c.lineTo(x + lean * 9, 22); c.lineTo(x - lean * 7, 40); c.lineTo(x + lean * 5, 61);
            c.moveTo(x + lean * 9, 22); c.lineTo(x + lean * 24, 32); c.stroke();
          }
        });
      this.textures.set(kind, texture);
    }
    return texture;
  }
  dispose() {
    for (const group of [this.geometries, this.materials, this.edgeMaterials, this.textures]) { for (const item of group.values()) item.dispose(); group.clear(); }
    this.starMaterial.dispose();
  }
}

// A single block. `own` blocks carry private materials so they can fade, glow or be clipped independently.
export class BlockVisual {
  constructor(kit, { width, color, perfect = false, own = false }) {
    this.kit = kit; this.own = own; this.colorHex = color; this.width = width; this.builtWidth = width; this.opacity = 1;
    this.group = new THREE.Group();
    const rounded = kit.theme.style.rounded;
    this.material = own ? kit.material(color).clone() : kit.material(color);
    this.mesh = new THREE.Mesh(kit.geometry(width), this.material);
    this.mesh.castShadow = true; this.mesh.receiveShadow = true;
    if (!rounded) this.mesh.scale.set(width, VISUAL_H, DEPTH);
    this.group.add(this.mesh);
    if (kit.theme.style.edges) {
      this.edgeMaterial = own ? kit.edgeMaterial(color).clone() : kit.edgeMaterial(color);
      this.edges = new THREE.LineSegments(UNIT_EDGES, this.edgeMaterial);
      this.edges.scale.set(width + 0.3, VISUAL_H + 0.3, DEPTH + 0.3);
      this.group.add(this.edges);
    }
    if (perfect && width > 16) {
      this.star = new THREE.Mesh(STAR_GEOMETRY, kit.starMaterial);
      this.star.position.set(0, 0, DEPTH / 2 + 0.5);
      this.group.add(this.star);
    }
  }
  // Dynamic width changes (accordion, wind-up) scale the existing mesh; corner distortion is invisible at these ratios.
  setWidth(width) {
    if (Math.abs(width - this.width) < 0.001) return;
    this.width = width;
    if (this.kit.theme.style.rounded) this.mesh.scale.x = width / this.builtWidth;
    else this.mesh.scale.x = width;
    if (this.edges) this.edges.scale.x = width + 0.3;
  }
  setOpacity(alpha) {
    if (!this.own || Math.abs(alpha - this.opacity) < 0.002) return;
    this.opacity = alpha;
    const transparent = alpha < 0.999;
    for (const material of [this.material, this.edgeMaterial]) {
      if (!material) continue;
      if (material.transparent !== transparent) { material.transparent = transparent; material.needsUpdate = true; }
      material.opacity = alpha;
    }
    this.mesh.castShadow = alpha > 0.6;
    this.group.visible = alpha > 0.01;
  }
  setGlow(hex, intensity) {
    if (!this.own) return;
    if (hex) { this.material.emissive.set(hex); this.material.emissiveIntensity = intensity; }
    else { this.material.emissive.set(this.kit.color(this.colorHex)); this.material.emissiveIntensity = this.kit.theme.style.emissive; }
  }
  setClipping(planes) {
    if (!this.own) return;
    for (const material of [this.material, this.edgeMaterial]) {
      if (!material) continue;
      const next = planes || null;
      if (material.clippingPlanes !== next) { material.clippingPlanes = next; material.needsUpdate = true; }
    }
  }
  dispose() {
    if (this.group.parent) this.group.parent.remove(this.group);
    if (this.own) { this.material.dispose(); if (this.edgeMaterial) this.edgeMaterial.dispose(); }
  }
}

const blockSignature = block => `${block.left}|${block.right}|${block.color}|${block.perfect ? 1 : 0}`;

export class Tower {
  constructor(view) {
    this.view = view;
    this.group = new THREE.Group();
    this.blocks = [];
    this.debris = [];
    this.key = null; this.kit = null;
    this.fallenSeen = 0; this.collapseStarted = false; this.hiddenFrom = Infinity;
    this.mover = null; this.moverKey = ''; this.wrap = null; this.decoy = null; this.decoyKey = '';
    this.cues = {};
    this.rails = null;
    this.rubble = [];
    this.topY = BLOCK_H; this.topCentre = 0; this.spot = null; this.moverCentre = null;
    this.clock = 0; this.emitCarry = 0;
    this.clipPlanes = [new THREE.Plane(new THREE.Vector3(1, 0, 0), HALF_W), new THREE.Plane(new THREE.Vector3(-1, 0, 0), HALF_W)];
  }
  get particles() { return this.view.particles; }
  get theme() { return this.view.theme; }

  reset() {
    for (const block of this.blocks) if (block) block.dispose();
    this.blocks.length = 0;
    for (const piece of this.debris) piece.visual.dispose();
    this.debris.length = 0;
    for (const visual of this.rubble) visual.dispose();
    this.rubble.length = 0;
    for (const name of ['mover', 'wrap', 'decoy']) { if (this[name]) { this[name].dispose(); this[name] = null; } }
    this.moverKey = ''; this.decoyKey = '';
    for (const cue of Object.values(this.cues)) { this.group.remove(cue); cue.traverse(node => { if (node.geometry && node.geometry !== UNIT_BOX) node.geometry.dispose(); if (node.material) node.material.dispose(); }); }
    this.cues = {};
    if (this.rails) { this.group.remove(this.rails.group); this.rails.group.traverse(node => { if (node.geometry) node.geometry.dispose(); if (node.material) { if (node.material.map) node.material.map.dispose(); node.material.dispose(); } }); }
    this.rails = makeRails(this.view.themeName);
    this.group.add(this.rails.group);
    this.kit = this.view.kit;
    this.collapseStarted = false; this.hiddenFrom = Infinity; this.fresh = true;
  }
  dispose() {
    this.key = null;
    this.reset();
    if (this.rails) this.group.remove(this.rails.group);
    if (this.group.parent) this.group.parent.remove(this.group);
  }

  blockY(level) { return level * BLOCK_H + BLOCK_H / 2; }

  sync(model, dt) {
    const view = this.view;
    const reduced = view.reduced;
    if (model.key !== this.key || this.kit !== view.kit) {
      this.key = model.key;
      this.reset();
      this.fallenSeen = Array.isArray(model.fallen) ? model.fallen.length : 0;
      if (model.collapsed) { this.collapseStarted = true; this.hiddenFrom = model.collapseStartLevel == null ? Math.max(0, model.stack.length - 6) : model.collapseStartLevel; }
    }
    this.clock += dt;
    const stack = model.stack || [];
    this.rails.group.visible = model.rails !== false;

    // --- placed blocks
    let landed = null;
    for (let i = 0; i < stack.length; i += 1) {
      const block = stack[i];
      const signature = blockSignature(block);
      let visual = this.blocks[i];
      if (!visual || visual.signature !== signature) {
        const isNew = !visual;
        if (visual) visual.dispose();
        const width = Math.max(1, block.right - block.left);
        visual = new BlockVisual(this.kit, { width, color: block.color, perfect: Boolean(block.perfect) });
        visual.signature = signature; visual.pop = -1; visual.level = i;
        visual.group.position.set((block.left + block.right) / 2 - HALF_W, this.blockY(i), 0);
        this.group.add(visual.group);
        this.blocks[i] = visual;
        if (isNew && !this.fresh && i === stack.length - 1 && i > 0) landed = { visual, block };
      }
      visual.group.visible = i < this.hiddenFrom || !this.collapseStarted ? true : visual.pendingFall === true;
    }
    while (this.blocks.length > stack.length) { const extra = this.blocks.pop(); if (extra) extra.dispose(); }
    const top = stack[stack.length - 1] || { left: 80, right: 280, level: 0 };
    this.topY = stack.length * BLOCK_H;
    this.topCentre = (top.left + top.right) / 2 - HALF_W;
    if (landed && model.animateLanding !== false) this.onLanded(landed.visual, landed.block, reduced);

    // --- trimmed and missed pieces
    const fallen = Array.isArray(model.fallen) ? model.fallen : [];
    if (fallen.length > this.fallenSeen && !this.fresh && !reduced) {
      for (let i = this.fallenSeen; i < fallen.length; i += 1) this.spawnTrim(fallen[i], top);
    }
    this.fallenSeen = fallen.length;

    // --- collapse
    if (model.collapsed && !this.collapseStarted) this.startCollapse(model, reduced);
    else if (!model.collapsed && this.collapseStarted) { this.collapseStarted = false; this.hiddenFrom = Infinity; for (const b of this.blocks) if (b) { b.group.visible = true; b.pendingFall = false; } }

    this.syncMover(model, dt, top, reduced);
    this.syncCues(model, top, reduced);
    this.updateBlocks(dt);
    this.updateDebris(dt, view.cameraFloor);
    this.rails.update(view.railY == null ? this.topY : view.railY, view.time);
    this.fresh = false;
  }

  onLanded(visual, block, reduced) {
    const view = this.view;
    const theme = this.theme;
    const x0 = block.left - HALF_W; const x1 = block.right - HALF_W;
    const y = visual.group.position.y - VISUAL_H / 2;
    view.onLand(this, Boolean(block.perfect));
    if (reduced) return;
    visual.pop = 0;
    const offsetX = this.group.position.x;
    this.particles.burst(16, i => {
      const side = i % 2 ? 1 : -1;
      const front = i % 4 < 2;
      return {
        x: offsetX + (front ? rand(x0, x1) : side > 0 ? x1 : x0), y: y + rand(0, 3), z: front ? DEPTH / 2 : rand(-DEPTH / 2, DEPTH / 2),
        vx: front ? rand(-20, 20) : side * rand(30, 95), vy: rand(8, 46), vz: front ? rand(30, 90) : rand(-30, 30),
        life: rand(0.35, 0.7), size: rand(5, 9), grow: 9, gravity: 40, drag: 2.4, color: theme.dust, alpha: 0.7
      };
    });
    if (block.perfect) {
      const cx = (x0 + x1) / 2; const halfW = (x1 - x0) / 2;
      this.particles.burst(34, i => {
        const a = i / 34 * Math.PI * 2;
        return {
          x: offsetX + cx + Math.cos(a) * halfW, y: y + VISUAL_H / 2, z: Math.sin(a) * DEPTH / 2,
          vx: Math.cos(a) * rand(60, 150), vy: rand(60, 210), vz: Math.sin(a) * rand(60, 150),
          life: rand(0.6, 1.25), size: rand(6, 11), gravity: 260, drag: 0.8, color: i % 3 === 0 ? '#FFFFFF' : i % 3 === 1 ? theme.spark : this.kit.color(block.color), flutter: 26
        };
      });
      this.pulseRing(cx, y + VISUAL_H / 2, Math.max(60, halfW + 30));
    }
  }
  pulseRing(x, y, radius) {
    let ring = this.cues.ring;
    if (!ring) {
      ring = new THREE.Mesh(new THREE.RingGeometry(0.86, 1, 64), new THREE.MeshBasicMaterial({ color: this.theme.spark, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }));
      ring.rotation.x = -Math.PI / 2; ring.renderOrder = 15;
      this.cues.ring = ring; this.group.add(ring);
    }
    ring.position.set(x, y, 0); ring.userData = { age: 0, radius }; ring.visible = true;
  }

  spawnTrim(piece, top) {
    if (!piece || !(piece.right > piece.left)) return;
    const width = piece.right - piece.left;
    const level = Number.isInteger(piece.level) ? piece.level : this.blocks.length;
    const centre = (piece.left + piece.right) / 2;
    const towerCentre = (top.left + top.right) / 2;
    const side = centre === towerCentre ? (Math.random() < 0.5 ? -1 : 1) : centre < towerCentre ? -1 : 1;
    const miss = piece.kind === 'miss';
    this.addDebris({
      width, color: piece.color || '#2F8478', x: centre - HALF_W, y: this.blockY(level), z: 0,
      vx: side * rand(40, 120), vy: miss ? rand(30, 70) : rand(-10, 60), vz: rand(-20, 70),
      spin: new THREE.Vector3(rand(-1.5, 1.5), rand(-1, 1), -side * rand(1.6, 4.6)), delay: 0
    });
  }
  addDebris(spec) {
    const visual = new BlockVisual(this.kit, { width: spec.width, color: spec.color, own: true });
    visual.group.position.set(spec.x, spec.y, spec.z);
    visual.group.visible = !(spec.delay > 0);
    this.group.add(visual.group);
    this.debris.push({ visual, vx: spec.vx, vy: spec.vy, vz: spec.vz, spin: spec.spin, delay: spec.delay || 0, age: 0, halfW: spec.width / 2, source: spec.source || null, bounces: 0 });
    while (this.debris.length > 36) this.debris.shift().visual.dispose();
  }
  startCollapse(model, reduced) {
    this.collapseStarted = true;
    const stack = model.stack || [];
    const start = model.collapseStartLevel == null ? Math.max(0, stack.length - 6) : Math.max(0, model.collapseStartLevel);
    this.hiddenFrom = start;
    this.view.onCollapse(this);
    for (let level = stack.length - 1, index = 0; level >= start; level -= 1, index += 1) {
      const block = stack[level]; const visual = this.blocks[level];
      if (!block || !visual) continue;
      if (reduced) { visual.group.visible = false; continue; }
      visual.pendingFall = true; visual.group.visible = true;
      const centre = (block.left + block.right) / 2;
      const side = centre < HALF_W ? -1 : 1;
      this.addDebris({
        width: Math.max(1, block.right - block.left), color: block.color || '#2F8478', x: centre - HALF_W, y: this.blockY(level), z: 0,
        vx: side * rand(30, 150) * (index % 2 ? 1 : -0.6), vy: rand(20, 190), vz: rand(-60, 130),
        spin: new THREE.Vector3(rand(-3, 3), rand(-2, 2), rand(-4, 4)), delay: index * 0.07, source: visual
      });
    }
  }
  updateDebris(dt, floorLimit) {
    if (!this.debris.length) return;
    const keep = [];
    for (const piece of this.debris) {
      if (piece.delay > 0) {
        piece.delay -= dt;
        if (piece.delay > 0) { keep.push(piece); continue; }
        piece.visual.group.visible = true;
        if (piece.source) { piece.source.group.visible = false; piece.source.pendingFall = false; }
        const p = piece.visual.group.position; const ox = this.group.position.x;
        this.particles.burst(6, () => ({ x: ox + p.x + rand(-piece.halfW, piece.halfW), y: p.y, z: rand(-40, 40), vx: rand(-60, 60), vy: rand(10, 80), vz: rand(-40, 60), life: 0.6, size: 8, grow: 12, gravity: 60, drag: 2, color: this.theme.dust, alpha: 0.7 }));
      }
      piece.age += dt;
      piece.vy -= 760 * dt;
      const g = piece.visual.group;
      g.position.x += piece.vx * dt; g.position.y += piece.vy * dt; g.position.z += piece.vz * dt;
      g.rotation.x += piece.spin.x * dt; g.rotation.y += piece.spin.y * dt; g.rotation.z += piece.spin.z * dt;
      const rest = VISUAL_H / 2 + Math.abs(Math.sin(g.rotation.z)) * Math.min(piece.halfW, 40) * 0.6;
      if (g.position.y < rest && piece.vy < 0) {
        g.position.y = rest;
        const impact = -piece.vy;
        piece.vy = impact > 90 ? impact * 0.32 : 0;
        piece.vx *= 0.62; piece.vz *= 0.62; piece.spin.multiplyScalar(0.45); piece.bounces += 1;
        if (impact > 140 && piece.bounces < 3) {
          const ox = this.group.position.x;
          this.particles.burst(5, () => ({ x: ox + g.position.x + rand(-piece.halfW, piece.halfW), y: 2, z: g.position.z + rand(-30, 30), vx: rand(-70, 70), vy: rand(10, 60), vz: rand(-50, 50), life: 0.55, size: 7, grow: 12, gravity: 30, drag: 2.5, color: this.theme.dust, alpha: 0.65 }));
        }
        if (piece.vy === 0) { piece.spin.multiplyScalar(0.2); g.rotation.z += (Math.round(g.rotation.z / Math.PI) * Math.PI - g.rotation.z) * 0.5; g.rotation.x *= 0.5; }
      }
      const fade = piece.age > 3.4 ? 1 - (piece.age - 3.4) / 0.8 : 1;
      piece.visual.setOpacity(Math.max(0, fade));
      if (piece.age > 4.2 || g.position.y < floorLimit - 400) { piece.visual.dispose(); continue; }
      keep.push(piece);
    }
    this.debris = keep;
  }
  updateBlocks(dt) {
    for (const visual of this.blocks) {
      if (!visual || visual.pop < 0) continue;
      visual.pop += dt;
      const t = visual.pop;
      if (t > 0.45) { visual.pop = -1; visual.group.scale.set(1, 1, 1); visual.group.position.y = this.blockY(visual.level); continue; }
      const squash = 1 - 0.2 * Math.exp(-t * 11) * Math.cos(t * 30);
      visual.group.scale.set(1 + (1 - squash) * 0.35, squash, 1 + (1 - squash) * 0.35);
      visual.group.position.y = this.blockY(visual.level) - (1 - squash) * VISUAL_H / 2;
    }
    const ring = this.cues.ring;
    if (ring && ring.visible) {
      ring.userData.age += dt;
      const k = ring.userData.age / 0.6;
      if (k >= 1) ring.visible = false;
      else { const s = ring.userData.radius * (0.7 + k * 1.7); ring.scale.set(s, s, s); ring.material.opacity = 0.85 * (1 - k); }
    }
  }

  ensureMover(name, keyName, key, width, color) {
    if (this[name] && this[keyName] === key) return this[name];
    if (this[name]) this[name].dispose();
    this[name] = new BlockVisual(this.kit, { width, color, own: true });
    this[keyName] = key;
    this.group.add(this[name].group);
    return this[name];
  }
  syncMover(model, dt, top, reduced) {
    const Core = this.view.core;
    const moving = model.moving;
    const effect = model.effect || null;
    const id = effect ? effect.id : '';
    const elapsed = Number(effect && effect.elapsed) || 0;
    this.moverCentre = null;
    if (!moving || !model.playing) {
      if (this.mover) this.mover.group.visible = false;
      if (this.wrap) this.wrap.group.visible = false;
      if (this.decoy) this.decoy.group.visible = false;
      return;
    }
    const level = Number.isInteger(moving.level) ? moving.level : this.blocks.length;
    const baseWidth = Math.max(1, Number(moving.width) || 1);
    const key = `${level}|${moving.color}`;
    let mover = this.mover;
    if (!mover || this.moverKey !== key || baseWidth > mover.builtWidth * 1.001) {
      mover = this.ensureMover('mover', 'moverKey', `${key}|${Math.random()}`, baseWidth, moving.color);
      this.moverKey = key;
    }
    const windup = id === 'slowmo' ? Core.slowToDartWindup(elapsed) : 0;
    const width = baseWidth * (1 - 0.08 * windup);
    const centre = moving.left + baseWidth / 2 - HALF_W;
    const lift = id === 'rollercoaster' && !reduced ? -Core.rollercoasterOffset(elapsed, Number(moving.rollerPhase) || 0) : 0;
    const y = this.blockY(level) + lift;
    const alpha = reduced || id !== 'peekaboo' ? 1 : Core.peekabooOpacity(elapsed);
    mover.setWidth(width);
    mover.group.position.set(centre, y, 0);
    mover.group.scale.set(1, 1 + 0.12 * windup, 1);
    mover.group.rotation.set(0, 0, 0);
    if (id === 'drunk' && !reduced) mover.group.rotation.x = Math.sin(this.clock * 5.2) * 0.16;
    if (id === 'rollercoaster' && !reduced) mover.group.rotation.x = Math.cos((elapsed / 1.2 + (Number(moving.rollerPhase) || 0)) * Math.PI * 2) * 0.12;
    mover.setOpacity(alpha);
    mover.setGlow(id === 'superglue' ? this.theme.glow : null, 0.55);
    const portal = id === 'portal';
    if (portal) {
      this.clipPlanes[0].constant = HALF_W - this.group.position.x;
      this.clipPlanes[1].constant = HALF_W + this.group.position.x;
    }
    mover.setClipping(portal ? this.clipPlanes : null);
    this.moverCentre = { x: centre, y, width, direction: Number(moving.direction) < 0 ? -1 : 1, alpha };

    // Portal Walls: the part that has left through one wall re-enters through the other.
    const overflow = portal && moving.left + baseWidth > HALF_W * 2;
    if (overflow) {
      const wrap = this.ensureMover('wrap', 'wrapKey', `${this.moverKey}|${Math.round(mover.builtWidth * 4)}`, mover.builtWidth, moving.color);
      wrap.setWidth(width); wrap.group.position.set(centre - HALF_W * 2, y, 0); wrap.setOpacity(alpha); wrap.setClipping(this.clipPlanes);
      wrap.group.visible = alpha > 0.01;
    } else if (this.wrap) this.wrap.group.visible = false;

    // The Shell Game: a decoy travelling the other way; the real block carries the crack.
    if (id === 'double' && moving.decoy) {
      const decoyWidth = Math.max(1, Number(moving.decoy.width) || baseWidth);
      const decoyKey = `${level}|${moving.decoy.color || moving.color}`;
      let decoy = this.decoy;
      if (!decoy || this.decoyBase !== decoyKey || decoyWidth > decoy.builtWidth * 1.001) {
        decoy = this.ensureMover('decoy', 'decoyKey', `${decoyKey}|${Math.random()}`, decoyWidth, moving.decoy.color || moving.color);
        this.decoyBase = decoyKey;
      }
      decoy.setWidth(decoyWidth);
      decoy.group.position.set(moving.decoy.left + decoyWidth / 2 - HALF_W, y, 0);
      decoy.setOpacity(alpha);
    } else if (this.decoy) this.decoy.group.visible = false;

    // Kinetic sabotages leave a trail so the effect is readable without a HUD glance.
    if (!reduced && dt > 0 && alpha > 0.5 && (id === 'turbo' || id === 'drunk' || (id === 'slowmo' && windup > 0.2))) {
      this.emitCarry += dt * (id === 'turbo' ? 70 : id === 'drunk' ? 14 : 50);
      const direction = Number(moving.direction) < 0 ? -1 : 1;
      const ox = this.group.position.x;
      while (this.emitCarry >= 1) {
        this.emitCarry -= 1;
        if (id === 'drunk') {
          this.particles.emit({ x: ox + centre + rand(-width / 2, width / 2), y: y + VISUAL_H / 2, z: rand(-DEPTH / 2, DEPTH / 2), vx: rand(-10, 10), vy: rand(25, 60), vz: rand(-10, 10), life: rand(0.6, 1.1), size: rand(5, 10), gravity: -20, drag: 0.6, color: this.theme.cool, alpha: 0.8, flutter: 30 });
        } else {
          this.particles.emit({ x: ox + centre - direction * width / 2, y: y + rand(-VISUAL_H / 2, VISUAL_H / 2), z: rand(-DEPTH / 2, DEPTH / 2), vx: -direction * rand(40, 160), vy: rand(-8, 8), vz: 0, life: rand(0.18, 0.42), size: rand(4, 9), gravity: 0, drag: 1.5, color: Math.random() < 0.5 ? this.theme.glow : this.theme.accent, alpha: 0.9 });
        }
      }
    }
  }

  cue(name, build) {
    let node = this.cues[name];
    if (!node) { node = build(); this.cues[name] = node; this.group.add(node); }
    node.visible = true;
    return node;
  }
  syncCues(model, top, reduced) {
    const Core = this.view.core;
    const theme = this.theme;
    const effect = model.effect || null;
    const id = effect ? effect.id : '';
    const elapsed = Number(effect && effect.elapsed) || 0;
    const moving = model.playing ? model.moving : null;
    const level = this.blocks.length - 1;
    const topCentreY = this.blockY(Math.max(0, level));
    const topSurface = topCentreY + VISUAL_H / 2;
    const topWidth = Math.max(1, top.right - top.left);
    const cx = this.topCentre;
    for (const [name, node] of Object.entries(this.cues)) if (name !== 'ring') node.visible = false;
    this.spot = null;
    if (this.collapseStarted) return;

    if (moving) {
      const tick = this.cue('tick', () => {
        const g = new THREE.Group();
        const dark = new THREE.MeshBasicMaterial({ color: '#141414' }); const light = new THREE.MeshBasicMaterial({ color: '#F2F2F2' });
        const add = (w, h, d, x, y, z, material) => { const m = new THREE.Mesh(UNIT_BOX, material); m.scale.set(w, h, d); m.position.set(x, y, z); g.add(m); };
        add(3.2, 8, 0.5, 0, -4.5, DEPTH / 2 + 0.3, dark); add(1.2, 8, 0.6, 0, -4.5, DEPTH / 2 + 0.5, light);
        add(3.2, 0.3, DEPTH, 0, 0.1, 0, dark); add(1.2, 0.4, DEPTH, 0, 0.2, 0, light);
        return g;
      });
      tick.position.set(cx, topSurface, 0);
    }
    if (id === 'superglue') {
      const glue = this.cue('glue', () => {
        const g = new THREE.Group();
        const material = new THREE.MeshStandardMaterial({ color: theme.glow, emissive: theme.glow, emissiveIntensity: 0.7, roughness: 0.2, transparent: true, opacity: 0.9 });
        const slab = new THREE.Mesh(UNIT_BOX, material); slab.name = 'slab'; g.add(slab);
        const blob = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 10), material); blob.name = 'blob'; g.add(blob);
        return g;
      });
      glue.position.set(cx, topSurface, 0);
      glue.getObjectByName('slab').scale.set(Math.max(4, topWidth - 6), 1.6, DEPTH - 8);
      glue.getObjectByName('slab').position.y = 0.8;
      const wobble = reduced ? 1 : 1 + Math.sin(this.clock * 4) * 0.12;
      glue.getObjectByName('blob').scale.set(Math.min(9, topWidth * 0.12) * wobble, 3.4 / wobble, 12 * wobble);
      glue.getObjectByName('blob').position.y = 1.6;
    }
    if (id === 'crumble') {
      const cracks = this.cue('crumble', () => {
        const g = new THREE.Group();
        const material = new THREE.MeshBasicMaterial({ map: this.kit.crackTexture('crumble'), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
        const front = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material); front.name = 'front'; g.add(front);
        const lid = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material); lid.name = 'lid'; lid.rotation.x = -Math.PI / 2; g.add(lid);
        return g;
      });
      cracks.position.set(cx, topCentreY, 0);
      const front = cracks.getObjectByName('front'); front.scale.set(topWidth, VISUAL_H, 1); front.position.z = DEPTH / 2 + 0.4;
      const lid = cracks.getObjectByName('lid'); lid.scale.set(topWidth, DEPTH, 1); lid.position.y = VISUAL_H / 2 + 0.3;
      if (!reduced && Math.random() < 0.12) {
        const side = Math.random() < 0.5 ? -1 : 1;
        this.particles.emit({ x: this.group.position.x + cx + side * topWidth / 2, y: topCentreY + rand(-8, 8), z: rand(-DEPTH / 2, DEPTH / 2), vx: side * rand(5, 30), vy: rand(0, 20), vz: rand(-10, 10), life: 0.8, size: rand(3, 6), gravity: 420, color: this.kit.color(top.color), alpha: 0.95 });
      }
    }
    if (id === 'calipers' && moving) {
      const bounds = Core.caliperBounds(top, moving);
      const gate = this.cue('calipers', () => {
        const g = new THREE.Group();
        const material = new THREE.MeshStandardMaterial({ color: theme.glow, emissive: theme.glow, emissiveIntensity: 0.35, roughness: 0.35, metalness: 0.7 });
        for (const side of ['L', 'R']) {
          const arm = new THREE.Group(); arm.name = side;
          const add = (w, h, d, x, y, z) => { const m = new THREE.Mesh(UNIT_BOX, material); m.scale.set(w, h, d); m.position.set(x, y, z); m.castShadow = true; arm.add(m); };
          const inward = side === 'L' ? 1 : -1;
          const height = BLOCK_H * 2 + 18;
          add(2.6, height, 2.6, 0, height / 2 - BLOCK_H - 5, DEPTH / 2 + 3);
          add(2.6, height, 2.6, 0, height / 2 - BLOCK_H - 5, -DEPTH / 2 - 3);
          add(2.6, 2.6, DEPTH + 8.6, 0, height - BLOCK_H - 5, 0);
          add(8, 2.2, 2.6, inward * 4, BLOCK_H, DEPTH / 2 + 3);
          add(8, 2.2, 2.6, inward * 4, -BLOCK_H, DEPTH / 2 + 3);
          g.add(arm);
        }
        return g;
      });
      gate.position.set(0, topSurface, 0);
      gate.getObjectByName('L').position.x = bounds.minLeft - HALF_W - 1.3;
      gate.getObjectByName('R').position.x = bounds.maxLeft + moving.width - HALF_W + 1.3;
    }
    if (id === 'magnet' && moving && this.moverCentre) {
      const well = this.cue('magnet', () => {
        const g = new THREE.Group();
        const material = new THREE.LineDashedMaterial({ color: theme.cool, dashSize: 5, gapSize: 5, transparent: true, opacity: 0.9 });
        for (let i = 0; i < 3; i += 1) {
          const line = new THREE.Line(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(17 * 3), 3)), material);
          line.name = `arc${i}`; line.frustumCulled = false; g.add(line);
        }
        const beam = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 1, 12, 1, true), new THREE.MeshBasicMaterial({ color: theme.cool, transparent: true, opacity: 0.55, depthWrite: false }));
        beam.name = 'beam'; g.add(beam);
        const halo = new THREE.Mesh(new THREE.RingGeometry(0.8, 1, 48), new THREE.MeshBasicMaterial({ color: theme.cool, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false }));
        halo.name = 'halo'; halo.rotation.x = -Math.PI / 2; g.add(halo);
        return g;
      });
      const m = this.moverCentre;
      const startY = m.y + VISUAL_H / 2 + 2; const peak = startY + 46;
      for (let i = 0; i < 3; i += 1) {
        const line = well.getObjectByName(`arc${i}`);
        const z = (i - 1) * DEPTH * 0.34;
        const positions = line.geometry.attributes.position;
        for (let s = 0; s <= 16; s += 1) {
          const k = s / 16;
          const x = m.x + (cx - m.x) * k;
          const yy = (1 - k) * (1 - k) * startY + 2 * k * (1 - k) * (peak + i * 8) + k * k * (startY + 26);
          positions.setXYZ(s, x, yy, z);
        }
        positions.needsUpdate = true; line.computeLineDistances();
      }
      const beam = well.getObjectByName('beam'); beam.scale.set(1, 120, 1); beam.position.set(cx, topSurface + BLOCK_H + 60, 0);
      const pulse = reduced ? 1 : 1 + 0.25 * Math.sin(this.clock * 6);
      const halo = well.getObjectByName('halo'); halo.position.set(cx, startY + 26, 0); halo.scale.setScalar(26 * pulse);
    }
    if (id === 'portal') {
      const direction = Number(effect.windDirection) < 0 ? -1 : 1;
      const gates = this.cue('portal', () => {
        const g = new THREE.Group();
        const material = new THREE.ShaderMaterial({
          transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: theme.particles.additive ? THREE.AdditiveBlending : THREE.NormalBlending,
          uniforms: { uTime: { value: 0 }, uGain: { value: theme.particles.additive ? 1 : 1.8 }, uA: { value: new THREE.Color(theme.cool) }, uB: { value: new THREE.Color(theme.glow) } },
          vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
          fragmentShader: `
            varying vec2 vUv; uniform float uTime; uniform float uGain; uniform vec3 uA; uniform vec3 uB;
            void main() {
              vec2 p = (vUv - 0.5) * vec2(1.0, 2.6);
              float r = length(p);
              float rings = 0.5 + 0.5 * sin(r * 34.0 - uTime * 6.0);
              float swirl = 0.5 + 0.5 * sin(atan(p.y, p.x) * 5.0 + r * 9.0 + uTime * 2.4);
              float edge = smoothstep(0.5, 0.36, abs(vUv.x - 0.5)) * smoothstep(0.5, 0.3, abs(vUv.y - 0.5));
              float a = edge * (0.22 + 0.5 * rings * swirl);
              gl_FragColor = vec4(mix(uA, uB, rings * 0.6) * 1.25, min(1.0, a * uGain));
            }`
        });
        const frameMaterial = new THREE.MeshBasicMaterial({ color: theme.cool });
        for (const side of [-1, 1]) {
          const sheet = new THREE.Mesh(new THREE.PlaneGeometry(DEPTH + 70, 300), material);
          sheet.rotation.y = Math.PI / 2; sheet.position.x = side * HALF_W; sheet.renderOrder = 12; g.add(sheet);
          for (const z of [-1, 1]) {
            const post = new THREE.Mesh(UNIT_BOX, frameMaterial); post.scale.set(2.4, 300, 2.4); post.position.set(side * HALF_W, 0, z * (DEPTH / 2 + 35)); g.add(post);
          }
        }
        g.userData.material = material;
        return g;
      });
      gates.position.set(0, topSurface + BLOCK_H / 2, 0);
      gates.userData.material.uniforms.uTime.value = reduced ? 0 : elapsed * direction;
    }
    if (id === 'double' && this.moverCentre && this.moverCentre.alpha > 0.01) {
      const crack = this.cue('shell', () => {
        const g = new THREE.Group();
        const material = new THREE.MeshBasicMaterial({ map: this.kit.crackTexture('shell'), transparent: true, depthWrite: false });
        const front = new THREE.Mesh(new THREE.PlaneGeometry(VISUAL_H, VISUAL_H), material); front.position.z = DEPTH / 2 + 0.5; g.add(front);
        const lid = new THREE.Mesh(new THREE.PlaneGeometry(VISUAL_H, DEPTH * 0.55), material); lid.rotation.x = -Math.PI / 2; lid.position.y = VISUAL_H / 2 + 0.4; g.add(lid);
        g.userData.material = material;
        return g;
      });
      crack.position.set(this.moverCentre.x, this.moverCentre.y, 0);
      crack.userData.material.opacity = this.moverCentre.alpha;
    }
    if (id === 'spotlight') {
      const side = Number(effect.spotlightSide) < 0 ? -1 : 1;
      this.spot = new THREE.Vector3((side < 0 ? top.left + 7 : top.right - 7) - HALF_W + this.group.position.x, topCentreY, DEPTH / 2);
    }
  }

  // Results screen: the collapsed blocks and every trimmed piece lie around the foot of the tower.
  setRubble(pieces, markerY = null) {
    for (const visual of this.rubble) visual.dispose();
    this.rubble.length = 0;
    if (markerY != null) {
      // Where the run ended: a ring around the last block that held.
      const marker = new THREE.Mesh(new THREE.TorusGeometry(Math.max(70, (this.blocks.length ? this.blocks[this.blocks.length - 1].width : 100) / 2 + 46), 1.8, 8, 72), new THREE.MeshBasicMaterial({ color: this.theme.accent }));
      marker.rotation.x = Math.PI / 2; marker.scale.y = 0.62; marker.position.set(this.topCentre, markerY, 0);
      this.group.add(marker);
      this.rubble.push({ dispose: () => { this.group.remove(marker); marker.geometry.dispose(); marker.material.dispose(); } });
    }
    const count = Math.min(pieces.length, 60);
    for (let i = 0; i < count; i += 1) {
      const piece = pieces[i];
      const width = Math.max(4, piece.right - piece.left);
      const visual = new BlockVisual(this.kit, { width, color: piece.color || '#D5472F' });
      const angle = i * 2.39996 + 0.6;
      const radius = 175 + (i % 6) * 26 + (i > 20 ? 60 : 0);
      const tilt = Math.sin(i * 1.71) * 0.5;
      visual.group.position.set(Math.cos(angle) * radius, VISUAL_H / 2 + 0.5 + Math.abs(Math.sin(tilt)) * Math.min(width, 80) * 0.5, Math.sin(angle) * radius * 0.8);
      visual.group.rotation.set(0, angle * 1.7, tilt);
      this.group.add(visual.group);
      this.rubble.push(visual);
    }
  }
}
