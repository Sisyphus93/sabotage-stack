'use strict';
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');

let boot = null; let skipReason = null;
try { ({ boot } = require('./helpers/client-harness')); } catch (error) { skipReason = `Client harness failed to load on Node ${process.version}: ${error.message} (run npm ci if dependencies are missing)`; }
const { createGameServer } = require('../server');
const HTML = path.join(__dirname, '..', 'sabotage-stack.html');
const INK = '42,37,32,255';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const pressSpace = w => w.dispatchEvent(new w.KeyboardEvent('keydown', { code: 'Space', key: ' ', bubbles: true }));

async function startRoom(mode) {
  const app = createGameServer({ onError: error => { throw error; } });
  await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
  const url = `http://127.0.0.1:${app.server.address().port}/`;
  const host = await boot(HTML, { url });
  host.document.querySelector(`[data-host-mode="${mode}"]`).click(); await sleep(500);
  const code = host.document.getElementById('room-code-display').textContent.trim();
  const players = [];
  for (const name of ['Ann', 'Bob']) {
    const page = await boot(HTML, { url, seed: players.length + 2 });
    page.document.getElementById('join-game-button').click();
    page.document.getElementById('join-room-code').value = code;
    page.document.getElementById('join-display-name').value = name;
    page.document.getElementById('join-form').dispatchEvent(new page.window.Event('submit', { cancelable: true, bubbles: true }));
    await sleep(400); players.push(page);
  }
  const room = app.roomManager.rooms.get(code);
  host.document.getElementById('room-start-button').click(); await sleep(600);
  return { app, host, players, room, close: async () => { for (const page of [host, ...players]) page.close(); await app.close(); } };
}

for (const mode of ['competitive', 'teamwork']) {
  describe(`${mode}: host + two players through a full round`, skipReason ? { skip: skipReason } : {}, () => {
    test('join, play, Spotlight, results, rematch — with no client errors', async () => {
      const r = await startRoom(mode);
      try {
        const engine = r.room.engine;
        assert.equal(engine.game.phase, 'playing');
        for (const page of [r.host, ...r.players]) assert.equal(page.document.body.dataset.screen, 'game');

        // Spotlight on whoever is on stage; checked immediately so a Teamwork turn rotation cannot interfere.
        const targetId = mode === 'teamwork' ? engine.game.team.currentPlayerId : r.room.players[0].id;
        const targetName = r.room.players.find(p => p.id === targetId).name; const targetPage = r.players[targetName === 'Ann' ? 0 : 1];
        engine.addEffect('spotlight', targetId, Date.now()); engine.changed('game.state'); await sleep(250);
        assert.ok(engine.game.activeEffects.some(e => e.id === 'spotlight'), 'effect should still be live');
        const canvas = targetPage.document.getElementById('game-canvas');
        const seen = new Set([[8, 8], [350, 8], [8, 510], [350, 510], [30, 260], [330, 400], [180, 40]].map(([x, y]) => targetPage.pixel(canvas, x, y).join(',')));
        assert.deepEqual([...seen], [INK], 'the targeted player must see a fully opaque veil');

        if (mode === 'competitive') {
          // Host board: Ann's column (left half) is fully inked, Bob's (right half) is untouched.
          const hostCanvas = r.host.document.getElementById('game-canvas');
          const annColumn = [[10, 100], [90, 80], [170, 480], [60, 300]].map(([x, y]) => r.host.pixel(hostCanvas, x, y).join(','));
          assert.ok(annColumn.every(p => p === INK), `Ann's host column: ${annColumn.join(' | ')}`);
          const bobColumn = [[200, 80], [340, 80], [300, 200]].map(([x, y]) => r.host.pixel(hostCanvas, x, y).join(','));
          assert.ok(bobColumn.every(p => p !== INK), "Bob's host column must not be veiled");
        }

        for (let i = 0; i < 8; i += 1) { await sleep(700); for (const page of r.players) pressSpace(page.window); }
        const height = mode === 'teamwork' ? engine.game.team.stack.length - 1 : Math.max(...engine.game.competitors.map(c => c.stack.length - 1));
        assert.ok(height >= 3, `tower only reached ${height}`);

        if (mode === 'teamwork') engine.finishTeamRound(Date.now()); else engine.finishCompetitiveRound(Date.now());
        await sleep(500);
        assert.equal(engine.game.phase, 'results');
        for (const page of [r.host, ...r.players]) {
          assert.equal(page.document.body.dataset.screen, 'results');
          const text = page.document.getElementById('multiplayer-results').textContent;
          assert.ok(text.includes('Ann') && text.includes('Bob'), 'results should list both players');
        }
        r.host.document.getElementById('again-button').click(); await sleep(600);
        assert.notEqual(r.room.engine, engine, 'rematch should create a fresh engine');
        for (const page of [r.host, ...r.players]) assert.equal(page.document.body.dataset.screen, 'game');
        for (const page of [r.host, ...r.players]) assert.deepEqual(page.errors, []);
      } finally { await r.close(); }
    });
  });
}

describe('Competitive sabotage targeting (F-007)', skipReason ? { skip: skipReason } : {}, () => {
  test('all active stacks receive the full effect and every room member sees who was hit', async () => {
    const r = await startRoom('competitive');
    try {
      const engine = r.room.engine;
      engine.game.pendingSabotage = 'turbo';
      engine.applyCompetitiveSabotage(Date.now());
      await sleep(200);

      const active = engine.game.competitors.filter(item => !item.ended && engine.connectedPlayer(item.playerId));
      const effects = engine.game.activeEffects.filter(effect => effect.id === 'turbo');
      assert.deepEqual(effects.map(effect => effect.targetPlayerId), active.map(item => item.playerId));
      assert.ok(effects.every(effect => effect.duration === 5), 'each active stack receives the normal effect duration');
      assert.deepEqual(engine.snapshot().lastSabotage.targetPlayerIds, active.map(item => item.playerId));

      for (const page of [r.host, ...r.players]) {
        const announcement = page.document.getElementById('multiplayer-sabotage-announcement');
        assert.equal(announcement.hidden, false);
        assert.equal(announcement.getAttribute('role'), 'status');
        assert.equal(announcement.getAttribute('aria-live'), 'polite');
        assert.match(announcement.textContent, /Turbo Mode/);
        assert.match(announcement.textContent, /all active players/);
        assert.match(announcement.textContent, /Ann, Bob/);
        assert.deepEqual(page.errors, []);
      }
    } finally { await r.close(); }
  });
});

describe('Teamwork votes pause between turns (F-008)', skipReason ? { skip: skipReason } : {}, () => {
  test('each non-turn player can change one vote; the host breaks only a tied result', async () => {
    const r = await startRoom('teamwork');
    try {
      const engine = r.room.engine;
      const team = engine.game.team;
      team.turnActive = false;
      team.currentPlayerId = null;
      team.turnExpiresAt = null;
      team.awaitingAutoDrop = false;
      team.autoDropDeadlineAt = null;
      engine.openVote(Date.now());
      await sleep(150);

      const { options, duration } = engine.game.vote;
      assert.equal(duration, 5, 'the Teamwork vote keeps its five-second duration');
      assert.equal(engine.game.nextVoteAt, engine.game.vote.openedAt + 10, 'the below-height-25 vote cadence stays ten seconds');
      for (const page of [r.host, ...r.players]) {
        assert.ok([...page.document.querySelectorAll('.vote-option')].every(button => !button.disabled), 'host can set a tie-break and all off-turn players can vote');
        assert.match(page.document.getElementById('vote-subtitle').textContent, /pauses between turns/);
        assert.doesNotMatch(page.document.getElementById('control-help').textContent, /Keep stacking during votes/);
      }
      assert.match(r.players[0].document.getElementById('control-help').textContent, /Vote on your phone between turns/);
      assert.match(r.host.document.getElementById('control-help').textContent, /Only tied votes come to you/);

      team.turnActive = true;
      team.currentPlayerId = r.room.players[0].id;
      engine.changed('game.state');
      await sleep(120);
      assert.ok([...r.players[0].document.querySelectorAll('.vote-option')].every(button => button.disabled), 'the player taking a turn cannot vote');
      assert.ok([...r.players[1].document.querySelectorAll('.vote-option')].every(button => !button.disabled), 'the other connected player may still vote');
      team.turnActive = false;
      team.currentPlayerId = null;
      engine.changed('game.state');
      await sleep(120);

      const first = options[0]; const second = options[1];
      const clickOption = async (page, option) => {
        page.document.querySelector(`.vote-option[data-option-index="${options.indexOf(option)}"]`).click();
        await sleep(120);
      };
      await clickOption(r.players[0], first);
      await clickOption(r.players[0], second);
      await clickOption(r.players[1], first);
      assert.equal(engine.game.vote.votes.size, 2, 'a changed player vote still occupies one ballot');
      assert.deepEqual(Object.values(engine.snapshot().vote.counts).sort(), [0, 1, 1], 'the two players leave a tie');

      await clickOption(r.host, first);
      assert.equal(engine.game.vote.votes.size, 2, 'the host choice is not counted as a player vote');
      assert.equal(engine.snapshot().vote.hostTiebreak, first);
      assert.ok(r.host.document.querySelector(`.vote-option[data-option-index="${options.indexOf(first)}"]`).classList.contains('is-host-tiebreak'));

      engine.resolveVote(Date.now());
      await sleep(150);
      assert.equal(engine.game.lastVote.winner, first);
      assert.equal(engine.game.lastVote.tiebreak, 'host');
      for (const page of [r.host, ...r.players]) assert.deepEqual(page.errors, []);
    } finally { await r.close(); }
  });

  test('Competitive stays host-voted while the block keeps moving', async () => {
    const r = await startRoom('competitive');
    try {
      const engine = r.room.engine;
      engine.openVote(Date.now());
      await sleep(120);
      assert.match(r.players[0].document.getElementById('vote-subtitle').textContent, /block keeps moving/i);
      assert.ok([...r.players[0].document.querySelectorAll('.vote-option')].every(button => button.disabled));
      assert.ok([...r.host.document.querySelectorAll('.vote-option')].every(button => !button.disabled));
      r.players[0].document.querySelector('.vote-option').click();
      await sleep(100);
      assert.equal(engine.game.vote.votes.size, 0, 'a Competitive player cannot vote directly');
      const hostButtons = [...r.host.document.querySelectorAll('.vote-option')];
      hostButtons[0].click(); await sleep(100);
      hostButtons[1].click(); await sleep(100);
      assert.equal(engine.game.vote.votes.size, 1, 'the host changes one Competitive ballot');
      assert.equal(engine.snapshot().vote.hostChoice, engine.game.vote.options[1]);
      assert.equal(hostButtons[0].getAttribute('aria-pressed'), 'false');
      assert.equal(hostButtons[1].getAttribute('aria-pressed'), 'true');
      assert.match(r.host.document.getElementById('vote-subtitle').textContent, /Vote counted/);
      assert.match(r.host.document.getElementById('vote-help').textContent, /one vote/i);
      assert.match(r.players[0].document.getElementById('vote-help').textContent, /host has one/i);
      for (const page of [r.host, ...r.players]) assert.deepEqual(page.errors, []);
    } finally { await r.close(); }
  });
});

describe('Room navigation during live rounds (F-005)', skipReason ? { skip: skipReason } : {}, () => {
  test('host and player stay in the room lobby until Back to round or a phase change', async () => {
    const r = await startRoom('competitive');
    try {
      const hostDocument = r.host.document;
      const playerDocument = r.players[0].document;
      const broadcastSnapshot = async () => {
        r.room.engine.changed('game.state');
        await sleep(100);
      };

      hostDocument.getElementById('menu-button').click();
      assert.equal(hostDocument.body.dataset.screen, 'lobby', 'Room opens the lobby immediately for the host');
      assert.equal(hostDocument.getElementById('room-close-button').hidden, false, 'the host can see Close room');
      await broadcastSnapshot();
      const hostAfterSnapshot = hostDocument.body.dataset.screen;

      playerDocument.getElementById('menu-button').click();
      assert.equal(playerDocument.body.dataset.screen, 'lobby', 'Room opens the lobby immediately for a player');
      assert.equal(playerDocument.getElementById('room-leave-button').hidden, false, 'the player can see Leave room');
      await broadcastSnapshot();
      const playerAfterSnapshot = playerDocument.body.dataset.screen;

      if (hostDocument.body.dataset.screen !== 'lobby') hostDocument.getElementById('menu-button').click();
      if (playerDocument.body.dataset.screen !== 'lobby') playerDocument.getElementById('menu-button').click();
      hostDocument.getElementById('room-return-button').click();
      assert.equal(hostDocument.body.dataset.screen, 'game', 'Back to round returns the host to play');
      await broadcastSnapshot();
      const hostAfterReturnSnapshot = hostDocument.body.dataset.screen;

      r.room.engine.finishCompetitiveRound(Date.now());
      await sleep(150);
      const afterPhaseChange = [hostDocument.body.dataset.screen, playerDocument.body.dataset.screen];

      assert.deepEqual({ hostAfterSnapshot, playerAfterSnapshot, hostAfterReturnSnapshot, afterPhaseChange }, {
        hostAfterSnapshot: 'lobby', playerAfterSnapshot: 'lobby', hostAfterReturnSnapshot: 'game', afterPhaseChange: ['results', 'results']
      });
      for (const page of [r.host, ...r.players]) assert.deepEqual(page.errors, []);
    } finally { await r.close(); }
  });
});

describe('Teamwork drop-based HUD (F-009)', skipReason ? { skip: skipReason } : {}, () => {
  test('shows landings rather than a countdown and retains a forfeited effect as pending', async () => {
    const r = await startRoom('teamwork');
    try {
      const engine = r.room.engine;
      const target = engine.game.team.currentPlayerId;
      const targetName = r.room.players.find(p => p.id === target).name;
      const page = r.players[targetName === 'Ann' ? 0 : 1];
      const effect = engine.addEffect('portal', target, Date.now());
      effect.startedAt -= 12000;
      engine.changed('game.state'); await sleep(350);
      assert.equal(page.document.getElementById('effect-time').textContent, '3 drops left');
      assert.equal(page.document.getElementById('effect-meter-fill').style.width, '100%');
      await sleep(1100);
      assert.equal(page.document.getElementById('effect-time').textContent, '3 drops left');
      engine.forfeitTeamTurn(Date.now()); await sleep(350);
      assert.equal(page.document.getElementById('effect-time').textContent, 'Pending · 3 drops left');
      assert.match(page.document.getElementById('sabotage-list').textContent, /Teamwork: lasts for 3 affected landings without a time limit/);
      assert.deepEqual(page.errors, []);
    } finally { await r.close(); }
  });
});

describe('Teamwork idle controls (F-010)', skipReason ? { skip: skipReason } : {}, () => {
  test('host can skip, timeout marks idle, and player can return explicitly', async () => {
    const r = await startRoom('teamwork');
    try {
      const engine = r.room.engine, team = engine.game.team;
      engine.game.nextVoteAt = 100000;
      const firstId = team.currentPlayerId;
      const firstName = r.room.players.find(p => p.id === firstId).name;
      const firstPage = r.players[firstName === 'Ann' ? 0 : 1];
      assert.equal(r.host.document.getElementById('team-skip-button').hidden, false);
      assert.equal(firstPage.document.getElementById('team-skip-button').hidden, true);
      r.host.document.getElementById('team-skip-button').click(); await sleep(300);
      assert.notEqual(team.currentPlayerId, firstId);
      assert.equal(engine.player(firstId).teamIdle, false);
      team.turnExpiresAt = Date.now() - 1;
      const idleId = team.currentPlayerId;
      const idleName = r.room.players.find(p => p.id === idleId).name;
      const idlePage = r.players[idleName === 'Ann' ? 0 : 1];
      engine.tick(Date.now() + 100); await sleep(400);
      assert.equal(engine.player(idleId).teamIdle, true);
      assert.equal(idlePage.document.getElementById('team-ready-button').hidden, false);
      assert.match(idlePage.document.getElementById('multiplayer-player-list').textContent, /Idle/);
      idlePage.document.getElementById('team-ready-button').click(); await sleep(300);
      assert.equal(engine.player(idleId).teamIdle, false);
      assert.equal(idlePage.document.getElementById('team-ready-button').hidden, true);
      for (const page of [r.host, ...r.players]) assert.deepEqual(page.errors, []);
    } finally { await r.close(); }
  });
});

describe('Multiplayer game announcements (F-011)', skipReason ? { skip: skipReason } : {}, () => {
  test('turns, votes, effect end, and repeated perfects are announced without live roster spam', async () => {
    const r = await startRoom('teamwork');
    try {
      const page = r.host, engine = r.room.engine, team = engine.game.team;
      for (const p of [r.host, ...r.players]) {
        const timer = p.window.setTimeout.bind(p.window);
        p.window.setTimeout = (fn, ms, ...args) => timer(fn, Math.min(ms, 20), ...args);
      }
      await sleep(1600); // Let any initial turn announcement finish before observing transitions.
      const region = page.document.getElementById('game-announcement');
      const messages = [];
      const observer = new page.window.MutationObserver(() => { if (region.textContent) messages.push(region.textContent); });
      observer.observe(region, { childList: true, subtree: true, characterData: true });
      const timer = page.window.setTimeout.bind(page.window);
      page.window.setTimeout = (fn, ms, ...args) => timer(fn, Math.min(ms, 20), ...args);
      assert.equal(page.document.getElementById('multiplayer-player-list').hasAttribute('aria-live'), false);
      assert.equal(page.document.getElementById('room-player-list').hasAttribute('aria-live'), false);
      engine.game.nextVoteAt = 100000;
      engine.hostSkipTeamTurn(team.turnId, Date.now()); await sleep(150);
      assert.ok(messages.some(text => text.includes('turn.')));
      const turnCount = messages.filter(text => text.includes('turn.')).length;
      engine.changed('game.state'); engine.changed('game.state'); await sleep(150);
      assert.equal(messages.filter(text => text.includes('turn.')).length, turnCount, 'unchanged snapshots do not repeat turns');
      team.turnActive = false; team.currentPlayerId = null;
      engine.openVote(Date.now()); await sleep(120);
      const options = engine.game.vote.options.map(id => page.window.SabotageStack.sabotages.find(item => item.id === id).name);
      assert.ok(messages.some(text => text.startsWith('Vote open.') && options.every(name => text.includes(name))));
      engine.resolveVote(Date.now()); await sleep(200);
      assert.ok(messages.some(text => text.startsWith('Vote winner:') && text.includes('In Teamwork')));
      const id = engine.game.activeEffects[0].id;
      engine.game.activeEffects = []; engine.changed('game.state'); await sleep(150);
      const name = page.window.SabotageStack.sabotages.find(item => item.id === id).name;
      assert.ok(messages.includes(`${name} ended.`));
      const playerPage = r.players[0];
      const playerRegion = playerPage.document.getElementById('game-announcement');
      const repeated = [];
      const playerObserver = new playerPage.window.MutationObserver(() => { if (playerRegion.textContent) repeated.push(playerRegion.textContent); });
      playerObserver.observe(playerRegion, { childList: true, subtree: true });
      const playerTimer = playerPage.window.setTimeout.bind(playerPage.window);
      playerPage.window.setTimeout = (fn, ms, ...args) => playerTimer(fn, Math.min(ms, 20), ...args);
      const playerId = r.room.players[0].id;
      r.app.roomManager.broadcast(r.room, { type: 'block.perfect', playerId, height: 4 });
      r.app.roomManager.broadcast(r.room, { type: 'block.perfect', playerId, height: 4 });
      await sleep(400);
      assert.equal(repeated.filter(text => text === 'Perfect drop. Height 4.').length, 2);
      observer.disconnect(); playerObserver.disconnect();
      for (const p of [r.host, ...r.players]) assert.deepEqual(p.errors, []);
    } finally { await r.close(); }
  });
});

describe('Teamwork turn warning (F-011)', skipReason ? { skip: skipReason } : {}, () => {
  test('announces three seconds once for the active player despite repeated snapshots', async () => {
    const r = await startRoom('teamwork');
    try {
      const engine = r.room.engine, team = engine.game.team;
      const playerName = r.room.players.find(player => player.id === team.currentPlayerId).name;
      const page = r.players[playerName === 'Ann' ? 0 : 1];
      await sleep(1500);
      const timer = page.window.setTimeout.bind(page.window);
      page.window.setTimeout = (fn, ms, ...args) => timer(fn, Math.min(ms, 20), ...args);
      const region = page.document.getElementById('game-announcement');
      const messages = [];
      const observer = new page.window.MutationObserver(() => { if (region.textContent) messages.push(region.textContent); });
      observer.observe(region, { childList: true, subtree: true });
      team.turnExpiresAt = Date.now() + 2800;
      engine.changed('game.state'); await sleep(350);
      engine.changed('game.state'); await sleep(350);
      assert.equal(messages.filter(text => text === 'Three seconds left in your turn.').length, 1);
      assert.deepEqual(page.errors, []);
      observer.disconnect();
    } finally { await r.close(); }
  });
});

describe('Host absence recovery (F-015)', skipReason ? { skip: skipReason } : {}, () => {
  test('players see host absence, skipped votes, and a player rematch after the grace period', async () => {
    const r = await startRoom('competitive');
    try {
      const engine = r.room.engine, page = r.players[0];
      engine.openVote(Date.now()); await sleep(120);
      assert.ok(engine.game.vote);
      r.app.roomManager.disconnect(r.room.host.socket); await sleep(250);
      assert.equal(engine.game.vote, null);
      assert.equal(page.document.getElementById('multiplayer-host-status').hidden, false);
      assert.match(page.document.getElementById('multiplayer-host-status').textContent, /Host disconnected.*votes are skipped/);
      assert.match(page.document.getElementById('vote-countdown').textContent, /Voting paused/);
      engine.finishCompetitiveRound(Date.now()); await sleep(300);
      assert.equal(page.document.body.dataset.screen, 'results');
      assert.match(page.document.getElementById('results-host-status').textContent, /10 seconds/);
      let button = page.document.querySelector('.multiplayer-result-actions .button-primary');
      assert.equal(button.disabled, true);
      r.room.host.disconnectedAt -= 10000;
      r.app.roomManager.tick(); await sleep(300);
      assert.match(page.document.getElementById('results-host-status').textContent, /Any connected player can start a rematch/);
      button = page.document.querySelector('.multiplayer-result-actions .button-primary');
      assert.equal(button.disabled, false);
      button.click(); await sleep(350);
      assert.equal(r.room.phase, 'playing');
      assert.equal(r.room.roundNumber, 2);
      assert.equal(page.document.body.dataset.screen, 'game');
      assert.match(page.document.getElementById('multiplayer-host-status').textContent, /Host disconnected/);
      for (const p of r.players) assert.deepEqual(p.errors, []);
    } finally { await r.close(); }
  });
});

describe('Room reduced motion (F-017)', skipReason ? { skip: skipReason } : {}, () => {
  test('one player can reduce the room and changing back restores full mode when nobody else requests it', async () => {
    const r = await startRoom('competitive');
    try {
      const select = r.players[0].document.getElementById('motion-select');
      select.value = 'reduced'; select.dispatchEvent(new r.players[0].window.Event('change', { bubbles: true }));
      await sleep(300);
      assert.equal(r.room.players[0].reducedMotion, true);
      assert.equal(r.app.roomManager.snapshot(r.room).reducedMotion, true);
      for (const page of [r.host, ...r.players]) {
        assert.equal(page.document.documentElement.dataset.motion, 'reduced');
        assert.equal(page.document.getElementById('multiplayer-motion-status').hidden, false);
        assert.equal(page.document.getElementById('room-motion-status').hidden, false);
        assert.match(page.document.getElementById('sabotage-guide-summary').textContent, /11 of 16/);
      }
      for (const id of r.host.window.SabotageStack.Core.REDUCED_MOTION_EXCLUDED_IDS) assert.ok(!r.room.engine.votePool().includes(id));
      const otherSelect = r.players[1].document.getElementById('motion-select');
      otherSelect.value = 'reduced'; otherSelect.dispatchEvent(new r.players[1].window.Event('change', { bubbles: true }));
      await sleep(150);
      select.value = 'full'; select.dispatchEvent(new r.players[0].window.Event('change', { bubbles: true }));
      await sleep(200);
      assert.equal(r.room.players[0].reducedMotion, false, 'the room setting is not sent back as the personal preference');
      assert.equal(r.app.roomManager.snapshot(r.room).reducedMotion, true, 'the other player still requests reduced motion');
      otherSelect.value = 'full'; otherSelect.dispatchEvent(new r.players[1].window.Event('change', { bubbles: true }));
      await sleep(300);
      assert.equal(r.app.roomManager.snapshot(r.room).reducedMotion, false);
      for (const page of [r.host, ...r.players]) {
        assert.equal(page.document.documentElement.dataset.motion, 'full');
        assert.equal(page.document.getElementById('multiplayer-motion-status').hidden, true);
        assert.deepEqual(page.errors, []);
      }
    } finally { await r.close(); }
  });
});

describe('Room delta recovery (F-023)', skipReason ? { skip: skipReason } : {}, () => {
  test('a client detecting a missing revision requests a full baseline and keeps receiving updates', async () => {
    const r = await startRoom('competitive');
    try {
      const socket = r.room.host.socket; const originalSend = socket.send.bind(socket); const sent = [];
      socket.send = (data, ...args) => { sent.push(JSON.parse(String(data))); return originalSend(data, ...args); };
      const revision = r.room.stateRevision;
      socket.send(JSON.stringify({ type: 'room.delta', baseRevision: revision + 10, revision: revision + 11, changes: [] }));
      await sleep(300);
      assert.ok(sent.some(message => message.type === 'room.state' && message.state.revision >= revision), 'full recovery snapshot was sent');
      r.room.engine.addEffect('turbo', r.room.players[0].id, Date.now()); r.room.engine.changed('game.state');
      await sleep(300);
      assert.match(r.host.document.getElementById('motion-chip').textContent, /TURBO/i);
      assert.deepEqual(r.host.errors, []);
    } finally { await r.close(); }
  });
});

describe('Mode-specific HUD copy (F-026)', skipReason ? { skip: skipReason } : {}, () => {
  for (const mode of ['teamwork', 'competitive']) test(`${mode}: labels, host view, and perfect toast match the mode`, async () => {
    const r = await startRoom(mode);
    try {
      const hd = r.host.document; const pd = r.players[0].document;
      assert.equal(hd.getElementById('game-stage').classList.contains('competitive-host'), mode === 'competitive');
      assert.match(hd.getElementById('control-help').textContent, mode === 'competitive' ? /Watch the stacks/ : /Take turns/);
      assert.equal(hd.getElementById('multiplayer-turn-timer-label').textContent, mode === 'competitive' ? 'Round timer' : 'Turn timer');
      const id = r.room.players[0].id;
      r.room.players[0].socket.send(JSON.stringify({ type: 'block.perfect', playerId: id, height: 1 }));
      await sleep(100);
      assert.equal(pd.getElementById('canvas-toast').textContent, mode === 'teamwork' ? 'PERFECT DROP · +1 TEAM BONUS' : 'PERFECT DROP');
      assert.doesNotMatch(pd.getElementById('motion-chip').textContent, /(\d+ PX\/S) · \1/);
      if (mode === 'competitive') {
        for (const competitor of r.room.engine.game.competitors) { competitor.collapsed = true; competitor.ended = true; }
        r.room.engine.finishCompetitiveRound(Date.now()); await sleep(250);
        assert.doesNotMatch(hd.getElementById('results-heading').textContent, /survived/);
      }
      for (const page of [r.host, ...r.players]) assert.deepEqual(page.errors, []);
    } finally { await r.close(); }
  });
});

describe('Position updates stop for inactive players (A-01)', skipReason ? { skip: skipReason } : {}, () => {
  test('Competitive stops after a stack ends and remains stopped after results', async () => {
    const r = await startRoom('competitive');
    try {
      const manager = r.app.roomManager; const original = manager.receive.bind(manager); let positions = 0;
      const targetSocket = r.room.players[0].socket;
      manager.receive = (socket, raw, ...args) => {
        if (socket === targetSocket) { try { if (JSON.parse(String(raw)).type === 'player.position') positions++; } catch (_) {} }
        return original(socket, raw, ...args);
      };
      await sleep(300); assert.ok(positions > 0, 'active player sends position updates');
      const competitor = r.room.engine.game.competitors.find(c => c.playerId === r.room.players[0].id);
      competitor.ended = true; competitor.collapsed = true; r.room.engine.changed('game.state');
      await sleep(250); const stopped = positions; await sleep(400);
      assert.equal(positions, stopped, 'ended stack stops sending positions');
      r.room.engine.finishCompetitiveRound(Date.now()); await sleep(250); const results = positions; await sleep(400);
      assert.equal(positions, results, 'results screen does not send positions');
      assert.deepEqual(r.players[0].errors, []);
    } finally { await r.close(); }
  });
  test('Teamwork stops positions after the round ends', async () => {
    const r = await startRoom('teamwork');
    try {
      const manager = r.app.roomManager; const original = manager.receive.bind(manager); let positions = 0;
      manager.receive = (socket, raw, ...args) => {
        try { if (JSON.parse(String(raw)).type === 'player.position') positions++; } catch (_) {}
        return original(socket, raw, ...args);
      };
      await sleep(300); assert.ok(positions > 0);
      r.room.engine.finishTeamRound(Date.now()); await sleep(250); const stopped = positions; await sleep(400);
      assert.equal(positions, stopped);
      for (const page of r.players) assert.deepEqual(page.errors, []);
    } finally { await r.close(); }
  });
});
