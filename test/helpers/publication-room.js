'use strict';

const { RoomManager } = require('../../server/room-manager');
const { rng } = require('./rng');

function publicationRoom(mode, size = 20, { record = true } = {}) {
  const manager = new RoomManager({ now: () => 1000, random: rng(46) });
  const socket = () => ({ readyState: 1, sent: [], send(text) { if (record) this.sent.push(JSON.parse(text)); } });
  const host = socket();
  manager.connect(host);
  manager.createRoom(host, mode);
  const room = [...manager.rooms.values()][0];
  const players = Array.from({ length: 6 }, (_, i) => {
    const seat = socket();
    manager.connect(seat);
    manager.joinRoom(seat, { code: room.code, name: `Player ${i}` });
    return seat;
  });
  for (let i = 0; i < 15; i++) {
    const seat = socket();
    manager.connect(seat);
    manager.joinRoom(seat, { code: room.code, spectate: true });
  }
  manager.startRound(host);
  const actors = mode === 'teamwork' ? [room.engine.game.team] : room.engine.game.competitors;
  const block = i => ({ left: 80, right: 240, width: 160, level: i, color: '#E3A33B', placer: 'Player' });
  for (const actor of actors) {
    actor.stack = Array.from({ length: size }, (_, i) => block(i));
    actor.fallen = Array.from({ length: size }, (_, i) => ({ ...block(i), direction: -1 }));
  }
  room.engine.changed();
  return { manager, room, host, players, actors, socket, block };
}

module.exports = { publicationRoom };
