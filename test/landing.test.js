'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const Core = require('../shared/game-core');
const { RoundEngine } = require('../server/round-engine');
const { LegacyCore, LegacyServerLanding, LEGACY_PAGE_LANDING_SOURCE } = require('./fixtures/legacy-landing');
const { rng } = require('./helpers/rng');
const html = fs.readFileSync(path.join(__dirname, '..', 'sabotage-stack.html'), 'utf8');
const copy = value => JSON.parse(JSON.stringify(value));
const IDS = Core.SABOTAGE_IDS;

function pageSlice(startMarker, endMarker) {
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker, start);
  assert.ok(start >= 0 && end > start, `page markers ${startMarker} … ${endMarker}`);
  return html.slice(start, end);
}

// ---- RoundEngine: every drop and every spawn is checked against the frozen server code.

function engineRig(mode, seed) {
  const clock = { t: 10_000_000 };
  const players = ['a', 'b', 'c'].map((id, i) => ({ id, name: `P${i}`, color: Core.PALETTE[i + 1], connected: true }));
  const engine = new RoundEngine({ mode, players, now: () => clock.t, random: rng(seed) });
  engine.start(1);
  return { engine, clock, players };
}
// The spawn branch in startTeamTurn is followed by reconciliation that leaves a fresh Mover as spawned.
function legacySpawn(engine, stack, fromLeft, player, now) {
  return LegacyServerLanding.spawn.call(engine, stack, fromLeft, player.color, player.id, now);
}

for (const mode of ['teamwork', 'competitive']) for (const seed of [4, 29, 77]) {
  test(`RoundEngine landings and spawns match the frozen oracle: ${mode} seed ${seed}`, () => {
    const script = rng(seed * 13 + mode.length);
    const pick = list => list[Math.floor(script() * list.length)];
    let rig = engineRig(mode, seed);
    const seen = { drops: 0, spawns: 0, railed: 0, portal: 0, accordion: 0, reduced: 0 };
    for (let step = 0; step < 3000; step++) {
      const { engine, clock } = rig;
      if (engine.game.phase !== 'playing') { rig = engineRig(mode, seed + step); continue; }
      const roll = script();
      if (roll < 0.12) {
        const id = pick([...IDS, 'accordion', 'accordion', 'portal', 'calipers', 'double']);
        // Teamwork Effects end on the affected landing; a fresh Mover meets one queued by a vote for the next turn.
        if (mode === 'teamwork' && script() < 0.5) engine.game.teamSabotageQueue.push(id);
        else engine.addEffect(id, pick([null, 'a', 'b', 'c']), clock.t);
      } else if (roll < 0.15) {
        engine.motionPrefersReduced = script() < 0.5;
      } else if (roll < 0.5) {
        const actor = mode === 'teamwork' ? engine.game.team : engine.game.competitors.find(item => !item.ended && !item.collapsed);
        const playerId = mode === 'teamwork' ? actor && actor.currentPlayerId : actor && actor.playerId;
        if (!actor || !actor.moving || !playerId || (mode === 'teamwork' && (!actor.turnActive || engine.game.vote))) { clock.t += 125; engine.tick(clock.t); continue; }
        const player = engine.player(playerId);
        const tolerance = engine.positionTolerance(actor.stack, actor, playerId, clock.t);
        const maxLeft = Core.WIDTH - actor.moving.width;
        const reported = actor.moving.left + (script() - 0.5) * 1.8 * tolerance;
        const x = actor.moving.portalWrap ? ((reported % Core.WIDTH) + Core.WIDTH) % Core.WIDTH : Math.max(0, Math.min(maxLeft, reported));
        const before = copy(actor);
        const expected = LegacyServerLanding.land.call(engine, actor, actor.stack, playerId, x, player, clock.t);
        const bounds = Core.caliperBounds(actor.stack[actor.stack.length - 1], actor.moving);
        if (engine.hasEffect('calipers', playerId, clock.t) && (x < bounds.minLeft || x > bounds.maxLeft)) seen.railed += 1;
        if (engine.hasEffect('portal', playerId, clock.t) && x + actor.moving.width > Core.WIDTH) seen.portal += 1;
        const result = engine.drop(playerId, { x, requestId: `r${step}`, ...(mode === 'teamwork' ? { turnId: actor.turnId } : {}) });
        // Positions near a Portal edge can fall outside the sync tolerance; a rejected drop changes nothing.
        if (!result.ok && result.code === 'DROP_POSITION_OUT_OF_SYNC') { assert.deepEqual(copy(actor), before); continue; }
        assert.ok(result.ok, `step ${step}: drop accepted (${result.code})`);
        seen.drops += 1;
        assert.equal(result.authoritativeX, expected.authoritativeX, `step ${step}: authoritativeX`);
        if (expected.outcome.status === 'placed') assert.deepEqual(result.outcome, expected.outcome, `step ${step}: outcome`);
        else assert.equal(Boolean(result.collapsed), true, `step ${step}: a miss collapses`);
        if (expected.outcome.status !== 'placed' || !actor.moving) continue;
        // A fresh Mover: Competitive spawns at once; Teamwork when the next turn starts without a vote.
        const nextId = mode === 'teamwork' ? actor.currentPlayerId : playerId;
        if (!nextId) continue;
        const fromLeft = mode === 'teamwork' ? !actor.nextSpawnFromLeft : before.nextSpawnFromLeft;
        assert.deepEqual(actor.moving, legacySpawn(engine, actor.stack, fromLeft, engine.player(nextId), clock.t), `step ${step}: spawned Mover`);
        seen.spawns += 1;
        if (actor.moving.accordion) seen[actor.moving.accordionReduced ? 'reduced' : 'accordion'] += 1;
      } else {
        clock.t += pick([1000 / 64, 1000 / 32, 125, 250]);
        engine.tick(clock.t);
      }
    }
    for (const [what, count] of Object.entries(seen)) assert.ok(count > 0, `the script reaches ${what}`);
  });
}

test('every Competitive Mover starts like the frozen oracle', () => {
  const { engine, clock } = engineRig('competitive', 5);
  for (const competitor of engine.game.competitors) {
    const player = engine.player(competitor.playerId);
    assert.deepEqual(competitor.moving, LegacyServerLanding.makeMover.call(engine, [{ ...Core.makeBase(), color: player.color }], true, player.color, false, clock.t));
  }
});

// ---- Solo page: completeDrop and spawnMovingBlock from the shipped page against the frozen page code.

const PAGE_MOVER = pageSlice('    function moverEffects() {', '    function speedAtLanding(');
const CURRENT_PAGE = PAGE_MOVER + pageSlice('    function speedAtLanding(', '    function updateMultiplayerView(dt) {')
  + pageSlice('    function spawnMovingBlock() {', '    function weightChatVote(')
  + pageSlice('    function completeDrop() {', '    function startCollapse() {');
const LEGACY_PAGE = PAGE_MOVER + LEGACY_PAGE_LANDING_SOURCE;

function pageRig(source, core) {
  const record = [];
  const context = {
    Core: core, WIDTH: Core.WIDTH, PALETTE: Core.PALETTE, ROASTS: ['r0', 'r1', 'r2'],
    game: null, reducedMotion: false, sessionBest: 0, devSelectedId: 'normal', elements: { devFeedback: { textContent: '' } },
    Math: Object.assign(Object.create(Math), { random: () => { throw new Error('a Landing draws no random numbers'); } }),
    effectActive: id => Boolean(context.game && context.game.activeEffect && context.game.activeEffect.id === id),
    effectById: id => ({ id, name: id.toUpperCase() }),
    heightOf: g => Math.max(0, g.stack.length - 1),
    playCue: cue => record.push(['cue', cue]),
    announceGame: text => record.push(['announce', text]),
    spawnFallingPiece: (piece, kind) => record.push(['piece', piece, kind]),
    showChatFlavor: text => record.push(['flavor', text]),
    landSoloEffects: () => record.push(['land']),
    startCollapse: () => { context.game.phase = 'collapse'; record.push(['collapse']); },
    syncHud() {}, updateBestLabels() {}
  };
  vm.runInNewContext(source, context);
  return { context, record };
}
function soloStack(script, height) {
  const stack = [Core.makeBase()];
  for (let level = 1; level <= height; level++) {
    const width = Core.MIN_WIDTH + script() * 180;
    const left = script() * (Core.WIDTH - width);
    stack.push({ left, right: left + width, width, color: Core.PALETTE[level % 4], perfect: false, placer: 'You', level });
  }
  return stack;
}
// The two agreed differences, applied to the frozen page's input and output.
function railed(game) {
  if (!game.activeEffect || game.activeEffect.id !== 'calipers' || !game.moving) return false;
  const bounds = Core.caliperBounds(game.stack[game.stack.length - 1], game.moving);
  const left = Math.max(bounds.minLeft, Math.min(bounds.maxLeft, game.moving.left));
  if (left === game.moving.left) return false;
  game.moving.left = left;
  return true;
}
function spawnShape(moving) {
  if (!moving) return moving;
  const shaped = copy(moving);
  if (shaped.accordionReduced === false) delete shaped.accordionReduced;
  if (shaped.accordionReduced) {
    delete shaped.accordionPhase;
    // The page recentred a reduced Mover through resizeMover, which can round its spawn position by an ulp.
    const spawnLeft = shaped.fromLeft ? 0 : Core.WIDTH - shaped.width;
    if (Math.abs(shaped.left - spawnLeft) < 1e-9) shaped.left = spawnLeft;
  }
  return shaped;
}

test('the page calls resolveLanding and spawnMover where the harness assumes', () => {
  assert.ok(html.includes("const { outcome } = Core.resolveLanding(game.stack[level - 1], game.moving, {\n        speed: speedAtLanding(), effects: moverEffects(), level, color: game.moving.color, placer: 'You'"));
  assert.ok(html.includes('game.moving = Core.spawnMover(game.stack, {'));
  assert.ok(!/Core\.(landingMover|dropDrift)\b/.test(html), 'no caller uses the deleted drift helpers');
});

for (const seed of [8, 31, 90]) {
  test(`solo landings and spawns match the frozen page oracle: seed ${seed}`, () => {
    const legacy = pageRig(LEGACY_PAGE, LegacyCore);
    const current = pageRig(CURRENT_PAGE, Core);
    const script = rng(seed);
    const seen = { placed: 0, miss: 0, perfect: 0, railed: 0, portal: 0, accordion: 0, reduced: 0, dev: 0 };
    for (let step = 0; step < 2500; step++) {
      const stack = soloStack(script, 1 + Math.floor(script() * 8));
      const devMode = script() < 0.1;
      const reduced = script() < 0.25;
      const id = script() < 0.15 ? null : IDS[Math.floor(script() * IDS.length)];
      const effect = id ? { id, elapsed: script() * 6, remaining: 2, duration: 5, ...(script() < 0.5 ? { dropsRemaining: 2 } : {}) } : null;
      const game = {
        phase: 'playing', devMode, stack, fallenPieces: [], activeEffect: effect, nextSpawnFromLeft: script() < 0.5,
        perfects: 0, score: 0, statusMessage: '', flavorCounter: Math.floor(script() * 3), devLastDrop: devMode && script() < 0.5 ? { automatic: true } : null,
        drunkClock: 0, drunkHold: 0.625, drunkMode: 'stumble', drunkFrom: 1, drunkTarget: 0.35, drunkMultiplier: 0.5 + script()
      };
      for (const side of [legacy, current]) {
        side.context.game = copy(game);
        side.context.reducedMotion = reduced;
        side.context.spawnMovingBlock();
      }
      assert.deepEqual(current.context.game.moving, spawnShape(legacy.context.game.moving), `step ${step}: spawned Mover`);
      // Somewhere along its run: anywhere in the world, or past an edge under the Portal.
      const width = current.context.game.moving.width;
      const left = id === 'portal' ? script() * Core.WIDTH : script() < 0.3 ? stack[stack.length - 1].left + (script() - 0.5) * 30 : script() * (Core.WIDTH - width);
      for (const side of [legacy, current]) side.context.game.moving.left = left;
      const onRails = railed(legacy.context.game);
      if (onRails) seen.railed += 1;
      legacy.context.completeDrop();
      current.context.completeDrop();
      // A miss leaves the dropped Mover in place; only its input position was moved onto the rails.
      if (onRails && legacy.context.game.stack.length === stack.length) legacy.context.game.moving.left = left;
      const state = side => {
        const { moving, ...rest } = copy(side.context.game);
        return { ...rest, moving: spawnShape(moving), feedback: side.context.elements.devFeedback.textContent, best: side.context.sessionBest };
      };
      assert.deepEqual(state(current), state(legacy), `step ${step}: game after the Landing`);
      assert.deepEqual(current.record, legacy.record, `step ${step}: cues, pieces, announcements`);
      current.record.length = 0;
      legacy.record.length = 0;
      const placed = current.context.game.stack.length > stack.length;
      seen[placed ? 'placed' : 'miss'] += 1;
      if (placed && current.context.game.stack[stack.length].perfect) seen.perfect += 1;
      if (id === 'portal') seen.portal += 1;
      if (id === 'accordion') seen[reduced ? 'reduced' : 'accordion'] += 1;
      if (devMode) seen.dev += 1;
    }
    for (const [what, count] of Object.entries(seen)) assert.ok(count > 0, `the script reaches ${what}`);
  });
}

test('solo applies the Calipers rails to the Landing', () => {
  const below = { left: 150, right: 230, level: 3 };
  const moving = { left: 0, width: 80, direction: 1, level: 4 };
  const { left, outcome } = Core.resolveLanding(below, moving, { speed: 140, effects: { calipers: {} }, level: 4 });
  assert.equal(left, Core.caliperBounds(below, moving).minLeft);
  assert.equal(outcome.status, 'placed');
  assert.equal(Core.resolveLanding(below, moving, { speed: 140, effects: {}, level: 4 }).outcome.status, 'miss');
});

// ---- Parity: the solo and authoritative adapters resolve the same Landing the same way.

for (const seed of [2, 3]) {
  test(`solo and RoundEngine resolve the same Landing: seed ${seed}`, () => {
    const script = rng(seed * 101);
    const page = pageRig(CURRENT_PAGE, Core);
    const motionIds = IDS.filter(id => id !== 'drunk');
    for (let step = 0; step < 1500; step++) {
      const { engine, clock } = engineRig('competitive', seed + step);
      const competitor = engine.game.competitors[0];
      const stack = soloStack(script, 1 + Math.floor(script() * 8));
      const id = script() < 0.15 ? null : motionIds[Math.floor(script() * motionIds.length)];
      const elapsed = Math.floor(script() * 256) / 64;
      if (id) engine.game.activeEffects = Core.activateEffect([], id, { targetPlayerId: 'a', now: clock.t - elapsed * 1000, random: () => 0.2, policy: Core.EFFECT_POLICIES.competitive }).effects;
      const moving = Core.spawnMover(stack, { fromLeft: true, color: '#000', effects: id === 'portal' ? { portal: {} } : {} });
      moving.left = id === 'portal' ? script() * Core.WIDTH : script() * (Core.WIDTH - moving.width);
      competitor.stack = copy(stack);
      competitor.moving = copy(moving);
      page.context.game = { phase: 'playing', stack: copy(stack), moving: copy(moving), fallenPieces: [], perfects: 0, activeEffect: id ? { id, elapsed } : null,
        drunkClock: 0, drunkHold: 0.625, drunkMode: 'stumble', drunkFrom: 1, drunkTarget: 0.35, drunkMultiplier: 1 };
      const server = engine.resolveDrop(competitor, competitor.stack, engine.player('a'), moving.left, clock.t);
      const speed = page.context.speedAtLanding();
      const solo = Core.resolveLanding(stack[stack.length - 1], moving, { speed, effects: page.context.moverEffects(), level: stack.length, color: engine.player('a').color, placer: engine.player('a').name });
      assert.equal(speed, engine.effectiveSpeedAt(competitor.stack, competitor, 'a', clock.t), `step ${step}: speed (${id})`);
      assert.deepEqual(solo, server, `step ${step}: Landing (${id})`);
    }
  });
}
