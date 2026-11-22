'use strict';
// Issue #51: round-scoped Teamwork plaques must not grow the renderer's GPU inventory. Uses the real bundle and a real renderer,
// with a synthetic Teamwork host view, then forces full round resets by bumping the round id. Manual frame calls keep the whole
// measurement inside one JS task.
const { test, expect } = require('@playwright/test');
const { createGameServer } = require('../../server');

let app; let origin;
test.beforeAll(async () => {
  app = createGameServer();
  await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
  origin = `http://127.0.0.1:${app.server.address().port}`;
});
test.afterAll(async () => { if (app) await app.close(); });

test('repeated Teamwork rounds return GPU texture and geometry counts to baseline', async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const errors = [];
  await context.addInitScript(() => {
    window.cspViolations = [];
    document.addEventListener('securitypolicyviolation', event => window.cspViolations.push({ directive: event.effectiveDirective, blocked: event.blockedURI }));
    window.addEventListener('unhandledrejection', event => window.cspViolations.push({ rejection: String(event.reason) }));
  });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  try {
    await page.goto(`${origin}/?tier=medium&scale=0.5`);
    await expect(page.locator('#stage3d')).toBeAttached();
    await page.waitForFunction(() => window.__stack3d && window.SabotageStackCore && window.SabotageStackHost?.active, null, { timeout: 30_000 });
    await page.evaluate(() => {
      const Core = window.SabotageStackCore;
      const makeView = roundNumber => {
        const colors = ['#2F8478', '#E3A33B', '#C8503C', '#6B7FA3', '#8B5FBF', '#3F8E5A'];
        const placers = ['Ada', 'Bea', 'Cid', 'Dee', 'Eli', 'Fox'];
        const blocks = [Core.makeBase()];
        for (let level = 1; level <= 24; level += 1) {
          const width = 150 - level * 2;
          const centre = 180 + Math.sin(level * 1.7) * 18;
          blocks.push({ left: centre - width / 2, right: centre + width / 2, color: colors[level % colors.length], perfect: level % 6 === 0, placer: placers[level % placers.length], level });
        }
        return { screen: 'game', theme: 'sunset', reduced: true, Core, mp: { active: true, role: 'player', mode: 'teamwork', code: 'QA51' }, results: null, resultReveal: 1, arena: false, ballot: null,
          game: { multiplayer: true, mode: 'teamwork', roundNumber, phase: 'playing', stack: blocks, fallenPieces: [], moving: null, activeEffect: null, collapseStartLevel: null, vote: null, remotePlayers: [] } };
      };
      const host = window.SabotageStackHost;
      window.__teamworkView = makeView(1);
      host.view = () => window.__teamworkView;
      window.__setRound = round => { window.__teamworkView = makeView(round); };
      window.__stack3dNoRender = true;
    });
    await page.waitForFunction(() => window.__stack3d.mode === 'play' && (window.__stack3d.towers.play?.meshes.filter(Boolean).length || 0) === 25, null, { timeout: 30_000 });
    await page.waitForTimeout(250); // let the first real frame bake any deferred icons/typefaces before taking a baseline

    const readCounts = () => page.evaluate(() => {
      const stage = window.__stack3d; const renderer = stage.engine.renderer;
      stage.frame(stage.last + 16.7, { render: false }); // drive the reset/sync without drawing
      const auto = renderer.info.autoReset; renderer.info.autoReset = false; renderer.info.reset();
      stage.frame(stage.last + 16.7, { render: true });
      const memory = { textures: renderer.info.memory.textures, geometries: renderer.info.memory.geometries };
      renderer.info.autoReset = auto;
      const tower = stage.towers.play || Object.values(stage.towers)[0];
      return { ...memory, plaques: tower ? tower.plaqueCache.size : -1, mode: stage.mode };
    });

    await page.evaluate(() => window.__setRound(2)); // warm-up: one full reset cycle so icon/typeface textures have settled
    await page.waitForFunction(() => window.__stack3d.mode === 'play' && (window.__stack3d.towers.play?.meshes.filter(Boolean).length || 0) === 25);
    const baseline = await readCounts();
    expect(baseline.plaques).toBe(6);

    const samples = [baseline];
    for (const round of [3, 4, 5, 6]) {
      await page.evaluate(value => window.__setRound(value), round);
      await page.waitForFunction(() => window.__stack3d.mode === 'play' && (window.__stack3d.towers.play?.meshes.filter(Boolean).length || 0) === 25);
      samples.push(await readCounts());
    }
    for (const sample of samples) {
      expect(sample.plaques).toBe(6);
      expect(sample.textures).toBe(baseline.textures);
      expect(sample.geometries).toBe(baseline.geometries);
    }
    expect(await page.evaluate(() => window.cspViolations)).toEqual([]);
    expect(errors).toEqual([]);
  } finally { await context.close(); }
});
