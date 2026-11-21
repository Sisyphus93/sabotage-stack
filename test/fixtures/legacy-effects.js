'use strict';
// Frozen pre-refactor behavior oracle. Do not update to mirror production changes.
// Captured before the Effect lifecycle refactor: RoundEngine addEffect, effectFor,
// consumeDropEffects, the tick expiry filter, the pause shift, and the snapshot projection.
const Core = require('../../shared/game-core');
const EFFECT_SECONDS = 5;
const DROP_EFFECT_SECONDS = 8;
const SABOTAGE_IDS = Core.SABOTAGE_IDS;
const DROP_COUNTED_EFFECTS = new Set(Core.DROP_COUNTED_IDS);
function randomDrunkTarget(mode, random) {
  const min = mode === 'lurch' ? 1.55 : 0.25;
  const max = mode === 'lurch' ? 1.9 : 0.45;
  const sample = Math.max(0, Math.min(0.999999999, Number(random()) || 0));
  return min + sample * (max - min);
}

class LegacyEffects {
  effectApplies(effect, playerId = null) { return effect.targetPlayerId == null || effect.targetPlayerId === playerId; }
  effectFor(id, playerId = null, now = this.now()) {
    if (!this.game) return null;
    return this.game.activeEffects.find(effect => effect.id === id && (effect.startedAt || 0) <= now && (effect.untilDrop || effect.expiresAt > now) && this.effectApplies(effect, playerId)) || null;
  }
  hasEffect(id, playerId = null, now = this.now()) { return Boolean(this.effectFor(id, playerId, now)); }
  effectElapsed(effect, now = this.now()) { return effect ? Math.max(0, (now - effect.startedAt) / 1000) : 0; }

  addEffect(id, targetPlayerId, now = this.now()) {
    if (!SABOTAGE_IDS.includes(id)) return null;
    const dropCounted = DROP_COUNTED_EFFECTS.has(id);
    const duration = dropCounted ? DROP_EFFECT_SECONDS : EFFECT_SECONDS;
    const untilDrop = this.mode === 'teamwork';
    this.game.activeEffects = this.game.activeEffects.filter(item => !(
      this.mode === 'teamwork' || item.targetPlayerId == null || targetPlayerId == null || item.targetPlayerId === targetPlayerId));
    const effect = {
      id, targetPlayerId, startedAt: now, duration,
      ...(untilDrop ? { untilDrop: true } : { expiresAt: now + duration * 1000 })
    };
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
    this.onEvent('sabotage.active', {
      id, targetPlayerId,
      ...(untilDrop ? { untilDrop: true } : { expiresAt: effect.expiresAt }),
      ...(dropCounted ? { dropsRemaining: effect.dropsRemaining } : {})
    });
    return effect;
  }

  consumeDropEffects(playerId, now = this.now()) {
    if (!this.game) return false;
    let changed = false;
    const retained = [];
    for (const effect of this.game.activeEffects) {
      if (!this.effectApplies(effect, playerId)) {
        retained.push(effect);
        continue;
      }
      if (this.mode === 'teamwork' && effect.untilDrop) {
        changed = true;
        if (DROP_COUNTED_EFFECTS.has(effect.id)) {
          const remaining = Number.isInteger(effect.dropsRemaining) ? effect.dropsRemaining : 1;
          effect.dropsRemaining = Math.max(0, remaining - 1);
          if (effect.dropsRemaining > 0) retained.push(effect);
        }
        continue;
      }
      if (DROP_COUNTED_EFFECTS.has(effect.id) && effect.expiresAt > now) {
        const remaining = Number.isInteger(effect.dropsRemaining) ? effect.dropsRemaining : 1;
        effect.dropsRemaining = Math.max(0, remaining - 1);
        changed = true;
        if (effect.dropsRemaining > 0) retained.push(effect);
        continue;
      }
      retained.push(effect);
    }
    if (changed) this.game.activeEffects = retained;
    return changed;
  }

  // From tick(): returns whether the list changed.
  expireEffects(now) {
    const oldEffects = this.game.activeEffects.length;
    this.game.activeEffects = this.game.activeEffects.filter(effect => effect.untilDrop || effect.expiresAt > now);
    return this.game.activeEffects.length !== oldEffects;
  }

  // From playerReconnected() resuming a paused Teamwork round.
  shiftEffects(shift) {
    for (const effect of this.game.activeEffects) if (!effect.untilDrop) effect.expiresAt += shift;
  }

  // From snapshot().
  wireEffects(now) {
    return this.game.activeEffects.map(effect => ({
      id: effect.id, targetPlayerId: effect.targetPlayerId, duration: effect.duration,
      elapsed: Math.max(0, (now - effect.startedAt) / 1000),
      remaining: effect.untilDrop ? Math.max(0, effect.duration) : Math.max(0, (effect.expiresAt - now) / 1000),
      ...(effect.untilDrop ? { untilDrop: true } : {}),
      ...(Number.isInteger(effect.dropsRemaining) ? { dropsRemaining: effect.dropsRemaining } : {}),
      ...(Number.isFinite(effect.tiltDirection) ? { tiltDirection: effect.tiltDirection } : {}),
      ...(Number.isFinite(effect.spotlightSide) ? { spotlightSide: effect.spotlightSide } : {})
    }));
  }
}

// Captured from sabotage-stack.html before the solo adapter: activateSabotage, consumeLocalDropEffect,
// finishMoverEffect, and the call sites in resolveVote, completeDrop, updateGame and startCollapse.
// Evaluate in a context that supplies game, Core, Math, effectById, announceEffectEnd and syncHud.
const LEGACY_SOLO_SOURCE = `
function randomBetween(min, max) { return min + Math.random() * (max - min); }
function randomDrunkTarget(mode) {
  return mode === 'lurch' ? randomBetween(1.55, 1.9) : randomBetween(0.25, 0.45);
}
function activateSabotage(id) {
  const sabotage = effectById(id);
  if (!sabotage || !game) return;
  const dropCounted = Core.DROP_COUNTED_IDS.includes(id);
  const duration = game.devMode ? 3600 : dropCounted ? 8 : 5;
  game.activeEffect = { id: sabotage.id, remaining: duration, duration, elapsed: 0 };
  if (dropCounted) game.activeEffect.dropsRemaining = 3;
  if (id === 'pisa') game.activeEffect.tiltDirection = game.devMode ? 1 : Math.random() < .5 ? -1 : 1;
  if (id === 'spotlight') game.activeEffect.spotlightSide = game.devMode ? 1 : Math.random() < .5 ? -1 : 1;
  game.statusMessage = \`\${sabotage.name} is active. \${sabotage.caption}\`;
  game.toastText = sabotage.name;
  game.toastTime = 1.45;
  if (id === 'drunk') {
    game.drunkMode = Math.random() < .5 ? 'stumble' : 'lurch';
    game.drunkMultiplier = 1;
    game.drunkFrom = 1;
    game.drunkTarget = randomDrunkTarget(game.drunkMode);
    game.drunkHold = randomBetween(.55, .70);
    game.drunkClock = 0;
  }
  if (id === 'portal' && game.moving) game.moving.portalWrap = true;
  if (id === 'double' && game.moving) game.moving.decoy = Core.createShellDecoy(game.moving);
  if (id === 'accordion' && game.moving) {
    const belowWidth = game.stack[game.stack.length - 1].right - game.stack[game.stack.length - 1].left;
    game.moving.accordion = true;
    game.moving.accordionReduced = false;
    game.moving.accordionPhase = Core.accordionPhaseForWidth(game.moving.width, belowWidth);
  }
  syncHud(true);
}
function finishMoverEffect(effect) {
  if (!game || !game.moving || !effect) return;
  Core.finishMoverBehavior(game, game.stack[game.stack.length - 1], effect.id, Core.MOVER_POLICIES.local);
}
function consumeLocalDropEffect() {
  if (!game || !game.activeEffect || game.devMode || multiplayer.active || !Number.isInteger(game.activeEffect.dropsRemaining)) return;
  game.activeEffect.dropsRemaining = Math.max(0, game.activeEffect.dropsRemaining - 1);
  if (game.activeEffect.dropsRemaining <= 0) {
    game.statusMessage = \`\${effectById(game.activeEffect.id).name} used its final drop.\`;
    announceEffectEnd(game.activeEffect.id);
    game.activeEffect = null;
  }
}
// resolveVote with a winner
function soloVoteWinner(id) {
  if (game.activeEffect) announceEffectEnd(game.activeEffect.id);
  activateSabotage(id);
}
// completeDrop after a placed landing
function soloLanding() { consumeLocalDropEffect(); }
// updateGame while playing, up to the vote
function soloFrame(dt) {
  game.elapsed += dt;
  if (game.activeEffect) {
    if (game.devMode) {
      game.activeEffect.elapsed += dt;
      game.activeEffect.remaining = game.activeEffect.duration;
    } else {
      game.activeEffect.elapsed = Math.min(game.activeEffect.duration || 5, (Number(game.activeEffect.elapsed) || 0) + dt);
      game.activeEffect.remaining = Math.max(0, game.activeEffect.remaining - dt);
      if (game.activeEffect.remaining <= 0) {
        finishMoverEffect(game.activeEffect);
        announceEffectEnd(game.activeEffect.id);
        game.activeEffect = null;
        game.statusMessage = 'Sabotage over. For now.';
      }
    }
  }
}
// startCollapse / finishGame
function soloCollapse() { game.activeEffect = null; }
`;

// Captured from sabotage-stack.html before the multiplayer view adapter: Effect selection in
// applyMultiplayerGame and the Effect countdowns in updateMultiplayerView. Evaluate in a context
// that supplies game, multiplayer, Core and finishMoverEffect.
const LEGACY_ROOM_SOURCE = `
// applyMultiplayerGame: returns the effect key and sets the view's Effect fields
function roomEffectsOnReceive(remote, view) {
  const team = remote.mode === 'teamwork' ? remote.team : null;
  const effects = remote.activeEffects || [];
  const activeTargetId = team ? team.currentPlayerId : multiplayer.playerId;
  let active = effects.find(effect => effect.targetPlayerId == null || effect.targetPlayerId === activeTargetId) || null;
  if (!active && remote.mode === 'competitive' && multiplayer.role !== 'player' && effects.length) active = effects[0];
  let pending = null;
  if (team) {
    const pendingEffects = effects.filter(effect => effect.targetPlayerId != null && effect.targetPlayerId !== team.currentPlayerId);
    pending = multiplayer.role === 'host'
      ? pendingEffects[0] || null
      : pendingEffects.find(effect => effect.targetPlayerId === multiplayer.playerId) || null;
  }
  const observed = team && multiplayer.role !== 'host' ? pending || active : active || pending;
  const effectKey = observed ? \`\${observed.id}:\${observed.targetPlayerId || 'all'}\` : '';
  view.activeEffect = active ? { ...active } : null;
  view.pendingEffect = pending ? { ...pending } : null;
  view.remoteEffects = effects;
  return effectKey;
}
// updateMultiplayerView after game.elapsed += dt
function roomEffectsOnFrame(dt) {
  if (Array.isArray(game.remoteEffects)) {
    for (const effect of game.remoteEffects) {
      effect.elapsed = Math.max(0, Number(effect.elapsed) || 0) + dt;
      if (!effect.untilDrop) effect.remaining = Math.max(0, (Number(effect.remaining) || 0) - dt);
    }
    game.remoteEffects = game.remoteEffects.filter(effect => effect.untilDrop || effect.remaining > 0);
  }
  if (game.activeEffect) {
    if (!game.activeEffect.untilDrop) game.activeEffect.remaining = Math.max(0, game.activeEffect.remaining - dt);
    game.activeEffect.elapsed = game.activeEffect.untilDrop ? (Number(game.activeEffect.elapsed) || 0) + dt : Math.max(Number(game.activeEffect.elapsed) || 0, (game.activeEffect.duration || 5) - game.activeEffect.remaining);
    if (game.activeEffect.remaining <= 0) {
      finishMoverEffect(game.activeEffect);
      game.activeEffect = null;
      multiplayer.lastEffectKey = '';
    }
  }
}
`;

module.exports = { LegacyEffects, LEGACY_SOLO_SOURCE, LEGACY_ROOM_SOURCE };
