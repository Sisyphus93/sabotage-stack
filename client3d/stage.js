// The conductor. Reads the page's game state each frame (through the host bridge), mirrors it into 3D towers, drives the
// cinematic camera so the play field lands exactly inside the page's own stage rectangle, and dresses every moment:
// landings, perfects, votes, sabotages, collapses, results. It never decides gameplay.
import * as THREE from 'three';
import { Engine, TIERS } from './engine.js';
import { createWorld } from './worlds.js';
import { BlockKit } from './blocks.js';
import { Tower, levelY } from './tower.js';
import { Sparks, Confetti, Pulses } from './particles.js';
import { Popups, Ruler } from './popups.js';
import { TitleBoard, AttractDirector, Arsenal } from './hero.js';
import { normalizeTheme, paletteFor, BALLOT_COLORS, themedBlockColor } from './palette.js';
import { buildIcon } from './icons3d.js';
import { hasGlyphs } from './text3d.js';
import { OrbitController } from './orbit.js';
import { HoverField, offsetFromPointer } from './hover.js';
import { createOrbitHud } from './orbit-hud.js';
import { podiumEntries, podiumMetrics, revealCount, revealedFallen, headlineFor } from './podium.js';
import { clamp, damp, lerp, smoothstep, easeInOutCubic, easeOutCubic, TAU, rng, Spring } from './util.js';

const BOARD_W = 360;
const DUST = [0.82, 0.74, 0.6];
// Things the pointer must leave alone: controls, and the page's glass panels (their text can be selected, their buttons pressed).
const UI_SELECTOR = 'button, a, select, input, textarea, label, dialog, summary, [role="button"]';
const PANEL_SELECTOR = '.side-card, .play-card, .result-info, .preview-card, .home-copy, .home-bottom, .topbar, .footer-note, .orbit-hud';
const HOVER_LOOK = {
  paper: { light: '#FFD9A0', power: 52000, sparkles: ['#E3A33B', '#2F8478', '#D5472F', '#FFF1D0', '#C96F8A'] },
  sunset: { light: '#FF6BE0', power: 76000, sparkles: ['#FF4FD8', '#2EE6D6', '#FFC53D', '#B983FF'] },
  primetime: { light: '#CFE0FF', power: 64000, sparkles: ['#FFC83D', '#FFFFFF', '#35D0E8', '#FF7FA8'] }
};
const closest = (target, selector) => Boolean(target && target.closest && target.closest(selector));
const soloIds = new WeakMap(); let soloCounter = 0;
const soloId = game => { if (!soloIds.has(game)) soloIds.set(game, ++soloCounter); return soloIds.get(game); };

export class Stage {
  constructor({ canvas, host, tier = null, scale = 1 }) {
    this.host = host; this.canvas = canvas; this.time = 0; this.last = 0; this.mode = ''; this.modeTime = 0;
    const view = host.view();
    this.theme = normalizeTheme(view.theme);
    this.engine = new Engine({ canvas, theme: this.theme, reducedMotion: view.reduced, forcedTier: tier });
    if (scale !== 1) { this.engine.scale = scale; this.engine.forcedTier = true; }
    this.scene = this.engine.scene; this.camera = this.engine.camera;
    this.fx = {
      sparks: new Sparks(1800), glints: new Sparks(260), confetti: new Confetti(420), pulses: new Pulses(12), // glints: the pointer's sparkle trail (home view)
      dust: (pos, count = 6) => this.fx.sparks.burst({ pos, count, speed: 70, spread: 1, color: DUST, size: 16, life: 0.9, gravity: 10, up: 0.5, drag: 1.5, alpha: 0.34, growth: 16 })
    };
    this.scene.add(this.fx.sparks.points, this.fx.glints.points, this.fx.confetti.mesh, this.fx.pulses.group);
    this.pointer = { x: 0, y: 0, px: 0, py: 0, speed: 0, inside: false, lastX: 0, lastY: 0, lastT: 0, ndc: new THREE.Vector2() };
    this.raycaster = new THREE.Raycaster(); this.plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 40);
    this.rig = { yaw: 0, pitch: 0.1, zoom: 1, roll: 0, kick: new Spring(0, 220, 14), shakeAmp: 0, shakeT: 0, focusY: 220, intro: 0 };
    this.timeScale = 1; this.slowT = 0; this.flash = 0; this.desatPulse = 0; this.caPulse = 0;
    this.towers = {}; this.arena = []; this.lastEffectKey = ''; this.badge = null; this.labels = [];
    this.heroLayout = ''; this.introDone = false; this.heroHover = -1;
    // home view: turning the scene (orbit.js), how awake it is under the pointer (hover.js) and the on-screen controls
    this.orbit = new OrbitController(); this.hover = new HoverField(); this.drag = null; this.dragBlend = 0; this.cursor = '';
    this.hud = null; this.hintAge = 0; this.idleFor = 0; this.contextGuardUntil = 0; this.pointerFrame = null; this.lastRipple = 0; this.cameraRay = new THREE.Vector3();
    this.groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 60);
    this.cursorLight = new THREE.PointLight('#FFD9A0', 0, 900, 1.8); this.cursorLight.name = 'cursor-light'; // always in the scene (intensity 0 when idle): adding a light later would recompile every material
    this.scene.add(this.cursorLight);
    this.buildTheme(this.theme);
    this.engine.on('tier', tier => this.applyTier(tier));
    this.engine.on('restored', () => this.buildTheme(this.theme, true));
    window.addEventListener('pointermove', this.onPointerMove = e => this.handleMove(e), { passive: true });
    window.addEventListener('pointerdown', this.onPointerDown = e => this.handleDown(e), { passive: true });
    window.addEventListener('pointerup', this.onPointerUp = e => this.handleUp(e), { passive: true });
    window.addEventListener('pointercancel', this.onPointerCancel = e => this.handleUp(e, true), { passive: true });
    document.documentElement.addEventListener('pointerleave', this.onPointerLeave = () => { this.pointer.inside = false; });
    window.addEventListener('blur', this.onBlur = () => { this.pointer.inside = false; this.endDrag(true); });
    window.addEventListener('contextmenu', this.onContextMenu = e => {
      if (this.mode !== 'hero') return;
      // a right-drag that began on the scene owns the menu wherever it is released (Windows raises it on mouse-up, over whatever is there)
      const turning = (this.drag && this.drag.button === 2) || performance.now() < this.contextGuardUntil;
      if (turning || (!closest(e.target, UI_SELECTOR) && !closest(e.target, PANEL_SELECTOR))) e.preventDefault();
    });
    window.addEventListener('dblclick', this.onDoubleClick = e => { if (this.mode === 'hero' && !closest(e.target, UI_SELECTOR) && !closest(e.target, PANEL_SELECTOR)) this.orbit.reset(); });
    window.addEventListener('keydown', this.onKeyDown = e => this.handleKey(e));
    this.applyTier(this.engine.tier);
  }

  applyTier(tier) {
    this.fx.sparks.density = tier.particles; this.fx.glints.density = tier.particles; this.fx.confetti.density = tier.particles;
    if (this.world) this.world.setCrowdDensity(tier.crowd);
    this.world && (this.world.lights.key.shadow.mapSize.width !== tier.shadow) && (() => { this.world.lights.key.shadow.mapSize.set(tier.shadow, tier.shadow); if (this.world.lights.key.shadow.map) { this.world.lights.key.shadow.map.dispose(); this.world.lights.key.shadow.map = null; } })();
  }

  // -------------------------------------------------------------------------------------------------------------------
  buildTheme(theme, force = false) {
    if (this.world) { this.scene.remove(this.world.root); this.world.dispose(); }
    this.theme = theme; this.engine.setTheme(theme); this.palette = this.engine.palette;
    // how the pointer lights the home scene: a warm lamp for paper, neon for the arcade, a cool spot for the studio
    const look = HOVER_LOOK[theme] || HOVER_LOOK.paper;
    this.cursorLight.color.set(look.light); this.cursorLightPower = look.power;
    this.sparkleColors = look.sparkles.map(hex => { const c = new THREE.Color(hex); return [c.r, c.g, c.b]; });
    // glowing sparkles vanish against the pale paper sky, so there they are drawn as ordinary soft dots in full colour
    const glints = this.fx.glints.material; const blending = theme === 'paper' ? THREE.NormalBlending : THREE.AdditiveBlending;
    if (glints.blending !== blending) { glints.blending = blending; glints.needsUpdate = true; }
    this.glintBoost = theme === 'paper' ? 1 : 1.7;
    if (this.kit) this.kit.dispose(); this.kit = new BlockKit(theme);
    this.world = createWorld(theme, this.engine, { crowdDensity: this.engine.tier.crowd });
    this.scene.add(this.world.root); this.scene.fog = this.world.fog; this.scene.environment = this.world.envTexture;
    this.scene.environmentIntensity = theme === 'paper' ? 0.7 : 0.85; this.scene.background = null;
    if (this.popups) { this.scene.remove(this.popups.group); this.popups.clear(); }
    this.popups = new Popups(theme, this.palette); this.scene.add(this.popups.group);
    if (this.ruler) { this.scene.remove(this.ruler.group); this.ruler.dispose(); }
    this.ruler = new Ruler(theme, this.palette); this.scene.add(this.ruler.group);
    if (this.title) { this.scene.remove(this.title.group); this.title.dispose(); }
    this.title = new TitleBoard(theme, this.palette, this.fx); this.scene.add(this.title.group); this.heroLayout = '';
    if (this.arsenal) { this.scene.remove(this.arsenal.group); this.arsenal.dispose(); }
    const view = this.host.view();
    this.arsenal = new Arsenal(theme, this.palette, window.SabotageStack && window.SabotageStack.sabotages); this.scene.add(this.arsenal.group);
    for (const tower of Object.values(this.towers)) tower.setKit(this.kit);
    for (const tower of this.arena) tower.setKit(this.kit);
    this.removeBadge(); this.labels.forEach(l => { this.scene.remove(l.mesh); l.mesh.material.map.dispose(); l.mesh.material.dispose(); l.mesh.geometry.dispose(); }); this.labels.length = 0;
    this.applyTier(this.engine.tier);
    this.mode = ''; // re-enter the current mode so everything is re-laid-out
  }

  getTower(name, options) {
    if (!this.towers[name]) {
      const tower = new Tower(this.kit, this.fx, options); this.scene.add(tower.root); this.towers[name] = tower; this.wireTower(tower, name);
    }
    return this.towers[name];
  }

  wireTower(tower, name) {
    tower.on('land', ({ position, width, level }) => {
      const p = [position.x, position.y + 2, position.z];
      this.fx.sparks.burst({ pos: [p[0] - width / 2, p[1], p[2]], count: 4, speed: 55, spread: 1, color: DUST, size: 10, life: 0.7, gravity: 8, up: 0.2, drag: 2, alpha: 0.4, growth: 12, direction: [-1.2, 0.1, 0.4] });
      this.fx.sparks.burst({ pos: [p[0] + width / 2, p[1], p[2]], count: 4, speed: 55, spread: 1, color: DUST, size: 10, life: 0.7, gravity: 8, up: 0.2, drag: 2, alpha: 0.4, growth: 12, direction: [1.2, 0.1, 0.4] });
      if (name !== 'arena') this.rig.kick.velocity -= 70;
    });
    tower.on('perfect', ({ position, width, level }) => {
      const gold = this.palette.amber; const c = new THREE.Color(gold);
      this.fx.pulses.pulse({ pos: [position.x, position.y + 1, position.z - 20], color: gold, radius: Math.max(120, width * 0.9), life: 0.8, from: 0.15, strength: 1.5 });
      this.fx.sparks.burst({ pos: [position.x, position.y + 6, position.z], count: 26, speed: 190, spread: 1, color: [c.r * 1.6, c.g * 1.6, c.b * 1.6], size: 6.5, life: 0.95, gravity: -220, up: 0.7, drag: 1.1 });
      this.world.crowd.cheer(0.9);
      if (name === 'arena' || this.mode === 'hero') return;
      if (!this.reduced) this.flash = Math.max(this.flash, 0.09);
      this.popups.show({ text: 'PERFECT!', position: [clamp(position.x, -90, 90), position.y + 52, 96], size: 30, depth: 9, color: gold, glow: 0.9, style: 'slam', life: 1.15, tilt: (Math.random() - 0.5) * 0.18 });
      if (!this.reduced) this.fx.confetti.burst({ pos: [position.x, position.y + 8, position.z], count: 22, speed: 230, colors: this.confettiColors(), size: 6.5, life: 2.4, cone: 0.9 });
    });
    tower.on('impact', ({ position, width, speed }) => {
      if (speed > 90) { this.fx.dust([position.x, position.y + 4, position.z], 5); if (speed > 280) this.rig.kick.velocity -= 20; }
    });
    tower.on('collapse', ({ top }) => {
      if (name === 'arena') { this.world.crowd.cheer(0.5); return; }
      this.slowT = 0.62; this.timeScale = 0.32; this.rig.shakeAmp = this.reduced ? 0 : 16; this.rig.shakeT = 0;
      if (!this.reduced) { this.flash = Math.max(this.flash, 0.26); this.caPulse = 1; this.desatPulse = 1; }
      const t = top || new THREE.Vector3(0, 200, 0); const red = new THREE.Color(this.palette.vermilion);
      this.fx.sparks.burst({ pos: [t.x, t.y, 40], count: 60, speed: 260, spread: 1, color: [red.r * 1.4, red.g * 1.4, red.b * 1.4], size: 7, life: 1.1, gravity: -300, up: 0.5, drag: 1.2 });
      this.fx.dust([t.x, t.y, 40], 22); this.fx.dust([0, 6, 50], 16);
      this.fx.pulses.pulse({ pos: [0, 2, 0], color: this.palette.vermilion, radius: 330, life: 1.0, from: 0.3, strength: 1.2 });
      if (name === 'play') this.popups.show({ text: 'TIMBER!', position: [0, t.y + 40, 100], size: 40, depth: 12, color: this.palette.vermilion, glow: 0.9, style: 'slam', life: 1.5, tilt: -0.08 });
      this.world.crowd.cheer(1.6);
    });
  }

  confettiColors() { return this.theme === 'paper' ? ['#E3A33B', '#2F8478', '#7FA6BD', '#D5472F', '#C96F8A'] : this.theme === 'sunset' ? ['#FFC53D', '#2EC4B6', '#9B5DE5', '#FF5964', '#FF8FAB'] : ['#FFC83D', '#35D0E8', '#F2F5FF', '#E5322D', '#FF7FA8']; }

  // -------------------------------------------------------------------------------------------------------------------
  handlePointer(event) {
    const p = this.pointer; const now = performance.now(); const w = window.innerWidth; const h = window.innerHeight;
    const dt = Math.max(1, now - p.lastT);
    const speed = Math.hypot(event.clientX - p.lastX, event.clientY - p.lastY) / dt * 1000;
    p.speed = Math.min(5000, Math.max(speed, p.speed * 0.6)); p.lastX = event.clientX; p.lastY = event.clientY; p.lastT = now;
    p.x = event.clientX / w * 2 - 1; p.y = -(event.clientY / h * 2 - 1); p.ndc.set(p.x, p.y); p.inside = true;
    p.touch = event.pointerType === 'touch';
    p.overUi = closest(event.target, UI_SELECTOR) || closest(event.target, PANEL_SELECTOR);
  }

  // -------------------------------------------------------------------------------------------------------------------
  // Home view input. Hold the left or the right mouse button (or a finger) on the scene and drag to turn it all the way round
  // (orbit.js). A press that never moves is a click: it pops a headline letter or calls a sabotage from the ring.
  handleMove(event) {
    this.handlePointer(event); this.idleFor = 0;
    const d = this.drag; if (!d || event.pointerId !== d.id) return;
    if (event.pointerType === 'mouse' && event.buttons === 0) { this.endDrag(false, event); return; } // let go outside the window
    if (!d.moved && Math.hypot(event.clientX - d.x, event.clientY - d.y) > this.orbit.tapSlop) d.moved = true;
    this.orbit.move(event.clientX, event.clientY, event.timeStamp / 1000, { pitch: !d.touch });
  }

  handleDown(event) {
    this.handlePointer(event); this.idleFor = 0;
    if (this.mode !== 'hero' || !this.arsenal || this.drag || !event.isPrimary) return;
    if (event.button !== 0 && event.button !== 2) return; // the middle button stays the browser's (auto-scroll)
    if (this.pointer.overUi) return;
    this.drag = { id: event.pointerId, x: event.clientX, y: event.clientY, t: event.timeStamp, button: event.button, moved: false, touch: event.pointerType === 'touch' };
    this.orbit.begin(event.clientX, event.clientY, event.timeStamp / 1000);
    document.documentElement.classList.add('orbiting');
    const selection = window.getSelection && window.getSelection(); if (selection && selection.removeAllRanges) selection.removeAllRanges();
  }

  handleUp(event, cancelled = false) {
    const d = this.drag; if (!d || event.pointerId !== d.id) return;
    if (event.pointerType === 'touch') this.pointer.inside = false; // a finger has no hover
    this.endDrag(cancelled, event);
  }

  endDrag(cancelled = false, event = null) {
    const d = this.drag; if (!d) return; this.drag = null;
    this.orbit.end(event ? event.timeStamp / 1000 : performance.now() / 1000);
    if (d.button === 2) this.contextGuardUntil = performance.now() + 500;
    document.documentElement.classList.remove('orbiting');
    if (d.moved) { if (this.hud) this.hud.quiet(); return; }
    if (!cancelled && event && d.button === 0 && event.timeStamp - d.t < 600) this.handleClick(event);
  }

  handleClick(event) {
    if (this.mode !== 'hero' || !this.arsenal) return;
    if (closest(event.target, UI_SELECTOR)) return;
    this.handlePointer(event);
    this.raycaster.setFromCamera(this.pointer.ndc, this.camera);
    const idx = this.arsenal.pick(this.raycaster);
    if (idx >= 0) { this.directorForce(this.arsenal.items[idx].id); if (!this.reduced) this.title.wave(this.arsenal.items[idx].holder.position.x); return; }
    const frame = this.heroAnchor && this.pointerOnScreenPlane(this.heroAnchor, this.pointer.ndc, 0);
    if (frame && this.title.poke(frame) && !this.reduced) this.title.wave(frame.point.x, 1900);
  }

  // Arrow keys turn the scene when nothing else has the keyboard (a focused select or button keeps its own arrows).
  handleKey(event) {
    if (this.mode !== 'hero' || event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) return;
    const target = event.target; if (target && target !== document.body && target !== document.documentElement) return;
    const step = event.shiftKey ? Math.PI / 2 : Math.PI / 8;
    if (event.key === 'ArrowLeft') { this.orbit.rotateBy(-step, 0.35); this.idleFor = 0; event.preventDefault(); }
    else if (event.key === 'ArrowRight') { this.orbit.rotateBy(step, 0.35); this.idleFor = 0; event.preventDefault(); }
    else if (event.key === 'Home') { this.orbit.reset(); event.preventDefault(); }
  }

  setCursor(value) { if (value === this.cursor) return; this.cursor = value; document.documentElement.style.cursor = value; }

  // The pointer in the scene: where its ray meets a plane that faces the camera and passes through `anchor` (moved `advance`
  // units towards the camera), plus that plane's right / up axes, so distances can be measured across the screen.
  pointerOnScreenPlane(anchor, ndc = this.pointer.ndc, advance = 0) {
    const cam = this.camera; const forward = cam.getWorldDirection(this.tmpForward || (this.tmpForward = new THREE.Vector3()));
    const plane = this.screenPlane || (this.screenPlane = new THREE.Plane()); const through = this.tmpThrough || (this.tmpThrough = new THREE.Vector3());
    plane.normal.copy(forward).negate(); plane.constant = -plane.normal.dot(through.copy(anchor).addScaledVector(forward, -advance));
    this.raycaster.setFromCamera(ndc, cam);
    const frame = this.pointerFrame || (this.pointerFrame = { point: new THREE.Vector3(), right: new THREE.Vector3(), up: new THREE.Vector3() });
    if (!this.raycaster.ray.intersectPlane(plane, frame.point)) return null;
    frame.right.setFromMatrixColumn(cam.matrixWorld, 0); frame.up.setFromMatrixColumn(cam.matrixWorld, 1);
    return frame;
  }
  directorForce(id) { if (this.director) { this.director.voted = false; this.director.force(id); } }

  // -------------------------------------------------------------------------------------------------------------------
  pickMode(view) {
    const g = view.game;
    switch (view.screen) {
      case 'title': return 'hero';
      case 'room': case 'lobby': return 'lobby';
      case 'results': return view.results ? 'results' : 'celebrate';
      case 'game': return g && g.multiplayer && g.mode === 'competitive' && view.mp.role !== 'player' ? 'arena' : 'play';
      default: return 'hero';
    }
  }

  // Runs the simulation forward without drawing (tests and QA use this; a software renderer cannot keep real time).
  advance(seconds, step = 1 / 30) {
    const n = Math.max(1, Math.ceil(seconds / step)); let ts = this.fakeTs || this.last || 0;
    for (let i = 0; i < n; i += 1) { ts += step * 1000; this.frame(ts, { render: false }); }
    this.fakeTs = ts;
  }

  frame(ts, { render = true } = {}) {
    const dt = clamp((ts - (this.last || ts)) / 1000, 0, 0.05); this.last = ts;
    if (this.engine.contextLost) return;
    this.time += dt;
    const view = this.host.view(); this.view = view; this.reduced = Boolean(view.reduced); this.engine.reducedMotion = this.reduced;
    const theme = normalizeTheme(view.theme);
    if (theme !== this.theme) this.buildTheme(theme);
    const mode = this.pickMode(view);
    if (mode !== this.mode) this.enterMode(mode, view);
    this.modeTime += dt;
    // global slow-motion beat (collapse): physics run slower, then ease back
    if (this.slowT > 0) { this.slowT -= dt; if (this.slowT <= 0) this.timeScale = 1; } else this.timeScale = damp(this.timeScale, 1, 6, dt);
    for (const tower of this.activeTowers()) tower.timeScale = this.timeScale;
    this.post = { spots: [] };
    this.engine.resize();
    this['update_' + this.mode](dt, view);
    this.updateCommon(dt);
    if (render) { this.engine.render(dt, this.post); this.engine.govern(dt * 1000, ts); }
    this.pointer.speed *= 0.9;
  }

  activeTowers() { return this.mode === 'arena' || this.mode === 'celebrate' ? this.arena : Object.values(this.towers); }

  enterMode(mode, view) {
    const previous = this.mode; this.mode = mode; this.modeTime = 0;
    this.engine.fade.value = Math.max(this.engine.fade.value, previous ? 0.8 : 1); this.engine.fade.target = 0;
    const hero = mode === 'hero'; const play = mode === 'play' || mode === 'results';
    this.title.group.visible = hero; this.arsenal.group.visible = hero;
    if (this.towers.hero) this.towers.hero.root.visible = hero;
    if (this.towers.play) this.towers.play.root.visible = play;
    if (this.towers.lobby) this.towers.lobby.root.visible = mode === 'lobby';
    for (const t of this.arena) t.root.visible = mode === 'arena' || mode === 'celebrate';
    for (const l of this.labels) l.mesh.visible = false;
    this.ruler.group.visible = play;
    if (mode !== 'celebrate') this.world.plinth.scale.set(mode === 'arena' ? 2.3 : 1, 1, mode === 'arena' ? 0.62 : 1);
    this.popups.clear(); this.lastEffectKey = ''; this.removeBadge();
    if (hero) this.openHud(); else this.leaveHome();
    if (mode === 'hero' && !this.director) this.director = new AttractDirector(view.Core, rng(Date.now() & 0xffff));
    if (mode === 'results') this.resultsT = 0;
    this.world.crowd.clearBallot();
    if (previous === 'results' || previous === 'celebrate') this.fx.confetti.floor = -64;
  }

  // The home view's on-screen controls (they live inside the title screen, so the page hides them with it).
  openHud() {
    if (this.hud) return; this.hintAge = 0;
    let storage = null; try { storage = window.localStorage; } catch (_) { storage = null; }
    const coarse = Boolean(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
    this.hud = createOrbitHud({ doc: document, storage, touch: coarse, onTurn: delta => { this.orbit.rotateBy(delta); this.idleFor = 0; if (this.hud) this.hud.quiet(); }, onReset: () => this.orbit.reset() });
  }

  // Everything the home view changed that the other views must not inherit.
  leaveHome() {
    this.endDrag(true); this.orbit.snap(); this.world.setViewYaw(0); this.popups.faceYaw = 0; this.dragBlend = 0;
    this.setCursor(''); this.heroHover = -1; this.arsenal.hover = -1; this.cursorLight.intensity = 0;
    this.hover.energy = 0; this.hover.inside = false; this.world.crowd.setAttention(0, 0, 0, 0);
    this.engine.bloomPass.strength = this.palette.bloom;
  }

  updateCommon(dt) {
    const time = this.time;
    this.engine.fade.value = damp(this.engine.fade.value, this.engine.fade.target, this.engine.fade.speed * 3, dt);
    this.fx.sparks.update(dt * this.timeScale); this.fx.glints.update(dt); this.fx.confetti.update(dt, time); this.fx.pulses.update(dt);
    this.fx.sparks.setScale(this.engine.height * 0.95); this.fx.glints.setScale(this.engine.height * 0.95);
    this.popups.update(dt, time);
    this.flash = damp(this.flash, 0, 7, dt); this.desatPulse = damp(this.desatPulse, 0, 3.2, dt); this.caPulse = damp(this.caPulse, 0, 4, dt);
    this.post.flash = this.flash; this.post.desat = Math.max(this.post.desat || 0, this.desatPulse * 0.45);
    this.post.ca = (this.post.ca || 0) + this.caPulse * 0.004;
    if (this.flash > 0.01) this.post.flashColor = this.theme === 'primetime' ? [1, 0.9, 0.6] : this.desatPulse > 0.2 ? [0.9, 0.25, 0.2] : [1, 0.86, 0.55];
  }

  // -------------------------------------------------------------------------------------------------------------------
  // Camera. `anchor` is the world point that must appear at `screen` (px). `rect` supplies the scale: worldW x worldH world
  // units are fitted inside it, which is how the play field lands exactly on the page's stage element.
  placeCamera({ anchor, screen, rect, worldW, worldH, yaw = 0, pitch = 0.1, zoom = 1, roll = 0, shake = [0, 0, 0] }) {
    const cam = this.camera; const W = this.engine.cssWidth; const H = this.engine.cssHeight;
    const ppu = Math.max(0.05, Math.min(rect.w / worldW, rect.h / worldH)) * zoom;
    const dist = H / (2 * ppu * Math.tan(THREE.MathUtils.degToRad(cam.fov) / 2));
    const cp = Math.cos(pitch); this.camDist = dist;
    cam.position.set(anchor.x + Math.sin(yaw) * cp * dist + shake[0], anchor.y + Math.sin(pitch) * dist + shake[1], anchor.z + Math.cos(yaw) * cp * dist + shake[2]);
    cam.near = Math.max(4, dist * 0.05); cam.far = 30000;
    cam.up.set(0, 1, 0); cam.lookAt(anchor.x, anchor.y, anchor.z); if (roll) cam.rotateZ(roll);
    cam.setViewOffset(W, H, -(screen.x - W / 2), -(screen.y - H / 2), W, H);
    cam.updateProjectionMatrix(); cam.updateMatrixWorld(true);
    return ppu;
  }

  rectOf(element, fallback) {
    if (element && element.getBoundingClientRect) {
      const r = element.getBoundingClientRect();
      if (r.width > 8 && r.height > 8) return { x: r.left, y: r.top, w: r.width, h: r.height };
    }
    return fallback || { x: 0, y: 0, w: this.engine.cssWidth, h: this.engine.cssHeight };
  }
  uvRect(rect) { const W = this.engine.cssWidth; const H = this.engine.cssHeight; return [rect.x / W, 1 - (rect.y + rect.h) / H, (rect.x + rect.w) / W, 1 - rect.y / H]; }

  parallax(amount = 1) { const p = this.pointer; return this.reduced ? [0, 0] : [(p.inside ? p.x : 0) * 0.07 * amount, (p.inside ? p.y : 0) * 0.025 * amount]; }

  // -------------------------------------------------------------------------------------------------------------------
  towerStateFromGame(view) {
    const g = view.game; const Core = view.Core; const mp = view.mp;
    const key = g.multiplayer ? `mp:${g.roundNumber}:${g.mode}` : `solo:${soloId(g)}`;
    let collapsed = g.phase === 'collapse' || g.phase === 'ended' || g.phase === 'results';
    if (g.multiplayer && g.mode === 'competitive') { const me = (g.remotePlayers || []).find(p => p.playerId === mp.playerId); if (me && me.collapsed) collapsed = true; }
    const playing = g.phase === 'playing' && !collapsed;
    return { id: key, blocks: g.stack || [], fallen: g.fallenPieces || [], moving: playing ? g.moving : null, effect: g.activeEffect, helpers: Core, phase: g.phase, collapsed, collapseStartLevel: g.collapseStartLevel, reduced: this.reduced, teamPlacers: Boolean(g.multiplayer && g.mode === 'teamwork'), ended: false };
  }

  ballotFrom(view) {
    const g = view.game; if (!g || !g.vote || g.phase !== 'playing') return null;
    const remote = Boolean(view.mp.active && g.multiplayer); const vote = g.vote; const Core = view.Core;
    const counts = remote && vote.counts ? vote.counts : Core.countVotes(vote.votes, vote.options);
    let total = remote ? Number(vote.totalVotes) || 0 : vote.votes.size;
    const fractions = vote.options.slice(0, 3).map(id => Number(counts[id]) || 0);
    if (!remote && vote.votes.has && vote.votes.has('you')) { const c = vote.votes.get('you'); const idx = vote.options.indexOf(c); if (idx >= 0) fractions[idx] += 3; total += 3; }
    while (fractions.length < 3) fractions.push(0);
    const crowd = remote ? Math.max(5, (view.mp.room && view.mp.room.players ? view.mp.room.players.length : 4) * 1.5) : 22;
    return { voted: clamp(total / crowd), fractions: fractions.map(f => f + 0.0001), colors: BALLOT_COLORS[this.theme] };
  }

  announceEffect(effect, view) {
    const sab = window.SabotageStack && window.SabotageStack.sabotages.find(s => s.id === effect.id); if (!sab) return;
    const name = sab.name.toUpperCase(); const size = clamp(300 / (name.length * 0.7), 15, 36);
    const top = this.rig.focusY;
    this.popups.show({ text: name, position: [0, top + 150, 110], size, depth: 10, color: this.palette.cream, glow: 0.6, style: 'slam', life: 1.9, tilt: 0.06 });
    this.removeBadge();
    const icon = buildIcon(effect.id, this.theme); icon.scale.multiplyScalar(1.5); icon.position.set(-128, top + 168, 120); this.scene.add(icon);
    const ring = new THREE.Mesh(new THREE.RingGeometry(30, 33, 48, 1, 0, TAU), new THREE.MeshBasicMaterial({ color: new THREE.Color(this.palette.amber).multiplyScalar(1.6), transparent: true, opacity: 0.9, side: THREE.DoubleSide, toneMapped: false, depthWrite: false }));
    ring.position.copy(icon.position); ring.position.z -= 4; this.scene.add(ring);
    this.badge = { icon, ring, born: this.time, progress: 1 };
    this.fx.pulses.pulse({ pos: [0, top + 60, 80], color: this.palette.amber, radius: 220, life: 0.7, from: 0.2, strength: 1, vertical: true });
    this.world.crowd.cheer(0.6);
  }
  removeBadge() { if (!this.badge) return; this.scene.remove(this.badge.icon, this.badge.ring); this.badge.icon.userData.dispose(); this.badge.ring.geometry.dispose(); this.badge.ring.material.dispose(); this.badge = null; }
  updateBadge(effect, dt, focusY) {
    if (!this.badge) return; const b = this.badge;
    if (!effect) { this.removeBadge(); return; }
    const age = this.time - b.born; const pop = easeOutCubic(clamp(age / 0.35));
    b.icon.scale.setScalar(1.5 * pop * (1 + Math.sin(age * 2) * 0.03)); b.icon.rotation.y = age * 1.1; b.icon.position.set(-128, focusY + 168 + Math.sin(age * 2.2) * 3, 120);
    const duration = Number(effect.duration) || (Number(effect.elapsed) + Number(effect.remaining)) || 5;
    const progress = clamp(Number.isFinite(Number(effect.remaining)) && effect.remaining > 0 ? effect.remaining / duration : 1, 0, 1);
    if (Math.abs(progress - b.progress) > 0.015) { b.progress = progress; b.ring.geometry.dispose(); b.ring.geometry = new THREE.RingGeometry(30, 33, 48, 1, Math.PI / 2, Math.max(0.001, TAU * progress)); }
    b.ring.position.set(b.icon.position.x, b.icon.position.y, 116); b.ring.scale.setScalar(pop);
  }

  // -------------------------------------------------------------------------------------------------------------------
  update_play(dt, view) {
    const g = view.game; const tower = this.getTower('play'); const hero = this.towers.hero; if (hero) hero.root.visible = false;
    tower.root.visible = true;
    if (!g) { this.placeIdle(dt, view); return; }
    const state = this.towerStateFromGame(view); this.lastPlayKey = state.id;
    tower.sync(state, dt, this.time);
    const blocks = state.blocks; const count = blocks.length; const effectId = g.activeEffect ? g.activeEffect.id : '';
    const targetFocus = Math.max(220, (count + 1) * 22 - 60);
    this.rig.focusY = this.reduced ? targetFocus : damp(this.rig.focusY, targetFocus, 1 / 0.12, dt);
    const altitude = clamp(this.rig.focusY / 2200);
    const effect = g.activeEffect; const key = effect ? `${effect.id}:${effect.targetPlayerId || ''}` : '';
    if (key !== this.lastEffectKey) { if (effect) this.announceEffect(effect, view); else this.removeBadge(); this.lastEffectKey = key; }
    this.updateBadge(effect, dt, this.rig.focusY);
    // zoom sabotage: 1.85x about the top block, like the 2D view
    const zoomTarget = effectId === 'zoom' ? 1.85 : 1;
    this.rig.zoom = this.reduced ? zoomTarget : damp(this.rig.zoom, zoomTarget, 1 / 0.12, dt);
    const zk = clamp((this.rig.zoom - 1) / 0.85);
    const topBlock = blocks[blocks.length - 1]; const topX = topBlock ? (topBlock.left + topBlock.right) / 2 - 180 : 0; const topY = topBlock ? levelY(topBlock.level) : 11;
    const stageEl = document.getElementById('game-stage'); const rect = this.rectOf(stageEl);
    const ppu1 = Math.min(rect.w / BOARD_W, rect.h / 520);
    const anchor = new THREE.Vector3(lerp(0, topX, zk), lerp(this.rig.focusY, topY, zk), 30);
    const screen = { x: rect.x + rect.w / 2 + lerp(0, topX * ppu1, zk), y: rect.y + rect.h / 2 - lerp(0, (topY - this.rig.focusY) * ppu1, zk) };
    // camera life: gentle sway, pointer parallax, landing kick, earthquake / collapse shake, drunk roll
    const [px, py] = this.parallax(); const sway = this.reduced ? 0 : Math.sin(this.time * 0.23) * 0.05;
    this.rig.yaw = damp(this.rig.yaw, sway + px + (this.reduced ? 0 : 0), 4, dt); this.rig.pitch = damp(this.rig.pitch, 0.1 + py + (this.reduced ? 0 : Math.sin(this.time * 0.17) * 0.012), 4, dt);
    let shake = [0, this.rig.kick.step(dt), 0];
    if (this.rig.shakeAmp > 0.01 && !this.reduced) { this.rig.shakeT += dt; this.rig.shakeAmp *= Math.exp(-dt * 2.8); shake = [shake[0] + Math.sin(this.rig.shakeT * 61) * this.rig.shakeAmp, shake[1] + Math.cos(this.rig.shakeT * 53) * this.rig.shakeAmp * 0.7, 0]; }
    if (effectId === 'earthquake' && !this.reduced && g.activeEffect) { const t = view.Core.earthquakeOffset(g.activeEffect.elapsed, g.activeEffect.remaining, false); shake[0] += t.x * 0.55; shake[1] -= t.y * 0.55; }
    const roll = effectId === 'drunk' && !this.reduced ? Math.sin(this.time * 2.1) * 0.035 + Math.sin(this.time * 3.7) * 0.018 : 0;
    this.placeCamera({ anchor, screen, rect, worldW: BOARD_W, worldH: 520, yaw: this.rig.yaw, pitch: this.rig.pitch, zoom: this.rig.zoom, roll, shake });
    // the plinth shakes with the tower so nothing floats
    this.world.plinth.position.set(tower.shake.x, tower.shake.y, 0);
    this.ruler.setHeight(count); this.ruler.group.position.y = 0;
    const ballot = this.ballotFrom(view); if (ballot) this.world.crowd.setBallot(ballot); else this.world.crowd.clearBallot();
    // post: each sabotage has a feel
    if (!this.reduced) {
      if (effectId === 'slowmo') { this.post.desat = 0.5; this.post.tint = [0.9, 0.97, 1.12]; }
      if (effectId === 'turbo') { this.post.zoomBlur = 0.28; this.post.ca = 0.0014; }
      if (effectId === 'drunk') this.post.wobble = 1;
      if (effectId === 'earthquake') this.post.ca = 0.0022;
    }
    if (tower.rig.spot && effect) { const spot = this.spotPost(tower, tower.rig.spot, rect); if (spot) this.post.spots.push(spot); }
    this.updateWorld(dt, this.rig.focusY, altitude, view, tower);
    this.post.tiltCenter = 0.5; this.post.blur = 5;
  }

  spotPost(tower, spot, rect) {
    const world = tower.root.localToWorld(new THREE.Vector3(spot.x, spot.y, spot.z)); const right = new THREE.Vector3().setFromMatrixColumn(this.camera.matrixWorld, 0).multiplyScalar(spot.radius * tower.root.scale.x);
    const a = world.clone().project(this.camera); const b = world.clone().add(right).project(this.camera);
    const aspect = this.camera.aspect; const r = Math.abs((b.x - a.x) * 0.5) * aspect;
    return { x: a.x * 0.5 + 0.5, y: a.y * 0.5 + 0.5, r, rect: this.uvRect(rect) };
  }

  // The screen rectangle the demo tower fills: its board, from the floor to a little above the stack. The Spotlight sabotage hides
  // exactly this in the home scene (not a fixed column that blacked out the headline), so the veil follows the tower however far
  // the view has been turned.
  heroFieldRect(tower, blocks) {
    const W = this.engine.cssWidth; const H = this.engine.cssHeight; const v = this.fieldCorner || (this.fieldCorner = new THREE.Vector3());
    const top = levelY(blocks + 1) + 24; let x0 = Infinity; let y0 = Infinity; let x1 = -Infinity; let y1 = -Infinity;
    for (const x of [-BOARD_W / 2 - 12, BOARD_W / 2 + 12]) for (const y of [-8, top]) for (const z of [-50, 50]) {
      tower.root.localToWorld(v.set(x, y, z)); v.project(this.camera);
      const sx = (v.x * 0.5 + 0.5) * W; const sy = (0.5 - v.y * 0.5) * H;
      x0 = Math.min(x0, sx); x1 = Math.max(x1, sx); y0 = Math.min(y0, sy); y1 = Math.max(y1, sy);
    }
    x0 = clamp(x0, 0, W); x1 = clamp(x1, 0, W); y0 = clamp(y0, 0, H); y1 = clamp(y1, 0, H);
    return { x: x0, y: y0, w: Math.max(8, x1 - x0), h: Math.max(8, y1 - y0) };
  }

  updateWorld(dt, focusY, altitude, view, tower) {
    this.world.update({ time: this.time, dt, focusY, altitude, dim: 1, camera: this.camera, shadowFocus: { x: 0, y: focusY }, fogDist: this.camDist || 1000 });
  }

  placeIdle(dt, view) {
    const rect = this.rectOf(document.getElementById('game-stage'));
    this.placeCamera({ anchor: new THREE.Vector3(0, 220, 30), screen: { x: rect.x + rect.w / 2, y: rect.y + rect.h / 2 }, rect, worldW: BOARD_W, worldH: 520, pitch: 0.1 });
    this.updateWorld(dt, 220, 0, view);
  }

  // -------------------------------------------------------------------------------------------------------------------
  update_hero(dt, view) {
    const W = this.engine.cssWidth; const H = this.engine.cssHeight; const Core = view.Core;
    const copy = document.querySelector('#title-screen .home-copy'); const bar = document.querySelector('header.topbar');
    const barBottom = bar ? bar.getBoundingClientRect().bottom : 0; const cr = copy ? copy.getBoundingClientRect() : { left: 0, right: 0, top: H, width: 0 };
    let rect;
    if (W >= 900 && cr.right < W * 0.66) rect = { x: cr.right + 12, y: barBottom + 6, w: W - cr.right - 28, h: H - barBottom - 20 };
    else rect = { x: 6, y: barBottom + 2, w: W - 12, h: Math.max(180, Math.min(cr.top - barBottom - 6, H * 0.62)) };
    const layout = rect.w / rect.h > 1.75 ? 'wide' : 'tall';
    if (layout !== this.heroLayout) { this.heroLayout = layout; this.title.build(layout); }
    const hero = this.getTower('hero'); hero.root.visible = true;
    if (this.towers.play) this.towers.play.root.visible = false;
    const director = this.director; if (this.reduced && !director.reducedSet) { director.reducedSet = true; }
    director.update(dt * this.timeScale, this.reduced);
    const state = director.state(Core, this.reduced); hero.sync(state, dt, this.time);
    const effect = state.effect; const key = effect ? effect.id : ''; if (key !== this.lastEffectKey) { this.lastEffectKey = key; }
    const reduced = this.reduced; const p = this.pointer; const o = this.orbit; const hover = this.hover;

    // ---- camera: the default composition (headline above, demo tower and ring below), then wherever the visitor has turned it
    const b = this.title.bounds; const arsenalHalf = 420; const w = Math.max(b.x1 - b.x0, arsenalHalf * 2 + 40); const top = b.y1; const bottom = -175;
    const worldW = w; const worldH = top - bottom; const cx = 0; const cy = (top + bottom) / 2;
    const intro = reduced ? 1 : easeInOutCubic(clamp(this.modeTime / 3.2));
    const floorPitch = Math.asin(clamp((10 - cy) / (this.camDist || 1700), -0.95, 0.95)); // the lowest view that keeps the camera above the floor
    o.setReduced(reduced); o.minPitch = Math.min(0, floorPitch - 0.045); o.update(dt);
    if (!reduced && o.rotated && !this.drag && !o.moving) { this.idleFor += dt; if (this.idleFor > 30) { o.reset(2.4); this.idleFor = 0; } } else if (this.drag || o.moving) this.idleFor = 0;
    // the pointer's own parallax steps aside while the scene is being turned, and comes back as it settles
    this.dragBlend = damp(this.dragBlend, this.drag || o.moving ? 1 : 0, this.drag ? 14 : 2.2, dt);
    const [px, py] = this.parallax(1.4); const par = 1 - this.dragBlend;
    const yaw = (1 - intro) * -0.22 + px * par + (reduced ? 0 : Math.sin(this.time * 0.19) * 0.035) + o.yaw;
    const pitch = lerp(-0.12, 0.085, intro) + py * par + o.pitch;
    const zoom = lerp(0.8, 1, intro) * (reduced ? 1 : 1 + 0.028 * hover.energy);
    const shake = [0, this.rig.kick.step(dt), 0];
    const anchor = this.heroAnchor || (this.heroAnchor = new THREE.Vector3()); anchor.set(cx, cy, -20);
    this.placeCamera({ anchor, screen: { x: rect.x + rect.w / 2, y: rect.y + rect.h / 2 }, rect, worldW: worldW * 1.04, worldH: worldH * 1.04, yaw, pitch, zoom, shake });
    this.world.setViewYaw(o.yaw); this.popups.faceYaw = yaw;

    // ---- the pointer in the scene
    const onScene = p.inside && !p.overUi && !p.touch; // anywhere on the bare page: the grab cursor, the ring's icons
    const inRect = onScene && p.lastX >= rect.x && p.lastX <= rect.x + rect.w && p.lastY >= rect.y && p.lastY <= rect.y + rect.h;
    const frame = inRect ? this.pointerOnScreenPlane(anchor, p.ndc, 0) : null; // its place on a plane through the scene that faces the camera
    let idx = -1;
    if (onScene && !this.drag) { this.raycaster.setFromCamera(p.ndc, this.camera); idx = this.arsenal.pick(this.raycaster); }
    if (idx !== this.heroHover) { this.heroHover = idx; this.arsenal.hover = idx; this.showHoverLabel(idx, yaw); } else if (idx >= 0) this.showHoverLabel(idx, yaw, true);
    this.setCursor(this.drag ? 'grabbing' : idx >= 0 ? 'pointer' : onScene ? 'grab' : '');
    hover.update(dt, { point: frame ? frame.point : null, speed: p.speed, blocked: Boolean(this.drag), reduced });
    this.hoverLife(dt, frame, anchor, yaw, rect);
    const pointer = this.drag ? null : frame;
    this.title.update(dt, this.time, { pointer, pointerSpeed: p.speed, reduced, energy: hover.energy, yaw });
    this.arsenal.update(dt, this.time, reduced, { yaw, pointer, energy: hover.energy });
    // the demo's chat
    const ballot = director.ballot; if (ballot) this.world.crowd.setBallot({ voted: ballot.voted, fractions: ballot.fractions, colors: BALLOT_COLORS[this.theme] }); else this.world.crowd.clearBallot();
    if (effect && effect.id !== this.heroEffect) { this.heroEffect = effect.id; this.world.crowd.cheer(0.8); } else if (!effect) this.heroEffect = '';
    this.ruler.group.visible = false;
    if (this.hud) {
      this.hud.place(rect.x + rect.w - 14, rect.y + rect.h - 12); this.hud.setRotated(o.rotated);
      this.hintAge += dt; if (this.hintAge > 10) this.hud.fade(); // the hint is only there to be noticed: it steps aside by itself (until the first drag, it comes back next visit)
    }
    this.world.plinth.position.set(hero.shake.x, hero.shake.y, 0);
    const altitude = 0.0;
    this.updateWorld(dt, 260, altitude, view, hero);
    const id = effect ? effect.id : '';
    if (!reduced) { if (id === 'slowmo') { this.post.desat = 0.35; this.post.tint = [0.92, 0.98, 1.08]; } if (id === 'turbo') this.post.zoomBlur = 0.25; if (id === 'drunk') this.post.wobble = 0.6; }
    if (hero.rig.spot && effect) { const sp = this.spotPost(hero, hero.rig.spot, this.heroFieldRect(hero, (state.blocks || []).length)); if (sp) this.post.spots.push(sp); }
    // the focus band of the tilt-shift follows the pointer, and the glow swells a little, while it is over the scene
    this.post.tiltCenter = lerp(0.55, clamp((p.ndc.y + 1) / 2, 0.2, 0.85), reduced ? 0 : 0.8 * hover.energy); this.post.blur = 6;
    if (this.engine.bloomPass.enabled) this.post.bloom = this.palette.bloom * (1 + 0.3 * hover.energy);
    this.post.fade = 0;
  }

  // Everything that makes the home scene answer a pointer resting on it (hover.js says how much): a warm light that follows it,
  // a trail of sparkles when it moves, ripples on the floor, the crowd turning to watch and cheering when it arrives.
  hoverLife(dt, frame, anchor, yaw, rect) {
    const hover = this.hover; const e = hover.energy; const reduced = this.reduced; const light = this.cursorLight; const crowd = this.world.crowd;
    const forward = this.tmpForward;
    if (e > 0.003 && forward) {
      light.position.set(hover.x, hover.y, hover.z).addScaledVector(forward, -170);
      light.intensity = e * this.cursorLightPower;
    } else light.intensity = 0;
    if (reduced || !frame) { crowd.setAttention(0, 0, 0, 0); return; }
    const c = Math.cos(this.orbit.yaw); const s = Math.sin(this.orbit.yaw); // into the crowd's own (turned) space
    crowd.setAttention(c * hover.x - s * hover.z, s * hover.x + c * hover.z + 260, e * 0.85, e * (hover.dwell > 1.2 ? 1 : 0.65));
    if (hover.entered) { this.title.wave(frame.point.x); crowd.cheer(0.55); this.groundRipple(1); }
    for (let n = hover.sparks(dt, this.pointer.speed, reduced); n > 0; n -= 1) this.sparkle(frame);
    if (this.pointer.speed > 340 && this.time - this.lastRipple > 0.34) { this.lastRipple = this.time; this.groundRipple(0.7); }
  }

  sparkle(frame) {
    const colors = this.sparkleColors; const c = colors[Math.floor(Math.random() * colors.length) % colors.length]; const f = this.tmpForward; const k = this.glintBoost;
    const a = (Math.random() - 0.5) * 40; const b = (Math.random() - 0.5) * 40; const r = frame.right; const u = frame.up;
    this.fx.glints.emit({
      pos: [frame.point.x + r.x * a + u.x * b - f.x * 150, frame.point.y + r.y * a + u.y * b - f.y * 150, frame.point.z + r.z * a + u.z * b - f.z * 150],
      vel: [(Math.random() - 0.5) * 56, 26 + Math.random() * 50, (Math.random() - 0.5) * 30], color: [c[0] * k, c[1] * k, c[2] * k], alpha: 1,
      size: (this.theme === 'paper' ? 12 : 9) + Math.random() * 12, life: 0.7 + Math.random() * 0.6, drag: 1.5, gravity: -38
    });
  }

  // A ring spreads over the floor from where the pointer's ray lands.
  groundRipple(strength = 1) {
    this.raycaster.setFromCamera(this.pointer.ndc, this.camera);
    const hit = this.raycaster.ray.intersectPlane(this.groundPlane, this.tmpGround || (this.tmpGround = new THREE.Vector3()));
    if (!hit || Math.hypot(hit.x, hit.z) > 1000) return;
    this.fx.pulses.pulse({ pos: [hit.x, -58, hit.z], color: this.theme === 'sunset' ? '#FF4FD8' : this.palette.amber, radius: 90 + 110 * strength, life: 1.05, from: 0.08, strength: 1.1 });
  }
  // The name over the icon under the pointer. It sits towards the camera from the icon, wherever the view has been turned to, and
  // follows the icon as the ring turns (follow = true only moves it).
  showHoverLabel(index, yaw = 0, follow = false) {
    if (!follow) this.popups.hide('hover');
    if (index < 0) return; const item = this.arsenal.items[index]; const pos = item.holder.position;
    const position = [pos.x + Math.sin(yaw) * 60, pos.y + 92, pos.z + Math.cos(yaw) * 60];
    if (follow) { const label = this.popups.items.find(i => i.key === 'hover' && !i.dying); if (label) label.base = position; return; }
    const name = String(item.name || item.id).toUpperCase();
    this.popups.show({ key: 'hover', text: name, position, size: clamp(300 / (name.length * 0.72), 14, 30), depth: 8, color: this.theme === 'paper' ? this.palette.ink : this.palette.cream, glow: this.theme === 'paper' ? 0.15 : 0.7, style: 'hold', life: 1 });
  }

  // -------------------------------------------------------------------------------------------------------------------
  update_arena(dt, view) {
    const g = view.game; if (!g) { this.placeIdle(dt, view); return; }
    const Core = view.Core; const players = g.remotePlayers || []; const n = Math.max(1, players.length);
    while (this.arena.length < n) { const t = new Tower(this.kit, this.fx, { scale: 1 }); t.root.visible = true; this.scene.add(t.root); this.wireTower(t, 'arena'); this.arena.push(t); }
    this.arena.forEach((t, i) => { t.root.visible = i < n; });
    const rect = this.rectOf(document.getElementById('game-stage'));
    const colW = 720 / n; const maxHeight = Math.max(0, ...players.map(p => Number(p.height) || (p.blocks ? p.blocks.length - 1 : 0)));
    const scale = clamp(Math.min(colW / 400, 440 / ((maxHeight + 2) * 22)), 0.06, 0.9);
    const effects = g.remoteEffects || [];
    const effectKey = effects.map(e => `${e.id}:${e.targetPlayerId || 'all'}`).join(',');
    if (effectKey !== this.lastArenaKey) {
      const fresh = effects.find(e => !(this.lastArenaKey || '').includes(`${e.id}:${e.targetPlayerId || 'all'}`));
      if (fresh && this.mode === 'arena') {
        const sab = window.SabotageStack && window.SabotageStack.sabotages.find(item => item.id === fresh.id);
        if (sab) { const name = sab.name.toUpperCase(); this.popups.show({ text: name, position: [0, 330, 130], size: clamp(520 / (name.length * 0.7), 18, 46), depth: 12, color: this.palette.cream, glow: 0.7, style: 'slam', life: 1.9, tilt: 0.05 }); this.world.crowd.cheer(0.9); }
      }
      this.lastArenaKey = effectKey;
    }
    players.forEach((player, i) => {
      const tower = this.arena[i]; const x = (i - (n - 1) / 2) * colW;
      tower.root.position.set(x, 0, 0); tower.root.scale.setScalar(scale);
      const effect = effects.find(item => item.targetPlayerId === player.playerId || item.targetPlayerId == null) || null;
      const blocks = player.blocks && player.blocks.length ? player.blocks : [Core.makeBase()];
      const live = !player.ended && !player.collapsed && player.moving;
      tower.sync({ id: `arena:${g.roundNumber}:${player.playerId || i}`, blocks, fallen: player.fallen || [], moving: live ? player.moving : null, effect, helpers: Core, phase: 'playing', collapsed: Boolean(player.collapsed), reduced: this.reduced, ended: Boolean(player.ended) }, dt, this.time);
      this.arenaLabel(i, player, x, scale, maxHeight);
      if (tower.rig.spot && effect) {
        const colRect = { x: rect.x + rect.w * (i / n), y: rect.y + 60 * (rect.h / 520), w: rect.w / n, h: rect.h - 66 * (rect.h / 520) };
        const sp = this.spotPost(tower, tower.rig.spot, colRect); if (sp && this.post.spots.length < 6) this.post.spots.push(sp);
      }
    });
    for (let i = n; i < this.arena.length; i += 1) this.arena[i].root.visible = false;
    for (let i = n; i < this.labels.length; i += 1) this.labels[i].mesh.visible = false;
    const focusY = 226; const [px, py] = this.parallax(0.7);
    this.placeCamera({ anchor: new THREE.Vector3(0, focusY, 30), screen: { x: rect.x + rect.w / 2, y: rect.y + rect.h / 2 }, rect, worldW: 720, worldH: 520, yaw: px * 0.8 + (this.reduced ? 0 : Math.sin(this.time * 0.2) * 0.04), pitch: 0.12 + py });
    const topCrowd = (maxHeight + 1) * 22 * scale; this.ruler.group.visible = false;
    this.world.crowd.clearBallot(); const ballot = this.ballotFrom(view); if (ballot) this.world.crowd.setBallot(ballot);
    this.updateWorld(dt, focusY, 0, view);
    this.post.tiltCenter = 0.5; this.post.blur = 4;
  }

  arenaLabel(i, player, x, scale, maxHeight, opts = {}) {
    let label = this.labels[i];
    const name = String(player.name || 'Player').slice(0, 12); const height = Number(player.height) || 0;
    const status = opts.status || (player.disconnected ? 'OFFLINE' : player.collapsed ? 'COLLAPSED' : player.ended ? 'FINISHED' : `${height} HIGH`);
    const text = `${name}|${status}|${player.color}`;
    if (!label) {
      const canvas = document.createElement('canvas'); canvas.width = 256; canvas.height = 96;
      const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; texture.anisotropy = 4;
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(112, 42), new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false }));
      label = { mesh, canvas, texture, text: '' }; this.labels[i] = label; this.scene.add(mesh);
    }
    label.mesh.visible = true;
    if (label.text !== text) {
      label.text = text; const ctx = label.canvas.getContext('2d'); ctx.clearRect(0, 0, 256, 96); const p = this.palette;
      ctx.fillStyle = this.theme === 'paper' ? 'rgba(244,237,223,0.92)' : 'rgba(6,10,36,0.9)';
      if (this.theme === 'sunset') ctx.fillRect(4, 4, 248, 88); else { ctx.beginPath(); ctx.roundRect(4, 4, 248, 88, 22); ctx.fill(); }
      ctx.strokeStyle = themedBlockColor(this.theme, player.color || '#E3A33B'); ctx.lineWidth = 6; ctx.stroke();
      ctx.fillStyle = themedBlockColor(this.theme, player.color || '#E3A33B'); ctx.beginPath(); ctx.arc(34, 34, 12, 0, TAU); ctx.fill();
      ctx.fillStyle = this.theme === 'paper' ? '#2A2520' : '#ffffff'; ctx.textBaseline = 'middle';
      ctx.font = this.theme === 'sunset' ? '34px VT323, monospace' : this.theme === 'primetime' ? '700 34px "Barlow Condensed", sans-serif' : '700 30px "DM Sans", sans-serif';
      ctx.textAlign = 'left'; ctx.fillText(name, 58, 34, 180);
      ctx.fillStyle = this.theme === 'paper' ? '#6E6558' : '#C9D6FF'; ctx.font = this.theme === 'sunset' ? '28px VT323, monospace' : this.theme === 'primetime' ? '500 26px "Barlow Condensed", sans-serif' : '600 24px "DM Sans", sans-serif';
      ctx.textAlign = 'center'; ctx.fillText(status, 128, 72, 220); label.texture.needsUpdate = true;
    }
    const colW = opts.colW || 720 / Math.max(1, this.view.game.remotePlayers.length);
    label.mesh.scale.setScalar(clamp(colW / 150, 0.5, 1.15)); label.mesh.position.set(x, opts.y == null ? 470 : opts.y, 120);
  }

  // -------------------------------------------------------------------------------------------------------------------
  update_results(dt, view) {
    const data = view.results; const tower = this.getTower('play'); tower.root.visible = true;
    const blocks = data.blocks || []; const collapsedLevels = (data.collapsedBlocks || []).map(b => b.level);
    const start = collapsedLevels.length ? Math.min(...collapsedLevels) : null;
    tower.sync({ id: this.lastPlayKey || 'results', blocks, fallen: data.fallen || [], moving: null, effect: null, helpers: view.Core, phase: 'ended', collapsed: true, collapseStartLevel: start, reduced: this.reduced, ended: true }, dt, this.time);
    this.resultsT = (this.resultsT || 0) + dt;
    const frame = document.querySelector('#solo-result-layout .results-frame'); const rect = this.rectOf(frame, this.rectOf(document.getElementById('results-canvas')));
    const standing = start != null ? start : blocks.length; const topY = standing * 22 + 40;
    const worldH = Math.max(520, topY + 220); const focusY = worldH / 2 - 50; this.rig.focusY = damp(this.rig.focusY, focusY, 3, dt);
    const reveal = this.reduced ? 1 : easeInOutCubic(clamp(this.resultsT / 1.8));
    const [px, py] = this.parallax(1.4);
    const yaw = (1 - reveal) * 0.0 + Math.sin(this.time * 0.22) * 0.14 + px; const pitch = lerp(0.04, 0.13, reveal) + py;
    this.placeCamera({ anchor: new THREE.Vector3(0, this.rig.focusY, 30), screen: { x: rect.x + rect.w / 2, y: rect.y + rect.h / 2 }, rect, worldW: 400, worldH, yaw, pitch, zoom: lerp(1.08, 1, reveal) });
    // the height, as a monument
    if (!this.popups.items.find(i => i.key === 'height') && this.resultsT > 0.4) {
      this.popups.show({ key: 'height', text: String(data.height), position: [0, standing * 22 + 92, 80], size: 96, depth: 30, color: this.palette.amber, glow: 0.9, style: 'hold', life: 1 });
      if (data.newBest) this.popups.show({ key: 'best', text: 'NEW BEST', position: [0, standing * 22 + 168, 80], size: 22, depth: 8, color: this.palette.vermilion, glow: 1, style: 'hold', life: 1, tilt: -0.05 });
      if (!this.reduced && (data.newBest || data.height >= 15)) this.fx.confetti.burst({ pos: [0, standing * 22 + 140, 40], count: 130, speed: 360, colors: this.confettiColors(), size: 7.5, life: 4.2, cone: 1.4 });
      this.world.crowd.cheer(data.newBest ? 2.2 : 1);
    }
    this.ruler.setHeight(blocks.length); this.world.plinth.position.set(0, 0, 0); this.world.crowd.clearBallot();
    this.updateWorld(dt, this.rig.focusY, clamp(this.rig.focusY / 2200), view, tower);
    this.post.tiltCenter = 0.5; this.post.blur = 5;
  }

  // Multiplayer results: the final towers climb a podium beside the cards, block by block, while the room celebrates.
  startPodium(payload) {
    this.podiumFor = payload; this.podiumId = (this.podiumId || 0) + 1; this.podiumClock = 0; this.podiumFinale = false; this.podiumCannon = 0; this.podiumSide = 1;
    this.podium = podiumEntries(payload);
    for (const entry of this.podium) { entry.shown = 0; entry.fallenShown = -1; entry.blockView = []; entry.fallenView = []; }
    this.fx.confetti.floor = -64;
  }

  update_celebrate(dt, view) {
    const W = this.engine.cssWidth; const H = this.engine.cssHeight; const Core = view.Core;
    const payload = (view.mp && view.mp.resultPayload) || null;
    if (!this.podium || payload !== this.podiumFor) this.startPodium(payload);
    const entries = this.podium; const n = entries.length;
    while (this.arena.length < n) { const t = new Tower(this.kit, this.fx, { scale: 1 }); t.root.visible = true; this.scene.add(t.root); this.wireTower(t, 'arena'); this.arena.push(t); }
    this.arena.forEach((t, i) => { t.root.visible = i < n; });
    for (let i = n; i < this.labels.length; i += 1) this.labels[i].mesh.visible = false;
    this.podiumClock += dt;
    const maxBlocks = Math.max(1, ...entries.map(e => e.blocks.length));
    const { worldW, colW, scale, maxHeight } = podiumMetrics(n, maxBlocks);
    let finished = true;
    const labelScale = clamp(colW / 150, 0.5, 1.15);
    entries.forEach((entry, i) => {
      const total = entry.blocks.length;
      const target = revealCount(this.podiumClock, total, { reduced: this.reduced });
      if (target > entry.shown) { entry.shown = target; entry.blockView = entry.blocks.slice(0, target); }
      if (entry.shown < total) finished = false;
      const count = revealedFallen(entry.fallen, entry.shown, total);
      if (count !== entry.fallenShown) { entry.fallenShown = count; entry.fallenView = entry.fallen.slice(0, count); }
      const tower = this.arena[i]; const x = entry.slot * colW;
      tower.root.position.set(x, 0, 0); tower.root.scale.setScalar(scale);
      tower.sync({ id: `podium:${this.podiumId}:${entry.key}`, blocks: entry.blockView.length ? entry.blockView : [Core.makeBase()], fallen: entry.fallenView, moving: null, effect: null, helpers: Core, phase: 'ended', collapsed: false, reduced: this.reduced, ended: true, teamPlacers: Boolean(entry.team) }, dt, this.time);
      if (entry.team) { if (this.labels[i]) this.labels[i].mesh.visible = false; return; }
      const done = entry.shown >= total;
      const status = done ? `${entry.winner ? 'WINNER · ' : ''}${entry.height}${entry.winner ? '' : ' HIGH'}` : `${Math.max(0, entry.shown - 1)} HIGH`;
      this.arenaLabel(i, { name: entry.name, color: entry.color }, x, scale, maxHeight, { status, colW, y: Math.max(1, entry.shown) * 22 * scale + 26 + 24 * labelScale });
    });
    // the plinth stretches to fit the line-up
    const plinth = this.world.plinth.scale; const stretch = n <= 1 ? 1 : n === 2 ? 1.7 : 2.3; const squash = n <= 1 ? 1 : 0.62;
    this.world.plinth.scale.set(damp(plinth.x, stretch, 4, dt), 1, damp(plinth.z, squash, 4, dt)); this.world.plinth.position.set(0, 0, 0);
    // finale: cheer, a burst over each winner, the headline in 3D, then side cannons until the host moves on
    const topY = (maxHeight + 1) * 22 * scale;
    if (finished && n > 0 && !this.podiumFinale) {
      this.podiumFinale = true; this.podiumCannon = 0.5; this.world.crowd.cheer(2.4);
      const winners = entries.filter(e => e.winner); const gold = this.palette.amber;
      winners.forEach(entry => {
        const x = entry.slot * colW; const top = entry.blocks.length * 22 * scale;
        this.fx.pulses.pulse({ pos: [x, 2, 20], color: gold, radius: Math.max(160, 330 * scale), life: 1.3, from: 0.2, strength: 1.5 });
        if (!this.reduced) this.fx.confetti.burst({ pos: [x, top + 10, 40], count: 150, speed: 400, colors: this.confettiColors(), size: 11, life: 4.6, cone: 1.5 });
      });
      const clean = text => [...String(text).toUpperCase()].filter(ch => hasGlyphs(this.palette.fontKey, ch)).join('').trim();
      const headline = headlineFor(entries, clean);
      this.popups.show({ text: headline, position: [0, topY + 96, 130], size: clamp(560 / (headline.length * 0.72), 18, 46), depth: 12, color: gold, glow: 0.9, style: 'slam', life: 3.6, tilt: -0.04 });
    }
    if (this.podiumFinale && !this.reduced) {
      this.podiumCannon -= dt;
      if (this.podiumCannon <= 0) {
        this.podiumCannon = 2.2; this.podiumSide = -this.podiumSide; const side = this.podiumSide;
        this.fx.confetti.burst({ pos: [side * (worldW / 2 + 30), 0, 40], count: 64, speed: 660, colors: this.confettiColors(), size: 11, life: 5.2, cone: 0.4, direction: [-side * 0.5, 1, 0] });
        this.world.crowd.cheer(0.7);
      }
    }
    // camera: the podium takes the space the cards leave free (left of the panel on wide screens, above it on narrow ones)
    const panel = this.rectOf(document.getElementById('multiplayer-results'), { x: W * 0.5, y: H * 0.4, w: W * 0.5, h: H * 0.5 });
    const heading = this.rectOf(document.querySelector('#results-screen .screen-heading'), { x: 0, y: 60, w: W, h: 60 });
    const wide = panel.x > W * 0.4;
    const free = wide ? { x: 12, y: heading.y + heading.h + 8, w: Math.max(240, panel.x - 36), h: Math.max(240, H - heading.y - heading.h - 24) }
      : { x: 8, y: heading.y + heading.h + 6, w: W - 16, h: Math.max(200, panel.y - heading.y - heading.h - 14) };
    const focusY = topY * 0.5 + 40; const worldH = topY + 220; const [px, py] = this.parallax(1.2);
    this.placeCamera({ anchor: new THREE.Vector3(0, focusY, 30), screen: { x: free.x + free.w / 2, y: free.y + free.h * 0.47 }, rect: free, worldW: worldW + 60, worldH, yaw: px + (this.reduced ? 0 : Math.sin(this.time * 0.18) * 0.1), pitch: 0.1 + py });
    this.ruler.group.visible = false; this.world.crowd.clearBallot(); this.updateWorld(dt, focusY, 0.04, view); this.post.tiltCenter = 0.5; this.post.blur = 4;
  }

  // The lobby: one block of every colour per player on the plinth, the room code as a giant 3D sign.
  update_lobby(dt, view) {
    const room = view.mp.room; const players = (room && room.players) || []; const tower = this.getTower('lobby'); tower.root.visible = true;
    const blocks = [view.Core.makeBase()];
    players.forEach((p, i) => { const w = Math.max(60, 190 - i * 18); const c = (360 - w) / 2 + ((i % 2) ? 8 : -8); blocks.push({ left: c, right: c + w, level: i + 1, color: p.color || '#E3A33B', perfect: false, placer: p.name || 'Player' }); });
    tower.sync({ id: `lobby:${view.mp.code}`, blocks, fallen: [], moving: null, effect: null, helpers: view.Core, phase: 'lobby', collapsed: false, reduced: this.reduced, teamPlacers: true }, dt, this.time);
    const rect = this.rectOf(document.querySelector('#room-screen .room-lobby-layout'), { x: 0, y: 0, w: this.engine.cssWidth, h: this.engine.cssHeight });
    const W = this.engine.cssWidth; const H = this.engine.cssHeight; const [px, py] = this.parallax(1.3);
    const free = W >= 900 ? { x: W * 0.36, y: 60, w: W * 0.62, h: H - 80 } : { x: 8, y: 54, w: W - 16, h: H * 0.5 };
    this.placeCamera({ anchor: new THREE.Vector3(0, 230, 0), screen: { x: free.x + free.w / 2, y: free.y + free.h / 2 }, rect: free, worldW: 620, worldH: 640, yaw: px + Math.sin(this.time * 0.2) * 0.1, pitch: 0.1 + py });
    this.world.plinth.position.set(0, 0, 0); this.ruler.group.visible = false; this.world.crowd.clearBallot();
    this.updateWorld(dt, 230, 0, view, tower);
    this.post.tiltCenter = 0.5; this.post.blur = 5;
  }

  dispose() {
    for (const [name, fn] of [['pointermove', this.onPointerMove], ['pointerdown', this.onPointerDown], ['pointerup', this.onPointerUp], ['pointercancel', this.onPointerCancel], ['blur', this.onBlur], ['contextmenu', this.onContextMenu], ['dblclick', this.onDoubleClick], ['keydown', this.onKeyDown]]) window.removeEventListener(name, fn);
    document.documentElement.removeEventListener('pointerleave', this.onPointerLeave);
    this.setCursor(''); this.endDrag(true); if (this.hud) { this.hud.dispose(); this.hud = null; }
    document.documentElement.classList.remove('orbiting');
    this.scene.remove(this.cursorLight); this.cursorLight.dispose();
    this.engine.dispose();
  }
}
