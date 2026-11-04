'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const Core = require('../shared/game-core');
const { RoundEngine } = require('../server/round-engine');
const { boot } = require('./helpers/client-harness');

test('Earthquake tremor is deterministic, bounded, eased and disabled for reduced motion', () => {
  assert.deepEqual(Core.earthquakeOffset(0, 5), { x: 0, y: 0 });
  for (let i = 0; i <= 500; i++) {
    const t = i / 100;
    const offset = Core.earthquakeOffset(t, 5 - t);
    assert.ok(Math.abs(offset.x) <= 8 && Math.abs(offset.y) <= 3);
    assert.deepEqual(offset, Core.earthquakeOffset(t, 5 - t));
    assert.deepEqual(Core.earthquakeOffset(t, 5 - t, true), { x: 0, y: 0 });
  }
  const end = Core.earthquakeOffset(5, 0);
  assert.equal(Math.abs(end.x) + Math.abs(end.y), 0);
  assert.deepEqual(Core.earthquakeOffset(NaN, Infinity), { x: 0, y: 0 });
  assert.ok(Core.REDUCED_MOTION_EXCLUDED_IDS.includes('earthquake'));
  assert.equal(Core.SABOTAGE_CATEGORY_BY_ID.earthquake, 'trajectory');
});

for (const mode of ['teamwork', 'competitive']) {
  test(`${mode}: Earthquake enters the vote pool and lasts five seconds without changing blocks`, () => {
    const players = ['a', 'b'].map(id => ({ id, name: id, connected: true }));
    const engine = new RoundEngine({ mode, players, now: () => 10000, random: () => 0.5 });
    engine.start(1);
    assert.ok(engine.votePool().includes('earthquake'));
    const actor = mode === 'teamwork' ? engine.game.team : engine.game.competitors[0];
    const before = JSON.stringify(actor.stack);
    const effect = engine.addEffect('earthquake', 'a', 10000);
    assert.equal(effect.expiresAt, 15000);
    assert.equal(effect.duration, 5);
    assert.equal(JSON.stringify(actor.stack), before);
    players[0].reducedMotion = true;
    assert.ok(!engine.votePool().includes('earthquake'));
  });
}

test('Earthquake has a guide entry, icon and working DEV preview', async () => {
  const page = await boot(path.join(__dirname, '..', 'sabotage-stack.html'));
  try {
    assert.ok(page.window.SabotageStack.sabotages.some(s => s.id === 'earthquake'));
    assert.ok(page.document.getElementById('sabotage-symbol-earthquake'));
    assert.match(page.document.getElementById('sabotage-list').textContent, /Earthquake/);
    page.document.getElementById('dev-mode-button').click();
    await page.sleep(100);
    const button = page.document.querySelector('[data-dev-effect="earthquake"]');
    assert.ok(button);
    button.click();
    await page.sleep(300);
    assert.deepEqual(page.errors, []);
  } finally { page.close(); }
});
