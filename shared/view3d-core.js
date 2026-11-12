'use strict';

// Presentation-only geometry shared by the 3D diorama and the 2D fallback.
//
// The rules live in shared/game-core.js and always work in the flat 360x520 design space. This module turns
// that space into a camera, so both renderers agree on where a block appears on screen. It is deliberately
// a pure, dependency-free description of the scene the page feeds to the 3D renderer (scene3d.js).
//
// World units: the playfield is 2.0455 wide at the base and tapers with height (perspective in the world
// itself, so a tall tower visually narrows without ever changing a single rule), blocks are 0.155 tall and
// the camera orbits the tower at about 2.4–4 units.

(function exposeViewCore(root, factory) {
  const core = factory();
  if (typeof module === 'object' && module && module.exports) module.exports = core;
  if (root) root.SabotageStackView3D = core;
})(typeof window === 'object' && window ? window : globalThis, function createViewCore() {
  const WORLD = Object.freeze({
    width: 360,
    height: 520,
    baseline: 480,
    near: 2.0455,
    rise: 0.062,
    blockH: 0.155,
    depthRatio: 0.62,
    bow: 0.30,
    half: 180
  });

  const clamp = (value, low, high) => value < low ? low : value > high ? high : value;
  const halfWidthAt = level => WORLD.near / (WORLD.near + WORLD.rise * Math.max(0, level));
  const widthToWorld = (pixels, level) => (pixels / WORLD.half) * halfWidthAt(level);
  const heightToWorld = level => level * WORLD.blockH;
  const centreToWorld = (pixels, level) => ((pixels - WORLD.half) / WORLD.half) * halfWidthAt(level);
  const bowAt = (level, bow) => bow * clamp(level / 24, 0, 3);

  // Higher storeys drift toward the stack's own centre of mass, so a lopsided tower visibly leans.
  // Purely cosmetic: the rules and the perfect-window maths never see this offset.
  function stackBow(stack) {
    if (!Array.isArray(stack) || stack.length < 2) return 0;
    let sum = 0; let weight = 0;
    for (let index = 0; index < stack.length; index += 1) {
      const block = stack[index];
      const centre = (Number(block.left) + Number(block.right)) / 2 - WORLD.half;
      const w = index / Math.max(1, stack.length - 1);
      sum += centre * w * w; weight += w * w;
    }
    return weight ? (sum / weight) / WORLD.half * WORLD.bow : 0;
  }

  // Maps a 2D design-space rectangle onto the diorama: the block's world centre, width and depth.
  function blockToWorld(block, level, bow) {
    const widthPx = Math.max(1, Number(block.right) - Number(block.left));
    const centrePx = (Number(block.left) + Number(block.right)) / 2;
    const width = widthToWorld(widthPx, level);
    return Object.freeze({
      x: centreToWorld(centrePx, level) + bowAt(level, bow),
      y: heightToWorld(level) + WORLD.blockH / 2,
      z: 0,
      width,
      depth: Math.max(0.15, width * WORLD.depthRatio),
      level
    });
  }

  // World-space centre of a moving block (its 2D left edge plus half its width).
  function moverToWorld(moving, bow) {
    if (!moving) return null;
    const level = Number.isInteger(moving.level) ? moving.level : 0;
    const centrePx = Number(moving.left) + Number(moving.width) / 2;
    const width = widthToWorld(Number(moving.width) || 1, level);
    return Object.freeze({
      x: centreToWorld(centrePx, level) + bowAt(level, bow),
      y: heightToWorld(level) + WORLD.blockH / 2,
      z: 0,
      width,
      depth: Math.max(0.15, width * WORLD.depthRatio),
      dir: Number(moving.direction) < 0 ? -1 : 1,
      level
    });
  }

  function fallingToWorld(actor, bow) {
    if (!actor) return null;
    // Falling actors are stored in screen pixels (x = left edge, y = top edge, relative to the 520-high board).
    const level = clamp((WORLD.baseline - Number(actor.y) - Number(actor.height || 0)) / 22, 0, 60);
    const levelInteger = Math.round(level);
    const width = widthToWorld(Number(actor.width) || 4, levelInteger);
    return Object.freeze({
      x: centreToWorld(Number(actor.x) + Number(actor.width) / 2, levelInteger) + bowAt(levelInteger, bow),
      y: WORLD.blockH * level + WORLD.blockH / 2,
      z: 0,
      width,
      depth: Math.max(0.1, width * WORLD.depthRatio),
      angle: Number(actor.angle) || 0,
      level: levelInteger
    });
  }

  // A compact, renderer-agnostic description of what the page wants drawn this frame.
  function snapshotFor(game, view, options = {}) {
    const state = game || {};
    const stack = Array.isArray(state.stack) ? state.stack : [];
    const bow = stackBow(stack);
    const effect = state.activeEffect ? {
      id: state.activeEffect.id,
      elapsed: Number(state.activeEffect.elapsed) || 0,
      remaining: Number(state.activeEffect.remaining) || 0,
      spotlightSide: Number(state.activeEffect.spotlightSide) < 0 ? -1 : 1,
      strength: effectStrength(state.activeEffect.id)
    } : null;
    const falling = (Array.isArray(state.fallingActors) ? state.fallingActors : [])
      .filter(actor => actor && Number.isFinite(Number(actor.x)) && Number.isFinite(Number(actor.y)))
      .map(actor => fallingToWorld(actor, bow))
      .filter(Boolean);
    return Object.freeze({
      mode: view || 'game',
      theme: options.theme || (state && state.theme) || 'paper',
      reducedMotion: Boolean(options.reducedMotion),
      phase: state.phase || 'idle',
      stack,
      bow,
      towerTop: stack.length ? stack.length * WORLD.blockH : WORLD.blockH,
      perfects: Number(state.perfects) || 0,
      height: Math.max(0, stack.length - 1),
      effect,
      movingWorld: moverToWorld(state.moving, bow),
      decoyWorld: state.moving && state.moving.decoy ? moverToWorld({ ...state.moving.decoy, level: state.moving.level }, bow) : null,
      movingAlpha: options.movingAlpha != null ? options.movingAlpha : 1,
      decoyAlpha: options.decoyAlpha != null ? options.decoyAlpha : 0.6,
      falling,
      celebrate: Boolean(options.celebrate)
    });
  }

  // How hard the camera should shake for each sabotage, in world units.
  function effectStrength(id) {
    return ({ earthquake: 0.85, portal: 0, pisa: 0, spotlight: 0, zoom: 0, crumble: 0.25, superglue: 0.15, accordion: 0.2, magnet: 0.25 })[id] || 0;
  }

  return Object.freeze({
    WORLD, halfWidthAt, widthToWorld, heightToWorld, centreToWorld, bowAt, stackBow,
    blockToWorld, moverToWorld, fallingToWorld, snapshotFor, effectStrength
  });
});
