'use strict';
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const { RoundEngine, COMPETITIVE_DISCONNECT_GRACE_MS } = require('../server/round-engine');
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

describe('Teamwork voting (F-008)', () => {
  function openBetweenTurns(engine, now) {
    engine.game.team.turnActive = false;
    engine.game.team.currentPlayerId = null;
    engine.game.team.turnExpiresAt = null;
    engine.game.team.awaitingAutoDrop = false;
    engine.game.team.autoDropDeadlineAt = null;
    return engine.openVote(now);
  }

  test('each connected player off-turn has one changeable vote; the on-turn and disconnected players cannot vote', () => {
    const { engine, clock, players } = makeEngine('teamwork', 21, 3);
    engine.openVote(clock.t);
    const options = engine.game.vote.options;

    assert.equal(engine.castTeamworkPlayerVote('a', options[0]).code, 'PLAYER_ON_TURN');
    assert.equal(engine.castTeamworkPlayerVote('b', options[0]).ok, true);
    assert.equal(engine.castTeamworkPlayerVote('b', options[1]).ok, true, 'the same player can change their ballot');
    assert.equal(engine.game.vote.votes.size, 1, 'a changed vote replaces the earlier ballot');
    assert.deepEqual([...engine.game.vote.votes.entries()], [['teamwork-player:b', options[1]]]);
    players[2].connected = false;
    assert.equal(engine.castTeamworkPlayerVote('c', options[0]).code, 'PLAYER_INACTIVE');
    assert.equal(engine.snapshot().vote.totalVotes, 1);

    const competitive = makeEngine('competitive', 22, 2).engine;
    competitive.openVote(competitive.now());
    assert.equal(competitive.castTeamworkPlayerVote('a', competitive.game.vote.options[0]).code, 'PLAYER_VOTING_DISABLED');
  });

  test('host tie-break resolves a player tie, including zero votes, but cannot overturn a clear winner', () => {
    const tied = makeEngine('teamwork', 23, 3);
    openBetweenTurns(tied.engine, tied.clock.t);
    const [first, second] = tied.engine.game.vote.options;
    assert.equal(tied.engine.castTeamworkPlayerVote('a', first).ok, true);
    assert.equal(tied.engine.castTeamworkPlayerVote('b', second).ok, true);
    assert.equal(tied.engine.castHostTiebreak(second).ok, true);
    assert.equal(tied.engine.snapshot().vote.hostTiebreak, second);
    assert.equal(tied.engine.game.vote.duration, 5, 'the existing vote window remains five seconds');
    const cadence = tied.engine.game.elapsed + 10;
    assert.equal(tied.engine.game.nextVoteAt, cadence, 'the existing vote cadence remains unchanged');
    tied.engine.resolveVote(tied.clock.t);
    assert.equal(tied.engine.game.lastVote.winner, second);
    assert.equal(tied.engine.game.lastVote.tiebreak, 'host');

    const noVotes = makeEngine('teamwork', 24, 2);
    openBetweenTurns(noVotes.engine, noVotes.clock.t);
    const chosenWithoutBallots = noVotes.engine.game.vote.options[2];
    assert.equal(noVotes.engine.castHostTiebreak(chosenWithoutBallots).ok, true);
    noVotes.engine.resolveVote(noVotes.clock.t);
    assert.equal(noVotes.engine.game.lastVote.winner, chosenWithoutBallots, 'the host decides a zero-vote tie');
    assert.equal(noVotes.engine.game.lastVote.totalVotes, 0);
    assert.equal(noVotes.engine.game.lastVote.tiebreak, 'host');

    const clear = makeEngine('teamwork', 25, 3);
    openBetweenTurns(clear.engine, clear.clock.t);
    const [leader, runnerUp] = clear.engine.game.vote.options;
    clear.engine.castTeamworkPlayerVote('a', leader);
    clear.engine.castTeamworkPlayerVote('b', leader);
    clear.engine.castTeamworkPlayerVote('c', runnerUp);
    clear.engine.castHostTiebreak(runnerUp);
    clear.engine.resolveVote(clear.clock.t);
    assert.equal(clear.engine.game.lastVote.winner, leader, 'a host preference cannot overturn the player-vote leader');
    assert.equal(clear.engine.game.lastVote.tiebreak, undefined);
  });

  test('the host cannot use a Teamwork tie-break as an extra Competitive ballot', () => {
    const { engine, clock } = makeEngine('competitive', 26, 2);
    engine.openVote(clock.t);
    const option = engine.game.vote.options[0];
    assert.equal(engine.castHostTiebreak(option).code, 'HOST_TIEBREAK_DISABLED');
    assert.equal(engine.castManualVote(option).ok, true);
    assert.equal(engine.game.vote.votes.size, 1);
    assert.equal(Object.hasOwn(engine.snapshot().vote, 'hostTiebreak'), false);
  });
});

describe('Competitive sabotage targeting (F-007)', () => {
  test('every connected, unfinished competitor gets the full effect, not only the leader', () => {
    const { engine, clock, players } = makeEngine('competitive', 17, 4);
    const [leader, trailing, offline, finished] = engine.game.competitors;
    leader.stack.push({ ...leader.stack[0] }, { ...leader.stack[0] }, { ...leader.stack[0] });
    players[2].connected = false;
    offline.disconnected = true;
    players[3].ended = true;
    finished.ended = true;

    engine.game.pendingSabotage = 'turbo';
    engine.applyCompetitiveSabotage(clock.t);

    const effects = engine.game.activeEffects.filter(effect => effect.id === 'turbo');
    assert.deepEqual(effects.map(effect => effect.targetPlayerId), ['a', 'b'], 'the leader and every other connected, unfinished competitor are targeted');
    assert.ok(effects.every(effect => effect.duration === 5 && effect.expiresAt === clock.t + 5000), 'each target receives the normal full duration');
    assert.deepEqual([leader.sabotageCount, trailing.sabotageCount, offline.sabotageCount, finished.sabotageCount], [1, 1, 0, 0]);
    assert.deepEqual(engine.snapshot().lastSabotage, {
      id: 'turbo', sequence: 1, targetPlayerIds: ['a', 'b']
    }, 'the snapshot identifies all players who were hit');
  });
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

describe('Competitive disconnect grace (F-006)', () => {
  const GRACE_MS = COMPETITIVE_DISCONNECT_GRACE_MS;

  test('a reconnect within ten seconds restores the frozen mover', () => {
    const { engine, clock, players } = makeEngine('competitive');
    const competitor = engine.game.competitors.find(item => item.playerId === 'a');
    const initialLeft = competitor.moving.left;

    players[0].connected = false;
    engine.playerDisconnected('a', clock.t);
    assert.equal(competitor.ended, false, 'a temporary disconnect must not end the stack');
    assert.equal(competitor.disconnected, true, 'other players can see that the stack is offline');
    assert.equal(players[0].ended, false);
    assert.equal(competitor.disconnectDeadline, clock.t + GRACE_MS);

    clock.t += 1_000;
    engine.tick(clock.t);
    assert.equal(competitor.moving.left, initialLeft, 'the disconnected mover is frozen during the grace period');
    assert.equal(engine.game.phase, 'playing');

    players[0].connected = true;
    engine.playerReconnected('a', clock.t);
    assert.equal(competitor.ended, false);
    assert.equal(competitor.disconnected, false);
    assert.equal(competitor.disconnectDeadline, null);
    clock.t += 50;
    engine.tick(clock.t);
    assert.notEqual(competitor.moving.left, initialLeft, 'the mover resumes after reconnection');
  });

  test('a reconnect processed after the deadline is forfeited even before the next engine tick', () => {
    const { engine, clock, players } = makeEngine('competitive');
    const competitor = engine.game.competitors.find(item => item.playerId === 'a');
    players[0].connected = false;
    engine.playerDisconnected('a', clock.t);
    clock.t += GRACE_MS;
    players[0].connected = true;
    engine.playerReconnected('a', clock.t);

    assert.equal(competitor.ended, true);
    assert.equal(competitor.disconnected, true);
    assert.equal(competitor.disconnectDeadline, null);
    assert.equal(players[0].ended, true);
    assert.equal(engine.connectedPlayer('a'), null, 'the expired player can only watch the live round');
  });

  test('an unresumed stack ends only at the grace deadline, even if every other stack has ended', () => {
    const { engine, clock, players } = makeEngine('competitive');
    const disconnected = engine.game.competitors.find(item => item.playerId === 'a');
    const finished = engine.game.competitors.find(item => item.playerId === 'b');
    finished.ended = true;
    finished.collapsed = true;
    players[1].ended = true;

    players[0].connected = false;
    engine.playerDisconnected('a', clock.t);
    assert.equal(engine.game.phase, 'playing', 'a stack in its grace period keeps the round alive');
    clock.t += GRACE_MS - 1;
    engine.tick(clock.t);
    assert.equal(disconnected.ended, false);
    assert.equal(engine.game.phase, 'playing', 'the player can still reconnect just before the deadline');

    clock.t += 1;
    engine.tick(clock.t);
    assert.equal(disconnected.ended, true);
    assert.equal(disconnected.disconnected, true);
    assert.equal(disconnected.disconnectDeadline, null);
    assert.equal(players[0].ended, true);
    assert.equal(engine.game.phase, 'results');
    assert.equal(engine.game.results.players.find(player => player.id === 'a').disconnected, true);
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

describe('Teamwork drop-based sabotage (F-009)', () => {
  test('regular effects survive time and forfeits, then end on the affected landing', () => {
    const { engine, clock } = makeEngine('teamwork', 101);
    const team = engine.game.team;
    const target = team.currentPlayerId;
    engine.addEffect('turbo', target, clock.t);
    clock.t += 11000;
    engine.tick(clock.t);
    assert.ok(engine.hasEffect('turbo', target, clock.t));
    assert.equal(engine.snapshot().activeEffects[0].untilDrop, true);
    clock.t += 2000; engine.tick(clock.t);
    if (engine.game.vote) engine.resolveVote(clock.t);
    assert.notEqual(team.currentPlayerId, target);
    assert.ok(engine.hasEffect('turbo', target, clock.t), 'forfeit did not consume it');
    engine.consumeDropEffects(team.currentPlayerId, clock.t);
    assert.ok(engine.hasEffect('turbo', target, clock.t), 'another player cannot consume it');
    assert.equal(engine.teamReady(target, clock.t).ok, true);
    engine.forfeitTeamTurn(clock.t);
    if (engine.game.vote) engine.resolveVote(clock.t);
    assert.equal(team.currentPlayerId, target);
    const result = engine.drop(target, { turnId: team.turnId, x: team.moving.left });
    assert.equal(result.ok, true);
    assert.equal(engine.hasEffect('turbo', target, clock.t), false);
  });

  for (const id of ['crumble', 'superglue', 'portal', 'calipers']) {
    test(`${id} lasts three affected drops without a time cap`, () => {
      const { engine, clock } = makeEngine('teamwork', 102);
      const target = id === 'crumble' ? null : 'a';
      engine.addEffect(id, target, clock.t);
      clock.t += 30000;
      assert.ok(engine.hasEffect(id, 'a', clock.t));
      for (let n = 2; n >= 0; n--) {
        engine.consumeDropEffects('a', clock.t);
        assert.equal(engine.game.activeEffects[0]?.dropsRemaining || 0, n);
      }
    });
  }

  test('new votes queue instead of replacing an unconsumed effect', () => {
    const { engine, clock } = makeEngine('teamwork', 103);
    const team = engine.game.team;
    engine.addEffect('portal', team.currentPlayerId, clock.t);
    engine.forfeitTeamTurn(clock.t);
    engine.game.pendingSabotage = 'turbo';
    engine.forfeitTeamTurn(clock.t);
    assert.equal(engine.game.activeEffects[0].id, 'portal');
    assert.deepEqual(engine.game.teamSabotageQueue, ['turbo']);
    for (let i = 0; i < 3; i++) engine.consumeDropEffects(team.currentPlayerId, clock.t);
    engine.forfeitTeamTurn(clock.t);
    assert.equal(engine.game.activeEffects[0].id, 'turbo');
  });

  test('Competitive effects retain their normal time caps', () => {
    const { engine, clock } = makeEngine('competitive', 104);
    engine.addEffect('turbo', 'a', clock.t);
    assert.equal(engine.hasEffect('turbo', 'a', clock.t + 5000), false);
    engine.addEffect('portal', 'a', clock.t);
    assert.equal(engine.hasEffect('portal', 'a', clock.t + 8000), false);
  });
});

describe('Teamwork idle turns (F-010)', () => {
  test('timeout forfeits without a drop and skips that player until ready', () => {
    const { engine, clock } = makeEngine('teamwork', 151);
    const team = engine.game.team;
    const first = team.currentPlayerId;
    const initialStack = structuredClone(team.stack);
    engine.addEffect('turbo', first, clock.t);
    clock.t += 10000;
    assert.equal(engine.drop(first, { turnId: team.turnId, x: team.moving.left }).code, 'TURN_EXPIRED');
    engine.tick(clock.t);
    assert.deepEqual(team.stack, initialStack);
    assert.equal(engine.player(first).teamIdle, true);
    assert.ok(engine.hasEffect('turbo', first, clock.t));
    if (engine.game.vote) engine.resolveVote(clock.t);
    assert.notEqual(team.currentPlayerId, first);
    engine.forfeitTeamTurn(clock.t);
    assert.notEqual(team.currentPlayerId, first);
    assert.equal(engine.teamReady(first, clock.t).ok, true);
    engine.forfeitTeamTurn(clock.t);
    assert.equal(team.currentPlayerId, first);
  });

  test('all idle pauses until explicit ready, including across disconnects', () => {
    const { engine, clock, players } = makeEngine('teamwork', 152);
    engine.game.nextVoteAt = Infinity;
    clock.t += 10000; engine.tick(clock.t);
    clock.t += 10000; engine.tick(clock.t);
    assert.equal(engine.game.paused, true);
    assert.equal(engine.snapshot().pauseReason, 'all-players-idle');
    const frozen = engine.game.elapsed;
    clock.t += 60000; engine.tick(clock.t);
    assert.equal(engine.game.elapsed, frozen);
    players[0].connected = false; engine.playerDisconnected(players[0].id, clock.t);
    players[0].connected = true; engine.playerReconnected(players[0].id, clock.t);
    assert.equal(engine.game.paused, true, 'reconnection alone does not make an idle player ready');
    assert.equal(engine.teamReady(players[0].id, clock.t).ok, true);
    assert.equal(engine.game.paused, false);
    assert.equal(engine.game.team.currentPlayerId, players[0].id);
    assert.equal(engine.game.team.turnExpiresAt, clock.t + 10000);
  });

  test('a vote pauses if the only non-idle player disconnects', () => {
    const { engine, clock, players } = makeEngine('teamwork', 154);
    players[0].teamIdle = true;
    engine.openVote(clock.t);
    players[1].connected = false;
    engine.playerDisconnected(players[1].id, clock.t);
    assert.equal(engine.game.paused, true);
    assert.equal(engine.game.pauseReason, 'all-players-idle');
    const voteDeadline = engine.game.vote.closesAt;
    clock.t += 30000;
    engine.teamReady(players[0].id, clock.t);
    assert.equal(engine.game.paused, false);
    assert.equal(engine.game.vote.closesAt, voteDeadline + 30000);
  });

  test('host skip is turn-specific and never consumes the effect or marks the player idle', () => {
    const { engine, clock } = makeEngine('teamwork', 153);
    const team = engine.game.team, player = team.currentPlayerId, turn = team.turnId;
    engine.addEffect('portal', player, clock.t);
    assert.equal(engine.hostSkipTeamTurn(turn, clock.t).ok, true);
    assert.equal(engine.hostSkipTeamTurn(turn, clock.t).ok, false);
    assert.equal(engine.player(player).teamIdle, false);
    assert.equal(engine.effectFor('portal', player, clock.t).dropsRemaining, 3);
    assert.equal(team.stack.length, 1);
  });
});

describe('Competitive host ballot (F-014)', () => {
  test('host changes one ballot without affecting chat, invalid choices, or later votes', () => {
    const { engine, clock } = makeEngine('competitive', 160);
    engine.openVote(clock.t);
    const [first, second] = engine.game.vote.options;
    assert.equal(engine.castManualVote(first).ok, true);
    assert.equal(engine.castManualVote(first).ok, true);
    assert.equal(engine.receiveChatVote({ voterId: 'chat-1', option: first }).ok, true);
    assert.equal(engine.castManualVote(second).ok, true);
    assert.equal(engine.castManualVote('not-an-option').code, 'INVALID_OPTION');
    assert.equal(engine.snapshot().vote.totalVotes, 2);
    assert.equal(engine.snapshot().vote.counts[first], 1);
    assert.equal(engine.snapshot().vote.counts[second], 1);
    assert.equal(engine.snapshot().vote.hostChoice, second);
    engine.resolveVote(clock.t);
    engine.openVote(clock.t);
    assert.equal(engine.snapshot().vote.hostChoice, null);
    assert.equal(engine.snapshot().vote.totalVotes, 0);
  });
});
