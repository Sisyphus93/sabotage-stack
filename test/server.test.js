'use strict';
const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const net = require('node:net');
const path = require('node:path');
const { spawn } = require('node:child_process');
const WebSocket = require('ws');
const { createGameServer } = require('../server');
const { RoomManager } = require('../server/room-manager');
const { rng } = require('./helpers/rng');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
function connect(url, headers) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(url, { headers }); const inbox = [];
    ws.on('message', m => inbox.push(JSON.parse(m)));
    ws.on('open', () => resolve({ ws, inbox, send: o => ws.send(JSON.stringify(o)) }));
    ws.on('error', reject);
  });
}
async function listen() {
  const app = createGameServer({ onError: () => {} });
  await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
  return { app, url: `ws://127.0.0.1:${app.server.address().port}/ws`, port: app.server.address().port };
}

describe('Cold-start compression is coalesced (P2-3)', () => {
  test('100 concurrent cold requests share one compression per encoding', async () => {
    const zlib = require('node:zlib');
    const counts = { sync: 0, async: 0 };
    const originals = {};
    for (const [name, kind] of [['gzipSync', 'sync'], ['brotliCompressSync', 'sync'], ['gzip', 'async'], ['brotliCompress', 'async']]) {
      originals[name] = zlib[name];
      zlib[name] = function (...args) { counts[kind] += 1; return originals[name].apply(this, args); };
    }
    const app = createGameServer({ onError: () => {} });
    try {
      await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
      const port = app.server.address().port;
      const burst = encoding => Promise.all(Array.from({ length: 100 }, () => new Promise(resolve => {
        const request = require('node:http').get({ host: '127.0.0.1', port, path: '/public/stack3d.js', headers: { 'accept-encoding': encoding } }, response => {
          const chunks = []; response.on('data', chunk => chunks.push(chunk));
          response.on('end', () => resolve({ status: response.statusCode, encoding: response.headers['content-encoding'], bytes: Buffer.concat(chunks).length, length: Number(response.headers['content-length']) }));
        });
        request.on('error', () => resolve({ status: 0 }));
      })));
      const gzip = await burst('gzip');
      assert.equal(counts.async, 1, `one gzip for the burst, got ${counts.async}`);
      assert.equal(counts.sync, 0, 'nothing on the request path is synchronous');
      assert.ok(gzip.every(r => r.status === 200 && r.encoding === 'gzip'));
      assert.equal(new Set(gzip.map(r => r.bytes)).size, 1, 'every response is byte-identical');
      assert.equal(gzip[0].bytes, gzip[0].length, 'Content-Length matches the body');
      const br = await burst('br');
      assert.equal(counts.async, 2, 'one brotli for the second burst');
      assert.ok(br.every(r => r.status === 200 && r.encoding === 'br'));
      assert.ok(br[0].bytes < gzip[0].bytes, 'brotli is the smaller one');
      // warm requests never compress again
      await burst('gzip');
      assert.equal(counts.async, 2, 'a warm burst compresses nothing');
      // ETag and HEAD behaviour is unchanged
      const head = await new Promise(resolve => {
        const request = require('node:http').request({ host: '127.0.0.1', port, path: '/public/stack3d.js', method: 'HEAD', headers: { 'accept-encoding': 'gzip' } }, response => {
          response.resume(); resolve({ status: response.statusCode, etag: response.headers.etag, vary: response.headers.vary, length: Number(response.headers['content-length']), encoding: response.headers['content-encoding'] });
        });
        request.end();
      });
      assert.equal(head.status, 200);
      assert.equal(head.vary, 'Accept-Encoding');
      assert.equal(head.encoding, 'gzip');
      assert.ok(head.length > 0);
      const notModified = await new Promise(resolve => {
        const request = require('node:http').get({ host: '127.0.0.1', port, path: '/public/stack3d.js', headers: { 'accept-encoding': 'gzip', 'if-none-match': head.etag } }, response => { response.resume(); resolve(response.statusCode); });
        request.on('error', () => resolve(0));
      });
      assert.equal(notModified, 304);
    } finally {
      for (const [name, fn] of Object.entries(originals)) zlib[name] = fn;
      await app.close();
    }
  });
});

describe('HTTP hardening', () => {
  test('malformed request targets get a 400 and never crash the process', async () => {
    const port = 20000 + Math.floor(Math.random() * 20000);
    const child = spawn(process.execPath, [path.join(__dirname, '..', 'server.js')], { env: { ...process.env, PORT: String(port) }, stdio: 'ignore' });
    let exited = false; child.on('exit', () => { exited = true; });
    try {
      const request = target => new Promise(resolve => {
        const socket = net.connect(port, '127.0.0.1', () => socket.write(`GET ${target} HTTP/1.1\r\nHost: x\r\nConnection: close\r\n\r\n`));
        let body = ''; socket.on('data', d => { body += d; }); socket.on('error', () => resolve('ERR')); socket.on('close', () => resolve(body.split('\r\n')[0]));
        setTimeout(() => socket.destroy(), 1500);
      });
      for (let i = 0; i < 40 && !(await request('/healthz')).includes('200'); i += 1) await sleep(100);
      for (const target of ['//', '//[', '//a:b@', 'http://[::1', '//%', '*']) {
        assert.match(await request(target), /400|404/, `target ${target}`);
        assert.equal(exited, false, `server died on ${target}`);
      }
      assert.match(await request('/healthz'), /200/);
    } finally { child.kill(); }
  });
  test('cross-origin WebSocket upgrades are refused', async () => {
    const { app, url } = await listen();
    try { await assert.rejects(connect(url, { Origin: 'http://evil.example' })); } finally { await app.close(); }
  });
});

describe('connection handover', () => {
  test('a superseded socket closing late does not disconnect the player or mute the host', async () => {
    const { app, url } = await listen();
    try {
      const host = await connect(url); host.send({ type: 'room.create', mode: 'competitive' }); await sleep(100);
      const created = host.inbox.find(m => m.type === 'room.created');
      const ann = await connect(url); ann.send({ type: 'room.join', code: created.code, name: 'Ann' }); await sleep(60);
      const bob = await connect(url); bob.send({ type: 'room.join', code: created.code, name: 'Bob' }); await sleep(60);
      const annToken = ann.inbox.find(m => m.type === 'room.joined').resumeToken;
      host.send({ type: 'round.start' }); await sleep(150);
      const room = app.roomManager.rooms.get(created.code); const player = room.players.find(p => p.name === 'Ann');
      const annNew = await connect(url); annNew.send({ type: 'room.resume', code: created.code, resumeToken: annToken }); await sleep(100);
      ann.ws.terminate(); await sleep(150);
      assert.equal(player.connected, true);
      const competitor = room.engine.game.competitors.find(c => c.playerId === player.id);
      assert.equal(competitor.ended, false); assert.equal(competitor.disconnected, false);
      const hostNew = await connect(url); hostNew.send({ type: 'room.resume', code: created.code, resumeToken: created.resumeToken }); await sleep(100);
      host.ws.terminate(); await sleep(150);
      assert.equal(room.host.connected, true);
      const before = hostNew.inbox.length; await sleep(500);
      assert.ok(hostNew.inbox.length - before >= 3, 'new host socket should keep receiving position updates');
      for (const c of [annNew, bob, hostNew]) c.ws.terminate();
    } finally { await app.close(); }
  });
  test('a genuinely closed (current) socket still marks the player disconnected', async () => {
    const { app, url } = await listen();
    try {
      const host = await connect(url); host.send({ type: 'room.create', mode: 'teamwork' }); await sleep(100);
      const code = host.inbox.find(m => m.type === 'room.created').code;
      const ann = await connect(url); ann.send({ type: 'room.join', code, name: 'Ann' }); await sleep(80);
      ann.ws.terminate(); await sleep(150);
      assert.equal(app.roomManager.rooms.get(code).players[0].connected, false);
      host.ws.terminate();
    } finally { await app.close(); }
  });
});

describe('Competitive disconnect grace (F-006)', () => {
  test('a player can resume before the grace deadline and continue their frozen stack', async () => {
    const { app, url } = await listen();
    let host; let player; let other; let resumed;
    try {
      host = await connect(url);
      host.send({ type: 'room.create', mode: 'competitive' });
      await sleep(80);
      const created = host.inbox.find(message => message.type === 'room.created');

      player = await connect(url);
      player.send({ type: 'room.join', code: created.code, name: 'Ada' });
      await sleep(80);
      const joined = player.inbox.find(message => message.type === 'room.joined');
      other = await connect(url);
      other.send({ type: 'room.join', code: created.code, name: 'Bo' });
      await sleep(80);
      host.send({ type: 'round.start' });
      await sleep(120);

      const room = app.roomManager.rooms.get(created.code);
      const roomPlayer = room.players.find(item => item.id === joined.playerId);
      const competitor = room.engine.game.competitors.find(item => item.playerId === joined.playerId);
      const stackHeight = competitor.stack.length;
      player.ws.terminate();
      await sleep(120);
      assert.equal(roomPlayer.connected, false);
      assert.equal(competitor.ended, false, 'the Competitive stack remains active during the grace window');
      assert.equal(competitor.disconnected, true);
      assert.equal(roomPlayer.ended, false);
      const frozenLeft = competitor.moving.left;
      await sleep(120);
      assert.equal(competitor.moving.left, frozenLeft, 'the mover must stay frozen while its player is offline');

      resumed = await connect(url);
      resumed.send({ type: 'room.resume', code: created.code, resumeToken: joined.resumeToken });
      await sleep(120);
      assert.equal(roomPlayer.connected, true);
      assert.equal(competitor.ended, false);
      assert.equal(competitor.disconnected, false);
      assert.equal(competitor.disconnectDeadline, null);
      assert.equal(competitor.stack.length, stackHeight, 'reconnecting must preserve the tower height');
      assert.equal(room.engine.connectedPlayer(joined.playerId), roomPlayer);
      await sleep(120);
      assert.notEqual(competitor.moving.left, frozenLeft, 'the mover continues after the player resumes');
    } finally {
      for (const client of [host, player, other, resumed]) if (client && client.ws.readyState < 2) client.ws.terminate();
      await app.close();
    }
  });
});

describe('Teamwork vote routing (F-008)', () => {
  function makeRoom(mode) {
    const time = 1e9;
    const manager = new RoomManager({ now: () => time, random: rng(mode === 'teamwork' ? 31 : 32), idleLimitMs: 1e12 });
    const socket = () => ({ readyState: 1, sent: [], send(message) { this.sent.push(JSON.parse(message)); } });
    const host = socket(); const players = [socket(), socket()];
    manager.connect(host); players.forEach(player => manager.connect(player));
    manager.receive(host, JSON.stringify({ type: 'room.create', mode }));
    const code = host.sent.find(message => message.type === 'room.created').code;
    players.forEach((player, index) => manager.receive(player, JSON.stringify({ type: 'room.join', code, name: `P${index}` })));
    manager.receive(host, JSON.stringify({ type: 'round.start' }));
    return { manager, host, players, room: manager.rooms.get(code) };
  }

  test('authenticated Teamwork players cast one changeable ballot and the host records a separate tie-break', () => {
    const setup = makeRoom('teamwork');
    const { manager, host, players, room } = setup;
    const engine = room.engine;
    engine.game.team.turnActive = false;
    engine.game.team.currentPlayerId = null;
    engine.game.team.turnExpiresAt = null;
    engine.openVote(setup.manager.now());
    const [first, second] = engine.game.vote.options;
    engine.game.team.turnActive = true;
    engine.game.team.currentPlayerId = room.players[0].id;
    manager.receive(players[0], JSON.stringify({ type: 'vote.cast', option: first }));
    assert.equal(players[0].sent.at(-1).code, 'PLAYER_ON_TURN');
    assert.equal(engine.game.vote.votes.size, 0);
    engine.game.team.turnActive = false;
    engine.game.team.currentPlayerId = null;

    manager.receive(players[0], JSON.stringify({ type: 'vote.cast', option: first }));
    manager.receive(players[0], JSON.stringify({ type: 'vote.cast', option: second }));
    manager.receive(players[1], JSON.stringify({ type: 'vote.cast', option: first }));
    assert.equal(engine.game.vote.votes.size, 2, 'changing a choice does not add another ballot');
    assert.deepEqual(Object.values(engine.snapshot().vote.counts).sort(), [0, 1, 1]);

    manager.receive(host, JSON.stringify({ type: 'vote.cast', option: first }));
    assert.equal(engine.game.vote.votes.size, 2, 'the host tie-break is not an extra player vote');
    assert.equal(engine.snapshot().vote.hostTiebreak, first);
    engine.resolveVote(setup.manager.now());
    assert.equal(engine.game.lastVote.winner, first);
    assert.equal(engine.game.lastVote.tiebreak, 'host');
  });

  test('Competitive accepts one changeable host ballot and rejects player ballots', () => {
    const { manager, host, players, room } = makeRoom('competitive');
    const engine = room.engine;
    engine.openVote(manager.now());
    const [first, second] = engine.game.vote.options;
    manager.receive(players[0], JSON.stringify({ type: 'vote.cast', option: first }));
    assert.equal(players[0].sent.at(-1).code, 'HOST_ONLY', 'a Competitive player keeps the original host-only route');
    manager.receive(host, JSON.stringify({ type: 'vote.cast', option: first }));
    manager.receive(host, JSON.stringify({ type: 'vote.cast', option: second }));
    assert.equal(engine.game.vote.votes.size, 1, 'host changes the existing ballot');
    assert.equal(engine.snapshot().vote.hostChoice, second);
    assert.equal(engine.snapshot().vote.counts[first], 0);
    assert.equal(engine.snapshot().vote.counts[second], 1);
    assert.equal(Object.hasOwn(engine.snapshot().vote, 'hostTiebreak'), false);
  });
});

describe('abuse limits', () => {
  const socket = () => ({ readyState: 1, sent: [], closed: false, send(m) { this.sent.push(JSON.parse(m)); }, close() { this.closed = true; } });
  test('legitimate traffic (20 msg/s, plus a 150-message burst) is never limited', () => {
    let t = 1e9; const rm = new RoomManager({ now: () => t, random: rng(2), idleLimitMs: 1e12 }); const s = socket(); rm.connect(s);
    for (let i = 0; i < 600; i += 1) { t += 50; rm.receive(s, JSON.stringify({ type: 'client.ping' })); }
    for (let i = 0; i < 150; i += 1) rm.receive(s, JSON.stringify({ type: 'client.ping' }));
    assert.equal(s.sent.some(m => m.code === 'RATE_LIMITED'), false); assert.equal(s.closed, false);
  });
  test('a flood is dropped, the offender is closed, other sockets are unaffected', () => {
    let t = 1e9; const rm = new RoomManager({ now: () => t, random: rng(2), idleLimitMs: 1e12 }); const s = socket(); const other = socket(); rm.connect(s); rm.connect(other);
    for (let i = 0; i < 5000; i += 1) rm.receive(s, JSON.stringify({ type: 'client.ping' }));
    assert.ok(s.sent.some(m => m.code === 'RATE_LIMITED')); assert.equal(s.closed, true);
    const before = other.sent.length; rm.receive(other, JSON.stringify({ type: 'client.ping' })); assert.ok(other.sent.length > before);
  });
  test('room creation is capped', () => {
    const rm = new RoomManager({ now: () => 1e9, random: rng(4), idleLimitMs: 1e12, maxRooms: 3 });
    const socks = Array.from({ length: 5 }, socket); socks.forEach(s => rm.connect(s));
    socks.forEach(s => rm.receive(s, JSON.stringify({ type: 'room.create', mode: 'teamwork' })));
    assert.equal(rm.rooms.size, 3);
    assert.equal(socks.flatMap(s => s.sent).filter(m => m.code === 'SERVER_BUSY').length, 2);
  });
});

describe('broadcast', () => {
  test('one serialisation per broadcast, however many seats, and every seat gets identical bytes', () => {
    const rm = new RoomManager({ now: () => 1_000_000, random: rng(64), idleLimitMs: 1e12 });
    const mk = () => ({ readyState: 1, frames: [], send(text) { this.frames.push(text); } });
    const host = mk(); rm.connect(host); rm.receive(host, JSON.stringify({ type: 'room.create', mode: 'competitive' }));
    const code = [...rm.rooms.keys()][0];
    const players = [];
    for (let i = 0; i < 6; i += 1) { const socket = mk(); rm.connect(socket); rm.receive(socket, JSON.stringify({ type: 'room.join', code, name: `P${i}` })); players.push(socket); }
    const spectators = [];
    for (let i = 0; i < 15; i += 1) { const socket = mk(); rm.connect(socket); rm.receive(socket, JSON.stringify({ type: 'room.join', code, name: `S${i}`, spectate: true })); spectators.push(socket); }
    const room = rm.rooms.get(code);
    const seats = [host, ...players, ...spectators];
    assert.equal(seats.length, 22);
    const original = JSON.stringify;
    let calls = 0;
    const mark = () => seats.forEach(socket => { socket.mark = socket.frames.length; });
    JSON.stringify = (...args) => { calls += 1; return original(...args); };
    try {
      mark();
      rm.broadcast(room, { type: 'room.state', state: { revision: 1 } });
      assert.equal(calls, 1, `broadcast serialised ${calls} times`);
    } finally { JSON.stringify = original; }
    const delivered = seats.map(socket => socket.frames.slice(socket.mark));
    assert.ok(delivered.every(frames => frames.length === 1), 'one frame each');
    assert.equal(new Set(delivered.map(frames => frames[0])).size, 1, 'byte-identical to every seat');
    // the delta path builds its two candidate texts once. Count only what broadcastDelta itself serialises: a round
    // snapshot also clones the game with JSON (round-engine.js clone), which is not part of this change.
    rm.receive(host, JSON.stringify({ type: 'round.start' }));
    room.engine.changed('game.state');
    const ownCalls = [];
    JSON.stringify = (...args) => {
      // the caller of JSON.stringify itself, not something nested below it (the engine clones its snapshot with JSON)
      const caller = new Error().stack.split('\n')[2] || '';
      if (caller.includes('RoomManager.broadcastDelta')) ownCalls.push(caller.trim());
      return original(...args);
    };
    try { room.engine.changed('game.state'); } finally { JSON.stringify = original; }
    assert.equal(ownCalls.length, 2, `broadcastDelta serialised ${ownCalls.length} times`);
  });

  test('one state change sends one reconstructable delta per socket, with full recovery available', () => {
    let t = 1e9; const rm = new RoomManager({ now: () => t, random: rng(3), idleLimitMs: 1e12 });
    const mk = () => ({ readyState: 1, sent: [], send(m) { this.sent.push(JSON.parse(m)); } });
    const host = mk(); const players = [mk(), mk()]; rm.connect(host); players.forEach(p => rm.connect(p));
    rm.receive(host, JSON.stringify({ type: 'room.create', mode: 'competitive' }));
    const code = [...rm.rooms.keys()][0];
    players.forEach((p, i) => rm.receive(p, JSON.stringify({ type: 'room.join', code, name: 'P' + i })));
    rm.receive(host, JSON.stringify({ type: 'round.start' }));
    for (const s of [host, ...players]) s.sent.length = 0;
    rm.rooms.get(code).engine.changed('game.state');
    for (const s of [host, ...players]) {
      assert.equal(s.sent.length, 1); assert.equal(s.sent[0].type, 'room.delta');
      assert.ok(Array.isArray(s.sent[0].changes));
      rm.receive(s, JSON.stringify({ type: 'room.sync' }));
      assert.equal(s.sent[1].type, 'room.state');
      assert.equal(s.sent[1].state.revision, s.sent[0].revision);
      assert.equal(s.sent[1].state.game.phase, 'playing');
    }
  });
});

describe('message handler fuzz', () => {
  test('30,000 hostile messages never throw', () => {
    const r = rng(12345); let t = 1e9;
    const nasty = () => [null, 0, -1, 1e308, NaN, '', 'x', '__proto__', 'ABCD', 'a'.repeat(5000), '\u202e', [], [1], {}, { a: 1 }, true, 359.99, 360, -0.0001, '5'][Math.floor(r() * 20)];
    const types = ['room.create', 'room.join', 'room.resume', 'client.preferences', 'round.start', 'round.rematch', 'room.leave', 'room.close', 'player.position', 'player.drop', 'vote.cast', 'client.ping', 'nope', undefined, null, 5, {}];
    const fields = ['mode', 'code', 'name', 'resumeToken', 'reducedMotion', 'x', 'sequence', 'turnId', 'requestId', 'auto', 'option', 'width', 'type'];
    for (const mode of ['teamwork', 'competitive']) for (let round = 0; round < 3; round += 1) {
      const rm = new RoomManager({ now: () => t, random: rng(round + 1), idleLimitMs: 1e12, messageBurst: 1e9, messageRefillPerSecond: 1e9 });
      const mk = () => ({ readyState: 1, send() {} }); const host = mk(); const ps = [mk(), mk(), mk()]; rm.connect(host); ps.forEach(p => rm.connect(p));
      rm.receive(host, JSON.stringify({ type: 'room.create', mode })); const code = [...rm.rooms.keys()][0];
      ps.forEach((p, i) => rm.receive(p, JSON.stringify({ type: 'room.join', code, name: 'P' + i }))); rm.receive(host, JSON.stringify({ type: 'round.start' }));
      const socks = [host, ...ps, mk()];
      for (let i = 0; i < 5000; i += 1) {
        t += Math.floor(r() * 120); if (r() < 0.3) rm.tick();
        const m = { type: types[Math.floor(r() * types.length)] }; for (let k = Math.floor(r() * 6); k > 0; k -= 1) m[fields[Math.floor(r() * fields.length)]] = nasty();
        rm.receive(socks[Math.floor(r() * socks.length)], r() < 0.05 ? '{bad json' : JSON.stringify(m));
        if (r() < 0.02) rm.disconnect(socks[Math.floor(r() * socks.length)]);
      }
    }
  });
});

describe('Teamwork idle controls authorization (F-010)', () => {
  test('only the host can skip and only the idle player can mark themselves ready', async () => {
    const { app, url } = await listen();
    const clients = [];
    try {
      const host = await connect(url); clients.push(host); host.send({ type: 'room.create', mode: 'teamwork' }); await sleep(80);
      const code = host.inbox.find(m => m.type === 'room.created').code;
      const a = await connect(url); clients.push(a); a.send({ type: 'room.join', code, name: 'Ada' }); await sleep(80);
      const b = await connect(url); clients.push(b); b.send({ type: 'room.join', code, name: 'Bea' }); await sleep(80);
      host.send({ type: 'round.start' }); await sleep(100);
      const engine = app.roomManager.rooms.get(code).engine, team = engine.game.team;
      const turn = team.turnId, current = team.currentPlayerId;
      a.send({ type: 'team.skip', turnId: turn }); await sleep(100);
      assert.equal(team.turnId, turn);
      assert.ok(a.inbox.some(m => m.type === 'error' && m.code === 'HOST_ONLY'));
      host.send({ type: 'team.skip', turnId: turn }); await sleep(100);
      assert.notEqual(team.currentPlayerId, current);
      host.send({ type: 'team.skip', turnId: turn }); await sleep(100);
      assert.ok(host.inbox.some(m => m.type === 'error' && m.code === 'TURN_NOT_ACTIVE'));
      const idleId = team.currentPlayerId;
      const idleClient = a.inbox.find(m => m.type === 'room.joined').playerId === idleId ? a : b;
      team.turnExpiresAt = Date.now() - 1;
      engine.tick(Date.now() + 100); await sleep(100);
      assert.equal(engine.player(idleId).teamIdle, true);
      host.send({ type: 'team.ready' }); await sleep(100);
      assert.equal(engine.player(idleId).teamIdle, true);
      idleClient.send({ type: 'team.ready' }); await sleep(100);
      assert.equal(engine.player(idleId).teamIdle, false);
    } finally { for (const client of clients) client.ws.terminate(); await app.close(); }
  });
});

describe('Host absence (F-015)', () => {
  function setup(mode) {
    const clock = { t: 1_000_000 };
    const manager = new RoomManager({ now: () => clock.t, random: rng(71), idleLimitMs: 1e12 });
    const socket = () => ({ readyState: 1, sent: [], send(message) { this.sent.push(JSON.parse(message)); } });
    const host = socket(), players = [socket(), socket()];
    manager.connect(host); players.forEach(player => manager.connect(player));
    manager.receive(host, JSON.stringify({ type: 'room.create', mode }));
    const created = host.sent.find(m => m.type === 'room.created');
    players.forEach((p, i) => manager.receive(p, JSON.stringify({ type: 'room.join', code: created.code, name: `P${i}` })));
    manager.receive(host, JSON.stringify({ type: 'round.start' }));
    return { manager, host, players, room: manager.rooms.get(created.code), created, clock, socket };
  }

  test('Competitive cancels a live vote, skips later votes, and resumes voting when the host returns', () => {
    const { manager, host, players, room, created, clock, socket } = setup('competitive');
    const engine = room.engine;
    engine.openVote(clock.t);
    manager.receive(host, JSON.stringify({ type: 'vote.cast', option: engine.game.vote.options[0] }));
    manager.disconnect(host);
    assert.equal(room.host.connected, false);
    assert.equal(engine.game.vote, null);
    assert.equal(engine.game.lastVote, null);
    assert.equal(engine.game.activeEffects.length, 0);
    assert.ok(players[0].sent.some(m => m.type === 'vote.cancelled'));
    clock.t += 12000; manager.tick();
    assert.equal(engine.game.vote, null, 'no vote opens while host is absent');
    assert.ok(engine.game.nextVoteAt > engine.game.elapsed, 'skipped vote advances the cadence');
    const replacement = socket(); manager.connect(replacement);
    manager.receive(replacement, JSON.stringify({ type: 'room.resume', code: created.code, resumeToken: created.resumeToken }));
    assert.equal(room.host.connected, true);
    assert.equal(engine.openVote(clock.t), true);
    manager.receive(replacement, JSON.stringify({ type: 'vote.cast', option: engine.game.vote.options[0] }));
    assert.equal(engine.game.vote.votes.size, 1);
  });

  test('Teamwork keeps player voting and removes the absent host tie-break', () => {
    const { manager, host, players, room, clock } = setup('teamwork');
    const engine = room.engine;
    engine.game.team.turnActive = false; engine.game.team.currentPlayerId = null;
    engine.openVote(clock.t);
    const [first, second] = engine.game.vote.options;
    manager.receive(host, JSON.stringify({ type: 'vote.cast', option: first }));
    manager.disconnect(host);
    assert.equal(engine.snapshot().vote.hostTiebreak, null);
    manager.receive(players[0], JSON.stringify({ type: 'vote.cast', option: second }));
    assert.equal(engine.snapshot().vote.counts[second], 1);
    engine.resolveVote(clock.t);
    assert.equal(engine.game.lastVote.winner, second);
  });

  test('a connected player can rematch after ten seconds, but reconnecting host restores exclusivity', () => {
    const { manager, host, players, room, created, clock, socket } = setup('competitive');
    room.engine.finishCompetitiveRound(clock.t);
    manager.disconnect(host);
    manager.receive(players[0], JSON.stringify({ type: 'round.rematch' }));
    assert.equal(players[0].sent.at(-1).code, 'HOST_ONLY');
    clock.t += 9999; manager.tick();
    assert.equal(manager.snapshot(room).canRematchWithoutHost, false);
    clock.t += 1; manager.tick();
    assert.equal(manager.snapshot(room).canRematchWithoutHost, true);
    assert.ok(players[0].sent.some(m => m.type === 'room.state' && m.state.canRematchWithoutHost));
    manager.receive(players[0], JSON.stringify({ type: 'round.rematch' }));
    assert.equal(room.phase, 'playing');
    assert.equal(room.roundNumber, 2);
    room.engine.finishCompetitiveRound(clock.t);
    const replacement = socket(); manager.connect(replacement);
    manager.receive(replacement, JSON.stringify({ type: 'room.resume', code: created.code, resumeToken: created.resumeToken }));
    assert.equal(manager.snapshot(room).canRematchWithoutHost, false);
    manager.receive(players[0], JSON.stringify({ type: 'round.rematch' }));
    assert.equal(players[0].sent.at(-1).code, 'HOST_ONLY');
    manager.receive(replacement, JSON.stringify({ type: 'round.rematch' }));
    assert.equal(room.roundNumber, 3);
  });
});

describe('Multiplayer minimum player count (F-016)', () => {
  for (const mode of ['teamwork', 'competitive']) {
    test(`${mode} requires two connected players in addition to the host`, () => {
      const manager = new RoomManager({ now: () => 10000, random: rng(82) });
      const socket = () => ({ readyState: 1, sent: [], send(message) { this.sent.push(JSON.parse(message)); } });
      const host = socket(), a = socket(), b = socket();
      manager.connect(host); manager.receive(host, JSON.stringify({ type: 'room.create', mode }));
      const code = host.sent.find(message => message.type === 'room.created').code;
      manager.connect(a); manager.receive(a, JSON.stringify({ type: 'room.join', code, name: 'A' }));
      assert.equal(manager.snapshot(code).canStart, false);
      manager.receive(host, JSON.stringify({ type: 'round.start' }));
      assert.equal(host.sent.at(-1).code, 'NEED_TWO_PLAYERS');
      manager.connect(b); manager.receive(b, JSON.stringify({ type: 'room.join', code, name: 'B' }));
      assert.equal(manager.snapshot(code).canStart, true);
      manager.receive(host, JSON.stringify({ type: 'round.start' }));
      assert.equal(manager.snapshot(code).phase, 'playing');
    });
  }
});

describe('Incremental room updates (F-023)', () => {
  for (const mode of ['teamwork', 'competitive']) test(`${mode}: long stacks reconstruct exactly and avoid repeated tower payloads`, () => {
    const rm = new RoomManager({ now: () => 1000000, random: rng(7) });
    const mk = () => ({ readyState: 1, sent: [], send(raw) { this.sent.push(JSON.parse(raw)); } });
    const host = mk(); const players = [mk(), mk()]; rm.connect(host); players.forEach(s => rm.connect(s));
    rm.receive(host, JSON.stringify({ type: 'room.create', mode }));
    const room = [...rm.rooms.values()][0];
    players.forEach((p, i) => rm.receive(p, JSON.stringify({ type: 'room.join', code: room.code, name: `Player ${i}` })));
    rm.receive(host, JSON.stringify({ type: 'round.start' }));
    const stacks = mode === 'teamwork' ? [room.engine.game.team.stack] : room.engine.game.competitors.map(c => c.stack);
    for (const stack of stacks) for (let level = 1; level <= 100; level++) stack.push({ left: 80, right: 280, level, color: '#E3A33B', placer: 'Player' });
    rm.broadcastState(room);
    const baseline = JSON.parse(JSON.stringify(room.lastBroadcastState));
    host.sent.length = 0;
    stacks[0].push({ left: 81, right: 279, level: 101, color: '#E3A33B', placer: 'Player' });
    room.engine.changed('game.state');
    const delta = host.sent[0];
    assert.equal(delta.type, 'room.delta');
    assert.equal(delta.baseRevision, baseline.revision);
    for (const [path, value] of delta.changes) {
      let target = baseline;
      for (const key of path.slice(0, -1)) target = target[key];
      target[path[path.length - 1]] = value;
    }
    assert.deepEqual(baseline, room.lastBroadcastState);
    const fullBytes = Buffer.byteLength(JSON.stringify({ type: 'room.state', state: room.lastBroadcastState }));
    assert.ok(Buffer.byteLength(JSON.stringify(delta)) < fullBytes / 3, 'delta should be substantially smaller than the full state');
  });
});

describe('Room-code guessing limit (A-03)', () => {
  // The budget used to be one process-wide counter checked before the code was resolved, so any client could stop
  // every real join. It is now one bucket per client key, and the shared bucket only exists while no key is known.
  const mk = () => ({ readyState: 1, sent: [], send(raw) { this.sent.push(JSON.parse(raw)); } });
  const roomWithHost = rm => {
    const host = mk(); rm.connect(host); rm.receive(host, JSON.stringify({ type: 'room.create', mode: 'teamwork' }));
    return [...rm.rooms.keys()][0];
  };
  const attempt = (rm, socket, message) => { rm.receive(socket, JSON.stringify(message)); return socket.sent.at(-1); };

  test('a key that exhausts its budget cannot stop another key from joining, and recovers after the window', () => {
    let now = 1_000_000;
    const rm = new RoomManager({ now: () => now, random: rng(9), joinFailureLimit: 3, joinFailureWindowMs: 60_000 });
    const code = roomWithHost(rm);
    const attacker = mk(); rm.connect(attacker, { clientKey: 'A' });
    for (let i = 0; i < 3; i++) assert.equal(attempt(rm, attacker, { type: 'room.join', code: 'ZZZZ', name: 'Guest' }).code, 'ROOM_NOT_FOUND');
    const neighbour = mk(); rm.connect(neighbour, { clientKey: 'B' });
    attempt(rm, neighbour, { type: 'room.join', code, name: 'Guest' });
    assert.ok(neighbour.sent.some(message => message.type === 'room.joined'), 'a different key is unaffected');
    const throttled = mk(); rm.connect(throttled, { clientKey: 'A' });
    assert.equal(attempt(rm, throttled, { type: 'room.join', code, name: 'Guest' }).code, 'JOIN_RATE_LIMITED', 'the exhausted key is refused even for a real code');
    now += 60_000;
    attempt(rm, throttled, { type: 'room.join', code, name: 'Guest' });
    assert.ok(throttled.sent.some(message => message.type === 'room.joined'), 'the bucket recovers after the window');
  });

  test('resume probing draws on the same budget and cannot confirm whether a room exists', () => {
    let now = 1_000_000;
    const rm = new RoomManager({ now: () => now, random: rng(10), joinFailureLimit: 3, joinFailureWindowMs: 60_000 });
    const code = roomWithHost(rm);
    const prober = mk(); rm.connect(prober, { clientKey: 'P' });
    const replies = [];
    for (let i = 0; i < 5; i++) replies.push(attempt(rm, prober, { type: 'room.resume', code: 'QQQQ', resumeToken: 'AAAA' }).code);
    assert.deepEqual(replies, ['INVALID_RESUME', 'INVALID_RESUME', 'INVALID_RESUME', 'JOIN_RATE_LIMITED', 'JOIN_RATE_LIMITED']);
    const unknown = mk(); rm.connect(unknown, { clientKey: 'U' });
    const existing = mk(); rm.connect(existing, { clientKey: 'E' });
    const missingToken = mk(); rm.connect(missingToken, { clientKey: 'M' });
    const a = attempt(rm, unknown, { type: 'room.resume', code: 'ZZZZ', resumeToken: 'AAAA' });
    const b = attempt(rm, existing, { type: 'room.resume', code, resumeToken: 'AAAA' });
    const c = attempt(rm, missingToken, { type: 'room.resume', code, resumeToken: '' });
    assert.equal(a.code, 'INVALID_RESUME');
    assert.equal(b.code, a.code, 'an existing room with a wrong token must not be distinguishable from a missing room');
    assert.equal(c.code, a.code, 'a missing token must not be distinguishable either');
    assert.equal(a.message, b.message);
  });

  test('with no client key the shared backstop still stops reconnecting from resetting the budget', () => {
    let now = 1_000_000;
    // Each connection stays under its own limit; only the shared keyless bucket can stop this pattern.
    const rm = new RoomManager({ now: () => now, random: rng(11), sharedJoinFailureLimit: 2, connectionJoinFailureLimit: 60, joinFailureWindowMs: 60_000 });
    const code = roomWithHost(rm);
    for (let i = 0; i < 2; i++) {
      const socket = mk(); rm.connect(socket);
      assert.equal(attempt(rm, socket, { type: 'room.join', code: 'ZZZZ', name: 'Guest' }).code, 'ROOM_NOT_FOUND');
    }
    const player = mk(); rm.connect(player);
    assert.equal(attempt(rm, player, { type: 'room.join', code, name: 'Guest' }).code, 'JOIN_RATE_LIMITED');
    assert.equal(rm.rooms.get(code).players.length, 0);
    now += 60_000;
    attempt(rm, player, { type: 'room.join', code, name: 'Guest' });
    assert.equal(rm.rooms.get(code).players.length, 1, 'the backstop recovers after the window');
  });

  test('the failure map stays bounded when failures arrive from many keys', () => {
    const now = 1_000_000;
    const rm = new RoomManager({ now: () => now, random: rng(12) });
    for (let i = 0; i < 12_000; i += 1) {
      const socket = mk(); rm.connect(socket, { clientKey: `key-${i}` });
      rm.receive(socket, JSON.stringify({ type: 'room.join', code: 'ZZZZ', name: 'Guest' }));
    }
    assert.ok(rm.joinFailures.size <= 10_000, `failure map grew to ${rm.joinFailures.size}`);
  });
});

describe('Room codes are always joinable (P2-5)', () => {
  test('an exhausted code space answers SERVER_BUSY and never mints a digit code', () => {
    const rm = new RoomManager({ now: () => 1_000_000, random: rng(71), randomBytes: () => Buffer.alloc(4, 0) });
    const mk = () => ({ readyState: 1, sent: [], send(raw) { this.sent.push(JSON.parse(raw)); } });
    const host = mk(); rm.connect(host); rm.receive(host, JSON.stringify({ type: 'room.create', mode: 'teamwork' }));
    assert.equal(host.sent.find(m => m.type === 'room.created').code, 'AAAA');
    // every further attempt collides with AAAA, so the 100 tries run out and the fallback must not be a digit code
    const second = mk(); rm.connect(second); rm.receive(second, JSON.stringify({ type: 'room.create', mode: 'teamwork' }));
    assert.equal(second.sent.at(-1).type, 'error');
    assert.equal(second.sent.at(-1).code, 'SERVER_BUSY');
    assert.deepEqual([...rm.rooms.keys()], ['AAAA'], 'no room with an unjoinable code was created');
    for (const code of rm.rooms.keys()) assert.match(code, /^[A-Z]{4}$/);
    const joiner = mk(); rm.connect(joiner); rm.receive(joiner, JSON.stringify({ type: 'room.join', code: '0001', name: 'Guest' }));
    assert.equal(joiner.sent.at(-1).code, 'ROOM_NOT_FOUND', 'the old fallback code is not a room, as it never was');
  });
});

describe('Room table is not holdable by unauthenticated clients (P0-2)', () => {
  const mk = () => ({ readyState: 1, sent: [], send(raw) { this.sent.push(JSON.parse(raw)); } });
  const create = (rm, socket, mode = 'teamwork', clientKey = 'owner') => { rm.connect(socket, { clientKey }); rm.receive(socket, JSON.stringify({ type: 'room.create', mode })); return socket; };

  test('a client key is capped on concurrent rooms and another key is unaffected', () => {
    const rm = new RoomManager({ now: () => 1_000_000, random: rng(21), idleLimitMs: 1e12 });
    const sockets = [];
    for (let i = 0; i < 6; i += 1) sockets.push(create(rm, mk(), 'teamwork', 'owner'));
    assert.equal(rm.hostedRoomCount('owner'), 5, 'five concurrent rooms');
    assert.equal(sockets[5].sent.at(-1).code, 'ROOM_LIMIT', 'the sixth concurrent room is refused');
    assert.equal(sockets[5].sent.at(-1).message, 'You have too many rooms open. Close one or wait a few minutes.');
    const neighbour = create(rm, mk(), 'teamwork', 'neighbour');
    assert.ok(neighbour.sent.some(m => m.type === 'room.created'), 'another key still creates rooms');
  });

  test('a client key is capped at ten creations per ten minutes', () => {
    let now = 1_000_000;
    const rm = new RoomManager({ now: () => now, random: rng(25), idleLimitMs: 1e12, roomCreateBurst: 100 });
    const made = [];
    // each attempt closes the previous room, so the concurrent cap never applies and only the rate is measured
    for (let i = 0; i < 11; i += 1) {
      const socket = create(rm, mk(), 'teamwork', 'rate');
      made.push(socket.sent.some(m => m.type === 'room.created'));
      for (const room of [...rm.rooms.values()]) rm.closeRoom(room, 'test');
    }
    assert.equal(made.filter(Boolean).length, 10, 'ten creations inside the window');
    assert.deepEqual(made.slice(10), [false], 'the eleventh creation is refused');
    now += 10 * 60_000;
    const afterWindow = create(rm, mk(), 'teamwork', 'rate');
    assert.ok(afterWindow.sent.some(m => m.type === 'room.created'), 'the creation budget recovers after the window');
  });

  test('no client key means no per-key cap, as before', () => {
    // The server-wide creation bucket (#53) is raised here so only the per-key caps are under test.
    const rm = new RoomManager({ now: () => 1_000_000, random: rng(22), idleLimitMs: 1e12, maxRooms: 50, roomCreateBurst: 100 });
    for (let i = 0; i < 20; i += 1) { const socket = mk(); rm.connect(socket); rm.receive(socket, JSON.stringify({ type: 'room.create', mode: 'teamwork' })); }
    assert.equal(rm.rooms.size, 20);
    assert.ok([...rm.rooms.values()].every(room => room.ownerKey === null));
  });

  test('only messages that change the room keep it alive', () => {
    let now = 1_000_000;
    const rm = new RoomManager({ now: () => now, random: rng(23), idleLimitMs: 10 * 60_000 });
    const host = create(rm, mk(), 'competitive');
    const code = [...rm.rooms.keys()][0];
    for (let i = 0; i < 2; i += 1) { const socket = mk(); rm.connect(socket); rm.receive(socket, JSON.stringify({ type: 'room.join', code, name: `P${i}` })); }
    rm.receive(host, JSON.stringify({ type: 'round.start' }));
    const room = rm.rooms.get(code);
    const seated = room.players[0].socket;
    // A real position report (inside the round a competitive round lasts 90 s, so keep the idle window short enough)
    now += 30_000; rm.tick();
    room.lastActivityAt = 1_000_000;
    rm.receive(seated, JSON.stringify({ type: 'player.position', x: room.engine.game.competitors[0].moving.left, sequence: 1e9, width: 100 }));
    assert.ok(room.lastActivityAt > 1_000_000, 'a valid position report counts as activity');
    // No-ops and rejections do not
    for (const [socket, message] of [
      [host, { type: 'nope' }],
      [host, { type: 'room.sync' }],
      [seated, { type: 'player.position', x: -1, sequence: 2e9, width: 100 }],
      [seated, { type: 'vote.cast', option: 'turbo' }]
    ]) {
      room.lastActivityAt = 1_000_000;
      rm.receive(socket, JSON.stringify(message));
      assert.equal(room.lastActivityAt, 1_000_000, `${message.type} must not refresh activity`);
    }
    now += 11 * 60_000;
    rm.sweepIdle();
    assert.equal(rm.rooms.has(code), false, 'a room kept alive only by junk is swept');
  });

  test('team.ready and team.skip count as activity on success', () => {
    const now = 1_000_000;
    const rm = new RoomManager({ now: () => now, random: rng(24), idleLimitMs: 1e12 });
    const host = create(rm, mk());
    const code = [...rm.rooms.keys()][0];
    const players = [mk(), mk()];
    players.forEach((socket, i) => { rm.connect(socket); rm.receive(socket, JSON.stringify({ type: 'room.join', code, name: `P${i}` })); });
    rm.receive(host, JSON.stringify({ type: 'round.start' }));
    const room = rm.rooms.get(code);
    const onTurn = players.find(socket => socket === room.players.find(player => player.id === room.engine.game.team.currentPlayerId).socket);
    room.players.find(player => player.id === room.engine.game.team.currentPlayerId).teamIdle = true;
    room.lastActivityAt = 0;
    rm.receive(onTurn, JSON.stringify({ type: 'team.ready' }));
    assert.ok(room.lastActivityAt > 0, 'team.ready refreshed activity');
    room.lastActivityAt = 0;
    rm.receive(host, JSON.stringify({ type: 'team.skip', turnId: room.engine.game.team.turnId }));
    assert.ok(room.lastActivityAt > 0, 'team.skip refreshed activity');
  });
});

describe('Connections and messages are budgeted per client (P1-3)', () => {
  const mk = () => ({ readyState: 1, sent: [], send(raw) { this.sent.push(JSON.parse(raw)); } });

  test('one key cannot open more sockets than the cap, and its sockets share a message budget', () => {
    const rm = new RoomManager({ now: () => 1_000_000, random: rng(51), messageBurst: 5, messageRefillPerSecond: 0 });
    const first = mk(), second = mk();
    rm.connect(first, { clientKey: 'A' });
    rm.connect(second, { clientKey: 'A' });
    for (let i = 0; i < 5; i += 1) rm.receive(first, JSON.stringify({ type: 'client.ping' }));
    assert.equal(first.sent.filter(m => m.type === 'server.pong').length, 5, 'the first socket spends its burst');
    for (let i = 0; i < 5; i += 1) rm.receive(second, JSON.stringify({ type: 'client.ping' }));
    assert.equal(second.sent.filter(m => m.type === 'server.pong').length, 0, 'a second socket from the same key starts empty');
    assert.ok(second.sent.some(m => m.code === 'RATE_LIMITED'));
    const neighbour = mk(); rm.connect(neighbour, { clientKey: 'B' });
    rm.receive(neighbour, JSON.stringify({ type: 'client.ping' }));
    assert.equal(neighbour.sent.at(-1).type, 'server.pong', 'another key is unaffected');
    const unkeyed = new RoomManager({ now: () => 1_000_000, random: rng(52), messageBurst: 5, messageRefillPerSecond: 0 });
    const a = mk(), b = mk(); unkeyed.connect(a); unkeyed.connect(b);
    for (let i = 0; i < 5; i += 1) unkeyed.receive(a, JSON.stringify({ type: 'client.ping' }));
    unkeyed.receive(b, JSON.stringify({ type: 'client.ping' }));
    assert.equal(b.sent.at(-1).type, 'server.pong', 'with no key each socket keeps its own burst, as before');
  });

  test('the upgrade handler refuses a key past its cap and another key still connects', async () => {
    const app = createGameServer({
      onError: () => {},
      clientKeyFor: request => request.headers['x-test-ip'] || null,
      clientsPerKey: 3
    });
    await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
    const url = `ws://127.0.0.1:${app.server.address().port}/ws`;
    const attempt = ip => new Promise(resolve => {
      const ws = new WebSocket(url, { headers: { 'x-test-ip': ip } });
      ws.on('open', () => resolve({ ok: true, ws }));
      ws.on('unexpected-response', (request, response) => resolve({ ok: false, status: response.statusCode }));
      ws.on('error', () => resolve({ ok: false, status: 0 }));
    });
    try {
      const held = [];
      for (let i = 0; i < 3; i += 1) held.push(await attempt('10.9.0.1'));
      assert.deepEqual(held.map(r => r.ok), [true, true, true]);
      const refused = await attempt('10.9.0.1');
      assert.equal(refused.ok, false);
      assert.equal(refused.status, 503, 'the fourth socket from one key is refused with 503');
      const neighbour = await attempt('10.9.0.2');
      assert.equal(neighbour.ok, true, 'another key is unaffected');
      for (const result of [...held, neighbour]) result.ws.terminate();
      await sleep(200);
      const reopened = await attempt('10.9.0.1');
      assert.equal(reopened.ok, true, 'the counter is released when sockets close, so nothing leaks');
      reopened.ws.terminate();
    } finally { await app.close(); }
  });

  test('the global socket ceiling always applies, even with no client key', async () => {
    const app = createGameServer({ onError: () => {}, clientKeyFor: () => null, maxSockets: 2 });
    await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
    const url = `ws://127.0.0.1:${app.server.address().port}/ws`;
    const attempt = () => new Promise(resolve => {
      const ws = new WebSocket(url);
      ws.on('open', () => resolve({ ok: true, ws }));
      ws.on('unexpected-response', (request, response) => resolve({ ok: false, status: response.statusCode }));
      ws.on('error', () => resolve({ ok: false, status: 0 }));
    });
    try {
      const results = [await attempt(), await attempt(), await attempt()];
      assert.deepEqual(results.map(r => r.ok), [true, true, false]);
      assert.equal(results[2].status, 503);
      results.filter(r => r.ws).forEach(r => r.ws.terminate());
    } finally { await app.close(); }
  });
});

describe('Resume tokens are compared safely (P1-2)', () => {
  const mk = () => ({ readyState: 1, sent: [], send(raw) { this.sent.push(JSON.parse(raw)); } });
  const roomWithPlayer = () => {
    const rm = new RoomManager({ now: () => 1_000_000, random: rng(41) });
    const host = mk(); rm.connect(host); rm.receive(host, JSON.stringify({ type: 'room.create', mode: 'teamwork' }));
    const code = [...rm.rooms.keys()][0];
    const player = mk(); rm.connect(player); rm.receive(player, JSON.stringify({ type: 'room.join', code, name: 'A' }));
    return { rm, code, player, token: player.sent.find(m => m.type === 'room.joined').resumeToken };
  };

  test('a non-ASCII token of the same code-unit length is refused, not thrown', () => {
    const { rm, code } = roomWithPlayer();
    const attacker = mk(); rm.connect(attacker);
    assert.doesNotThrow(() => rm.receive(attacker, JSON.stringify({ type: 'room.resume', code, resumeToken: 'é'.repeat(32) })));
    assert.equal(attacker.sent.at(-1).type, 'error');
    assert.equal(attacker.sent.at(-1).code, 'INVALID_RESUME');
    rm.receive(attacker, JSON.stringify({ type: 'client.ping' }));
    assert.equal(attacker.sent.at(-1).type, 'server.pong', 'the socket is still usable');
  });

  test('a legitimate resume still succeeds and a wrong token of the same length still fails', () => {
    const { rm, code, player, token } = roomWithPlayer();
    rm.disconnect(player);
    const resumed = mk(); rm.connect(resumed);
    rm.receive(resumed, JSON.stringify({ type: 'room.resume', code, resumeToken: token }));
    assert.equal((resumed.sent.find(m => m.type === 'room.resumed') || {}).role, 'player');
    const wrong = mk(); rm.connect(wrong);
    const wrongToken = token.replace(/[A-Za-z]/g, ch => (ch === 'A' ? 'B' : 'A'));
    assert.equal(wrongToken.length, token.length);
    rm.receive(wrong, JSON.stringify({ type: 'room.resume', code, resumeToken: wrongToken }));
    assert.equal(wrong.sent.at(-1).code, 'INVALID_RESUME');
  });

  test('an oversized token is refused before any lookup', () => {
    const { rm, code } = roomWithPlayer();
    const socket = mk(); rm.connect(socket);
    rm.receive(socket, JSON.stringify({ type: 'room.resume', code, resumeToken: 'A'.repeat(5000) }));
    assert.equal(socket.sent.at(-1).code, 'INVALID_RESUME');
    const overlong = mk(); rm.connect(overlong);
    rm.receive(overlong, JSON.stringify({ type: 'room.resume', code: 'ZZZZ', resumeToken: 'A'.repeat(5000) }));
    assert.equal(overlong.sent.at(-1).code, 'INVALID_RESUME', 'and identically for a room that does not exist');
  });

  test('tokensMatch compares bytes', () => {
    const rm = new RoomManager({ now: () => 1_000_000, random: rng(43) });
    assert.equal(rm.tokensMatch('éé', 'éé'), true);
    assert.equal(rm.tokensMatch('é', 'e'), false, 'one UTF-16 unit each, different byte lengths');
    assert.equal(rm.tokensMatch('éé', 'ee'), false, 'two UTF-16 units each, different byte lengths');
    assert.equal(rm.tokensMatch(null, 'a'), false);
  });
});

describe('Preference messages are not an amplifier (P1-1)', () => {
  const mk = () => ({ readyState: 1, sent: [], send(raw) { this.sent.push(JSON.parse(raw)); } });
  const setup = (mode = 'competitive') => {
    let now = 1_000_000;
    const rm = new RoomManager({ now: () => now, random: rng(31), idleLimitMs: 1e12 });
    const host = mk(), a = mk(), b = mk();
    [host, a, b].forEach(socket => rm.connect(socket));
    rm.receive(host, JSON.stringify({ type: 'room.create', mode }));
    const code = [...rm.rooms.keys()][0];
    rm.receive(a, JSON.stringify({ type: 'room.join', code, name: 'A' }));
    rm.receive(b, JSON.stringify({ type: 'room.join', code, name: 'B' }));
    const room = rm.rooms.get(code);
    const calls = { count: 0 };
    const broadcastState = rm.broadcastState.bind(rm);
    rm.broadcastState = (...args) => { calls.count += 1; return broadcastState(...args); };
    return { rm, host, a, b, room, calls, advance: ms => { now += ms; } };
  };

  test('repeating the current preference never broadcasts the room', () => {
    const t = setup();
    for (let i = 0; i < 150; i += 1) t.rm.receive(t.a, JSON.stringify({ type: 'client.preferences', reducedMotion: false }));
    assert.equal(t.calls.count, 0, 'identical preference messages must not fan out to every seat');
    assert.equal(t.a.sent.filter(m => m.type === 'preferences.updated').length, 150, 'the sender still gets its acknowledgement');
  });

  test('toggling is rate limited, and what gets through still reaches every seat', () => {
    const t = setup();
    for (let i = 0; i < 150; i += 1) t.rm.receive(t.a, JSON.stringify({ type: 'client.preferences', reducedMotion: i % 2 === 0 }));
    assert.ok(t.calls.count <= 8, `150 alternating messages caused ${t.calls.count} broadcasts in the first second`);
    assert.ok(t.a.sent.some(m => m.code === 'RATE_LIMITED'), 'excess toggles are refused');
    const accepted = t.room.players.find(player => player.socket === t.a).reducedMotion;
    assert.equal(t.room.reducedMotion === undefined ? accepted : accepted, accepted);
    t.advance(10_000);
    const before = t.calls.count;
    t.rm.receive(t.b, JSON.stringify({ type: 'client.preferences', reducedMotion: !t.room.players.find(p => p.socket === t.b).reducedMotion }));
    assert.equal(t.calls.count, before + 1, 'a legitimate toggle broadcasts once');
    assert.ok([t.host, t.a, t.b].every(socket => socket.sent.at(-1).type === 'room.state' || socket.sent.at(-1).type === 'room.delta'), 'every seat hears about it');
    assert.equal(typeof t.rm.snapshot(t.room).reducedMotion, 'boolean');
  });

  test('the reduced-motion snapshot follows the accepted preference only', () => {
    const t = setup('teamwork');
    t.rm.receive(t.b, JSON.stringify({ type: 'client.preferences', reducedMotion: true }));
    assert.equal(t.rm.snapshot(t.room).reducedMotion, true);
    for (let i = 0; i < 150; i += 1) t.rm.receive(t.a, JSON.stringify({ type: 'client.preferences', reducedMotion: false }));
    assert.equal(t.rm.snapshot(t.room).reducedMotion, true, 'a rejected no-op must not overwrite what the room sees');
    t.advance(10_000);
    t.rm.receive(t.b, JSON.stringify({ type: 'client.preferences', reducedMotion: false }));
    assert.equal(t.rm.snapshot(t.room).reducedMotion, false, 'a later accepted change is reflected');
  });

  test('a no-op preference does not keep the room alive', () => {
    const t = setup();
    t.room.lastActivityAt = 0;
    t.rm.receive(t.a, JSON.stringify({ type: 'client.preferences', reducedMotion: false }));
    assert.equal(t.room.lastActivityAt, 0);
    t.rm.receive(t.a, JSON.stringify({ type: 'client.preferences', reducedMotion: true }));
    assert.ok(t.room.lastActivityAt > 0, 'a real change is activity');
  });
});

describe('Spectator role (A-09)', () => {
  test('late spectators receive updates and resume, but cannot affect the room', () => {
    let now = 1_000_000; const rm = new RoomManager({ now: () => now, random: rng(12) });
    const mk = () => ({ readyState: 1, sent: [], send(raw) { this.sent.push(JSON.parse(raw)); } });
    const host = mk(), a = mk(), b = mk(), viewer = mk();
    for (const socket of [host, a, b, viewer]) rm.connect(socket);
    rm.receive(host, JSON.stringify({ type: 'room.create', mode: 'teamwork' }));
    const room = [...rm.rooms.values()][0];
    for (const [socket, name] of [[a, 'A'], [b, 'B']]) rm.receive(socket, JSON.stringify({ type: 'room.join', code: room.code, name }));
    rm.receive(host, JSON.stringify({ type: 'round.start' }));
    rm.receive(viewer, JSON.stringify({ type: 'room.join', code: room.code, name: 'Viewer', spectate: true, reducedMotion: true }));
    const joined = viewer.sent.find(message => message.type === 'room.joined');
    assert.equal(joined.role, 'spectator'); assert.equal(room.players.length, 2); assert.equal(rm.snapshot(room).reducedMotion, false);
    for (const type of ['player.drop', 'player.position', 'vote.cast', 'team.skip', 'round.rematch']) {
      rm.receive(viewer, JSON.stringify({ type, x: 0, option: 'turbo' }));
      assert.equal(viewer.sent.at(-1).type, 'error', `${type} must be rejected`);
    }
    rm.receive(viewer, JSON.stringify({ type: 'client.preferences', reducedMotion: true }));
    assert.equal(rm.snapshot(room).reducedMotion, false);
    viewer.sent.length = 0; room.engine.changed('game.state');
    assert.ok(viewer.sent.some(message => message.type === 'room.delta' || message.type === 'room.state'));
    rm.disconnect(viewer); const resumed = mk(); rm.connect(resumed);
    rm.receive(resumed, JSON.stringify({ type: 'room.resume', code: room.code, resumeToken: joined.resumeToken }));
    assert.equal(resumed.sent.find(message => message.type === 'room.resumed').role, 'spectator');
    rm.receive(resumed, JSON.stringify({ type: 'room.leave' }));
    assert.equal(room.spectators.length, 0); assert.equal(room.players.length, 2);
  });
  test('spectator slots are bounded and disconnected slots expire', () => {
    let now = 1_000_000; const rm = new RoomManager({ now: () => now });
    const mk = () => ({ readyState: 1, sent: [], send(raw) { this.sent.push(JSON.parse(raw)); } });
    const host = mk(); rm.connect(host); rm.receive(host, JSON.stringify({ type: 'room.create', mode: 'competitive' }));
    const room = [...rm.rooms.values()][0]; const viewers = [];
    for (let i = 0; i < 17; i++) { const socket = mk(); rm.connect(socket); rm.receive(socket, JSON.stringify({ type: 'room.join', code: room.code, spectate: true })); viewers.push(socket); }
    assert.equal(room.spectators.length, 16); assert.equal(viewers[16].sent.at(-1).code, 'SPECTATORS_FULL');
    rm.disconnect(viewers[0]); now += 120_000; rm.tick();
    rm.receive(viewers[16], JSON.stringify({ type: 'room.join', code: room.code, spectate: true }));
    assert.ok(viewers[16].sent.some(message => message.type === 'room.joined'));
  });
});

describe('Damage limits without a client key (#53)', () => {
  const mk = () => ({ readyState: 1, sent: [], closed: null, send(raw) { this.sent.push(JSON.parse(raw)); }, close(code, reason) { this.closed = { code, reason }; } });
  const send = (rm, socket, message) => { rm.receive(socket, JSON.stringify(message)); return socket.sent.at(-1); };
  const hostRoom = (rm, clientKey = null) => {
    const host = mk(); rm.connect(host, { clientKey });
    send(rm, host, { type: 'room.create', mode: 'teamwork' });
    const created = host.sent.find(message => message.type === 'room.created');
    return { host, code: created.code, token: created.resumeToken };
  };

  test('an Abandoned Room is swept once its host has been gone for abandonedLimitMs, and not before', () => {
    let now = 1_000_000;
    const rm = new RoomManager({ now: () => now, random: rng(81), abandonedLimitMs: 60_000 });
    const { host, code } = hostRoom(rm);
    rm.disconnect(host);
    now += 59_999;
    assert.deepEqual(rm.sweepIdle(), [], 'not before the limit');
    now += 1;
    assert.deepEqual(rm.sweepIdle(), [code]);
    assert.equal(rm.rooms.has(code), false);
  });

  test('a room with a player or a connected spectator is not abandoned and keeps the ten-minute idle rule', () => {
    let now = 1_000_000;
    const rm = new RoomManager({ now: () => now, random: rng(82), abandonedLimitMs: 60_000, idleLimitMs: 10 * 60_000 });
    const withPlayer = hostRoom(rm);
    const player = mk(); rm.connect(player); send(rm, player, { type: 'room.join', code: withPlayer.code, name: 'P' });
    rm.disconnect(player);
    rm.disconnect(withPlayer.host);
    const withSpectator = hostRoom(rm);
    const viewer = mk(); rm.connect(viewer); send(rm, viewer, { type: 'room.join', code: withSpectator.code, spectate: true });
    rm.disconnect(withSpectator.host);
    now += 5 * 60_000;
    assert.deepEqual(rm.sweepIdle(), []);
    now += 5 * 60_000;
    assert.deepEqual(rm.sweepIdle().sort(), [withPlayer.code, withSpectator.code].sort());
  });

  test('someone visiting an Abandoned Room restarts its limit from when they leave', () => {
    let now = 1_000_000;
    const rm = new RoomManager({ now: () => now, random: rng(88), abandonedLimitMs: 60_000 });
    const { host, code } = hostRoom(rm);
    rm.disconnect(host);
    now += 50_000;
    const viewer = mk(); rm.connect(viewer); send(rm, viewer, { type: 'room.join', code, spectate: true });
    now += 5_000;
    rm.disconnect(viewer);
    now += 10_000;
    assert.deepEqual(rm.sweepIdle(), [], 'sixty-five seconds after the host left, but only ten since the visitor did');
    now += 50_000;
    assert.deepEqual(rm.sweepIdle(), [code]);
  });

  test('a host that resumes before abandonedLimitMs keeps its room', () => {
    let now = 1_000_000;
    const rm = new RoomManager({ now: () => now, random: rng(83), abandonedLimitMs: 60_000 });
    const { host, code, token } = hostRoom(rm);
    rm.disconnect(host);
    now += 30_000;
    const back = mk(); rm.connect(back);
    assert.equal(send(rm, back, { type: 'room.resume', code, resumeToken: token }).type, 'room.state');
    assert.equal(back.sent.find(message => message.type === 'room.resumed').role, 'host');
    now += 60_000;
    assert.deepEqual(rm.sweepIdle(), []);
    assert.equal(rm.rooms.has(code), true);
  });

  test('the server-wide creation bucket refuses with SERVER_BUSY once spent, refills, and a refusal costs nothing', () => {
    let now = 1_000_000;
    const rm = new RoomManager({ now: () => now, random: rng(84), idleLimitMs: 1e12, roomCreateBurst: 3, roomCreateRefillPerMinute: 60 });
    const create = () => { const socket = mk(); rm.connect(socket); send(rm, socket, { type: 'room.create', mode: 'teamwork' }); return socket.sent.find(m => m.type === 'room.created' || m.type === 'error'); };
    assert.deepEqual([create(), create(), create()].map(m => m.type), ['room.created', 'room.created', 'room.created']);
    const refused = create();
    assert.equal(refused.code, 'SERVER_BUSY');
    assert.equal(refused.message, 'The server is hosting as many rooms as it can. Try again shortly.');
    for (let i = 0; i < 5; i++) assert.equal(create().code, 'SERVER_BUSY', 'refusals keep being refused');
    now += 1_000;
    assert.equal(create().type, 'room.created', 'one token back after a second, not used up by the refusals');
    assert.equal(create().code, 'SERVER_BUSY');
    assert.equal(rm.rooms.size, 4);
  });

  test('the creation bucket also applies with a client key, and the per-key ROOM_LIMIT still triggers', () => {
    let now = 1_000_000;
    const rm = new RoomManager({ now: () => now, random: rng(85), idleLimitMs: 1e12, roomCreateBurst: 2, roomCreateRefillPerMinute: 60, roomsPerClient: 1 });
    const create = key => { const socket = mk(); rm.connect(socket, { clientKey: key }); send(rm, socket, { type: 'room.create', mode: 'teamwork' }); return socket.sent.find(m => m.type === 'room.created' || m.type === 'error'); };
    assert.equal(create('A').type, 'room.created');
    assert.equal(create('A').code, 'ROOM_LIMIT', 'the per-key cap still applies');
    assert.equal(create('B').type, 'room.created');
    assert.equal(create('C').code, 'SERVER_BUSY', 'keyed clients share the server-wide bucket');
  });

  test('without a key one connection that runs out of join failures is refused and closed, and others can still join', () => {
    const rm = new RoomManager({ now: () => 1_000_000, random: rng(86), connectionJoinFailureLimit: 3 });
    const { code } = hostRoom(rm);
    const guesser = mk(); rm.connect(guesser);
    const replies = [];
    for (let i = 0; i < 4; i++) replies.push(send(rm, guesser, { type: 'room.join', code: 'ZZZZ', name: 'G' }).code);
    assert.deepEqual(replies, ['ROOM_NOT_FOUND', 'ROOM_NOT_FOUND', 'ROOM_NOT_FOUND', 'JOIN_RATE_LIMITED']);
    assert.equal(guesser.closed && guesser.closed.code, 1008, 'closed with the policy-violation code');
    const neighbour = mk(); rm.connect(neighbour);
    send(rm, neighbour, { type: 'room.join', code, name: 'N' });
    assert.ok(neighbour.sent.some(message => message.type === 'room.joined'), 'another keyless connection is unaffected');
    assert.equal(neighbour.closed, null);
  });

  for (const [label, options, clientKey] of [
    ['the keyless shared bucket', { sharedJoinFailureLimit: 3 }, null],
    ['a per-key bucket', { joinFailureLimit: 3 }, 'K']
  ]) test(`a valid resume token works with ${label} exhausted; a wrong token gets the same refusal whether or not the room exists`, () => {
    const rm = new RoomManager({ now: () => 1_000_000, random: rng(87), ...options });
    const { host, code, token } = hostRoom(rm, clientKey);
    const player = mk(); rm.connect(player, { clientKey }); send(rm, player, { type: 'room.join', code, name: 'P' });
    const playerToken = player.sent.find(message => message.type === 'room.joined').resumeToken;
    const viewer = mk(); rm.connect(viewer, { clientKey }); send(rm, viewer, { type: 'room.join', code, spectate: true });
    const viewerToken = viewer.sent.find(message => message.type === 'room.joined').resumeToken;
    // Three connections so the per-connection keyless limit is never what throttles here.
    for (let i = 0; i < 3; i++) { const guesser = mk(); rm.connect(guesser, { clientKey }); send(rm, guesser, { type: 'room.join', code: 'ZZZZ', name: 'G' }); }
    const probe = mk(); rm.connect(probe, { clientKey });
    assert.equal(send(rm, probe, { type: 'room.join', code: 'ZZZZ', name: 'G' }).code, 'JOIN_RATE_LIMITED', 'the bucket is exhausted');
    const wrong = send(rm, probe, { type: 'room.resume', code, resumeToken: 'A'.repeat(32) });
    const unknown = send(rm, probe, { type: 'room.resume', code: 'ZZZZ', resumeToken: 'A'.repeat(32) });
    const missing = send(rm, probe, { type: 'room.resume', code, resumeToken: '' });
    assert.equal(wrong.code, 'JOIN_RATE_LIMITED');
    assert.deepEqual(unknown, wrong, 'an unknown code answers exactly like a wrong token');
    assert.deepEqual(missing, wrong);
    for (const [socket, resumeToken, role] of [[host, token, 'host'], [player, playerToken, 'player'], [viewer, viewerToken, 'spectator']]) {
      rm.disconnect(socket);
      const back = mk(); rm.connect(back, { clientKey });
      send(rm, back, { type: 'room.resume', code, resumeToken });
      const resumed = back.sent.find(message => message.type === 'room.resumed');
      assert.equal(resumed && resumed.role, role, `the ${role} resumes with its valid token`);
    }
  });

  describe('over real WebSockets with no client key', () => {
    const start = async () => {
      const app = createGameServer({ onError: () => {}, clientKeyFor: () => null });
      await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
      return { app, url: `ws://127.0.0.1:${app.server.address().port}/ws` };
    };
    const reply = (client, predicate, ms = 2000) => new Promise((resolve, reject) => {
      const found = client.inbox.find(predicate); if (found) return resolve(found);
      const timer = setTimeout(() => reject(new Error('no matching reply')), ms);
      client.ws.on('message', raw => { const message = JSON.parse(raw); if (predicate(message)) { clearTimeout(timer); resolve(message); } });
    });
    const createOnce = async url => {
      const client = await connect(url);
      client.send({ type: 'room.create', mode: 'teamwork' });
      const message = await reply(client, m => m.type === 'room.created' || m.type === 'error');
      client.ws.terminate();
      return message;
    };

    test('a connect, create, disconnect loop cannot fill the room table, and creation recovers within seconds', async () => {
      const { app, url } = await start();
      try {
        const loopEnds = Date.now() + 1500;
        let attempts = 0;
        while (Date.now() < loopEnds) { await createOnce(url); attempts += 1; }
        assert.ok(attempts > 50, `the loop ran (${attempts} attempts)`);
        assert.ok(app.roomManager.rooms.size <= 15, `rooms.size stayed small: ${app.roomManager.rooms.size} of ${app.roomManager.maxRooms}`);
        let created = null;
        for (let i = 0; i < 10 && !created; i++) {
          const message = await createOnce(url);
          if (message.type === 'room.created') created = message; else await sleep(500);
        }
        assert.ok(created, 'a fresh client can create a room within a few seconds');
      } finally { await app.close(); }
    });

    test('61 failed joins close that connection, and another connection can still join a real room', async () => {
      const { app, url } = await start();
      try {
        const host = await connect(url);
        host.send({ type: 'room.create', mode: 'teamwork' });
        const { code } = await reply(host, m => m.type === 'room.created');
        const guesser = await connect(url);
        const closed = new Promise(resolve => { guesser.ws.on('close', closeCode => resolve(closeCode)); setTimeout(() => resolve('still open'), 3000); });
        for (let i = 0; i < 61; i++) guesser.send({ type: 'room.join', code: 'ZZZZ', name: 'G' });
        assert.equal(await closed, 1008);
        assert.equal(guesser.inbox.filter(m => m.code === 'ROOM_NOT_FOUND').length, 60);
        assert.equal(guesser.inbox.at(-1).code, 'JOIN_RATE_LIMITED');
        const neighbour = await connect(url);
        neighbour.send({ type: 'room.join', code, name: 'N' });
        assert.equal((await reply(neighbour, m => m.type === 'room.joined' || m.type === 'error')).type, 'room.joined');
        host.ws.terminate(); neighbour.ws.terminate();
      } finally { await app.close(); }
    });
  });
});
