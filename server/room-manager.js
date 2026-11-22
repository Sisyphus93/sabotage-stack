'use strict';

const crypto = require('node:crypto');
const { RoundEngine } = require('./round-engine');
const Replication = require('../shared/room-replication');
const { sharedHistoryPrefixLength } = require('./publication-history');

const MAX_PLAYERS = 6;
const MAX_SPECTATORS = 16;
const SPECTATOR_RECONNECT_MS = 120_000;
const HOST_ABSENCE_GRACE_MS = 10_000;
const ROOM_CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const PLAYER_COLORS = Object.freeze(['#E3A33B', '#2F8478', '#7FA6BD', '#D5472F', '#7A6AA6', '#C96F8A']);
const VALID_MODES = new Set(['teamwork', 'competitive']);
const IDLE_LIMIT_MS = 10 * 60 * 1000;
// An Abandoned Room (see GLOSSARY.md) has nobody left to come back to it, so it does not get the full idle limit.
const ABANDONED_LIMIT_MS = 60_000;
const MAX_ROOMS = 1000;
// Per-connection message budget. A real client sends ~13 position updates a second plus the occasional drop or ping,
// so this is an order of magnitude above legitimate traffic and only ever stops floods.
const MESSAGE_BURST = 200;
const MESSAGE_REFILL_PER_SECOND = 100;
const MESSAGE_ABUSE_CLOSE_AFTER = 400;
// Guess budget, one bucket per client key (see clientKeyOf). With no trustworthy client address the key is null:
// each connection then has its own budget (and is closed once it runs out), and every keyless connection also
// shares a much larger backstop bucket, so reconnecting still cannot reset the budget without limit.
const JOIN_FAILURE_LIMIT = 60;
const CONNECTION_JOIN_FAILURE_LIMIT = 60;
const SHARED_JOIN_FAILURE_LIMIT = 1000;
const JOIN_FAILURE_WINDOW_MS = 60_000;
// A real client changes its motion preference when the OS setting or the menu changes, a handful of times per
// session. Anything faster is either a fight over the toggle or an attempt to amplify traffic.
const PREFERENCE_BURST = 5;
const PREFERENCE_REFILL_PER_SECOND = 2;
// Shared buckets are pruned by age; a stale entry is only ever a few hundred bytes and is dropped on write.
const KEYED_BUDGET_IDLE_MS = 5 * 60 * 1000;
const JOIN_FAILURE_MAX_KEYS = 10_000;
const SHARED_CLIENT_KEY = '__shared__';
// Rooms one client may hold open, and how many it may create in a window. Skipped while the client key is unknown.
const ROOMS_PER_CLIENT = 5;
const ROOM_CREATE_LIMIT = 10;
const ROOM_CREATE_WINDOW_MS = 10 * 60 * 1000;
const ROOM_CREATE_MAX_KEYS = 10_000;
// One creation bucket for the whole server, whether or not a client key is known: without a key it is the only
// thing between a connect/create/disconnect loop and a full room table.
const ROOM_CREATE_BURST = 10;
const ROOM_CREATE_REFILL_PER_MINUTE = 30;

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
  return safeSendRaw(socket, JSON.stringify(message));
}

// The same guard, for a text that was serialised once for many recipients.
function safeSendRaw(socket, text) {
  if (!socket || typeof socket.send !== 'function' || socket.readyState === 2 || socket.readyState === 3) return false;
  try {
    socket.send(text);
    return true;
  } catch (_) {
    return false;
  }
}

class RoomManager {
  constructor({ now = Date.now, random = Math.random, randomBytes = crypto.randomBytes, idleLimitMs = IDLE_LIMIT_MS, abandonedLimitMs = ABANDONED_LIMIT_MS, onClose = null, maxRooms = MAX_ROOMS, messageBurst = MESSAGE_BURST, messageRefillPerSecond = MESSAGE_REFILL_PER_SECOND, joinFailureLimit = JOIN_FAILURE_LIMIT, connectionJoinFailureLimit = CONNECTION_JOIN_FAILURE_LIMIT, sharedJoinFailureLimit = SHARED_JOIN_FAILURE_LIMIT, joinFailureWindowMs = JOIN_FAILURE_WINDOW_MS, roomsPerClient = ROOMS_PER_CLIENT, roomCreateLimit = ROOM_CREATE_LIMIT, roomCreateWindowMs = ROOM_CREATE_WINDOW_MS, roomCreateBurst = ROOM_CREATE_BURST, roomCreateRefillPerMinute = ROOM_CREATE_REFILL_PER_MINUTE, preferenceBurst = PREFERENCE_BURST, preferenceRefillPerSecond = PREFERENCE_REFILL_PER_SECOND } = {}) {
    this.now = now;
    this.random = random;
    this.randomBytes = randomBytes;
    this.idleLimitMs = idleLimitMs;
    this.abandonedLimitMs = abandonedLimitMs;
    this.onClose = onClose;
    this.maxRooms = maxRooms;
    this.messageBurst = messageBurst;
    this.messageRefillPerSecond = messageRefillPerSecond;
    this.joinFailureLimit = Math.max(1, joinFailureLimit);
    this.joinFailureWindowMs = Math.max(1, joinFailureWindowMs);
    this.connectionJoinFailureLimit = Math.max(1, connectionJoinFailureLimit);
    this.sharedJoinFailureLimit = Math.max(1, sharedJoinFailureLimit);
    this.joinFailures = new Map();
    this.connectionJoinFailures = new WeakMap();
    this.roomsPerClient = Math.max(1, roomsPerClient);
    this.roomCreateLimit = Math.max(1, roomCreateLimit);
    this.roomCreateWindowMs = Math.max(1, roomCreateWindowMs);
    this.roomCreateBurst = Math.max(1, roomCreateBurst);
    this.roomCreateRefillPerMinute = Math.max(0, roomCreateRefillPerMinute);
    this.serverRoomCreateBudget = null;
    this.preferenceBurst = Math.max(1, preferenceBurst);
    this.preferenceRefillPerSecond = Math.max(0, preferenceRefillPerSecond);
    this.preferenceBudgets = new WeakMap();
    this.keyedMessageBudgets = new Map();
    this.roomCreations = new Map();
    this.clientKeys = new WeakMap();
    this.budgets = new WeakMap();
    this.rooms = new Map();
    this.sessions = new Map();
    this.roomCounter = 0;
  }

  // clientKey is the trusted per-client identity computed by the connection handler (server.js). It stays null
  // until a trustworthy source is configured, and null means "do not enforce per-client caps".
  connect(socket, { clientKey = null } = {}) {
    if (!socket || typeof socket.send !== 'function') throw new TypeError('A WebSocket-like client is required.');
    this.sessions.set(socket, null);
    this.clientKeys.set(socket, typeof clientKey === 'string' && clientKey ? clientKey : null);
    safeSend(socket, { type: 'connected', protocol: 1 });
  }

  clientKeyOf(socket) {
    return this.clientKeys.get(socket) || null;
  }

  // One failure bucket per client key, or the single shared bucket when the key is unknown. Bounded so a
  // spread across many addresses cannot grow the map without limit; expired buckets are pruned on write.
  joinBucket(socket, now = this.now()) {
    return this.currentJoinWindow(this.joinFailures.get(this.clientKeyOf(socket) || SHARED_CLIENT_KEY), now);
  }

  connectionJoinBucket(socket, now = this.now()) {
    return this.currentJoinWindow(this.connectionJoinFailures.get(socket), now);
  }

  joinWindowExpired(bucket, now) {
    return now - bucket.windowStart >= this.joinFailureWindowMs || now < bucket.windowStart;
  }

  currentJoinWindow(bucket, now) {
    if (!bucket) return null;
    if (this.joinWindowExpired(bucket, now)) {
      bucket.count = 0;
      bucket.windowStart = now;
    }
    return bucket;
  }

  spendJoinFailure(socket, now = this.now()) {
    const key = this.clientKeyOf(socket) || SHARED_CLIENT_KEY;
    let bucket = this.joinBucket(socket, now);
    if (!bucket) {
      if (this.joinFailures.size >= JOIN_FAILURE_MAX_KEYS) this.pruneJoinFailures(now);
      bucket = { count: 0, windowStart: now };
      this.joinFailures.set(key, bucket);
    }
    bucket.count += 1;
    if (key === SHARED_CLIENT_KEY) {
      let connectionBucket = this.connectionJoinBucket(socket, now);
      if (!connectionBucket) { connectionBucket = { count: 0, windowStart: now }; this.connectionJoinFailures.set(socket, connectionBucket); }
      connectionBucket.count += 1;
    }
    return bucket.count;
  }

  pruneJoinFailures(now = this.now()) {
    for (const [key, bucket] of this.joinFailures) {
      if (this.joinWindowExpired(bucket, now)) this.joinFailures.delete(key);
    }
    // Every bucket in the window at the cap: drop the oldest so the newest failure is still recorded.
    while (this.joinFailures.size >= JOIN_FAILURE_MAX_KEYS) this.joinFailures.delete(this.joinFailures.keys().next().value);
  }

  isJoinThrottled(socket, now = this.now()) {
    const bucket = this.joinBucket(socket, now);
    if (this.clientKeyOf(socket) != null) return Boolean(bucket && bucket.count >= this.joinFailureLimit);
    return Boolean(bucket && bucket.count >= this.sharedJoinFailureLimit) || this.isConnectionJoinExhausted(socket, now);
  }

  isConnectionJoinExhausted(socket, now = this.now()) {
    if (this.clientKeyOf(socket) != null) return false;
    const connectionBucket = this.connectionJoinBucket(socket, now);
    return Boolean(connectionBucket && connectionBucket.count >= this.connectionJoinFailureLimit);
  }

  // Answers a throttled join or resume. A keyless connection that ran through its own budget is also closed, as
  // a message flood is: the shared backstop is the only other limit, and one connection must not drain it.
  refuseThrottledJoin(socket, now = this.now()) {
    this.error(socket, 'JOIN_RATE_LIMITED', 'Too many unsuccessful room attempts. Please wait a moment and try again.');
    if (this.isConnectionJoinExhausted(socket, now) && typeof socket.close === 'function') {
      try { socket.close(1008, 'Too many unsuccessful room attempts'); } catch (_) { /* already closing */ }
    }
  }

  // Creation budget, one bucket per client key. Together with the concurrent-room cap it stops one client from
  // holding the whole room table; both are skipped when the key is null (no trustworthy address configured).
  roomCreateBucket(key, now) {
    let bucket = this.roomCreations.get(key);
    if (!bucket || now - bucket.windowStart >= this.roomCreateWindowMs || now < bucket.windowStart) {
      bucket = { count: 0, windowStart: now };
      if (!this.roomCreations.has(key) && this.roomCreations.size >= ROOM_CREATE_MAX_KEYS) {
        for (const [existing, entry] of this.roomCreations) {
          if (now - entry.windowStart >= this.roomCreateWindowMs || now < entry.windowStart) this.roomCreations.delete(existing);
        }
        while (this.roomCreations.size >= ROOM_CREATE_MAX_KEYS) this.roomCreations.delete(this.roomCreations.keys().next().value);
      }
      this.roomCreations.set(key, bucket);
    }
    return bucket;
  }

  refillServerRoomCreateBudget(now) {
    let budget = this.serverRoomCreateBudget;
    if (!budget) budget = this.serverRoomCreateBudget = { tokens: this.roomCreateBurst, at: now };
    const elapsed = Math.max(0, now - budget.at) / 60_000;
    budget.tokens = Math.min(this.roomCreateBurst, budget.tokens + elapsed * this.roomCreateRefillPerMinute);
    budget.at = now;
    return budget;
  }

  hostedRoomCount(key) {
    let count = 0;
    for (const room of this.rooms.values()) if (room.ownerKey === key) count += 1;
    return count;
  }

  // A message has to fit both the socket's own bucket and, when the client key is known, a bucket shared by every
  // socket from that key — otherwise opening a second connection resets a flood budget. Skipped when key is null.
  allowMessage(socket) {
    const now = this.now();
    let budget = this.budgets.get(socket);
    if (!budget) { budget = { tokens: this.messageBurst, at: now, strikes: 0 }; this.budgets.set(socket, budget); }
    const elapsed = Math.max(0, now - budget.at) / 1000;
    budget.tokens = Math.min(this.messageBurst, budget.tokens + elapsed * this.messageRefillPerSecond);
    budget.at = now;
    const key = this.clientKeyOf(socket);
    const shared = key == null ? null : this.sharedMessageBudget(key, now);
    if (budget.tokens >= 1 && (!shared || shared.tokens >= 1)) {
      budget.tokens -= 1;
      if (shared) shared.tokens -= 1;
      budget.strikes = 0;
      return true;
    }
    budget.strikes += 1;
    if (budget.strikes === 1) this.error(socket, 'RATE_LIMITED', 'You are sending messages too quickly.');
    if (budget.strikes >= MESSAGE_ABUSE_CLOSE_AFTER && typeof socket.close === 'function') {
      try { socket.close(1008, 'Message flood'); } catch (_) { /* already closing */ }
    }
    return false;
  }

  sharedMessageBudget(key, now) {
    let budget = this.keyedMessageBudgets.get(key);
    if (!budget) {
      if (this.keyedMessageBudgets.size >= JOIN_FAILURE_MAX_KEYS) {
        for (const [existing, entry] of this.keyedMessageBudgets) {
          if (now - entry.at >= KEYED_BUDGET_IDLE_MS || now < entry.at) this.keyedMessageBudgets.delete(existing);
        }
        while (this.keyedMessageBudgets.size >= JOIN_FAILURE_MAX_KEYS) this.keyedMessageBudgets.delete(this.keyedMessageBudgets.keys().next().value);
      }
      budget = { tokens: this.messageBurst, at: now };
      this.keyedMessageBudgets.set(key, budget);
    }
    const elapsed = Math.max(0, now - budget.at) / 1000;
    budget.tokens = Math.min(this.messageBurst, budget.tokens + elapsed * this.messageRefillPerSecond);
    budget.at = now;
    return budget;
  }

  // Only a message that actually changes the stored preference draws on this budget, so a client that repeats
  // its current setting forever is free (it costs one reply and no broadcast) while a toggle loop is stopped.
  allowPreferenceChange(socket) {
    const now = this.now();
    let budget = this.preferenceBudgets.get(socket);
    if (!budget) { budget = { tokens: this.preferenceBurst, at: now }; this.preferenceBudgets.set(socket, budget); }
    const elapsed = Math.max(0, now - budget.at) / 1000;
    budget.tokens = Math.min(this.preferenceBurst, budget.tokens + elapsed * this.preferenceRefillPerSecond);
    budget.at = now;
    if (budget.tokens >= 1) { budget.tokens -= 1; return true; }
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

    // No blanket activity refresh here: only handlers that actually change the room refresh lastActivityAt, so a
    // room cannot be kept alive by junk messages, failed actions or no-op preferences.
    switch (message.type) {
      case 'room.create': return this.createRoom(socket, message.mode, message.reducedMotion);
      case 'room.join': return this.joinRoom(socket, message);
      case 'room.resume': return this.resumeRoom(socket, message);
      case 'client.preferences': return this.updateClientPreferences(socket, message);
      case 'room.sync': return this.syncState(socket);
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
      : session.role === 'spectator' ? (room.spectators.find(item => item.id === session.spectatorId) || {}).socket !== socket
      : (room.players.find(item => item.id === session.playerId) || {}).socket !== socket) return;
    room.lastActivityAt = this.now();
    const revision = room.stateRevision;
    if (session.role === 'host') {
      room.host.connected = false;
      room.host.socket = null;
      room.host.disconnectedAt = this.now();
      room.host.absenceReadyBroadcast = false;
      if (room.engine) room.engine.hostDisconnected();
    } else if (session.role === 'spectator') {
      const spectator = room.spectators.find(item => item.id === session.spectatorId);
      if (spectator) { spectator.connected = false; spectator.socket = null; spectator.disconnectedAt = this.now(); }
    } else {
      const player = room.players.find(item => item.id === session.playerId);
      if (player) {
        player.connected = false;
        player.socket = null;
        player.lastDisconnectedAt = this.now();
        if (room.engine) room.engine.playerDisconnected(player.id, this.now());
      }
    }
    this.publishIfUnchanged(room, revision);
  }

  createRoom(socket, mode, reducedMotion = false) {
    if (this.hasRoomSession(socket)) return this.error(socket, 'ALREADY_IN_ROOM', 'Leave the current room before creating another.');
    if (!VALID_MODES.has(mode)) return this.error(socket, 'INVALID_MODE', 'Choose Teamwork or Competitive.');
    if (this.rooms.size >= this.maxRooms) return this.error(socket, 'SERVER_BUSY', 'The server is hosting as many rooms as it can. Try again shortly.');
    const now = this.now();
    const ownerKey = this.clientKeyOf(socket);
    if (ownerKey != null) {
      if (this.hostedRoomCount(ownerKey) >= this.roomsPerClient
        || this.roomCreateBucket(ownerKey, now).count >= this.roomCreateLimit) {
        return this.error(socket, 'ROOM_LIMIT', 'You have too many rooms open. Close one or wait a few minutes.');
      }
    }
    const serverBudget = this.refillServerRoomCreateBudget(now);
    if (serverBudget.tokens < 1) return this.error(socket, 'SERVER_BUSY', 'The server is hosting as many rooms as it can. Try again shortly.');
    const code = this.nextRoomCode();
    if (!code) return this.error(socket, 'SERVER_BUSY', 'The server is hosting as many rooms as it can. Try again shortly.');
    serverBudget.tokens -= 1;
    const token = this.newToken();
    const room = {
      code, mode, phase: 'lobby', createdAt: now, lastActivityAt: now, ownerKey,
      host: { token, connected: true, socket, reducedMotion: Boolean(reducedMotion), disconnectedAt: null, absenceReadyBroadcast: false }, players: [], spectators: [], roundNumber: 0, game: null, engine: null,
      bestTeamScore: 0
    };
    if (ownerKey != null) this.roomCreateBucket(ownerKey, now).count += 1;
    this.rooms.set(code, room);
    this.sessions.set(socket, { roomCode: code, role: 'host', playerId: null });
    safeSend(socket, { type: 'room.created', code, role: 'host', resumeToken: token, state: this.snapshot(room) });
    this.broadcastState(room);
  }

  joinRoom(socket, message) {
    if (this.hasRoomSession(socket)) return this.error(socket, 'ALREADY_IN_ROOM', 'Leave the current room before joining another.');
    const now = this.now();
    // The budget is checked before the lookup, so a throttled client cannot tell a real code from an invented one.
    if (this.isJoinThrottled(socket, now)) return this.refuseThrottledJoin(socket, now);
    const code = this.normalizeCode(message.code);
    const room = this.rooms.get(code);
    if (!room) {
      this.spendJoinFailure(socket, now);
      return this.error(socket, 'ROOM_NOT_FOUND', 'That room code was not found.');
    }
    if (message.spectate === true) {
      this.pruneSpectators(room, now);
      if (room.spectators.length >= MAX_SPECTATORS) return this.error(socket, 'SPECTATORS_FULL', 'This room has reached its spectator limit.');
      const spectator = { id: this.newId(), token: this.newToken(), socket, connected: true, disconnectedAt: null };
      room.spectators.push(spectator);
      room.lastActivityAt = now;
      this.sessions.set(socket, { roomCode: code, role: 'spectator', spectatorId: spectator.id });
      this.publishAdmission(room, socket, { type: 'room.joined', code, role: 'spectator', resumeToken: spectator.token });
      return;
    }
    if (room.phase !== 'lobby') return this.error(socket, 'ROOM_LOCKED', 'This room has already started. Choose Watch as spectator to view it.');
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
    this.publishAdmission(room, socket, { type: 'room.joined', code, role: 'player', playerId: player.id, resumeToken: player.token });
  }

  updateClientPreferences(socket, message) {
    const session = this.sessions.get(socket);
    if (!session) return this.error(socket, 'NOT_IN_ROOM', 'Join a room before updating preferences.');
    const room = this.rooms.get(session.roomCode);
    if (!room) return this.error(socket, 'ROOM_NOT_FOUND', 'That room is no longer available.');
    const reducedMotion = Boolean(message.reducedMotion);
    if (session.role === 'spectator') {
      safeSend(socket, { type: 'preferences.updated', reducedMotion });
      return;
    }
    const player = session.role === 'host' ? null : room.players.find(item => item.id === session.playerId);
    if (session.role !== 'host' && !player) return this.error(socket, 'PLAYER_INACTIVE', 'The player is no longer in this room.');
    // Repeating the current setting is a no-op: it answers the sender, but it must not broadcast the whole room
    // state to every seat and must not count as activity, which is what made this a 1,300x amplifier.
    const current = session.role === 'host' ? room.host.reducedMotion : player.reducedMotion;
    if (Boolean(current) === reducedMotion) {
      safeSend(socket, { type: 'preferences.updated', reducedMotion });
      return;
    }
    if (!this.allowPreferenceChange(socket)) return this.error(socket, 'RATE_LIMITED', 'You are changing settings too quickly.');
    if (session.role === 'host') {
      room.host.reducedMotion = reducedMotion;
      if (room.engine) room.engine.motionPrefersReduced = reducedMotion;
    } else {
      player.reducedMotion = reducedMotion;
    }
    room.lastActivityAt = this.now();
    safeSend(socket, { type: 'preferences.updated', reducedMotion });
    this.broadcastDelta(room);
  }

  resumeRoom(socket, message) {
    if (this.hasRoomSession(socket)) return this.error(socket, 'ALREADY_IN_ROOM', 'Leave the current room before reconnecting.');
    const now = this.now();
    // Probing resume is a room-existence oracle too, so it draws on the same guess budget. An unknown room and a
    // wrong token answer identically, otherwise the reply itself would confirm that a code exists. A valid token is
    // never throttled: a guesser exhausting the budget must not be able to lock the host and players out.
    const throttled = this.isJoinThrottled(socket, now);
    const refuseResume = () => {
      if (throttled) return this.refuseThrottledJoin(socket, now);
      this.spendJoinFailure(socket, now);
      return this.error(socket, 'INVALID_RESUME', 'The room code or reconnect token was not recognized.');
    };
    const code = this.normalizeCode(message.code);
    const token = typeof message.resumeToken === 'string' ? message.resumeToken : '';
    // Real tokens are 32 bytes; anything far larger is an attempt to make us allocate on demand.
    if (token.length > 128) return refuseResume();
    const room = this.rooms.get(code);
    if (!room || !token) return refuseResume();

    let role = null;
    let playerId = null;
    let spectatorId = null;
    this.pruneSpectators(room, this.now());
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
      if (!role) {
        const spectator = room.spectators.find(item => this.tokensMatch(token, item.token));
        if (spectator) {
          role = 'spectator'; spectatorId = spectator.id;
          this.detachSuperseded(spectator.socket, socket);
          spectator.connected = true; spectator.socket = socket; spectator.disconnectedAt = null;
        }
      }
    }
    if (!role) return refuseResume();
    room.lastActivityAt = this.now();
    this.sessions.set(socket, { roomCode: code, role, playerId, spectatorId });
    const packet = { type: 'room.resumed', code, role };
    if (playerId) packet.playerId = playerId;
    this.publishAdmission(room, socket, packet, () => {
      if (playerId && room.engine) room.engine.playerReconnected(playerId, this.now());
    });
  }

  // Engine reconnect callbacks can publish before admission finishes. Existing
  // seats see those deltas, but the new socket starts at the final exact baseline.
  publishAdmission(room, socket, packet, update = () => {}) {
    room.pendingBaselineSockets ||= new Set();
    room.pendingBaselineSockets.add(socket);
    const revision = room.stateRevision;
    try {
      update();
      this.publishIfUnchanged(room, revision);
      safeSend(socket, { ...packet, state: room.lastBroadcastState });
    } finally {
      room.pendingBaselineSockets.delete(socket);
    }
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
    if (session.role === 'spectator') {
      room.spectators = room.spectators.filter(item => item.id !== session.spectatorId);
      this.sessions.delete(socket);
      safeSend(socket, { type: 'room.left', code: room.code });
      return;
    }
    const index = room.players.findIndex(player => player.id === session.playerId);
    const player = index >= 0 ? room.players[index] : null;
    const revision = room.stateRevision;
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
    this.publishIfUnchanged(room, revision);
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
        this.broadcastDelta(room);
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
    room.lastActivityAt = this.now();
  }

  teamSkip(socket, message) {
    const { room } = this.requireHost(socket);
    if (!room) return;
    if (!room.engine) return this.error(socket, 'ROUND_NOT_LIVE', 'There is no live round.');
    const result = room.engine.hostSkipTeamTurn(message.turnId, this.now());
    if (!result.ok) return this.error(socket, result.code, 'That turn can no longer be skipped.');
    room.lastActivityAt = this.now();
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
      this.pruneSpectators(room, now);
      if (room.engine && room.phase === 'playing') room.engine.tick(now);
      if (!room.host.absenceReadyBroadcast && this.canRematchWithoutHost(room, now)) {
        room.host.absenceReadyBroadcast = true;
        this.broadcastDelta(room);
      }
    }
  }

  pruneSpectators(room, now = this.now()) {
    room.spectators = room.spectators.filter(item => item.connected || now - item.disconnectedAt < SPECTATOR_RECONNECT_MS);
  }

  closeRoomForHost(socket) {
    const { room } = this.requireHost(socket);
    if (!room) return;
    this.closeRoom(room, 'The host closed this room.');
  }

  closeRoom(roomOrCode, reason = 'Room closed.') {
    const room = typeof roomOrCode === 'string' ? this.rooms.get(roomOrCode) : roomOrCode;
    if (!room || !this.rooms.has(room.code)) return false;
    const sockets = [room.host.socket, ...room.players.map(player => player.socket), ...room.spectators.map(spectator => spectator.socket)].filter(Boolean);
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
      // lastActivityAt, not the host's disconnect time: every join, leave and disconnect refreshes it, so the limit
      // runs from when the last person left, and a visitor in the meantime restarts it.
      if (this.isAbandoned(room) && now - room.lastActivityAt >= this.abandonedLimitMs) {
        closed.push(room.code);
        this.closeRoom(room, 'Room closed because the host left.');
      } else if (now - room.lastActivityAt >= this.idleLimitMs) {
        closed.push(room.code);
        this.closeRoom(room, 'Room closed after ten minutes without activity.');
      }
    }
    return closed;
  }

  isAbandoned(room) {
    return !room.host.connected && room.host.disconnectedAt != null && room.players.length === 0
      && !room.spectators.some(spectator => spectator.connected);
  }

  canRematchWithoutHost(room, now = this.now()) {
    return !room.host.connected && room.host.disconnectedAt != null && now - room.host.disconnectedAt >= HOST_ABSENCE_GRACE_MS;
  }

  snapshot(roomOrCode, { publication = false } = {}) {
    const room = typeof roomOrCode === 'string' ? this.rooms.get(roomOrCode) : roomOrCode;
    if (!room) return null;
    return {
      code: room.code, mode: room.mode, phase: room.phase, roundNumber: room.roundNumber, revision: room.stateRevision || 0,
      reducedMotion: Boolean(room.host.reducedMotion || room.players.some(player => player.connected && player.reducedMotion)),
      hostConnected: room.host.connected, canRematchWithoutHost: this.canRematchWithoutHost(room), bestTeamScore: room.bestTeamScore || 0,
      players: room.players.map(player => ({
        id: player.id, name: player.name, color: player.color,
        connected: player.connected, ended: Boolean(player.ended)
      })),
      canStart: room.phase === 'lobby' && room.players.filter(player => player.connected).length >= 2,
      game: room.engine ? room.engine.snapshot(this.now(), { publication }) : room.game ? structuredClone(room.game) : null
    };
  }

  broadcastState(room) {
    room.stateRevision = (room.stateRevision || 0) + 1;
    room.lastBroadcastState = this.snapshot(room, { publication: true });
    this.broadcast(room, { type: 'room.state', state: room.lastBroadcastState }, { baseline: true });
  }

  broadcastDelta(room) {
    if (!room.lastBroadcastState) return this.broadcastState(room);
    const previous = room.lastBroadcastState;
    room.stateRevision = (room.stateRevision || 0) + 1;
    const state = this.snapshot(room, { publication: true });
    const delta = Replication.createDelta(previous, state, { historyPrefixLength: sharedHistoryPrefixLength });
    room.lastBroadcastState = state;
    // Always publish the delta: measuring a full candidate walks all history.
    this.broadcast(room, delta, { baseline: true });
  }

  // Publishes the current state unless an engine callback already did so while
  // the room was being mutated (disconnect, leave, reconnect).
  publishIfUnchanged(room, revision) {
    if (room.stateRevision === revision) this.broadcastDelta(room);
  }

  syncState(socket) {
    const session = this.sessions.get(socket);
    const room = session && this.rooms.get(session.roomCode);
    if (!room) return this.error(socket, 'NOT_IN_ROOM', 'Join a room first.');
    // The baseline, not a fresh snapshot: subsequent deltas reference this exact revision.
    safeSend(socket, { type: 'room.state', state: room.lastBroadcastState || this.snapshot(room) });
  }

  // One serialisation, however many seats: every recipient gets the identical text. With 22 seats in a room and a
  // few rooms ticking at 10 Hz this was the largest per-tick cost after socket I/O itself.
  // A socket being admitted gets its full baseline after all engine callbacks; a state packet sent meanwhile would
  // give it the wrong starting revision. Events still reach it, as they did before admission became delta-based.
  broadcast(room, message, { baseline = false } = {}) {
    const text = JSON.stringify(message);
    const send = socket => {
      if (baseline && room.pendingBaselineSockets?.has(socket)) return;
      safeSendRaw(socket, text);
    };
    send(room.host.socket);
    for (const player of room.players) if (player.connected) send(player.socket);
    for (const spectator of room.spectators) if (spectator.connected) send(spectator.socket);
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

  // Null when no free code could be found: every returned code must survive normalizeCode, or the room could
  // never be joined. (The old base-36 fallback produced digits, which normalizeCode strips.)
  nextRoomCode() {
    for (let attempts = 0; attempts < 100; attempts += 1) {
      const bytes = this.randomBytes(4);
      const code = Array.from(bytes, byte => ROOM_CODE_ALPHABET[byte % ROOM_CODE_ALPHABET.length]).join('');
      if (!this.rooms.has(code)) return code;
    }
    return null;
  }

  newToken() { return this.randomBytes(24).toString('base64url'); }
  newId() { return this.randomBytes(12).toString('hex'); }

  // Compared in bytes, not UTF-16 code units: timingSafeEqual throws when the buffers differ in length, and two
  // strings of equal length can encode to different byte counts (any token with non-ASCII in it).
  tokensMatch(supplied, expected) {
    if (typeof supplied !== 'string' || typeof expected !== 'string') return false;
    const suppliedBytes = Buffer.from(supplied, 'utf8');
    const expectedBytes = Buffer.from(expected, 'utf8');
    if (suppliedBytes.length !== expectedBytes.length) return false;
    return crypto.timingSafeEqual(suppliedBytes, expectedBytes);
  }
}

module.exports = { RoomManager, MAX_ROOMS, MAX_PLAYERS, PLAYER_COLORS, ROOM_CODE_ALPHABET, IDLE_LIMIT_MS, cleanDisplayName, uniqueDisplayName };
