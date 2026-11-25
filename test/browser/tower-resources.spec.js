'use strict';
// The real bundle, in a real WebGL2 context: a Teamwork round's name plaques share one texture per distinct name, and a
// round reset releases them, so texture memory does not grow with block count or repeated rounds. (The unit tests cover
// the caches' disposal; this checks the renderer's own allocation counter.)
const { test, expect } = require('@playwright/test');
const { createGameServer } = require('../../server');

let app; let origin;
test.beforeAll(async () => {
  app = createGameServer();
  await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
  origin = `http://127.0.0.1:${app.server.address().port}`;
});
test.afterAll(async () => { if (app) await app.close(); });

test('Teamwork plaques cost one texture per name, and repeated rounds return to the baseline', async ({ browser }) => {
  const context = await browser.newContext();
  const errors = [];
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  try {
    await page.goto(`${origin}/?tier=high&scale=0.5`);
    await expect(page.locator('#stage3d')).toBeAttached();
    await expect.poll(() => page.evaluate(() => Boolean(window.__stack3d && window.SabotageStackHost?.active))).toBe(true);

    const result = await page.evaluate(() => {
      const stage = window.__stack3d;
      const renderer = stage.engine.renderer;
      // Drive the Stage by hand so the renderer's counters cover exactly the frames we measure.
      window.__stack3dNoRender = true;
      const realFrame = stage.frame.bind(stage);
      stage.frame = () => {};
      let ts = stage.last || performance.now();
      const frame = () => { ts += 1000 / 30; realFrame(ts, { render: false }); };
      const baseView = stage.host.view();
      const Core = baseView.Core;
      const colors = ['#2F8478', '#E3A33B', '#D5472F', '#7FA6BD', '#7A6AA6', '#C96F8A'];
      const NAME_COUNT = 6;
      const BLOCK_COUNT = 100;
      const stack = round => {
        const blocks = [Core.makeBase()];
        for (let level = 1; level < BLOCK_COUNT; level += 1) {
          const width = 170 + ((round * 13 + level * 7) % 90);
          const left = (360 - width) / 2 + (((level + round) % 7) - 3) * 2;
          blocks.push({ left, right: left + width, width, level, color: colors[(level + round) % colors.length], perfect: false, placer: `Player${(level + round) % NAME_COUNT}` });
        }
        return blocks;
      };
      const view = {
        screen: 'game', theme: stage.theme, reduced: true,
        game: { multiplayer: true, mode: 'teamwork', roundNumber: 1, phase: 'playing', stack: stack(0), fallenPieces: [], moving: null, activeEffect: null },
        mp: { active: true, role: 'host', room: { players: [{ id: 'p0', name: 'Player0' }] }, playerId: null },
        results: null, resultReveal: 0, Core, ballot: null, arena: false
      };
      stage.host.view = () => view;
      for (let i = 0; i < 6; i += 1) frame();
      const tower = stage.getTower('play');
      tower.root.traverse(object => { object.frustumCulled = false; });
      renderer.info.autoReset = false;
      const draw = () => { renderer.info.reset(); stage.engine.render(1 / 60, stage.post || { spots: [] }); return renderer.info.memory; };
      draw(); // compile shaders and upload every plaque
      const withPlaques = { ...draw(), plaques: tower.plaques.size };
      tower.clear();
      const baseline = { ...draw() };
      const rounds = [];
      for (let round = 1; round <= 4; round += 1) {
        view.game.roundNumber = round + 1;
        view.game.stack = stack(round);
        for (let i = 0; i < 3; i += 1) frame();
        tower.root.traverse(object => { object.frustumCulled = false; });
        rounds.push({ ...draw(), plaques: tower.plaques.size });
      }
      tower.clear();
      const cleared = { ...draw() };
      // Leaving the room releases the round's plaques without waiting for the next round's sync.
      view.screen = 'hero';
      stage.enterMode('hero', view);
      stage.updateLeaving(1);
      const exited = { ...draw(), plaques: tower.plaques.size, blocks: tower.count };
      return { blocks: tower.count, withPlaques, baseline, rounds, cleared, exited };
    });

    expect(result.withPlaques.plaques).toBe(6);
    expect(result.withPlaques.textures).toBe(result.baseline.textures + 6);
    for (const round of result.rounds) {
      expect(round.plaques).toBe(6);
      expect(round.textures).toBe(result.baseline.textures + 6);
      expect(round.geometries).toBe(result.baseline.geometries);
    }
    expect(result.cleared.textures).toBe(result.baseline.textures);
    expect(result.cleared.geometries).toBe(result.baseline.geometries);
    expect(result.exited.plaques).toBe(0);
    expect(result.exited.blocks).toBe(0);
    expect(result.exited.textures).toBe(result.baseline.textures);
    expect(errors).toEqual([]);
  } finally {
    await context.close();
  }
});
