'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const path = require('node:path');
const load = name => import(path.join(__dirname, '..', 'client3d', name));
const modes = ['hero', 'results', 'arena', 'lobby', 'celebrate', 'play'];
async function rig({ legacy = false, mode = 'hero', reduced = false, coarse = false, storageBlocked = false } = {}) {
  const C = legacy ? (await import('./fixtures/legacy-scene-interaction.mjs')).LegacySceneInteraction : (await load('scene-interaction.js')).SceneInteraction;
  const dom = new JSDOM(`<body><div id="title-screen"></div><div id="results-screen"></div><div id="room-screen"></div><div id="game-screen"><div class="play-card"><canvas id="game-stage" role="button"></canvas></div></div><div id="scene"></div>
    <div class="multiplayer-results" id="panel">text</div><button id="drop">Drop</button><a id="link">Link</a>
    <input id="text"><textarea id="area"></textarea><select id="select"></select><input type="range" id="slider">
    <div id="editable" contenteditable="true"></div><div id="plain" contenteditable="false"></div>
    <button role="radio" id="radio"></button><button role="menuitem" id="item"></button><dialog id="dialog"><button id="inside"></button></dialog></body>`, { url: 'https://example.test' });
  const win = dom.window; const doc = win.document;
  win.matchMedia = () => ({ matches: coarse });
  if (storageBlocked) Object.defineProperty(win, 'localStorage', { get() { throw new Error('private mode'); } });
  let time = 1000; const calls = [];
  const interaction = new C({ doc, win, now: () => time, onTap: () => calls.push('tap'), onRushIntro: () => calls.push('rush'), onToy: () => calls.push('toy') });
  interaction.setContext({ mode, reduced }); interaction.activate();
  function fire(type, init = {}, id = 'scene') {
    time = init.timeStamp === undefined ? time + 20 : init.timeStamp;
    const event = new win.Event(type, { bubbles: true, cancelable: true });
    const props = { pointerId: 1, pointerType: 'mouse', clientX: 100, clientY: 100, isPrimary: true, button: 0, buttons: type === 'pointerup' ? 0 : 1, deltaX: 0, deltaY: -100, deltaMode: 0, key: '', ...init, timeStamp: time };
    for (const [key, value] of Object.entries(props)) if (key !== 'defaultPrevented') Object.defineProperty(event, key, { value, configurable: true });
    if (init.defaultPrevented) event.preventDefault();
    (id === 'window' ? win : doc.getElementById(id)).dispatchEvent(event);
    return event;
  }
  const update = (dt = .05, options = {}, focusY = 220) => interaction.update(dt, focusY, options);
  const settle = () => { for (let i = 0; i < 150; i++) update(); };
  const close = () => { interaction.dispose(); dom.window.close(); };
  return { interaction, doc, win, calls, fire, update, settle, close };
}

for (const mode of modes) test(`${mode}: real input trace matches frozen Stage orchestration`, async () => {
  const current = await rig({ mode }); const legacy = await rig({ mode, legacy: true });
  try {
    const trace = [
      ['pointerdown', { button: 2, buttons: 2 }], ['pointermove', { clientX: 145, clientY: 120, buttons: 2 }],
      ['pointerup', { button: 2, clientX: 145, clientY: 120 }], ['wheel', {}],
      ['keydown', { key: 'ArrowLeft' }], ['keydown', { key: 'ArrowRight', shiftKey: true }],
      ['keydown', { key: '+' }], ['keydown', { key: '-' }], ['keydown', { key: 'Home' }],
      ['pointerdown', { pointerType: 'touch' }], ['pointermove', { pointerType: 'touch', clientX: 135, clientY: 160 }],
      ['pointercancel', { pointerType: 'touch', buttons: 0 }]
    ];
    for (const [event, init] of trace) {
      assert.equal(current.fire(event, init).defaultPrevented, legacy.fire(event, init).defaultPrevented);
      for (let i = 0; i < 4; i++) assert.deepEqual(current.update(), legacy.update());
      assert.equal(current.interaction.dragging, legacy.interaction.dragging);
      assert.deepEqual(JSON.parse(JSON.stringify(current.interaction.pointer)), JSON.parse(JSON.stringify(legacy.interaction.pointer)));
      assert.deepEqual(current.calls, legacy.calls);
      assert.equal(current.doc.documentElement.className, legacy.doc.documentElement.className);
    }
  } finally { current.close(); legacy.close(); }
});

for (const mode of modes) test(`${mode}: left-button ownership, right drag, and middle-button handoff`, async () => {
  const r = await rig({ mode });
  try {
    r.fire('pointerdown'); assert.equal(r.interaction.dragging, mode !== 'play');
    r.fire('pointerup');
    assert.equal(r.calls.includes('tap'), mode !== 'play');
    r.fire('pointerdown', { button: 1, buttons: 4 }); assert.equal(r.interaction.dragging, false);
    r.fire('pointerdown', { button: 2, buttons: 2 }); assert.equal(r.interaction.dragging, true);
    r.fire('pointermove', { clientX: 160, buttons: 2 }); r.fire('pointerup', { button: 2, clientX: 160 });
    assert.ok(r.update().yaw < 0);
  } finally { r.close(); }
});

test('gestures distinguish taps, slop, long presses, mismatched pointers, cancellation, and blur', async () => {
  const r = await rig();
  try {
    r.fire('pointerdown'); r.fire('pointermove', { clientX: 103 }); r.fire('pointerup', { clientX: 103 });
    assert.equal(r.calls.filter(c => c === 'tap').length, 1);
    r.fire('pointerdown', { timeStamp: 2000 }); r.fire('pointerup', { timeStamp: 2700 });
    r.fire('pointerdown'); r.fire('pointermove', { pointerId: 9, clientX: 170 });
    r.fire('pointerup', { pointerId: 9 }); assert.equal(r.interaction.dragging, true);
    r.fire('pointercancel'); assert.equal(r.interaction.dragging, false);
    r.fire('pointerdown'); r.fire('blur', {}, 'window'); assert.equal(r.interaction.dragging, false);
    assert.equal(r.interaction.pointer.inside, false);
    assert.equal(r.doc.documentElement.classList.contains('orbiting'), false);
    assert.equal(r.calls.filter(c => c === 'tap').length, 1);
  } finally { r.close(); }
});

test('touch turns horizontally without stealing vertical scrolling or retaining hover', async () => {
  const r = await rig({ coarse: true });
  try {
    assert.equal(r.fire('pointerdown', { pointerType: 'touch' }).defaultPrevented, false);
    assert.equal(r.fire('pointermove', { pointerType: 'touch', clientX: 140, clientY: 200 }).defaultPrevented, false);
    const view = r.update(); assert.ok(view.yaw < 0); assert.equal(view.pitch, 0);
    r.fire('pointerup', { pointerType: 'touch' }); assert.equal(r.interaction.pointer.inside, false);
  } finally { r.close(); }
});

test('panels keep gestures/wheel, but the play canvas remains a scene', async () => {
  const r = await rig({ mode: 'play' });
  try {
    for (const id of ['panel', 'drop', 'text', 'link']) {
      r.fire('pointerdown', { button: 2, buttons: 2 }, id); assert.equal(r.interaction.dragging, false);
      assert.equal(r.fire('wheel', {}, id).defaultPrevented, false);
    }
    r.fire('pointerdown', { button: 2, buttons: 2 }, 'game-stage'); assert.equal(r.interaction.dragging, true);
    r.fire('pointerup', { button: 2 }, 'game-stage');
    assert.equal(r.fire('wheel', {}, 'game-stage').defaultPrevented, true);
  } finally { r.close(); }
});

for (const reduced of [false, true]) test(`keyboard controls, focus exclusions and page-owned keys (reduced=${reduced})`, async () => {
  const r = await rig({ mode: 'play', reduced });
  try {
    for (const id of ['text', 'area', 'select', 'slider', 'editable', 'radio', 'item', 'dialog', 'inside']) {
      for (const key of ['ArrowLeft', '0', '+']) assert.equal(r.fire('keydown', { key }, id).defaultPrevented, false, `${id}: ${key}`);
    }
    for (const id of ['scene', 'drop', 'link', 'game-stage', 'plain']) assert.equal(r.fire('keydown', { key: 'ArrowLeft' }, id).defaultPrevented, true);
    for (const key of [' ', 'Enter', '1', '2', '3', 'Escape', 'ArrowUp', 'ArrowDown', 'Tab']) assert.equal(r.fire('keydown', { key }).defaultPrevented, false);
    for (const flag of ['ctrlKey', 'metaKey', 'altKey', 'defaultPrevented']) assert.equal(r.fire('keydown', { key: '+', [flag]: true }).defaultPrevented, flag === 'defaultPrevented');
    r.settle(); assert.ok(r.interaction.view.yaw < 0);
    const before = r.interaction.view.zoom;
    r.fire('keydown', { key: '+' }); r.settle(); assert.ok(r.interaction.view.zoom > before);
    r.fire('keydown', { key: '_' }); r.settle(); assert.ok(Math.abs(r.interaction.view.zoom - before) < .01);
    r.fire('keydown', { key: '0' }); r.settle(); assert.ok(Math.abs(r.interaction.view.yaw) < .001);
  } finally { r.close(); }
});

test('wheel preserves browser zoom, horizontal scrolling and dialogs without limit handoff', async () => {
  const r = await rig();
  try {
    for (const init of [{ ctrlKey: true }, { metaKey: true }, { deltaX: 200 }, { defaultPrevented: true }]) {
      assert.equal(r.fire('wheel', init).defaultPrevented, Boolean(init.defaultPrevented));
    }
    r.doc.getElementById('dialog').setAttribute('open', ''); assert.equal(r.fire('wheel').defaultPrevented, false);
    r.doc.getElementById('dialog').removeAttribute('open');
    assert.equal(r.fire('wheel', { timeStamp: 5000 }).defaultPrevented, true);
    for (let i = 1; i < 80; i++) r.fire('wheel', { timeStamp: 5000 + i * 10 });
    assert.equal(r.fire('wheel', { timeStamp: 7000 }).defaultPrevented, true);
    assert.equal(r.fire('wheel', { deltaY: 100, timeStamp: 7100 }).defaultPrevented, true);
  } finally { r.close(); }
});

test('right double tap resets play; double click resets only free-handed scenes', async () => {
  for (const mode of ['play', 'hero', 'arena']) {
    const r = await rig({ mode });
    try {
      r.fire('keydown', { key: 'ArrowRight' }); r.settle();
      const turned = r.interaction.view.yaw; assert.ok(turned > .3);
      r.fire('dblclick'); r.settle();
      assert.ok(mode === 'play' ? r.interaction.view.yaw > .3 : Math.abs(r.interaction.view.yaw) < .001);
      r.fire('keydown', { key: 'ArrowRight' }); r.settle();
      r.fire('pointerdown', { button: 2, buttons: 2, timeStamp: 5000 });
      r.fire('pointerup', { button: 2, timeStamp: 5050 });
      r.fire('pointerdown', { button: 2, buttons: 2, timeStamp: 5200 });
      r.fire('pointerup', { button: 2, timeStamp: 5250 }); r.settle();
      assert.ok(Math.abs(r.interaction.view.yaw) < .001);
    } finally { r.close(); }
  }
});

test('a right drag guards the context menu over panels for 500ms after release', async () => {
  const r = await rig({ mode: 'play' });
  try {
    assert.equal(r.fire('contextmenu', {}, 'panel').defaultPrevented, false);
    r.fire('pointerdown', { button: 2, buttons: 2, timeStamp: 2000 });
    assert.equal(r.fire('contextmenu', { timeStamp: 2050 }, 'panel').defaultPrevented, true);
    r.fire('pointerup', { button: 2, timeStamp: 2100 }, 'panel');
    assert.equal(r.fire('contextmenu', { timeStamp: 2500 }, 'panel').defaultPrevented, true);
    assert.equal(r.fire('contextmenu', { timeStamp: 2700 }, 'panel').defaultPrevented, false);
    assert.equal(r.fire('contextmenu', { timeStamp: 2800 }).defaultPrevented, true);
  } finally { r.close(); }
});

test('mode changes cancel gestures without taps and reset the previous view', async () => {
  const r = await rig();
  try {
    r.fire('keydown', { key: '+' }); r.settle(); assert.ok(r.interaction.view.zoom > 1);
    r.fire('pointerdown'); r.fire('pointermove', { clientX: 170 });
    r.interaction.setContext({ mode: 'play', reduced: true });
    assert.equal(r.interaction.dragging, false);
    assert.deepEqual(r.interaction.view, { yaw: 0, pitch: 0, zoom: 1, rotated: false, zoomed: false });
    assert.equal(r.doc.documentElement.classList.contains('orbiting'), false);
    r.fire('pointerup'); assert.equal(r.calls.includes('tap'), false);
    assert.ok(r.doc.getElementById('orbit-hud-play'));
    r.interaction.setContext({ mode: 'results' }); assert.equal(r.doc.getElementById('orbit-hud-play'), null);
    assert.ok(r.doc.getElementById('orbit-hud-results'));
  } finally { r.close(); }
});

test('idle reset is opt-in, waits over 30 seconds, and never interrupts reduced motion or a drag', async () => {
  for (const [mode, reduced, held, idleReset, resets] of [
    ['hero', false, false, true, true], ['results', true, false, true, false],
    ['hero', false, true, true, false], ['play', false, false, false, false]
  ]) {
    const r = await rig({ mode, reduced });
    try {
      r.update(); r.fire('keydown', { key: 'ArrowRight' }); r.fire('keydown', { key: '+' }); r.settle();
      if (held) r.fire('pointerdown');
      for (let i = 0; i < 580; i++) r.update(.05, { idleReset });
      assert.ok(r.interaction.view.yaw > .3, 'no early reset');
      for (let i = 0; i < 100; i++) r.update(.05, { idleReset });
      assert.equal(Math.abs(r.interaction.view.yaw) < .001, resets, `${mode}, reduced=${reduced}, held=${held}`);
      if (resets) assert.ok(Math.abs(r.interaction.view.zoom - 1) < .001);
    } finally { r.close(); }
  }
});

test('camera constraints and drag parallax are applied without a camera dependency', async () => {
  const r = await rig();
  try {
    r.fire('pointerdown'); r.fire('pointermove', { clientY: -1000 });
    let view;
    for (let i = 0; i < 20; i++) view = r.update(.05, { cameraDistance: 1700 }, 220);
    assert.ok(view.pitch < 0 && view.pitch > -.4);
    assert.ok(view.par < .01, 'parallax steps aside during a drag');
    r.fire('pointerup', { timeStamp: 3000 }); r.settle(); assert.ok(r.update().par > .99);
    assert.deepEqual(Object.keys(view).sort(), ['par', 'pitch', 'yaw', 'zoom']);
  } finally { r.close(); }
});

test('hints fade without persistence, quiet on use, route by mode, and retain layout', async () => {
  const r = await rig();
  try {
    const home = r.doc.getElementById('orbit-hud');
    r.interaction.placeHud('hero', 350.2, 420.2, 10.1);
    assert.ok(home.classList.contains('is-quiet')); assert.equal(r.win.localStorage.getItem('sabotage-stack-orbit-hint-v1'), null);
    assert.equal(home.style.left, '350px'); assert.equal(home.style.top, '420px');
    r.interaction.setContext({ mode: 'lobby' });
    const lobby = r.doc.getElementById('orbit-hud-lobby');
    assert.match(lobby.textContent, /Drag to turn, scroll to zoom/); assert.equal(lobby.querySelector('.toy-dock'), null);
    r.fire('keydown', { key: 'ArrowLeft' });
    assert.ok(lobby.classList.contains('is-quiet')); assert.equal(r.win.localStorage.getItem('sabotage-stack-orbit-hint-v1'), '1');
    r.interaction.setContext({ mode: 'results' });
    r.interaction.placeHud('results', 100, 200, 10.1);
    assert.ok(r.doc.getElementById('orbit-hud-results').classList.contains('is-quiet'));
    r.interaction.setContext({ mode: 'celebrate' });
    assert.equal(r.doc.querySelectorAll('#orbit-hud-results').length, 1);
    for (let i = 0; i < 4; i++) {
      r.interaction.setContext({ mode: 'play' });
      const play = r.doc.getElementById('orbit-hud-play');
      assert.ok(play.classList.contains('is-stage'));
      assert.equal(play.classList.contains('is-quiet'), i >= 3, 'play hint has its own three-visit retirement');
      r.interaction.setContext({ mode: 'lobby' });
    }
  } finally { r.close(); }
});

test('HUD buttons drive the real view, toy callback, and remembered hints', async () => {
  const r = await rig();
  try {
    const root = r.doc.getElementById('orbit-hud');
    root.querySelector('[data-orbit="right"]').click(); r.settle(); assert.ok(r.interaction.view.yaw > .7);
    root.querySelector('[data-zoom="in"]').click(); r.settle(); assert.ok(r.interaction.view.zoom > 1.2);
    root.querySelector('[data-toy]').click(); assert.ok(r.calls.includes('toy'));
    root.querySelector('[data-orbit="reset"]').click(); r.settle(); assert.ok(Math.abs(r.interaction.view.yaw) < .001);
    assert.ok(root.classList.contains('is-quiet'));
  } finally { r.close(); }
});

test('coarse pointers omit play HUD; blocked storage and missing HUD hosts do not break input', async () => {
  const r = await rig({ coarse: true, storageBlocked: true, mode: 'play' });
  try {
    assert.equal(r.doc.getElementById('orbit-hud-play'), null);
    r.interaction.setContext({ mode: 'hero' });
    assert.match(r.doc.querySelector('.orbit-hint').textContent, /Swipe/);
    r.doc.getElementById('room-screen').remove(); r.interaction.setContext({ mode: 'lobby' });
    r.interaction.placeHud('lobby', 10, 10, 1);
    assert.equal(r.fire('keydown', { key: '+' }).defaultPrevented, true);
  } finally { r.close(); }
});

test('activation is idempotent; disposal removes global and retained HUD listeners, cursor, and drag state', async () => {
  const r = await rig();
  try {
    r.interaction.activate(); r.fire('pointerdown'); assert.equal(r.calls.filter(c => c === 'rush').length, 1);
    r.interaction.setCursor('grabbing');
    const retained = r.doc.querySelector('[data-toy]');
    r.interaction.setContext({ mode: 'play' }); assert.ok(r.doc.getElementById('orbit-hud-play'));
    r.fire('pointerdown', { button: 2, buttons: 2 });
    r.interaction.dispose(); r.interaction.dispose(); r.interaction.activate();
    assert.equal(r.doc.querySelector('.orbit-hud'), null);
    assert.equal(r.interaction.dragging, false); assert.equal(r.interaction.pointer.inside, false);
    assert.equal(r.doc.documentElement.style.cursor, ''); assert.equal(r.doc.documentElement.classList.contains('orbiting'), false);
    const count = r.calls.length;
    for (const event of ['pointermove', 'pointerdown', 'pointerup', 'pointercancel', 'blur', 'dblclick', 'contextmenu']) r.fire(event);
    retained.click();
    assert.equal(r.fire('wheel').defaultPrevented, false); assert.equal(r.fire('keydown', { key: '+' }).defaultPrevented, false);
    assert.equal(r.calls.length, count, 'no callback after disposal, even from a retained detached button');
    assert.equal(r.interaction.pointer.inside, false, 'pointermove no longer samples the pointer');
  } finally { r.close(); }
});

test('all pointer buttons block hover reactions, and release clears them without another move', async () => {
  const r = await rig();
  try {
    r.fire('pointerdown', { button: 1, buttons: 4 });
    assert.equal(r.interaction.pointer.buttons, 4); assert.equal(r.interaction.dragging, false);
    r.fire('pointerup', { button: 1, buttons: 0 }); assert.equal(r.interaction.pointer.buttons, 0);
    r.fire('pointermove'); assert.equal(r.interaction.pointer.inside, true);
    r.doc.documentElement.dispatchEvent(new r.win.Event('pointerleave'));
    assert.equal(r.interaction.pointer.inside, false);
  } finally { r.close(); }
});

for (const mode of modes) for (const reduced of [false, true]) test(`${mode}: wheel remains on the scene at both limits (reduced=${reduced})`, async () => {
  const r = await rig({ mode, reduced });
  try {
    for (const direction of [1, -1]) {
      for (let i = 0; i < 80; i++) assert.equal(r.fire('wheel', { deltaY: direction * 100 }).defaultPrevented, true);
      r.settle();
      const limit = direction > 0 ? .5 : 3.2;
      assert.equal(r.interaction.view.zoom, limit);
      assert.equal(r.fire('wheel', { deltaY: direction * 100, timeStamp: 600000 }).defaultPrevented, true);
      assert.equal(r.fire('wheel', { deltaY: direction * 100 }, 'panel').defaultPrevented, false, 'moving onto a panel restores page scrolling');
      assert.equal(r.fire('wheel', { deltaY: direction * 100, ctrlKey: true }).defaultPrevented, false);
      assert.equal(r.fire('wheel', { deltaY: direction * 100, metaKey: true }).defaultPrevented, false);
      assert.equal(r.fire('wheel', { deltaY: 0 }).defaultPrevented, false);
    }
  } finally { r.close(); }
});

for (const mode of modes) test(`${mode}: Stage forced re-entry resets interaction after a theme rebuild`, async () => {
  const { Stage } = await load('stage.js');
  const r = await rig({ mode, reduced: true });
  const previousDocument = globalThis.document;
  globalThis.document = r.doc;
  try {
    r.fire('keydown', { key: 'ArrowRight' });
    r.fire('wheel'); r.update();
    assert.notEqual(r.interaction.view.yaw, 0);
    assert.notEqual(r.interaction.view.zoom, 1);
    // Ordinary same-mode frame updates must not reset view or hints.
    r.interaction.setContext({ mode, reduced: true });
    assert.notEqual(r.interaction.view.yaw, 0);
    r.fire('pointerdown', { button: 2, buttons: 2 });
    assert.equal(r.interaction.dragging, true);
    const noop = () => {};
    const stage = {
      // buildTheme clears Stage.mode to request a full scene re-entry.
      mode: '', reduced: true, camSpec: null, interaction: r.interaction,
      engine: { fade: { value: 0, target: 0 } }, title: { group: {} },
      arsenal: { group: {} }, titleProps: { group: {} }, towers: {}, arena: [], labels: [],
      totems: { group: {} }, crown: {}, ruler: { group: {} },
      world: { plinth: { scale: { set: noop } }, crowd: { clearBallot: noop, setSpread: noop } },
      leave: noop, leaveHome: noop, popups: { clear: noop }, removeBadge: noop, director: {},
      bricks: { hide: noop }, candidates: { release: noop }
    };
    Stage.prototype.enterMode.call(stage, mode, {});
    assert.equal(r.interaction.dragging, false);
    assert.equal(r.interaction.view.yaw, 0);
    assert.equal(r.interaction.view.pitch, 0);
    assert.equal(r.interaction.view.zoom, 1);
    r.update();
    assert.equal(r.interaction.view.yaw, 0, 'no gesture momentum survives re-entry');
    assert.equal(r.interaction.view.zoom, 1);
  } finally {
    if (previousDocument === undefined) delete globalThis.document;
    else globalThis.document = previousDocument;
    r.close();
  }
});

test('the game surface (a role=button div) is the scene: a right-drag turns the view and the wheel zooms, though the buttons beside it are chrome', async () => {
  const r = await rig({ mode: 'play' });
  try {
    const surface = r.doc.createElement('div'); surface.id = 'game-canvas'; surface.setAttribute('role', 'button'); r.doc.body.append(surface);
    r.fire('pointerdown', { button: 2, buttons: 2 }, 'game-canvas');
    assert.equal(r.interaction.dragging, true, 'a right-press on the game surface starts a turn');
    r.fire('pointerup', { button: 2 }, 'game-canvas');
    const before = r.interaction.view.zoom; r.fire('wheel', { deltaY: -100 }, 'game-canvas'); r.settle();
    assert.notEqual(r.interaction.view.zoom, before, 'the wheel over the game surface zooms');
    r.fire('pointerdown', { button: 2, buttons: 2 }, 'drop');
    assert.equal(r.interaction.dragging, false, 'a press on a real button is left to the button');
  } finally { r.close(); }
});

// ---- A held View: an Effect (Macro Zoom) takes the View over, and the visitor gets theirs back afterwards.

const near = (actual, expected, label) => assert.ok(Math.abs(actual - expected) < 0.001, `${label}: ${actual} is not ${expected}`);
async function turnedAndZoomed(options = {}) {
  const r = await rig({ mode: 'play', ...options });
  r.fire('keydown', { key: 'ArrowRight' }); r.fire('keydown', { key: '+' }); r.settle();
  const before = r.interaction.view; assert.ok(before.yaw > 0.3 && before.zoom > 1.2, 'the visitor has a View of their own');
  return { r, before };
}

test('a hold eases the View back to default, and releasing it gives the visitor their View back', async () => {
  const { r, before } = await turnedAndZoomed();
  try {
    r.interaction.hold('Macro Zoom');
    r.update(0.4); assert.ok(r.interaction.view.yaw > 0.01 && r.interaction.view.yaw < before.yaw, 'eased, not snapped');
    r.settle(); near(r.interaction.view.yaw, 0, 'held yaw'); near(r.interaction.view.zoom, 1, 'held zoom');
    r.interaction.release();
    r.settle(); near(r.interaction.view.yaw, before.yaw, 'restored yaw'); near(r.interaction.view.zoom, before.zoom, 'restored zoom');
  } finally { r.close(); }
});

test('the stage may hold every frame: the ease still lands on the default in time, and one release restores', async () => {
  const { r, before } = await turnedAndZoomed();
  try {
    for (let i = 0; i < 18; i++) { r.interaction.hold('Macro Zoom'); r.update(0.05); }
    near(r.interaction.view.yaw, 0, 'held yaw after 0.9 s'); near(r.interaction.view.zoom, 1, 'held zoom after 0.9 s');
    r.interaction.release(); r.interaction.release(); r.settle();
    near(r.interaction.view.yaw, before.yaw, 'restored yaw');
  } finally { r.close(); }
});

test('while held, the wheel, a right-drag, the keys and the buttons leave the View alone, and the wheel still never scrolls the page', async () => {
  const { r } = await turnedAndZoomed();
  try {
    r.interaction.hold('Macro Zoom'); r.settle();
    assert.equal(r.fire('wheel', { deltaY: 300 }).defaultPrevented, true, 'the wheel stays with the scene');
    r.fire('pointerdown', { button: 2, buttons: 2 }); r.fire('pointermove', { clientX: 260, clientY: 40, buttons: 2 }); r.fire('pointerup', { button: 2, clientX: 260, clientY: 40 });
    for (const key of ['ArrowLeft', 'ArrowRight', '+', '-']) r.fire('keydown', { key });
    for (const button of r.doc.querySelectorAll('#orbit-hud-play button')) button.click();
    r.settle();
    assert.deepEqual(r.interaction.view, { yaw: 0, pitch: 0, zoom: 1, rotated: false, zoomed: false });
  } finally { r.close(); }
});

test('the play controls say who holds the View, and leaving the scene drops the hold without restoring anything', async () => {
  const { r } = await turnedAndZoomed();
  try {
    const buttons = () => [...r.doc.querySelectorAll('#orbit-hud-play button')];
    r.interaction.hold('Macro Zoom');
    for (const button of buttons()) {
      assert.equal(button.getAttribute('aria-disabled'), 'true');
      assert.match(button.getAttribute('aria-label'), /Held by Macro Zoom/); assert.match(button.title, /Held by Macro Zoom/);
    }
    assert.ok(r.doc.getElementById('orbit-hud-play').classList.contains('is-held'));
    r.interaction.release();
    for (const button of buttons()) { assert.equal(button.hasAttribute('aria-disabled'), false); assert.doesNotMatch(button.title, /Held/); }
    r.interaction.hold('Macro Zoom'); r.interaction.setContext({ mode: 'results' });
    r.interaction.release(); r.settle();
    assert.deepEqual(r.interaction.view, { yaw: 0, pitch: 0, zoom: 1, rotated: false, zoomed: false });
    r.fire('keydown', { key: 'ArrowRight' }); r.settle(); assert.ok(r.interaction.view.yaw > 0.3, 'the next scene is free to turn');
  } finally { r.close(); }
});

test('a held View never idles back to the default on its own', async () => {
  const r = await rig({ mode: 'hero' });
  try {
    r.interaction.hold('Macro Zoom'); r.settle();
    for (let i = 0; i < 700; i++) r.update(.05, { idleReset: true });
    assert.equal(r.interaction.idleFor, 0);
    r.interaction.release(); r.fire('keydown', { key: 'ArrowRight' }); r.settle();
    assert.ok(r.interaction.view.yaw > 0.3);
  } finally { r.close(); }
});

test('under Reduced Motion the hold and the hand-back are instant, turn included', async () => {
  const { r, before } = await turnedAndZoomed({ reduced: true });
  try {
    r.interaction.hold('Macro Zoom'); r.update(0.016);
    near(r.interaction.view.yaw, 0, 'held yaw on the next frame'); near(r.interaction.view.zoom, 1, 'held zoom on the next frame');
    r.interaction.release(); r.update(0.016);
    near(r.interaction.view.yaw, before.yaw, 'restored yaw on the next frame'); near(r.interaction.view.zoom, before.zoom, 'restored zoom on the next frame');
  } finally { r.close(); }
});
