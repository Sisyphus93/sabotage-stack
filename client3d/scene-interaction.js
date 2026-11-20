// Owns scene input, view adjustments, hints, and their lifecycle. No gameplay or WebGL.
import { OrbitController } from './orbit.js';
import { ZoomController } from './view-zoom.js';
import { createOrbitHud, ZOOM_STEP } from './orbit-hud.js';
import { clamp, damp } from './util.js';

const UI_SELECTOR = 'button, a, select, input, textarea, label, dialog, summary, [role="button"]:not(canvas)'; // (the game's canvas is a role=button for assistive tech, but it is the scene)
// Controls that read the arrow keys, Home and the digits themselves keep them: a text field, a select, a slider, a radio group, a menu, a dialog. A button or a link does not, so one that
// happens to hold the focus (the page focuses the Drop button in a round and the main action of each results screen) must not take the view's keys away.
const KEY_OWNERS = 'input, textarea, select, dialog, video, audio, [contenteditable]:not([contenteditable="false"]), [role="textbox"], [role="slider"], [role="spinbutton"], [role="radio"], [role="tab"], [role="listbox"], [role="option"], [role="combobox"], [role="menu"], [role="menuitem"], [role="menuitemradio"], [role="menuitemcheckbox"], [role="tree"], [role="treeitem"], [role="grid"], [role="gridcell"]';
// The results, podium and lobby controls sit in a corner next to the page's footer note: their hint is short, so it never runs over the note's words.
const SCENE_HINT = { mouse: '<span class="orbit-hint-full"><b>Drag</b> to turn, <b>scroll</b> to zoom</span><span class="orbit-hint-short"><b>Drag</b> to turn, <b>scroll</b> to zoom</span>' };
const PANEL_SELECTOR = '.side-card, .play-card, .result-info, .multiplayer-results, .preview-card, .home-copy, .home-bottom, .topbar, .footer-note, .orbit-hud';
const STAGE_SELECTOR = '#game-stage'; // the play field sits inside a panel (.play-card) but is itself part of the scene
const PLAY_HINT_KEY = 'sabotage-stack-play-view-hint-v1';
const closest = (target, selector) => Boolean(target && target.closest && target.closest(selector));
// Chrome: what the pointer must leave alone (controls, the page's glass panels), as opposed to the scene itself
const chromeAt = target => closest(target, UI_SELECTOR) || (closest(target, PANEL_SELECTOR) && !closest(target, STAGE_SELECTOR));

export class SceneInteraction {
  #orbit;
  #dolly;
  constructor({ doc = document, win = window, now = () => performance.now(),
    onTap = () => {}, onRushIntro = () => {}, onToy = () => {} } = {}) {
    Object.assign(this, { doc, win, now, onTap, onRushIntro, onToy });
    this.mode = ''; this.reduced = false;
    this.#orbit = new OrbitController(); this.#dolly = new ZoomController();
    this.pointer = { x: 0, y: 0, px: 0, py: 0, speed: 0, inside: false, lastX: 0, lastY: 0, lastT: 0,
      ndc: { x: 0, y: 0, set(x, y) { this.x = x; this.y = y; } } };
    this.drag = null; this.dragBlend = 0; this.cursor = ''; this.lastRightTap = null;
    this.hud = null; this.playHud = null; this.resultsHud = null; this.lobbyHud = null;
    this.hintAge = 0; this.playHintAge = 0; this.resultsHintAge = 0; this.lobbyHintAge = 0;
    this.idleFor = 0; this.contextGuardUntil = 0; this.active = false; this.disposed = false;
  }

  activate() {
    if (this.active || this.disposed) return;
    this.active = true;
    this.win.addEventListener('pointermove', this.onPointerMove = e => this.#handleMove(e), { passive: true });
    this.win.addEventListener('pointerdown', this.onPointerDown = e => this.#handleDown(e), { passive: true });
    this.win.addEventListener('pointerup', this.onPointerUp = e => this.#handleUp(e), { passive: true });
    this.win.addEventListener('pointercancel', this.onPointerCancel = e => this.#handleUp(e, true), { passive: true });
    this.doc.documentElement.addEventListener('pointerleave', this.onPointerLeave = () => { this.pointer.inside = false; });
    this.win.addEventListener('blur', this.onBlur = () => { this.pointer.inside = false; this.#endDrag(true); });
    this.win.addEventListener('contextmenu', this.onContextMenu = e => {
      if (!this.#canOrbit()) return;
      // a right-drag that began on the scene owns the menu wherever it is released (Windows raises it on mouse-up, over whatever is there)
      const turning = (this.drag && this.drag.button === 2) || this.now() < this.contextGuardUntil;
      if (turning || !chromeAt(e.target)) e.preventDefault();
    });
    // (a double click is the game's own two drops, so only the scenes where the left button is free reset on it - home, results, the lobby, the podium and the host's arena; the game resets on a double right click)
    this.win.addEventListener('dblclick', this.onDoubleClick = e => { if (this.mode !== 'play' && this.#canOrbit() && !chromeAt(e.target)) this.#resetView(); });
    this.win.addEventListener('wheel', this.onWheel = e => this.#handleWheel(e), { passive: false });
    this.win.addEventListener('keydown', this.onKeyDown = e => this.#handleKey(e));
  }

  get dragging() { return Boolean(this.drag); }
  get view() { return { yaw: this.#orbit.yaw, pitch: this.#orbit.pitch, zoom: this.#dolly.value, rotated: this.#orbit.rotated, zoomed: this.#dolly.zoomed }; }

  setContext({ mode = this.mode, reduced = this.reduced } = {}) {
    this.reduced = Boolean(reduced);
    if (mode === this.mode || this.disposed) return;
    this.mode = mode;
    this.#endDrag(true); this.#orbit.snap(); this.#dolly.snap();
    if (mode === 'hero') this.#openHud();
    else { this.lastRightTap = null; this.dragBlend = 0; this.setCursor(''); }
    if (mode === 'results' || mode === 'celebrate') this.#openResultsHud();
    if (mode === 'lobby') this.#openLobbyHud();
    if (mode === 'play' || mode === 'arena') this.#openPlayHud(); else this.#closePlayHud();
  }

  wake() { this.idleFor = 0; }
  endFrame() { this.pointer.speed *= 0.9; }

  // Stage supplies placement, never HUD objects or hint state. Home intentionally
  // marks reset availability from orbit alone, matching its existing controls.
  placeHud(kind, x, y, dt) {
    const hud = kind === 'hero' ? this.hud : kind === 'results' ? this.resultsHud : kind === 'lobby' ? this.lobbyHud : this.playHud;
    if (!hud) return;
    hud.place(x, y); hud.setRotated(this.#orbit.rotated || (kind !== 'hero' && this.#dolly.zoomed));
    const age = kind === 'hero' ? 'hintAge' : kind === 'results' ? 'resultsHintAge' : kind === 'lobby' ? 'lobbyHintAge' : 'playHintAge';
    this[age] += dt; if (this[age] > (kind === 'play' ? 12 : 10)) hud.fade();
  }

  samplePointer(event) {
    const p = this.pointer; const now = this.now(); const w = this.win.innerWidth; const h = this.win.innerHeight;
    const dt = Math.max(1, now - p.lastT);
    const speed = Math.hypot(event.clientX - p.lastX, event.clientY - p.lastY) / dt * 1000;
    p.speed = Math.min(5000, Math.max(speed, p.speed * 0.6)); p.lastX = event.clientX; p.lastY = event.clientY; p.lastT = now;
    p.x = event.clientX / w * 2 - 1; p.y = -(event.clientY / h * 2 - 1); p.ndc.set(p.x, p.y); p.inside = true;
    p.touch = event.pointerType === 'touch'; p.buttons = event.buttons || 0; // (the pixel feel waits while any button is down, a middle press included)
    p.overUi = chromeAt(event.target);
  }

  #handleMove(event) {
    this.samplePointer(event); this.idleFor = 0;
    const d = this.drag; if (!d || event.pointerId !== d.id) return;
    if (event.pointerType === 'mouse' && event.buttons === 0) { this.#endDrag(false, event); return; } // let go outside the window
    if (!d.moved && Math.hypot(event.clientX - d.x, event.clientY - d.y) > this.#orbit.tapSlop) d.moved = true;
    this.#orbit.move(event.clientX, event.clientY, event.timeStamp / 1000, { pitch: !d.touch });
  }

  #handleDown(event) {
    this.onRushIntro(); this.samplePointer(event); this.idleFor = 0;
    if (!this.#canOrbit(event.button) || this.drag || !event.isPrimary) return;
    if (event.button !== 0 && event.button !== 2) return; // the middle button stays the browser's (auto-scroll)
    if (this.pointer.overUi) return;
    this.drag = { id: event.pointerId, x: event.clientX, y: event.clientY, t: event.timeStamp, button: event.button, moved: false, touch: event.pointerType === 'touch' };
    this.#orbit.begin(event.clientX, event.clientY, event.timeStamp / 1000);
    this.doc.documentElement.classList.add('orbiting');
    const selection = this.win.getSelection && this.win.getSelection(); if (selection && selection.removeAllRanges) selection.removeAllRanges();
  }

  #handleUp(event, cancelled = false) {
    this.pointer.buttons = event.buttons || 0; // (a release with no move after it must not leave the pixel feel waiting)
    const d = this.drag; if (!d || event.pointerId !== d.id) return;
    if (event.pointerType === 'touch') this.pointer.inside = false; // a finger has no hover
    this.#endDrag(cancelled, event);
  }

  #endDrag(cancelled = false, event = null) {
    const d = this.drag; if (!d) return; this.drag = null;
    this.#orbit.end(event ? event.timeStamp / 1000 : this.now() / 1000);
    if (d.button === 2) this.contextGuardUntil = this.now() + 500;
    this.doc.documentElement.classList.remove('orbiting');
    if (d.moved) { this.#usedView(); return; }
    if (!cancelled && event && d.button === 0 && event.timeStamp - d.t < 600) this.onTap(event);
    else if (!cancelled && event && d.button === 2) this.#handleRightTap(event);
  }

  #handleRightTap(event) {
    const last = this.lastRightTap; const t = event.timeStamp;
    if (last && t - last.t < 420 && Math.hypot(event.clientX - last.x, event.clientY - last.y) < 12) { this.lastRightTap = null; this.#resetView(); } else this.lastRightTap = { t, x: event.clientX, y: event.clientY };
  }

  #handleWheel(event) {
    if (event.defaultPrevented || event.ctrlKey || event.metaKey || !this.#canOrbit()) return;
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || chromeAt(event.target) || this.doc.querySelector('dialog[open]')) return;
    this.#dolly.setReduced(this.reduced);
    if (this.#dolly.wheel(event.deltaY, event.deltaMode, event.timeStamp / 1000)) { event.preventDefault(); this.#usedView(); }
  }

  #usedView() { this.idleFor = 0; const hud = this.#sceneHud(); if (hud) hud.quiet(); }

  #sceneHud() { switch (this.mode) { case 'hero': return this.hud; case 'results': case 'celebrate': return this.resultsHud; case 'lobby': return this.lobbyHud; default: return this.playHud; } }

  #resetView(duration = 0.9) { this.#orbit.reset(duration); this.#dolly.reset(duration); this.idleFor = 0; }

  #handleKey(event) {
    this.onRushIntro();
    if (!this.#canOrbit() || event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) return;
    if (closest(event.target, KEY_OWNERS)) return;
    const step = event.shiftKey ? Math.PI / 2 : Math.PI / 8; const now = event.timeStamp / 1000;
    if (event.key === 'ArrowLeft') { this.#orbit.rotateBy(-step, 0.35); this.#usedView(); event.preventDefault(); }
    else if (event.key === 'ArrowRight') { this.#orbit.rotateBy(step, 0.35); this.#usedView(); event.preventDefault(); }
    else if (event.key === 'Home' || event.key === '0') { this.#resetView(); event.preventDefault(); }
    else if (event.key === '+' || event.key === '=') { this.#dolly.setReduced(this.reduced); this.#dolly.zoomBy(ZOOM_STEP, now); this.#usedView(); event.preventDefault(); }
    else if (event.key === '-' || event.key === '_') { this.#dolly.setReduced(this.reduced); this.#dolly.zoomBy(1 / ZOOM_STEP, now); this.#usedView(); event.preventDefault(); }
  }

  #canOrbit(button = 2) {
    switch (this.mode) {
      case 'hero': case 'results': case 'arena': case 'lobby': case 'celebrate': return true; // (the host's arena, the lobby and the podium have no use for the left button)
      case 'play': return button === 2;
      default: return false;
    }
  }

  setCursor(value) { if (value === this.cursor) return; this.cursor = value; this.doc.documentElement.style.cursor = value; }

  #openHud() {
    if (this.hud) return; this.hintAge = 0;
    let storage = null; try { storage = this.win.localStorage; } catch (_) { storage = null; }
    const coarse = Boolean(this.win.matchMedia && this.win.matchMedia('(pointer: coarse)').matches);
    this.hud = createOrbitHud({ doc: this.doc, storage, touch: coarse, onTurn: delta => { this.#orbit.rotateBy(delta); this.#usedView(); }, onReset: () => this.#resetView(), onZoom: factor => this.#zoomBy(factor), onToy: () => this.onToy() });
  }

  #openResultsHud() { this.resultsHintAge = 0; if (!this.resultsHud) this.resultsHud = this.#makeSceneHud('results-screen', 'orbit-hud-results'); }

  #openLobbyHud() { this.lobbyHintAge = 0; if (!this.lobbyHud) this.lobbyHud = this.#makeSceneHud('room-screen', 'orbit-hud-lobby'); }

  #makeSceneHud(hostId, id) {
    let storage = null; try { storage = this.win.localStorage; } catch (_) { storage = null; }
    const coarse = Boolean(this.win.matchMedia && this.win.matchMedia('(pointer: coarse)').matches);
    return createOrbitHud({ doc: this.doc, storage, touch: coarse, hostId, id, dock: false, hint: SCENE_HINT, onTurn: delta => { this.#orbit.rotateBy(delta); this.#usedView(); }, onReset: () => this.#resetView(), onZoom: factor => this.#zoomBy(factor) });
  }

  #openPlayHud() {
    if (this.playHud) return; this.playHintAge = 0;
    if (this.win.matchMedia && this.win.matchMedia('(pointer: coarse)').matches) return;
    let storage = null; try { storage = this.win.localStorage; } catch (_) { storage = null; }
    let shown = 0; try { shown = Number(storage.getItem(`${PLAY_HINT_KEY}-shown`)) || 0; storage.setItem(`${PLAY_HINT_KEY}-shown`, String(shown + 1)); } catch (_) { shown = 0; }
    const hint = { mouse: '<span class="orbit-hint-full"><b>Right-drag</b> to look around, <b>scroll</b> to zoom</span><span class="orbit-hint-short"><b>Right-drag</b> to look, <b>scroll</b> to zoom</span>' };
    this.playHud = createOrbitHud({ doc: this.doc, storage, hostId: 'game-screen', id: 'orbit-hud-play', dock: false, layout: 'stage', hint, hintKey: PLAY_HINT_KEY, onTurn: delta => { this.#orbit.rotateBy(delta); this.#usedView(); }, onReset: () => this.#resetView(), onZoom: factor => this.#zoomBy(factor) });
    if (shown >= 3 && this.playHud) this.playHud.fade(); // (it has said its piece: three games, or the first time it was used)
  }

  #closePlayHud() { if (this.playHud) { this.playHud.dispose(); this.playHud = null; } }

  #zoomBy(factor) { this.#dolly.setReduced(this.reduced); this.#dolly.zoomBy(factor, this.now() / 1000); this.#usedView(); }

  update(dt, focusY, { idleReset = false, cameraDistance = 1700 } = {}) {
    const o = this.#orbit; const z = this.#dolly; const reduced = this.reduced;
    const floorPitch = Math.asin(clamp((10 - focusY) / (cameraDistance || 1700), -0.95, 0.95)); // the lowest view that keeps the camera above the floor
    o.setReduced(reduced); o.minPitch = Math.min(0, floorPitch - 0.045); o.update(dt); z.setReduced(reduced); z.update(dt);
    const turning = Boolean(this.drag) || o.moving;
    // a scene on show (home, results) returns to its default view by itself after 30 s untouched; the game keeps whatever view its player chose
    if (idleReset && !reduced && (o.rotated || z.zoomed) && !turning && !z.moving) { this.idleFor += dt; if (this.idleFor > 30) { this.#resetView(2.4); this.idleFor = 0; } } else if (turning || z.moving) this.idleFor = 0;
    // the pointer's own parallax steps aside while the scene is being turned, and comes back as it settles
    this.dragBlend = damp(this.dragBlend, turning ? 1 : 0, this.drag ? 14 : 2.2, dt);
    return { yaw: o.yaw, pitch: o.pitch, zoom: z.value, par: 1 - this.dragBlend };
  }

  dispose() {
    if (this.disposed) return;
    for (const [name, fn] of [['pointermove', this.onPointerMove], ['pointerdown', this.onPointerDown], ['pointerup', this.onPointerUp], ['pointercancel', this.onPointerCancel], ['blur', this.onBlur], ['contextmenu', this.onContextMenu], ['dblclick', this.onDoubleClick], ['wheel', this.onWheel], ['keydown', this.onKeyDown]]) this.win.removeEventListener(name, fn);
    this.doc.documentElement.removeEventListener('pointerleave', this.onPointerLeave);
    this.setCursor(''); this.#endDrag(true); if (this.hud) { this.hud.dispose(); this.hud = null; }
    this.#closePlayHud();
    if (this.resultsHud) { this.resultsHud.dispose(); this.resultsHud = null; }
    if (this.lobbyHud) { this.lobbyHud.dispose(); this.lobbyHud = null; }
    this.doc.documentElement.classList.remove('orbiting');
    this.pointer.inside = false; this.pointer.buttons = 0; this.lastRightTap = null; this.contextGuardUntil = 0;
    this.#orbit.snap(); this.#dolly.snap(); this.active = false; this.disposed = true;
  }
}
