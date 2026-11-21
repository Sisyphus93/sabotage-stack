'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { LegacyPublisher, receiveDelta } = require('./fixtures/legacy-replication');
const { RoomManager } = require('../server/room-manager');
const copy = value => JSON.parse(JSON.stringify(value));
function publish(proto, before, after) {
  const publisher = Object.create(proto);
  publisher.snapshot = room => ({ ...copy(after), revision: room.stateRevision });
  let packet;
  publisher.broadcast = (_, message) => { packet = message; };
  const room = { stateRevision: before ? before.revision : 0, lastBroadcastState: copy(before) };
  publisher.broadcastDelta(room);
  return { packet, room };
}
const before = { revision: 3, code: 'ABCD', players: [{ id: 'a', connected: true }], game: { stack: [{ left: 0, right: 180 }], score: 0 }, padding: 'unchanged'.repeat(100) };
const after = { ...copy(before), revision: 4, game: { stack: [...before.game.stack, { left: 20, right: 175 }], score: 1 } };
test('publisher characterization: delta/full selection, revision, and recovery baseline', () => {
  for (const [a, b] of [[before, after], [null, before], [{ revision: 1 }, { revision: 2, game: 'x'.repeat(1000) }]]) {
    assert.deepEqual(publish(RoomManager.prototype, a, b), publish(LegacyPublisher.prototype, a, b));
  }
  const { packet, room } = publish(RoomManager.prototype, before, after);
  assert.equal(packet.type, 'room.delta');
  assert.deepEqual(receiveDelta(before, packet), { status: 'apply', state: after });
  assert.deepEqual(room.lastBroadcastState, after);
});

test('receiver characterization: stale is ignored before malformed changes are checked', () => {
  assert.deepEqual(receiveDelta(before, { type: 'room.delta', baseRevision: 999, revision: 3, changes: null }), { status: 'ignore' });
  assert.deepEqual(receiveDelta(null, { type: 'room.delta', revision: 4, changes: [] }), { status: 'resynchronize' });
});

test('shared replication seam creates and reconstructs the existing wire delta', () => {
  const Replication = require('../shared/room-replication');
  const delta = Replication.createDelta(before, after);
  assert.deepEqual(delta, publish(LegacyPublisher.prototype, before, after).packet);
  assert.deepEqual(Replication.receiveDelta(before, delta), { status: 'apply', state: after });
});

const Replication = require('../shared/room-replication');
const delta = changes => ({ type: 'room.delta', baseRevision: 3, revision: 4, changes });
const revision = [['revision'], 4];
const cases = [
  ['growing arrays', delta([revision, [['players', 1], { id: 'b', connected: true }]])],
  ['shrinking arrays', delta([revision, [['players'], []]])],
  ['object replacement/removal', delta([revision, [['game'], { score: 9 }]])],
  ['new nested field', delta([revision, [['game', 'vote'], { options: ['turbo'] }]])],
  ['null replacement', delta([revision, [['game'], null]])],
  ['duplicate revision', { ...delta(null), revision: 3, baseRevision: 999 }],
  ['older revision', { ...delta([]), revision: 2 }],
  ['missing changes', { type: 'room.delta', baseRevision: 3, revision: 4 }],
  ['wrong baseline', { ...delta([]), baseRevision: 1 }],
  ['revision not patched', delta([])],
  ['revision mismatch', delta([[['revision'], 5]])],
  ['root replacement', delta([[[], { revision: 4 }]])],
  ['bad change', delta([null])],
  ['nonarray path', delta([[{}, 1]])],
  ['missing intermediate', delta([revision, [['missing', 'field'], 1]])],
  ['primitive intermediate', delta([revision, [['code', 'field'], 1]])],
  ['invalid patch after valid patch', delta([revision, [['game', 'score'], 99], [[], 0]])],
  // Compatibility: these were accepted, not schema-validated, by the old receiver.
  ['fractional matching revision', { ...delta([[['revision'], 3.5]]), revision: 3.5 }],
  ['missing patch value', delta([revision, [['game', 'score']]])],
  ['extra change fields', delta([revision, [['game', 'score'], 8, 'ignored']])],
  ['array gaps', delta([revision, [['players', 3], { id: 'd' }]])]
];
for (const key of ['__proto__', 'constructor', 'prototype']) {
  cases.push([`forbidden final key ${key}`, delta([revision, [['game', key], {}]])]);
  cases.push([`forbidden intermediate key ${key}`, delta([revision, [['game', key, 'field'], 1]])]);
}
for (const [name, message] of cases) test(`receiver matches legacy: ${name}`, () => {
  const baseline = copy(before); const incoming = copy(message);
  const originalBaseline = copy(baseline); const originalMessage = copy(incoming);
  // Use the same wire-decoded inputs for both receivers, including absent values.
  assert.deepEqual(Replication.receiveDelta(baseline, incoming), receiveDelta(copy(baseline), copy(incoming)));
  assert.deepEqual(baseline, originalBaseline);
  assert.deepEqual(incoming, originalMessage);
});

test('missing baseline requests synchronization without adopting incoming state', () => {
  assert.deepEqual(Replication.receiveDelta(null, delta([revision])), { status: 'resynchronize' });
});

test('baseline capture is isolated from the mutable room view', () => {
  const state = copy(before); const baseline = Replication.captureBaseline(state);
  state.game.stack[0].left = 99;
  assert.deepEqual(baseline, before);
  baseline.players[0].connected = false;
  assert.equal(state.players[0].connected, true);
  assert.equal(Replication.captureBaseline({ revision: 3.5 }), null);
  assert.equal(Replication.captureBaseline({}), null);
});

test('deterministic room traces reconstruct exactly through the JSON wire', () => {
  const { rng } = require('./helpers/rng'); const random = rng(99);
  let current = copy(before); let baseline = Replication.captureBaseline(current);
  for (let i = 0; i < 300; i++) {
    const next = copy(current); next.revision++;
    if (i % 4 === 0) next.game.stack.push({ left: Math.floor(random() * 60), right: 180 });
    if (i % 7 === 0) next.game.stack = next.game.stack.slice(-3);
    if (i % 3 === 0) next.game.vote = { counts: { turbo: i, slowmo: i + 1 } };
    else delete next.game.vote;
    next.players[0].connected = i % 9 !== 0;
    next.game.score = Math.floor(random() * 100);
    const packet = copy(Replication.createDelta(current, next));
    assert.deepEqual(packet, publish(LegacyPublisher.prototype, current, next).packet);
    const result = Replication.receiveDelta(baseline, packet);
    assert.equal(result.status, 'apply'); assert.deepEqual(result.state, next);
    baseline = Replication.captureBaseline(result.state); current = next;
  }
});

test('standalone embedded replication matches the Node implementation', () => {
  const fs = require('node:fs'); const vm = require('node:vm'); const path = require('node:path');
  const html = fs.readFileSync(path.join(__dirname, '..', 'sabotage-stack.html'), 'utf8');
  const source = html.split('    /* SHARED_REPLICATION_START */\n')[1].split('    /* SHARED_REPLICATION_END */')[0];
  const context = { window: {} }; vm.runInNewContext(source, context);
  const browser = context.window.SabotageStackReplication;
  assert.deepEqual(copy(browser.createDelta(before, after)), Replication.createDelta(before, after));
  for (const [, message] of cases) {
    assert.deepEqual(copy(browser.receiveDelta(copy(before), copy(message))), copy(Replication.receiveDelta(copy(before), copy(message))));
  }
});

test('overlapping patch paths cannot mutate the incoming packet, including on rejection', () => {
  for (const reject of [false, true]) {
    const message = delta([revision, [['game'], { score: 1 }], [['game', 'score'], 2]]);
    if (reject) message.changes.push([[], 0]);
    const original = copy(message); const baseline = copy(before);
    const result = Replication.receiveDelta(baseline, message);
    assert.equal(result.status, reject ? 'resynchronize' : 'apply');
    assert.deepEqual(message, original);
    assert.deepEqual(baseline, before);
    if (!reject) {
      assert.equal(result.state.game.score, 2);
      result.state.game.score = 42;
      assert.deepEqual(message, original);
    }
  }
});

test('synchronization sends the exact broadcast baseline, not a fresh snapshot', () => {
  const manager = Object.create(RoomManager.prototype);
  const socket = { readyState: 1, sent: [], send(value) { this.sent.push(JSON.parse(value)); } };
  const room = { lastBroadcastState: copy(before) };
  manager.sessions = new Map([[socket, { roomCode: 'ABCD' }]]);
  manager.rooms = new Map([['ABCD', room]]);
  manager.snapshot = () => { throw new Error('must not take a fresh snapshot during recovery'); };
  manager.syncState(socket);
  assert.deepEqual(socket.sent, [{ type: 'room.state', state: before }]);
});
