'use strict';

(function exposeSharedCore(root, factory) {
  const core = factory();
  if (typeof module === 'object' && module && module.exports) module.exports = core;
  if (root) root.SabotageStackCore = core;
})(typeof window === 'object' && window ? window : globalThis, function createCore() {
  const WIDTH = 360;
  const HEIGHT = 520;
  const BLOCK_H = 22;
  const BASELINE = 480;
  const MIN_WIDTH = 30;
  const PERFECT_WINDOW = 3;
  const SABOTAGE_CATEGORIES = Object.freeze({
    kinetic: Object.freeze(['turbo', 'drunk', 'slowmo', 'magnet']),
    trajectory: Object.freeze(['portal', 'rollercoaster', 'gale', 'pisa']),
    optical: Object.freeze(['spotlight', 'peekaboo', 'zoom', 'double']),
    geometry: Object.freeze(['accordion', 'crumble', 'superglue', 'calipers'])
  });
  const SABOTAGE_CATEGORY_BY_ID = Object.freeze(Object.fromEntries(
    Object.entries(SABOTAGE_CATEGORIES).flatMap(([category, ids]) => ids.map(id => [id, category]))
  ));
  const SABOTAGE_IDS = Object.freeze(Object.values(SABOTAGE_CATEGORIES).flat());
  const HARSH_SABOTAGE_IDS = Object.freeze(SABOTAGE_IDS.filter(id => id !== 'superglue'));
  const DROP_COUNTED_IDS = Object.freeze(['crumble', 'gale', 'superglue', 'portal', 'calipers']);
  const REDUCED_MOTION_EXCLUDED_IDS = Object.freeze(['accordion', 'pisa', 'rollercoaster', 'peekaboo']);
  const REDUCED_MOTION_SAFE_IDS = Object.freeze(['zoom', 'superglue', 'calipers']);
  const PALETTE = Object.freeze(['#E3A33B', '#2F8478', '#7FA6BD', '#D5472F']);

  function speedForHeight(placedBlocks) {
    return Math.min(300, 140 + Math.max(0, placedBlocks) * 5);
  }
  function perfectWindowForSpeed(speed) {
    return Math.max(PERFECT_WINDOW, (Number.isFinite(Number(speed)) ? Math.max(0, Number(speed)) : 0) / 120);
  }
  function perfectWindowForEffect(speed, effectId = '') {
    return effectId === 'superglue' ? 14 : perfectWindowForSpeed(speed);
  }
  function gravitySlingshotMultiplier(offset) {
    const distance = Number.isFinite(Number(offset)) ? Number(offset) : 0;
    return 1 + 1.1 * Math.exp(-Math.pow(distance / 45, 2));
  }
  function advanceMover(moving, dt, speed, magnetTarget = null, options = {}) {
    if (!moving || !Number.isFinite(Number(moving.left)) || !Number.isFinite(Number(moving.width)) || Number(moving.width) <= 0) return null;
    const width = Number(moving.width);
    const worldMax = Math.max(0, WIDTH - width);
    const step = Math.max(0, Number.isFinite(Number(dt)) ? Number(dt) : 0);
    const velocityScale = Number.isFinite(Number(speed)) ? Math.max(0, Number(speed)) : 0;
    let direction = Number(moving.direction) < 0 ? -1 : 1;
    let speedMultiplier = 1;
    if (magnetTarget != null && Number.isFinite(Number(magnetTarget))) {
      const centre = Number(moving.left) + width / 2;
      speedMultiplier = gravitySlingshotMultiplier(Number(magnetTarget) - centre);
    }
    const velocity = direction * velocityScale * speedMultiplier;
    let next = Number(moving.left) + velocity * step;
    if (options.wrap || moving.portalWrap) {
      next = ((next % WIDTH) + WIDTH) % WIDTH;
      return { left: next, direction };
    }
    let lower = 0;
    let upper = worldMax;
    if (options.bounds && Number.isFinite(Number(options.bounds.minLeft)) && Number.isFinite(Number(options.bounds.maxLeft))) {
      lower = Math.max(0, Math.min(worldMax, Number(options.bounds.minLeft)));
      upper = Math.max(lower, Math.min(worldMax, Number(options.bounds.maxLeft)));
      next = Math.max(lower, Math.min(upper, Number(moving.left))) + velocity * step;
    }
    let safety = 0;
    while ((next < lower || next > upper) && safety < 8 && upper > lower) {
      if (next < lower) { next = lower + (lower - next); direction = 1; }
      else { next = upper - (next - upper); direction = -1; }
      safety += 1;
    }
    return { left: Math.max(lower, Math.min(upper, next)), direction };
  }
  function resizeMover(moving, width, maxWidth = WIDTH) {
    if (!moving || !Number.isFinite(Number(width))) return null;
    const ceiling = Math.max(Math.min(MIN_WIDTH, WIDTH), Math.min(WIDTH, Number.isFinite(Number(maxWidth)) ? Number(maxWidth) : WIDTH));
    const floor = Math.min(ceiling, MIN_WIDTH);
    const nextWidth = Math.max(floor, Math.min(ceiling, Number(width)));
    const centre = Number(moving.left) + Math.max(0, Number(moving.width) || 0) / 2;
    const left = Math.max(0, Math.min(WIDTH - nextWidth, centre - nextWidth / 2));
    return { ...moving, left, width: nextWidth };
  }
  function accordionWidth(elapsed, maxWidth, phase = 0) {
    const time = Number.isFinite(Number(elapsed)) ? Math.max(0, Number(elapsed)) : 0;
    const ceiling = Math.max(MIN_WIDTH, Math.min(WIDTH, Number.isFinite(Number(maxWidth)) ? Number(maxWidth) : MIN_WIDTH));
    const floor = Math.min(ceiling, Math.max(MIN_WIDTH, ceiling * 0.45));
    const phaseTurns = Number.isFinite(Number(phase)) ? Number(phase) : 0;
    const cycle = ((time / 0.8 + phaseTurns) % 1 + 1) % 1;
    const wave = 0.5 - 0.5 * Math.cos(cycle * Math.PI * 2);
    return floor + wave * (ceiling - floor);
  }
  function accordionPhaseForWidth(width, maxWidth) {
    const ceiling = Math.max(MIN_WIDTH, Math.min(WIDTH, Number.isFinite(Number(maxWidth)) ? Number(maxWidth) : MIN_WIDTH));
    const floor = Math.min(ceiling, Math.max(MIN_WIDTH, ceiling * 0.45));
    const bounded = Math.max(floor, Math.min(ceiling, Number.isFinite(Number(width)) ? Number(width) : ceiling));
    const wave = ceiling === floor ? 1 : (bounded - floor) / (ceiling - floor);
    return Math.acos(1 - 2 * wave) / (Math.PI * 2);
  }
  function slowToDartMultiplier(elapsed) {
    const time = Number.isFinite(Number(elapsed)) ? Math.max(0, Number(elapsed)) : 0;
    const phase = time % 1.4;
    const smooth = value => value * value * (3 - 2 * value);
    if (phase < 0.78) return 0.3;
    if (phase < 0.9) return 0.3 + 2.2 * smooth((phase - 0.78) / 0.12);
    if (phase < 1.28) return 2.5;
    return 2.5 - 2.2 * smooth((phase - 1.28) / 0.12);
  }
  function slowToDartWindup(elapsed) {
    const time = Number.isFinite(Number(elapsed)) ? Math.max(0, Number(elapsed)) : 0;
    const phase = time % 1.4;
    if (phase < 0.78 || phase > 0.9) return 0;
    return Math.sin(Math.PI * (phase - 0.78) / 0.12);
  }
  function peekabooOpacity(elapsed) {
    const time = Number.isFinite(Number(elapsed)) ? Math.max(0, Number(elapsed)) : 0;
    const phase = time % 0.7;
    if (phase < 0.31) return 1;
    if (phase < 0.35) return 1 - (phase - 0.31) / 0.04;
    if (phase < 0.39) return (phase - 0.35) / 0.04;
    return 0;
  }
  function rollercoasterOffset(elapsed, phase = 0) {
    const time = Number.isFinite(Number(elapsed)) ? Math.max(0, Number(elapsed)) : 0;
    const phaseTurns = Number.isFinite(Number(phase)) ? Number(phase) : 0;
    return -22.5 * (1 + Math.sin((time / 1.2 + phaseTurns) * Math.PI * 2));
  }
  function pisaAngle(elapsed, remaining, direction = 1, reducedMotion = false) {
    if (reducedMotion) return 0;
    const time = Number.isFinite(Number(elapsed)) ? Math.max(0, Number(elapsed)) : 0;
    const left = Number.isFinite(Number(remaining)) ? Math.max(0, Number(remaining)) : 0;
    const envelope = Math.min(1, time / 0.15, left / 0.15);
    const sway = Math.sin(time / 2.5 * Math.PI * 2) * (16 * Math.PI / 180);
    return (Number(direction) < 0 ? -1 : 1) * sway * envelope;
  }
  function createShellDecoy(moving) {
    if (!moving || !Number.isFinite(Number(moving.left)) || !Number.isFinite(Number(moving.width)) || Number(moving.width) <= 0) return null;
    const width = Number(moving.width);
    return {
      left: Math.max(0, Math.min(WIDTH - width, WIDTH - Number(moving.left) - width)),
      width,
      direction: Number(moving.direction) < 0 ? 1 : -1,
      level: Number(moving.level) || 0,
      color: moving.color || PALETTE[(Number(moving.level) || 0) % PALETTE.length],
      decoy: true
    };
  }
  function dropDrift(moving, effectId, options = {}) {
    if (!moving) return 0;
    if (effectId === 'gale') return (Number(options.windDirection) < 0 ? -1 : 1) * 20;
    return 0;
  }
  function caliperBounds(below, moving, margin = 38) {
    if (!below || !moving || !Number.isFinite(Number(moving.width))) return { minLeft: 0, maxLeft: Math.max(0, WIDTH - (Number(moving && moving.width) || 0)) };
    const width = Math.max(MIN_WIDTH, Math.min(WIDTH, Number(moving.width)));
    const worldMax = Math.max(0, WIDTH - width);
    const inset = Math.max(0, Number.isFinite(Number(margin)) ? Number(margin) : 38);
    const minLeft = Math.max(0, Math.min(worldMax, Number(below.left) - inset));
    const maxLeft = Math.max(minLeft, Math.min(worldMax, Number(below.right) + inset - width));
    return { minLeft, maxLeft };
  }
  function portalLandingMover(below, moving) {
    if (!below || !moving || !Number.isFinite(Number(moving.left)) || !Number.isFinite(Number(moving.width))) return null;
    const width = Number(moving.width);
    const centre = (Number(below.left) + Number(below.right)) / 2;
    const candidates = [Number(moving.left) - WIDTH, Number(moving.left), Number(moving.left) + WIDTH];
    candidates.sort((a, b) => {
      const overlapA = Math.max(0, Math.min(a + width, Number(below.right)) - Math.max(a, Number(below.left)));
      const overlapB = Math.max(0, Math.min(b + width, Number(below.right)) - Math.max(b, Number(below.left)));
      return overlapB - overlapA || Math.abs(a + width / 2 - centre) - Math.abs(b + width / 2 - centre);
    });
    return { ...moving, left: candidates[0], portalWrap: false };
  }
  function landingMover(moving, effectId, options = {}) {
    if (!moving) return null;
    const width = Number(moving.width);
    if (!Number.isFinite(width) || width <= 0) return null;
    const drift = dropDrift(moving, effectId, options);
    const rawLeft = Number(moving.left) + drift;
    if (options.wrap || moving.portalWrap) return { ...moving, left: ((rawLeft % WIDTH) + WIDTH) % WIDTH, drift };
    const maxLeft = Math.max(0, WIDTH - width);
    return { ...moving, left: Math.max(0, Math.min(maxLeft, rawLeft)), drift };
  }
  function makeBase() {
    return { left: 80, right: 280, color: PALETTE[0], perfect: false, placer: 'Base', level: 0 };
  }
  function placeDrop(below, moving, options = {}) {
    const left = Number(moving.left);
    const width = Number(moving.width);
    const right = left + width;
    const belowWidth = Number(below.right) - Number(below.left);
    if (![left, width, right, belowWidth, Number(below.left), Number(below.right)].every(Number.isFinite) || width <= 0 || belowWidth <= 0) {
      return { status: 'miss', perfect: false, placed: null, fallen: [], reason: 'invalid-geometry' };
    }
    const level = Number.isInteger(options.level) ? options.level : (Number(below.level) || 0) + 1;
    const color = options.color || PALETTE[level % PALETTE.length];
    const placer = options.placer || 'You';
    const centre = (left + right) / 2;
    const belowCentre = (Number(below.left) + Number(below.right)) / 2;
    const perfect = Math.abs(centre - belowCentre) <= (Number.isFinite(options.perfectWindow) ? options.perfectWindow : PERFECT_WINDOW);
    let placedLeft;
    let placedRight;
    const fallen = [];
    if (perfect) {
      placedLeft = belowCentre - width / 2;
      placedRight = placedLeft + width;
    } else {
      placedLeft = Math.max(left, Number(below.left));
      placedRight = Math.min(right, Number(below.right));
      if (placedRight <= placedLeft) {
        return {
          status: 'miss', perfect: false, placed: null,
          fallen: [{ left, right, level, color, kind: 'miss' }],
          reason: 'no-overlap'
        };
      }
      if (left < placedLeft) fallen.push({ left, right: Math.min(right, placedLeft), level, color, kind: 'overhang' });
      if (right > placedRight) fallen.push({ left: Math.max(left, placedRight), right, level, color, kind: 'overhang' });
    }
    let clippedWidth = placedRight - placedLeft;
    const crumblePerSide = options.crumble === true ? 5 : Math.max(0, Number(options.crumble) || 0);
    if (!perfect && crumblePerSide > 0 && clippedWidth > MIN_WIDTH) {
      const newWidth = Math.max(MIN_WIDTH, clippedWidth - crumblePerSide * 2);
      const trim = (clippedWidth - newWidth) / 2;
      if (trim > 0) {
        fallen.push({ left: placedLeft, right: placedLeft + trim, level, color, kind: 'crumb' });
        fallen.push({ left: placedRight - trim, right: placedRight, level, color, kind: 'crumb' });
        placedLeft += trim;
        placedRight -= trim;
        clippedWidth = newWidth;
      }
    }
    return {
      status: 'placed', perfect, reason: perfect ? 'perfect' : 'overlap',
      placed: { left: placedLeft, right: placedRight, width: clippedWidth, color, perfect, placer, level },
      fallen
    };
  }
  function safeRandomIndex(length, random) {
    if (length <= 1) return 0;
    const sample = Number(random());
    const unit = Number.isFinite(sample) ? Math.max(0, Math.min(0.999999999, sample)) : 0;
    return Math.floor(unit * length);
  }
  function shuffled(values, random) {
    const next = values.slice();
    for (let i = next.length - 1; i > 0; i -= 1) {
      const j = safeRandomIndex(i + 1, random);
      [next[i], next[j]] = [next[j], next[i]];
    }
    return next;
  }
  function pickOptions(pool, random = Math.random, previousWinner = null, reducedMotion = false) {
    const values = Array.from(new Set(Array.isArray(pool) ? pool : []))
      .filter(value => value !== previousWinner);
    const size = Math.min(3, values.length);
    if (size === 0) return [];
    if (size < 3) return shuffled(values, random);
    const groups = Object.entries(SABOTAGE_CATEGORIES)
      .map(([category, ids]) => ({ category, values: values.filter(value => ids.includes(value)) }))
      .filter(group => group.values.length);
    if (groups.length < 3) return shuffled(values, random).slice(0, size);
    let chosenGroups;
    if (groups.length === 4 && size === 3) {
      // Choose which category to omit with probabilities that make each active
      // effect appear as evenly as possible, even after Reduced Motion filtering.
      let low = 0; let high = 3;
      for (let iteration = 0; iteration < 48; iteration += 1) {
        const middle = (low + high) / 2;
        const included = groups.reduce((sum, group) => sum + Math.min(1, middle * group.values.length), 0);
        if (included > size) high = middle; else low = middle;
      }
      const omitWeights = groups.map(group => 1 - Math.min(1, low * group.values.length));
      const omitTotal = omitWeights.reduce((sum, weight) => sum + weight, 0);
      let roll = safeRandomIndex(1_000_000, random) / 1_000_000 * omitTotal;
      let omittedIndex = groups.length - 1;
      for (let index = 0; index < groups.length; index += 1) {
        roll -= omitWeights[index];
        if (roll < 0) { omittedIndex = index; break; }
      }
      chosenGroups = groups.filter((_group, index) => index !== omittedIndex);
    } else {
      chosenGroups = shuffled(groups, random).slice(0, size);
    }
    // The caller filters motion-heavy effects before this function. Do not force a
    // particular "safe" category onto every Reduced Motion ballot: all remaining
    // choices are safe, and forcing one skews the pool dramatically.
    const chosen = chosenGroups.map(group => group.values[safeRandomIndex(group.values.length, random)]);
    if (!chosen.some(id => HARSH_SABOTAGE_IDS.includes(id))) {
      const eligible = chosenGroups.map((group, index) => ({ group, index, harsh: group.values.filter(id => HARSH_SABOTAGE_IDS.includes(id)) }))
        .filter(item => item.harsh.length);
      if (eligible.length) {
        const item = eligible[safeRandomIndex(eligible.length, random)];
        chosen[item.index] = item.harsh[safeRandomIndex(item.harsh.length, random)];
      }
    }
    return shuffled(chosen, random);
  }
  function voteIntervalForHeight(height) {
    return Number(height) >= 25 ? 7 : 10;
  }
  function recordVote(votes, event, validOptions) {
    if (!event || event.voterId == null || event.option == null) return votes;
    const voterId = String(event.voterId).trim();
    const option = String(event.option);
    if (!voterId || !validOptions.includes(option)) return votes;
    const next = new Map(votes instanceof Map ? votes : []);
    next.set(voterId, option);
    return next;
  }
  function countVotes(votes, options) {
    const counts = Object.fromEntries(options.map(option => [option, 0]));
    const entries = votes instanceof Map ? votes.values() : Object.values(votes || {});
    for (const option of entries) if (Object.prototype.hasOwnProperty.call(counts, option)) counts[option] += 1;
    return counts;
  }
  function chooseWinner(votes, options, random = Math.random) {
    if (!Array.isArray(options) || options.length === 0) return null;
    const counts = countVotes(votes, options);
    const maximum = Math.max(0, ...Object.values(counts));
    const tied = options.filter(option => counts[option] === maximum);
    const r = Math.max(0, Math.min(0.999999999, Number(random()) || 0));
    const winner = tied[Math.floor(r * tied.length)];
    return { winner, counts, totalVotes: votes instanceof Map ? votes.size : Object.keys(votes || {}).length };
  }

  return Object.freeze({
    WIDTH, HEIGHT, BLOCK_H, BASELINE, MIN_WIDTH, PERFECT_WINDOW,
    SABOTAGE_IDS, SABOTAGE_CATEGORIES, SABOTAGE_CATEGORY_BY_ID,
    HARSH_SABOTAGE_IDS, DROP_COUNTED_IDS, REDUCED_MOTION_EXCLUDED_IDS, REDUCED_MOTION_SAFE_IDS, PALETTE,
    speedForHeight, perfectWindowForSpeed, perfectWindowForEffect, gravitySlingshotMultiplier, advanceMover,
    resizeMover, accordionWidth, accordionPhaseForWidth, slowToDartMultiplier, slowToDartWindup, peekabooOpacity, rollercoasterOffset, pisaAngle, createShellDecoy, dropDrift, caliperBounds, portalLandingMover, landingMover,
    makeBase, placeDrop, pickOptions, voteIntervalForHeight,
    recordVote, countVotes, chooseWinner
  });
});
