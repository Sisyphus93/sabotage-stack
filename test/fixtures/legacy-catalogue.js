'use strict';
// Frozen pre-refactor behavior oracle. Do not update to mirror production changes.
// Captured before the Sabotage catalogue: the page's SABOTAGES, VOTE_EFFECT_HINTS, STAGE_VOTE_SHORT_NAMES
// and announceVoteWinner; the server's TEAM_GLOBAL_EFFECTS and moverEffects list; and the whole shared
// core as it was (LegacyCore), so the tuning helpers can be compared on the same inputs.
const vm = require('node:vm');

const LEGACY_CORE_SOURCE = `'use strict';

(function exposeSharedCore(root, factory) {
  const core = factory();
  if (typeof module === 'object' && module && module.exports) module.exports = core;
})(typeof window === 'object' && window ? window : globalThis, function createCore() {
  const WIDTH = 360;
  const HEIGHT = 520;
  const BLOCK_H = 22;
  const BASELINE = 480;
  const MIN_WIDTH = 30;
  const PERFECT_WINDOW = 3;
  const SABOTAGE_CATEGORIES = Object.freeze({
    kinetic: Object.freeze(['turbo', 'drunk', 'slowmo', 'magnet']),
    trajectory: Object.freeze(['portal', 'rollercoaster', 'pisa', 'earthquake']),
    optical: Object.freeze(['spotlight', 'peekaboo', 'zoom', 'double']),
    geometry: Object.freeze(['accordion', 'crumble', 'superglue', 'calipers'])
  });
  const SABOTAGE_CATEGORY_BY_ID = Object.freeze(Object.fromEntries(
    Object.entries(SABOTAGE_CATEGORIES).flatMap(([category, ids]) => ids.map(id => [id, category]))
  ));
  const SABOTAGE_IDS = Object.freeze(Object.values(SABOTAGE_CATEGORIES).flat());
  const HARSH_SABOTAGE_IDS = Object.freeze(SABOTAGE_IDS.filter(id => id !== 'superglue' && id !== 'calipers'));
  // Effects held back until the tower is tall enough for them to matter (tune in play).
  const SABOTAGE_MIN_HEIGHT = Object.freeze({ zoom: 12 });
  const DROP_COUNTED_IDS = Object.freeze(['crumble', 'superglue', 'portal', 'calipers']);
  const REDUCED_MOTION_EXCLUDED_IDS = Object.freeze(['accordion', 'pisa', 'rollercoaster', 'peekaboo', 'earthquake']);
  const REDUCED_MOTION_SAFE_IDS = Object.freeze(['zoom', 'superglue', 'calipers']);
  const PALETTE = Object.freeze(['#E3A33B', '#2F8478', '#7FA6BD', '#D5472F']);

  function sabotageAvailableAtHeight(id, height) {
    const minimum = SABOTAGE_MIN_HEIGHT[id] || 0;
    return (Number.isFinite(Number(height)) ? Number(height) : 0) >= minimum;
  }
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
    return 0;
  }
  function rollercoasterOffset(elapsed, phase = 0) {
    const time = Number.isFinite(Number(elapsed)) ? Math.max(0, Number(elapsed)) : 0;
    const phaseTurns = Number.isFinite(Number(phase)) ? Number(phase) : 0;
    return -22.5 * (1 + Math.sin((time / 1.2 + phaseTurns) * Math.PI * 2));
  }
  function rollercoasterSpeedMultiplier(elapsed, phase = 0) {
    return 1 + (-rollercoasterOffset(elapsed, phase) / 45) * 0.6;
  }
  function pisaAngle(elapsed, remaining, direction = 1, reducedMotion = false) {
    if (reducedMotion) return 0;
    const time = Number.isFinite(Number(elapsed)) ? Math.max(0, Number(elapsed)) : 0;
    const left = Number.isFinite(Number(remaining)) ? Math.max(0, Number(remaining)) : 0;
    const envelope = Math.min(1, time / 0.15, left / 0.15);
    const sway = Math.sin(time / 2.5 * Math.PI * 2) * (16 * Math.PI / 180);
    return (Number(direction) < 0 ? -1 : 1) * sway * envelope;
  }
  // Camera-only tremor: deterministic across clients, with soft starts/stops.
  // Never feed this offset into landing calculations.
  function earthquakeOffset(elapsed, remaining, reducedMotion = false) {
    const time = Number.isFinite(Number(elapsed)) ? Math.max(0, Number(elapsed)) : 0;
    const left = Number.isFinite(Number(remaining)) ? Math.max(0, Number(remaining)) : 0;
    const envelope = reducedMotion ? 0 : Math.min(1, time / 0.2, left / 0.2);
    if (envelope === 0) return { x: 0, y: 0 };
    return {
      x: envelope * (Math.sin(time * 43) * 5 + Math.sin(time * 71) * 3),
      y: envelope * (Math.sin(time * 53) * 2 + Math.sin(time * 89) * 1)
    };
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
  // One Landing: \`left\` is where the caller lets the Mover come down (the server's lag-compensated
  // position; solo passes the Mover's own). Returns that position after the Calipers rails, the Mover
  // as it lands (kept in the world or wrapped, then the Portal's best copy), and the placement outcome.
  function resolveLanding(below, moving, { left = moving.left, speed, effects = {}, level, color, placer }) {
    let railed = left;
    if (effects.calipers) {
      const bounds = caliperBounds(below, moving);
      railed = Math.max(bounds.minLeft, Math.min(bounds.maxLeft, railed));
    }
    const released = { ...moving, left: railed };
    const width = Number(moving.width);
    let landed = null;
    if (Number.isFinite(width) && width > 0) {
      const rawLeft = Number(railed);
      landed = moving.portalWrap
        ? { ...released, left: ((rawLeft % WIDTH) + WIDTH) % WIDTH }
        : { ...released, left: Math.max(0, Math.min(Math.max(0, WIDTH - width), rawLeft)) };
    }
    if (effects.portal) landed = portalLandingMover(below, landed || released);
    const outcome = placeDrop(below, landed || released, {
      level, color, placer,
      perfectWindow: perfectWindowForEffect(speed, effects.superglue ? 'superglue' : ''),
      crumble: Boolean(effects.crumble)
    });
    return { left: railed, landed, outcome };
  }
  // A new Mover over the top of \`stack\`, already carrying the Effects in force (portal wrap, accordion, Decoy).
  function spawnMover(stack, { fromLeft, color, effects = {}, reduced = false }) {
    const below = stack[stack.length - 1];
    const width = Math.max(MIN_WIDTH, below.right - below.left);
    const level = stack.length;
    let moving = {
      left: fromLeft ? 0 : WIDTH - width, width, direction: fromLeft ? 1 : -1,
      level, fromLeft: Boolean(fromLeft), color, portalWrap: Boolean(effects.portal),
      rollerPhase: ((level * 0.38196601125) % 1)
    };
    if (effects.accordion) {
      moving.accordion = true;
      if (reduced) moving.accordionReduced = true;
      else {
        const elapsed = Math.max(0, Number(effects.accordion.elapsed) || 0);
        moving.accordionPhase = accordionPhaseForWidth(width, width) - elapsed / 0.8;
        moving = resizeMover(moving, accordionWidth(elapsed, width, moving.accordionPhase), width);
      }
    }
    if (effects.double) moving.decoy = createShellDecoy(moving);
    return moving;
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

  // Effect lifecycle: one activation of a sabotage against a target. Effects are plain records
  // with absolute millisecond times; callers pass \`now\`, a random function, and a policy, and
  // adopt the returned list. \`ended\` lists the Effects an operation removed.
  const EFFECT_SECONDS = 5;
  const DROP_EFFECT_SECONDS = 8;
  const EFFECT_DROP_BUDGET = 3;
  // Effects without \`expiresAt\` have no timed expiry: until-drop Effects end on a landing, and
  // Dev sandbox Effects last until the sandbox resets.
  const EFFECT_POLICIES = Object.freeze({
    teamwork: Object.freeze({ untilDrop: true, replaceAll: true }),
    competitive: Object.freeze({ untilDrop: false, replaceAll: false }),
    solo: Object.freeze({ untilDrop: false, replaceAll: true }),
    dev: Object.freeze({ untilDrop: false, replaceAll: true, timed: false, duration: 3600, fixedDirection: 1 })
  });

  function effectApplies(effect, playerId = null) {
    return effect.targetPlayerId == null || effect.targetPlayerId === playerId;
  }
  function effectLive(effect, now) {
    return !Number.isFinite(effect.expiresAt) || effect.expiresAt > now;
  }
  function activateEffect(effects, id, { targetPlayerId = null, now, random, policy }) {
    if (!SABOTAGE_IDS.includes(id)) return { effects, effect: null, ended: [] };
    const dropCounted = DROP_COUNTED_IDS.includes(id);
    const duration = policy.duration || (dropCounted ? DROP_EFFECT_SECONDS : EFFECT_SECONDS);
    const replaced = item => policy.replaceAll || item.targetPlayerId == null || targetPlayerId == null || item.targetPlayerId === targetPlayerId;
    const effect = {
      id, targetPlayerId, startedAt: now, duration,
      ...(policy.untilDrop ? { untilDrop: true } : policy.timed === false ? {} : { expiresAt: now + duration * 1000 })
    };
    const direction = () => policy.fixedDirection || (random() < 0.5 ? -1 : 1);
    if (dropCounted) effect.dropsRemaining = EFFECT_DROP_BUDGET;
    if (id === 'pisa') effect.tiltDirection = direction();
    if (id === 'spotlight') effect.spotlightSide = direction();
    return { effects: [...effects.filter(item => !replaced(item)), effect], effect, ended: effects.filter(replaced) };
  }
  function effectFor(effects, id, playerId = null, now) {
    return effects.find(effect => effect.id === id && (effect.startedAt || 0) <= now && effectLive(effect, now) && effectApplies(effect, playerId)) || null;
  }
  function effectElapsed(effect, now) {
    return effect ? Math.max(0, (now - effect.startedAt) / 1000) : 0;
  }
  // A landing by \`playerId\` spends one drop from each applicable drop-counted Effect that is still
  // live. Under an until-drop policy, every other applicable Effect ends with the landing.
  function landEffects(effects, playerId, now, policy) {
    const retained = [];
    const ended = [];
    for (const effect of effects) {
      const untilDrop = Boolean(policy.untilDrop && effect.untilDrop);
      const spendsDrop = DROP_COUNTED_IDS.includes(effect.id) && (untilDrop || effect.expiresAt > now);
      if (!effectApplies(effect, playerId) || !(untilDrop || spendsDrop)) {
        retained.push(effect);
        continue;
      }
      const dropsRemaining = spendsDrop ? Math.max(0, (Number.isInteger(effect.dropsRemaining) ? effect.dropsRemaining : 1) - 1) : 0;
      if (dropsRemaining > 0) retained.push({ ...effect, dropsRemaining });
      else ended.push(effect);
    }
    return { effects: retained, ended };
  }
  function expireEffects(effects, now) {
    return { effects: effects.filter(effect => effectLive(effect, now)), ended: effects.filter(effect => !effectLive(effect, now)) };
  }
  function shiftEffects(effects, ms) {
    return { effects: effects.map(effect => Number.isFinite(effect.expiresAt) ? { ...effect, expiresAt: effect.expiresAt + ms } : effect), ended: [] };
  }
  // Reverses effectsToWire on a receiver's clock: \`elapsed\`/\`remaining\` seconds become timestamps relative to \`now\`.
  function effectsFromWire(wire, now) {
    return (Array.isArray(wire) ? wire : []).map(item => {
      const { elapsed, remaining, ...effect } = item;
      effect.startedAt = now - Math.max(0, Number(elapsed) || 0) * 1000;
      if (!effect.untilDrop) effect.expiresAt = now + Math.max(0, Number(remaining) || 0) * 1000;
      return effect;
    });
  }
  function effectsToWire(effects, now) {
    return effects.map(effect => ({
      id: effect.id, targetPlayerId: effect.targetPlayerId, duration: effect.duration,
      elapsed: effectElapsed(effect, now),
      // Untimed Effects report their nominal duration only to keep visual envelopes open; \`untilDrop\` marks them as non-countdown.
      remaining: Number.isFinite(effect.expiresAt) ? Math.max(0, (effect.expiresAt - now) / 1000) : Math.max(0, effect.duration),
      ...(effect.untilDrop ? { untilDrop: true } : {}),
      ...(Number.isInteger(effect.dropsRemaining) ? { dropsRemaining: effect.dropsRemaining } : {}),
      ...(Number.isFinite(effect.tiltDirection) ? { tiltDirection: effect.tiltDirection } : {}),
      ...(Number.isFinite(effect.spotlightSide) ? { spotlightSide: effect.spotlightSide } : {})
    }));
  }

  // Policies preserve existing execution semantics, not runtime detection. The browser
  // finishes expired effects before stepping; authoritative simulation reconciles them here.
  const MOVER_POLICIES = Object.freeze({
    authoritative: Object.freeze({ clampSamples: true, clampDrunk: true, replaceMoving: true, reconcileInactive: true, decoyWrap: false, writeVelocity: false, seedHoldFirst: true }),
    local: Object.freeze({ clampSamples: false, clampDrunk: false, replaceMoving: false, reconcileInactive: false, decoyWrap: true, writeVelocity: true, seedHoldFirst: false })
  });

  function moverBehaviorSpeed(actor, height, effects, reduced, policy) {
    const base = speedForHeight(height);
    if (effects.turbo) return base * 1.7;
    if (effects.rollercoaster && !reduced) return base * rollercoasterSpeedMultiplier(effects.rollercoaster.elapsed, actor.moving && actor.moving.rollerPhase);
    if (effects.slowmo) return base * slowToDartMultiplier(effects.slowmo.elapsed);
    if (effects.drunk) return base * (policy.clampDrunk ? Math.max(.25, Math.min(1.9, Number(actor.drunkMultiplier) || 1)) : actor.drunkMultiplier);
    return base;
  }

  // Applies the Mover consequences of an Effect starting. Under reconcileInactive, accordion
  // geometry is left to the next preparation step.
  function beginMoverBehavior(actor, below, id, { random, policy }) {
    if (!actor) return;
    if (id === 'drunk') {
      const sample = () => policy.clampSamples ? Math.max(0, Math.min(.999999999, Number(random()) || 0)) : random();
      actor.drunkClock = 0;
      actor.drunkMode = random() < .5 ? 'stumble' : 'lurch';
      actor.drunkFrom = 1;
      actor.drunkMultiplier = 1;
      const seedHold = () => { actor.drunkHold = .55 + sample() * (policy.clampSamples ? .15 : .70 - .55); };
      if (policy.seedHoldFirst) seedHold();
      const min = actor.drunkMode === 'lurch' ? 1.55 : .25;
      const max = actor.drunkMode === 'lurch' ? 1.9 : .45;
      actor.drunkTarget = min + sample() * (max - min);
      if (!policy.seedHoldFirst) seedHold();
    }
    if (!actor.moving) return;
    if (id === 'portal') actor.moving.portalWrap = true;
    else if (id === 'double') actor.moving.decoy = createShellDecoy(actor.moving);
    else if (id === 'accordion' && !policy.reconcileInactive && below) {
      actor.moving.accordion = true;
      actor.moving.accordionReduced = false;
      actor.moving.accordionPhase = accordionPhaseForWidth(actor.moving.width, below.right - below.left);
    }
  }

  // The Mover's speed at the moment of a Landing: its composed speed, times the Magnet's pull.
  function landingSpeed(actor, below, height, effects, reduced, policy) {
    const speed = moverBehaviorSpeed(actor, height, effects, reduced, policy);
    const moving = actor && actor.moving;
    if (!moving || !below || !effects.magnet) return speed;
    return speed * gravitySlingshotMultiplier((below.left + below.right) / 2 - (moving.left + moving.width / 2));
  }

  function finishMoverBehavior(actor, below, id, policy) {
    if (!actor || !actor.moving) return;
    if (id === 'accordion') {
      const width = below ? below.right - below.left : actor.moving.width;
      const restored = resizeMover(actor.moving, width, width);
      if (policy.replaceMoving) actor.moving = restored;
      else if (restored) Object.assign(actor.moving, restored);
      delete actor.moving.accordion;
      delete actor.moving.accordionReduced;
      delete actor.moving.accordionPhase;
    } else if (id === 'portal') {
      actor.moving.portalWrap = false;
      const maxLeft = Math.max(0, WIDTH - actor.moving.width);
      if (actor.moving.left > maxLeft) { actor.moving.left = maxLeft; actor.moving.direction = -1; }
    } else if (id === 'double') delete actor.moving.decoy;
  }

  // Mutates the supplied actor, preserving mover identity under the local policy.
  // Effects are already resolved for this actor and contain elapsed seconds. No
  // clocks, effect expiry, random defaults, turn rules, or transport live here.
  // Prediction prepares geometry even when movement is ineligible, then advances
  // later without preparing twice. Its drunk state is supplied by the server.
  function stepMoverBehavior(actor, below, height, { dt, effects, reduced, random, policy,
    prepare = true, advanceDrunk = true, advance = true }) {
    if (!actor) return false;
    if (advanceDrunk && effects.drunk) {
      actor.drunkClock += dt;
      while (actor.drunkClock >= (Number(actor.drunkHold) || .625)) {
        actor.drunkClock -= Number(actor.drunkHold) || .625;
        actor.drunkFrom = policy.clampDrunk ? Number(actor.drunkMultiplier) || 1 : actor.drunkMultiplier;
        actor.drunkMode = actor.drunkMode === 'lurch' ? 'stumble' : 'lurch';
        const sample = () => policy.clampSamples ? Math.max(0, Math.min(.999999999, Number(random()) || 0)) : random();
        const min = actor.drunkMode === 'lurch' ? 1.55 : .25;
        const max = actor.drunkMode === 'lurch' ? 1.9 : .45;
        actor.drunkTarget = min + sample() * (max - min);
        actor.drunkHold = .55 + sample() * (policy.clampSamples ? .15 : .70 - .55);
      }
      actor.drunkMultiplier += (actor.drunkTarget - actor.drunkMultiplier) * (1 - Math.exp(-dt / .11));
      actor.drunkMultiplier = Math.max(.25, Math.min(1.9, actor.drunkMultiplier));
    }
    if (!actor.moving || !below) return false;
    const resize = width => {
      const resized = resizeMover(actor.moving, width, below.right - below.left);
      if (policy.replaceMoving) actor.moving = resized;
      else if (resized) Object.assign(actor.moving, resized);
    };
    const portal = Boolean(effects.portal);
    if (prepare) {
      const width = below.right - below.left;
      const accordion = effects.accordion;
      if (accordion) {
        const elapsed = accordion.elapsed;
        if ((!policy.reconcileInactive || !reduced) && (!actor.moving.accordion || (!reduced && actor.moving.accordionReduced))) {
          actor.moving.accordion = true;
          actor.moving.accordionReduced = false;
          actor.moving.accordionPhase = accordionPhaseForWidth(actor.moving.width, width) - elapsed / .8;
        }
        if (reduced) {
          actor.moving.accordion = true;
          actor.moving.accordionReduced = true;
          resize(width);
        } else resize(accordionWidth(elapsed, width, actor.moving.accordionPhase || 0));
      } else if (policy.reconcileInactive && actor.moving.accordion) {
        finishMoverBehavior(actor, below, 'accordion', policy);
      }
      if (policy.reconcileInactive) {
        if (portal) actor.moving.portalWrap = true;
        else if (actor.moving.portalWrap) finishMoverBehavior(actor, below, 'portal', policy);
      }
    }
    if (!advance) return true;
    const speed = moverBehaviorSpeed(actor, height, effects, reduced, policy);
    const boundsFor = moving => effects.calipers ? caliperBounds(below, moving) : null;
    const magnetTarget = effects.magnet ? (below.left + below.right) / 2 : null;
    const next = advanceMover(actor.moving, dt, speed, magnetTarget, { wrap: portal, bounds: boundsFor(actor.moving) });
    if (next) { actor.moving.left = next.left; actor.moving.direction = next.direction; }
    if (effects.double) {
      if (!actor.moving.decoy) actor.moving.decoy = createShellDecoy(actor.moving);
      const decoyNext = advanceMover(actor.moving.decoy, dt, speed, null, { wrap: policy.decoyWrap && portal, bounds: boundsFor(actor.moving.decoy) });
      if (decoyNext) { actor.moving.decoy.left = decoyNext.left; actor.moving.decoy.direction = decoyNext.direction; }
    } else if (actor.moving.decoy) delete actor.moving.decoy;
    if (policy.writeVelocity) actor.moving.vx = speed;
    return true;
  }

  return Object.freeze({
    MOVER_POLICIES, moverBehaviorSpeed, landingSpeed, stepMoverBehavior, beginMoverBehavior, finishMoverBehavior,
    EFFECT_SECONDS, DROP_EFFECT_SECONDS, EFFECT_DROP_BUDGET, EFFECT_POLICIES,
    activateEffect, effectApplies, effectFor, effectElapsed, landEffects, expireEffects, shiftEffects, effectsToWire, effectsFromWire,
    WIDTH, HEIGHT, BLOCK_H, BASELINE, MIN_WIDTH, PERFECT_WINDOW,
    SABOTAGE_IDS, SABOTAGE_CATEGORIES, SABOTAGE_CATEGORY_BY_ID,
    HARSH_SABOTAGE_IDS, SABOTAGE_MIN_HEIGHT, DROP_COUNTED_IDS, REDUCED_MOTION_EXCLUDED_IDS, REDUCED_MOTION_SAFE_IDS, PALETTE,
    sabotageAvailableAtHeight, speedForHeight, perfectWindowForSpeed, perfectWindowForEffect, gravitySlingshotMultiplier, advanceMover,
    resizeMover, accordionWidth, accordionPhaseForWidth, slowToDartMultiplier, slowToDartWindup, peekabooOpacity, rollercoasterOffset, rollercoasterSpeedMultiplier, pisaAngle, earthquakeOffset, createShellDecoy, caliperBounds, portalLandingMover,
    makeBase, placeDrop, resolveLanding, spawnMover, pickOptions, voteIntervalForHeight,
    recordVote, countVotes, chooseWinner
  });
});
`;
const coreModule = { exports: {} };
vm.runInNewContext(LEGACY_CORE_SOURCE, { module: coreModule, globalThis: {}, window: undefined, Math, Number, Object, Array, Map, Set, String, Boolean, JSON, Error });
const LegacyCore = coreModule.exports;

const pageModule = {};
vm.runInNewContext(`const SABOTAGES = Object.freeze([
  { id: 'turbo', name: 'Turbo Mode', category: 'kinetic', caption: 'The next lap is arriving a little faster.', effect: 'Moving-block speed increases to ×1.7 for 5 seconds.' },
  { id: 'drunk', name: 'Drunk Block', category: 'kinetic', caption: 'That block has found a very wobbly rhythm.', effect: 'Alternates between ×0.25–0.45 stumbles and ×1.55–1.9 lurches, holding each beat for 0.55–0.70 seconds.' },
  { id: 'slowmo', name: 'Slow-to-Dart', category: 'kinetic', caption: 'Easy… easy… now!', effect: 'Creeps at ×0.3 for 0.78 seconds, then lunges at ×2.5 on a 1.4-second cycle.' },
  { id: 'magnet', name: 'Gravity Slingshot', category: 'kinetic', caption: 'The stack centre is a launch point.', effect: 'The mover whips up to ×2.1 speed over the tower centre and returns to normal near the walls.' },
  { id: 'portal', name: 'Portal Walls', category: 'trajectory', caption: 'The edges are not the end of the road.', effect: 'For the next 3 drops (up to 8 seconds), the mover wraps through open side portals instead of bouncing.' },
  { id: 'rollercoaster', name: 'The Rollercoaster', category: 'trajectory', caption: 'Mind the air gap, darling.', effect: 'The mover bobs up to 45 px above the landing line and speeds up to ×1.6 as it rises; no hidden sideways drift.' },
  { id: 'earthquake', name: 'Earthquake', category: 'trajectory', caption: 'The foundations have a few objections.', effect: 'The playfield trembles by up to 8 px sideways and 3 px vertically for 5 seconds; block physics stay unchanged.' },
  { id: 'pisa', name: 'The Pisa Tilt', category: 'trajectory', caption: 'Architecture is subjective, really.', effect: 'The view eases into a gentle sway of up to 16° for 5 seconds.' },
  { id: 'spotlight', name: 'Spotlight', category: 'optical', caption: 'One corner of the stage is under observation.', effect: 'Blacks out the whole field, leaving only a narrow, steady beam on one edge of the tower.' },
  { id: 'peekaboo', name: 'Peekaboo', category: 'optical', caption: 'Now you see it… now you don’t.', effect: 'The mover stays visible for 0.31 seconds, fades over 40 ms, then stays hidden for 0.35 seconds.' },
  { id: 'zoom', name: 'Macro Zoom', category: 'optical', caption: 'Extreme close-up. Don’t blink.', effect: 'A 1.85× view locks onto the top platform; wall rebounds can leave the frame.' },
  { id: 'double', name: 'The Shell Game', category: 'optical', caption: 'Follow the cracked block.', effect: 'A decoy travels in the opposite direction; a small crack marks the real mover.' },
  { id: 'accordion', name: 'The Accordion', category: 'geometry', caption: 'Wide, narrow, wide again.', effect: 'Breathes between 45% and 100% of the supporting tower width on a 0.8-second cycle.' },
  { id: 'crumble', name: 'Crumble', category: 'geometry', caption: 'Perfects keep the stone intact.', effect: 'For the next 3 drops (up to 8 seconds), perfects do not crumble; other landings lose up to 5 px from each edge.' },
  { id: 'superglue', name: 'Chat Bribe: Superglue', category: 'geometry', caption: 'Chat took pity… or is setting up a bigger fall.', effect: 'The next 3 drops (up to 8 seconds) get a 14 px perfect window.' },
  { id: 'calipers', name: 'Drafting Calipers', category: 'geometry', caption: 'The drafting arms have closed in.', effect: 'For the next 3 drops (up to 8 seconds), rebounds are limited to 38 px beyond the tower edges.' }
]);
const SABOTAGE_BY_ID = new Map(SABOTAGES.map(item => [item.id, item]));
// Short, mode-neutral mechanics fit the vote card; exact durations remain in the guide.
const VOTE_EFFECT_HINTS = Object.freeze({
  turbo: 'The mover speeds up.', drunk: 'The mover alternates between stumbles and lurches.',
  slowmo: 'The mover creeps, then darts.', magnet: 'The mover accelerates over the tower centre.',
  portal: 'The mover wraps through the side walls.', rollercoaster: 'The mover bobs and speeds up as it rises.',
  earthquake: 'The view shakes; block physics stay the same.', pisa: 'The view tilts and sways.',
  spotlight: 'Most of the field is hidden outside a narrow beam.', peekaboo: 'The mover repeatedly disappears.',
  zoom: 'The view zooms in on the tower.', double: 'A decoy moves opposite the real block.',
  accordion: 'The mover repeatedly changes width.', crumble: 'Imperfect landings lose extra width.',
  superglue: 'The perfect landing window becomes wider.', calipers: 'Helpful: rebounds stay closer to the tower.'
});
const STAGE_VOTE_SHORT_NAMES = Object.freeze({
  turbo: 'Turbo', drunk: 'Drunk', slowmo: 'Slow', magnet: 'Gravity', portal: 'Portal', rollercoaster: 'Roller',
  earthquake: 'Quake', pisa: 'Pisa', spotlight: 'Spotlight', peekaboo: 'Peekaboo', zoom: 'Zoom', double: 'Shell',
  accordion: 'Accordion', crumble: 'Crumble', superglue: 'Glue', calipers: 'Calipers'
});
function announceVoteWinner(id) {
  const sabotage = effectById(id);
  if (!sabotage) return;
  const teamwork = game && game.multiplayer && game.mode === 'teamwork';
  const effect = teamwork ? sabotage.effect.replace(/ \\(up to 8 seconds\\)/g, '').replace(/ for 5 seconds/g, '') : sabotage.effect;
  const duration = teamwork ? (id === 'crumble' ? ' In Teamwork, the next three team landings, with no time limit.' : Core.DROP_COUNTED_IDS.includes(id) ? ' In Teamwork, the affected player’s next three landings, with no time limit.' : ' In Teamwork, until the affected player lands.') : '';
  announceGame(\`Vote winner: \${sabotage.name}. \${effect}\${duration}\`);
}
let game = null; let spoken = [];
function effectById(id) { return id ? SABOTAGES.find(item => item.id === id) || null : null; }
function announceGame(text) { spoken.push(text); }
exportsTo.SABOTAGES = SABOTAGES; exportsTo.VOTE_EFFECT_HINTS = VOTE_EFFECT_HINTS; exportsTo.STAGE_VOTE_SHORT_NAMES = STAGE_VOTE_SHORT_NAMES;
exportsTo.announceVoteWinner = (id, state) => { game = state.game; spoken = []; announceVoteWinner(id); return spoken; };`, {
  exportsTo: pageModule, Core: LegacyCore, Map, Object
});
const LegacyPage = Object.freeze({
  SABOTAGES: pageModule.SABOTAGES,
  VOTE_EFFECT_HINTS: pageModule.VOTE_EFFECT_HINTS,
  STAGE_VOTE_SHORT_NAMES: pageModule.STAGE_VOTE_SHORT_NAMES,
  announceVoteWinner: pageModule.announceVoteWinner
});

const LegacyServer = Object.freeze({
  TEAM_GLOBAL_EFFECTS: Object.freeze(['crumble']),
  MOVER_EFFECT_IDS: Object.freeze(['turbo', 'rollercoaster', 'slowmo', 'drunk', 'accordion', 'portal', 'calipers', 'magnet', 'double', 'superglue', 'crumble'])
});

module.exports = { LegacyCore, LegacyPage, LegacyServer };
