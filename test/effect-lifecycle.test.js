'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const Core = require('../shared/game-core');
const { RoundEngine } = require('../server/round-engine');
const { LegacyEffects, LEGACY_SOLO_SOURCE } = require('./fixtures/legacy-effects');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const html = fs.readFileSync(path.join(__dirname, '..', 'sabotage-stack.html'), 'utf8');
const { rng } = require('./helpers/rng');
const copy = value => JSON.parse(JSON.stringify(value));
const { teamwork, competitive } = Core.EFFECT_POLICIES;

function actor(playerId) {
  return {
    ...(playerId ? { playerId } : { currentPlayerId: 'a' }),
    moving: { left: 100, width: 120, direction: 1, level: 1 },
    drunkClock: 0, drunkHold: 0.625, drunkMode: 'stumble', drunkFrom: 1, drunkTarget: 0.35, drunkMultiplier: 1
  };
}
function rig(proto, mode, seed) {
  const r = Object.create(proto);
  r.mode = mode;
  r.random = rng(seed);
  r.now = () => 0;
  r.events = [];
  r.onEvent = (type, payload) => r.events.push([type, payload]);
  r.game = {
    activeEffects: [],
    team: mode === 'teamwork' ? actor(null) : null,
    competitors: mode === 'competitive' ? [actor('a'), actor('b')] : null
  };
  return r;
}

for (const mode of ['teamwork', 'competitive']) for (const seed of [3, 17, 91]) {
  test(`RoundEngine Effects match the frozen oracle: ${mode} seed ${seed}`, () => {
    const legacy = rig(LegacyEffects.prototype, mode, seed);
    const current = rig(RoundEngine.prototype, mode, seed);
    const script = rng(seed * 7 + 1);
    const pick = list => list[Math.floor(script() * list.length)];
    const ids = [...Core.SABOTAGE_IDS, 'unknown'];
    const players = [null, 'a', 'b'];
    let t = 1000;
    for (let step = 0; step < 400; step++) {
      t += Math.floor(script() * 5000);
      const op = pick(['activate', 'land', 'land', 'expire', 'shift']);
      if (op === 'activate') {
        const id = pick(ids);
        const target = pick(players);
        legacy.addEffect(id, target, t);
        const effect = current.addEffect(id, target, t);
        if (effect) assert.ok(current.game.activeEffects.includes(effect), 'the returned Effect is the stored record');
      } else if (op === 'land') {
        const player = pick(players);
        legacy.consumeDropEffects(player, t);
        current.consumeDropEffects(player, t);
      } else if (op === 'expire') {
        const changed = legacy.expireEffects(t);
        const result = Core.expireEffects(current.game.activeEffects, t);
        current.game.activeEffects = result.effects;
        assert.equal(result.ended.length > 0, changed, `step ${step}: expiry change`);
      } else {
        const shift = Math.floor(script() * 4000);
        legacy.shiftEffects(shift);
        current.game.activeEffects = Core.shiftEffects(current.game.activeEffects, shift).effects;
      }
      assert.deepEqual(copy(current.game), copy(legacy.game), `step ${step}: ${op}`);
      assert.deepEqual(current.events, legacy.events, `step ${step}: events`);
      assert.deepEqual(Core.effectsToWire(current.game.activeEffects, t), legacy.wireEffects(t), `step ${step}: wire`);
      for (const id of Core.SABOTAGE_IDS) for (const player of players) for (const at of [t - 500, t, t + 6000]) {
        assert.deepEqual(current.effectFor(id, player, at), legacy.effectFor(id, player, at), `step ${step}: ${id}/${player}@${at}`);
      }
    }
    assert.equal(current.random(), legacy.random(), 'same random draws in the same order');
  });
}

for (const [name, policy] of Object.entries(Core.EFFECT_POLICIES)) for (const id of Core.SABOTAGE_IDS) {
  test(`activate ${id} under the ${name} policy`, () => {
    const dropCounted = Core.DROP_COUNTED_IDS.includes(id);
    const timed = !policy.untilDrop && policy.timed !== false;
    const { effects, effect, ended } = Core.activateEffect([], id, { targetPlayerId: 'a', now: 1000, random: () => 0.7, policy });
    assert.deepEqual(effects, [effect]);
    assert.deepEqual(ended, []);
    assert.equal(effect.duration, policy.duration || (dropCounted ? Core.DROP_EFFECT_SECONDS : Core.EFFECT_SECONDS));
    assert.equal(effect.untilDrop, policy.untilDrop ? true : undefined);
    assert.equal(effect.expiresAt, timed ? 1000 + effect.duration * 1000 : undefined);
    assert.equal(effect.dropsRemaining, dropCounted ? Core.EFFECT_DROP_BUDGET : undefined);
    assert.equal(effect.tiltDirection, id === 'pisa' ? 1 : undefined);
    assert.equal(effect.spotlightSide, id === 'spotlight' ? 1 : undefined);
    assert.equal(Core.effectFor(effects, id, 'a', 1000), effect);
    assert.equal(Core.effectFor(effects, id, 'b', 1000), null, 'applies only to its target');
    assert.equal(Core.effectFor(effects, id, 'a', 999), null, 'not before it starts');
    const later = 1000 + effect.duration * 1000;
    assert.equal(Boolean(Core.effectFor(effects, id, 'a', later)), !timed, 'timed Effects end at their expiry');

    let list = effects;
    const spent = policy.untilDrop || (dropCounted && timed);
    const landings = spent && dropCounted ? Core.EFFECT_DROP_BUDGET : 1;
    for (let n = 1; n <= landings; n++) {
      const landed = Core.landEffects(list, 'a', 1500, policy);
      list = landed.effects;
      const finished = spent && n === landings;
      assert.equal(landed.ended.length, finished ? 1 : 0, `landing ${n}`);
      if (!finished && spent && dropCounted) assert.equal(list[0].dropsRemaining, Core.EFFECT_DROP_BUDGET - n);
      if (!spent) assert.equal(list[0], effect, 'a landing does not spend this Effect');
    }
    assert.deepEqual(Core.landEffects(effects, 'b', 1500, policy).effects, effects, "another player's landing leaves it alone");
  });
}

test('an unknown sabotage produces no Effect', () => {
  const effects = [];
  assert.deepEqual(Core.activateEffect(effects, 'gale', { now: 0, random: Math.random, policy: competitive }), { effects, effect: null, ended: [] });
});

test('replacement follows the policy and reports what ended', () => {
  const at = (list, id, targetPlayerId, policy) => Core.activateEffect(list, id, { targetPlayerId, now: 0, random: () => 0, policy });
  let list = at([], 'turbo', 'a', competitive).effects;
  list = at(list, 'portal', 'b', competitive).effects;
  const sameTarget = at(list, 'drunk', 'a', competitive);
  assert.deepEqual(sameTarget.ended.map(e => e.id), ['turbo']);
  assert.deepEqual(sameTarget.effects.map(e => e.id), ['portal', 'drunk']);
  const stackWide = at(sameTarget.effects, 'crumble', null, competitive);
  assert.deepEqual(stackWide.ended.map(e => e.id), ['portal', 'drunk']);
  const team = at(at([], 'turbo', 'a', teamwork).effects, 'zoom', 'b', teamwork);
  assert.deepEqual(team.ended.map(e => e.id), ['turbo']);
  assert.deepEqual(team.effects.map(e => e.id), ['zoom']);
});

test('a timed drop-counted Effect spends no drop after it expires', () => {
  const { effects } = Core.activateEffect([], 'portal', { targetPlayerId: 'a', now: 0, random: Math.random, policy: competitive });
  const late = Core.landEffects(effects, 'a', 8000, competitive);
  assert.deepEqual(late, { effects, ended: [] });
});

test('operations never mutate the list they are given', () => {
  const { effects } = Core.activateEffect([], 'portal', { targetPlayerId: 'a', now: 0, random: Math.random, policy: competitive });
  const before = copy(effects);
  Core.landEffects(effects, 'a', 100, competitive);
  Core.shiftEffects(effects, 2000);
  Core.expireEffects(effects, 9000);
  Core.activateEffect(effects, 'turbo', { targetPlayerId: 'a', now: 0, random: Math.random, policy: competitive });
  assert.deepEqual(effects, before);
});

test('a pause shift delays timed expiry and leaves until-drop Effects alone', () => {
  const timed = Core.activateEffect([], 'turbo', { targetPlayerId: 'a', now: 0, random: Math.random, policy: competitive }).effects;
  const shifted = Core.shiftEffects(timed, 3000).effects;
  assert.equal(Core.expireEffects(shifted, 7000).effects.length, 1);
  assert.equal(Core.expireEffects(shifted, 8000).effects.length, 0);
  const team = Core.activateEffect([], 'turbo', { targetPlayerId: 'a', now: 0, random: Math.random, policy: teamwork }).effects;
  assert.equal(Core.shiftEffects(team, 3000).effects[0], team[0]);
});

test('the wire keeps until-drop Effects open at their nominal duration', () => {
  const team = Core.activateEffect([], 'calipers', { targetPlayerId: 'a', now: 0, random: Math.random, policy: teamwork }).effects;
  assert.deepEqual(Core.effectsToWire(team, 20000), [{
    id: 'calipers', targetPlayerId: 'a', duration: 8, elapsed: 20, remaining: 8, untilDrop: true, dropsRemaining: 3
  }]);
  const timed = Core.activateEffect([], 'pisa', { targetPlayerId: 'a', now: 0, random: () => 0.2, policy: competitive }).effects;
  assert.deepEqual(Core.effectsToWire(timed, 2000), [{
    id: 'pisa', targetPlayerId: 'a', duration: 5, elapsed: 2, remaining: 3, tiltDirection: -1
  }]);
});

// The solo adapter block from the shipped page, driven through the same call sites as the page.
function pageSlice(startMarker, endMarker) {
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker, start);
  assert.ok(start >= 0 && end > start, `page markers ${startMarker} … ${endMarker}`);
  return html.slice(start, end);
}
const SOLO_CALL_SITES = `
function soloVoteWinner(id) { for (const replaced of activateSabotage(id)) announceEffectEnd(replaced.id); }
function soloLanding() { landSoloEffects(); }
function soloFrame(dt) { game.elapsed += dt; advanceSoloEffects(); }
function soloCollapse() { clearSoloEffects(); }
`;
test('the page calls the solo adapter where the call-site harness assumes', () => {
  assert.ok(html.includes('for (const replaced of activateSabotage(outcome.winner)) announceEffectEnd(replaced.id);'));
  assert.ok(html.includes('landSoloEffects();\n      game.stack.push(outcome.placed);'));
  assert.match(html, /game\.elapsed \+= dt;\n(.*\n){3}      advanceSoloEffects\(\);/);
  assert.equal(html.match(/clearSoloEffects\(\);/g).length, 2, 'collapse and results clear solo Effects');
});

function soloGame(devMode) {
  return {
    devMode, elapsed: 0, effects: [], activeEffect: null, statusMessage: '', toastText: '', toastTime: 0,
    stack: [Core.makeBase()], moving: { left: 100, width: 120, direction: 1, level: 1, color: '#E3A33B' },
    drunkClock: 0, drunkHold: 0.625, drunkMode: 'stumble', drunkFrom: 1, drunkTarget: 0.35, drunkMultiplier: 1
  };
}
function soloRig(source, devMode, seed) {
  const announced = [];
  const context = {
    Core, game: soloGame(devMode), multiplayer: { active: false },
    Math: Object.assign(Object.create(Math), { random: rng(seed) }),
    effectById: id => ({ id, name: id.toUpperCase(), caption: `${id} caption` }),
    announceEffectEnd: id => announced.push(id),
    syncHud() {}
  };
  vm.runInNewContext(source, context);
  return { context, announced };
}
function soloState(game) {
  const { effects: _effects, ...state } = copy(game);
  if (state.activeEffect) delete state.activeEffect.targetPlayerId;
  return state;
}
for (const devMode of [false, true]) for (const seed of [5, 23, 64]) {
  test(`solo adapter matches the frozen page oracle: ${devMode ? 'dev' : 'solo'} seed ${seed}`, () => {
    const legacy = soloRig(LEGACY_SOLO_SOURCE, devMode, seed);
    const current = soloRig(pageSlice('    // Solo Effects live in', '    function resolveVote() {') + SOLO_CALL_SITES, devMode, seed);
    const script = rng(seed * 3 + 2);
    const pick = list => list[Math.floor(script() * list.length)];
    const seen = new Set();
    for (let step = 0; step < 2500; step++) {
      // Dyadic frame times keep both clocks exact, so the comparison needs no tolerance.
      const roll = script();
      const op = step % 397 === 396 ? 'collapse' : roll < 0.03 ? 'vote' : roll < 0.1 ? 'land' : 'frame';
      const dt = pick([1 / 16, 1 / 8, 3 / 16, 1 / 4]);
      const id = pick(Core.SABOTAGE_IDS);
      for (const { context: run } of [legacy, current]) {
        if (op === 'frame') run.soloFrame(dt);
        else if (op === 'vote') run.soloVoteWinner(id);
        else if (op === 'land') run.soloLanding();
        else run.soloCollapse();
      }
      assert.deepEqual(soloState(current.context.game), soloState(legacy.context.game), `step ${step}: ${op}`);
      assert.deepEqual(current.announced, legacy.announced, `step ${step}: announcements`);
      seen.add(legacy.context.game.statusMessage.replace(/^[A-Z]+ /, ''));
    }
    if (!devMode) for (const status of ['Sabotage over. For now.', 'used its final drop.']) assert.ok(seen.has(status), `the script reaches: ${status}`);
    assert.equal(current.context.Math.random(), legacy.context.Math.random(), 'same random draws in the same order');
  });
}

test('Dev sandbox Effects draw no random directions', () => {
  const random = () => { throw new Error('dev directions are fixed'); };
  for (const id of ['pisa', 'spotlight']) {
    const { effect } = Core.activateEffect([], id, { now: 0, random, policy: Core.EFFECT_POLICIES.dev });
    assert.equal(effect.tiltDirection ?? effect.spotlightSide, 1);
  }
});

const { LEGACY_ROOM_SOURCE } = require('./fixtures/legacy-effects');
const ROOM_HARNESS = `
function finishMoverEffect(effect) {
  if (!game || !game.moving || !effect) return;
  Core.finishMoverBehavior(game, game.stack[game.stack.length - 1], effect.id, Core.MOVER_POLICIES.local);
}
function receive(remote) {
  const view = { elapsed: remote.elapsed || 0, stack: [Core.makeBase()], moving: JSON.parse(JSON.stringify(remote.moving)) };
  const effectKey = roomEffectsOnReceive(remote, view);
  game = view;
  if (effectKey && effectKey !== multiplayer.lastEffectKey) game.toastText = effectKey;
  multiplayer.lastEffectKey = effectKey;
}
function frame(dt) { game.elapsed += dt; roomEffectsOnFrame(dt); }
`;
const ROOM_CALL_SITES = `
function roomEffectsOnReceive(remote, view) {
  const roomEffects = receiveRoomEffects(remote);
  const { observed } = roomEffects;
  const effectKey = observed ? \`\${observed.id}:\${observed.targetPlayerId || 'all'}\` : '';
  view.pendingEffect = roomEffects.pendingEffect;
  adoptRoomEffects(view, roomEffects.effects, roomEffects.active);
  return effectKey;
}
function roomEffectsOnFrame() { advanceRoomEffects(); }
`;
test('the page calls the room Effect adapter where the call-site harness assumes', () => {
  assert.ok(html.includes('const roomEffects = receiveRoomEffects(remote);\n      const { effects, observed } = roomEffects;'));
  assert.ok(html.includes('const effectKey = observed ? `${observed.id}:${observed.targetPlayerId || \'all\'}` : \'\';'));
  assert.ok(html.includes('pendingEffect: roomEffects.pendingEffect,'));
  assert.ok(html.includes('};\n      adoptRoomEffects(view, effects, roomEffects.active);'));
  assert.match(html, /game\.vote\.remaining - dt\);\n      advanceRoomEffects\(\);/);
});

function approxEqual(actual, expected, where) {
  if (typeof expected === 'number' && typeof actual === 'number') {
    assert.ok(Math.abs(actual - expected) <= 1e-9 * Math.max(1, Math.abs(expected)), `${where}: ${actual} vs ${expected}`);
  } else if (expected && typeof expected === 'object') {
    assert.ok(actual && typeof actual === 'object', `${where}: expected an object`);
    assert.deepEqual(Object.keys(actual).sort(), Object.keys(expected).sort(), `${where}: keys`);
    for (const key of Object.keys(expected)) approxEqual(actual[key], expected[key], `${where}.${key}`);
  } else assert.equal(actual, expected, where);
}
function roomRig(source, role, playerId) {
  const context = { Core, game: null, multiplayer: { role, playerId, lastEffectKey: '' } };
  vm.runInNewContext(source + ROOM_HARNESS, context);
  return context;
}
for (const mode of ['teamwork', 'competitive']) for (const [role, playerId] of [['host', null], ['player', 'a'], ['spectator', null]]) for (const seed of [1, 2, 3]) {
  test(`multiplayer view Effects match the frozen page oracle: ${mode} ${role} seed ${seed}`, () => {
    const legacy = roomRig(LEGACY_ROOM_SOURCE, role, playerId);
    const current = roomRig(pageSlice('    // Room Effects arrive in wire shape', '    function applyMultiplayerGame(remote) {') + ROOM_CALL_SITES, role, playerId);
    const script = rng(mode.length * 31 + role.length * 7 + seed);
    const pick = list => list[Math.floor(script() * list.length)];
    const policy = Core.EFFECT_POLICIES[mode];
    const moving = { left: 120, width: 90, direction: 1, level: 1, accordion: true, accordionPhase: 0.2, portalWrap: true, decoy: { left: 150, width: 90, direction: -1 } };
    let server = [];
    let serverTime = 0;
    let currentPlayerId = 'a';
    let finishes = 0;
    for (let step = 0; step < 4000; step++) {
      const roll = script();
      if (roll < 0.015) {
        server = Core.activateEffect(server, pick(Core.SABOTAGE_IDS), { targetPlayerId: pick([null, 'a', 'b']), now: serverTime, random: script, policy }).effects;
      } else if (roll < 0.03) {
        server = Core.landEffects(server, pick(['a', 'b']), serverTime, policy).effects;
      } else if (roll < 0.04) {
        currentPlayerId = pick(['a', 'b', null]);
      } else if (roll < 0.08) {
        if (script() < 0.5) server = Core.expireEffects(server, serverTime).effects;
        const remote = { mode, elapsed: serverTime / 1000, activeEffects: Core.effectsToWire(server, serverTime), moving,
          ...(mode === 'teamwork' ? { team: { currentPlayerId } } : {}) };
        legacy.receive(copy(remote));
        current.receive(copy(remote));
      } else if (legacy.game) {
        // Dyadic frame and server times keep both representations exact at expiry boundaries.
        const dt = pick([1 / 64, 1 / 32, 3 / 64, 1 / 8]);
        serverTime += dt * 1000;
        const hadActive = Boolean(legacy.game.activeEffect);
        legacy.frame(dt);
        current.frame(dt);
        if (hadActive && !legacy.game.activeEffect) finishes += 1;
      } else serverTime += 62.5;
      if (!legacy.game) continue;
      for (const field of ['activeEffect', 'pendingEffect', 'remoteEffects', 'moving', 'toastText']) {
        approxEqual(copy(current.game[field] ?? null), copy(legacy.game[field] ?? null), `step ${step}: ${field}`);
      }
      assert.equal(current.multiplayer.lastEffectKey, legacy.multiplayer.lastEffectKey, `step ${step}: lastEffectKey`);
    }
    if (mode === 'competitive') assert.ok(finishes > 0, 'the script reaches a locally expired active Effect');
  });
}

test('wire conversion round-trips on the receiver clock', () => {
  let list = Core.activateEffect([], 'portal', { targetPlayerId: 'a', now: 1000, random: Math.random, policy: Core.EFFECT_POLICIES.competitive }).effects;
  list = Core.activateEffect(list, 'pisa', { targetPlayerId: 'b', now: 2500, random: () => 0.9, policy: Core.EFFECT_POLICIES.competitive }).effects;
  const wire = Core.effectsToWire(list, 4000);
  const received = Core.effectsFromWire(copy(wire), 70000);
  approxEqual(Core.effectsToWire(received, 70000), wire, 'same wire at receipt');
  approxEqual(Core.effectsToWire(received, 71000), Core.effectsToWire(list, 5000), 'same countdown one second later');
  assert.deepEqual(Core.expireEffects(received, 74000).effects.map(e => e.id), ['portal']);
  const team = Core.activateEffect([], 'calipers', { targetPlayerId: 'a', now: 0, random: Math.random, policy: Core.EFFECT_POLICIES.teamwork }).effects;
  const untimed = Core.effectsFromWire(Core.effectsToWire(team, 30000), 500);
  assert.equal(untimed[0].expiresAt, undefined);
  assert.equal(untimed[0].untilDrop, true);
  assert.deepEqual(Core.effectsFromWire(undefined, 0), []);
});
