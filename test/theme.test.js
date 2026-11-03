'use strict';
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');

let boot = null; let skipReason = null;
try { ({ boot } = require('./helpers/client-harness')); } catch (error) { skipReason = `jsdom / @napi-rs/canvas not installed (run npm install): ${error.message}`; }
const HTML = path.join(__dirname, '..', 'sabotage-stack.html');
const PAPER_SKY = '244,237,223,255';
const SUNSET_SKY = [255, 107, 53, 255]; // top of the sunset gradient (slight interpolation is fine)
const PRIMETIME_SKY = [27, 60, 170, 255]; // top of the Prime Time studio gradient (slight interpolation is fine)

describe('Theme picker (Paper default, Sunset Stack ’94, Prime Time)', skipReason ? { skip: skipReason } : {}, () => {
  test('boots in Paper, switches to Sunset, persists, and switches back', async () => {
    const page = await boot(HTML);
    try {
      const { document, window } = page;
      const select = document.getElementById('theme-select');
      assert.ok(select, 'theme picker exists');
      assert.equal(document.documentElement.dataset.theme, 'paper');
      assert.equal(select.value, 'paper');
      assert.equal(window.SabotageStack.getTheme(), 'paper');
      assert.deepEqual(Array.from(window.SabotageStack.themes), ['paper', 'sunset', 'primetime']);

      document.getElementById('start-button').click();
      await page.sleep(250);
      const canvas = document.getElementById('game-canvas');
      assert.equal(page.pixel(canvas, 10, 10).join(','), PAPER_SKY, 'Paper sky by default');

      select.value = 'sunset';
      select.dispatchEvent(new window.Event('change', { bubbles: true }));
      await page.sleep(250);
      assert.equal(document.documentElement.dataset.theme, 'sunset');
      assert.equal(window.SabotageStack.getTheme(), 'sunset');
      assert.equal(window.localStorage.getItem('sabotage-stack-theme-v1'), 'sunset');
      assert.equal(document.getElementById('theme-color-meta').getAttribute('content'), '#170B33');
      const sunsetSky = page.pixel(canvas, 10, 10);
      assert.ok(sunsetSky.every((channel, index) => Math.abs(channel - SUNSET_SKY[index]) <= 4), `Sunset sky after switching (got ${sunsetSky})`);

      select.value = 'paper';
      select.dispatchEvent(new window.Event('change', { bubbles: true }));
      await page.sleep(250);
      assert.equal(document.documentElement.dataset.theme, 'paper');
      assert.equal(window.localStorage.getItem('sabotage-stack-theme-v1'), 'paper');
      assert.equal(page.pixel(canvas, 10, 10).join(','), PAPER_SKY, 'Paper sky restored');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('switches to Prime Time, recolours the stage, persists, and restores Paper', async () => {
    const page = await boot(HTML);
    try {
      const { document, window } = page;
      const select = document.getElementById('theme-select');
      assert.ok(Array.from(select.options).some(option => option.value === 'primetime'), 'picker offers Prime Time');
      document.getElementById('start-button').click();
      await page.sleep(250);
      const canvas = document.getElementById('game-canvas');
      select.value = 'primetime';
      select.dispatchEvent(new window.Event('change', { bubbles: true }));
      await page.sleep(250);
      assert.equal(document.documentElement.dataset.theme, 'primetime');
      assert.equal(window.SabotageStack.getTheme(), 'primetime');
      assert.equal(window.localStorage.getItem('sabotage-stack-theme-v1'), 'primetime');
      assert.equal(document.getElementById('theme-color-meta').getAttribute('content'), '#0A1A55');
      const sky = page.pixel(canvas, 40, 4);
      assert.ok(sky.every((channel, index) => Math.abs(channel - PRIMETIME_SKY[index]) <= 6), `Prime Time sky after switching (got ${sky})`);
      select.value = 'paper';
      select.dispatchEvent(new window.Event('change', { bubbles: true }));
      await page.sleep(250);
      assert.equal(document.documentElement.dataset.theme, 'paper');
      assert.equal(page.pixel(canvas, 10, 10).join(','), PAPER_SKY, 'Paper sky restored');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });

  test('an unknown theme name falls back to Paper', async () => {
    const page = await boot(HTML);
    try {
      assert.equal(page.window.SabotageStack.setTheme('midnight'), 'paper');
      assert.equal(page.document.documentElement.dataset.theme, 'paper');
      assert.equal(page.window.SabotageStack.setTheme('sunset'), 'sunset');
      assert.equal(page.window.SabotageStack.setTheme('primetime'), 'primetime');
      assert.deepEqual(page.errors, []);
    } finally { page.close(); }
  });
});
