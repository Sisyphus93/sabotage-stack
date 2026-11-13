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
import { Arsenal } from './hero.js';
import { TitleStack } from './title-stack.js';
import { TitleProps } from './title-props.js';
import { BrickText } from './brick-text.js';
import { VoxelIcons, dwellSpin } from './icon-voxel.js';
import { VoteCandidates } from './candidates.js';
import { FloorMirror } from './reflection.js';
import { flightFor, blendSpec } from './flight.js';
import { TitleDirector, titlePose, captionFor, TITLE_EFFECT_IDS } from './title-effects.js';
import { normalizeTheme, paletteFor, BALLOT_COLORS, themedBlockColor } from './palette.js';
import { buildIcon, ICON_IDS } from './icons3d.js';
import { hasGlyphs } from './text3d.js';
import { OrbitController } from './orbit.js';
import { ZoomController } from './view-zoom.js';
import { HoverField, offsetFromPointer } from './hover.js';
import { createOrbitHud, ZOOM_STEP } from './orbit-hud.js';
import { Totems, totemSlot, totemHeight } from './totems.js';
import { buildCrown, crownPose } from './crown.js';
import { podiumEntries, podiumMetrics, revealCount, revealedFallen, headlineFor } from './podium.js';
import { clamp, damp, lerp, smoothstep, easeInOutCubic, easeOutCubic, easeOutBack, TAU, rng, Spring } from './util.js';

const BOARD_W = 360;
const EMBLEM_SCALE = 2.2; // (the Sunset pixel pass swallows detail: the sculpture has to be big)
const EMBLEM_X = BOARD_W / 2 + 118; // the running sabotage's emblem floats beside the tower, outside the lane: on a phone that is off the screen
const DIGITS_X = -(BOARD_W / 2) - 116; // and your height stands as block digits on the other side
const DUST = [0.82, 0.74, 0.6];
// Things the pointer must leave alone: controls, and the page's glass panels (their text can be selected, their buttons pressed).
const UI_SELECTOR = 'button, a, select, input, textarea, label, dialog, summary, [role="button"]:not(canvas)'; // (the game's canvas is a role=button for assistive tech, but it is the scene)
// Controls that read the arrow keys, Home and the digits themselves keep them: a text field, a select, a slider, a radio group, a menu, a dialog. A button or a link does not, so one that
// happens to hold the focus (the page focuses the Drop button in a round and the main action of each results screen) must not take the view's keys away.
const KEY_OWNERS = 'input, textarea, select, dialog, video, audio, [contenteditable]:not([contenteditable="false"]), [role="textbox"], [role="slider"], [role="spinbutton"], [role="radio"], [role="tab"], [role="listbox"], [role="option"], [role="combobox"], [role="menu"], [role="menuitem"], [role="menuitemradio"], [role="menuitemcheckbox"], [role="tree"], [role="treeitem"], [role="grid"], [role="gridcell"]';
// The results, podium and lobby controls sit in a corner next to the page's footer note: their hint is short, so it never runs over the note's words.
const SCENE_HINT = { mouse: '<span class="orbit-hint-full"><b>Drag</b> to turn, <b>scroll</b> to zoom</span><span class="orbit-hint-short"><b>Drag</b> to turn, <b>scroll</b> to zoom</span>' };
const PANEL_SELECTOR = '.side-card, .play-card, .result-info, .multiplayer-results, .preview-card, .home-copy, .home-bottom, .topbar, .footer-note, .orbit-hud';
const STAGE_SELECTOR = '#game-stage'; // the play field sits inside a panel (.play-card) but is itself part of the scene
const PLAY_HINT_KEY = 'sabotage-stack-play-view-hint-v1';
const FLOOR_CLEARANCE = 14; // the camera never comes lower than this above the plinth, however far the visitor turns it down
const HOVER_LOOK = {
  paper: { light: '#FFD9A0', power: 52000, sparkles: ['#E3A33B', '#2F8478', '#D5472F', '#FFF1D0', '#C96F8A'] },
  sunset: { light: '#FF6BE0', power: 76000, sparkles: ['#FF4FD8', '#2EE6D6', '#FFC53D', '#B983FF'] },
  primetime: { light: '#CFE0FF', power: 64000, sparkles: ['#FFC83D', '#FFFFFF', '#35D0E8', '#FF7FA8'] }
};
const tmpTitle = new THREE.Vector3();
const closest = (target, selector) => Boolean(target && target.closest && target.closest(selector));
// Chrome: what the pointer must leave alone (controls, the page's glass panels), as opposed to the scene itself
const chromeAt = target => closest(target, UI_SELECTOR) || (closest(target, PANEL_SELECTOR) && !closest(target, STAGE_SELECTOR));
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
    this.sinking = new Map(); this.flight = null; this.camSpec = null; this.plinthGoal = null; this.lastDt = 0.016;
    this.heroSeen = false; this.holdMenu = false; this.heroHover = -1; this.heroEffectN = 0; this.caption = null; this.captionKey = '';
    // home view: turning the scene (orbit.js), how awake it is under the pointer (hover.js) and the on-screen controls
    this.orbit = new OrbitController(); this.dolly = new ZoomController(); this.hover = new HoverField(); this.drag = null; this.dragBlend = 0; this.cursor = '';
    // the view the visitor made (turned, zoomed) is added on top of each scene's own camera (userView); facing = the yaw the labels, digits and plates turn by to keep facing it
    this.facing = 0; this.playHud = null; this.playHintAge = 0; this.lastRightTap = null;
    this.hud = null; this.resultsHud = null; this.resultsHintAge = 0; this.lobbyHud = null; this.lobbyHintAge = 0; this.hintAge = 0; this.idleFor = 0; this.contextGuardUntil = 0; this.pointerFrame = null; this.lastRipple = 0; this.cameraRay = new THREE.Vector3();
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
      if (!this.canOrbit()) return;
      // a right-drag that began on the scene owns the menu wherever it is released (Windows raises it on mouse-up, over whatever is there)
      const turning = (this.drag && this.drag.button === 2) || performance.now() < this.contextGuardUntil;
      if (turning || !chromeAt(e.target)) e.preventDefault();
    });
    // (a double click is the game's own two drops, so only the scenes where the left button is free reset on it - home, results, the lobby, the podium and the host's arena; the game resets on a double right click)
    window.addEventListener('dblclick', this.onDoubleClick = e => { if (this.mode !== 'play' && this.canOrbit() && !chromeAt(e.target)) this.resetView(); });
    window.addEventListener('wheel', this.onWheel = e => this.handleWheel(e), { passive: false });
    window.addEventListener('keydown', this.onKeyDown = e => this.handleKey(e));
    this.applyTier(this.engine.tier);
    // opening the link on the title screen: the menu is held back until SABOTAGE STACK has rained down (index.js adds has-3d in the same task)
    if (view.screen === 'title' && !view.reduced) { this.holdMenu = true; document.documentElement.dataset.intro = 'hold'; }
  }

  applyTier(tier) {
    this.fx.sparks.density = tier.particles; this.fx.glints.density = tier.particles; this.fx.confetti.density = tier.particles;
    if (this.mirror) this.mirror.setQuality(tier.reflect, this.engine.width, this.engine.height);
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
    if (this.mirror) { this.mirror.dispose(); this.mirror = null; }
    this.mirror = new FloorMirror(theme, this.palette, { hide: [this.world.sky.mesh, this.world.crowd.group, this.world.ground, this.world.motes, this.world.decor.group] }); this.world.plinth.add(this.mirror.mesh);
    this.scene.add(this.world.root); this.scene.fog = this.world.fog; this.scene.environment = this.world.envTexture;
    this.scene.environmentIntensity = theme === 'paper' ? 0.7 : 0.85; this.scene.background = null;
    if (this.popups) { this.scene.remove(this.popups.group); this.popups.clear(); }
    this.popups = new Popups(theme, this.palette); this.scene.add(this.popups.group);
    if (this.ruler) { this.scene.remove(this.ruler.group); this.ruler.dispose(); }
    this.ruler = new Ruler(theme, this.palette); this.scene.add(this.ruler.group);
    if (this.bricks) { this.scene.remove(this.bricks.group); this.bricks.destroy(); }
    this.bricks = new BrickText(theme, this.palette); this.scene.add(this.bricks.group); this.heightShown = -1;
    if (this.voxel) this.voxel.dispose();
    this.voxel = new VoxelIcons(document, theme, this.palette); this.voxel.prime([...ICON_IDS, 'empty']);
    if (this.candidates) { this.scene.remove(this.candidates.group); this.candidates.dispose(); }
    this.candidates = new VoteCandidates(theme, this.palette, BALLOT_COLORS[theme] || BALLOT_COLORS.paper, { makeIcon: id => this.makeEmblem(id), nameOf: id => this.sabotageName(id) }); this.scene.add(this.candidates.group);
    if (this.totems) { this.scene.remove(this.totems.group); this.totems.dispose(); }
    this.totems = new Totems(theme, this.palette); this.scene.add(this.totems.group);
    if (this.crown) { this.scene.remove(this.crown); this.crown.userData.dispose(); }
    this.crown = buildCrown(theme); this.crown.visible = false; this.scene.add(this.crown); this.lastCrownSpark = 0;
    if (this.titleProps) { this.scene.remove(this.titleProps.group); this.titleProps.dispose(); }
    this.titleProps = new TitleProps(theme, this.palette); this.scene.add(this.titleProps.group);
    if (this.title) { this.scene.remove(this.title.group); this.title.dispose(); }
    this.title = new TitleStack(theme, this.palette, this.fx); this.scene.add(this.title.group);
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
      this.waveDir = -(this.waveDir || 1); this.world.crowd.wave(this.waveDir, { gap: this.mode === 'hero' ? 9 : 3.2 });
      if (name === 'arena') return;
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

  // What the crowd is watching, in world space. The galleries turn with an orbited camera (see setViewYaw), so the point is
  // carried into their frame before the googly eyes are aimed at it (the +90 puts it a little towards the viewer, where the action is).
  watch(x, y, z = 0, amount = 1, yaw = 0) {
    const c = Math.cos(yaw); const s = Math.sin(yaw);
    this.world.crowd.setGaze(c * x - s * z, y, s * x + c * z + 90, amount);
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
    p.overUi = chromeAt(event.target);
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

  // a visitor who does not want to wait: any press or key speeds the title's build up (and so brings the menu in sooner)
  rushIntro() { if (this.holdMenu && this.title && this.title.mesh && !this.title.complete) this.title.speed = Math.max(this.title.speed, 3.4); }

  handleDown(event) {
    this.rushIntro(); this.handlePointer(event); this.idleFor = 0;
    if (!this.canOrbit(event.button) || this.drag || !event.isPrimary) return;
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
    if (d.moved) { this.usedView(); return; }
    if (!cancelled && event && d.button === 0 && event.timeStamp - d.t < 600) this.handleClick(event);
    else if (!cancelled && event && d.button === 2) this.handleRightTap(event);
  }

  // Two quick right clicks on the same spot: back to the default view (in the game the left button is DROP, so a double click cannot be the reset there).
  handleRightTap(event) {
    const last = this.lastRightTap; const t = event.timeStamp;
    if (last && t - last.t < 420 && Math.hypot(event.clientX - last.x, event.clientY - last.y) < 12) { this.lastRightTap = null; this.resetView(); } else this.lastRightTap = { t, x: event.clientX, y: event.clientY };
  }

  // The wheel zooms the scene it is over. Panels and controls keep it (they scroll the page), and so does the browser's own zoom (Ctrl + wheel, a trackpad
  // pinch). Wheeling on against the zoom limit hands the wheel back to the page after a pause (view-zoom.js), so the page can still be scrolled from here.
  handleWheel(event) {
    if (event.defaultPrevented || event.ctrlKey || event.metaKey || !this.canOrbit()) return;
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || chromeAt(event.target) || document.querySelector('dialog[open]')) return;
    this.dolly.setReduced(this.reduced);
    if (this.dolly.wheel(event.deltaY, event.deltaMode, event.timeStamp / 1000)) { event.preventDefault(); this.usedView(); }
  }

  // The visitor has found the view controls: the hints can go (and stay gone), and the scene's idle timer starts over.
  usedView() { this.idleFor = 0; const hud = this.sceneHud(); if (hud) hud.quiet(); }
  // the on-screen controls of the scene on show: the home scene, the results (and the podium), the lobby, and the game (and its arena) each have their own
  sceneHud() { switch (this.mode) { case 'hero': return this.hud; case 'results': case 'celebrate': return this.resultsHud; case 'lobby': return this.lobbyHud; default: return this.playHud; } }

  // Back to the default view: turned and zoomed alike.
  resetView(duration = 0.9) { this.orbit.reset(duration); this.dolly.reset(duration); this.idleFor = 0; }

  handleClick(event) {
    if (this.mode !== 'hero' || !this.arsenal) return;
    if (closest(event.target, UI_SELECTOR)) return;
    this.handlePointer(event);
    this.raycaster.setFromCamera(this.pointer.ndc, this.camera);
    const idx = this.arsenal.pick(this.raycaster);
    if (idx >= 0) { this.directorForce(this.arsenal.items[idx].id); if (!this.reduced) this.title.wave(this.arsenal.items[idx].holder.position.x); return; }
    // anywhere on the title: the bricks under the pointer are knocked out (and fall back in)
    if (this.title.complete && this.title.poke(this.raycaster) > 0) { this.world.crowd.cheer(0.5); if (!this.reduced) this.title.wave(this.pointerFrame ? this.pointerFrame.point.x : 0, 1900); }
  }

  // The arrow keys turn the scene, + and - zoom it, 0 or Home reset it, wherever the focus is except on a control that reads those keys itself (KEY_OWNERS: a select,
  // a text field...). The Drop button, a results screen's main action and the game's canvas (Space, Enter and 1 / 2 / 3 are the page's) do not, so they pass them on.
  handleKey(event) {
    this.rushIntro();
    if (!this.canOrbit() || event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) return;
    if (closest(event.target, KEY_OWNERS)) return;
    const step = event.shiftKey ? Math.PI / 2 : Math.PI / 8; const now = event.timeStamp / 1000;
    if (event.key === 'ArrowLeft') { this.orbit.rotateBy(-step, 0.35); this.usedView(); event.preventDefault(); }
    else if (event.key === 'ArrowRight') { this.orbit.rotateBy(step, 0.35); this.usedView(); event.preventDefault(); }
    else if (event.key === 'Home' || event.key === '0') { this.resetView(); event.preventDefault(); }
    else if (event.key === '+' || event.key === '=') { this.dolly.setReduced(this.reduced); this.dolly.zoomBy(ZOOM_STEP, now); this.usedView(); event.preventDefault(); }
    else if (event.key === '-' || event.key === '_') { this.dolly.setReduced(this.reduced); this.dolly.zoomBy(1 / ZOOM_STEP, now); this.usedView(); event.preventDefault(); }
  }

  // The scenes a visitor may turn all the way round and zoom: the home scene, the lobby, the game (and the arena that watches it), the solo results (the score
  // sculpture) and the podium. All but the game turn with either mouse button; the game keeps the left button for itself (DROP), so there only the right one turns the view.
  canOrbit(button = 2) {
    switch (this.mode) {
      case 'hero': case 'results': case 'arena': case 'lobby': case 'celebrate': return true; // (the host's arena, the lobby and the podium have no use for the left button)
      case 'play': return button === 2;
      default: return false;
    }
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
  // ---- the title screen: chat sabotages the title (see title-effects.js); a click on the ring, or the dock's key, picks which
  directorForce(id) { if (this.director && this.title.complete) this.director.force(id); }
  // a random sabotage, other than the one running
  triggerSabotage() {
    const d = this.director; if (this.mode !== 'hero' || !d) return '';
    const current = d.effect ? d.effect.id : ''; const pool = TITLE_EFFECT_IDS.filter(id => id !== current && id !== d.forced && (!this.reduced || d.pool().includes(id)));
    if (!pool.length) return ''; const id = pool[Math.floor(Math.random() * pool.length)]; this.directorForce(id); this.idleFor = 0; return id;
  }

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
    const dt = clamp((ts - (this.last || ts)) / 1000, 0, 0.05); this.last = ts; this.lastDt = dt;
    if (this.engine.contextLost) return;
    this.time += dt;
    const view = this.host.view(); this.view = view; this.reduced = Boolean(view.reduced); this.engine.reducedMotion = this.reduced;
    const theme = normalizeTheme(view.theme);
    if (theme !== this.theme) this.buildTheme(theme);
    const mode = this.pickMode(view);
    if (mode !== this.mode) this.enterMode(mode, view);
    this.modeTime += dt;
    if (this.flight) { this.flight.t += dt; if (this.flight.t >= this.flight.dur) { this.flight = null; delete document.documentElement.dataset.flight; } }
    // global slow-motion beat (collapse): physics run slower, then ease back
    if (this.slowT > 0) { this.slowT -= dt; if (this.slowT <= 0) this.timeScale = 1; } else this.timeScale = damp(this.timeScale, 1, 6, dt);
    for (const tower of this.activeTowers()) tower.timeScale = this.timeScale;
    this.post = { spots: [] };
    this.engine.resize();
    this.watch(0, this.rig.focusY || 220, 0, 0.85); // the crowd looks at the tower unless a mode finds something better
    this.facing = 0; // (a scene the visitor can turn sets the yaw its labels, digits and plates turn by, to keep facing the camera)
    this['update_' + this.mode](dt, view);
    this.popups.faceYaw = this.facing; this.ruler.setFacing(this.facing);
    this.bricks.update(dt, this.time, { faceYaw: this.facing }); this.bricks.events.length = 0;
    this.updateLeaving(dt);
    this.updateCommon(dt);
    if (render) { this.engine.render(dt, this.post); this.engine.govern(dt * 1000, ts); }
    this.pointer.speed *= 0.9;
  }

  activeTowers() { return this.mode === 'arena' || this.mode === 'celebrate' ? this.arena : Object.values(this.towers); }

  enterMode(mode, view) {
    const previous = this.mode; this.mode = mode; this.modeTime = 0;
    const flies = Boolean(previous) && !this.reduced && Boolean(this.camSpec);
    // a flight through the world takes the place of the old dip to white; without one (first frame, Reduced Motion) the picture still fades
    this.engine.fade.value = flies ? this.engine.fade.value : Math.max(this.engine.fade.value, previous ? 0.8 : 1); this.engine.fade.target = 0;
    if (flies) this.startFlight(previous, mode); else { this.flight = null; delete document.documentElement.dataset.flight; }
    const hero = mode === 'hero'; const play = mode === 'play' || mode === 'results';
    // what the old screen leaves behind: the home title blows up into rubble, towers sink into the plinth
    if (previous === 'hero' && !hero) { if (flies && this.title.mesh && !this.title.gone) this.title.explode(1); else { this.title.group.visible = false; this.arsenal.group.visible = false; } }
    this.title.group.visible = hero || (previous === 'hero' && flies && this.title.exploded && !this.title.gone); this.arsenal.group.visible = hero || (previous === 'hero' && flies && this.title.exploded); this.titleProps.group.visible = hero;
    if (hero) this.title.titleBuilt = false;
    this.leave(this.towers.play, play, flies); this.leave(this.towers.lobby, mode === 'lobby', flies);
    this.totems.group.visible = mode === 'lobby';
    this.crown.visible = false;
    for (const t of this.arena) t.root.visible = mode === 'arena' || mode === 'celebrate';
    for (const l of this.labels) l.mesh.visible = false;
    this.ruler.group.visible = play;
    this.plinthGoal = mode === 'celebrate' ? null : [mode === 'arena' ? 2.3 : hero ? 2.2 : play ? 1.4 : 1, mode === 'arena' ? 0.62 : hero ? 1.5 : 1];
    if (!flies && this.plinthGoal) this.world.plinth.scale.set(this.plinthGoal[0], 1, this.plinthGoal[1]);
    this.popups.clear(); this.lastEffectKey = ''; this.removeBadge();
    if (hero) { this.endDrag(true); this.orbit.snap(); this.dolly.snap(); this.openHud(); } else this.leaveHome(); // (every view starts square on: nothing the visitor did to the last one is inherited)
    if (mode === 'results' || mode === 'celebrate') this.openResultsHud();
    if (mode === 'lobby') this.openLobbyHud();
    if (mode === 'play' || mode === 'arena') this.openPlayHud(); else this.closePlayHud();
    if (hero && !this.director) this.director = new TitleDirector(TITLE_EFFECT_IDS, rng(Date.now() & 0xffff), { reduced: this.reduced });
    if (mode === 'results') { this.resultsT = 0; this.scoreShown = false; }
    this.bricks.hide('score', false); this.bricks.hide('height', false); this.heightShown = -1; this.candidates.release();
    this.world.crowd.clearBallot(); this.world.crowd.setSpread(hero ? 230 : 0, !previous);
    if (previous === 'results' || previous === 'celebrate') this.fx.confetti.floor = -64;
  }

  // a tower that is not wanted on the new screen sinks into the plinth (or, without a flight, is simply hidden); one that is wanted comes back
  leave(tower, wanted, flies) {
    if (!tower) return; const root = tower.root;
    if (wanted) { this.unsink(tower); root.visible = true; return; }
    if (flies && root.visible) this.sinking.set(root, 0); else root.visible = false;
  }
  unsink(tower) { if (!tower) return; this.sinking.delete(tower.root); tower.root.position.y = 0; }
  updateLeaving(dt) {
    for (const [root, t] of this.sinking) {
      const k = t + dt / 0.75;
      if (k >= 1) { root.visible = false; root.position.y = 0; this.sinking.delete(root); } else { this.sinking.set(root, k); root.position.y = -k * k * 420; }
    }
    // the rubble of the title that was blown up keeps tumbling on the new screen until it has gone
    const title = this.title;
    if (this.mode !== 'hero' && title && title.mesh) {
      if (title.exploded && !title.gone) {
        title.toCamera.copy(this.camera.position).sub(tmpTitle.set(0, 150, 0)).normalize();
        title.update(this.lastDt || 0.016, this.time, { reduced: this.reduced, floor: (x, z) => this.floorAt(x, z), toCamera: title.toCamera });
        this.arsenal.update(this.lastDt || 0.016, this.time, this.reduced, { away: 1 });
        for (const ev of title.events.splice(0)) void ev;
      } else if (title.group.visible) { title.group.visible = false; this.arsenal.group.visible = false; }
    }
  }

  // The home view's on-screen controls (they live inside the title screen, so the page hides them with it).
  openHud() {
    if (this.hud) return; this.hintAge = 0;
    let storage = null; try { storage = window.localStorage; } catch (_) { storage = null; }
    const coarse = Boolean(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
    this.hud = createOrbitHud({ doc: document, storage, touch: coarse, onTurn: delta => { this.orbit.rotateBy(delta); this.usedView(); }, onReset: () => this.resetView(), onZoom: factor => this.zoomBy(factor), onToy: () => this.triggerSabotage() });
  }

  // The solo results, the podium and the lobby turn too: the same hint and buttons, in a corner of the scene (no toy dock here). The results and the podium
  // share the results screen's controls, the lobby has its own in the room screen (the page hides each along with its screen).
  openResultsHud() { this.resultsHintAge = 0; if (!this.resultsHud) this.resultsHud = this.makeSceneHud('results-screen', 'orbit-hud-results'); }
  openLobbyHud() { this.lobbyHintAge = 0; if (!this.lobbyHud) this.lobbyHud = this.makeSceneHud('room-screen', 'orbit-hud-lobby'); }
  makeSceneHud(hostId, id) {
    let storage = null; try { storage = window.localStorage; } catch (_) { storage = null; }
    const coarse = Boolean(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
    return createOrbitHud({ doc: document, storage, touch: coarse, hostId, id, dock: false, hint: SCENE_HINT, onTurn: delta => { this.orbit.rotateBy(delta); this.usedView(); }, onReset: () => this.resetView(), onZoom: factor => this.zoomBy(factor) });
  }
  // the lobby's controls sit in the bottom-right corner of the screen, under the cards (a narrow screen is all cards: the page hides them there)
  placeLobbyHud(W, H, dt) {
    const hud = this.lobbyHud; if (!hud) return;
    hud.place(W - 16, H - 14); hud.setRotated(this.orbit.rotated || this.dolly.zoomed);
    this.lobbyHintAge += dt; if (this.lobbyHintAge > 10) hud.fade();
  }

  // The game's view controls: zoom, turn and reset in the corner of the play field, for the mouse (the right button turns the view there, the wheel zooms) and
  // for the keyboard. Not on a touch screen: the board is for the thumb, and a finger cannot hold the right button.
  openPlayHud() {
    if (this.playHud) return; this.playHintAge = 0;
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;
    let storage = null; try { storage = window.localStorage; } catch (_) { storage = null; }
    let shown = 0; try { shown = Number(storage.getItem(`${PLAY_HINT_KEY}-shown`)) || 0; storage.setItem(`${PLAY_HINT_KEY}-shown`, String(shown + 1)); } catch (_) { shown = 0; }
    const hint = { mouse: '<span class="orbit-hint-full"><b>Right-drag</b> to look around, <b>scroll</b> to zoom</span><span class="orbit-hint-short"><b>Right-drag</b> to look, <b>scroll</b> to zoom</span>' };
    this.playHud = createOrbitHud({ doc: document, storage, hostId: 'game-screen', id: 'orbit-hud-play', dock: false, layout: 'stage', hint, hintKey: PLAY_HINT_KEY, onTurn: delta => { this.orbit.rotateBy(delta); this.usedView(); }, onReset: () => this.resetView(), onZoom: factor => this.zoomBy(factor) });
    if (shown >= 3 && this.playHud) this.playHud.fade(); // (it has said its piece: three games, or the first time it was used)
  }
  closePlayHud() { if (this.playHud) { this.playHud.dispose(); this.playHud = null; } }
  // the bottom-right corner of the play field: the floor, never the sky where the votes and the sabotage names appear
  placePlayHud(rect, dt) {
    const hud = this.playHud; if (!hud) return;
    hud.place(rect.x + rect.w - 10, rect.y + rect.h - 12); hud.setRotated(this.orbit.rotated || this.dolly.zoomed);
    this.playHintAge += dt; if (this.playHintAge > 12) hud.fade();
  }

  zoomBy(factor) { this.dolly.setReduced(this.reduced); this.dolly.zoomBy(factor, performance.now() / 1000); this.usedView(); }

  // Everything the home view changed that the other views must not inherit.
  leaveHome() {
    this.endDrag(true); this.orbit.snap(); this.dolly.snap(); this.world.setViewYaw(0); this.popups.faceYaw = 0; this.facing = 0; this.lastRightTap = null; this.dragBlend = 0;
    this.setCursor(''); this.heroHover = -1; this.arsenal.hover = -1; this.cursorLight.intensity = 0;
    this.hover.energy = 0; this.hover.inside = false; this.world.crowd.setAttention(0, 0, 0, 0); this.hideCaption();
    this.engine.bloomPass.strength = this.palette.bloom;
  }

  updateCommon(dt) {
    const time = this.time;
    if (this.plinthGoal) { const sc = this.world.plinth.scale; sc.x = damp(sc.x, this.plinthGoal[0], 3.2, dt); sc.z = damp(sc.z, this.plinthGoal[1], 3.2, dt); }
    this.engine.fade.value = damp(this.engine.fade.value, this.engine.fade.target, this.engine.fade.speed * 3, dt);
    this.fx.sparks.update(dt * this.timeScale); this.fx.glints.update(dt); this.fx.confetti.update(dt, time); this.fx.pulses.update(dt);
    this.fx.sparks.setScale(this.engine.height * 0.95); this.fx.glints.setScale(this.engine.height * 0.95);
    this.popups.update(dt, time);
    this.flash = damp(this.flash, 0, 7, dt); this.desatPulse = damp(this.desatPulse, 0, 3.2, dt); this.caPulse = damp(this.caPulse, 0, 4, dt);
    this.post.flash = this.flash; this.post.desat = Math.max(this.post.desat || 0, this.desatPulse * 0.45);
    this.post.ca = (this.post.ca || 0) + this.caPulse * 0.004;
    if (this.flash > 0.01) this.post.flashColor = this.theme === 'primetime' ? [1, 0.9, 0.6] : this.desatPulse > 0.2 ? [0.9, 0.25, 0.2] : [1, 0.86, 0.55];
  }

  // The visitor's own view of the scene (right-drag, the wheel, the buttons, the keys), added on top of whatever the scene's camera is doing: exactly nothing
  // until it has been used. Returns the yaw and pitch to add, the zoom factor to multiply by, and how much of the pointer's own parallax is still wanted
  // (it steps aside while the scene is being turned). `focusY` is the height the camera looks at, which decides how low it may come.
  userView(dt, focusY, { idleReset = false } = {}) {
    const o = this.orbit; const z = this.dolly; const reduced = this.reduced;
    const floorPitch = Math.asin(clamp((10 - focusY) / (this.camDist || 1700), -0.95, 0.95)); // the lowest view that keeps the camera above the floor
    o.setReduced(reduced); o.minPitch = Math.min(0, floorPitch - 0.045); o.update(dt); z.setReduced(reduced); z.update(dt);
    const turning = Boolean(this.drag) || o.moving;
    // a scene on show (home, results) returns to its default view by itself after 30 s untouched; the game keeps whatever view its player chose
    if (idleReset && !reduced && (o.rotated || z.zoomed) && !turning && !z.moving) { this.idleFor += dt; if (this.idleFor > 30) { this.resetView(2.4); this.idleFor = 0; } } else if (turning || z.moving) this.idleFor = 0;
    // the pointer's own parallax steps aside while the scene is being turned, and comes back as it settles
    this.dragBlend = damp(this.dragBlend, turning ? 1 : 0, this.drag ? 14 : 2.2, dt);
    return { yaw: o.yaw, pitch: o.pitch, zoom: z.value, par: 1 - this.dragBlend };
  }

  // -------------------------------------------------------------------------------------------------------------------
  // Camera. `anchor` is the world point that must appear at `screen` (px). `rect` supplies the scale: worldW x worldH world
  // units are fitted inside it, which is how the play field lands exactly on the page's stage element.
  placeCamera({ anchor, screen, rect, worldW, worldH, yaw = 0, pitch = 0.1, zoom = 1, roll = 0, shake = [0, 0, 0] }) {
    const cam = this.camera; const W = this.engine.cssWidth; const H = this.engine.cssHeight;
    let ppu = Math.max(0.05, Math.min(rect.w / worldW, rect.h / worldH)) * zoom;
    let ax = anchor.x; let ay = anchor.y; const az = anchor.z; let sx = screen.x; let sy = screen.y; let cyaw = yaw; let cpitch = pitch; let croll = roll;
    // A flight blends from where the previous screen's camera stood to where this one wants it (flight.js): the target, the point
    // on the screen it lands on, the zoom, the angles. The arc pulls back and rises in the middle, so it reads as travelling.
    const f = this.flight;
    if (f) { const m = blendSpec(f.from, { ax, ay, az, sx, sy, ppu, yaw, pitch, roll }, f.t / f.dur, f); ({ ax, ay, sx, sy, ppu } = m); cyaw = m.yaw; cpitch = m.pitch; croll = m.roll; }
    const dist = H / (2 * ppu * Math.tan(THREE.MathUtils.degToRad(cam.fov) / 2));
    cpitch = Math.max(cpitch, Math.asin(clamp((FLOOR_CLEARANCE - ay) / dist, -0.99, 0.99))); // a turned or zoomed view never takes the camera under the floor
    this.camSpec = { ax, ay, az, sx, sy, ppu, yaw: cyaw, pitch: cpitch, roll: croll };
    const cp = Math.cos(cpitch); this.camDist = dist;
    cam.position.set(ax + Math.sin(cyaw) * cp * dist + shake[0], ay + Math.sin(cpitch) * dist + shake[1], az + Math.cos(cyaw) * cp * dist + shake[2]);
    cam.near = Math.max(4, dist * 0.05); cam.far = 30000;
    cam.up.set(0, 1, 0); cam.lookAt(ax, ay, az); if (croll) cam.rotateZ(croll);
    cam.setViewOffset(W, H, -(sx - W / 2), -(sy - H / 2), W, H);
    cam.updateProjectionMatrix(); cam.updateMatrixWorld(true);
    return ppu;
  }

  // The camera sets off from where it stood to wherever the new screen wants it (placeCamera does the blending).
  startFlight(from, to) {
    if (!this.camSpec || this.reduced) { this.flight = null; return; }
    const spec = flightFor(from, to);
    this.flight = { t: 0, dur: spec.dur, pull: spec.pull, rise: spec.rise, lift: spec.lift, from: { ...this.camSpec }, to };
    document.documentElement.dataset.flight = to;
  }
  flying() { return Boolean(this.flight); }

  // An element's box as the layout put it, in viewport pixels: it ignores CSS transforms, so a panel that is swinging in, or tilting
  // with the pointer, does not drag the camera (which is fitted to these boxes) along with it.
  layoutRect(element) {
    if (!element || element.offsetWidth === undefined) return null;
    let x = 0; let y = 0; let n = element;
    while (n) { x += n.offsetLeft || 0; y += n.offsetTop || 0; n = n.offsetParent; }
    const sx = window.scrollX || 0; const sy = window.scrollY || 0; const w = element.offsetWidth; const h = element.offsetHeight;
    return { left: x - sx, top: y - sy, right: x - sx + w, bottom: y - sy + h, width: w, height: h };
  }
  rectOf(element, fallback) {
    const r = this.layoutRect(element) || (element && element.getBoundingClientRect ? element.getBoundingClientRect() : null);
    if (r && r.width > 8 && r.height > 8) return { x: r.left, y: r.top, w: r.width, h: r.height };
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

  sabotageName(id) { const sab = window.SabotageStack && window.SabotageStack.sabotages && window.SabotageStack.sabotages.find(item => item.id === id); return sab ? sab.name : String(id); }
  // the icon as a block sculpture made from the page's own artwork (the toy model while the artwork is still being read)
  makeEmblem(id) { return this.voxel.build(id) || buildIcon(id, this.theme); }

  announceEffect(effect, view) {
    const sab = window.SabotageStack && window.SabotageStack.sabotages.find(s => s.id === effect.id); if (!sab) return;
    const name = sab.name.toUpperCase(); const top = this.rig.focusY;
    // the name slams in above the tower in blocks, holds, and shatters
    const cap = clamp(330 / (name.length * 0.62), 24, 50);
    this.bricks.show({ key: 'effect', text: name, position: [0, top + 150, 110], cap, rows: 9, style: 'slam', life: effect.id === 'spotlight' ? (this.reduced ? 0.9 : 1.2) : 1.9, tilt: 0.04, reduced: this.reduced });
    this.removeBadge();
    // the emblem floats beside the tower, outside the lane, while the sabotage is on: the block sculpture of its icon in a medallion
    // (a disc in the theme's panel colour, so the artwork reads against any world) with a ring that runs down as the sabotage does
    const icon = this.makeEmblem(effect.id); icon.scale.multiplyScalar(EMBLEM_SCALE); icon.position.set(EMBLEM_X, top + 30, 70); this.scene.add(icon);
    const ring = new THREE.Mesh(new THREE.RingGeometry(30, 33, 48, 1, 0, TAU), new THREE.MeshBasicMaterial({ color: new THREE.Color(this.palette.amber).multiplyScalar(1.6), transparent: true, opacity: 0.95, side: THREE.DoubleSide, toneMapped: false, depthWrite: false }));
    ring.position.copy(icon.position); ring.position.z -= 4; this.scene.add(ring);
    const disc = new THREE.Mesh(new THREE.CircleGeometry(30, 48), new THREE.MeshBasicMaterial({ color: new THREE.Color(this.theme === 'paper' ? this.palette.cream : this.palette.ink), transparent: true, opacity: this.theme === 'paper' ? 0.84 : 0.9, fog: false, toneMapped: false, depthWrite: false }));
    disc.position.copy(icon.position); disc.position.z -= 9; this.scene.add(disc);
    this.badge = { icon, ring, disc, born: this.time, progress: 1 };
    this.fx.pulses.pulse({ pos: [0, top + 60, 80], color: this.palette.amber, radius: 220, life: 0.7, from: 0.2, strength: 1, vertical: true });
    this.world.crowd.cheer(0.6); this.world.crowd.chaos(1);
  }
  removeBadge() { if (!this.badge) return; const b = this.badge; this.scene.remove(b.icon, b.ring, b.disc); b.icon.userData.dispose(); b.ring.geometry.dispose(); b.ring.material.dispose(); b.disc.geometry.dispose(); b.disc.material.dispose(); this.badge = null; }
  updateBadge(effect, dt, focusY) {
    if (!this.badge) return; const b = this.badge;
    if (!effect) { this.removeBadge(); return; }
    const age = this.time - b.born; const pop = easeOutBack(clamp(age / 0.45), 1.4); b.pop = pop * 1.5;
    const calm = this.reduced; // Reduced Motion: it appears and stays, in a three-quarter view, with no turn, bob or pulse
    b.icon.scale.setScalar(Math.max(0.0001, EMBLEM_SCALE * pop * (calm ? 1 : 1 + Math.sin(age * 2) * 0.03))); b.icon.rotation.y = (calm ? 0.3 : dwellSpin(age, 1.0)) + this.facing; b.icon.rotation.x = 0.12; b.ring.rotation.y = this.facing; b.disc.rotation.y = this.facing; b.icon.position.set(EMBLEM_X, focusY + 30 + (calm ? 0 : Math.sin(age * 2.2) * 4), 70);
    const duration = Number(effect.duration) || (Number(effect.elapsed) + Number(effect.remaining)) || 5;
    const progress = clamp(Number.isFinite(Number(effect.remaining)) && effect.remaining > 0 ? effect.remaining / duration : 1, 0, 1);
    if (Math.abs(progress - b.progress) > 0.015) { b.progress = progress; b.ring.geometry.dispose(); b.ring.geometry = new THREE.RingGeometry(30, 33, 48, 1, Math.PI / 2, Math.max(0.001, TAU * progress)); }
    b.ring.position.set(b.icon.position.x, b.icon.position.y, 64); b.ring.scale.setScalar(Math.max(0.0001, pop * 1.5));
    b.disc.position.set(b.icon.position.x, b.icon.position.y, 61); b.disc.scale.setScalar(Math.max(0.0001, pop * 1.5));
  }

  // -------------------------------------------------------------------------------------------------------------------
  update_play(dt, view) {
    const g = view.game; const tower = this.getTower('play');
    tower.root.visible = true;
    if (!g) { this.placeIdle(dt, view); return; }
    const state = this.towerStateFromGame(view); this.lastPlayKey = state.id;
    tower.sync(state, dt, this.time);
    const blocks = state.blocks; const count = blocks.length; const effectId = g.activeEffect ? g.activeEffect.id : '';
    const targetFocus = Math.max(220, (count + 1) * 22 - 60);
    this.rig.focusY = this.reduced ? targetFocus : damp(this.rig.focusY, targetFocus, 1 / 0.12, dt);
    const uv = this.userView(dt, this.rig.focusY); this.facing = uv.yaw; tower.setFacing(uv.yaw); // (the badge, the digits, the labels and the Teamwork plaques turn to face the visitor's view)
    const altitude = clamp(this.rig.focusY / 2200);
    const effect = g.activeEffect; const key = effect ? `${effect.id}:${effect.targetPlayerId || ''}` : '';
    if (key !== this.lastEffectKey) { if (effect) this.announceEffect(effect, view); else this.removeBadge(); this.lastEffectKey = key; }
    this.updateBadge(effect, dt, this.rig.focusY);
    // zoom sabotage: 1.85x about the top block, like the 2D view. The visitor's own zoom (the wheel) closes in the same way: the closer the view, the more
    // it centres on the top block, so a short tower is never zoomed off the bottom of the field (and zooming out simply shows more of the world)
    const zoomTarget = effectId === 'zoom' ? 1.85 : 1;
    this.rig.zoom = this.reduced ? zoomTarget : damp(this.rig.zoom, zoomTarget, 1 / 0.12, dt);
    const zk = clamp((this.rig.zoom * uv.zoom - 1) / 0.85);
    const topBlock = blocks[blocks.length - 1]; const topX = topBlock ? (topBlock.left + topBlock.right) / 2 - 180 : 0; const topY = topBlock ? levelY(topBlock.level) : 11;
    const stageEl = document.getElementById('game-stage'); const rect = this.rectOf(stageEl);
    const ppu1 = Math.min(rect.w / BOARD_W, rect.h / 520);
    const anchor = new THREE.Vector3(lerp(0, topX, zk), lerp(this.rig.focusY, topY, zk), 30);
    const screen = { x: rect.x + rect.w / 2 + lerp(0, topX * ppu1, zk), y: rect.y + rect.h / 2 - lerp(0, (topY - this.rig.focusY) * ppu1, zk) };
    // camera life: gentle sway, pointer parallax, landing kick, earthquake / collapse shake, drunk roll
    const [px, py] = this.parallax(); const sway = this.reduced ? 0 : Math.sin(this.time * 0.23) * 0.05;
    this.rig.yaw = damp(this.rig.yaw, sway + px * uv.par, 4, dt); this.rig.pitch = damp(this.rig.pitch, 0.1 + py * uv.par + (this.reduced ? 0 : Math.sin(this.time * 0.17) * 0.012), 4, dt);
    let shake = [0, this.rig.kick.step(dt), 0];
    if (this.rig.shakeAmp > 0.01 && !this.reduced) { this.rig.shakeT += dt; this.rig.shakeAmp *= Math.exp(-dt * 2.8); shake = [shake[0] + Math.sin(this.rig.shakeT * 61) * this.rig.shakeAmp, shake[1] + Math.cos(this.rig.shakeT * 53) * this.rig.shakeAmp * 0.7, 0]; }
    if (effectId === 'earthquake' && !this.reduced && g.activeEffect) { const t = view.Core.earthquakeOffset(g.activeEffect.elapsed, g.activeEffect.remaining, false); shake[0] += t.x * 0.55; shake[1] -= t.y * 0.55; }
    let roll = effectId === 'drunk' && !this.reduced ? Math.sin(this.time * 2.1) * 0.035 + Math.sin(this.time * 3.7) * 0.018 : 0;
    // The Pisa Tilt rolls the camera: the whole world leans, up to 16 degrees (the same angle the game's own view takes)
    if (effectId === 'pisa' && g.activeEffect && view.Core.pisaAngle) roll = view.Core.pisaAngle(g.activeEffect.elapsed, g.activeEffect.remaining, g.activeEffect.tiltDirection, this.reduced);
    this.placeCamera({ anchor, screen, rect, worldW: BOARD_W, worldH: 520, yaw: this.rig.yaw + uv.yaw, pitch: this.rig.pitch + uv.pitch, zoom: this.rig.zoom * uv.zoom, roll, shake });
    this.world.setViewYaw(uv.yaw); this.placePlayHud(rect, dt);
    // the plinth shakes with the tower so nothing floats
    this.world.plinth.position.set(tower.shake.x, tower.shake.y, 0);
    this.ruler.setHeight(count); this.ruler.group.position.y = 0;
    const ballot = this.ballotFrom(view); if (ballot) this.world.crowd.setBallot(ballot); else this.world.crowd.clearBallot();
    // your height stands beside the lane as block digits (a phone's screen ends at the lane, so there they are simply off it)
    const placed = Math.max(0, count - 1);
    if (this.heightShown !== placed) { this.heightShown = placed; this.bricks.show({ key: 'height', text: String(placed), position: [DIGITS_X, 0, 62], cap: 92, colors: ['#2F8478'], rows: 14, style: 'hold', baseline: true, shatterOld: false, reduced: this.reduced }); if (placed > 0 && !this.reduced) this.fx.dust([DIGITS_X, 6, 70], 4); }
    // while chat votes, the three candidates hover over the tower and grow with their share
    { const vote = ballot && g.vote; const remote = Boolean(view.mp.active && g.multiplayer);
      const mine = vote && !remote && vote.votes && vote.votes.has && vote.votes.has('you') ? vote.options.indexOf(vote.votes.get('you')) : -1;
      this.candidates.update(dt, this.time, { options: vote ? vote.options.slice(0, 3) : null, fractions: ballot ? ballot.fractions : null, y: Math.max(176, (count + 1) * 22 + 132), you: mine, winner: effectId, reduced: this.reduced, away: this.badge ? this.badge.icon.position : tmpTitle.set(EMBLEM_X, this.rig.focusY + 30, 70), faceYaw: this.facing }); }
    // post: each sabotage has a feel
    if (!this.reduced) {
      if (effectId === 'slowmo') { this.post.desat = 0.5; this.post.tint = [0.9, 0.97, 1.12]; }
      if (effectId === 'turbo') { this.post.zoomBlur = 0.28; this.post.ca = 0.0014; }
      if (effectId === 'drunk') this.post.wobble = 1;
      if (effectId === 'earthquake') this.post.ca = 0.0022;
    }
    if (tower.rig.spot && effect) { // Spotlight: the dark falls over the whole view (no box), one lit circle and the emblem's own light stay
      const full = { x: 0, y: 0, w: this.engine.cssWidth, h: this.engine.cssHeight }; const open = this.spotOpen(effect);
      const spot = this.spotPost(tower, tower.rig.spot, full, open); if (spot) this.post.spots.push(spot);
      if (open < 0.999) { const lamp = this.emblemLight(); if (lamp) this.post.spots.push(lamp); }
    }
    const mover = g.moving; const live = mover && Number.isFinite(mover.left) && Number.isFinite(mover.width);
    this.watch(live ? mover.left + mover.width / 2 - BOARD_W / 2 : topX, live ? levelY(mover.level || count) : topY, 0, 1, uv.yaw); // the crowd follows the moving block
    this.updateWorld(dt, this.rig.focusY, altitude, view, tower);
    // The sun's wide bloom would wash the candidates out while chat votes (the Sunset sun sits right behind them): the haze eases off
    // for the vote and comes back after it.
    this.voteCalm = damp(this.voteCalm || 0, this.candidates.cards.length ? 1 : 0, 4, dt);
    if (this.theme === 'sunset' && this.engine.bloomPass.enabled) this.post.bloom = this.palette.bloom * (1 - 0.82 * this.voteCalm);
    this.post.tiltCenter = 0.5; this.post.blur = 5;
  }

  // The circle of light for a spot, in the post pass's terms. `open` (0..1) is an iris: wide open it lights the whole rectangle, and closing
  // it brings the dark in from the edges down to the beam itself.
  spotPost(tower, spot, rect, open = 0) {
    const world = tower.root.localToWorld(new THREE.Vector3(spot.x, spot.y, spot.z)); const right = new THREE.Vector3().setFromMatrixColumn(this.camera.matrixWorld, 0).multiplyScalar(spot.radius * tower.root.scale.x);
    const a = world.clone().project(this.camera); const b = world.clone().add(right).project(this.camera);
    const aspect = this.camera.aspect; let r = Math.abs((b.x - a.x) * 0.5) * aspect; const uv = this.uvRect(rect); const x = a.x * 0.5 + 0.5; const y = a.y * 0.5 + 0.5;
    if (open > 0.001) {
      const far = Math.max(...[[uv[0], uv[1]], [uv[2], uv[1]], [uv[0], uv[3]], [uv[2], uv[3]]].map(([cx, cy]) => Math.hypot((cx - x) * aspect, cy - y)));
      r += (far * 1.05 - r) * open;
    }
    return { x, y, r, rect: uv };
  }
  // how far the veil of a running Spotlight is still open: the name slams in first, then the dark closes in (Reduced Motion: it just falls)
  spotOpen(effect) { const t = Number(effect && effect.elapsed) || 0; if (this.reduced) return t < 0.9 ? 1 : 0; return 1 - easeOutCubic(clamp((t - 0.8) / 0.5)); }
  // the winning sabotage's emblem keeps a pool of light of its own, so it is still seen under its own veil
  emblemLight() { const b = this.badge; if (!b) return null; return this.spotWorld(b.disc.position, 52 * Math.max(0.05, b.pop || 1), [0, 0, 1, 1]); }

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
    const W = this.engine.cssWidth; const H = this.engine.cssHeight; const reduced = this.reduced;
    const copy = document.querySelector('#title-screen .home-copy'); const bar = document.querySelector('header.topbar');
    const barBottom = bar ? bar.getBoundingClientRect().bottom : 0; const cr = (copy && this.layoutRect(copy)) || { left: 0, right: 0, top: H, width: 0 };
    let rect;
    if (W >= 900 && cr.right < W * 0.66) rect = { x: cr.right + 12, y: barBottom + 6, w: W - cr.right - 28, h: H - barBottom - 20 };
    else rect = { x: 6, y: barBottom + 2, w: W - 12, h: Math.max(180, Math.min(cr.top - barBottom - 6, H * 0.62)) };
    const title = this.title; const director = this.director; const p = this.pointer; const o = this.orbit; const hover = this.hover;
    // ---- the title: built (it rains from the sky) the first time the home scene is shown, and again after a theme change
    if (!title.titleBuilt) {
      title.titleBuilt = true; this.swoop = !this.heroSeen && !reduced; title.build({ speed: this.heroSeen ? 2.2 : 1, instant: reduced }); this.heroSeen = true; director.timer = 0;
    }
    if (reduced && !title.complete) title.finish();
    const Lb = title.layout;
    title.floor = (x, z) => this.floorAt(x, z);
    const running = title.complete && !title.exploded;
    if (running) { director.setReduced(reduced); director.update(dt * this.timeScale); } else if (!title.complete) director.timer = 0;
    const effect = running ? director.effect : null;
    const pose = effect ? titlePose(effect.id, effect.elapsed, effect.duration, { reduced, dir: effect.dir }) : null;
    // the menu waits for the title the first time; any press or key rushes the build, and releases it
    if (this.holdMenu && (reduced || title.age >= title.introDuration * 0.8)) this.releaseMenu();

    // ---- camera: the default composition (the stack above, the ring of sabotages round its foot), then wherever the visitor has turned it
    const b = title.bounds; const ringHalf = this.arsenal.rx + 44; const worldW = Math.max(b.x1 - b.x0, ringHalf * 2) * 1.04;
    const topY = b.y1 + 96; const bottomY = -70; const worldH = topY - bottomY; const cyBase = (topY + bottomY) / 2 - 24;
    // the swoop follows the build of the title itself, so rushing the build never makes the camera jump
    const intro = reduced || !this.swoop ? 1 : easeInOutCubic(clamp(title.age / (title.introDuration + 0.2)));
    const uv = this.userView(dt, cyBase, { idleReset: true }); const par = uv.par;
    const [px, py] = this.parallax(1.4);
    const cam = pose ? pose.cam : null; const focus = cam ? cam.focus : 0;
    const yaw = (1 - intro) * -0.5 + px * par + (reduced ? 0 : Math.sin(this.time * 0.19) * 0.035) + o.yaw;
    const pitch = lerp(0.74, 0.085, intro) + py * par + o.pitch;
    const zoom = lerp(0.46, 1, intro) * (reduced ? 1 : 1 + 0.028 * hover.energy) * (cam ? cam.zoom : 1) * uv.zoom;
    const shakeAmp = cam && !reduced ? cam.shake * 8 : 0;
    const shake = [shakeAmp ? Math.sin(this.time * 61) * shakeAmp : 0, this.rig.kick.step(dt) + (shakeAmp ? Math.cos(this.time * 53) * shakeAmp * 0.7 : 0), 0];
    const anchor = this.heroAnchor || (this.heroAnchor = new THREE.Vector3()); anchor.set(lerp(0, Lb.topOffsetX, focus), lerp(cyBase, title.topCenterY, focus), 0);
    this.placeCamera({ anchor, screen: { x: rect.x + rect.w / 2, y: rect.y + rect.h * 0.5 }, rect, worldW, worldH, yaw, pitch, zoom, roll: cam ? cam.roll : 0, shake });
    this.world.setViewYaw(o.yaw); this.facing = yaw;
    title.toCamera.copy(this.camera.position).sub(tmpTitle.set(0, 150, 0)).normalize();

    // ---- the pointer in the scene
    const onScene = p.inside && !p.overUi && !p.touch; // anywhere on the bare page: the grab cursor, the ring's icons
    const inRect = onScene && p.lastX >= rect.x && p.lastX <= rect.x + rect.w && p.lastY >= rect.y && p.lastY <= rect.y + rect.h;
    const frame = inRect ? this.pointerOnScreenPlane(anchor, p.ndc, 0) : null; // its place on a plane through the scene that faces the camera
    let idx = -1;
    if (onScene && !this.drag) { this.raycaster.setFromCamera(p.ndc, this.camera); idx = this.arsenal.pick(this.raycaster); }
    if (idx !== this.heroHover) { this.heroHover = idx; this.arsenal.hover = idx; this.showHoverLabel(idx, yaw); } else if (idx >= 0) this.showHoverLabel(idx, yaw, true);
    const overTitle = onScene && !this.drag && idx < 0 && title.complete && this.overTitle(p.lastX, p.lastY);
    this.setCursor(this.drag ? 'grabbing' : idx >= 0 || overTitle ? 'pointer' : onScene ? 'grab' : '');
    hover.update(dt, { point: frame ? frame.point : null, speed: p.speed, blocked: Boolean(this.drag), reduced });
    this.hoverLife(dt, frame, anchor, yaw, rect);
    { // the crowd's eyes: the pointer once it is over the scene, otherwise the title, where the sabotages land
      const e = hover.energy; const sweep = Math.sin(this.time * 0.5) * (b.x1 - b.x0) * 0.3;
      this.watch(lerp(sweep, hover.x, e), lerp(title.topCenterY, hover.y, e), lerp(0, hover.z, e), 1, o.yaw);
    }
    const pointer = this.drag ? null : frame;
    title.update(dt, this.time, { pointer, pointerSpeed: p.speed, reduced, energy: hover.energy, yaw, effect, floor: title.floor, toCamera: title.toCamera });
    this.arsenal.update(dt, this.time, reduced, { yaw, pointer, energy: hover.energy, away: title.exploded ? 1 : 0 });
    this.titleProps.update(pose, { time: this.time, layout: Lb, gateX: title.gateX, topMid: title.topCenterY, reduced });
    for (const ev of title.events.splice(0)) this.onTitleEvent(ev);

    // ---- the demo's chat
    const ballot = running ? director.ballot : null; if (ballot) this.world.crowd.setBallot({ voted: ballot.voted, fractions: ballot.fractions, colors: BALLOT_COLORS[this.theme] }); else this.world.crowd.clearBallot();
    if (effect && effect.n !== this.heroEffectN) { this.heroEffectN = effect.n; this.world.crowd.cheer(0.8); this.world.crowd.chaos(0.8); this.showCaption(effect.id); if (!reduced) title.wave(0, 1500); }
    else if (!effect && this.captionKey) this.hideCaption();
    this.placeCaption(rect);
    this.ruler.group.visible = false;
    if (this.hud) {
      // The strip under the scene rises from the bottom of the window as the page scrolls: the controls ride above it instead of covering its right end.
      const strip = document.querySelector('#title-screen .home-bottom'); const sr = strip ? strip.getBoundingClientRect() : null;
      const ceiling = sr && sr.height > 4 && sr.top < H ? sr.top - 10 : Infinity;
      this.hud.place(rect.x + rect.w - 14, Math.max(rect.y + 120, Math.min(rect.y + rect.h - 12, ceiling))); this.hud.setRotated(o.rotated);
      this.hintAge += dt; if (this.hintAge > 10) this.hud.fade(); // the hint is only there to be noticed: it steps aside by itself (until the first drag, it comes back next visit)
    }
    this.world.plinth.position.set(0, 0, 0);
    this.updateWorld(dt, 190, 0, view, null);
    if (pose && !reduced) {
      const q = pose.post; if (q.zoomBlur) this.post.zoomBlur = q.zoomBlur; if (q.wobble) this.post.wobble = q.wobble; if (q.desat) this.post.desat = q.desat; if (q.tint) this.post.tint = q.tint; if (q.ca) this.post.ca = (this.post.ca || 0) + q.ca;
    } else if (pose && pose.post.tint) { this.post.tint = pose.post.tint; }
    // Spotlight: a dark veil comes down over the whole scene, leaving one lit circle that wanders across the title
    if (pose && pose.veil > 0.01) {
      const sweepX = pose.spotSweep * (b.x1 - b.x0); const radius = (b.x1 - b.x0) * 0.155;
      const sp = this.spotWorld(tmpTitle.set(sweepX, title.topCenterY * 0.78, 30), radius * (1 + 4.5 * (1 - easeOutCubic(pose.veil))), [0, 0, 1, 1]); if (sp) this.post.spots.push(sp);
    }
    // the focus band of the tilt-shift follows the pointer, and the glow swells a little, while it is over the scene
    this.post.tiltCenter = lerp(0.55, clamp((p.ndc.y + 1) / 2, 0.2, 0.85), reduced ? 0 : 0.8 * hover.energy); this.post.blur = 6;
    if (this.engine.bloomPass.enabled) this.post.bloom = this.palette.bloom * (1 + 0.3 * hover.energy);
    this.post.fade = 0;
  }

  // ---- helpers for the home scene
  floorAt(x, z) { const s = this.world.plinth.scale; const rx = 250 * s.x; const rz = 250 * s.z; return (x * x) / (rx * rx) + (z * z) / (rz * rz) < 1 ? 0 : -64; }
  // is a screen point over the title? (its bounding box, projected)
  overTitle(x, y) {
    const r = this.titleRect(); return x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h;
  }
  titleRect() {
    const W = this.engine.cssWidth; const H = this.engine.cssHeight; const b = this.title.bounds; const v = this.fieldCorner || (this.fieldCorner = new THREE.Vector3());
    let x0 = Infinity; let y0 = Infinity; let x1 = -Infinity; let y1 = -Infinity;
    for (const x of [b.x0, b.x1]) for (const y of [b.y0, b.y1]) for (const z of [-60, 60]) {
      v.set(x, y, z).project(this.camera); const sx = (v.x * 0.5 + 0.5) * W; const sy = (0.5 - v.y * 0.5) * H;
      x0 = Math.min(x0, sx); x1 = Math.max(x1, sx); y0 = Math.min(y0, sy); y1 = Math.max(y1, sy);
    }
    return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 };
  }
  // a circle of light for the spotlight veil, from a world point and a world radius
  spotWorld(point, radius, rect) {
    const a = this.spotA || (this.spotA = new THREE.Vector3()); const c = this.spotB || (this.spotB = new THREE.Vector3());
    a.copy(point).project(this.camera); c.setFromMatrixColumn(this.camera.matrixWorld, 0).multiplyScalar(radius).add(point).project(this.camera);
    return { x: a.x * 0.5 + 0.5, y: a.y * 0.5 + 0.5, r: Math.abs((c.x - a.x) * 0.5) * this.camera.aspect, rect };
  }
  releaseMenu() { if (!this.holdMenu) return; this.holdMenu = false; document.documentElement.removeAttribute('data-intro'); }
  // thuds from the title (a slab landing): the stage answers with a kick, a ring of dust and a cheer
  onTitleEvent(ev) {
    if (ev.type !== 'thud') return;
    this.rig.kick.velocity -= 60 * ev.power; if (!this.reduced) this.flash = Math.max(this.flash, 0.04 * ev.power);
    const y = ev.tier === 0 ? this.title.layout.bottomTop : 4;
    this.fx.pulses.pulse({ pos: [0, y, 40], color: this.palette.amber, radius: ev.tier === 0 ? 330 : 240, life: 0.8, from: 0.2, strength: 1.2 });
    this.fx.dust([-this.title.layout.slabTW * 0.3, y, 50], 6); this.fx.dust([this.title.layout.slabTW * 0.3, y, 50], 6); this.world.crowd.cheer(ev.tier === 0 ? 1.2 : 0.6);
  }
  // "CHAT VOTED: EARTHQUAKE": a pill under the scene while a sabotage is on the title
  ensureCaption() {
    if (this.caption) return this.caption;
    const host = document.getElementById('title-screen'); if (!host) return null;
    const el = document.createElement('div'); el.className = 'chat-caption'; el.setAttribute('aria-hidden', 'true');
    el.innerHTML = '<svg class="chat-caption-icon" viewBox="0 0 32 32" focusable="false"><use href="#sabotage-symbol-empty"></use></svg><span class="chat-caption-text"></span>';
    host.appendChild(el); this.caption = { el, use: el.querySelector('use'), text: el.querySelector('.chat-caption-text'), x: NaN, y: NaN }; return this.caption;
  }
  showCaption(id) {
    const c = this.ensureCaption(); if (!c) return; const sab = window.SabotageStack && window.SabotageStack.sabotages && window.SabotageStack.sabotages.find(item => item.id === id);
    c.use.setAttribute('href', `#sabotage-symbol-${id}`); c.text.textContent = captionFor(sab ? sab.name : id); this.captionKey = id; c.el.classList.add('is-on');
  }
  hideCaption() { this.captionKey = ''; if (this.caption) this.caption.el.classList.remove('is-on'); }
  placeCaption(rect) {
    const c = this.caption; if (!c) return; const x = Math.round(rect.x + rect.w / 2); const y = Math.round(rect.y + rect.h - 34);
    if (c.x !== x || c.y !== y) { c.x = x; c.y = y; c.el.style.left = `${x}px`; c.el.style.top = `${y}px`; }
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
    const uv = this.userView(dt, 226); this.facing = uv.yaw; // (the name plates below turn to face the visitor's view)
    const colW = 720 / n; const maxHeight = Math.max(0, ...players.map(p => Number(p.height) || (p.blocks ? p.blocks.length - 1 : 0)));
    const scale = clamp(Math.min(colW / 400, 440 / ((maxHeight + 2) * 22)), 0.06, 0.9);
    const effects = g.remoteEffects || [];
    const effectKey = effects.map(e => `${e.id}:${e.targetPlayerId || 'all'}`).join(',');
    if (effectKey !== this.lastArenaKey) {
      const fresh = effects.find(e => !(this.lastArenaKey || '').includes(`${e.id}:${e.targetPlayerId || 'all'}`));
      if (fresh && this.mode === 'arena') {
        const sab = window.SabotageStack && window.SabotageStack.sabotages.find(item => item.id === fresh.id);
        if (sab) { const name = sab.name.toUpperCase(); this.popups.show({ text: name, position: [0, 330, 130], size: clamp(520 / (name.length * 0.7), 18, 46), depth: 12, color: this.palette.cream, glow: 0.7, style: 'slam', life: 1.9, tilt: 0.05 }); this.world.crowd.cheer(0.9); this.world.crowd.chaos(1); }
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
    this.watch(Math.sin(this.time * 0.8) * colW * Math.max(0.5, (n - 1) / 2), this.rig.focusY, 0, 1, uv.yaw); // the crowd scans the lanes
    for (let i = n; i < this.arena.length; i += 1) this.arena[i].root.visible = false;
    for (let i = n; i < this.labels.length; i += 1) this.labels[i].mesh.visible = false;
    const focusY = 226; const [px, py] = this.parallax(0.7);
    // Zooming in closes in on the middle of the towers (the wide view is centred on the sky above them), so the stacks never leave the frame.
    const topCrowd = (maxHeight + 1) * 22 * scale; const zk = clamp((uv.zoom - 1) / 0.85);
    const lowFocus = clamp(topCrowd * 0.55, 30, focusY); this.arenaFocus = this.arenaFocus == null || this.reduced ? lowFocus : damp(this.arenaFocus, lowFocus, 1 / 0.3, dt);
    const anchorY = lerp(focusY, this.arenaFocus, zk); const ppu1 = Math.min(rect.w / 720, rect.h / 520);
    this.placeCamera({ anchor: new THREE.Vector3(0, anchorY, 30), screen: { x: rect.x + rect.w / 2, y: rect.y + rect.h / 2 - (anchorY - focusY) * ppu1 }, rect, worldW: 720, worldH: 520, yaw: px * 0.8 * uv.par + (this.reduced ? 0 : Math.sin(this.time * 0.2) * 0.04) + uv.yaw, pitch: 0.12 + py * uv.par + uv.pitch, zoom: uv.zoom });
    this.world.setViewYaw(uv.yaw); this.placePlayHud(rect, dt);
    this.ruler.group.visible = false;
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
    label.mesh.scale.setScalar(clamp(colW / 150, 0.5, 1.15)); label.mesh.position.set(x, opts.y == null ? 470 : opts.y, 120); label.mesh.rotation.y = this.facing;
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
    const worldH = Math.max(520, topY + 230 + (data.newBest ? 130 : 0)); const focusY = worldH / 2 - 50; this.rig.focusY = damp(this.rig.focusY, focusY, 3, dt);
    const reveal = this.reduced ? 1 : easeInOutCubic(clamp(this.resultsT / 1.8));
    // the sculpture can be walked all the way round: hold left or right and drag (same controller and rules as the home scene)
    const reduced = this.reduced; const o = this.orbit; const p = this.pointer;
    const uv = this.userView(dt, this.rig.focusY, { idleReset: true }); const par = uv.par;
    const [px, py] = this.parallax(1.4);
    const yaw = (Math.sin(this.time * 0.22) * 0.14 + px) * par + o.yaw; const pitch = lerp(0.04, 0.13, reveal) + py * par + o.pitch;
    this.world.setViewYaw(o.yaw); this.facing = o.yaw;
    this.setCursor(this.drag ? 'grabbing' : p.inside && !p.overUi && !p.touch ? 'grab' : '');
    this.placeCamera({ anchor: new THREE.Vector3(0, this.rig.focusY, 30), screen: { x: rect.x + rect.w / 2, y: rect.y + rect.h / 2 }, rect, worldW: 400, worldH, yaw, pitch, zoom: lerp(1.08, 1, reveal) * uv.zoom });
    // the height, as a monument
    if (!this.scoreShown && this.resultsT > 0.4) {
      this.scoreShown = true; this.bricks.show({ key: 'score', text: String(data.height), position: [0, standing * 22 + 52, 80], cap: 112, colors: ['#E3A33B'], rows: 15, style: 'hold', baseline: true, reduced: this.reduced });
      if (data.newBest) this.popups.show({ key: 'best', text: 'NEW BEST', position: [0, standing * 22 + 202, 80], size: 22, depth: 8, color: this.palette.vermilion, glow: 1, style: 'hold', life: 1, tilt: -0.05 });
      if (!this.reduced && (data.newBest || data.height >= 15)) this.fx.confetti.burst({ pos: [0, standing * 22 + 140, 40], count: 130, speed: 360, colors: this.confettiColors(), size: 7.5, life: 4.2, cone: 1.4 });
      this.world.crowd.cheer(data.newBest ? 2.2 : 1);
    }
    // a new session best is crowned: a gold crown pops in above the sculpture, turns, bobs and throws off gold
    if (data.newBest && this.resultsT > 0.5) {
      const pose = crownPose(this.resultsT - 0.55, this.time, reduced); const y = standing * 22 + 268 + pose.bob; const crown = this.crown;
      crown.visible = pose.scale > 0.002; crown.position.set(0, y, 80); crown.scale.setScalar(1.75 * Math.max(0.001, pose.scale)); crown.rotation.set(pose.tilt, pose.spin, 0);
      if (!reduced && crown.visible && this.time - this.lastCrownSpark > 0.3) {
        this.lastCrownSpark = this.time; const a = Math.random() * TAU;
        this.fx.sparks.burst({ pos: [Math.cos(a) * 46, y + 20 + Math.random() * 40, 80 + Math.sin(a) * 30], count: 3, speed: 60, spread: 1, color: [1.7, 1.25, 0.3], size: 5.5, life: 1, gravity: -30, up: 0.4, drag: 1.2 });
      }
    } else this.crown.visible = false;
    if (this.resultsHud) {
      this.resultsHud.place(rect.x + rect.w - 14, rect.y + rect.h - 12); this.resultsHud.setRotated(o.rotated || this.dolly.zoomed);
      this.resultsHintAge += dt; if (this.resultsHintAge > 10) this.resultsHud.fade();
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
    const uv = this.userView(dt, (maxHeight + 1) * 11 * scale + 40, { idleReset: true }); this.facing = uv.yaw; // (the name plates and plaques turn to face the visitor's view)
    let finished = true;
    const labelScale = clamp(colW / 150, 0.5, 1.15);
    entries.forEach((entry, i) => {
      const total = entry.blocks.length;
      const target = revealCount(this.podiumClock, total, { reduced: this.reduced });
      if (target > entry.shown) { entry.shown = target; entry.blockView = entry.blocks.slice(0, target); }
      if (entry.shown < total) finished = false;
      const count = revealedFallen(entry.fallen, entry.shown, total);
      if (count !== entry.fallenShown) { entry.fallenShown = count; entry.fallenView = entry.fallen.slice(0, count); }
      const tower = this.arena[i]; tower.setFacing(uv.yaw); const x = entry.slot * colW;
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
    this.placeCamera({ anchor: new THREE.Vector3(0, focusY, 30), screen: { x: free.x + free.w / 2, y: free.y + free.h * 0.47 }, rect: free, worldW: worldW + 60, worldH, yaw: px * uv.par + (this.reduced ? 0 : Math.sin(this.time * 0.18) * 0.1) + uv.yaw, pitch: 0.1 + py * uv.par + uv.pitch, zoom: uv.zoom });
    this.world.setViewYaw(uv.yaw);
    if (this.resultsHud) {
      // beside the cards the screen's bottom-right corner is free (as in the lobby, and clear of the page's footer note); above them it is the corner of the podium's own area
      if (wide) this.resultsHud.place(W - 16, H - 14); else this.resultsHud.place(free.x + free.w - 14, free.y + free.h - 12);
      this.resultsHud.setRotated(this.orbit.rotated || this.dolly.zoomed);
      this.resultsHintAge += dt; if (this.resultsHintAge > 10) this.resultsHud.fade();
    }
    this.ruler.group.visible = false; this.world.crowd.clearBallot(); this.updateWorld(dt, focusY, 0.04, view); this.post.tiltCenter = 0.5; this.post.blur = 4;
  }

  // The lobby: one block of every colour per player on the plinth, the room code as a giant 3D sign.
  update_lobby(dt, view) {
    const room = view.mp.room; const players = (room && room.players) || []; const tower = this.getTower('lobby'); tower.root.visible = true;
    const uv = this.userView(dt, 230, { idleReset: true }); this.facing = uv.yaw; tower.setFacing(uv.yaw); // (the name plates, plaques and totems turn to face the visitor's view)
    const blocks = [view.Core.makeBase()];
    players.forEach((p, i) => { const w = Math.max(60, 190 - i * 18); const c = (360 - w) / 2 + ((i % 2) ? 8 : -8); blocks.push({ left: c, right: c + w, level: i + 1, color: p.color || '#E3A33B', perfect: false, placer: p.name || 'Player' }); });
    tower.sync({ id: `lobby:${view.mp.code}`, blocks, fallen: [], moving: null, effect: null, helpers: view.Core, phase: 'lobby', collapsed: false, reduced: this.reduced, teamPlacers: true }, dt, this.time);
    const rect = this.rectOf(document.querySelector('#room-screen .room-lobby-layout'), { x: 0, y: 0, w: this.engine.cssWidth, h: this.engine.cssHeight });
    const W = this.engine.cssWidth; const H = this.engine.cssHeight; const [px, py] = this.parallax(1.3);
    const free = W >= 900 ? { x: W * 0.36, y: 60, w: W * 0.62, h: H - 80 } : { x: 8, y: 54, w: W - 16, h: H * 0.5 };
    // on a desktop the cards cover the upper two thirds, so the stage (tower, totems and their name plates) sits in the band under them
    const wide = W >= 900; const screenY = wide ? Math.max(free.y + free.h / 2, H * 0.69) : free.y + free.h / 2;
    // Zooming in closes in on the totems and the middle of the tower (the wide view is centred on the air above them), so they never leave the frame.
    const zk = clamp((uv.zoom - 1) / 0.85); const anchorY = lerp(230, 70, zk); const ppu1 = Math.min(free.w / 620, free.h / (wide ? 760 : 640));
    this.placeCamera({ anchor: new THREE.Vector3(0, anchorY, 0), screen: { x: free.x + free.w / 2, y: screenY - (anchorY - 230) * ppu1 }, rect: free, worldW: 620, worldH: wide ? 760 : 640, yaw: px * uv.par + Math.sin(this.time * 0.2) * 0.1 + uv.yaw, pitch: 0.1 + py * uv.par + uv.pitch, zoom: uv.zoom });
    this.world.setViewYaw(uv.yaw);
    this.world.plinth.position.set(0, 0, 0); this.ruler.group.visible = false; this.world.crowd.clearBallot();
    // the players themselves: a totem each, in their colour, on a beacon ring, with a name plate; their eyes follow the pointer
    const here = players.slice(0, 6); const p = this.pointer; const tame = p.inside && !p.touch;
    this.totems.sync(here.map(q => ({ id: q.id, name: q.name, color: q.color, ready: q.connected !== false })), dt, this.time, { x: tame ? p.x : 0, y: tame ? p.y : 0 }, this.reduced, uv.yaw);
    here.forEach((q, i) => this.arenaLabel(i, q, totemSlot(i).x, 1, 0, { status: q.connected === false ? 'OFFLINE' : 'READY', colW: 160, y: totemHeight(this.theme) + 36 + Math.floor(i / 2) * 36 }));
    for (let i = here.length; i < this.labels.length; i += 1) this.labels[i].mesh.visible = false;
    this.watch(0, 200, 0, 0.8, uv.yaw); this.placeLobbyHud(W, H, dt);
    this.updateWorld(dt, 230, 0, view, tower);
    this.post.tiltCenter = 0.5; this.post.blur = 5;
  }

  dispose() {
    for (const [name, fn] of [['pointermove', this.onPointerMove], ['pointerdown', this.onPointerDown], ['pointerup', this.onPointerUp], ['pointercancel', this.onPointerCancel], ['blur', this.onBlur], ['contextmenu', this.onContextMenu], ['dblclick', this.onDoubleClick], ['wheel', this.onWheel], ['keydown', this.onKeyDown]]) window.removeEventListener(name, fn);
    document.documentElement.removeEventListener('pointerleave', this.onPointerLeave);
    this.setCursor(''); this.endDrag(true); if (this.hud) { this.hud.dispose(); this.hud = null; }
    if (this.bricks) this.bricks.destroy(); if (this.voxel) this.voxel.dispose(); if (this.candidates) this.candidates.dispose();
    this.releaseMenu(); if (this.caption) { this.caption.el.remove(); this.caption = null; }
    document.documentElement.classList.remove('orbiting');
    this.scene.remove(this.cursorLight); this.cursorLight.dispose();
    if (this.totems) { this.scene.remove(this.totems.group); this.totems.dispose(); }
    if (this.crown) { this.scene.remove(this.crown); this.crown.userData.dispose(); }
    if (this.resultsHud) { this.resultsHud.dispose(); this.resultsHud = null; }
    if (this.lobbyHud) { this.lobbyHud.dispose(); this.lobbyHud = null; }
    this.engine.dispose();
  }
}
