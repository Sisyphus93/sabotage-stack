'use strict';
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');

const World3D = require('../client/world3d.js');
const HTML = path.join(__dirname, '..', 'sabotage-stack.html');

let boot = null, skipReason = null, createCanvas = null;
try {
  ({ boot } = require('./helpers/client-harness'));
  ({ createCanvas } = require('@napi-rs/canvas'));
} catch (error) {
  skipReason = `Atrium canvas harness unavailable: ${error.message} (run npm ci)`;
}

function fakeCanvas() {
  const surface = createCanvas(360, 520);
  const ctx = surface.getContext('2d');
  return {
    ctx,
    width: 360, height: 520, clientWidth: 360, clientHeight: 520,
    getContext(type) { return type === '2d' ? ctx : null; }
  };
}

describe('The Atrium (WebGL module)', () => {
  test('exposes three palettes, real geometry shaders and a complete static mesh', () => {
    assert.equal(World3D.VERSION, '2.0.0');
    assert.deepEqual(Object.keys(World3D.PALETTES), ['paper', 'sunset', 'primetime']);
    assert.ok(World3D.MESH_VERTICES > 1000, 'the atrium should be built from real triangles');
    assert.equal(World3D.VERTEX_STRIDE, 17);
    assert.match(World3D.VERT, /attribute vec3 aPos/);
    assert.match(World3D.VERT, /attribute vec4 aOrbit/);
    assert.match(World3D.FRAG, /gl_FragColor/);
    assert.match(World3D.FRAG, /uCamPos/);
    assert.match(World3D.SKY_FRAG, /uMood/);
    assert.equal(World3D.FRAG.includes('</script'), false);
    assert.equal(World3D.SKY_FRAG.includes('</script'), false);
    const missing = World3D.create(null);
    assert.equal(missing.available, false);
    assert.equal(missing.backend, 'none');
  });

  test('falls back to a painted atrium with no WebGL and no errors', () => {
    const canvas = fakeCanvas();
    const world = World3D.create(canvas, { theme: 'paper' });
    assert.equal(world.backend, 'canvas2d');
    assert.equal(world.available, true);
    assert.equal(world.errors.length, 0);
    world.setTheme('sunset');
    world.setPreviewMode(true);
    const snapshot = { theme: 'sunset', time: 1.5, intro: 0.5, mood: 0.4, pointerX: 0.2, pointerY: -0.3 };
    world.render(snapshot);
    world.render(snapshot);
    assert.equal(world.frames, 2);
    const stats = world.stats();
    assert.equal(stats.palette, 'NEON VOID');
    assert.ok(stats.triangles > 1000);
    assert.equal(stats.errors.length, 0);
    const pixel = [...canvas.ctx.getImageData(180, 260, 1, 1).data];
    assert.ok(pixel[0] + pixel[1] + pixel[2] > 20, `software atrium should paint visible pixels: ${pixel.join(',')}`);
  });
});

describe('The Atrium (real client page)', skipReason ? { skip: skipReason } : {}, () => {
  test('the page is 3D from the first painted frame with a live world and no errors', async () => {
    const page = await boot(HTML, { manualAnimationFrame: true });
    try {
      const d = page.document, w = page.window;
      assert.equal(d.documentElement.dataset.dimension, '3d', 'the head script sets 3D before first paint');
      assert.ok(w.SabotageStackWorld, 'the Atrium module is inlined and available');
      assert.equal(w.SabotageStack.getDimension(), '3d');
      assert.equal(d.getElementById('dimension-select').value, '3d');
      const stats = w.SabotageStack.getWorldStats();
      assert.equal(stats.backend, 'canvas2d');
      assert.equal(stats.available, true);
      assert.ok(stats.triangles > 1000);
      assert.equal(w.SabotageStack.arena.worldErrors.length, 0);
      assert.equal(w.SabotageStack.arena.errors.length, 0);
      assert.equal(page.errors.length, 0);
      assert.equal(d.documentElement.classList.contains('world-fallback'), false);
      assert.match(d.getElementById('world-hud-readout').textContent, /DEPTH ∞/);
      assert.equal(d.getElementById('title-screen').classList.contains('screen-arrive'), true);
      page.advanceAnimation(600);
      assert.ok(w.SabotageStack.getWorldStats().frames > 0);
      assert.equal(w.SabotageStack.arena.worldErrors.length, 0);
      assert.equal(page.errors.length, 0);
    } finally { page.close(); }
  });

  test('pointer movement drives the shared CSS light and themes repaint the whole world', async () => {
    const page = await boot(HTML, { manualAnimationFrame: true });
    try {
      const d = page.document, w = page.window;
      w.dispatchEvent(new w.MouseEvent('pointermove', { clientX: 1100, clientY: 200, bubbles: true }));
      assert.notEqual(d.documentElement.style.getPropertyValue('--px'), '');
      assert.match(d.documentElement.style.getPropertyValue('--light-x'), /%$/);
      page.advanceAnimation(100);
      const select = d.getElementById('theme-select');
      select.value = 'sunset';
      select.dispatchEvent(new w.Event('change', { bubbles: true }));
      assert.equal(w.SabotageStack.getTheme(), 'sunset');
      assert.equal(w.SabotageStack.getWorldStats().palette, 'NEON VOID');
      assert.match(d.getElementById('world-hud-readout').textContent, /NEON VOID/);
      page.advanceAnimation(100);
      assert.equal(w.SabotageStack.arena.worldErrors.length, 0);
      assert.equal(page.errors.length, 0);
    } finally { page.close(); }
  });

  test('Classic 2D steps aside cleanly and survives a reload', async () => {
    const page = await boot(HTML, { manualAnimationFrame: true });
    let restored = null;
    try {
      const d = page.document, w = page.window;
      const select = d.getElementById('dimension-select');
      select.value = '2d';
      select.dispatchEvent(new w.Event('change', { bubbles: true }));
      assert.equal(w.SabotageStack.getDimension(), '2d');
      assert.equal(d.documentElement.dataset.dimension, '2d');
      assert.equal(w.localStorage.getItem('sabotage-stack-dimension-v1'), '2d');
      page.advanceAnimation(200);
      assert.equal(w.SabotageStack.arena.worldErrors.length, 0);
      assert.equal(page.errors.length, 0);
      restored = await boot(HTML, { storage: { 'sabotage-stack-dimension-v1': '2d' }, manualAnimationFrame: true });
      assert.equal(restored.document.documentElement.dataset.dimension, '2d');
      assert.equal(restored.window.SabotageStack.getDimension(), '2d');
      assert.equal(restored.document.getElementById('dimension-select').value, '2d');
      assert.equal(restored.errors.length, 0);
    } finally { page.close(); if (restored) restored.close(); }
  });

  test('reduced motion holds the camera still without errors', async () => {
    const page = await boot(HTML, { manualAnimationFrame: true, reducedMotion: true });
    try {
      page.advanceAnimation(600);
      const w = page.window;
      assert.ok(w.SabotageStack.getWorldStats().frames > 0);
      assert.equal(w.SabotageStack.arena.worldErrors.length, 0);
      assert.equal(w.SabotageStack.arena.errors.length, 0);
      assert.equal(page.errors.length, 0);
      const html = fs.readFileSync(HTML, 'utf8');
      const style = html.slice(html.indexOf('<style>'), html.indexOf('</style>'));
      assert.match(style, /@media \(prefers-reduced-motion: reduce\)[\s\S]*?screen-arrive/);
    } finally { page.close(); }
  });
});

test('the single-file client declares the Atrium layer, depth transitions and fallbacks', () => {
  const html = fs.readFileSync(HTML, 'utf8');
  for (const id of ['world-canvas', 'pointer-light', 'world-hud', 'world-hud-readout', 'dimension-select']) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
  assert.match(html, /<html lang="en-GB" data-dimension="3d">/);
  assert.match(html, /WORLD3D_START/);
  assert.match(html, /WORLD3D_END/);
  assert.match(html, /THE ATRIUM/);
  assert.match(html, /@keyframes screenPortal/);
  const style = html.slice(html.indexOf('<style>'), html.indexOf('</style>'));
  assert.match(style, /html\[data-dimension="3d"\] \.home-copy/);
  assert.match(style, /html\[data-dimension="3d"\]\.world-fallback body/);
  assert.match(style, /html\[data-dimension="3d"\]\.arena-host-fallback #results-canvas/);
  // The 2D board remains the sole input surface: no extra touch-action:none rules.
  assert.equal([...style.matchAll(/touch-action:\s*none/gi)].length, 2);
});
