'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const Replication = require('../shared/room-replication');
const { RoomManager } = require('../server/room-manager');
const { publicationRoom } = require('./helpers/publication-room');
const copy = value => JSON.parse(JSON.stringify(value));

for (const mode of ['teamwork', 'competitive']) {
  test(`${mode}: metadata publications after completion reuse detached results`, () => {
    const { manager, room, host } = publicationRoom(mode);
    if (mode === 'teamwork') room.engine.finishTeamRound(1000);
    else room.engine.finishCompetitiveRound(1000);
    const baseline = copy(room.lastBroadcastState);
    Object.defineProperty(room.engine.game.results, 'players', {
      get() { throw new Error('completed results revisited'); }
    });
    host.sent.length = 0;
    room.engine.changed();
    assert.deepEqual(Replication.receiveDelta(baseline, host.sent[0]).state, copy(room.lastBroadcastState));
    manager.syncState(host);
    assert.deepEqual(host.sent.at(-1).state, copy(room.lastBroadcastState));
  });

  test(`${mode}: disconnect, leave and resume publish no redundant full state`, () => {
    for (const role of ['host', 'player', 'spectator']) {
      const { manager, room, host, players, socket } = publicationRoom(mode);
      const seat = role === 'host' ? host : role === 'player' ? players[0] : room.spectators[0].socket;
      const token = role === 'host' ? room.host.token : role === 'player' ? room.players[0].token : room.spectators[0].token;
      const observer = players[1];
      let baseline = copy(room.lastBroadcastState);
      const check = () => {
        const packets = observer.sent.filter(packet => packet.type === 'room.delta' || packet.type === 'room.state');
        assert.ok(packets.length > 0);
        for (const packet of packets) {
          assert.equal(packet.type, 'room.delta');
          const result = Replication.receiveDelta(baseline, packet);
          assert.equal(result.status, 'apply');
          baseline = result.state;
        }
        assert.deepEqual(baseline, manager.snapshot(room));
        observer.sent.length = 0;
      };
      observer.sent.length = 0;
      manager.disconnect(seat);
      check();
      const back = socket();
      manager.connect(back);
      manager.resumeRoom(back, { code: room.code, resumeToken: token });
      check();
      const admission = back.sent.filter(packet => packet.state || packet.type === 'room.delta');
      assert.equal(admission.length, 1);
      assert.equal(admission[0].type, 'room.resumed');
      assert.deepEqual(admission[0].state, baseline);
      room.engine.changed();
      assert.deepEqual(Replication.receiveDelta(admission[0].state, back.sent.at(-1)).state, manager.snapshot(room));
      check();
      if (role !== 'host') {
        manager.leaveRoom(back);
        if (role === 'spectator') assert.equal(observer.sent.length, 0, 'spectator leave has no wire-visible change');
        else check();
      }
    }
  });

  test(`${mode}: published deltas reconstruct authoritative history through resets and rematch`, () => {
    const { manager, room, host, actors, block } = publicationRoom(mode);
    let baseline = copy(room.lastBroadcastState);
    const check = action => {
      host.sent.length = 0;
      action();
      for (const packet of host.sent.filter(packet => packet.type === 'room.delta')) {
        const result = Replication.receiveDelta(baseline, packet);
        assert.equal(result.status, 'apply');
        baseline = result.state;
      }
      assert.deepEqual(baseline, manager.snapshot(room));
    };
    check(() => { actors[0].perfects++; room.engine.changed(); });
    check(() => {
      for (const actor of actors) { actor.stack.push(block(20)); actor.fallen.push(block(20)); }
      room.engine.changed();
    });
    check(() => { actors[0].stack = [block(100)]; actors[0].fallen.length = 0; room.engine.changed(); });
    check(() => { actors[0].stack = [block(200)]; actors[0].fallen = [block(200)]; room.engine.changed(); });
    check(() => { actors[0].fallen.push(block(201)); room.engine.changed(); });
    if (mode === 'competitive') {
      check(() => { room.engine.game.competitors.reverse(); room.players.reverse(); room.engine.changed(); });
    }
    check(() => room.engine.openVote());
    check(() => room.engine.resolveVote());
    check(() => mode === 'teamwork' ? room.engine.finishTeamRound(1000) : room.engine.finishCompetitiveRound(1000));
    if (mode === 'teamwork') assert.equal(baseline.bestTeamScore, baseline.game.results.score);
    // Give every old history the same length as a new round's base, so a stale
    // store cannot pass by length alone.
    for (const actor of actors) {
      actor.stack = [{ placer: 'OLD ROUND', left: 999 }];
      actor.fallen = [{ placer: 'OLD ROUND', left: 999 }];
    }
    check(() => manager.rematch(host));
    assert.equal(baseline.roundNumber, 2);
    assert.equal(baseline.game.phase, 'playing');
    const stacks = mode === 'teamwork' ? [baseline.game.team.stack] : baseline.game.players.map(player => player.blocks);
    assert.equal(stacks.length, mode === 'teamwork' ? 1 : 6);
    for (const stack of stacks) {
      assert.equal(stack.length, 1);
      assert.notEqual(stack[0].placer, 'OLD ROUND');
    }
    assert.equal(stacks[0][0].placer, mode === 'teamwork' ? 'Base' : room.players.find(player => player.id === baseline.game.players[0].playerId).name);
  });

  test(`${mode}: baseline history is isolated from gameplay and mutable snapshots`, () => {
    const { manager, room, actors } = publicationRoom(mode);
    const baseline = room.lastBroadcastState;
    const original = copy(baseline);
    const view = manager.snapshot(room);
    const wireActor = mode === 'teamwork' ? view.game.team : view.game.players[0];
    (wireActor.stack || wireActor.blocks)[0].left = -100;
    actors[0].stack[0].left = -200;
    actors[0].fallen[0].left = -200;
    actors[0].stack.push({ left: 1 });
    assert.deepEqual(copy(baseline), original);
    // Replacing a history is the explicit way to publish edits to old entries.
    actors[0].stack = actors[0].stack.slice();
    actors[0].fallen = actors[0].fallen.slice();
    room.engine.changed();
    assert.deepEqual(copy(baseline), original);
    assert.deepEqual(copy(room.lastBroadcastState), manager.snapshot(room));
  });

  test(`${mode}: admission gives only the newcomer one exact baseline`, () => {
    const { manager, room, host, socket, actors } = publicationRoom(mode);
    host.sent.length = 0;
    const viewer = socket();
    manager.connect(viewer);
    manager.joinRoom(viewer, { code: room.code, spectate: true });
    const packets = viewer.sent.filter(packet => packet.state || packet.type === 'room.delta');
    assert.equal(packets.length, 1);
    assert.equal(packets[0].type, 'room.joined');
    assert.deepEqual(packets[0].state, copy(room.lastBroadcastState));
    assert.ok(host.sent.every(packet => packet.type !== 'room.state'));
    actors[0].perfects++;
    manager.rooms.get(room.code).engine.changed();
    const next = viewer.sent.at(-1);
    assert.equal(next.type, 'room.delta');
    assert.equal(Replication.receiveDelta(packets[0].state, next).status, 'apply');
  });

  test(`${mode}: scalar publication and tail append never revisit published history`, () => {
    const { manager, room, host, actors, block } = publicationRoom(mode);
    let baseline = copy(room.lastBroadcastState);
    // Reading a historical entry (including cloning or full-state serialization)
    // is observable at the authoritative input, not through a mocked collaborator.
    for (const actor of actors) for (const history of [actor.stack, actor.fallen]) {
      for (let i = 0; i < history.length; i++) {
        Object.defineProperty(history, i, { configurable: true, get() { throw new Error('historical entry revisited'); } });
      }
    }
    for (const append of [false, true]) {
      if (append) for (const actor of actors) {
        actor.stack.push(block(20));
        actor.fallen.push({ ...block(20), direction: 1 });
      }
      actors[0].perfects++;
      host.sent.length = 0;
      room.engine.changed();
      assert.equal(host.sent.length, 1);
      assert.equal(host.sent[0].type, 'room.delta');
      const result = Replication.receiveDelta(baseline, host.sent[0]);
      assert.equal(result.status, 'apply');
      assert.deepEqual(result.state, copy(room.lastBroadcastState));
      baseline = result.state;
      manager.syncState(host);
      assert.deepEqual(host.sent.at(-1).state, baseline);
    }
  });
}

test('teamwork: a resumed socket still receives round events around its one baseline', () => {
  const { manager, room, players, socket } = publicationRoom('teamwork');
  const tokens = room.players.map(player => player.token);
  for (const player of players) manager.disconnect(player);
  const back = socket();
  manager.connect(back);
  manager.resumeRoom(back, { code: room.code, resumeToken: tokens[0] });
  const baseline = back.sent.filter(packet => packet.type === 'room.resumed');
  assert.equal(baseline.length, 1);
  assert.equal(baseline[0].state.game.paused, false);
  assert.ok(back.sent.some(packet => packet.type === 'round.resumed'), 'resume event still reaches the socket');
  assert.ok(back.sent.every(packet => packet.type !== 'room.state' && packet.type !== 'room.delta'));
});

for (const mode of ['teamwork', 'competitive']) test(`${mode}: lobby player join and leave send only membership deltas to existing seats`, () => {
  const manager = new RoomManager({ now: () => 1000 });
  const socket = () => ({ readyState: 1, sent: [], send(text) { this.sent.push(JSON.parse(text)); } });
  const host = socket();
  manager.connect(host);
  manager.createRoom(host, mode);
  const room = [...manager.rooms.values()][0];
  let baseline = copy(room.lastBroadcastState);
  const players = [];
  for (let i = 0; i < 3; i++) {
    const player = socket();
    manager.connect(player);
    host.sent.length = 0;
    manager.joinRoom(player, { code: room.code, name: `Player ${i}` });
    assert.equal(host.sent.length, 1);
    assert.equal(host.sent[0].type, 'room.delta');
    baseline = Replication.receiveDelta(baseline, host.sent[0]).state;
    const admission = player.sent.filter(packet => packet.state || packet.type === 'room.delta');
    assert.equal(admission.length, 1);
    assert.deepEqual(admission[0].state, baseline);
    players.push(player);
  }
  host.sent.length = 0;
  manager.leaveRoom(players[1]);
  assert.equal(host.sent.length, 1);
  assert.equal(host.sent[0].type, 'room.delta');
  assert.deepEqual(Replication.receiveDelta(baseline, host.sent[0]).state, manager.snapshot(room));
});
