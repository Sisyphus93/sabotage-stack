'use strict';
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');

let boot = null; let skipReason = null;
try { ({ boot } = require('./helpers/client-harness')); } catch (error) { skipReason = `jsdom / @napi-rs/canvas not installed (run npm install): ${error.message}`; }
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
