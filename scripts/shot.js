#!/usr/bin/env node
'use strict';
// Dev-only visual QA: launch the bundled headless Chromium (installed with
// `npm i --no-save playwright-core @sparticuz/chromium`) and screenshot the
// real page at several viewports / screens. Not used by the game or npm test.
//   LD_LIBRARY_PATH=/tmp/al2023/lib:/tmp node scripts/shot.js [outDir]
const fs = require('node:fs');
const path = require('node:path');
const { chromium: pw } = require('playwright-core');

const outDir = process.argv[2] || path.join(__dirname, '..', '.preview');

async function main() {
  const mod = await import('@sparticuz/chromium');
  const chromium = mod.default;
  mod.setupLambdaEnvironment('/tmp/al2023/lib');
  await mod.inflate(path.join(__dirname, '..', 'node_modules', '@sparticuz', 'chromium', 'bin', 'al2023.tar.br'));
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await pw.launch({
    args: [...chromium.args, '--no-sandbox', '--disable-gpu-sandbox'],
    executablePath: await chromium.executablePath(), headless: true, timeout: 40000
  });
  const errors = [];
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  page.on('pageerror', e => errors.push('page: ' + e.message));
  await page.goto('http://127.0.0.1:3000/', { waitUntil: 'load', timeout: 25000 });
  await page.waitForTimeout(3200);
  const state = await page.evaluate(() => ({
    world: window.SabotageStack && window.SabotageStack.getWorldStats(),
    worldErrors: window.SabotageStack && window.SabotageStack.arena.worldErrors.length
  }));
  console.log('world:', JSON.stringify(state));
  const save = async (name) => {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: path.join(outDir, name) });
    console.log('wrote', name);
  };
  await save('page-title.png');

  // Move the pointer so the shared camera parallax is visible.
  await page.mouse.move(1080, 300);
  await page.waitForTimeout(700);
  await save('page-title-parallax.png');

  // The lobby is another set inside the same room.
  await page.click('#teamwork-button');
  await page.waitForTimeout(1600);
  await save('page-lobby.png');
  await page.click('#room-close-button');
  await page.waitForTimeout(800);

  await page.click('#start-button');
  await page.waitForTimeout(1800);
  await save('page-game.png');
  await page.selectOption('#theme-select', 'sunset');
  await page.waitForTimeout(1200);
  await save('page-game-sunset.png');
  await page.selectOption('#theme-select', 'primetime');
  await page.waitForTimeout(1000);
  await save('page-game-primetime.png');

  // A burst of deliberately reckless drops reveals the results set and its 3D tower.
  await page.locator('#game-canvas').focus();
  for (let i = 0; i < 12; i += 1) {
    await page.keyboard.press('Space');
    await page.waitForTimeout(180);
    if (await page.evaluate(() => document.body.dataset.screen === 'results')) break;
  }
  await page.waitForTimeout(2200);
  const onResults = await page.evaluate(() => document.body.dataset.screen === 'results');
  if (onResults) {
    await save('page-results.png');
    await page.click('#results-menu-button');
  } else {
    console.log('results screen not reached; returning via Menu');
    await page.click('#menu-button');
  }
  await page.waitForTimeout(900);

  await page.click('#how-button');
  await page.waitForTimeout(700);
  await save('page-dialog.png');
  await page.evaluate(() => { const d = document.getElementById('how-dialog'); if (d) d.scrollTop = d.scrollHeight; });
  await page.waitForTimeout(400);
  await save('page-dialog-3d.png');
  await page.click('#close-how');
  await page.selectOption('#theme-select', 'paper');
  await page.waitForTimeout(500);

  // Narrow phone viewport.
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(900);
  await save('page-title-phone.png');
  await page.click('#start-button');
  await page.waitForTimeout(1400);
  await save('page-game-phone.png');

  console.log('page errors:', JSON.stringify(errors));
  await browser.close();
}
main().catch(error => { console.error(error); process.exit(1); });
