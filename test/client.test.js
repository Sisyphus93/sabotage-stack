'use strict';
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

let boot = null; let skipReason = null;
try { ({ boot } = require('./helpers/client-harness')); } catch (error) { skipReason = `jsdom / @napi-rs/canvas not installed (run npm install): ${error.message}`; }
const HTML = path.join(__dirname, '..', 'sabotage-stack.html');
const INK = '42,37,32,255';

describe('Spotlight (real client page, real canvas, pixel-measured)', skipReason ? { skip: skipReason } : {}, () => {
  async function openSpotlightBench() {
    const page = await boot(HTML);
    page.document.getElementById('dev-mode-button').click(); await page.sleep(300);
    page.document.querySelector('[data-dev-effect="spotlight"]').click(); await page.sleep(300);
    return page;
  }
  test('outside the beam the field is one fully opaque colour on every frame', async () => {
    const page = await openSpotlightBench();
    try {
      const canvas = page.document.getElementById('game-canvas');
      const outside = [[10, 10], [350, 10], [10, 510], [350, 510], [40, 300], [60, 400], [300, 300], [310, 420], [180, 430], [100, 200], [250, 150], [14, 260], [346, 260]];
      const seen = new Set();
      for (let frame = 0; frame < 30; frame += 1) {
        await page.sleep(60);
        for (const [x, y] of outside) {
          // the beam sits on the tower's right edge in the DEV bench; keep to points clear of its 52px radius
          seen.add(page.pixel(canvas, x, y).join(','));
        }
      }
      assert.deepEqual([...seen], [INK], `the world leaked through the veil: ${[...seen].join(' | ')}`);
    } finally { page.close(); }
  });
  test('the beam itself still shows the world', async () => {
    const page = await openSpotlightBench();
    try {
      const canvas = page.document.getElementById('game-canvas'); await page.sleep(200);
      // The beam is a 52px-radius circle; scan the image for any non-ink pixel and require a substantial lit area.
      const ctx = canvas.getContext('2d'); const data = ctx.getImageData(0, 0, 360, 520).data; let lit = 0;
      for (let i = 0; i < data.length; i += 4) if (!(data[i] === 42 && data[i + 1] === 37 && data[i + 2] === 32)) lit += 1;
      assert.ok(lit > 6000 && lit < 12000, `lit pixels ${lit}; expected roughly the area of a 52px-radius beam (~8500)`);
    } finally { page.close(); }
  });
  test('the player-facing description no longer claims a partial darkening', () => {
    const html = fs.readFileSync(HTML, 'utf8');
    assert.equal(/Darkens the field by \d+%/.test(html), false);
    assert.match(html, /Blacks out the whole field/);
  });
  test('the page boots with no script errors', async () => {
    const page = await boot(HTML);
    try { await page.sleep(300); assert.deepEqual(page.errors, []); } finally { page.close(); }
  });
});

// F-001: the playfield is the largest 360:520 box that fits the viewport, never a postage stamp.
// jsdom does no layout, so the sizing contract is checked at the source and the scroll reset behaviourally.
describe('Layout: the playfield keeps a minimum size (F-001)', skipReason ? { skip: skipReason } : {}, () => {
  test('every height-driven stage width keeps its 240px floor', () => {
    const html = fs.readFileSync(HTML, 'utf8');
    const style = html.slice(html.indexOf('<style>'), html.indexOf('</style>'));
    // the theme rules also target .game-stage, but only the sizing rules read the viewport height
    const rules = [...style.matchAll(/\.game-stage\s*\{([^}]*)\}/g)]
      .map(match => match[1]).filter(body => body.includes('100dvh'));
    assert.ok(rules.length >= 4, `expected the stage sizing rules in base and media queries, found ${rules.length}`);
    for (const body of rules) {
      const width = /width:\s*([^;]+);/.exec(body);
      assert.ok(width, `.game-stage rule without a width: ${body.trim()}`);
      assert.match(width[1], /max\(\s*calc\(100dvh/, `stage width must floor the viewport-height term: ${width[1]}`);
      assert.match(width[1], /,\s*240px\s*\)/, `stage width floor is not 240px: ${width[1]}`);
    }
    const layout = /\.game-layout\s*\{([^}]*)\}/.exec(style)[1];
    assert.match(layout, /align-items:\s*start/, 'the play card must not be centred against a taller side stack');
  });

  test('starting a game scrolls the new screen to the top', async () => {
    const page = await boot(HTML);
    try {
      const { document } = page;
      document.documentElement.scrollTop = 480; // the title screen was scrolled down before Play solo
      document.getElementById('start-button').click();
      await page.sleep(250);
      assert.equal(document.body.dataset.screen, 'game');
      assert.equal(document.documentElement.scrollTop, 0, 'the game screen should open at the top, not mid-board');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });
});

// F-002: make solo's auto-drop adjustable without changing the one-click default run.
describe('Solo auto-drop assist choices (F-002)', skipReason ? { skip: skipReason } : {}, () => {
  const AUTO_DROP_STORAGE_KEY = 'sabotage-stack-solo-auto-drop-v1';

  test('the default stays at 3.5 seconds and a chosen setting persists across reloads', async () => {
    const page = await boot(HTML);
    let restored = null;
    try {
      const select = page.document.getElementById('solo-auto-drop-select');
      assert.equal(select.value, '3.5');
      assert.match(page.document.getElementById('solo-auto-drop-help').textContent, /Standard timing/);
      select.value = 'off';
      select.dispatchEvent(new page.window.Event('change', { bubbles: true }));
      const saved = page.window.localStorage.getItem(AUTO_DROP_STORAGE_KEY);
      assert.equal(saved, 'off');
      assert.match(page.document.getElementById('solo-auto-drop-help').textContent, /labelled Assisted/);

      restored = await boot(HTML, { storage: { [AUTO_DROP_STORAGE_KEY]: saved } });
      assert.equal(restored.document.getElementById('solo-auto-drop-select').value, 'off');
      assert.match(restored.document.getElementById('solo-auto-drop-help').textContent, /labelled Assisted/);
      assert.deepEqual(page.errors, []);
      assert.deepEqual(restored.errors, []);
    } finally { page.close(); if (restored) restored.close(); }
  });

  test('the unchanged default still auto-drops at 3.5 seconds without marking the run assisted', async () => {
    const page = await boot(HTML, { manualAnimationFrame: true });
    try {
      page.document.getElementById('start-button').click();
      page.advanceAnimation(3800);
      assert.equal(page.document.getElementById('height-display').textContent, '1', 'the default timer should place the first block');
      assert.doesNotMatch(page.document.getElementById('game-mode-kicker').textContent, /Assisted/);
      assert.equal(page.document.getElementById('result-assist-label').hidden, true);
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('10 seconds is assisted and the auto-drop clock pauses for the first 2 seconds of a vote', async () => {
    const page = await boot(HTML, { storage: { [AUTO_DROP_STORAGE_KEY]: '10' }, manualAnimationFrame: true });
    try {
      assert.equal(page.document.getElementById('solo-auto-drop-select').value, '10');
      page.document.getElementById('start-button').click();
      assert.match(page.document.getElementById('game-mode-kicker').textContent, /Assisted/);
      page.advanceAnimation(11800);
      assert.equal(page.document.getElementById('height-display').textContent, '0', '10 seconds of active auto-drop time have not elapsed yet');
      page.advanceAnimation(600);
      assert.equal(page.document.getElementById('height-display').textContent, '1', 'the first block drops after 10 active seconds, excluding the vote pause');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('Off never auto-drops, and an assisted result is labelled', async () => {
    const page = await boot(HTML, { storage: { [AUTO_DROP_STORAGE_KEY]: 'off' }, manualAnimationFrame: true });
    try {
      page.document.getElementById('start-button').click();
      assert.match(page.document.getElementById('game-mode-kicker').textContent, /Assisted/);
      page.advanceAnimation(12500);
      assert.equal(page.document.getElementById('height-display').textContent, '0', 'a waiting block is not forced to drop');
      page.document.getElementById('drop-button').click();
      page.document.getElementById('drop-button').click();
      page.document.getElementById('drop-button').click();
      page.advanceAnimation(1300);
      assert.equal(page.document.body.dataset.screen, 'results');
      assert.equal(page.document.getElementById('result-assist-label').hidden, false);
      assert.equal(page.document.getElementById('result-assist-label').textContent, 'Assisted');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });
});
