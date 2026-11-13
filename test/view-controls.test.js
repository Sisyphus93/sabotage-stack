'use strict';
// Looking around the 3D scenes: wheel zoom, the game's right-button orbit, the on-screen view controls, the bottoms of the pages,
// and the guards that keep one bad pixel from blacking out a frame. Everything here is the render / interaction layer: the rules,
// the protocol and the solo logic are covered by their own tests and are untouched.
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..');
const HTML_PATH = path.join(ROOT, 'sabotage-stack.html');
const html = fs.readFileSync(HTML_PATH, 'utf8');
const stageSource = fs.readFileSync(path.join(ROOT, 'client3d', 'stage.js'), 'utf8');
const load = name => import(path.join(ROOT, 'client3d', name));
const near = (a, b, eps = 1e-9) => Math.abs(a - b) <= eps;

let boot = null;
try { ({ boot } = require('./helpers/client-harness')); } catch (error) { boot = null; }

describe('wheel zoom (client3d/view-zoom.js)', () => {
  test('a wheel event is read in pixels whatever unit the browser reports, and one event never zooms by more than a hard flick', async () => {
    const { wheelPixels, zoomFactor } = await load('view-zoom.js');
    assert.equal(wheelPixels(100, 0), 100); assert.equal(wheelPixels(3, 1), 99, 'three lines'); assert.equal(wheelPixels(-9999, 0), -240, 'clamped');
    assert.equal(wheelPixels(1, 2), 240, 'a page is clamped too'); assert.equal(wheelPixels(NaN), 0); assert.equal(wheelPixels(undefined), 0);
    assert.ok(near(zoomFactor(-100), Math.exp(0.13))); assert.ok(near(zoomFactor(-100) * zoomFactor(100), 1), 'a notch back undoes a notch forward');
    assert.ok(zoomFactor(-100) > 1 && zoomFactor(100) < 1, 'rolling the wheel away from you zooms in');
  });

  test('the wheel zooms in and out between the limits and says whether it used the event', async () => {
    const { ZoomController, ZOOM_MIN, ZOOM_MAX } = await load('view-zoom.js');
    assert.ok(ZOOM_MIN < 1 && ZOOM_MAX > 1 && ZOOM_MIN === 0.5);
    const z = new ZoomController();
    assert.equal(z.value, 1); assert.equal(z.zoomed, false);
    for (let i = 0; i < 5; i += 1) assert.equal(z.wheel(-100, 0, i * 0.05), true);
    assert.ok(near(z.target, Math.exp(0.65)), 'five notches in'); assert.ok(z.zoomed); assert.equal(z.value, 1, 'the value eases towards the target, it does not jump');
    for (let i = 0; i < 5; i += 1) z.wheel(100, 0, 1 + i * 0.05);
    assert.ok(near(z.target, 1, 1e-9), 'five notches out undo them'); assert.equal(z.zoomed, false, 'back at the default view counts as not zoomed');
    assert.equal(z.wheel(0), false, 'an empty event is not used'); assert.equal(z.wheel(NaN), false);
    for (let i = 0; i < 80; i += 1) z.wheel(-100, 0, 2 + i * 0.01);
    assert.equal(z.target, ZOOM_MAX); assert.ok(z.atMax && !z.atMin);
    for (let i = 0; i < 80; i += 1) z.wheel(100, 0, 3 + i * 0.01);
    assert.equal(z.target, ZOOM_MIN); assert.ok(z.atMin && !z.atMax);
  });

  test('against a limit the wheel is handed back to the page once the spin that reached it has died away', async () => {
    const { ZoomController } = await load('view-zoom.js');
    const z = new ZoomController(); let t = 10;
    while (!z.atMax) { z.wheel(-100, 0, t); t += 0.01; }
    const reachedAt = t - 0.01; assert.ok(z.hold > 0.3 && z.hold < 1, 'a short pause, not a long one');
    assert.equal(z.wheel(-100, 0, reachedAt + 0.1), true, 'still inside the spin: the page must not lurch');
    assert.equal(z.wheel(-100, 0, reachedAt + z.hold - 0.02), true);
    assert.equal(z.wheel(-100, 0, reachedAt + z.hold + 0.05), false, 'a deliberate wheel against the limit scrolls the page again');
    assert.equal(z.wheel(-100, 0, reachedAt + 5), false, 'and goes on doing so');
    assert.equal(z.wheel(100, 0, reachedAt + 6), true, 'the other way is always the scene\'s');
    assert.ok(z.target < z.max);
  });

  test('the + and - buttons take fixed steps, and a button press at the limit changes nothing', async () => {
    const { ZoomController, ZOOM_MAX } = await load('view-zoom.js');
    const z = new ZoomController();
    assert.equal(z.zoomBy(1.3), true); assert.ok(near(z.target, 1.3)); assert.equal(z.zoomBy(1 / 1.3), true); assert.ok(near(z.target, 1));
    assert.equal(z.zoomBy(0), false, 'nonsense is no step'); assert.equal(z.zoomBy(NaN), false); assert.equal(z.zoomBy(-2), false);
    for (let i = 0; i < 30; i += 1) z.zoomBy(1.3);
    assert.equal(z.target, ZOOM_MAX); assert.equal(z.zoomBy(1.3), false);
  });

  test('the value glides to the target in the logarithm (in and out take as long) and Reduced Motion goes at once', async () => {
    const { ZoomController } = await load('view-zoom.js');
    const run = (c, seconds) => { const trail = []; for (let i = 0; i < Math.round(seconds * 60); i += 1) { c.update(1 / 60); trail.push(c.value); } return trail; };
    const a = new ZoomController(); a.wheel(-300, 0, 0); const up = run(a, 0.5);
    assert.ok(up.every((v, i) => i === 0 || v >= up[i - 1]) && up[0] > 1 && up.at(-1) < a.target + 1e-9, 'monotone, never past the target');
    run(a, 2); assert.equal(a.value, a.target, 'it lands exactly'); assert.equal(a.moving, false);
    const b = new ZoomController(); b.wheel(300, 0, 0); const down = run(b, 0.5);
    assert.ok(near(Math.log(up[29]), -Math.log(down[29]), 1e-9), 'symmetric in the logarithm: the zoom out that undoes a zoom in takes the same time');
    const r = new ZoomController(); r.setReduced(true); r.wheel(-300, 0, 0); assert.equal(r.value, r.target, 'instant');
    r.zoomBy(1.3, 1); assert.equal(r.value, r.target); r.reset(); assert.equal(r.value, 1); assert.equal(r.zoomed, false);
  });

  test('reset glides back to the default view (a new wheel event takes over), and snap leaves the scene at once', async () => {
    const { ZoomController } = await load('view-zoom.js');
    const z = new ZoomController(); z.wheel(-400, 0, 0); z.wheel(-400, 0, 0.01); for (let i = 0; i < 90; i += 1) z.update(1 / 60);
    const from = z.value; assert.ok(from > 1.5);
    z.reset(0.9); assert.equal(z.target, 1, 'the target is home at once'); assert.ok(z.moving);
    const trail = []; for (let i = 0; i < 20; i += 1) { z.update(1 / 60); trail.push(z.value); }
    assert.ok(trail.every((v, i) => i === 0 || v <= trail[i - 1]) && trail[0] < from, 'eased, not a cut');
    z.wheel(-100, 0, 5); assert.equal(z.moving, true); assert.ok(z.target > 1, 'the visitor takes the wheel back mid-glide');
    for (let i = 0; i < 120; i += 1) z.update(1 / 60); assert.equal(z.value, z.target);
    z.reset(0.9); for (let i = 0; i < 70; i += 1) z.update(1 / 60); assert.equal(z.value, 1); assert.equal(z.moving, false);
    z.wheel(-200, 0, 9); z.snap(); assert.equal(z.value, 1); assert.equal(z.target, 1); assert.equal(z.moving, false);
  });
});

describe('the stage routes the wheel, the right button and the keys (client3d/stage.js)', () => {
  // The Stage needs WebGL to be built, so its methods run on a stand-in that carries only what they read.
  const withDocument = async fn => {
    const saved = globalThis.document; let dialog = false;
    globalThis.document = { querySelector: selector => (dialog && /dialog/.test(selector) ? {} : null) };
    try { return await fn({ openDialog: () => { dialog = true; } }); } finally { globalThis.document = saved; }
  };
  const scene = { closest: () => null }; // nothing of the page under the pointer
  const under = (...parts) => ({ closest: selector => (parts.some(part => selector.includes(part)) ? {} : null) });
  const wheelEvent = (init = {}) => ({ deltaY: -100, deltaX: 0, deltaMode: 0, ctrlKey: false, metaKey: false, defaultPrevented: false, timeStamp: 1000, target: scene, preventDefault() { this.defaultPrevented = true; }, ...init });

  test('which scenes turn, with which mouse button: the game keeps the left button for DROP', async () => {
    const { Stage } = await load('stage.js'); const can = (mode, button) => Stage.prototype.canOrbit.call({ mode }, button);
    for (const mode of ['hero', 'results', 'arena', 'lobby', 'celebrate']) for (const button of [0, 1, 2]) assert.equal(can(mode, button), true, `${mode} turns with any button`);
    assert.equal(can('play', 2), true, 'the right button turns the game'); assert.equal(can('play', 0), false, 'the left button is DROP'); assert.equal(can('play', 1), false);
    assert.equal(Stage.prototype.canOrbit.call({ mode: 'play' }), true, 'with no button named, the question is whether the scene can be turned at all');
    for (const button of [0, 2]) assert.equal(can('', button), false, 'before any scene is on show nothing turns');
  });

  test('the wheel zooms the scene under it and nothing else: panels, controls, dialogs, browser zoom and sideways scrolling keep theirs', async () => {
    const { Stage } = await load('stage.js'); const { ZoomController } = await load('view-zoom.js');
    await withDocument(async ({ openDialog }) => {
      const make = mode => ({ mode, reduced: false, dolly: new ZoomController(), canOrbit: Stage.prototype.canOrbit, usedView() { this.used = (this.used || 0) + 1; } });
      const wheel = (stage, init) => { const event = wheelEvent(init); Stage.prototype.handleWheel.call(stage, event); return event; };
      for (const mode of ['hero', 'play', 'arena', 'results', 'lobby', 'celebrate']) {
        const stage = make(mode); const event = wheel(stage);
        assert.equal(event.defaultPrevented, true, `${mode}: the page does not scroll under a zoom`); assert.ok(stage.dolly.target > 1, `${mode} zooms in`); assert.equal(stage.used, 1, 'and counts as the visitor using the view');
        wheel(stage, { deltaY: 300 }); assert.ok(stage.dolly.target < Math.exp(0.13), `${mode} zooms out again`);
      }
      { const stage = make(''); const event = wheel(stage); assert.equal(event.defaultPrevented, false); assert.equal(stage.dolly.target, 1, 'before any scene is on show nothing zooms'); }
      { const stage = make('celebrate'); const event = wheel(stage, { target: under('.multiplayer-results') }); assert.equal(event.defaultPrevented, false, 'the podium\'s result cards scroll the page'); assert.equal(stage.dolly.target, 1); }
      const kept = (label, init, mode = 'hero') => { const stage = make(mode); const event = wheel(stage, init); if (!init.defaultPrevented) assert.equal(event.defaultPrevented, false, `${label}: the page keeps the wheel`); assert.equal(stage.dolly.target, 1, `${label}: nothing zooms`); };
      kept('Ctrl + wheel (browser zoom, a trackpad pinch)', { ctrlKey: true }); kept('Cmd + wheel', { metaKey: true });
      kept('a sideways swipe', { deltaX: 120, deltaY: 20 }); kept('an event already handled', { defaultPrevented: true });
      kept('over the glass panel of the home page', { target: under('.home-copy') }); kept('over a button', { target: under('button') });
      kept('over the side cards of the game', { target: under('.side-card') }, 'play'); kept('over the tone button in the play card', { target: under('button', '.play-card') }, 'play');
      const field = make('play'); const onField = wheel(field, { target: under('.play-card', '#game-stage') });
      assert.equal(onField.defaultPrevented, true, 'the play field sits inside a panel but is the scene'); assert.ok(field.dolly.target > 1);
      openDialog(); kept('a dialog is open', {});
    });
  });

  test('the keys turn, zoom and reset the view from anywhere but a control that reads those keys itself (a button holding the focus must not take them away)', async () => {
    const { Stage } = await load('stage.js'); const { ZoomController } = await load('view-zoom.js'); const { JSDOM } = require('jsdom');
    const { document: doc } = new JSDOM(`<body><h1 id="heading" tabindex="-1">Results</h1><button id="drop">Drop</button><a id="link" href="#x">link</a><canvas id="game-canvas" role="button" tabindex="0"></canvas>
      <input id="text"><textarea id="area"></textarea><select id="select"><option>a</option></select><div id="slider" role="slider" tabindex="0"></div><div id="editable" contenteditable="true">x</div><div id="plain" contenteditable="false">x</div>
      <div role="radiogroup"><button id="radio" role="radio">a</button></div><div role="menu"><button id="item" role="menuitem">a</button></div><dialog id="dialog"><button id="inside">ok</button></dialog></body>`).window;
    const make = mode => { const calls = []; const stage = { mode, reduced: false, calls, orbit: { rotateBy: (...a) => calls.push(['turn', ...a]) }, dolly: new ZoomController(), resetView: () => calls.push(['reset']), usedView: () => calls.push(['used']), rushIntro() {}, canOrbit: Stage.prototype.canOrbit }; return stage; };
    const press = (stage, key, init = {}, target = doc.body) => { const event = { key, target, shiftKey: false, ctrlKey: false, metaKey: false, altKey: false, defaultPrevented: false, timeStamp: 1000, preventDefault() { this.defaultPrevented = true; }, ...init }; Stage.prototype.handleKey.call(stage, event); return event; };

    for (const mode of ['hero', 'results', 'arena', 'lobby', 'celebrate', 'play']) {
      const stage = make(mode);
      let event = press(stage, 'ArrowLeft'); assert.deepEqual(stage.calls[0], ['turn', -Math.PI / 8, 0.35], `${mode}: an eighth of a turn`); assert.equal(event.defaultPrevented, true, 'and the page does not scroll sideways');
      press(stage, 'ArrowRight', { shiftKey: true }); assert.deepEqual(stage.calls[2], ['turn', Math.PI / 2, 0.35], `${mode}: Shift = a quarter turn`);
      press(stage, '+'); const zin = stage.dolly.target; assert.ok(zin > 1, `${mode}: + zooms in`); press(stage, '='); assert.ok(stage.dolly.target > zin, '= is + without Shift');
      press(stage, '-'); press(stage, '_'); assert.ok(stage.dolly.target < zin, `${mode}: - zooms out`);
      stage.calls.length = 0; press(stage, '0'); press(stage, 'Home'); assert.deepEqual(stage.calls.filter(c => c[0] === 'reset').length, 2, `${mode}: 0 and Home reset`);
      assert.ok(stage.calls.length === 2, 'a reset does not count as using the view (it is the way back)');
    }
    const used = make('hero'); press(used, 'ArrowLeft'); press(used, '+'); assert.equal(used.calls.filter(c => c[0] === 'used').length, 2, 'turning and zooming count as using the view (the hints can go)');

    // the Drop button holds the focus in a round, a results screen's main action on the podium: neither is a reason to lose the keys
    for (const id of ['heading', 'drop', 'link', 'game-canvas']) { const stage = make('play'); const event = press(stage, 'ArrowLeft', {}, doc.getElementById(id)); assert.equal(event.defaultPrevented, true, id); assert.equal(stage.calls.length > 0, true, `${id} passes the view's keys on`); }
    { const stage = make('play'); const event = press(stage, 'ArrowLeft', {}, doc.getElementById('inside')); assert.equal(event.defaultPrevented, false); assert.equal(stage.calls.length, 0, 'a button inside a dialog is the dialog\'s'); }
    for (const id of ['text', 'area', 'select', 'slider', 'editable', 'radio', 'item', 'dialog']) { const stage = make('hero'); const event = press(stage, 'ArrowRight', {}, doc.getElementById(id)); assert.equal(event.defaultPrevented, false, `${id} keeps its own arrow keys`); assert.equal(stage.calls.length, 0, id); press(stage, '0', {}, doc.getElementById(id)); assert.equal(stage.calls.length, 0, `${id} keeps the digits too`); }
    { const stage = make('hero'); press(stage, 'ArrowRight', {}, doc.getElementById('plain')); assert.ok(stage.calls.some(c => c[0] === 'turn'), 'contenteditable="false" is not a text field'); }

    // nothing else is ever taken
    for (const init of [{ ctrlKey: true }, { metaKey: true }, { altKey: true }, { defaultPrevented: true }]) { const stage = make('hero'); press(stage, 'ArrowLeft', init); press(stage, '0', init); assert.equal(stage.calls.length, 0, JSON.stringify(init)); }
    { const stage = make('hero'); for (const key of ['a', 'Enter', ' ', 'Escape', '1', '2', '3', 'ArrowUp', 'ArrowDown', 'Tab']) { const event = press(stage, key); assert.equal(event.defaultPrevented, false, `${key} stays the page's`); } assert.equal(stage.calls.length, 0); }
    { const stage = make(''); press(stage, 'ArrowLeft'); press(stage, '0'); assert.equal(stage.calls.length, 0, 'with no scene on show there is nothing to turn'); }
  });

  test('a visitor who keeps rolling against the zoom limit gets the page back after a pause', async () => {
    const { Stage } = await load('stage.js'); const { ZoomController } = await load('view-zoom.js');
    await withDocument(async () => {
      const stage = { mode: 'hero', reduced: false, dolly: new ZoomController(), canOrbit: Stage.prototype.canOrbit, usedView() {} };
      let t = 5; const roll = () => { const event = wheelEvent({ timeStamp: t * 1000 }); Stage.prototype.handleWheel.call(stage, event); return event.defaultPrevented; };
      for (let i = 0; i < 80; i += 1) { roll(); t += 0.01; }
      assert.ok(stage.dolly.atMax); t += 0.9; assert.equal(roll(), false, 'a wheel against the limit after a pause scrolls the page');
      stage.dolly.wheel(100, 0, t); assert.equal(roll(), true, 'and zooming back is the scene\'s again');
    });
  });

  test('a scene on show returns to its default view by itself after 30 s untouched; the game keeps the view its player chose', async () => {
    const { Stage } = await load('stage.js'); const { ZoomController } = await load('view-zoom.js'); const { OrbitController } = await load('orbit.js');
    const make = mode => { const s = { mode, reduced: false, orbit: new OrbitController(), dolly: new ZoomController(), drag: null, idleFor: 0, dragBlend: 0, camDist: 1700, resets: 0, resetView(d) { this.resets += 1; this.orbit.reset(d); this.dolly.reset(d); } }; s.orbit.rotateBy(1.2); s.orbit.update(5); s.dolly.zoomBy(1.6, 0); s.dolly.update(5); return s; };
    const idle = (s, seconds, opts) => { for (let i = 0; i < seconds * 10; i += 1) Stage.prototype.userView.call(s, 0.1, 220, opts); };
    const hero = make('hero'); idle(hero, 29, { idleReset: true }); assert.equal(hero.resets, 0, 'not yet'); idle(hero, 3, { idleReset: true }); assert.equal(hero.resets, 1, 'after 30 s');
    const play = make('play'); idle(play, 120, {}); assert.equal(play.resets, 0, 'the game keeps the view its player chose'); assert.ok(play.dolly.zoomed && play.orbit.rotated);
    const held = make('hero'); held.drag = { button: 0 }; idle(held, 60, { idleReset: true }); assert.equal(held.resets, 0, 'never in the middle of a drag');
    const calm = make('results'); calm.reduced = true; idle(calm, 60, { idleReset: true }); assert.equal(calm.resets, 0, 'Reduced Motion never animates a reset by itself');
  });

  test('the view the visitor chose is returned square on and the floor is never gone through', async () => {
    const { Stage } = await load('stage.js'); const { ZoomController } = await load('view-zoom.js'); const { OrbitController } = await load('orbit.js');
    const s = { mode: 'play', reduced: false, orbit: new OrbitController(), dolly: new ZoomController(), drag: null, idleFor: 0, dragBlend: 0, camDist: 1700 };
    s.orbit.rotateBy(0.4); s.orbit.update(3); for (let i = 0; i < 20; i += 1) Stage.prototype.userView.call(s, 0.05, 220);
    assert.ok(s.orbit.minPitch <= 0 && s.orbit.minPitch > -0.4, 'a tower at height 220 leaves room to look up from just above the floor, no more');
    const view = Stage.prototype.userView.call(s, 0.016, 220);
    assert.deepEqual(Object.keys(view).sort(), ['par', 'pitch', 'yaw', 'zoom']); assert.ok(near(view.yaw, s.orbit.yaw) && view.zoom === s.dolly.value && view.par > 0.5);
    const tall = { ...s, orbit: new OrbitController(), dolly: new ZoomController() }; Stage.prototype.userView.call(tall, 0.016, 2000);
    assert.ok(tall.orbit.minPitch <= s.orbit.minPitch, 'a tall tower is looked at from further below, not through the floor');
  });

  test('the listeners are wired the way the controls need: a wheel that may be cancelled, the game\'s context menu kept for the visitor\'s drag, resets, keys', () => {
    assert.match(stageSource, /window\.addEventListener\('wheel', this\.onWheel = e => this\.handleWheel\(e\), \{ passive: false \}\)/, 'preventDefault needs a non-passive wheel listener');
    assert.match(stageSource, /window\.addEventListener\('contextmenu', this\.onContextMenu = e => \{\s*if \(!this\.canOrbit\(\)\) return;/, 'the right button owns the menu wherever a scene turns');
    assert.match(stageSource, /this\.mode !== 'play' && this\.canOrbit\(\) && !chromeAt\(e\.target\)\) this\.resetView\(\)/, 'a double click is two drops in the game, so only the free-handed scenes reset on it');
    assert.match(stageSource, /handleRightTap\(event\) \{[^]*?t - last\.t < 420[^]*?this\.resetView\(\)/, 'two quick right clicks reset the game\'s view');
    assert.match(stageSource, /event\.key === 'Home' \|\| event\.key === '0'/, '0 and Home reset');
    assert.match(stageSource, /const chromeAt = target => closest\(target, UI_SELECTOR\) \|\| \(closest\(target, PANEL_SELECTOR\) && !closest\(target, STAGE_SELECTOR\)\)/);
    assert.match(stageSource, /\[role="button"\]:not\(canvas\)/, 'the game\'s own canvas is a role=button for assistive tech but is the scene');
    // the game's camera stays the visitor's view ON TOP of the scene's own (the zoom sabotage is a separate factor)
    assert.match(stageSource, /yaw: this\.rig\.yaw \+ uv\.yaw, pitch: this\.rig\.pitch \+ uv\.pitch, zoom: this\.rig\.zoom \* uv\.zoom/);
    // the page keeps owning the drop: the canvas and the Drop key ignore the other mouse buttons
    assert.match(html, /elements\.drop\.addEventListener\('pointerdown'[^]*?event\.pointerType === 'mouse' && event\.button !== 0/);
    assert.match(html, /elements\.gameCanvas\.addEventListener\('pointerdown'[^]*?event\.pointerType === 'mouse' && event\.button !== 0/);
    assert.match(html, /elements\.gameCanvas\.addEventListener\('contextmenu', event => event\.preventDefault\(\)\)/);
  });
});

describe('the game\'s view controls (client3d/orbit-hud.js)', () => {
  test('zoom buttons sit beside the turn buttons, named for assistive tech, and call back with the step', async () => {
    assert.ok(boot, 'the jsdom client harness loads'); const { createOrbitHud, ZOOM_STEP } = await load('orbit-hud.js'); const page = await boot(HTML_PATH);
    try {
      const zooms = []; const hud = createOrbitHud({ doc: page.document, storage: null, onZoom: f => zooms.push(f) });
      const row = [...hud.root.querySelectorAll('.orbit-row button')].map(b => b.dataset.zoom ? `zoom:${b.dataset.zoom}` : `orbit:${b.dataset.orbit}`);
      assert.deepEqual(row, ['zoom:out', 'zoom:in', 'orbit:left', 'orbit:reset', 'orbit:right']);
      assert.deepEqual([...hud.root.querySelectorAll('button[data-orbit]')].map(b => b.dataset.orbit), ['left', 'reset', 'right'], 'the three turn buttons are unchanged');
      const zoomButtons = [...hud.root.querySelectorAll('button[data-zoom]')];
      assert.ok(zoomButtons.every(b => b.type === 'button' && b.getAttribute('aria-label') && b.title && b.querySelector('svg[aria-hidden="true"]')));
      zoomButtons[1].click(); zoomButtons[0].click(); assert.deepEqual(zooms, [ZOOM_STEP, 1 / ZOOM_STEP]); assert.ok(ZOOM_STEP > 1 && ZOOM_STEP < 2);
      hud.dispose(); assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('the game\'s controls live in the game screen with their own hint, remembered apart from the home page\'s', async () => {
    const { createOrbitHud, hintSeen, rememberHint } = await load('orbit-hud.js'); const page = await boot(HTML_PATH);
    try {
      const store = new Map(); const storage = { getItem: k => (store.has(k) ? store.get(k) : null), setItem: (k, v) => store.set(k, v) };
      const hint = { mouse: '<span class="orbit-hint-full"><b>Right-drag</b> to look around, <b>scroll</b> to zoom</span><span class="orbit-hint-short">Right-drag to look</span>' };
      const hud = createOrbitHud({ doc: page.document, storage, hostId: 'game-screen', id: 'orbit-hud-play', dock: false, layout: 'stage', hint, hintKey: 'play-hint-test' });
      assert.ok(page.document.getElementById('game-screen').contains(hud.root), 'inside the game screen, so the page hides it with the screen');
      assert.ok(hud.root.classList.contains('is-stage')); assert.equal(hud.root.querySelector('.toy-dock'), null, 'no toy dock in the game');
      assert.match(hud.root.querySelector('.orbit-hint').textContent, /Right-drag to look around/); assert.ok(hud.root.firstElementChild.classList.contains('orbit-hint'), 'the hint sits above the buttons');
      assert.equal(hud.root.querySelectorAll('.orbit-row button').length, 5);
      assert.equal(hintSeen(storage, 'play-hint-test'), false); hud.quiet(); assert.equal(hintSeen(storage, 'play-hint-test'), true, 'remembered under its own key');
      assert.equal(hintSeen(storage), false, 'the home page\'s hint is not used up by the game');
      rememberHint(storage); assert.equal(hintSeen(storage), true); hud.dispose();
      const again = createOrbitHud({ doc: page.document, storage, hostId: 'game-screen', id: 'orbit-hud-play', layout: 'stage', hintKey: 'play-hint-test' }); assert.ok(again.root.classList.contains('is-quiet')); again.dispose();
      const home = createOrbitHud({ doc: page.document, storage: { getItem: () => null, setItem() {} } });
      assert.match(home.root.querySelector('.orbit-hint').textContent, /scroll to zoom/i, 'the home hint tells about the wheel too'); assert.ok(!home.root.classList.contains('is-stage')); home.dispose();
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('the stage opens the game\'s controls only where a mouse can use them (not on a touch screen) and keeps them off the sky', () => {
    assert.match(stageSource, /openPlayHud\(\) \{[^]*?matchMedia\('\(pointer: coarse\)'\)\.matches\) return;/, 'a thumb plays the board; a finger cannot hold the right button');
    assert.match(stageSource, /hud\.place\(rect\.x \+ rect\.w - 10, rect\.y \+ rect\.h - 12\)/, 'the bottom-right corner of the play field: over the floor, never over the votes in the sky');
    assert.match(stageSource, /if \(mode === 'play' \|\| mode === 'arena'\) this\.openPlayHud\(\); else this\.closePlayHud\(\);/);
    assert.match(stageSource, /const ceiling = sr && sr\.height > 4 && sr\.top < H \? sr\.top - 10 : Infinity;/, 'the home controls ride above the strip when the page is scrolled to it');
  });
});

describe('the bottoms of the pages and the controls\' CSS (sabotage-stack.html)', () => {
  test('the strip under the home scene and the Drop row under the tower are rounded, padded glass (only while the 3D layer runs)', () => {
    assert.match(html, /html\.has-3d \.home-bottom \{\s*min-height: 44px; height: auto; padding: 8px 18px;[^}]*border: 1px solid var\(--edge\); border-radius: 16px;/, 'the strip keeps its 44px on one line and only grows when its words wrap');
    assert.match(html, /html\.has-3d \.control-row \{\s*width: auto; margin-top: 4px; padding: 9px 14px 11px; justify-content: center;[^}]*border-radius: 20px;/, 'one pill round the Drop key and its help');
    assert.match(html, /html\.has-3d \.control-help \{ background: transparent;/, 'the pill is the glass; the help does not double it');
    assert.match(html, /html\.has-3d \.play-card > \.position-audio-toggle \{ margin-top: 10px; \}/, 'the tone button has room of its own below the pill');
    assert.match(html, /@media \(max-width: 700px\) \{\s*html\.has-3d \.home-bottom \{ justify-content: center; padding: 8px 14px; text-align: center; \}/);
    // nothing of it leaks into the flat view
    const outside = html.replace(/html\.has-3d[^{}]*\{[^{}]*\}/g, '');
    assert.doesNotMatch(outside, /\.home-bottom \{[^}]*border-radius: 16px/); assert.doesNotMatch(outside, /\.control-row \{[^}]*border-radius: 20px/);
    // the layout contract the other tests pin stays as it was
    assert.match(html, /\.control-row \{ width: 100%; max-width: 420px; display: flex; align-items: center; gap: 12px; padding-top: 13px; touch-action: pan-y; \}/);
  });

  test('the game\'s view controls are styled for the stage: quiet until the pointer is near, the grab cursor while turning', () => {
    assert.match(html, /\.orbit-hud\.is-stage \{ gap: 6px; \}/);
    assert.match(html, /\.orbit-hud\.is-stage \.orbit-row \{ opacity: \.8; transition: opacity \.2s ease; \}/);
    assert.match(html, /\.orbit-hud\.is-stage:hover \.orbit-row, \.orbit-hud\.is-stage:focus-within \.orbit-row \{ opacity: 1; \}/);
    assert.match(html, /html\.orbiting #game-canvas \{ cursor: grabbing; \}/);
    assert.match(html, /\.orbit-row \{ flex-wrap: wrap; \}/, 'the row wraps on a phone instead of running off the screen');
    assert.match(html, /\.orbit-hud \{ position: fixed;[^}]*pointer-events: none;/); assert.match(html, /\.orbit-hud \.orbit-btn, \.orbit-hud \.toy-key \{ pointer-events: auto; \}/);
  });
});

describe('one bad pixel never blacks out the frame (client3d/shader-guards.js)', () => {
  test('three\'s bump mapping never normalises a vector it has no direction for', async () => {
    const { hardenBumpChunk, SAFE_NORMALIZE } = await load('shader-guards.js'); const THREE = await import('three');
    const original = THREE.ShaderChunk.bumpmap_pars_fragment; const patched = hardenBumpChunk(original);
    // (when this fails after a three upgrade, the chunk changed shape: update the patterns in shader-guards.js)
    assert.notEqual(patched, original, 'the chunk this was written for is the chunk three ships');
    assert.ok(patched.includes(SAFE_NORMALIZE));
    assert.match(SAFE_NORMALIZE, /vec3 safeNormalize\( vec3 v, vec3 fallback \) \{ float l = dot\( v, v \); return l > 1e-24 \? v \* inversesqrt\( l \) : fallback; \}/, 'the helper only normalises what has a length');
    assert.doesNotMatch(patched, /normalize\( dFd[xy]\(/, 'the screen-space derivatives of an edge-on sliver are exactly zero');
    assert.match(patched, /vec3 vSigmaX = safeNormalize\( dFdx\( surf_pos\.xyz \), vec3\( 1\.0, 0\.0, 0\.0 \) \);/);
    assert.match(patched, /vec3 vSigmaY = safeNormalize\( dFdy\( surf_pos\.xyz \), vec3\( 0\.0, 1\.0, 0\.0 \) \);/);
    assert.match(patched, /return safeNormalize\( abs\( fDet \) \* surf_norm - vGrad, surf_norm \);/, 'a vanishing perturbation keeps the surface normal');
    assert.equal(hardenBumpChunk(patched), patched, 'idempotent'); assert.equal(hardenBumpChunk('void main() {}'), 'void main() {}', 'a chunk of another shape is left alone'); assert.equal(hardenBumpChunk(null), null);
    assert.equal((patched.match(/uniform sampler2D bumpMap;/g) || []).length, 1, 'nothing else of the chunk moved');
    // the same arithmetic as the GLSL helper, in JS, on the cases that matter
    const safe = (v, fallback) => { const l = v[0] * v[0] + v[1] * v[1] + v[2] * v[2]; return l > 1e-24 ? v.map(c => c / Math.sqrt(l)) : fallback; };
    assert.deepEqual(safe([0, 0, 0], [1, 0, 0]), [1, 0, 0]); assert.ok(near(Math.hypot(...safe([3, 0, 4], [1, 0, 0])), 1)); assert.ok(near(safe([3, 0, 4], [1, 0, 0])[2], 0.8));
  });

  test('the bloom\'s high-pass filter drops NaN and Infinity, which would otherwise be blurred over the whole view', async () => {
    const { hardenHighPass, guardBloomPass } = await load('shader-guards.js'); const { LuminosityHighPassShader } = await import('three/examples/jsm/shaders/LuminosityHighPassShader.js');
    const original = LuminosityHighPassShader.fragmentShader; const patched = hardenHighPass(original);
    assert.notEqual(patched, original); assert.match(patched, /if \( any\( isnan\( texel \) \) \|\| any\( isinf\( texel \) \) \) texel = vec4\( 0\.0 \);/); assert.match(patched, /texel = min\( texel, vec4\( 64\.0 \) \);/);
    assert.ok(patched.indexOf('texture2D( tDiffuse, vUv )') < patched.indexOf('isnan'), 'the sample is checked after it is read and before it is used');
    assert.equal(hardenHighPass(patched), patched, 'idempotent'); assert.equal(hardenHighPass('void main() {}'), 'void main() {}');
    const pass = { materialHighPassFilter: { fragmentShader: original, needsUpdate: false } };
    assert.equal(guardBloomPass(pass), true); assert.equal(pass.materialHighPassFilter.needsUpdate, true); assert.equal(pass.materialHighPassFilter.fragmentShader, patched);
    assert.equal(guardBloomPass({}), false, 'a pass without a high-pass material is not an error'); assert.equal(guardBloomPass(null), false);
  });

  test('the engine installs both guards before its first program is compiled, and the guards are applied to three\'s own chunk list', async () => {
    const engine = fs.readFileSync(path.join(ROOT, 'client3d', 'engine.js'), 'utf8');
    assert.match(engine, /import \{ applyShaderGuards, guardBloomPass \} from '\.\/shader-guards\.js';/);
    assert.ok(engine.indexOf('applyShaderGuards();') > 0 && engine.indexOf('applyShaderGuards();') < engine.indexOf('new THREE.WebGLRenderer('), 'the chunk is read when a program is built');
    assert.match(engine, /this\.bloomPass = new UnrealBloomPass\([^;]*\); guardBloomPass\(this\.bloomPass\);/, 'every rebuilt composer gets a guarded bloom');
    const { applyShaderGuards } = await load('shader-guards.js'); const chunks = { bumpmap_pars_fragment: (await import('three')).ShaderChunk.bumpmap_pars_fragment };
    assert.equal(applyShaderGuards(chunks), true); assert.ok(chunks.bumpmap_pars_fragment.includes('safeNormalize')); assert.equal(applyShaderGuards(chunks), true, 'again is harmless');
  });
});

describe('the lobby and the podium turn and zoom like every other scene', () => {
  test('each scene has its own controls, and the visitor using one quiets the right ones', async () => {
    const { Stage } = await load('stage.js'); const huds = { hud: 'home', resultsHud: 'results', lobbyHud: 'lobby', playHud: 'play' };
    const route = mode => Stage.prototype.sceneHud.call({ mode, ...huds });
    assert.equal(route('hero'), 'home'); assert.equal(route('results'), 'results'); assert.equal(route('celebrate'), 'results', 'the podium shares the results screen\'s controls');
    assert.equal(route('lobby'), 'lobby'); assert.equal(route('play'), 'play'); assert.equal(route('arena'), 'play');
    const quieted = []; const stage = { mode: 'lobby', idleFor: 9, sceneHud: Stage.prototype.sceneHud, lobbyHud: { quiet: () => quieted.push('lobby') }, resultsHud: { quiet: () => quieted.push('results') } };
    Stage.prototype.usedView.call(stage); assert.deepEqual(quieted, ['lobby']); assert.equal(stage.idleFor, 0, 'and the idle timer starts over');
    assert.equal(Stage.prototype.sceneHud.call({ mode: 'lobby' }), undefined, 'a scene whose controls are not open is not an error');
  });

  test('the lobby and the podium add the visitor\'s view on top of their own camera, close in on what is there, and keep their labels facing the viewer', () => {
    const lobby = stageSource.slice(stageSource.indexOf('  update_lobby(dt, view) {'), stageSource.indexOf('  dispose() {'));
    const podium = stageSource.slice(stageSource.indexOf('  update_celebrate(dt, view) {'), stageSource.indexOf('  // The lobby: one block of every colour'));
    for (const [name, text] of [['lobby', lobby], ['podium', podium]]) {
      assert.match(text, /const uv = this\.userView\(dt, [^;]*\{ idleReset: true \}\); this\.facing = uv\.yaw;/, `${name}: a scene on show returns to its default view by itself`);
      assert.match(text, /yaw: px \* uv\.par \+ [^;]*\+ uv\.yaw, pitch: 0\.1 \+ py \* uv\.par \+ uv\.pitch, zoom: uv\.zoom \}\);/, `${name}: the visitor's turn and zoom are added to the scene's camera, and the pointer's parallax steps aside while turning`);
      assert.match(text, /this\.world\.setViewYaw\(uv\.yaw\);/, `${name}: the crowd's galleries, the lights and the sky turn with the camera`);
    }
    assert.match(lobby, /tower\.setFacing\(uv\.yaw\)/); assert.match(podium, /tower\.setFacing\(uv\.yaw\)/, 'the Teamwork plaques turn too');
    assert.match(lobby, /this\.reduced, uv\.yaw\);/, 'the totems turn to face the viewer');
    assert.match(lobby, /const anchorY = lerp\(230, 70, zk\);[^]*?screen: \{ x: free\.x \+ free\.w \/ 2, y: screenY - \(anchorY - 230\) \* ppu1 \}/, 'zooming in closes in on the totems, not on the air above them');
    assert.match(lobby, /this\.placeLobbyHud\(W, H, dt\)/); assert.match(podium, /if \(wide\) this\.resultsHud\.place\(W - 16, H - 14\); else this\.resultsHud\.place\(free\.x \+ free\.w - 14, free\.y \+ free\.h - 12\);/, 'beside the cards the screen\'s corner, above them the podium\'s own corner');
    assert.match(stageSource, /if \(mode === 'results' \|\| mode === 'celebrate'\) this\.openResultsHud\(\);\s*if \(mode === 'lobby'\) this\.openLobbyHud\(\);/);
    assert.match(stageSource, /const SCENE_HINT = \{ mouse: '[^']*<b>Drag<\/b> to turn, <b>scroll<\/b> to zoom<\/span>' \};/, 'a short hint: it sits next to the footer note and must not run over its words');
    assert.match(stageSource, /createOrbitHud\(\{ doc: document, storage, touch: coarse, hostId, id, dock: false, hint: SCENE_HINT,/);
    assert.match(stageSource, /makeSceneHud\('room-screen', 'orbit-hud-lobby'\)/); assert.match(stageSource, /if \(this\.lobbyHud\) \{ this\.lobbyHud\.dispose\(\); this\.lobbyHud = null; \}/, 'and it is cleaned up with the stage');
    assert.match(stageSource, /const PANEL_SELECTOR = '[^']*\.multiplayer-results[^']*'/, 'the podium\'s result cards are a panel: a wheel over them scrolls the page, a drag on them selects text');
  });

  test('the totems turn on the spot to face the viewer, and the Teamwork plaques turn on their blocks', async () => {
    const { Totems } = await load('totems.js'); const { Tower } = await load('tower.js'); const { paletteFor } = await load('palette.js');
    const totems = new Totems('paper', paletteFor('paper')); const players = [{ id: 'a', name: 'Ann', color: '#E3A33B', ready: true }, { id: 'b', name: 'Bo', color: '#2F8478', ready: false }];
    totems.sync(players, 0.016, 5, { x: 0, y: 0 }, true); const front = [...totems.items.values()].map(item => item.group.rotation.y);
    totems.sync(players, 0.016, 5.016, { x: 0, y: 0 }, true, 1.1); const turned = [...totems.items.values()].map(item => item.group.rotation.y);
    assert.equal(front.length, 2); front.forEach((yaw, i) => assert.ok(near(turned[i] - yaw, 1.1, 1e-9), 'each figure turns by the view\'s yaw, in place'));
    const positions = [...totems.items.values()].map(item => [item.group.position.x, item.group.position.z]); totems.sync(players, 0.016, 5.032, { x: 0, y: 0 }, true, -2.4);
    [...totems.items.values()].forEach((item, i) => assert.deepEqual([item.group.position.x, item.group.position.z], positions[i], 'turning never moves the line-up'));
    totems.dispose();

    const plaque = () => ({ rotation: { y: 0 } }); const meshes = [{ userData: {} }, null, { userData: { plaque: plaque() } }, { userData: { plaque: plaque() } }];
    const stand = { facing: 0, meshes }; Tower.prototype.setFacing.call(stand, 0.8);
    assert.equal(stand.facing, 0.8); assert.equal(meshes[2].userData.plaque.rotation.y, 0.8); assert.equal(meshes[3].userData.plaque.rotation.y, 0.8);
    meshes[2].userData.plaque.rotation.y = 99; Tower.prototype.setFacing.call(stand, 0.8); assert.equal(meshes[2].userData.plaque.rotation.y, 99, 'the same view costs nothing');
    const tower = fs.readFileSync(path.join(ROOT, 'client3d', 'tower.js'), 'utf8'); assert.match(tower, /plane\.rotation\.y = this\.facing; mesh\.add\(plane\)/, 'a plaque added later starts out facing the view');
  });

  test('the lobby\'s controls stay out of the way where the cards cover the whole scene', () => {
    assert.match(html, /@media \(max-width: 899px\) \{ #orbit-hud-lobby \{ display: none; \} \}/);
    assert.match(stageSource, /const wide = W >= 900;/, 'the breakpoint the stage frames the lobby by is the one the page hides the controls at');
  });
});
