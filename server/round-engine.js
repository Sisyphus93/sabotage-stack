'use strict';

const Core = require('../shared/game-core');

const WORLD_WIDTH = 360;
// A drop lands where the player saw the block, provided that is within this much travel of the server's own position
// (covers network round-trip). Beyond it, the server's position wins. This keeps the landing independent of network
// latency and of where inside the 100 ms tick the message happened to arrive, without letting a client choose any x.
const LAG_COMPENSATION_SECONDS = 0.25;
const MAX_TURN_SECONDS = 10;
const AUTO_DROP_GRACE_MS = 2_000;
const FIRST_VOTE_AT = 8;
const VOTE_CYCLE_SECONDS = 10;
const VOTE_SECONDS = 5;
const EFFECT_SECONDS = 5;
const DROP_EFFECT_SECONDS = 8;
const ROUND_SECONDS = 90;
const SABOTAGE_IDS = Core.SABOTAGE_IDS;
const DROP_COUNTED_EFFECTS = new Set(Core.DROP_COUNTED_IDS);
const TEAM_GLOBAL_EFFECTS = new Set(['crumble']);
const ROOM_GLOBAL_EFFECTS = new Set();

function clone(value) { return JSON.parse(JSON.stringify(value)); }
function randomDrunkTarget(mode, random) {
  const min = mode === 'lurch' ? 1.55 : 0.25;
  const max = mode === 'lurch' ? 1.9 : 0.45;
  const sample = Math.max(0, Math.min(0.999999999, Number(random()) || 0));
  return min + sample * (max - min);
}

class RoundEngine {
  constructor({ mode, players, now = Date.now, random = Math.random, motionPrefersReduced = false, onEvent = () => {}, onChange = () => {} }) {
    if (!['teamwork', 'competitive'].includes(mode)) throw new TypeError('Unknown round mode.');
    this.mode = mode;
    this.players = players;
    this.now = now;
    this.random = random;
    this.motionPrefersReduced = Boolean(motionPrefersReduced);
    this.onEvent = onEvent;
    this.onChange = onChange;
    this.manualVoteSequence = 0;
    this.dropRequestResults = new Map();
    this.legacyDropRequestSequence = 0;
    this.game = null;
  }

  start(roundNumber = 1) {
    const now = this.now();
    for (const player of this.players) {
      player.ended = false;
      player.blocksPlaced = 0;
      player.perfects = 0;
      player.sabotageCount = 0;
      player.lastPositionSeq = -1;
    }
    this.dropRequestResults.clear();
    this.game = {
      mode: this.mode, phase: 'playing', roundNumber, startedAt: now, lastTickAt: now,
      elapsed: 0, nextVoteAt: FIRST_VOTE_AT, vote: null, lastVote: null, lastSabotageWinner: null,
      activeEffects: [], pendingSabotage: null, paused: false, pausedAt: null,
      team: this.mode === 'teamwork' ? {
        stack: [Core.makeBase()], fallen: [], perfects: 0, score: 0,
        turnOrder: this.players.map(player => player.id), turnIndex: -1,
        currentPlayerId: null, turnId: 0, turnActive: false, turnExpiresAt: null,
        awaitingAutoDrop: false, autoDropDeadlineAt: null, moving: null,
        nextSpawnFromLeft: true, collapseLevel: null,
        drunkClock: 0, drunkHold: 0.625, drunkMode: 'stumble', drunkFrom: 1, drunkTarget: 0.35, drunkMultiplier: 1
      } : null,
      competitors: this.mode === 'competitive' ? this.players.map(player => ({
        playerId: player.id,
        stack: [{ ...Core.makeBase(), color: player.color, placer: player.name }],
        fallen: [], perfects: 0, sabotageCount: 0, collapsed: false, disconnected: !player.connected,
        ended: !player.connected, collapseLevel: null, moving: this.makeMover([{ ...Core.makeBase(), color: player.color }], true, player.color, false),
        nextSpawnFromLeft: false, lastPositionSeq: -1,
        drunkClock: 0, drunkHold: 0.625, drunkMode: 'stumble', drunkFrom: 1, drunkTarget: 0.35, drunkMultiplier: 1
      })) : null,
      endsAt: this.mode === 'competitive' ? now + ROUND_SECONDS * 1000 : null,
      results: null
    };
    if (this.mode === 'teamwork') this.startTeamTurn(now, false);
    this.changed('round.started');
    return this.snapshot();
  }

  makeMover(stack, fromLeft, color, accordionEffect = null, now = this.now()) {
    const below = stack[stack.length - 1];
    const width = Math.max(Core.MIN_WIDTH, below.right - below.left);
    let moving = {
      left: fromLeft ? 0 : WORLD_WIDTH - width,
      width,
      direction: fromLeft ? 1 : -1,
      level: stack.length,
      fromLeft: Boolean(fromLeft),
      color,
      portalWrap: false,
      rollerPhase: ((stack.length * 0.38196601125) % 1)
    };
    if (accordionEffect) {
      moving.accordion = true;
      if (this.motionReductionEnabled()) {
        moving.accordionReduced = true;
      } else {
        const elapsed = Math.max(0, (now - accordionEffect.startedAt) / 1000);
        moving.accordionPhase = Core.accordionPhaseForWidth(width, width) - elapsed / 0.8;
        moving = Core.resizeMover(moving, Core.accordionWidth(elapsed, width, moving.accordionPhase), width);
      }
    }
    return moving;
  }

  connectedPlayer(id) { return this.players.find(player => player.id === id && player.connected && !player.ended) || null; }
  player(id) { return this.players.find(player => player.id === id) || null; }
  teamMover() { return this.game && this.game.team ? this.game.team.moving : null; }
  effectApplies(effect, playerId = null) { return effect.targetPlayerId == null || effect.targetPlayerId === playerId; }
  effectFor(id, playerId = null, now = this.now()) {
    if (!this.game) return null;
    return this.game.activeEffects.find(effect => effect.id === id && (effect.startedAt || 0) <= now && effect.expiresAt > now && this.effectApplies(effect, playerId)) || null;
  }
  hasEffect(id, playerId = null, now = this.now()) { return Boolean(this.effectFor(id, playerId, now)); }
  effectElapsed(effect, now = this.now()) { return effect ? Math.max(0, (now - effect.startedAt) / 1000) : 0; }
  motionReductionEnabled() {
    return this.motionPrefersReduced || this.players.some(player => player.connected && player.reducedMotion);
  }

  motionSnapshot(actor) {
    return {
      drunkClock: Number(actor.drunkClock) || 0, drunkHold: Number(actor.drunkHold) || 0.625,
      drunkMode: actor.drunkMode === 'lurch' ? 'lurch' : 'stumble',
      drunkFrom: Number(actor.drunkFrom) || 1, drunkTarget: Number(actor.drunkTarget) || 1,
      drunkMultiplier: Number(actor.drunkMultiplier) || 1
    };
  }

  movementSpeed(stack, actor, playerId, now) {
    const base = Core.speedForHeight(Math.max(0, stack.length - 1));
    if (this.hasEffect('turbo', playerId, now)) return base * 1.7;
    const slowToDart = this.effectFor('slowmo', playerId, now);
    if (slowToDart) return base * Core.slowToDartMultiplier(this.effectElapsed(slowToDart, now));
    const drunk = this.effectFor('drunk', playerId, now);
    if (drunk) return base * Math.max(0.25, Math.min(1.9, Number(actor.drunkMultiplier) || 1));
    return base;
  }

  effectiveSpeedAt(stack, actor, playerId, now) {
    let speed = this.movementSpeed(stack, actor, playerId, now);
    const moving = actor && actor.moving;
    const below = Array.isArray(stack) && stack[stack.length - 1];
    if (moving && below && this.hasEffect('magnet', playerId, now)) {
      const target = (below.left + below.right) / 2;
      speed *= Core.gravitySlingshotMultiplier(target - (moving.left + moving.width / 2));
    }
    return speed;
  }

  updateDrunk(actor, playerId, dt, now) {
    if (!this.hasEffect('drunk', playerId, now)) return;
    actor.drunkClock += dt;
    while (actor.drunkClock >= (Number(actor.drunkHold) || 0.625)) {
      actor.drunkClock -= Number(actor.drunkHold) || 0.625;
      actor.drunkFrom = Number(actor.drunkMultiplier) || 1;
      actor.drunkMode = actor.drunkMode === 'lurch' ? 'stumble' : 'lurch';
      actor.drunkTarget = randomDrunkTarget(actor.drunkMode, this.random);
      actor.drunkHold = 0.55 + Math.max(0, Math.min(0.999999999, Number(this.random()) || 0)) * 0.15;
    }
    const mix = 1 - Math.exp(-dt / 0.11);
    actor.drunkMultiplier += (actor.drunkTarget - actor.drunkMultiplier) * mix;
    actor.drunkMultiplier = Math.max(0.25, Math.min(1.9, actor.drunkMultiplier));
  }

  advanceOneMover(actor, stack, playerId, dt, now) {
    if (!actor || !actor.moving || !Array.isArray(stack) || !stack.length || dt <= 0) return false;
    this.updateDrunk(actor, playerId, dt, now);
    const below = stack[stack.length - 1];
    const belowWidth = below.right - below.left;
    const accordion = this.effectFor('accordion', playerId, now);
    if (accordion) {
      const elapsed = this.effectElapsed(accordion, now);
      if (this.motionReductionEnabled()) {
        actor.moving.accordion = true;
        actor.moving.accordionReduced = true;
        actor.moving = Core.resizeMover(actor.moving, belowWidth, belowWidth);
      } else {
        if (!actor.moving.accordion || actor.moving.accordionReduced) {
          actor.moving.accordion = true;
          actor.moving.accordionReduced = false;
          actor.moving.accordionPhase = Core.accordionPhaseForWidth(actor.moving.width, belowWidth) - elapsed / 0.8;
        }
        actor.moving = Core.resizeMover(actor.moving, Core.accordionWidth(elapsed, belowWidth, actor.moving.accordionPhase || 0), belowWidth);
      }
    } else if (actor.moving.accordion) {
      actor.moving = Core.resizeMover(actor.moving, belowWidth, belowWidth);
      delete actor.moving.accordion;
      delete actor.moving.accordionReduced;
      delete actor.moving.accordionPhase;
    }
    const portal = this.hasEffect('portal', playerId, now);
    if (portal) actor.moving.portalWrap = true;
    else if (actor.moving.portalWrap) {
      actor.moving.portalWrap = false;
      const maxLeft = Math.max(0, WORLD_WIDTH - actor.moving.width);
      if (actor.moving.left > maxLeft) { actor.moving.left = maxLeft; actor.moving.direction = -1; }
    }
    const bounds = this.hasEffect('calipers', playerId, now) ? Core.caliperBounds(below, actor.moving) : null;
    const magnetTarget = this.hasEffect('magnet', playerId, now) ? (below.left + below.right) / 2 : null;
    const speed = this.movementSpeed(stack, actor, playerId, now);
    const next = Core.advanceMover(actor.moving, dt, speed, magnetTarget, { wrap: portal, bounds });
    if (next) { actor.moving.left = next.left; actor.moving.direction = next.direction; }
    if (this.hasEffect('double', playerId, now)) {
      if (!actor.moving.decoy) actor.moving.decoy = Core.createShellDecoy(actor.moving);
      const decoyBounds = this.hasEffect('calipers', playerId, now) ? Core.caliperBounds(below, actor.moving.decoy) : null;
      const decoyNext = Core.advanceMover(actor.moving.decoy, dt, speed, null, { bounds: decoyBounds });
      if (decoyNext) { actor.moving.decoy.left = decoyNext.left; actor.moving.decoy.direction = decoyNext.direction; }
    } else if (actor.moving.decoy) delete actor.moving.decoy;
    return true;
  }

  positionTolerance(stack, actor, playerId, now) {
    const speed = this.effectiveSpeedAt(stack, actor, playerId, now);
    return Math.max(18, speed * 0.35 + 12);
  }

  startTeamTurn(now = this.now(), reuseMoving = false) {
    const game = this.game;
    if (!game || game.phase !== 'playing' || game.vote) return false;
    const team = game.team;
    const count = team.turnOrder.length;
    let nextIndex = null;
    for (let offset = 1; offset <= count; offset += 1) {
      const index = (team.turnIndex + offset + count) % count;
      const candidate = this.connectedPlayer(team.turnOrder[index]);
      if (candidate) { nextIndex = index; break; }
    }
    if (nextIndex == null) {
      this.pauseIfNoConnected(now);
      return false;
    }
    const player = this.player(team.turnOrder[nextIndex]);
    team.turnIndex = nextIndex;
    team.currentPlayerId = player.id;
    team.turnId += 1;
    team.turnActive = true;
    team.turnExpiresAt = now + MAX_TURN_SECONDS * 1000;
    team.awaitingAutoDrop = false;
    team.autoDropDeadlineAt = null;

    if (game.pendingSabotage) {
      const id = game.pendingSabotage;
      const targetPlayerId = TEAM_GLOBAL_EFFECTS.has(id) ? null : player.id;
      this.addEffect(id, targetPlayerId, now);
      player.sabotageCount += 1;
      game.pendingSabotage = null;
    }
    if (!reuseMoving || !team.moving) {
      const fromLeft = team.nextSpawnFromLeft;
      team.nextSpawnFromLeft = !fromLeft;
      team.moving = this.makeMover(team.stack, fromLeft, player.color, this.effectFor('accordion', player.id, now), now);
      team.moving.portalWrap = this.hasEffect('portal', player.id, now);
      if (this.hasEffect('double', player.id, now)) team.moving.decoy = Core.createShellDecoy(team.moving);
    }
    this.onEvent('turn.started', { playerId: player.id, turnId: team.turnId, deadline: team.turnExpiresAt });
    this.changed('game.state');
    return true;
  }

  addEffect(id, targetPlayerId, now = this.now()) {
    if (!SABOTAGE_IDS.includes(id)) return null;
    const dropCounted = DROP_COUNTED_EFFECTS.has(id);
    const duration = dropCounted ? DROP_EFFECT_SECONDS : EFFECT_SECONDS;
    // One sabotage at a time per target (per stage in Teamwork). The client renders and predicts exactly one effect, and
    // solo play replaces the running effect when a new vote resolves. Letting the server stack effects made a queued
    // sabotage (for example Spotlight) mechanically active but invisible, and let movement speed diverge from the client.
    this.game.activeEffects = this.game.activeEffects.filter(item => !(
      this.mode === 'teamwork' || item.targetPlayerId == null || targetPlayerId == null || item.targetPlayerId === targetPlayerId));
    const effect = { id, targetPlayerId, startedAt: now, expiresAt: now + duration * 1000, duration };
    if (dropCounted) effect.dropsRemaining = 3;
    if (id === 'pisa') effect.tiltDirection = this.random() < 0.5 ? -1 : 1;
    if (id === 'spotlight') effect.spotlightSide = this.random() < 0.5 ? -1 : 1;
    if (id === 'portal') {
      if (this.mode === 'teamwork' && this.game.team.currentPlayerId === targetPlayerId && this.game.team.moving) this.game.team.moving.portalWrap = true;
      if (this.mode === 'competitive') {
        const target = this.game.competitors.find(item => item.playerId === targetPlayerId);
        if (target && target.moving) target.moving.portalWrap = true;
      }
    }
    if (id === 'double') {
      const actors = this.mode === 'teamwork' ? [this.game.team] : this.game.competitors.filter(item => item.playerId === targetPlayerId);
      for (const actor of actors) if (actor.moving) actor.moving.decoy = Core.createShellDecoy(actor.moving);
    }
    if (id === 'drunk') {
      const actors = this.mode === 'teamwork' ? [this.game.team] : this.game.competitors.filter(item => item.playerId === targetPlayerId);
      for (const actor of actors) {
        actor.drunkClock = 0;
        actor.drunkMode = this.random() < 0.5 ? 'stumble' : 'lurch';
        actor.drunkHold = 0.55 + Math.max(0, Math.min(0.999999999, Number(this.random()) || 0)) * 0.15;
        actor.drunkFrom = 1;
        actor.drunkTarget = randomDrunkTarget(actor.drunkMode, this.random);
        actor.drunkMultiplier = 1;
      }
    }
    this.game.activeEffects = this.game.activeEffects.filter(item => !(item.id === id && item.targetPlayerId === targetPlayerId));
    this.game.activeEffects.push(effect);
    this.onEvent('sabotage.active', { id, targetPlayerId, expiresAt: effect.expiresAt, ...(dropCounted ? { dropsRemaining: effect.dropsRemaining } : {}) });
    return effect;
  }

  openVote(now = this.now()) {
    const game = this.game;
    if (!game || game.phase !== 'playing' || game.vote) return false;
    game.vote = {
      options: Core.pickOptions(this.votePool(), this.random, game.lastSabotageWinner, this.motionReductionEnabled()),
      votes: new Map(), openedAt: game.elapsed, closesAt: now + VOTE_SECONDS * 1000,
      duration: VOTE_SECONDS
    };
    game.nextVoteAt = game.elapsed + Core.voteIntervalForHeight(this.currentHeight());
    this.onEvent('vote.open', { options: game.vote.options.slice(), closesAt: game.vote.closesAt });
    this.changed('game.state');
    return true;
  }

  votePool() {
    const reduced = this.motionReductionEnabled();
    const height = this.currentHeight();
    return SABOTAGE_IDS.filter(id => Core.sabotageAvailableAtHeight(id, height) && !(reduced && Core.REDUCED_MOTION_EXCLUDED_IDS.includes(id)));
  }

  currentHeight() {
    if (!this.game) return 0;
    if (this.mode === 'teamwork') return Math.max(0, this.game.team.stack.length - 1);
    return Math.max(0, ...this.game.competitors.map(item => item.stack.length - 1));
  }

  castManualVote(option) {
    const game = this.game;
    if (!game || !game.vote) return { ok: false, code: 'VOTE_CLOSED' };
    const event = { voterId: `manual-${++this.manualVoteSequence}`, option };
    game.vote.votes = Core.recordVote(game.vote.votes, event, game.vote.options);
    if (!game.vote.votes.has(event.voterId)) return { ok: false, code: 'INVALID_OPTION' };
    this.onEvent('vote.updated', { counts: Core.countVotes(game.vote.votes, game.vote.options), totalVotes: game.vote.votes.size });
    this.changed('game.state');
    return { ok: true };
  }

  receiveChatVote(event) {
    const game = this.game;
    if (!game || !game.vote) return { ok: false, code: 'VOTE_CLOSED' };
    const next = Core.recordVote(game.vote.votes, event, game.vote.options);
    if (next === game.vote.votes) return { ok: false, code: 'INVALID_OPTION' };
    game.vote.votes = next;
    this.onEvent('vote.updated', { counts: Core.countVotes(game.vote.votes, game.vote.options), totalVotes: game.vote.votes.size });
    this.changed('game.state');
    return { ok: true };
  }

  resolveVote(now = this.now()) {
    const game = this.game;
    if (!game || !game.vote) return false;
    const outcome = Core.chooseWinner(game.vote.votes, game.vote.options, this.random);
    game.lastVote = outcome;
    game.vote = null;
    const winner = outcome && outcome.winner ? outcome.winner : null;
    if (winner) game.lastSabotageWinner = winner;
    game.pendingSabotage = winner;
    if (this.mode === 'teamwork') {
      this.startTeamTurn(now, false);
    } else {
      this.applyCompetitiveSabotage(now);
    }
    this.onEvent('vote.resolved', { winner, outcome });
    this.changed('game.state');
    return true;
  }

  applyCompetitiveSabotage(now = this.now()) {
    const game = this.game;
    const id = game.pendingSabotage;
    if (!id) return;
    const active = game.competitors.filter(item => !item.ended && this.connectedPlayer(item.playerId));
    let targets = [];
    if (ROOM_GLOBAL_EFFECTS.has(id)) targets = active;
    else if (active.length) {
      const maxHeight = Math.max(...active.map(item => item.stack.length - 1));
      const leaders = active.filter(item => item.stack.length - 1 === maxHeight);
      const chosen = leaders[Math.floor(Math.max(0, Math.min(.999999999, Number(this.random()) || 0)) * leaders.length)];
      targets = chosen ? [chosen] : [];
    }
    if (ROOM_GLOBAL_EFFECTS.has(id) && targets.length) this.addEffect(id, null, now);
    for (const target of targets) {
      if (!ROOM_GLOBAL_EFFECTS.has(id)) this.addEffect(id, target.playerId, now);
      target.sabotageCount += 1;
      const player = this.player(target.playerId);
      if (player) player.sabotageCount = target.sabotageCount;
    }
    game.pendingSabotage = null;
    this.changed('game.state');
  }

  validX(moving, x) {
    const value = Number(x);
    if (!moving || !Number.isFinite(value)) return null;
    if (moving.portalWrap) return value < 0 || value >= WORLD_WIDTH ? null : value;
    const max = WORLD_WIDTH - moving.width;
    if (value < 0 || value > max) return null;
    return value;
  }

  validateReportedX(moving, stack, actor, playerId, reportedX, now, outOfSyncCode) {
    const x = this.validX(moving, reportedX);
    if (x == null) return { ok: false, code: 'POSITION_OUT_OF_BOUNDS', authoritativeX: moving ? moving.left : null };
    const rawDifference = Math.abs(x - moving.left);
    const difference = moving.portalWrap ? Math.min(rawDifference, WORLD_WIDTH - rawDifference) : rawDifference;
    if (difference > this.positionTolerance(stack, actor, playerId, now)) {
      return { ok: false, code: outOfSyncCode, authoritativeX: moving.left };
    }
    return { ok: true, x, authoritativeX: moving.left };
  }

  landingLeft(actor, stack, playerId, reportedX, speed, now) {
    const moving = actor.moving;
    const serverLeft = moving.left;
    const rawDistance = Math.abs(reportedX - serverLeft);
    const distance = moving.portalWrap ? Math.min(rawDistance, WORLD_WIDTH - rawDistance) : rawDistance;
    let left = distance <= speed * LAG_COMPENSATION_SECONDS + 2 ? reportedX : serverLeft;
    if (this.hasEffect('calipers', playerId, now)) {
      const bounds = Core.caliperBounds(stack[stack.length - 1], moving);
      if (bounds) left = Math.max(bounds.minLeft, Math.min(bounds.maxLeft, left));
    }
    return left;
  }

  position(playerId, message) {
    const game = this.game;
    if (!game || game.phase !== 'playing') return { ok: false, code: 'ROUND_NOT_LIVE' };
    const seq = Number(message.sequence);
    if (!Number.isInteger(seq) || seq < 0) return { ok: false, code: 'INVALID_SEQUENCE' };
    const player = this.connectedPlayer(playerId);
    if (!player) return { ok: false, code: 'PLAYER_INACTIVE' };
    const now = this.now();
    if (this.mode === 'teamwork') {
      const team = game.team;
      if (!team.turnActive || team.currentPlayerId !== playerId || Number(message.turnId) !== team.turnId) return { ok: false, code: 'NOT_YOUR_TURN' };
      if (seq <= player.lastPositionSeq) return { ok: false, code: 'STALE_POSITION' };
      const checked = this.validateReportedX(team.moving, team.stack, team, playerId, message.x, now, 'POSITION_OUT_OF_SYNC');
      if (!checked.ok) return checked;
      player.lastPositionSeq = seq;
      return { ok: true, authoritativeX: checked.authoritativeX };
    }
    const competitor = game.competitors.find(item => item.playerId === playerId);
    if (!competitor || competitor.ended || competitor.collapsed) return { ok: false, code: 'PLAYER_INACTIVE' };
    if (seq <= competitor.lastPositionSeq) return { ok: false, code: 'STALE_POSITION' };
    const checked = this.validateReportedX(competitor.moving, competitor.stack, competitor, playerId, message.x, now, 'POSITION_OUT_OF_SYNC');
    if (!checked.ok) return checked;
    competitor.lastPositionSeq = seq;
    return { ok: true, authoritativeX: checked.authoritativeX };
  }

  drop(playerId, message = {}) {
    const game = this.game;
    if (!game || game.phase !== 'playing') return { ok: false, code: 'ROUND_NOT_LIVE', requestId: message.requestId || null };
    const supplied = typeof message.requestId === 'string' ? message.requestId.trim() : '';
    const requestId = supplied || `legacy-${++this.legacyDropRequestSequence}`;
    if (requestId.length > 96) return { ok: false, code: 'INVALID_REQUEST_ID', requestId: null };
    const key = `${playerId}:${requestId}`;
    if (this.dropRequestResults.has(key)) return { ...this.dropRequestResults.get(key), duplicate: true };
    const now = this.now();
    const action = { ...message, requestId };
    const result = this.mode === 'teamwork' ? this.teamDrop(playerId, action, now) : this.competitiveDrop(playerId, action, now);
    result.requestId = requestId;
    this.dropRequestResults.set(key, { ...result });
    while (this.dropRequestResults.size > 512) this.dropRequestResults.delete(this.dropRequestResults.keys().next().value);
    return result;
  }

  teamDrop(playerId, message, now) {
    const game = this.game;
    const team = game.team;
    if (!team.turnActive || team.currentPlayerId !== playerId || Number(message.turnId) !== team.turnId) return { ok: false, code: 'NOT_YOUR_TURN' };
    const player = this.connectedPlayer(playerId);
    if (!player) return { ok: false, code: 'PLAYER_INACTIVE' };
    const auto = Boolean(message.auto);
    if (auto && !team.awaitingAutoDrop) return { ok: false, code: 'AUTO_DROP_NOT_REQUESTED' };
    if (team.awaitingAutoDrop && now > team.autoDropDeadlineAt) return { ok: false, code: 'TURN_EXPIRED' };
    if (now > team.turnExpiresAt && !team.awaitingAutoDrop) return { ok: false, code: 'TURN_EXPIRED' };
    const checked = this.validateReportedX(team.moving, team.stack, team, playerId, message.x, now, 'DROP_POSITION_OUT_OF_SYNC');
    if (!checked.ok) return { ...checked, requestId: message.requestId };
    if (message.sequence != null && Number(message.sequence) < player.lastPositionSeq) return { ok: false, code: 'STALE_POSITION', requestId: message.requestId, authoritativeX: team.moving.left };
    const below = team.stack[team.stack.length - 1];
    const speed = this.effectiveSpeedAt(team.stack, team, playerId, now);
    const landing = { ...team.moving, left: this.landingLeft(team, team.stack, playerId, checked.x, speed, now) };
    let placedMover = Core.landingMover(landing, '', { speed });
    if (this.hasEffect('portal', playerId, now)) placedMover = Core.portalLandingMover(below, placedMover || landing);
    const superglue = this.hasEffect('superglue', playerId, now);
    const outcome = Core.placeDrop(below, placedMover || landing, {
      level: team.stack.length, color: player.color, placer: player.name,
      perfectWindow: Core.perfectWindowForEffect(speed, superglue ? 'superglue' : ''),
      crumble: this.hasEffect('crumble', playerId, now)
    });
    this.consumeDropEffects(playerId, now);
    if (outcome.status === 'miss') {
      team.fallen.push(...outcome.fallen.map(piece => ({ ...piece })));
      team.collapseLevel = team.stack.length - 1;
      this.finishTeamRound(now);
      return { ok: true, collapsed: true, authoritativeX: landing.left, turnId: team.turnId };
    }
    team.stack.push(outcome.placed);
    team.fallen.push(...outcome.fallen.map(piece => ({ ...piece })));
    player.blocksPlaced += 1;
    if (outcome.perfect) { team.perfects += 1; player.perfects += 1; }
    team.score = Math.max(0, team.stack.length - 1) + team.perfects;
    team.turnActive = false;
    team.turnExpiresAt = null;
    team.awaitingAutoDrop = false;
    team.autoDropDeadlineAt = null;
    this.clearTurnEffect(playerId);
    team.turnIndex = team.turnOrder.indexOf(playerId);
    team.currentPlayerId = null;
    team.moving = null;
    this.onEvent(outcome.perfect ? 'block.perfect' : 'block.land', { playerId, height: team.stack.length - 1, score: team.score });
    if (game.elapsed >= game.nextVoteAt) this.openVote(now);
    else this.startTeamTurn(now, false);
    this.changed('game.state');
    return { ok: true, outcome: clone(outcome), score: team.score, authoritativeX: landing.left, turnId: team.turnId };
  }

  competitiveDrop(playerId, message, now) {
    const game = this.game;
    const player = this.connectedPlayer(playerId);
    const competitor = game.competitors.find(item => item.playerId === playerId);
    if (!player || !competitor || competitor.ended || competitor.collapsed) return { ok: false, code: 'PLAYER_INACTIVE' };
    const checked = this.validateReportedX(competitor.moving, competitor.stack, competitor, playerId, message.x, now, 'DROP_POSITION_OUT_OF_SYNC');
    if (!checked.ok) return { ...checked, requestId: message.requestId };
    if (message.sequence != null && Number(message.sequence) < competitor.lastPositionSeq) return { ok: false, code: 'STALE_POSITION', requestId: message.requestId, authoritativeX: competitor.moving.left };
    const below = competitor.stack[competitor.stack.length - 1];
    const speed = this.effectiveSpeedAt(competitor.stack, competitor, playerId, now);
    const landing = { ...competitor.moving, left: this.landingLeft(competitor, competitor.stack, playerId, checked.x, speed, now) };
    let placedMover = Core.landingMover(landing, '', { speed });
    if (this.hasEffect('portal', playerId, now)) placedMover = Core.portalLandingMover(below, placedMover || landing);
    const superglue = this.hasEffect('superglue', playerId, now);
    const outcome = Core.placeDrop(below, placedMover || landing, {
      level: competitor.stack.length, color: player.color, placer: player.name,
      perfectWindow: Core.perfectWindowForEffect(speed, superglue ? 'superglue' : ''),
      crumble: this.hasEffect('crumble', playerId, now)
    });
    this.consumeDropEffects(playerId, now);
    if (outcome.status === 'miss') {
      competitor.fallen.push(...outcome.fallen.map(piece => ({ ...piece })));
      competitor.collapsed = true;
      competitor.ended = true;
      competitor.collapseLevel = competitor.stack.length - 1;
    } else {
      competitor.stack.push(outcome.placed);
      competitor.fallen.push(...outcome.fallen.map(piece => ({ ...piece })));
      player.blocksPlaced += 1;
      competitor.perfects += outcome.perfect ? 1 : 0;
      player.perfects = competitor.perfects;
      competitor.moving = this.nextCompetitorMover(competitor, player, now);
      this.onEvent(outcome.perfect ? 'block.perfect' : 'block.land', { playerId, height: competitor.stack.length - 1 });
    }
    if (game.competitors.every(item => item.ended || item.disconnected || !this.connectedPlayer(item.playerId))) this.finishCompetitiveRound(now);
    else this.changed('game.state');
    return { ok: true, outcome: clone(outcome), authoritativeX: landing.left, collapsed: Boolean(competitor.collapsed) };
  }

  nextCompetitorMover(competitor, player, now = this.now()) {
    const fromLeft = competitor.nextSpawnFromLeft;
    competitor.nextSpawnFromLeft = !fromLeft;
    const moving = this.makeMover(competitor.stack, fromLeft, player.color, this.effectFor('accordion', player.id, now), now);
    moving.portalWrap = this.hasEffect('portal', player.id, now);
    if (this.hasEffect('double', player.id, now)) moving.decoy = Core.createShellDecoy(moving);
    return moving;
  }

  clearTurnEffect(playerId) {
    this.game.activeEffects = this.game.activeEffects.filter(effect =>
      effect.targetPlayerId !== playerId || DROP_COUNTED_EFFECTS.has(effect.id));
  }

  consumeDropEffects(playerId, now = this.now()) {
    if (!this.game) return false;
    let changed = false;
    for (const effect of this.game.activeEffects) {
      if (!DROP_COUNTED_EFFECTS.has(effect.id) || !this.effectApplies(effect, playerId) || effect.expiresAt <= now) continue;
      effect.dropsRemaining = Math.max(0, (Number(effect.dropsRemaining) || 1) - 1);
      changed = true;
    }
    if (changed) this.game.activeEffects = this.game.activeEffects.filter(effect =>
      !DROP_COUNTED_EFFECTS.has(effect.id) || Number(effect.dropsRemaining) > 0);
    return changed;
  }

  finishTeamRound(now) {
    const team = this.game.team;
    this.game.phase = 'results';
    this.game.vote = null;
    this.game.activeEffects = [];
    team.turnActive = false;
    team.awaitingAutoDrop = false;
    team.currentPlayerId = null;
    team.moving = null;
    team.score = Math.max(0, team.stack.length - 1) + team.perfects;
    this.game.results = {
      mode: 'teamwork', teamName: 'Team', score: team.score, height: Math.max(0, team.stack.length - 1),
      perfects: team.perfects, blocks: clone(team.stack), fallen: clone(team.fallen),
      collapseLevel: team.collapseLevel, players: this.players.map(player => ({
        id: player.id, name: player.name, color: player.color, blocks: player.blocksPlaced || 0,
        perfects: player.perfects || 0
      }))
    };
    this.onEvent('round.results', { result: clone(this.game.results), endedAt: now });
    this.changed('game.state');
  }

  finishCompetitiveRound(now) {
    const game = this.game;
    if (game.phase !== 'playing') return;
    game.phase = 'results';
    game.vote = null;
    game.activeEffects = [];
    const sorted = game.competitors.slice().sort((a, b) => (b.stack.length - a.stack.length) || this.players.findIndex(p => p.id === a.playerId) - this.players.findIndex(p => p.id === b.playerId));
    const maxHeight = Math.max(0, ...sorted.map(item => item.stack.length - 1));
    game.results = {
      mode: 'competitive', remainingSeconds: 0,
      winnerIds: sorted.filter(item => item.stack.length - 1 === maxHeight).map(item => item.playerId),
      players: sorted.map(item => {
        const player = this.player(item.playerId);
        return {
          id: item.playerId, name: player ? player.name : 'Player', color: player ? player.color : '#2A2520',
          height: item.stack.length - 1, perfects: item.perfects, sabotageCount: item.sabotageCount,
          collapsed: item.collapsed, disconnected: item.disconnected, collapseLevel: item.collapseLevel,
          blocks: clone(item.stack), fallen: clone(item.fallen)
        };
      })
    };
    this.onEvent('round.results', { result: clone(game.results), endedAt: now });
    this.changed('game.state');
  }

  advanceMovers(fromTime, toTime) {
    const game = this.game;
    if (!game || toTime <= fromTime) return false;
    const active = [];
    if (this.mode === 'teamwork') {
      const team = game.team;
      if (team.turnActive && team.currentPlayerId && team.moving) {
        active.push({ actor: team, stack: team.stack, playerId: team.currentPlayerId, moving: team.moving });
      }
    } else {
      for (const competitor of game.competitors) {
        if (competitor.ended || competitor.collapsed || !competitor.moving || !this.connectedPlayer(competitor.playerId)) continue;
        active.push({ actor: competitor, stack: competitor.stack, playerId: competitor.playerId, moving: competitor.moving });
      }
    }
    if (!active.length) return false;
    let cursor = fromTime;
    while (cursor < toTime) {
      const stepMs = Math.min(50, toTime - cursor);
      cursor += stepMs;
      const dt = stepMs / 1000;
      for (const item of active) this.advanceOneMover(item.actor, item.stack, item.playerId, dt, cursor);
    }
    for (const item of active) {
      const moving = item.actor.moving;
      if (!moving) continue;
      this.onEvent('player.position', {
        playerId: item.playerId, roundNumber: game.roundNumber,
        ...(this.mode === 'teamwork' ? { turnId: game.team.turnId } : {}),
        x: moving.left, width: moving.width, direction: moving.direction,
        ...(moving.decoy ? { decoy: { left: moving.decoy.left, width: moving.decoy.width, direction: moving.decoy.direction } } : {}),
        motion: this.motionSnapshot(item.actor)
      });
    }
    return true;
  }

  tick(now = this.now()) {
    const game = this.game;
    if (!game || game.phase !== 'playing' || game.paused) return false;
    const previousTickAt = game.lastTickAt;
    const delta = Math.max(0, now - previousTickAt);
    if (delta <= 0) return false;
    game.elapsed += delta / 1000;
    game.lastTickAt = now;
    const moved = this.advanceMovers(previousTickAt, now);
    const oldEffects = game.activeEffects.length;
    game.activeEffects = game.activeEffects.filter(effect => effect.expiresAt > now);
    let changed = game.activeEffects.length !== oldEffects;

    if (this.mode === 'competitive') {
      if (now >= game.endsAt) {
        this.finishCompetitiveRound(now);
        return true;
      }
      if (game.vote) {
        if (now >= game.vote.closesAt) this.resolveVote(now);
        else if (changed) this.changed('game.state');
        return true;
      }
      if (game.elapsed >= game.nextVoteAt) {
        this.openVote(now);
        return true;
      }
      if (changed) this.changed('game.state');
      return changed || moved;
    }

    const team = game.team;
    if (game.vote) {
      if (now >= game.vote.closesAt) this.resolveVote(now);
      else if (changed) this.changed('game.state');
      return true;
    }
    if (team.turnActive) {
      if (!team.awaitingAutoDrop && now >= team.turnExpiresAt) {
        team.awaitingAutoDrop = true;
        team.autoDropDeadlineAt = team.turnExpiresAt + AUTO_DROP_GRACE_MS;
        this.onEvent('turn.auto-drop', { playerId: team.currentPlayerId, turnId: team.turnId, deadline: team.autoDropDeadlineAt });
        this.changed('game.state');
        if (now >= team.autoDropDeadlineAt) this.forfeitTeamTurn(now);
        return true;
      }
      if (team.awaitingAutoDrop && now >= team.autoDropDeadlineAt) {
        this.forfeitTeamTurn(now);
        return true;
      }
      if (changed) this.changed('game.state');
      return changed || moved;
    }
    if (game.elapsed >= game.nextVoteAt) this.openVote(now);
    else this.startTeamTurn(now, Boolean(team.moving));
    return true;
  }

  forfeitTeamTurn(now = this.now()) {
    const team = this.game.team;
    const playerId = team.currentPlayerId;
    this.clearTurnEffect(playerId);
    team.turnActive = false;
    team.awaitingAutoDrop = false;
    team.turnExpiresAt = null;
    team.autoDropDeadlineAt = null;
    team.turnIndex = team.turnOrder.indexOf(playerId);
    team.currentPlayerId = null;
    this.onEvent('turn.forfeited', { playerId, turnId: team.turnId });
    if (this.game.elapsed >= this.game.nextVoteAt) this.openVote(now);
    else this.startTeamTurn(now, true);
    this.changed('game.state');
  }

  playerDisconnected(playerId, now = this.now()) {
    const game = this.game;
    if (!game || game.phase !== 'playing') return;
    if (this.mode === 'teamwork') {
      if (!this.players.some(player => player.connected && !player.ended)) {
        game.paused = true;
        game.pausedAt = now;
        this.onEvent('round.paused', { reason: 'all-players-disconnected' });
        this.changed('game.state');
        return;
      }
      if (game.team.turnActive && game.team.currentPlayerId === playerId) this.forfeitTeamTurn(now);
      else this.changed('game.state');
      return;
    }
    const competitor = game.competitors.find(item => item.playerId === playerId);
    if (competitor && !competitor.ended) {
      competitor.disconnected = true;
      competitor.ended = true;
      const player = this.player(playerId);
      if (player) player.ended = true;
      if (game.competitors.every(item => item.ended || item.disconnected || !this.connectedPlayer(item.playerId))) this.finishCompetitiveRound(now);
      else this.changed('game.state');
    }
  }

  playerReconnected(playerId, now = this.now()) {
    const game = this.game;
    if (!game || game.phase !== 'playing') return;
    if (this.mode === 'teamwork' && game.paused) {
      const shift = Math.max(0, now - game.pausedAt);
      const team = game.team;
      if (team.turnExpiresAt != null) team.turnExpiresAt += shift;
      if (team.autoDropDeadlineAt != null) team.autoDropDeadlineAt += shift;
      if (game.vote) game.vote.closesAt += shift;
      for (const effect of game.activeEffects) effect.expiresAt += shift;
      game.paused = false;
      game.pausedAt = null;
      game.lastTickAt = now;
      if (team.turnActive && !this.connectedPlayer(team.currentPlayerId)) this.forfeitTeamTurn(now);
      else if (!team.turnActive && !game.vote) this.startTeamTurn(now, Boolean(team.moving));
      this.onEvent('round.resumed', {});
      this.changed('game.state');
      return;
    }
    this.changed('game.state');
  }

  pauseIfNoConnected(now = this.now()) {
    if (this.mode !== 'teamwork' || this.players.some(player => player.connected && !player.ended)) return false;
    this.game.paused = true;
    this.game.pausedAt = now;
    this.onEvent('round.paused', { reason: 'all-players-disconnected' });
    this.changed('game.state');
    return true;
  }

  snapshot(now = this.now()) {
    const game = this.game;
    if (!game) return null;
    const vote = game.vote ? {
      options: game.vote.options.slice(),
      counts: Core.countVotes(game.vote.votes, game.vote.options),
      totalVotes: game.vote.votes.size,
      remaining: Math.max(0, Math.ceil((game.vote.closesAt - now) / 1000)),
      duration: game.vote.duration
    } : null;
    const common = {
      mode: game.mode, phase: game.phase, roundNumber: game.roundNumber,
      elapsed: game.elapsed, paused: game.paused, vote, lastVote: game.lastVote ? clone(game.lastVote) : null,
      nextVoteIn: Math.max(0, game.nextVoteAt - game.elapsed),
      activeEffects: game.activeEffects.map(effect => ({
        id: effect.id, targetPlayerId: effect.targetPlayerId, duration: effect.duration,
        elapsed: Math.max(0, (now - effect.startedAt) / 1000),
        remaining: Math.max(0, (effect.expiresAt - now) / 1000),
        ...(Number.isInteger(effect.dropsRemaining) ? { dropsRemaining: effect.dropsRemaining } : {}),
        ...(Number.isFinite(effect.tiltDirection) ? { tiltDirection: effect.tiltDirection } : {}),
        ...(Number.isFinite(effect.spotlightSide) ? { spotlightSide: effect.spotlightSide } : {})
      })),
      results: game.results ? clone(game.results) : null
    };
    if (this.mode === 'teamwork') {
      const team = game.team;
      const active = this.player(team.currentPlayerId);
      common.team = {
        stack: clone(team.stack), fallen: clone(team.fallen), perfects: team.perfects, score: team.score,
        turnOrder: team.turnOrder.slice(), turnIndex: team.turnIndex, currentPlayerId: team.currentPlayerId,
        currentPlayerName: active ? active.name : null, currentPlayerColor: active ? active.color : null,
        turnId: team.turnId, turnActive: team.turnActive,
        turnRemaining: team.turnExpiresAt == null ? 0 : Math.max(0, (team.turnExpiresAt - now) / 1000),
        awaitingAutoDrop: team.awaitingAutoDrop,
        autoDropRemaining: team.autoDropDeadlineAt == null ? 0 : Math.max(0, (team.autoDropDeadlineAt - now) / 1000),
        moving: team.moving ? clone(team.moving) : null, motion: this.motionSnapshot(team), collapseLevel: team.collapseLevel
      };
    } else {
      common.remainingSeconds = Math.max(0, (game.endsAt - now) / 1000);
      common.players = game.competitors.map(item => {
        const player = this.player(item.playerId);
        return {
          playerId: item.playerId, name: player ? player.name : 'Player', color: player ? player.color : '#2A2520',
          connected: Boolean(player && player.connected), ended: item.ended, disconnected: item.disconnected,
          collapsed: item.collapsed, height: item.stack.length - 1, perfects: item.perfects,
          sabotageCount: item.sabotageCount, blocks: clone(item.stack), fallen: clone(item.fallen),
          moving: item.moving ? clone(item.moving) : null, motion: this.motionSnapshot(item), lastPositionSeq: item.lastPositionSeq,
          collapseLevel: item.collapseLevel
        };
      });
    }
    common.players ||= this.players.map(player => ({
      id: player.id, name: player.name, color: player.color, connected: player.connected, ended: Boolean(player.ended),
      lastPositionSeq: Number.isInteger(player.lastPositionSeq) ? player.lastPositionSeq : -1,
      blocksPlaced: player.blocksPlaced || 0, perfects: player.perfects || 0, sabotageCount: player.sabotageCount || 0
    }));
    return common;
  }

  changed(type = 'game.state') {
    if (typeof this.onChange === 'function') this.onChange(type, this.snapshot());
  }
}

module.exports = {
  RoundEngine, SABOTAGE_IDS, TEAM_GLOBAL_EFFECTS, ROOM_GLOBAL_EFFECTS,
  FIRST_VOTE_AT, VOTE_CYCLE_SECONDS, VOTE_SECONDS, EFFECT_SECONDS, ROUND_SECONDS,
  MAX_TURN_SECONDS, AUTO_DROP_GRACE_MS
};
