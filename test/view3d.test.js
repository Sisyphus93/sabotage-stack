'use strict';
// The 3D view itself needs WebGL 2 and is exercised in a real browser. These tests pin down everything around it that
// must hold without a GPU: the bundle stays in sync, the 2D game is untouched when WebGL is missing, the page hands the
// renderer the real game state, and a renderer failure can never take a run down with it.
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const zlib = require('node:zlib');
const build = require('../scripts/build-3d');
const { createGameServer } = require('../server');

let boot = null; let skipReason = null;
try { ({ boot } = require('./helpers/client-harness')); } catch (error) { skipReason = `Client harness failed to load on Node ${process.version}: ${error.message} (run npm ci if dependencies are missing)`; }
const HTML = path.join(__dirname, '..', 'sabotage-stack.html');

// Stands in for the WebGL renderer: records what the page hands it.
function fakeRenderer(window, { failOnRender = false } = {}) {
  const calls = { create: 0, game: [], board: [], results: [], scenes: [], themes: [], focus: [], disposed: 0 };
  window.HTMLCanvasElement.prototype.getContext = (original => function (type) {
    if (type === 'webgl2') return { createShader() {}, createVertexArray() {}, getExtension() { return null; } };
    return original.call(this, type);
  })(window.HTMLCanvasElement.prototype.getContext);
  window.SabotageStack3D = {
    create(options) {
      calls.create += 1; calls.options = options;
      return {
        canvas: window.document.createElement('canvas'), width: 1024, height: 768, focus: { x: 0, y: 0, w: 360, h: 520 },
        setFocus(x, y, w, h) { calls.focus.push({ x, y, w, h }); }, setPointer() {}, renderScene(model) { calls.scenes.push(model); },
        setTheme(name) { calls.themes.push(name); }, resize() {},
        renderGame(model) { if (failOnRender) throw new Error('GPU went away'); calls.game.push(model); },
        renderBoard(model) { calls.board.push(model); }, renderResults(model) { calls.results.push(model); },
        project() { return { x: 0, y: 0, visible: true }; }, dispose() { calls.disposed += 1; }
      };
    }
  };
  return calls;
}

describe('3D view bundle', () => {
  test('the inlined bundle was built from the current client3d/ sources', () => {
    assert.equal(build.check(), true, 'run `npm run build-3d` after changing client3d/');
  });
  test('the bundle sits in an inert block that the HTML parser reads to its end', () => {
    const html = fs.readFileSync(HTML, 'utf8');
    const open = html.indexOf('<script type="text/plain" id="view3d-bundle">');
    assert.ok(open > 0, 'bundle block exists');
    const close = html.indexOf('</script>', open);
    const block = html.slice(open, close);
    assert.match(block, /VIEW3D_BUNDLE_END \*\/$/, 'nothing inside the bundle ends the script element early');
    assert.ok(!block.includes('<!--'), 'no HTML comment opener inside the bundle');
    assert.ok(block.length > 200000, 'the bundle is present, not just the markers');
  });
});

describe('3D view integration', skipReason ? { skip: skipReason } : {}, () => {
  test('without WebGL 2 the classic 2D game runs and the 3D controls say why they are off', async () => {
    const page = await boot(HTML);
    try {
      const { document, window } = page;
      assert.equal(window.SabotageStack3D, undefined, 'the 3D bundle is never evaluated without WebGL 2');
      const select = document.getElementById('view-select');
      assert.equal(select.disabled, true);
      assert.equal(select.value, '2d');
      assert.equal(document.getElementById('view-toggle').hidden, true);
      assert.match(document.getElementById('view-help').textContent, /no WebGL 2/);
      document.getElementById('start-button').click();
      await page.sleep(250);
      assert.equal(document.querySelector('.view3d-canvas'), null);
      assert.equal(page.pixel(document.getElementById('game-canvas'), 10, 10)[3], 255, 'the 2D canvas is painted');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('with WebGL 2 the renderer receives the live game state and the 2D canvas becomes a clear overlay', async () => {
    let calls = null;
    const page = await boot(HTML, { beforeParse: window => { calls = fakeRenderer(window); } });
    try {
      const { document, window } = page;
      assert.equal(document.getElementById('view-select').value, '3d');
      assert.equal(document.getElementById('view-toggle').hidden, false);
      document.getElementById('start-button').click();
      await page.sleep(300);
      assert.equal(calls.create, 1, 'one renderer for the page');
      assert.equal(calls.scenes[0].kind, 'title', 'the world is already running behind the title screen');
      assert.ok(document.documentElement.classList.contains('world3d'));
      assert.equal(document.documentElement.classList.contains('world3d-pending'), false);
      assert.equal(calls.options.core, window.SabotageStackCore, 'the renderer shares the rules module, it does not copy it');
      const stage = document.getElementById('game-stage');
      assert.equal(document.body.firstElementChild.className, 'view3d-canvas', 'one WebGL canvas behind the whole page');
      assert.equal(document.body.firstElementChild.getAttribute('aria-hidden'), 'true');
      assert.equal(stage.querySelector('.view3d-canvas'), null);
      assert.deepEqual(calls.focus[calls.focus.length - 1], { x: 0, y: 0, w: 360, h: 520 }, 'the scene is composed for the stage rectangle');
      assert.ok(stage.classList.contains('has-view3d'));
      const model = calls.game[calls.game.length - 1];
      assert.equal(model.tower.stack.length, 1, 'base block');
      assert.equal(model.tower.playing, true);
      assert.equal(model.tower.moving.level, 1);
      assert.equal(model.tower.collapsed, false);
      assert.equal(calls.themes[calls.themes.length - 1], 'paper');
      assert.equal(page.pixel(document.getElementById('game-canvas'), 10, 10)[3], 0, 'the 2D canvas no longer paints a background');

      // A drop still goes through the unchanged game code; the renderer just sees the new stack.
      const before = model.tower.key;
      document.getElementById('theme-select').value = 'sunset';
      document.getElementById('theme-select').dispatchEvent(new window.Event('change'));
      await page.sleep(80);
      assert.equal(calls.themes[calls.themes.length - 1], 'sunset');
      assert.equal(calls.game[calls.game.length - 1].tower.key, before, 'same run, same tower');

      document.getElementById('view-toggle').click();
      await page.sleep(80);
      assert.equal(document.querySelector('.view3d-canvas'), null, '2D removes the WebGL canvas');
      assert.equal(document.documentElement.classList.contains('world3d'), false, 'and the page returns to its flat layout');
      assert.equal(calls.disposed, 1);
      assert.equal(window.localStorage.getItem('sabotage-stack-view-v1'), '2d');
      assert.equal(page.pixel(document.getElementById('game-canvas'), 10, 10)[3], 255, 'the 2D canvas paints again');
      document.getElementById('view-toggle').click();
      await page.sleep(80);
      assert.equal(calls.create, 2, 'switching back builds a fresh renderer');
      document.getElementById('menu-button').click();
      await page.sleep(80);
      assert.equal(document.body.dataset.screen, 'title');
      assert.equal(calls.scenes[calls.scenes.length - 1].kind, 'title', 'back at the menu the world keeps running');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('a saved 2D preference keeps the renderer from ever being created', async () => {
    let calls = null;
    const page = await boot(HTML, { storage: { 'sabotage-stack-view-v1': '2d' }, beforeParse: window => { calls = fakeRenderer(window); } });
    try {
      const { document } = page;
      assert.equal(document.getElementById('view-select').value, '2d');
      assert.equal(document.getElementById('view-select').disabled, false);
      document.getElementById('start-button').click();
      await page.sleep(250);
      assert.equal(calls.create, 0);
      assert.equal(page.pixel(document.getElementById('game-canvas'), 10, 10)[3], 255);
    } finally { page.close(); }
  });

  test('a renderer that throws mid-run drops to 2D without interrupting the run', async () => {
    let calls = null;
    const page = await boot(HTML, { beforeParse: window => { calls = fakeRenderer(window, { failOnRender: true }); } });
    try {
      const { document } = page;
      document.getElementById('start-button').click();
      await page.sleep(300);
      assert.equal(document.body.dataset.screen, 'game');
      assert.equal(document.querySelector('.view3d-canvas'), null);
      assert.equal(calls.disposed, 1);
      assert.equal(page.pixel(document.getElementById('game-canvas'), 10, 10)[3], 255, '2D took over on the same frame');
      assert.equal(document.getElementById('view-select').disabled, true);
      assert.match(document.getElementById('view-help').textContent, /stopped working/);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });
});

describe('page delivery', () => {
  function get(url, headers) {
    return new Promise((resolve, reject) => {
      http.get(url, { headers }, response => {
        const chunks = [];
        response.on('data', chunk => chunks.push(chunk));
        response.on('end', () => resolve({ headers: response.headers, body: Buffer.concat(chunks) }));
      }).on('error', reject);
    });
  }
  test('the page is compressed for browsers that accept it and byte-identical otherwise', async () => {
    const app = createGameServer({ onError: () => {} });
    await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
    try {
      const url = `http://127.0.0.1:${app.server.address().port}/`;
      const original = fs.readFileSync(HTML);
      const plain = await get(url, {});
      assert.equal(plain.headers['content-encoding'], undefined);
      assert.ok(plain.body.equals(original));
      const gzip = await get(url, { 'Accept-Encoding': 'gzip, deflate' });
      assert.equal(gzip.headers['content-encoding'], 'gzip');
      assert.equal(gzip.headers.vary, 'Accept-Encoding');
      assert.ok(gzip.body.length < original.length / 2, 'meaningfully smaller on the wire');
      assert.ok(zlib.gunzipSync(gzip.body).equals(original));
      const brotli = await get(url, { 'Accept-Encoding': 'gzip, deflate, br' });
      assert.equal(brotli.headers['content-encoding'], 'br');
      assert.ok(zlib.brotliDecompressSync(brotli.body).equals(original));
      const refused = await get(url, { 'Accept-Encoding': 'br;q=0, gzip;q=0' });
      assert.equal(refused.headers['content-encoding'], undefined);
    } finally { await new Promise(resolve => app.server.close(resolve)); }
  });
});
