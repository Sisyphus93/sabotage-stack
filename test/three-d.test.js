'use strict';
/* Tests for the 3D stage layer: the vendored Three.js blob, the scene engine sync, the
   graceful 2D fallback (which keeps the pixel-tested classic canvas running in headless
   environments), and a deep smoke run of the engine against the REAL Three.js scene graph
   with a stubbed WebGL renderer. */
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const assert = require('node:assert');
const { JSDOM, VirtualConsole } = require('jsdom');
const { createCanvas } = require('@napi-rs/canvas');
const { boot } = require('./helpers/client-harness');
const { check: scene3dInSync } = require('../scripts/sync-scene3d');
const { check: coreInSync } = require('../scripts/sync-core');

const HTML_PATH = path.join(__dirname, '..', 'sabotage-stack.html');
const SCENE3D_PATH = path.join(__dirname, '..', 'client', 'scene3d.js');
const HTML = fs.readFileSync(HTML_PATH, 'utf8');

test('the client inlines a real Three.js vendor blob behind the WebGL guard', () => {
  const start = HTML.indexOf('/* THREE_VENDOR_START */');
  const end = HTML.indexOf('/* THREE_VENDOR_END */');
  assert.ok(start !== -1 && end > start, 'THREE_VENDOR markers exist');
  assert.ok(end - start > 100_000, 'the vendored three.js build is embedded (minified)');
  assert.match(HTML, /<script type="text\/plain" id="three-vendor-source">/, 'the blob waits in a text/plain script');
  assert.ok(/three\.js v0\.187\.0/i.test(HTML.slice(start, start + 400)) || /Three\.js v0\.187\.0/i.test(HTML.slice(start, start + 400)), 'the pinned version is credited');
});

test('client/scene3d.js and the copy inlined in sabotage-stack.html are identical', () => {
  assert.equal(scene3dInSync(), true);
  assert.equal(coreInSync(), true, 'the shared core sync still holds');
  assert.equal(fs.readFileSync(SCENE3D_PATH, 'utf8').includes('SabotageStack3D'), true);
});

test('the 3D stage stays out of the way of the tested 2D surface', () => {
  const style = HTML.slice(HTML.indexOf('<style>'), HTML.indexOf('</style>'));
  assert.equal([...style.matchAll(/touch-action:\s*none/gi)].length, 2, 'no new touch-action: none rules appeared');
  assert.match(style, /#game-canvas-3d\s*\{[^}]*pointer-events:\s*none/is, 'the 3D canvas never steals taps');
  assert.match(style, /#game-canvas-3d\[hidden\]\s*\{\s*display:\s*none/i, 'the hidden 3D canvas really hides');
  assert.match(HTML, /<canvas id="game-canvas-3d" hidden aria-hidden="true"><\/canvas>/, 'the stage has the 3D canvas');
  assert.match(HTML, /id="renderer-select"/, 'players can switch between 3D and 2D');
});

test('headless boot without WebGL: 3D stays dark, the 2D stage keeps playing, no errors', async () => {
  const page = await boot(HTML_PATH);
  try {
    assert.equal(page.window.THREE, undefined, 'the vendor blob is not evaluated without WebGL');
    assert.equal(page.window.SabotageStack.getRenderer(), '2d', 'the classic canvas renders');
    assert.equal(typeof page.window.SabotageStack3D.render, 'function', 'the engine is installed');
    assert.equal(page.window.SabotageStack3D.isActive(), false);
    const d = page.document;
    d.getElementById('start-button').click();
    await page.sleep(250);
    const heightBefore = d.getElementById('height-display').textContent;
    d.getElementById('drop-button').click();
    await page.sleep(250);
    assert.ok(d.body.dataset.screen === 'game', 'the run is live on the game screen');
    assert.ok(heightBefore !== undefined);
    assert.deepEqual(page.errors, []);
  } finally {
    page.close();
  }
});

// ---- deep smoke: the engine runs against the real Three.js scene graph ---------------------
function loadRealThree() {
  const match = HTML.match(/<script type="text\/plain" id="three-vendor-source">([\s\S]*?)<\/script>/);
  assert.ok(match, 'vendor block exists');
  const sandbox = { window: {}, self: {}, document: { createElementNS: () => ({ getContext: () => null, style: {} }), createElement: () => ({ getContext: () => null, style: {} }) } };
  sandbox.window = sandbox;
  const vm = require('node:vm');
  vm.createContext(sandbox);
  vm.runInContext(match[1], sandbox);
  return sandbox.window.THREE;
}

function makeFakeRenderer(THREE) {
  return class FakeWebGLRenderer {
    constructor() {
      this.shadowMap = { enabled: false, type: 0 };
      this.toneMapping = 0;
      this.toneMappingExposure = 1;
      this.outputColorSpace = 'srgb';
      this.calls = 0;
    }
    setPixelRatio() {}
    setSize() {}
    render() { this.calls += 1; }
    dispose() {}
  };
}

async function boot3D({ seed = 7 } = {}) {
  const THREE = loadRealThree();
  assert.ok(THREE && THREE.REVISION >= 180, 'real three.js loaded');
  THREE.WebGLRenderer = makeFakeRenderer(THREE);
  const errors = [];
  const vc = new VirtualConsole();
  vc.on('jsdomError', e => errors.push('jsdomError: ' + (e.detail && e.detail.stack || e.message)));
  vc.on('error', (...a) => errors.push('console.error: ' + a.join(' ')));
  const canvases2D = new Map();
  const dom = new JSDOM(HTML, {
    url: 'http://localhost:3000/', runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: vc,
    beforeParse(window) {
      let state = 7;
      window.Math.random = () => { state = (state * 1664525 + 1013904223) >>> 0; return state / 4294967296; };
      window.matchMedia = q => ({ matches: false, media: q, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} });
      window.HTMLCanvasElement.prototype.getContext = function (type) {
        if (String(type).startsWith('webgl')) {
          return { createShader: () => ({}), getParameter: () => 0, getExtension: () => null, getShaderPrecisionFormat: () => ({ precision: 23 }) };
        }
        if (!canvases2D.has(this)) canvases2D.set(this, createCanvas(360, 520));
        return canvases2D.get(this).getContext('2d');
      };
      window.THREE = THREE;
      window.__errors = errors;
      window.addEventListener('error', e => errors.push('window.onerror: ' + e.message));
      window.addEventListener('unhandledrejection', e => errors.push('unhandledrejection: ' + e.reason));
    }
  });
  const { window } = dom;
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  await sleep(250);
  return { dom, window, document: window.document, errors, sleep, close: () => window.close() };
}

test('3D smoke: boots the real scene graph, plays a run, switches themes and renderers cleanly', async () => {
  const page = await boot3D();
  try {
    const { window: w, document: d } = page;
    assert.equal(w.SabotageStack.getRenderer(), '3d', 'the 3D stage takes over where WebGL exists');
    assert.equal(w.SabotageStack3D.isActive(), true);
    assert.equal(d.getElementById('game-canvas-3d').hidden, false, 'the 3D canvas is showing');

    // A live run: start, let auto-drop place blocks, keep frames flowing.
    d.getElementById('start-button').click();
    await page.sleep(400);
    d.getElementById('drop-button').click();
    await page.sleep(600);
    assert.ok(['game', 'results'].includes(d.body.dataset.screen), 'the run advanced');

    // Theme moves the 3D environment without tearing down gameplay.
    w.SabotageStack.setTheme('sunset');
    await page.sleep(200);
    w.SabotageStack.setTheme('primetime');
    await page.sleep(200);
    assert.equal(w.SabotageStack.getTheme(), 'primetime');
    assert.equal(w.SabotageStack3D.isActive(), true, 'theme changes keep the 3D stage alive');

    // Renderer toggle round-trip.
    w.SabotageStack.setRenderer('2d');
    assert.equal(w.SabotageStack.getRenderer(), '2d');
    assert.equal(d.getElementById('game-canvas-3d').hidden, true, 'the 2D classic stage shows');
    await page.sleep(120);
    w.SabotageStack.setRenderer('3d');
    assert.equal(w.SabotageStack.getRenderer(), '3d');
    await page.sleep(200);

    const realErrors = page.errors.filter(line => !/WebGL|PMREM|Framebuffer|not a constructor/i.test(line));
    assert.deepEqual(realErrors, [], `the 3D stage ran without script errors (${page.errors.join(' | ')})`);
  } finally {
    page.close();
  }
});

test('3D smoke: a collapsing tower is staged without errors', async () => {
  const page = await boot3D();
  try {
    const { window: w, document: d } = page;
    assert.equal(w.SabotageStack3D.isActive(), true);
    d.getElementById('start-button').click();
    await page.sleep(300);
    // Slam drops until a miss collapses the tower (auto-drop is on a 3.5 s fuse; force misses).
    for (let i = 0; i < 14; i += 1) {
      if (d.body.dataset.screen !== 'game') break;
      d.getElementById('drop-button').click();
      await page.sleep(120);
    }
    await page.sleep(400);
    const realErrors = page.errors.filter(line => !/WebGL|PMREM|Framebuffer|not a constructor/i.test(line));
    assert.deepEqual(realErrors, [], `collapse stayed clean (${page.errors.join(' | ')})`);
    assert.ok(['game', 'results'].includes(d.body.dataset.screen));
  } finally {
    page.close();
  }
});
