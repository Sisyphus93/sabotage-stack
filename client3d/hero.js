// The landing scene: a headline made of real letters that rain onto ledges, a demo tower that plays itself with the real
// game rules (stack, chat vote, sabotage, collapse, repeat), and a ring of the sixteen sabotages standing around the plinth.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { glyphGeometry, layoutWord, faceInfo } from './text3d.js';
import { letterMaterial } from './popups.js';
import { buildIcon, ICON_IDS } from './icons3d.js';
import { rng, damp, clamp, smoothstep, TAU, sign } from './util.js';
import { colorOf } from './world-common.js';
import { offsetFromPointer } from './hover.js';

const LINE_COLORS = { paper: ['#2A2520', '#D5472F'], sunset: ['#FFC53D', '#FF4FD8'], primetime: ['#FFFFFF', '#FFC83D'] };
const LEDGE_COLORS = { paper: ['#2F8478', '#E3A33B'], sunset: ['#2B1155', '#2B1155'], primetime: ['#0B1B5C', '#0B1B5C'] };

export const HEADLINE = Object.freeze({
  wide: Object.freeze([['STACK THE BLOCKS.', 0], ['CHAT RUINS YOUR LIFE.', 1]]),
  tall: Object.freeze([['STACK THE', 0], ['BLOCKS.', 0], ['CHAT RUINS', 1], ['YOUR LIFE.', 1]])
});

// ---------------------------------------------------------------------------------------------------------------------
export class TitleBoard {
  constructor(theme, palette, fx) {
    this.theme = theme; this.palette = palette; this.fx = fx; this.group = new THREE.Group(); this.letters = []; this.layout = ''; this.bounds = { x0: -500, x1: 500, y0: -64, y1: 600 };
    this.materials = []; this.ledges = []; this.marquee = null; this.age = 0; this.random = rng(12);
    this.glow = []; this.off = { dx: 0, dy: 0 }; this.energy = 0;
  }

  build(layout) {
    this.clear(); this.layout = layout;
    const lines = HEADLINE[layout]; const key = this.palette.fontKey; const depth = key === 'sunset' ? 26 : 30;
    const size = layout === 'wide' ? 80 : 74; const gap = size * 1.4;
    const { capHeight, resolution } = faceInfo(key); const cap = (capHeight / resolution) * size;
    const colors = LINE_COLORS[this.theme]; const ledges = LEDGE_COLORS[this.theme];
    const baseY = layout === 'wide' ? 372 : 356; let maxHalf = 0; let index = 0;
    // build bottom-up so the last text line sits lowest, just above the demo tower
    const ordered = lines.map((line, i) => ({ line, i }));
    ordered.forEach(({ line: [text, colorIndex], i }) => {
      const y = baseY + (lines.length - 1 - i) * gap;
      const lineSize = (layout === 'wide' && i === 1) ? size * 0.92 : size;
      const { letters, total } = layoutWord(key, text, lineSize);
      maxHalf = Math.max(maxHalf, total / 2);
      const material = letterMaterial(this.theme, colors[colorIndex], 0.5, false); this.materials.push(material); this.glow.push({ material, base: material.emissiveIntensity });
      const sideMaterial = null;
      for (const letter of letters) {
        const glyph = glyphGeometry(key, letter.ch, lineSize, depth, true);
        if (!glyph.geometry) continue;
        const mesh = new THREE.Mesh(glyph.geometry, material); mesh.castShadow = true; mesh.receiveShadow = true;
        const holder = new THREE.Group(); holder.add(mesh); mesh.position.z = -depth / 2;
        const home = { x: letter.x, y, z: -40 };
        const delay = index * 0.055 + Math.floor(i / 2) * 0.35 + this.random() * 0.12;
        const st = { holder, home, y: y + 1100 + this.random() * 500, vy: -200 - this.random() * 300, delay, landed: false, bounces: 0, rz: (this.random() - 0.5) * 1.6, vrz: 0, rx: (this.random() - 0.5) * 0.8, vrx: 0, ry: (this.random() - 0.5) * 1.2, vry: 0, hop: 0, vhop: 0, swell: 0, waveDelay: -1, line: i, seed: this.random() * TAU, ch: letter.ch, width: glyph.width, cap: lineSize * (capHeight / resolution) };
        holder.position.set(home.x, st.y, home.z); holder.rotation.set(st.rx, st.ry, st.rz);
        this.group.add(holder); this.letters.push(st); index += 1;
      }
      const ledgeWidth = total + lineSize * 0.9;
      const ledgeGeo = new THREE.BoxGeometry(ledgeWidth, lineSize * 0.16, 74);
      const ledgeMat = this.theme === 'paper'
        ? new THREE.MeshStandardMaterial({ color: ledges[colorIndex], roughness: 0.6 })
        : new THREE.MeshStandardMaterial({ color: ledges[colorIndex], roughness: 0.4, metalness: 0.4, emissive: colors[colorIndex], emissiveIntensity: this.theme === 'sunset' ? 0.3 : 0.12 });
      const ledge = new THREE.Mesh(ledgeGeo, ledgeMat); ledge.position.set(0, y - lineSize * 0.08, -22); ledge.castShadow = true; ledge.receiveShadow = true; ledge.scale.x = 0.001;
      ledge.userData = { delay: 0.1 + Math.floor(i / 2) * 0.35, width: ledgeWidth };
      this.group.add(ledge); this.ledges.push(ledge); this.materials.push(ledgeMat); ledge.userData.geo = ledgeGeo;
    });
    const top = baseY + (lines.length - 1) * gap + cap;
    this.bounds = { x0: -maxHalf - 60, x1: maxHalf + 60, y0: -70, y1: top + 60 };
    if (this.theme === 'sunset') this.addMarquee(maxHalf, baseY - size * 0.34, top + 46);
    this.age = 0;
  }

  // Sunset only: the headline hangs on an arcade marquee, a dark plate with a neon border, so the pale pixel letters
  // stay readable in front of the big sun. It powers on (a few flickers) as the letters start to fall.
  addMarquee(maxHalf, y0, y1) {
    const w = (maxHalf + 74) * 2; const h = y1 - y0; const geos = []; const mats = [];
    const group = new THREE.Group(); group.position.set(0, (y0 + y1) / 2, -68);
    const plateGeo = new THREE.PlaneGeometry(w, h); const plateMat = new THREE.MeshBasicMaterial({ color: '#10052A', transparent: true, opacity: 0.9, depthWrite: false, toneMapped: false, side: THREE.DoubleSide });
    group.add(new THREE.Mesh(plateGeo, plateMat)); geos.push(plateGeo); mats.push(plateMat);
    const bar = (mat, bw, bh, x, y, z) => { const geo = new THREE.PlaneGeometry(bw, bh); const mesh = new THREE.Mesh(geo, mat); mesh.position.set(x, y, z); group.add(mesh); geos.push(geo); };
    const outer = new THREE.MeshBasicMaterial({ color: '#FF4FB0', toneMapped: false, side: THREE.DoubleSide }); const inner = new THREE.MeshBasicMaterial({ color: '#2EE6D6', toneMapped: false, side: THREE.DoubleSide }); mats.push(outer, inner);
    const t = 5; bar(outer, w, t, 0, h / 2, 1); bar(outer, w, t, 0, -h / 2, 1); bar(outer, t, h, -w / 2, 0, 1); bar(outer, t, h, w / 2, 0, 1);
    const i = 13; const t2 = 2.5; bar(inner, w - i * 2, t2, 0, h / 2 - i, 1); bar(inner, w - i * 2, t2, 0, -h / 2 + i, 1); bar(inner, t2, h - i * 2, -w / 2 + i, 0, 1); bar(inner, t2, h - i * 2, w / 2 - i, 0, 1);
    group.scale.y = 0.001; this.group.add(group); this.marquee = { group, geos, mats, plateMat, outer, inner };
  }

  clear() {
    for (const holder of this.letters) this.group.remove(holder.holder);
    for (const ledge of this.ledges) { this.group.remove(ledge); ledge.userData.geo.dispose(); }
    for (const m of this.materials) m.dispose();
    this.letters.length = 0; this.ledges.length = 0; this.materials.length = 0; this.glow.length = 0;
    if (this.marquee) { this.group.remove(this.marquee.group); for (const g of this.marquee.geos) g.dispose(); for (const m of this.marquee.mats) m.dispose(); this.marquee = null; }
  }

  // pointer: where the pointer is, as { point, right, up } (see offsetFromPointer), or the older flat { x, y } on the title plane,
  // or null. energy 0..1: how awake the scene is under the pointer (hover.js). Motion is skipped under Reduced Motion; the
  // glow is only a change of light, so it stays.
  update(dt, time, { pointer = null, pointerSpeed = 0, reduced = false, energy = 0, yaw = 0 } = {}) {
    this.age += dt; this.energy = energy;
    if (this.marquee) {
      // seen from behind, the sign's dark plate would hide the letters standing in front of it: it turns see-through instead
      this.marquee.plateMat.opacity = 0.9 * (0.22 + 0.78 * smoothstep(-0.25, 0.45, Math.cos(yaw)));
      const k = clamp(this.age / 0.6); this.marquee.group.scale.y = Math.max(0.001, 1 - (1 - k) ** 3);
      const power = reduced || k >= 1 ? 1 : (Math.sin(this.age * 55) > -0.3 ? 1 : 0.35);
      const hum = (reduced ? 1 : 0.94 + 0.06 * Math.sin(time * 3.1) * Math.sin(time * 1.7)) * (1 + energy * 0.28);
      this.marquee.outer.color.set('#FF4FB0').multiplyScalar(power * hum * 1.25); this.marquee.inner.color.set('#2EE6D6').multiplyScalar(power * hum);
    }
    for (const g of this.glow) g.material.emissiveIntensity = g.base + energy * (this.theme === 'paper' ? 0.2 : 0.45);
    for (const ledge of this.ledges) { const k = clamp((this.age - ledge.userData.delay) / 0.5); ledge.scale.x = Math.max(0.001, 1 - (1 - k) ** 3); }
    const off = this.off;
    for (const l of this.letters) {
      const h = l.holder;
      if (!l.landed) {
        if (this.age < l.delay) { h.visible = false; continue; }
        h.visible = true;
        if (reduced) { l.y = l.home.y; l.landed = true; l.rz = l.rx = l.ry = 0; }
        else {
          l.vy -= 2900 * dt; l.y += l.vy * dt;
          h.rotation.z += (l.rz > 0 ? 1 : -1) * dt * 0.8; l.rz *= 1 - dt * 0.4;
          if (l.y <= l.home.y) {
            l.y = l.home.y;
            if (l.vy < -260 && l.bounces < 3) { l.vy = -l.vy * 0.34; l.bounces += 1; l.vrz = (this.random() - 0.5) * 6; l.vrx = (this.random() - 0.5) * 3; this.impact(l); }
            else { l.landed = true; l.vy = 0; l.rz = h.rotation.z; }
          }
        }
        h.position.y = l.y; h.position.x = l.home.x; continue;
      }
      // landed: springy, reactive, alive
      let tz = 0; let tx = 0; let pushHop = 0; let swell = 0;
      if (pointer && !reduced) {
        let dx; let dy;
        if (pointer.point) { offsetFromPointer(pointer, l.home.x, l.home.y + l.cap / 2, l.home.z, off); dx = off.dx; dy = off.dy; }
        else { dx = l.home.x - pointer.x; dy = (l.home.y + l.cap / 2) - pointer.y; }
        const d = Math.hypot(dx, dy);
        const near = smoothstep(190, 0, d);
        tz = -Math.sign(dx || 1) * near * 0.34; tx = -near * 0.2; pushHop = near * (1 + pointerSpeed * 0.01) * 5; swell = near * 0.075;
        if (near > 0.55 && pointerSpeed > 700 && l.vhop <= 0 && l.hop < 0.5) { l.vhop = Math.min(520, 190 + pointerSpeed * 0.06); l.vrz += -Math.sign(dx || 1) * 5; this.fx && this.fx.dust && this.fx.dust([h.position.x, l.home.y, l.home.z + 20], 2); }
      }
      if (l.waveDelay >= 0) { l.waveDelay -= dt; if (l.waveDelay < 0) { l.vhop = Math.max(l.vhop, 300); l.vrz += (this.random() - 0.5) * 7; l.waveDelay = -1; } }
      l.swell = damp(l.swell, swell, 12, dt);
      const kz = 150; const cz = 10;
      l.vrz += ((tz - l.rz) * kz - l.vrz * cz) * dt; l.rz += l.vrz * dt;
      l.vrx += ((tx - l.rx) * kz - l.vrx * cz) * dt; l.rx += l.vrx * dt;
      l.vry += ((0 - l.ry) * kz - l.vry * cz) * dt; l.ry += l.vry * dt;
      l.vhop -= 2400 * dt; l.hop += l.vhop * dt; if (l.hop < 0) { if (l.vhop < -160) l.vhop = -l.vhop * 0.3; else { l.hop = 0; l.vhop = 0; } }
      const breathe = reduced ? 0 : Math.sin(time * 1.4 + l.seed) * 1.1;
      // while the pointer is over the scene a slow swell runs along every line of the headline
      const ripple = reduced ? 0 : energy * (0.5 + 0.5 * Math.sin(time * 4.6 - l.home.x * 0.013 + l.line * 1.3)) * 3.4;
      h.position.set(l.home.x, l.home.y + l.hop + breathe + ripple + pushHop * 0.4, l.home.z);
      h.rotation.set(l.rx, l.ry, l.rz); h.scale.setScalar(1 + l.swell);
    }
  }

  // A wave runs through the headline from `originX` outwards (the pointer arriving, a click): each letter hops a beat after the one before it.
  wave(originX = 0, speed = 1500) {
    for (const l of this.letters) if (l.landed) l.waveDelay = Math.abs(l.home.x - originX) / speed + l.line * 0.04;
  }

  impact(letter) {
    if (this.fx && this.fx.dust) this.fx.dust([letter.home.x, letter.home.y, letter.home.z + 24], 4);
  }

  // Pops one letter (click). Returns the letter that was hit, or false.
  poke(pointer) {
    let best = null; let bestD = 70; const off = this.off;
    for (const l of this.letters) {
      let dx; let dy;
      if (pointer.point) { offsetFromPointer(pointer, l.home.x, l.home.y + l.cap / 2, l.home.z, off); dx = off.dx; dy = off.dy; } else { dx = l.home.x - pointer.x; dy = l.home.y + l.cap / 2 - pointer.y; }
      const d = Math.hypot(dx, dy); if (d < bestD && l.landed) { bestD = d; best = l; }
    }
    if (!best) return false;
    best.vhop = 760; best.vrz += (this.random() - 0.5) * 22; best.vrx += (this.random() - 0.5) * 8; best.vry += (this.random() - 0.5) * 14; best.hop = 1;
    if (this.fx && this.fx.dust) this.fx.dust([best.home.x, best.home.y + 10, best.home.z + 20], 10);
    return best;
  }

  dispose() { this.clear(); }
}

// ---------------------------------------------------------------------------------------------------------------------
// Plays Sabotage Stack by itself with the real rules: places blocks (some perfect, some sloppy), opens a chat vote, applies
// one sabotage, then topples. Emits a plain tower state, exactly like the real game does, so the same renderer shows it.
export class AttractDirector {
  constructor(Core, random = rng(5)) {
    this.Core = Core; this.random = random; this.idCounter = 0; this.order = []; this.next = 0; this.ballot = null;
    this.speedBase = 150; this.reset();
  }
  nextEffect() {
    const ids = this.Core.SABOTAGE_IDS || ICON_IDS;
    if (!this.order.length || this.next >= this.order.length) { this.order = ids.slice(); for (let i = this.order.length - 1; i > 0; i -= 1) { const j = Math.floor(this.random() * (i + 1)); [this.order[i], this.order[j]] = [this.order[j], this.order[i]]; } this.next = 0; }
    return this.order[this.next++];
  }
  reset() {
    this.id = `attract-${++this.idCounter}`; const C = this.Core;
    this.blocks = [C.makeBase()]; this.fallen = []; this.moving = null; this.effect = null; this.phase = 'playing'; this.collapsed = false;
    this.timer = 0; this.stage = 'stack'; this.stageTimer = 0; this.target = 11 + Math.floor(this.random() * 3); this.voteAt = 5 + Math.floor(this.random() * 2);
    this.ballot = null; this.pendingFail = false; this.voted = false; this.forced = this.forced || null; this.spawnMover(); this.dropOffset = this.pickOffset(); // a sabotage asked for while the old tower was toppling is not lost: it plays on the new one
  }
  pickOffset() { const r = this.random(); if (r < 0.58) return 0; return (this.random() < 0.5 ? -1 : 1) * (6 + this.random() * 26); }
  spawnMover() {
    const C = this.Core; const below = this.blocks[this.blocks.length - 1]; const width = Math.max(C.MIN_WIDTH, below.right - below.left); const level = this.blocks.length;
    const fromLeft = level % 2 === 1;
    const colors = C.PALETTE || ['#E3A33B', '#2F8478', '#7FA6BD', '#D5472F'];
    const moving = { left: fromLeft ? 0 : 360 - width, width, direction: fromLeft ? 1 : -1, level, fromLeft, color: colors[level % colors.length], rollerPhase: (level * 0.38196601125) % 1 };
    if (this.effect && this.effect.id === 'double' && C.createShellDecoy) moving.decoy = C.createShellDecoy(moving);
    this.moving = moving; this.maxWidth = width; this.blockClock = 0;
  }
  speed() {
    const id = this.effect ? this.effect.id : ''; let v = this.speedBase + this.blocks.length * 5;
    if (id === 'turbo') v *= 1.9; else if (id === 'slowmo') v *= 0.5; else if (id === 'drunk') v *= 1 + 0.7 * Math.sin(this.timer * 3.1); else if (id === 'rollercoaster') v *= 1 + 0.4 * Math.sin(this.timer * 2.6);
    return v;
  }
  // The icon ring's click: play this sabotage as soon as the demo can. A vote that is open is decided in its favour, a sabotage
  // that is running is wound down so this one follows at once, and a tower that is toppling hands it on to the next tower.
  force(id) {
    this.forced = id;
    if (this.ballot) {
      const options = this.ballot.options; const at = options.indexOf(id);
      if (at > 0) options[at] = options[0];
      options[0] = id; this.ballot.winner = id; this.forced = null;
    } else if (this.effect) this.effect.remaining = Math.min(this.effect.remaining, 0.3);
  }
  startEffect(id) {
    this.effect = { id, elapsed: 0, remaining: 4.6, duration: 4.6, tiltDirection: this.random() < 0.5 ? -1 : 1, spotlightSide: this.random() < 0.5 ? -1 : 1, windDirection: this.random() < 0.5 ? -1 : 1, dropsRemaining: 3 };
    if (id === 'double' && this.moving && this.Core.createShellDecoy) this.moving.decoy = this.Core.createShellDecoy(this.moving);
    this.pendingFail = true;
  }
  update(dt, reduced = false) {
    this.timer += dt; const C = this.Core;
    if (this.stage === 'collapse') {
      this.stageTimer += dt; if (this.stageTimer > 3.2) this.reset();
      return;
    }
    if (this.forced && !this.ballot && !this.effect) { const id = this.forced; this.forced = null; this.startEffect(id); }
    if (this.stage === 'vote') {
      this.stageTimer += dt;
      const t = this.stageTimer; const f = this.ballot.fractions;
      for (let i = 0; i < 3; i += 1) f[i] = clamp(this.ballot.base[i] * (0.4 + t * 0.5) + Math.sin(t * 5 + i * 2) * 0.05, 0.02, 1);
      this.ballot.voted = clamp(t / 1.7);
      if (t > 2.4) { const id = this.ballot.winner; this.ballot = null; this.stage = 'stack'; this.stageTimer = 0; this.startEffect(id); }
      return;
    }
    if (this.effect) { this.effect.elapsed += dt; this.effect.remaining -= dt; if (this.effect.remaining <= 0) { this.effect = null; if (this.moving) delete this.moving.decoy; } }
    const m = this.moving; if (!m) return;
    this.blockClock += dt;
    const id = this.effect ? this.effect.id : '';
    if (id === 'accordion') { const w = this.maxWidth * (0.72 + 0.28 * Math.sin(this.effect.elapsed * 3.4)); const cx = m.left + m.width / 2; m.width = Math.max(C.MIN_WIDTH, w); m.left = cx - m.width / 2; }
    const v = this.speed();
    const before = m.left + m.width / 2;
    m.left += m.direction * v * dt;
    if (id === 'portal') { if (m.left > 360) m.left -= 360; if (m.left + m.width < 0) m.left += 360; }
    else { if (m.left <= 0) { m.left = 0; m.direction = 1; } if (m.left + m.width >= 360) { m.left = 360 - m.width; m.direction = -1; } }
    const below = this.blocks[this.blocks.length - 1]; const belowC = (below.left + below.right) / 2;
    const center = m.left + m.width / 2; const goal = belowC + this.dropOffset;
    const crossing = (before - goal) * (center - goal) <= 0 && Math.abs(center - before) < 40;
    const failTime = this.pendingFail && !this.effect && this.blocks.length >= this.voteAt + 1;
    if (failTime && this.blockClock > 0.6) {
      // the grand finale: let the block run out to the edge of the board and drop it clear of the tower
      if (m.left <= 1 || m.left + m.width >= 359) this.drop(true);
      return;
    }
    if (this.blockClock > (this.effect ? 0.9 : 1.15) && crossing) this.drop(false);
    if (!this.effect && !this.pendingFail && this.blocks.length >= this.voteAt && this.stage === 'stack' && this.blockClock < 0.2 && !this.voted) this.openVote();
  }
  openVote() {
    this.voted = true; const winner = this.forced || this.nextEffect(); this.forced = null;
    const base = [0.25 + this.random() * 0.2, 0.2 + this.random() * 0.2, 0.2 + this.random() * 0.2];
    const ids = this.Core.SABOTAGE_IDS || ICON_IDS;
    const options = [winner, ...ids.filter(x => x !== winner).sort(() => this.random() - 0.5).slice(0, 2)];
    this.ballot = { options, base, fractions: base.slice(), voted: 0, winner }; this.stage = 'vote'; this.stageTimer = 0;
  }
  drop(forceMiss) {
    const C = this.Core; const m = this.moving; const below = this.blocks[this.blocks.length - 1];
    const level = this.blocks.length; const effectId = this.effect ? this.effect.id : '';
    const belowCentre = (below.left + below.right) / 2;
    const outcome = C.placeDrop(below, forceMiss ? { ...m, left: m.left + m.width / 2 < belowCentre ? below.left - m.width - 4 : below.right + 4 } : m, { perfectWindow: effectId === 'superglue' ? 14 : 3, level, color: m.color, placer: 'You', crumble: effectId === 'crumble' });
    for (const piece of outcome.fallen) this.fallen.push({ ...piece });
    if (outcome.status === 'miss' || (forceMiss && !outcome.placed)) {
      this.phase = 'collapse'; this.collapsed = true; this.collapseStartLevel = Math.max(0, this.blocks.length - 6); this.moving = null; this.stage = 'collapse'; this.stageTimer = 0; this.effect = null; return;
    }
    this.blocks.push(outcome.placed); this.dropOffset = this.pickOffset();
    if (this.blocks.length >= this.target && !this.pendingFail) this.pendingFail = true;
    this.spawnMover();
  }
  state(helpers, reduced) {
    return { id: this.id, blocks: this.blocks, fallen: this.fallen, moving: this.moving, effect: this.effect, helpers, phase: this.phase, collapsed: this.collapsed, collapseStartLevel: this.collapseStartLevel, reduced, teamPlacers: false };
  }
}

// ---------------------------------------------------------------------------------------------------------------------
// The sixteen sabotages as an orbiting ring of 3D icons. Hover to read one, click to unleash it on the demo tower.
export class Arsenal {
  constructor(theme, palette, sabotages) {
    this.theme = theme; this.palette = palette; this.group = new THREE.Group(); this.items = []; this.hover = -1; this.t = 0;
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
    const rx = 352; const rz = 215; const base = -64 + 38; const off = this.off || (this.off = { dx: 0, dy: 0 });
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
      it.spin += dt * (hovered ? 2.8 : 0.5 + it.mag * 1.2); const x = Math.cos(a) * rx; const z = Math.sin(a) * rz + 20;
      it.holder.position.set(x, base + it.lift + (reduced ? 0 : Math.sin(time * 1.3 + it.seed) * 5), z);
      it.holder.scale.setScalar(it.scale * (1 + (x * sinY + z * cosY) / 1800));
      it.icon.rotation.y = it.spin + a * 0.3; it.icon.rotation.x = 0.1; it.icon.rotation.z = it.tilt;
    });
  }
  pick(raycaster) { const hit = raycaster.intersectObjects(this.proxies, false)[0]; return hit ? hit.object.userData.index : -1; }
  dispose() { for (const it of this.items) { it.icon.userData.dispose(); it.proxy.geometry.dispose(); it.proxy.material.dispose(); } }
}
