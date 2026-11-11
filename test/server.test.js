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
  test('one state change sends one message per socket, carrying the whole game', () => {
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
      assert.equal(s.sent.length, 1); assert.equal(s.sent[0].type, 'room.state'); assert.ok(s.sent[0].state.game && s.sent[0].state.game.phase === 'playing');
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
