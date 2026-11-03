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
