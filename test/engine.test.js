'use strict';
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { RoundEngine } = require('../server/round-engine');
const Core = require('../shared/game-core');
const { rng } = require('./helpers/rng');

function makeEngine(mode, seed = 1, playerCount = 2) {
  const clock = { t: 10_000_000 };
  const players = Array.from({ length: playerCount }, (_, i) => ({ id: 'abcdef'[i], name: 'P' + i, color: '#E3A33B', connected: true }));
  const engine = new RoundEngine({ mode, players, now: () => clock.t, random: rng(seed) });
  engine.start(1);
  return { engine, clock, players };
}

describe('one sabotage at a time', () => {
  test('Teamwork: a new sabotage replaces every older one', () => {
    const { engine, clock } = makeEngine('teamwork', 7);
    engine.addEffect('portal', 'a', clock.t);
    engine.addEffect('crumble', null, clock.t);
    engine.addEffect('spotlight', 'b', clock.t);
    assert.deepEqual(engine.game.activeEffects.map(e => e.id), ['spotlight']);
  });
  test('Competitive: replaces per target only', () => {
    const { engine, clock } = makeEngine('competitive', 7);
    engine.addEffect('portal', 'a', clock.t);
    engine.addEffect('turbo', 'b', clock.t);
    engine.addEffect('spotlight', 'a', clock.t);
    assert.deepEqual(engine.game.activeEffects.map(e => `${e.id}:${e.targetPlayerId}`).sort(), ['spotlight:a', 'turbo:b']);
  });
  for (const mode of ['teamwork', 'competitive']) {
    test(`${mode}: long skilled-bot games never hold two effects for one target`, () => {
      let overlaps = 0; let maxHeight = 0;
      for (let seed = 1; seed <= 4; seed += 1) {
        const r = rng(seed * 31);
        const { engine, clock } = makeEngine(mode, seed, mode === 'teamwork' ? 3 : 2);
        for (let step = 0; step < 24000 && engine.game.phase === 'playing'; step += 1) {
          clock.t += 5; engine.tick(clock.t);
          const g = engine.game;
          const per = new Map();
          for (const e of g.activeEffects) per.set(String(e.targetPlayerId), (per.get(String(e.targetPlayerId)) || 0) + 1);
          if ([...per.values()].some(n => n > 1) || (mode === 'teamwork' && g.activeEffects.length > 1)) overlaps += 1;
          if (g.vote && r() < 0.2) engine.castManualVote(g.vote.options[Math.floor(r() * g.vote.options.length)]);
          const actors = g.team ? (g.team.turnActive ? [[g.team, g.team.currentPlayerId]] : []) : g.competitors.filter(c => !c.ended).map(c => [c, c.playerId]);
          for (const [a, id] of actors) {
            if (!a.moving) continue;
            const below = a.stack[a.stack.length - 1];
            const speed = engine.effectiveSpeedAt(a.stack, a, id, clock.t);
            if (Math.abs(a.moving.left + a.moving.width / 2 - (below.left + below.right) / 2) <= Math.max(1.2, speed * 0.0025)) {
              engine.drop(id, { x: a.moving.left, turnId: g.team ? g.team.turnId : undefined, requestId: `d${step}${id}` });
            }
          }
          if (g.team && g.team.awaitingAutoDrop) engine.drop(g.team.currentPlayerId, { x: g.team.moving.left, turnId: g.team.turnId, requestId: `a${step}`, auto: true });
        }
        maxHeight = Math.max(maxHeight, engine.currentHeight());
      }
      assert.equal(overlaps, 0);
      assert.ok(maxHeight >= 26, `bot only reached height ${maxHeight}; need >= 25 to exercise the faster vote cadence`);
    });
  }
});

describe('landing is what the player saw, independent of network timing', () => {
  // The player's screen trails the server by the one-way latency L; they press when it shows the block centred and the
  // packet takes another L. The server only ticks every 100 ms, at an arbitrary phase relative to the packet.
  function pressOnCentredBlock(latencyMs, trial) {
    const mk = (seed, clock) => {
      const players = [{ id: 'a', name: 'A', color: '#E3A33B', connected: true }, { id: 'b', name: 'B', color: '#2F8478', connected: true }];
      const e = new RoundEngine({ mode: 'competitive', players, now: () => clock.t, random: rng(seed) }); e.start(1); return e;
    };
    const truthClock = { t: 1e7 }; const truth = mk(trial + 1, truthClock);
    const c = truth.game.competitors[0]; const below = c.stack[0]; const centre = (below.left + below.right) / 2;
    let hitAt = null; let clientX = null;
    for (let k = 0; k < 3000; k += 1) {
      truthClock.t += 1; truth.tick(truthClock.t);
      if (Math.abs(c.moving.left + c.moving.width / 2 - centre) <= 0.075) { hitAt = truthClock.t - 1e7; clientX = c.moving.left; break; }
    }
    assert.notEqual(hitAt, null);
    const arrive = hitAt + 2 * latencyMs; const phase = (trial * 37) % 100;
    const clock = { t: 1e7 }; const engine = mk(trial + 1, clock);
    for (let tt = phase; tt <= arrive; tt += 100) { clock.t = 1e7 + tt; engine.tick(clock.t); }
    clock.t = 1e7 + arrive;
    return { result: engine.drop('a', { x: clientX, requestId: 'q' }), clientX };
  }
  for (const latency of [5, 20, 50, 100, 120]) {
    test(`a press on a centred block is a perfect drop at ${2 * latency} ms round trip (every tick phase)`, () => {
      for (let trial = 0; trial < 100; trial += 1) {
        const { result, clientX } = pressOnCentredBlock(latency, trial);
        assert.ok(result.ok, `rejected: ${result.code}`);
        assert.equal(result.outcome.perfect, true, `trial ${trial} landed ${Math.abs(result.authoritativeX - clientX).toFixed(1)}px off`);
      }
    });
  }
  function narrowMover() {
    const m = makeEngine('competitive'); const c = m.engine.game.competitors[0];
    c.moving.width = 60; c.moving.left = 100; c.moving.direction = 1;
    m.speed = m.engine.effectiveSpeedAt(c.stack, c, 'a', m.clock.t); m.c = c; return m;
  }
  test('a reported x inside the lag window is honoured exactly', () => {
    const m = narrowMover(); const x = 100 + m.speed * 0.10;
    const r = m.engine.drop('a', { x, requestId: 'in' });
    assert.ok(r.ok); assert.ok(Math.abs(r.authoritativeX - x) < 1e-9);
  });
  test('a reported x outside the lag window (but inside the sync tolerance) is overridden by the server position', () => {
    const m = narrowMover();
    const tolerance = m.engine.positionTolerance(m.c.stack, m.c, 'a', m.clock.t);
    const x = 100 + m.speed * 0.25 + 2 + 8;
    assert.ok(x < 100 + tolerance);
    const r = m.engine.drop('a', { x, requestId: 'out' });
    assert.ok(r.ok); assert.ok(Math.abs(r.authoritativeX - 100) < 1e-9);
  });
  test('a reported x beyond the sync tolerance is rejected', () => {
    const m = narrowMover();
    const tolerance = m.engine.positionTolerance(m.c.stack, m.c, 'a', m.clock.t);
    const r = m.engine.drop('a', { x: 100 + tolerance + 10, requestId: 'far' });
    assert.equal(r.ok, false); assert.equal(r.code, 'DROP_POSITION_OUT_OF_SYNC');
  });
  test('Drafting Calipers: the landing position stays inside the rails', () => {
    const { engine, clock } = makeEngine('competitive', 3);
    engine.addEffect('calipers', 'a', clock.t); clock.t += 500; engine.tick(clock.t);
    const c = engine.game.competitors[0]; const bounds = Core.caliperBounds(c.stack[c.stack.length - 1], c.moving);
    const speed = engine.effectiveSpeedAt(c.stack, c, 'a', clock.t);
    const left = engine.landingLeft(c, c.stack, 'a', Math.max(0, c.moving.left - speed * 0.2), speed, clock.t);
    assert.ok(left >= bounds.minLeft - 1e-9 && left <= bounds.maxLeft + 1e-9);
  });
});

describe('pause and resume', () => {
  test('a long pause (everyone disconnected) does not teleport the mover', () => {
    const { engine, clock, players } = makeEngine('teamwork', 5); clock.t += 700; engine.tick(clock.t);
    const before = engine.game.team.moving.left;
    for (const p of players) { p.connected = false; engine.playerDisconnected(p.id, clock.t); }
    assert.equal(engine.game.paused, true);
    clock.t += 60_000;
    for (const p of players) { p.connected = true; engine.playerReconnected(p.id, clock.t); }
    engine.tick(clock.t + 100);
    assert.ok(Math.abs(engine.game.team.moving.left - before) < 60);
  });
});

describe('robustness under random play', () => {
  for (const mode of ['teamwork', 'competitive']) {
    test(`${mode}: 300 random games never throw or produce invalid geometry`, () => {
      for (let seed = 1; seed <= 300; seed += 1) {
        const r = rng(seed); const n = 2 + Math.floor(r() * 5);
        const clock = { t: 5e6 };
        const players = Array.from({ length: n }, (_, i) => ({ id: 'p' + i, name: 'P' + i, color: '#E3A33B', connected: true, reducedMotion: r() < 0.15 }));
        const engine = new RoundEngine({ mode, players, now: () => clock.t, random: r }); engine.start(1);
        for (let step = 0; step < 1500 && engine.game.phase === 'playing'; step += 1) {
          clock.t += 100; engine.tick(clock.t);
          const pid = 'p' + Math.floor(r() * n); const p = players.find(x => x.id === pid); const roll = r();
          if (roll < 0.3 && engine.game.vote) engine.castManualVote(engine.game.vote.options[Math.floor(r() * engine.game.vote.options.length)]);
          if (roll > 0.4 && roll < 0.8 && p.connected) {
            const actor = engine.game.team ? (engine.game.team.currentPlayerId === pid ? engine.game.team : null) : engine.game.competitors.find(c => c.playerId === pid);
            if (actor && actor.moving) engine.drop(pid, { x: actor.moving.left, turnId: engine.game.team ? engine.game.team.turnId : undefined, requestId: 'r' + step + pid });
          }
          if (roll > 0.97) {
            if (p.connected && players.filter(x => x.connected).length > 1) { p.connected = false; engine.playerDisconnected(pid, clock.t); }
            else if (!p.connected) { p.connected = true; engine.playerReconnected(pid, clock.t); }
          }
          for (const a of engine.game.team ? [engine.game.team] : engine.game.competitors) {
            for (const b of a.stack) assert.ok(b.right > b.left && Number.isFinite(b.left) && Number.isFinite(b.right));
            if (a.moving) { assert.ok(Number.isFinite(a.moving.left)); if (!a.moving.portalWrap) assert.ok(a.moving.left >= -1e-6 && a.moving.left + a.moving.width <= 360 + 1e-6); }
          }
        }
      }
    });
  }
});

describe('shared core invariants', () => {
  const all = Object.values(Core.SABOTAGE_CATEGORIES).flat();
  test('pickOptions always returns three distinct, allowed options', () => {
    const r = rng(2024);
    for (let i = 0; i < 5000; i += 1) {
      const height = Math.floor(r() * 200); const reduced = r() < 0.3; const last = r() < 0.5 ? all[Math.floor(r() * all.length)] : null;
      const pool = all.filter(id => !(reduced && Core.REDUCED_MOTION_EXCLUDED_IDS.includes(id)) && Core.sabotageAvailableAtHeight(id, height));
      const options = Core.pickOptions(pool, r, last, reduced);
      assert.equal(options.length, 3); assert.equal(new Set(options).size, 3);
      assert.ok(options.every(o => pool.includes(o)));
    }
  });
  test('chooseWinner always names one of the options; a voter counts once', () => {
    const r = rng(11); const opts = ['a', 'b', 'c'];
    for (let i = 0; i < 5000; i += 1) {
      let votes = new Map();
      for (let k = 0, n = Math.floor(r() * 40); k < n; k += 1) votes = Core.recordVote(votes, { voterId: 'v' + Math.floor(r() * 15), option: opts[Math.floor(r() * 3)] }, opts);
      assert.ok(votes.size <= 15);
      assert.ok(opts.includes(Core.chooseWinner(votes, opts, r).winner));
    }
  });
  test('movers and placements never produce NaN or zero-width blocks', () => {
    const r = rng(77);
    for (let i = 0; i < 20000; i += 1) {
      const bw = 0.01 + r() * 200; const bl = r() * (360 - bw); const below = { left: bl, right: bl + bw, level: 3 };
      const mw = Math.max(Core.MIN_WIDTH, bw); const mover = { left: r() * (360 - mw), width: mw, direction: 1, rollerPhase: r() };
      const landed = Core.landingMover(mover, r() < 0.5 ? 'rollercoaster' : '', { speed: 100 + r() * 200, verticalOffset: (r() - 0.5) * 60 }) || mover;
      const out = Core.placeDrop(below, landed, { perfectWindow: 3 + r() * 10, crumble: r() < 0.3 });
      if (out.status === 'placed') assert.ok(out.placed.right > out.placed.left && Number.isFinite(out.placed.width));
      for (const f of out.fallen) assert.ok(f.right > f.left);
    }
  });
});
