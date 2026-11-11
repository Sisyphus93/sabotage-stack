'use strict';
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');

const Scene3D = require('../client/scene3d.js');
const HTML = path.join(__dirname, '..', 'sabotage-stack.html');
const PAPER_SKY = '244,237,223,255';

let boot = null, skipReason = null, createCanvas = null;
try {
  ({ boot } = require('./helpers/client-harness'));
  ({ createCanvas } = require('@napi-rs/canvas'));
} catch (error) {
  skipReason = `3D canvas harness unavailable: ${error.message} (run npm ci)`;
}

function fakeCanvas() {
  const surface = createCanvas(360, 520);
  return {
    width: 360, height: 520, clientWidth: 0, clientHeight: 0, parentElement: null,
    getContext: () => surface.getContext('2d'),
    pixels() { return surface.getContext('2d').getImageData(0, 0, 360, 520).data; },
    pixel(x, y) { return [...surface.getContext('2d').getImageData(x, y, 1, 1).data].join(','); }
  };
}
function sampleGame(levels = 7, effect = null) {
  const palette = ['#E3A33B', '#2F8478', '#7FA6BD', '#D5472F'];
  const stack = [{ left: 20, right: 340, level: 0, color: palette[1], perfect: false }];
  for (let i = 1; i < levels; i += 1) {
    const width = 300 - i * 14;
    const left = 180 - width / 2 + Math.sin(i * 1.4) * 11;
    stack.push({ left, right: left + width, level: i, color: palette[i % 4], perfect: i % 3 === 0 });
  }
  return {
    phase: 'playing', elapsed: 3, stack,
    moving: { left: 40, width: stack[stack.length - 1].right - stack[stack.length - 1].left, level: levels, color: palette[0], direction: 1 },
    fallingActors: [], activeEffect: effect, perfectTime: 0, toastTime: 0,
    collapseShake: 0, collapsingLevels: [], collapseLevel: null
  };
}
function snapshot(extra) {
  return Object.assign({ theme: 'paper', mapColor: color => color, reducedMotion: false, dt: 0.016 }, extra || {});
}

describe('3D engine (isolated module)', skipReason ? { skip: skipReason } : {}, () => {
  test('exposes three distinct worlds and a valid perspective pipeline', () => {
    assert.equal(Scene3D.VERSION, '1.0.0');
    assert.deepEqual(Object.keys(Scene3D.WORLDS), ['paper', 'sunset', 'primetime']);
    assert.notEqual(Scene3D.WORLDS.paper.sky[0], Scene3D.WORLDS.sunset.sky[0]);
    assert.equal(Scene3D.worldFor('not-a-theme').key, 'paper');
    const { matTransform, perspective, lookAt } = Scene3D.math;
    const proj = perspective(46 * Math.PI / 180, 360 / 520, 0.6, 420);
    // For a standard perspective matrix, clip.w is the positive view-space distance.
    const clip = matTransform(proj, [0, 0, -10]);
    assert.ok(Math.abs(clip[3] - 10) < 1e-9, `clip.w should be -viewZ, got ${clip[3]}`);
    const view = lookAt([0, 0, 10], [0, 0, 0], [0, 1, 0]);
    assert.ok(Math.abs(matTransform(view, [0, 0, 0])[2] + 10) < 1e-9, 'view matrix puts the target 10 units away');
  });

  test('renders hundreds of depth-sorted, lit faces into a real canvas', () => {
    const canvas = fakeCanvas();
    const renderer = Scene3D.create(canvas, { mode: 'game', theme: 'paper' });
    assert.equal(renderer.available, true);
    renderer.render(snapshot({ game: sampleGame() }));
    assert.ok(renderer.stats.faces > 100, `expected a real 3D scene, got ${renderer.stats.faces} primitives`);
    assert.ok(renderer.stats.particles > 0, 'ambient motes should be drawn');
    const colours = new Set([[8, 8], [180, 60], [180, 260], [60, 400], [300, 300]].map(([x, y]) => canvas.pixel(x, y)));
    assert.ok(colours.size >= 3, `the 3D frame is suspiciously flat: ${[...colours].join(' | ')}`);
    const data = canvas.pixels();
    let opaque = 0;
    for (let i = 3; i < data.length; i += 4) if (data[i] === 255) opaque += 1;
    assert.ok(opaque > 360 * 520 * 0.9, 'the 3D frame must fully cover its canvas');
  });

  test('themes produce genuinely different 3D worlds', () => {
    const game = sampleGame();
    const paper = fakeCanvas(), sunset = fakeCanvas(), primetime = fakeCanvas();
    for (const [name, canvas] of [['paper', paper], ['sunset', sunset], ['primetime', primetime]]) {
      const renderer = Scene3D.create(canvas, { mode: 'game', theme: name });
      renderer.render(snapshot({ theme: name, game }));
    }
    const sky = [paper.pixel(10, 10), sunset.pixel(10, 10), primetime.pixel(10, 10)];
    assert.equal(new Set(sky).size, 3, `all three worlds should paint a different sky: ${sky.join(' | ')}`);
  });

  test('reduced motion freezes the orbiting camera but keeps the 3D scene', () => {
    const game = sampleGame();
    const still = Scene3D.create(fakeCanvas(), { mode: 'game' });
    const moving = Scene3D.create(fakeCanvas(), { mode: 'game' });
    for (let i = 0; i < 30; i += 1) {
      still.render(snapshot({ game, reducedMotion: true }));
      moving.render(snapshot({ game, reducedMotion: false }));
    }
    assert.ok(Math.abs(still.cam.yaw - still.baseYaw) < 1e-9, 'reduced motion must not auto-orbit');
    assert.ok(Math.abs(moving.cam.yaw - moving.baseYaw) > 0.001, 'full motion should drift the camera');
    assert.ok(still.stats.faces > 100);
  });

  test('orbit, dolly and reset are bounded and reversible', () => {
    const r = Scene3D.create(fakeCanvas(), { mode: 'game' });
    r.orbit(120, 40);
    assert.ok(r.user.yaw > 0 && r.user.pitch < 0);
    r.dolly(20);
    assert.ok(r.user.dolly > 0);
    for (let i = 0; i < 20; i += 1) r.orbit(100000, -100000);
    assert.ok(r.user.yaw <= 2.4 && r.user.pitch <= 0.75);
    r.dolly(100000);
    assert.ok(r.user.dolly <= 42);
    r.resetView();
    assert.deepEqual([r.user.yaw, r.user.pitch, r.user.dolly], [0, 0, 0]);
  });

  test('demo and result towers are safe with empty or collapsed data', () => {
    const demo = Scene3D.demoGame();
    assert.ok(demo.stack.length >= 8 && demo.moving);
    const result = Scene3D.resultGame({ blocks: demo.stack, collapsedBlocks: [demo.stack[3], demo.stack[5]], collapsed: true });
    assert.equal(result.stack.length, demo.stack.length - 2);
    const empty = Scene3D.resultGame(null);
    assert.equal(empty.stack.length, 1);
    const renderer = Scene3D.create(fakeCanvas(), { mode: 'showcase' });
    renderer.render(snapshot({ game: empty }));
    assert.ok(renderer.stats.faces > 20);
  });
});

describe('3D arena (real client page)', skipReason ? { skip: skipReason } : {}, () => {
  test('the page boots in 3D with a live overlay and no script errors', async () => {
    const page = await boot(HTML);
    try {
      const w = page.window, d = page.document;
      assert.ok(w.SabotageStack3D, 'the 3D module is inlined and available');
      assert.equal(w.SabotageStack.getDimension(), '3d');
      assert.equal(d.documentElement.dataset.dimension, '3d');
      assert.equal(d.getElementById('dimension-select').value, '3d');
      assert.equal(w.SabotageStack.arena.game.available, true);
      assert.equal(w.SabotageStack.arena.title.available, true);
      assert.equal(w.SabotageStack.arena.results.available, true);
      assert.equal(w.SabotageStack.arena.errors.length, 0);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('the 3D overlay is painted while the original 2D board is still drawn underneath', async () => {
    const page = await boot(HTML, { manualAnimationFrame: true });
    try {
      const d = page.document;
      d.getElementById('start-button').click();
      page.advanceAnimation(600);
      const flat = d.getElementById('game-canvas'), three = d.getElementById('scene3d-canvas');
      assert.equal(page.pixel(flat, 10, 10).join(','), PAPER_SKY, 'the 2D board keeps its audited pixels');
      const samples = [[8, 8], [180, 60], [180, 260], [60, 400], [300, 300]].map(([x, y]) => page.pixel(three, x, y).join(','));
      assert.ok(new Set(samples).size >= 3, `3D overlay should vary across the frame: ${samples.join(' | ')}`);
      assert.ok(page.window.SabotageStack.arena.game.stats.faces > 60);
      assert.equal(page.window.SabotageStack.arena.errors.length, 0);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('the View picker persists Classic 2D and the 3D layer steps aside', async () => {
    const page = await boot(HTML);
    let restored = null;
    try {
      const d = page.document, w = page.window;
      const select = d.getElementById('dimension-select');
      select.value = '2d';
      select.dispatchEvent(new w.Event('change', { bubbles: true }));
      assert.equal(w.SabotageStack.getDimension(), '2d');
      assert.equal(d.documentElement.dataset.dimension, '2d');
      assert.equal(w.localStorage.getItem('sabotage-stack-dimension-v1'), '2d');
      assert.equal(w.SabotageStack.arena.errors.length, 0);
      restored = await boot(HTML, { storage: { 'sabotage-stack-dimension-v1': '2d' } });
      assert.equal(restored.window.SabotageStack.getDimension(), '2d');
      assert.equal(restored.document.getElementById('dimension-select').value, '2d');
      assert.deepEqual(page.errors, []);
      assert.deepEqual(restored.errors, []);
    } finally { page.close(); if (restored) restored.close(); }
  });

  test('camera controls orbit, zoom, reset and never swallow a normal drop', async () => {
    const page = await boot(HTML, { manualAnimationFrame: true });
    try {
      const d = page.document, w = page.window;
      d.getElementById('start-button').click();
      const arena = w.SabotageStack.arena.game;
      const stage = d.getElementById('game-stage'), canvas = d.getElementById('game-canvas');
      const initialYaw = arena.user.yaw;

      // A shift-drag is intercepted in the capture phase: orbit, not a drop.
      const drag = new w.MouseEvent('pointerdown', { bubbles: true, cancelable: true, shiftKey: true, clientX: 100, clientY: 100 });
      canvas.dispatchEvent(drag);
      w.dispatchEvent(new w.MouseEvent('pointermove', { bubbles: true, clientX: 160, clientY: 130 }));
      w.dispatchEvent(new w.MouseEvent('pointerup', { bubbles: true, clientX: 160, clientY: 130 }));
      assert.ok(arena.user.yaw > initialYaw, 'shift-drag should orbit the camera');
      assert.equal(d.getElementById('height-display').textContent, '0', 'orbiting must not drop a block');

      const wheel = new w.WheelEvent('wheel', { bubbles: true, cancelable: true, deltaY: 120 });
      stage.dispatchEvent(wheel);
      assert.ok(arena.user.dolly > 0, 'scroll should dolly the camera');
      d.getElementById('reset-view-button').click();
      assert.deepEqual([arena.user.yaw, arena.user.pitch, arena.user.dolly], [0, 0, 0]);

      d.getElementById('freecam-button').click();
      assert.equal(d.getElementById('freecam-button').getAttribute('aria-pressed'), 'true');
      assert.equal(arena.freeCam, true);
      d.getElementById('auto-orbit-button').click();
      assert.equal(d.getElementById('auto-orbit-button').getAttribute('aria-pressed'), 'false');
      assert.equal(arena.autoOrbit, false);
      d.getElementById('freecam-button').click();
      assert.equal(arena.freeCam, false);

      // Without a modifier, the same pointerdown still drops.
      page.advanceAnimation(100);
      canvas.dispatchEvent(new w.MouseEvent('pointerdown', { bubbles: true, cancelable: true, clientX: 100, clientY: 100 }));
      assert.equal(d.getElementById('height-display').textContent, '1');
      assert.deepEqual(page.errors, []);
      assert.equal(w.SabotageStack.arena.errors.length, 0);
    } finally { page.close(); }
  });

  test('V toggles dimension, Q/E rotate and the arena follows the theme', async () => {
    const page = await boot(HTML, { manualAnimationFrame: true });
    try {
      const d = page.document, w = page.window;
      w.dispatchEvent(new w.KeyboardEvent('keydown', { code: 'KeyV', key: 'v', bubbles: true }));
      assert.equal(w.SabotageStack.getDimension(), '2d');
      w.dispatchEvent(new w.KeyboardEvent('keydown', { code: 'KeyV', key: 'v', bubbles: true }));
      assert.equal(w.SabotageStack.getDimension(), '3d');
      d.getElementById('start-button').click();
      const arena = w.SabotageStack.arena.game;
      w.dispatchEvent(new w.KeyboardEvent('keydown', { code: 'KeyE', key: 'e', bubbles: true }));
      assert.notEqual(arena.user.yaw, 0);
      const select = d.getElementById('theme-select');
      select.value = 'sunset';
      select.dispatchEvent(new w.Event('change', { bubbles: true }));
      page.advanceAnimation(200);
      assert.equal(arena.world.key, 'sunset', 'the 3D world follows the theme picker');
      assert.equal(w.SabotageStack.arena.errors.length, 0);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('reduced motion keeps the 3D camera still', async () => {
    const page = await boot(HTML, { manualAnimationFrame: true, reducedMotion: true });
    try {
      const d = page.document, w = page.window;
      d.getElementById('start-button').click();
      page.advanceAnimation(1500);
      const arena = w.SabotageStack.arena.game;
      assert.ok(Math.abs(arena.cam.yaw - arena.baseYaw) < 1e-6, 'no auto orbit under reduced motion');
      assert.equal(arena.cam.roll, 0);
      assert.ok(arena.stats.faces > 60, 'the 3D scene is still rendered');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });
});

test('the client HTML declares all three overlay canvases and the View control', () => {
  const html = fs.readFileSync(HTML, 'utf8');
  for (const id of ['scene3d-canvas', 'title3d-canvas', 'results3d-canvas', 'dimension-select', 'freecam-button', 'reset-view-button', 'auto-orbit-button']) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
  assert.match(html, /SCENE3D_START/);
  assert.match(html, /SCENE3D_END/);
  assert.match(html, /html\[data-dimension="3d"\] #game-canvas/);
  // The 2D board must remain the input surface: no extra touch-action:none rules.
  const style = html.slice(html.indexOf('<style>'), html.indexOf('</style>'));
  assert.equal([...style.matchAll(/touch-action:\s*none/gi)].length, 2);
});
