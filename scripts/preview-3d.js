#!/usr/bin/env node
'use strict';
// Dev tool: boot the real single-file client in the jsdom + Skia harness, run a
// few frames and write the 3D overlay canvases out as PNGs for visual review.
// Usage: node scripts/preview-3d.js [outDir] [theme] [stage]
const fs = require('node:fs');
const path = require('node:path');
const { boot } = require('../test/helpers/client-harness');

const HTML = path.join(__dirname, '..', 'sabotage-stack.html');
const outDir = process.argv[2] || path.join(__dirname, '..', '.preview');
const theme = process.argv[3] || 'paper';
const stage = process.argv[4] || 'game';

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const page = await boot(HTML, { manualAnimationFrame: true, seed: 7 });
  try {
    const d = page.document;
    if (theme !== 'paper') {
      const select = d.getElementById('theme-select');
      select.value = theme;
      select.dispatchEvent(new page.window.Event('change', { bubbles: true }));
    }
    if (stage === 'game') {
      d.getElementById('start-button').click();
      page.advanceAnimation(900);
      // Force a few drops to grow a tower.
      for (let i = 0; i < 6; i += 1) {
        d.getElementById('drop-button').dispatchEvent(new page.window.Event('pointerdown', { bubbles: true, cancelable: true }));
        page.advanceAnimation(650);
      }
      page.advanceAnimation(500);
    } else if (stage === 'results') {
      d.getElementById('start-button').click();
      page.advanceAnimation(4000);
    } else {
      page.advanceAnimation(1200);
    }
    const ids = stage === 'game' ? ['scene3d-canvas'] : stage === 'results' ? ['results3d-canvas'] : ['title3d-canvas'];
    for (const id of ids) {
      const el = d.getElementById(id);
      const buffer = page.png(el);
      const file = path.join(outDir, `${theme}-${stage}-${id}.png`);
      fs.writeFileSync(file, buffer);
      console.log('wrote', file, buffer.length, 'bytes');
    }
    console.log('dimension:', page.window.SabotageStack.getDimension());
    console.log('arena errors:', JSON.stringify(page.window.SabotageStack.arena.errors));
    console.log('page errors:', JSON.stringify(page.errors));
    const arena = page.window.SabotageStack.arena.game;
    if (arena) console.log('stats:', JSON.stringify(arena.stats), 'cam:', JSON.stringify({ yaw: arena.cam.yaw, targetY: arena.cam.targetY, dist: arena.cam.dist }));
  } finally { page.close(); }
})().catch(error => { console.error(error); process.exit(1); });
