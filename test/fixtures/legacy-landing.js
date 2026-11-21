'use strict';
// Frozen pre-refactor behavior oracle. Do not update to mirror production changes.
// Captured before the Landing refactor: RoundEngine effectiveSpeedAt, landingLeft, the landing part
// of teamDrop/competitiveDrop, makeMover and the spawn call sites; and the page's spawnMovingBlock,
// completeDrop and speedAtLanding. Core helpers that the refactor leaves unchanged (moverBehaviorSpeed,
// caliperBounds, portalLandingMover, placeDrop, perfectWindowForEffect, gravitySlingshotMultiplier,
// accordion helpers, createShellDecoy) are used live; the ones it deletes are copied here.
const Core = require('../../shared/game-core');
const WORLD_WIDTH = 360;
const LAG_COMPENSATION_SECONDS = 0.25;

function dropDrift() {
  return 0;
}
function landingMover(moving, effectId, options = {}) {
  if (!moving) return null;
  const width = Number(moving.width);
  if (!Number.isFinite(width) || width <= 0) return null;
  const drift = dropDrift(moving, effectId, options);
  const rawLeft = Number(moving.left) + drift;
  if (options.wrap || moving.portalWrap) return { ...moving, left: ((rawLeft % Core.WIDTH) + Core.WIDTH) % Core.WIDTH, drift };
  const maxLeft = Math.max(0, Core.WIDTH - width);
  return { ...moving, left: Math.max(0, Math.min(maxLeft, rawLeft)), drift };
}
const LegacyCore = Object.freeze({ ...Core, dropDrift, landingMover });

// Server methods, evaluated with `this` bound to a live RoundEngine (for hasEffect, effectFor,
// effectElapsed and motionReductionEnabled, which keep their meaning).
const LegacyServerLanding = {
  moverEffects(playerId, now) {
    return Object.fromEntries(['turbo', 'rollercoaster', 'slowmo', 'drunk', 'accordion', 'portal', 'calipers', 'magnet', 'double'].map(id => {
      const effect = this.effectFor(id, playerId, now);
      return [id, effect ? { elapsed: this.effectElapsed(effect, now) } : null];
    }));
  },
  effectiveSpeedAt(stack, actor, playerId, now) {
    let speed = Core.moverBehaviorSpeed(actor, Math.max(0, stack.length - 1), LegacyServerLanding.moverEffects.call(this, playerId, now), this.motionReductionEnabled(), Core.MOVER_POLICIES.authoritative);
    const moving = actor && actor.moving;
    const below = Array.isArray(stack) && stack[stack.length - 1];
    if (moving && below && this.hasEffect('magnet', playerId, now)) {
      const target = (below.left + below.right) / 2;
      speed *= Core.gravitySlingshotMultiplier(target - (moving.left + moving.width / 2));
    }
    return speed;
  },
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
  },
  // The shared middle of teamDrop and competitiveDrop, after validation and before consumeDropEffects.
  land(actor, stack, playerId, reportedX, player, now) {
    const below = stack[stack.length - 1];
    const speed = LegacyServerLanding.effectiveSpeedAt.call(this, stack, actor, playerId, now);
    const landing = { ...actor.moving, left: LegacyServerLanding.landingLeft.call(this, actor, stack, playerId, reportedX, speed, now) };
    let placedMover = landingMover(landing, '', { speed });
    if (this.hasEffect('portal', playerId, now)) placedMover = Core.portalLandingMover(below, placedMover || landing);
    const superglue = this.hasEffect('superglue', playerId, now);
    const outcome = Core.placeDrop(below, placedMover || landing, {
      level: stack.length, color: player.color, placer: player.name,
      perfectWindow: Core.perfectWindowForEffect(speed, superglue ? 'superglue' : ''),
      crumble: this.hasEffect('crumble', playerId, now)
    });
    return { authoritativeX: landing.left, outcome: JSON.parse(JSON.stringify(outcome)) };
  },
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
  },
  // nextCompetitorMover, and the spawn branch of startTeamTurn (which is followed by the same
  // portalWrap/Decoy reconciliation for reused Movers).
  spawn(stack, fromLeft, color, playerId, now) {
    const moving = LegacyServerLanding.makeMover.call(this, stack, fromLeft, color, this.effectFor('accordion', playerId, now), now);
    moving.portalWrap = this.hasEffect('portal', playerId, now);
    if (this.hasEffect('double', playerId, now)) moving.decoy = Core.createShellDecoy(moving);
    return moving;
  }
};

// Verbatim from sabotage-stack.html. Evaluate with Core bound to LegacyCore, in a context that supplies
// the page's state and helpers (game, effectActive, gameSpeed, heightOf, playCue, …).
const LEGACY_PAGE_LANDING_SOURCE = `
function spawnMovingBlock() {
  if (!game) return;
  const below = game.stack[game.stack.length - 1];
  const width = Math.max(Core.MIN_WIDTH, below.right - below.left);
  const level = game.stack.length;
  const fromLeft = game.nextSpawnFromLeft !== false;
  game.nextSpawnFromLeft = !fromLeft;
  let moving = {
    left: fromLeft ? 0 : WIDTH - width, width, direction: fromLeft ? 1 : -1,
    level, fromLeft, color: PALETTE[level % PALETTE.length], portalWrap: effectActive('portal'),
    rollerPhase: ((level * 0.38196601125) % 1)
  };
  if (effectActive('double')) moving.decoy = Core.createShellDecoy(moving);
  if (effectActive('accordion')) {
    const elapsed = Number(game.activeEffect.elapsed) || 0;
    moving.accordion = true;
    moving.accordionReduced = reducedMotion;
    moving.accordionPhase = Core.accordionPhaseForWidth(width, width) - elapsed / 0.8;
    const accordionWidth = reducedMotion ? width : Core.accordionWidth(elapsed, width, moving.accordionPhase);
    moving = Core.resizeMover(moving, accordionWidth, width);
  }
  game.moving = moving;
  game.moving.vx = gameSpeed();
  game.blockClock = 0;
}
function completeDrop() {
  if (!game || game.phase !== 'playing' || !game.moving) return;
  const level = game.stack.length;
  const below = game.stack[game.stack.length - 1];
  const landingEffectId = effectActive('rollercoaster') ? 'rollercoaster' : '';
  const verticalOffset = landingEffectId === 'rollercoaster' && !reducedMotion
    ? Core.rollercoasterOffset(Number(game.activeEffect.elapsed) || 0, game.moving.rollerPhase || 0) : 0;
  const landingOptions = {
    speed: speedAtLanding(), verticalOffset,
    dropsRemaining: game.activeEffect && game.activeEffect.dropsRemaining
  };
  const driftedMover = Core.landingMover(game.moving, landingEffectId, landingOptions);
  const landedMover = effectActive('portal')
    ? Core.portalLandingMover(below, driftedMover || game.moving)
    : driftedMover;
  const outcome = Core.placeDrop(below, landedMover || game.moving, {
    perfectWindow: Core.perfectWindowForEffect(speedAtLanding(), effectActive('superglue') ? 'superglue' : ''),
    crumble: effectActive('crumble'), level, color: game.moving.color, placer: 'You'
  });
  for (const piece of outcome.fallen) {
    game.fallenPieces.push({ ...piece });
    spawnFallingPiece(piece, outcome.status === 'miss' ? 'miss' : 'trim');
  }
  if (outcome.status === 'miss') {
    if (game.devMode) {
      const automatic = Boolean(game.devLastDrop && game.devLastDrop.automatic);
      game.devLastDrop = { ...(game.devLastDrop || {}), status: 'miss' };
      elements.devFeedback.textContent = automatic
        ? 'The automatic practice drop missed; the tower will reset. No real run ended.'
        : 'The practice drop missed. Adjust your timing or reset the tower.';
      syncHud(true);
      return;
    }
    playCue('block.miss');
    game.statusMessage = 'No overlap. The tower has collapsed.';
    announceGame('No overlap. The tower has collapsed.');
    game.toastText = 'NO OVERLAP · TOWER COLLAPSED';
    startCollapse();
    syncHud(true);
    return;
  }
  landSoloEffects();
  game.stack.push(outcome.placed);
  playCue(outcome.perfect ? 'block.perfect' : 'block.land');
  game.score = heightOf(game);
  if (game.devMode && !(game.devLastDrop && game.devLastDrop.automatic)) {
    const placedWidth = Math.round(outcome.placed.right - outcome.placed.left);
    const drift = landedMover && Number(landedMover.drift) ? \`, \${Math.abs(Math.round(landedMover.drift))} px drift\` : '';
    const devName = devSelectedId === 'normal' ? 'Normal (no sabotage)' : effectById(devSelectedId) ? effectById(devSelectedId).name : 'practice sample';
    elements.devFeedback.textContent = \`\${devName}: manual \${outcome.perfect ? 'perfect landing' : 'safe overlap'} at sample height \${heightOf(game)}, placed width \${placedWidth} px\${drift}. No real score saved.\`;
  }
  if (!game.devMode) sessionBest = Math.max(sessionBest, game.score);
  if (outcome.perfect) {
    game.perfects += 1;
    game.perfectTime = 1.25;
    game.statusMessage = 'Perfect drop! The block snapped into line.';
  }
  if (outcome.perfect) {
    if (!game.devMode) announceGame(\`Perfect drop. Height \${heightOf(game)}.\`);
  }
  if (!game.devMode) {
    game.flavorCounter = (game.flavorCounter || 0) + 1;
    if (game.flavorCounter % 3 === 0) showChatFlavor(ROASTS[(game.flavorCounter / 3 - 1) % ROASTS.length]);
  }
  spawnMovingBlock();
  updateBestLabels();
  syncHud(true);
}
function speedAtLanding(moving = game && game.moving, below = game && game.stack[game.stack.length - 1]) {
  const base = gameSpeed();
  if (!moving || !below || !effectActive('magnet')) return base;
  const target = (below.left + below.right) / 2;
  return base * Core.gravitySlingshotMultiplier(target - (moving.left + moving.width / 2));
}
`;

module.exports = { LegacyCore, LegacyServerLanding, LEGACY_PAGE_LANDING_SOURCE };
