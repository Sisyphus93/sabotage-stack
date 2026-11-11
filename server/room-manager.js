'use strict';

const crypto = require('node:crypto');
const { RoundEngine } = require('./round-engine');

const MAX_PLAYERS = 6;
const HOST_ABSENCE_GRACE_MS = 10_000;
const ROOM_CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const PLAYER_COLORS = Object.freeze(['#E3A33B', '#2F8478', '#7FA6BD', '#D5472F', '#7A6AA6', '#C96F8A']);
const VALID_MODES = new Set(['teamwork', 'competitive']);
const IDLE_LIMIT_MS = 10 * 60 * 1000;
const MAX_ROOMS = 1000;
// Per-connection message budget. A real client sends ~13 position updates a second plus the occasional drop or ping,
// so this is an order of magnitude above legitimate traffic and only ever stops floods.
const MESSAGE_BURST = 200;
const MESSAGE_REFILL_PER_SECOND = 100;
const MESSAGE_ABUSE_CLOSE_AFTER = 400;

function cleanDisplayName(value) {
  if (typeof value !== 'string') return '';
  return Array.from(value.normalize('NFKC').replace(/[\u0000-\u001F\u007F-\u009F]/g, '').replace(/\s+/g, ' ').trim()).slice(0, 12).join('');
}

function uniqueDisplayName(value, players) {
  const base = cleanDisplayName(value) || 'Player';
  const keys = new Set(players.map(player => player.name.normalize('NFKC').toLocaleLowerCase('en')));
  if (!keys.has(base.normalize('NFKC').toLocaleLowerCase('en'))) return base;
  for (let number = 2; number < 1000; number += 1) {
    const suffix = ` ${number}`;
    const candidate = `${Array.from(base).slice(0, 12 - suffix.length).join('').trimEnd()}${suffix}`;
    if (!keys.has(candidate.normalize('NFKC').toLocaleLowerCase('en'))) return candidate;
  }
  return `Player ${players.length + 1}`.slice(0, 12);
}

function safeSend(socket, message) {
  if (!socket || typeof socket.send !== 'function' || socket.readyState === 2 || socket.readyState === 3) return false;
  try {
    socket.send(JSON.stringify(message));
    return true;
  } catch (_) {
    return false;
  }
}

class RoomManager {
  constructor({ now = Date.now, random = Math.random, randomBytes = crypto.randomBytes, idleLimitMs = IDLE_LIMIT_MS, onClose = null, maxRooms = MAX_ROOMS, messageBurst = MESSAGE_BURST, messageRefillPerSecond = MESSAGE_REFILL_PER_SECOND } = {}) {
    this.now = now;
    this.random = random;
    this.randomBytes = randomBytes;
    this.idleLimitMs = idleLimitMs;
    this.onClose = onClose;
    this.maxRooms = maxRooms;
    this.messageBurst = messageBurst;
    this.messageRefillPerSecond = messageRefillPerSecond;
    this.budgets = new WeakMap();
    this.rooms = new Map();
    this.sessions = new Map();
    this.roomCounter = 0;
  }

  connect(socket) {
    if (!socket || typeof socket.send !== 'function') throw new TypeError('A WebSocket-like client is required.');
    this.sessions.set(socket, null);
    safeSend(socket, { type: 'connected', protocol: 1 });
  }

  allowMessage(socket) {
    const now = this.now();
    let budget = this.budgets.get(socket);
    if (!budget) { budget = { tokens: this.messageBurst, at: now, strikes: 0 }; this.budgets.set(socket, budget); }
    const elapsed = Math.max(0, now - budget.at) / 1000;
    budget.tokens = Math.min(this.messageBurst, budget.tokens + elapsed * this.messageRefillPerSecond);
    budget.at = now;
    if (budget.tokens >= 1) { budget.tokens -= 1; budget.strikes = 0; return true; }
    budget.strikes += 1;
    if (budget.strikes === 1) this.error(socket, 'RATE_LIMITED', 'You are sending messages too quickly.');
    if (budget.strikes >= MESSAGE_ABUSE_CLOSE_AFTER && typeof socket.close === 'function') {
      try { socket.close(1008, 'Message flood'); } catch (_) { /* already closing */ }
    }
    return false;
  }

  receive(socket, raw) {
    if (!this.sessions.has(socket)) this.connect(socket);
    if (!this.allowMessage(socket)) return;
    let message;
    try {
      const text = Buffer.isBuffer(raw) ? raw.toString('utf8') : String(raw);
      if (Buffer.byteLength(text, 'utf8') > 16 * 1024) return this.error(socket, 'MESSAGE_TOO_LARGE', 'Message is too large.');
      message = JSON.parse(text);
    } catch (_) {
      return this.error(socket, 'INVALID_JSON', 'Send a valid JSON message.');
    }
    if (!message || typeof message !== 'object' || Array.isArray(message) || typeof message.type !== 'string') {
      return this.error(socket, 'INVALID_MESSAGE', 'Message must have a type.');
    }

    const session = this.sessions.get(socket);
    if (session && session.roomCode && message.type !== 'client.ping') {
      const room = this.rooms.get(session.roomCode);
      if (room) room.lastActivityAt = this.now();
    }

    switch (message.type) {
      case 'room.create': return this.createRoom(socket, message.mode, message.reducedMotion);
      case 'room.join': return this.joinRoom(socket, message);
      case 'room.resume': return this.resumeRoom(socket, message);
      case 'client.preferences': return this.updateClientPreferences(socket, message);
      case 'round.start': return this.startRound(socket);
      case 'round.rematch': return this.rematch(socket);
      case 'room.leave': return this.leaveRoom(socket);
      case 'room.close': return this.closeRoomForHost(socket);
      case 'player.position': return this.playerAction(socket, message, 'position');
      case 'player.drop': return this.playerAction(socket, message, 'drop');
      case 'team.ready': return this.teamReady(socket);
      case 'team.skip': return this.teamSkip(socket, message);
      case 'vote.cast': return this.voteCast(socket, message);
      case 'client.ping': return safeSend(socket, { type: 'server.pong', at: this.now() });
      default: return this.error(socket, 'UNKNOWN_MESSAGE', 'That message type is not supported.');
    }
  }

  disconnect(socket) {
    const session = this.sessions.get(socket);
    this.sessions.delete(socket);
    if (!session) return;
    const room = this.rooms.get(session.roomCode);
    if (!room) return;
    // A socket that was replaced by a newer connection (phone changed network, tab refreshed, laptop slept) closes late.
    // That must not mark the person disconnected, end their Competitive run, or silence the host's new socket.
    if (session.role === 'host' ? room.host.socket !== socket
      : (room.players.find(item => item.id === session.playerId) || {}).socket !== socket) return;
    room.lastActivityAt = this.now();
    if (session.role === 'host') {
      room.host.connected = false;
      room.host.socket = null;
      room.host.disconnectedAt = this.now();
      room.host.absenceReadyBroadcast = false;
      if (room.engine) room.engine.hostDisconnected();
    } else {
      const player = room.players.find(item => item.id === session.playerId);
      if (player) {
        player.connected = false;
        player.socket = null;
        player.lastDisconnectedAt = this.now();
        if (room.engine) room.engine.playerDisconnected(player.id, this.now());
      }
    }
    this.broadcastState(room);
  }

  createRoom(socket, mode, reducedMotion = false) {
    if (this.hasRoomSession(socket)) return this.error(socket, 'ALREADY_IN_ROOM', 'Leave the current room before creating another.');
    if (!VALID_MODES.has(mode)) return this.error(socket, 'INVALID_MODE', 'Choose Teamwork or Competitive.');
    if (this.rooms.size >= this.maxRooms) return this.error(socket, 'SERVER_BUSY', 'The server is hosting as many rooms as it can. Try again shortly.');
    const code = this.nextRoomCode();
    const token = this.newToken();
    const now = this.now();
    const room = {
      code, mode, phase: 'lobby', createdAt: now, lastActivityAt: now,
      host: { token, connected: true, socket, reducedMotion: Boolean(reducedMotion), disconnectedAt: null, absenceReadyBroadcast: false }, players: [], roundNumber: 0, game: null, engine: null,
      bestTeamScore: 0
    };
    this.rooms.set(code, room);
    this.sessions.set(socket, { roomCode: code, role: 'host', playerId: null });
    safeSend(socket, { type: 'room.created', code, role: 'host', resumeToken: token, state: this.snapshot(room) });
    this.broadcastState(room);
  }

  joinRoom(socket, message) {
    if (this.hasRoomSession(socket)) return this.error(socket, 'ALREADY_IN_ROOM', 'Leave the current room before joining another.');
    const code = this.normalizeCode(message.code);
    const room = this.rooms.get(code);
    if (!room) return this.error(socket, 'ROOM_NOT_FOUND', 'That room code was not found.');
    if (room.phase !== 'lobby') return this.error(socket, 'ROOM_LOCKED', 'This room has already started.');
    if (room.players.length >= MAX_PLAYERS) return this.error(socket, 'ROOM_FULL', 'This room already has six players.');
    const name = uniqueDisplayName(message.name, room.players);
    const player = {
      id: this.newId(), token: this.newToken(), name,
      color: PLAYER_COLORS.find(color => !room.players.some(existing => existing.color === color)) || PLAYER_COLORS[room.players.length % PLAYER_COLORS.length],
      connected: true, socket, joinedAt: this.now(), lastDisconnectedAt: null, ended: false,
      reducedMotion: Boolean(message.reducedMotion)
    };
    room.players.push(player);
    room.lastActivityAt = this.now();
    this.sessions.set(socket, { roomCode: code, role: 'player', playerId: player.id });
    safeSend(socket, { type: 'room.joined', code, role: 'player', playerId: player.id, resumeToken: player.token, state: this.snapshot(room) });
    this.broadcastState(room);
  }

  updateClientPreferences(socket, message) {
    const session = this.sessions.get(socket);
    if (!session) return this.error(socket, 'NOT_IN_ROOM', 'Join a room before updating preferences.');
    const room = this.rooms.get(session.roomCode);
    if (!room) return this.error(socket, 'ROOM_NOT_FOUND', 'That room is no longer available.');
    const reducedMotion = Boolean(message.reducedMotion);
    if (session.role === 'host') {
      room.host.reducedMotion = reducedMotion;
      if (room.engine) room.engine.motionPrefersReduced = reducedMotion;
    } else {
      const player = room.players.find(item => item.id === session.playerId);
      if (!player) return this.error(socket, 'PLAYER_INACTIVE', 'The player is no longer in this room.');
      player.reducedMotion = reducedMotion;
    }
    room.lastActivityAt = this.now();
    safeSend(socket, { type: 'preferences.updated', reducedMotion });
    this.broadcastState(room);
  }

  resumeRoom(socket, message) {
    if (this.hasRoomSession(socket)) return this.error(socket, 'ALREADY_IN_ROOM', 'Leave the current room before reconnecting.');
    const code = this.normalizeCode(message.code);
    const token = typeof message.resumeToken === 'string' ? message.resumeToken : '';
    const room = this.rooms.get(code);
    if (!room) return this.error(socket, 'ROOM_NOT_FOUND', 'That room has closed or the code is incorrect.');
    if (!token) return this.error(socket, 'INVALID_RESUME', 'A reconnect token is required.');

    let role = null;
    let playerId = null;
    if (this.tokensMatch(token, room.host.token)) {
      role = 'host';
      this.detachSuperseded(room.host.socket, socket);
      room.host.connected = true;
      room.host.socket = socket;
      room.host.disconnectedAt = null;
      room.host.absenceReadyBroadcast = false;
      if (typeof message.reducedMotion === 'boolean') room.host.reducedMotion = message.reducedMotion;
      if (room.engine) room.engine.motionPrefersReduced = Boolean(room.host.reducedMotion);
    } else {
      const player = room.players.find(item => this.tokensMatch(token, item.token));
      if (player) {
        role = 'player';
        playerId = player.id;
        this.detachSuperseded(player.socket, socket);
        player.connected = true;
        player.socket = socket;
        if (typeof message.reducedMotion === 'boolean') player.reducedMotion = message.reducedMotion;
        // The round engine restores a disconnected Competitive stack only within its grace window.
      }
    }
    if (!role) return this.error(socket, 'INVALID_RESUME', 'Reconnect token was not recognized for this room.');
    room.lastActivityAt = this.now();
    this.sessions.set(socket, { roomCode: code, role, playerId });
    if (playerId && room.engine) room.engine.playerReconnected(playerId, this.now());
    const packet = { type: 'room.resumed', code, role, state: this.snapshot(room) };
    if (playerId) packet.playerId = playerId;
    safeSend(socket, packet);
    this.broadcastState(room);
  }

  // The previous socket for a role stays open but inert: it loses its session (so it can no longer act and its eventual
  // close is ignored). It is deliberately not closed from here, otherwise two tabs sharing one token would keep
  // reconnecting over each other forever.
  detachSuperseded(previousSocket, nextSocket) {
    if (previousSocket && previousSocket !== nextSocket) this.sessions.delete(previousSocket);
  }

  startRound(socket) {
    const { room } = this.requireHost(socket);
    if (!room) return;
    if (room.phase !== 'lobby') return this.error(socket, 'ROUND_ALREADY_STARTED', 'The room is no longer in the lobby.');
    if (room.players.filter(player => player.connected).length < 2) return this.error(socket, 'NEED_TWO_PLAYERS', 'At least two connected players are needed to start.');
    room.roundNumber += 1;
    room.lastActivityAt = this.now();
    this.beginRound(room);
    this.broadcast(room, { type: 'round.started', state: this.snapshot(room) });
  }

  rematch(socket) {
    const session = this.sessions.get(socket);
    const room = session && this.rooms.get(session.roomCode);
    if (!room) return this.error(socket, 'NOT_IN_ROOM', 'Join a room before starting a rematch.');
    const player = session.role === 'player' && room.players.find(item => item.id === session.playerId && item.connected && item.socket === socket);
    const host = session.role === 'host' && room.host.connected && room.host.socket === socket;
    if (!host && !(player && this.canRematchWithoutHost(room))) return this.error(socket, 'HOST_ONLY', 'Wait for the host or until the host has been away for ten seconds.');
    if (room.phase !== 'results') return this.error(socket, 'ROUND_NOT_FINISHED', 'A rematch is available after the round ends.');
    room.roundNumber += 1;
    room.lastActivityAt = this.now();
    this.beginRound(room);
    this.broadcast(room, { type: 'round.started', state: this.snapshot(room) });
  }

  leaveRoom(socket) {
    const session = this.sessions.get(socket);
    if (!session) return this.error(socket, 'NOT_IN_ROOM', 'You are not in a room.');
    const room = this.rooms.get(session.roomCode);
    if (!room) { this.sessions.delete(socket); return; }
    if (session.role === 'host') {
      this.error(socket, 'HOST_CANNOT_LEAVE', 'The host can close the room from the stream view.');
      return;
    }
    const index = room.players.findIndex(player => player.id === session.playerId);
    const player = index >= 0 ? room.players[index] : null;
    if (room.phase === 'lobby') {
      if (index >= 0) room.players.splice(index, 1);
    } else if (player) {
      player.connected = false;
      player.socket = null;
      player.lastDisconnectedAt = this.now();
      if (room.engine) room.engine.playerDisconnected(player.id, this.now());
    }
    this.sessions.delete(socket);
    room.lastActivityAt = this.now();
    safeSend(socket, { type: 'room.left', code: room.code });
    this.broadcastState(room);
  }

  beginRound(room) {
    let engine;
    engine = new RoundEngine({
      mode: room.mode,
      players: room.players,
      motionPrefersReduced: Boolean(room.host.reducedMotion),
      isHostConnected: () => room.host.connected,
      now: this.now,
      random: this.random,
      onEvent: (type, payload) => this.broadcast(room, { type, code: room.code, ...payload }),
      onChange: (_type, game) => {
        room.phase = game.phase;
        if (room.mode === 'teamwork' && game.phase === 'results' && game.results) {
          room.bestTeamScore = Math.max(room.bestTeamScore || 0, Number(game.results.score) || 0);
          // Stored on the engine's own results so the room snapshot below carries it too.
          if (engine.game && engine.game.results) engine.game.results.bestTeamScore = room.bestTeamScore;
        }
        // One message per change. `room.state` already contains the complete game snapshot, so also sending a separate
        // `game.state` doubled the bandwidth to every phone (about 52 KB each per change at height 40 with six racers).
        this.broadcastState(room);
      }
    });
    room.engine = engine;
    room.game = null;
    room.phase = 'playing';
    engine.start(room.roundNumber);
  }

  playerAction(socket, message, action) {
    const session = this.sessions.get(socket);
    if (!session || session.role !== 'player') return this.error(socket, 'PLAYER_ONLY', 'Join the room as a player first.');
    const room = this.rooms.get(session.roomCode);
    if (!room || !room.engine) return this.error(socket, 'ROUND_NOT_LIVE', 'There is no live round.');
    const result = action === 'position'
      ? room.engine.position(session.playerId, message)
      : room.engine.drop(session.playerId, message);
    if (!result.ok) return this.error(socket, result.code || 'ACTION_REJECTED', 'That action is not valid right now.', {
      action, requestId: result.requestId || message.requestId || null,
      authoritativeX: Number.isFinite(result.authoritativeX) ? result.authoritativeX : null
    });
    room.lastActivityAt = this.now();
    if (action === 'drop') safeSend(socket, {
      type: 'drop.ack', requestId: result.requestId || message.requestId || null, playerId: session.playerId,
      ignored: Boolean(result.ignored), collapsed: Boolean(result.collapsed), duplicate: Boolean(result.duplicate),
      authoritativeX: Number.isFinite(result.authoritativeX) ? result.authoritativeX : null
    });
    return result;
  }

  teamReady(socket) {
    const session = this.sessions.get(socket);
    if (!session || session.role !== 'player') return this.error(socket, 'PLAYER_ONLY', 'Only players can return to the rotation.');
    const room = this.rooms.get(session.roomCode);
    if (!room || !room.engine) return this.error(socket, 'ROUND_NOT_LIVE', 'There is no live round.');
    const result = room.engine.teamReady(session.playerId, this.now());
    if (!result.ok) return this.error(socket, result.code, 'Cannot return to the rotation right now.');
  }

  teamSkip(socket, message) {
    const { room } = this.requireHost(socket);
    if (!room) return;
    if (!room.engine) return this.error(socket, 'ROUND_NOT_LIVE', 'There is no live round.');
    const result = room.engine.hostSkipTeamTurn(message.turnId, this.now());
    if (!result.ok) return this.error(socket, result.code, 'That turn can no longer be skipped.');
  }

  voteCast(socket, message) {
    const session = this.sessions.get(socket);
    if (!session || !session.roomCode) return this.error(socket, 'NOT_IN_ROOM', 'Join a room before voting.');
    if (session.role === 'host') return this.hostVote(socket, message);
    if (session.role === 'player') return this.playerVote(socket, message);
    return this.error(socket, 'INVALID_ROLE', 'This connection cannot vote.');
  }

  hostVote(socket, message) {
    const { room } = this.requireHost(socket);
    if (!room) return;
    if (!room.engine) return this.error(socket, 'ROUND_NOT_LIVE', 'There is no live round.');
    const result = room.mode === 'teamwork'
      ? room.engine.castHostTiebreak(message.option)
      : room.engine.castManualVote(message.option);
    if (!result.ok) return this.error(socket, result.code || 'VOTE_REJECTED', 'That vote was not counted.', { action: 'vote' });
    room.lastActivityAt = this.now();
  }

  playerVote(socket, message) {
    const session = this.sessions.get(socket);
    if (!session || session.role !== 'player') return this.error(socket, 'PLAYER_ONLY', 'Join the room as a player first.');
    const room = this.rooms.get(session.roomCode);
    if (!room || !room.engine) return this.error(socket, 'ROUND_NOT_LIVE', 'There is no live round.');
    if (room.mode !== 'teamwork') return this.error(socket, 'HOST_ONLY', 'Only the host can do that.');
    const result = room.engine.castTeamworkPlayerVote(session.playerId, message.option);
    if (!result.ok) return this.error(socket, result.code || 'VOTE_REJECTED', 'That vote was not counted.', { action: 'vote' });
    room.lastActivityAt = this.now();
  }

  tick() {
    const now = this.now();
    for (const room of this.rooms.values()) {
      if (room.engine && room.phase === 'playing') room.engine.tick(now);
      if (!room.host.absenceReadyBroadcast && this.canRematchWithoutHost(room, now)) {
        room.host.absenceReadyBroadcast = true;
        this.broadcastState(room);
      }
    }
  }

  closeRoomForHost(socket) {
    const { room } = this.requireHost(socket);
    if (!room) return;
    this.closeRoom(room, 'The host closed this room.');
  }

  closeRoom(roomOrCode, reason = 'Room closed.') {
    const room = typeof roomOrCode === 'string' ? this.rooms.get(roomOrCode) : roomOrCode;
    if (!room || !this.rooms.has(room.code)) return false;
    const sockets = [room.host.socket, ...room.players.map(player => player.socket)].filter(Boolean);
    for (const socket of sockets) {
      safeSend(socket, { type: 'room.closed', code: room.code, reason });
      this.sessions.delete(socket);
    }
    this.rooms.delete(room.code);
    if (typeof this.onClose === 'function') this.onClose(room.code, reason);
    return true;
  }

  sweepIdle() {
    const now = this.now();
    const closed = [];
    for (const room of this.rooms.values()) {
      if (now - room.lastActivityAt >= this.idleLimitMs) {
        closed.push(room.code);
        this.closeRoom(room, 'Room closed after ten minutes without activity.');
      }
    }
    return closed;
  }

  canRematchWithoutHost(room, now = this.now()) {
    return !room.host.connected && room.host.disconnectedAt != null && now - room.host.disconnectedAt >= HOST_ABSENCE_GRACE_MS;
  }

  snapshot(roomOrCode) {
    const room = typeof roomOrCode === 'string' ? this.rooms.get(roomOrCode) : roomOrCode;
    if (!room) return null;
    return {
      code: room.code, mode: room.mode, phase: room.phase, roundNumber: room.roundNumber,
      reducedMotion: Boolean(room.host.reducedMotion || room.players.some(player => player.connected && player.reducedMotion)),
      hostConnected: room.host.connected, canRematchWithoutHost: this.canRematchWithoutHost(room), bestTeamScore: room.bestTeamScore || 0,
      players: room.players.map(player => ({
        id: player.id, name: player.name, color: player.color,
        connected: player.connected, ended: Boolean(player.ended)
      })),
      canStart: room.phase === 'lobby' && room.players.filter(player => player.connected).length >= 2,
      game: room.engine ? room.engine.snapshot(this.now()) : room.game ? structuredClone(room.game) : null
    };
  }

  broadcastState(room) {
    this.broadcast(room, { type: 'room.state', state: this.snapshot(room) });
  }

  broadcast(room, message) {
    safeSend(room.host.socket, message);
    for (const player of room.players) if (player.connected) safeSend(player.socket, message);
  }

  error(socket, code, message, details = null) {
    safeSend(socket, { type: 'error', code, message, ...(details && typeof details === 'object' ? details : {}) });
  }

  requireHost(socket) {
    const session = this.sessions.get(socket);
    if (!session || session.role !== 'host') {
      this.error(socket, 'HOST_ONLY', 'Only the host can do that.');
      return { room: null, session: null };
    }
    const room = this.rooms.get(session.roomCode);
    if (!room) {
      this.sessions.delete(socket);
      this.error(socket, 'ROOM_NOT_FOUND', 'That room has closed.');
      return { room: null, session: null };
    }
    return { room, session };
  }

  hasRoomSession(socket) {
    const session = this.sessions.get(socket);
    return Boolean(session && session.roomCode);
  }

  normalizeCode(value) {
    return typeof value === 'string' ? value.trim().toUpperCase().replace(/[^A-Z]/g, '').slice(0, 4) : '';
  }

  nextRoomCode() {
    for (let attempts = 0; attempts < 100; attempts += 1) {
      const bytes = this.randomBytes(4);
      const code = Array.from(bytes, byte => ROOM_CODE_ALPHABET[byte % ROOM_CODE_ALPHABET.length]).join('');
      if (!this.rooms.has(code)) return code;
    }
    this.roomCounter += 1;
    return this.roomCounter.toString(36).toUpperCase().padStart(4, '0').slice(-4);
  }

  newToken() { return this.randomBytes(24).toString('base64url'); }
  newId() { return this.randomBytes(12).toString('hex'); }

  tokensMatch(supplied, expected) {
    if (typeof supplied !== 'string' || typeof expected !== 'string' || supplied.length !== expected.length) return false;
    return crypto.timingSafeEqual(Buffer.from(supplied), Buffer.from(expected));
  }
}

module.exports = { RoomManager, MAX_ROOMS, MAX_PLAYERS, PLAYER_COLORS, ROOM_CODE_ALPHABET, IDLE_LIMIT_MS, cleanDisplayName, uniqueDisplayName };
