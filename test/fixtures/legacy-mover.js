
'use strict';
// Frozen pre-refactor behavior oracle. Do not update to mirror production changes.
// Captured from abc7e6d: RoundEngine motion and browser solo/prediction motion.
const vm = require('node:vm');
const Core = require('../../shared/game-core');
const WORLD_WIDTH = 360;
class LegacyMotion {
  movementSpeed(stack, actor, playerId, now) {
    const base = Core.speedForHeight(Math.max(0, stack.length - 1));
    if (this.hasEffect('turbo', playerId, now)) return base * 1.7;
    const roller = this.effectFor('rollercoaster', playerId, now);
    if (roller && !this.motionReductionEnabled()) return base * Core.rollercoasterSpeedMultiplier(this.effectElapsed(roller, now), actor.moving && actor.moving.rollerPhase);
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
}
function randomDrunkTarget(mode, random) {
  const min = mode === 'lurch' ? 1.55 : 0.25;
  const max = mode === 'lurch' ? 1.9 : 0.45;
  const sample = Math.max(0, Math.min(0.999999999, Number(random()) || 0));
  return min + sample * (max - min);
}
function browserMotion(game, reducedMotion, random, { predict = false, move = true } = {}) {
  const context = { Core, WIDTH: 360, game, reducedMotion, Math: Object.assign(Object.create(Math), { random }) };
  vm.runInNewContext(`
    function heightOf(g) { return Math.max(0, g.stack.length - 1); }
    function effectActive(id) { return Boolean(game.activeEffect && game.activeEffect.id === id); }
    function randomBetween(min, max) { return min + Math.random() * (max - min); }
    function randomDrunkTarget(mode) { return mode === 'lurch' ? randomBetween(1.55, 1.9) : randomBetween(.25, .45); }
    function gameSpeed() {
      if (!game) return 140;
      const base = Core.speedForHeight(heightOf(game));
      if (effectActive('turbo')) return base * 1.7;
      if (effectActive('rollercoaster') && !reducedMotion) return base * Core.rollercoasterSpeedMultiplier(Number(game.activeEffect.elapsed) || 0, game.moving && game.moving.rollerPhase);
      if (effectActive('slowmo')) return base * Core.slowToDartMultiplier(Number(game.activeEffect.elapsed) || 0);
      if (effectActive('drunk')) return base * game.drunkMultiplier;
      return base;
    }
    function moverStepOptions(below, moving = game && game.moving) {
      return {
        wrap: effectActive('portal'),
        bounds: effectActive('calipers') ? Core.caliperBounds(below, moving) : null
      };
    }
    function updateDrunk(dt) {
      if (!effectActive('drunk')) return;
      game.drunkClock += dt;
      while (game.drunkClock >= (Number(game.drunkHold) || 0.625)) {
        game.drunkClock -= Number(game.drunkHold) || 0.625;
        game.drunkFrom = game.drunkMultiplier;
        game.drunkMode = game.drunkMode === 'lurch' ? 'stumble' : 'lurch';
        game.drunkTarget = randomDrunkTarget(game.drunkMode);
        game.drunkHold = randomBetween(.55, .70);
      }
      const mix = 1 - Math.exp(-dt / .11);
      game.drunkMultiplier += (game.drunkTarget - game.drunkMultiplier) * mix;
      game.drunkMultiplier = Math.max(.25, Math.min(1.9, game.drunkMultiplier));
    }
    function updateDynamicMover() {
      if (!game || !game.moving || !effectActive('accordion')) return;
      const elapsed = Number(game.activeEffect.elapsed) || 0;
      const below = game.stack[game.stack.length - 1];
      const belowWidth = below.right - below.left;
      if (!game.moving.accordion || (!reducedMotion && game.moving.accordionReduced)) {
        game.moving.accordion = true;
        game.moving.accordionReduced = false;
        game.moving.accordionPhase = Core.accordionPhaseForWidth(game.moving.width, belowWidth) - elapsed / 0.8;
      }
      if (reducedMotion) {
        game.moving.accordionReduced = true;
        Object.assign(game.moving, Core.resizeMover(game.moving, belowWidth, belowWidth));
        return;
      }
      const width = Core.accordionWidth(elapsed, belowWidth, game.moving.accordionPhase || 0);
      const resized = Core.resizeMover(game.moving, width, belowWidth);
      if (resized) Object.assign(game.moving, resized);
    }
    function finishMoverEffect(effect) {
      if (!game || !game.moving || !effect) return;
      if (effect.id === 'accordion') {
        const below = game.stack[game.stack.length - 1];
        const width = below ? below.right - below.left : game.moving.width;
        const restored = Core.resizeMover(game.moving, width, width);
        if (restored) Object.assign(game.moving, restored);
        delete game.moving.accordion;
        delete game.moving.accordionReduced;
        delete game.moving.accordionPhase;
      } else if (effect.id === 'portal') {
        game.moving.portalWrap = false;
        const maxLeft = Math.max(0, WIDTH - game.moving.width);
        if (game.moving.left > maxLeft) { game.moving.left = maxLeft; game.moving.direction = -1; }
      } else if (effect.id === 'double') delete game.moving.decoy;
    }

    globalThis.tick = dt => {
      if (!${predict}) updateDrunk(dt);
      updateDynamicMover();
      if (${move} && game.moving) {
        const speed = gameSpeed();
        const below = game.stack[game.stack.length - 1];
        const magnetTarget = effectActive('magnet') && below ? (below.left + below.right) / 2 : null;
        const next = Core.advanceMover(game.moving, dt, speed, magnetTarget, moverStepOptions(below, game.moving));
        if (next) { game.moving.left = next.left; game.moving.direction = next.direction; }
        if (effectActive('double')) {
          if (!game.moving.decoy) game.moving.decoy = Core.createShellDecoy(game.moving);
          const decoyNext = Core.advanceMover(game.moving.decoy, dt, speed, null, moverStepOptions(below, game.moving.decoy));
          if (decoyNext) { game.moving.decoy.left = decoyNext.left; game.moving.decoy.direction = decoyNext.direction; }
        } else if (game.moving.decoy) delete game.moving.decoy;
        game.moving.vx = speed;

      }
    };
  `, context);
  context.tick.finish = effect => context.finishMoverEffect(effect);
  return context.tick;
}
module.exports = { LegacyMotion, browserMotion };
