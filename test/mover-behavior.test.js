'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const Core = require('../shared/game-core');
const { RoundEngine } = require('../server/round-engine');
const { LegacyMotion, browserMotion } = require('./fixtures/legacy-mover');
const { rng } = require('./helpers/rng');
const copy = value => JSON.parse(JSON.stringify(value));
function actor() {
  return { stack: [Core.makeBase()], moving: { left: 171, width: 180, direction: 1, rollerPhase: .3 },
    drunkClock: .4, drunkHold: .625, drunkMode: 'stumble', drunkFrom: 1, drunkTarget: .35, drunkMultiplier: 1 };
}
function rig(proto, reduced, seed) {
  const r = Object.create(proto); r.random = rng(seed); r.motionReductionEnabled = () => reduced.value;
  r.effectFor = id => r.effect && r.effect.id === id ? r.effect : null;
  r.hasEffect = id => Boolean(r.effectFor(id)); r.effectElapsed = e => e.elapsed;
  return r;
}
const ids = ['', ...Core.SABOTAGE_IDS];
for (const id of ids) test(`server mover characterization: ${id || 'none'}`, () => {
  const reduced = { value: false }; const old = rig(LegacyMotion.prototype, reduced, 42);
  const current = rig(RoundEngine.prototype, reduced, 42); const a = actor(); const b = copy(a);
  for (let i = 0; i < 90; i++) {
    reduced.value = i >= 25 && i < 50;
    old.effect = current.effect = i < 70 && id ? { id, elapsed: i * .037 } : null;
    old.advanceOneMover(a, a.stack, null, .037, i); current.advanceOneMover(b, b.stack, null, .037, i);
    assert.deepEqual(b, a, `frame ${i}`);
  }
});
// This captures browser behavior before production is migrated; retain the oracle independently.
test('browser characterization preserves portal decoy wrapping and prediction drunk state', () => {
  const g = actor(); g.activeEffect = { id: 'portal', elapsed: 0 }; g.moving.left = 355;
  browserMotion(g, false, rng(1))(0.1);
  assert.ok(g.moving.left < 30);
  const p = actor(); p.activeEffect = { id: 'drunk', elapsed: 0 }; const before = p.drunkClock;
  browserMotion(p, false, rng(1), { predict: true })(.1);
  assert.equal(p.drunkClock, before);
});

const fs = require('node:fs');
const vm = require('node:vm');
const html = fs.readFileSync(require('node:path').join(__dirname, '..', 'sabotage-stack.html'), 'utf8');
function browserAdapter(g, reduced, random) {
  // Exercise the actual adapter from the shipped page without booting rendering/audio.
  const start = html.indexOf('    function moverEffects()');
  const end = html.indexOf('    function speedAtLanding(', start);
  const context = { Core, game: g, reducedMotion: reduced, Math: Object.assign(Object.create(Math), { random }) };
  vm.runInNewContext(`function heightOf(g) { return Math.max(0, g.stack.length - 1); }\n${html.slice(start, end)}\nglobalThis.step = stepLocalMover;`, context);
  return context.step;
}
for (const predict of [false, true]) for (const id of ids) test(`${predict ? 'prediction' : 'solo'} adapter matches legacy: ${id || 'none'}`, () => {
  const a = actor(); const b = copy(a); const oldRandom = rng(172); const newRandom = rng(172);
  const moving = b.moving;
  for (let i = 0; i < 65; i++) {
    const reduced = i >= 20 && i < 40;
    const effect = id ? { id, elapsed: i * .041 } : null;
    a.activeEffect = copy(effect); b.activeEffect = copy(effect);
    const move = !predict || i % 5 !== 0;
    browserMotion(a, reduced, oldRandom, { predict, move })(.041);
    const step = browserAdapter(b, reduced, newRandom);
    if (predict) {
      step(.041, { advanceDrunk: false, advance: false });
      if (move) step(.041, { prepare: false, advanceDrunk: false });
    } else step(.041);
    assert.deepEqual(copy(b), copy(a), `frame ${i}`);
    assert.equal(b.moving, moving, 'browser mover identity is retained');
  }
  assert.equal(newRandom(), oldRandom(), 'same random draws in the same order');
});

test('policies preserve the existing wrapped-decoy difference', () => {
  const a = actor(); a.moving.left = 350;
  a.moving.decoy = { left: 350, width: 40, direction: 1 };
  const b = copy(a);
  const effects = { double: { elapsed: 0 }, portal: { elapsed: 0 } };
  for (const [g, policy] of [[a, Core.MOVER_POLICIES.authoritative], [b, Core.MOVER_POLICIES.local]]) {
    Core.stepMoverBehavior(g, g.stack[0], 0, { dt: .1, effects, reduced: false, random: rng(1), policy });
  }
  assert.notEqual(a.moving.decoy.left, b.moving.decoy.left);
  assert.equal(a.moving.decoy.direction, -1);
  assert.equal(b.moving.decoy.direction, 1);
});

test('identical eligible inputs produce server/solo/prediction position parity', () => {
  for (const id of ['', 'turbo', 'slowmo', 'magnet', 'portal', 'calipers', 'rollercoaster']) {
    const reduced = { value: false }; const server = rig(RoundEngine.prototype, reduced, 42);
    const a = actor(); const b = copy(a); const c = copy(a);
    for (let i = 0; i < 50; i++) {
      const effect = id ? { id, elapsed: i * .02 } : null;
      server.effect = effect; b.activeEffect = copy(effect); c.activeEffect = copy(effect);
      server.advanceOneMover(a, a.stack, null, .02, i);
      browserAdapter(b, false, rng(1))(.02);
      const step = browserAdapter(c, false, rng(1));
      step(.02, { advanceDrunk: false, advance: false });
      step(.02, { prepare: false, advanceDrunk: false });
      assert.equal(b.moving.left, a.moving.left, `${id}: solo frame ${i}`);
      assert.equal(c.moving.left, a.moving.left, `${id}: prediction frame ${i}`);
    }
  }
});

for (const predict of [false, true]) test(`${predict ? 'prediction' : 'solo'} preserves effect replacement and expiry`, () => {
  const a = actor(); const b = copy(a); const oldRandom = rng(77); const newRandom = rng(77);
  let previous = null;
  const sequence = ['accordion', 'portal', 'double', 'drunk', 'calipers', 'magnet', 'rollercoaster', ''];
  for (const id of sequence) {
    if (previous) {
      browserMotion(a, false, oldRandom).finish(previous);
      Core.finishMoverBehavior(b, b.stack[0], previous.id, Core.MOVER_POLICIES.local);
      assert.deepEqual(copy(b), copy(a), `finish ${previous.id}`);
    }
    for (let i = 0; i < 20; i++) {
      previous = id ? { id, elapsed: i * .1 } : null;
      a.activeEffect = copy(previous); b.activeEffect = copy(previous);
      browserMotion(a, i < 5, oldRandom, { predict })(.1);
      const step = browserAdapter(b, i < 5, newRandom);
      if (predict) {
        step(.1, { advanceDrunk: false, advance: false });
        step(.1, { prepare: false, advanceDrunk: false });
      } else step(.1);
      assert.deepEqual(copy(b), copy(a), `${id} frame ${i}`);
    }
  }
  assert.equal(newRandom(), oldRandom());
});

test('geometry-only preparation never moves, consumes randomness, or removes a decoy', () => {
  const g = actor(); g.moving.decoy = Core.createShellDecoy(g.moving);
  const before = copy(g);
  Core.stepMoverBehavior(g, g.stack[0], 0, {
    dt: .1, effects: { drunk: { elapsed: 0 } }, reduced: false,
    random() { throw new Error('prediction must not draw random samples'); },
    policy: Core.MOVER_POLICIES.local, advanceDrunk: false, advance: false
  });
  assert.deepEqual(g, before);
});

test('solo drunk state still advances during a mover-less interval', () => {
  const a = actor(); a.moving = null; a.activeEffect = { id: 'drunk', elapsed: 0 };
  const b = copy(a);
  browserMotion(a, false, rng(2))(.3);
  browserAdapter(b, false, rng(2))(.3);
  assert.deepEqual(copy(b), copy(a));
});

test('authoritative adapter ignores nonpositive time and missing mover', () => {
  const r = rig(RoundEngine.prototype, { value: false }, 1); r.effect = { id: 'drunk', elapsed: 0 };
  const g = actor(); const before = copy(g);
  assert.equal(r.advanceOneMover(g, g.stack, null, 0, 0), false);
  assert.equal(r.advanceOneMover(g, g.stack, null, -.1, 0), false);
  assert.deepEqual(g, before);
  g.moving = null;
  assert.equal(r.advanceOneMover(g, g.stack, null, .1, 0), false);
});
