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

test('wheel preserves browser zoom, horizontal scrolling, dialogs and limit handoff', async () => {
  const r = await rig();
  try {
    for (const init of [{ ctrlKey: true }, { metaKey: true }, { deltaX: 200 }, { defaultPrevented: true }]) {
      assert.equal(r.fire('wheel', init).defaultPrevented, Boolean(init.defaultPrevented));
    }
    r.doc.getElementById('dialog').setAttribute('open', ''); assert.equal(r.fire('wheel').defaultPrevented, false);
    r.doc.getElementById('dialog').removeAttribute('open');
    assert.equal(r.fire('wheel', { timeStamp: 5000 }).defaultPrevented, true);
    for (let i = 1; i < 80; i++) r.fire('wheel', { timeStamp: 5000 + i * 10 });
    assert.equal(r.fire('wheel', { timeStamp: 7000 }).defaultPrevented, false);
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
