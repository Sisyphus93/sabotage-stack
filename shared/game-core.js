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
  // The Sabotage catalogue: one row per Sabotage, in vote-guide order. Rule flags, the tuning numbers its
  // behaviour reads, and its wording all live in the row; the lists below are views of it. `rules` builds
  // the guide text from the row's tuning and the lifecycle durations (see sabotageRules).
  const EFFECT_SECONDS = 5;
  const DROP_EFFECT_SECONDS = 8;
  const EFFECT_DROP_BUDGET = 3;
  const sabotage = row => Object.freeze({
    harsh: true, dropCounted: false, minHeight: 0, reducedMotion: 'normal', teamGlobal: false,
    ...row, tuning: Object.freeze(row.tuning || {})
  });
  const SABOTAGE_CATALOGUE = Object.freeze([
    sabotage({
      id: 'turbo', category: 'kinetic', name: 'Turbo Mode', short: 'Turbo',
      caption: 'The next lap is arriving a little faster.', hint: 'The mover speeds up.',
      tuning: { multiplier: 1.7 },
      rules: (t, d) => `Moving-block speed increases to ×${t.multiplier}${d.forSeconds}.`
    }),
    sabotage({
      id: 'drunk', category: 'kinetic', name: 'Drunk Block', short: 'Drunk',
      caption: 'That block has found a very wobbly rhythm.', hint: 'The mover alternates between stumbles and lurches.',
      tuning: { stumble: Object.freeze([.25, .45]), lurch: Object.freeze([1.55, 1.9]), hold: Object.freeze([.55, .70]) },
      rules: t => `Alternates between ×${t.stumble[0]}–${t.stumble[1]} stumbles and ×${t.lurch[0]}–${t.lurch[1]} lurches, holding each beat for ${t.hold[0].toFixed(2)}–${t.hold[1].toFixed(2)} seconds.`
    }),
    sabotage({
      id: 'slowmo', category: 'kinetic', name: 'Slow-to-Dart', short: 'Slow',
      caption: 'Easy… easy… now!', hint: 'The mover creeps, then darts.',
      tuning: { creep: 0.3, dart: 2.5, cycle: 1.4, creepUntil: 0.78, ramp: 0.12, dartUntil: 1.28 },
      rules: t => `Creeps at ×${t.creep} for ${t.creepUntil} seconds, then lunges at ×${t.dart} on a ${t.cycle}-second cycle.`
    }),
    sabotage({
      id: 'magnet', category: 'kinetic', name: 'Gravity Slingshot', short: 'Gravity',
      caption: 'The stack centre is a launch point.', hint: 'The mover accelerates over the tower centre.',
      tuning: { pull: 1.1, reach: 45 },
      rules: t => `The mover whips up to ×${1 + t.pull} speed over the tower centre and returns to normal near the walls.`
    }),
    sabotage({
      id: 'portal', category: 'trajectory', name: 'Portal Walls', short: 'Portal', dropCounted: true,
      caption: 'The edges are not the end of the road.', hint: 'The mover wraps through the side walls.',
      rules: (t, d) => `For the ${d.nextDrops}, the mover wraps through open side portals instead of bouncing.`
    }),
    sabotage({
      id: 'rollercoaster', category: 'trajectory', name: 'The Rollercoaster', short: 'Roller', reducedMotion: 'excluded',
      caption: 'Mind the air gap, darling.', hint: 'The mover bobs and speeds up as it rises.',
      tuning: { rise: 45, boost: 0.6, cycle: 1.2 },
      rules: t => `The mover bobs up to ${t.rise} px above the landing line and speeds up to ×${1 + t.boost} as it rises; no hidden sideways drift.`
    }),
    sabotage({
      id: 'pisa', category: 'trajectory', name: 'The Pisa Tilt', short: 'Pisa', reducedMotion: 'excluded',
      caption: 'Architecture is subjective, really.', hint: 'The view tilts and sways.',
      tuning: { degrees: 16, period: 2.5 },
      rules: (t, d) => `The view eases into a gentle sway of up to ${t.degrees}°${d.forSeconds}.`
    }),
    sabotage({
      id: 'earthquake', category: 'trajectory', name: 'Earthquake', short: 'Quake', reducedMotion: 'excluded',
      caption: 'The foundations have a few objections.', hint: 'The view shakes; block physics stay the same.',
      tuning: { sideways: Object.freeze([5, 3]), vertical: Object.freeze([2, 1]) },
      rules: (t, d) => `The playfield trembles by up to ${t.sideways[0] + t.sideways[1]} px sideways and ${t.vertical[0] + t.vertical[1]} px vertically${d.forSeconds}; block physics stay unchanged.`
    }),
    sabotage({
      id: 'spotlight', category: 'optical', name: 'Spotlight', short: 'Spotlight',
      caption: 'One corner of the stage is under observation.', hint: 'Most of the field is hidden outside a narrow beam.',
      rules: () => 'Blacks out the whole field, leaving only a narrow, steady beam on one edge of the tower.'
    }),
    sabotage({
      id: 'peekaboo', category: 'optical', name: 'Peekaboo', short: 'Peekaboo', reducedMotion: 'excluded',
      caption: 'Now you see it… now you don’t.', hint: 'The mover repeatedly disappears.',
      tuning: { cycle: 0.7, visible: 0.31, fade: 0.04 },
      rules: t => `The mover stays visible for ${t.visible} seconds, fades over ${Math.round(t.fade * 1000)} ms, then stays hidden for ${Number((t.cycle - t.visible - t.fade).toFixed(3))} seconds.`
    }),
    sabotage({
      id: 'zoom', category: 'optical', name: 'Macro Zoom', short: 'Zoom', minHeight: 12, reducedMotion: 'safe',
      caption: 'Extreme close-up. Don’t blink.', hint: 'The view zooms in on the tower.',
      tuning: { scale: 1.85 },
      rules: t => `A ${t.scale}× view locks onto the top platform; wall rebounds can leave the frame.`
    }),
    sabotage({
      id: 'double', category: 'optical', name: 'The Shell Game', short: 'Shell',
      caption: 'Follow the cracked block.', hint: 'A decoy moves opposite the real block.',
      rules: () => 'A decoy travels in the opposite direction; a small crack marks the real mover.'
    }),
    sabotage({
      id: 'accordion', category: 'geometry', name: 'The Accordion', short: 'Accordion', reducedMotion: 'excluded',
      caption: 'Wide, narrow, wide again.', hint: 'The mover repeatedly changes width.',
      tuning: { narrowest: 0.45, cycle: 0.8 },
      rules: t => `Breathes between ${Math.round(t.narrowest * 100)}% and 100% of the supporting tower width on a ${t.cycle}-second cycle.`
    }),
    sabotage({
      id: 'crumble', category: 'geometry', name: 'Crumble', short: 'Crumble', dropCounted: true, teamGlobal: true,
      caption: 'Perfects keep the stone intact.', hint: 'Imperfect landings lose extra width.',
      tuning: { perSide: 5 },
      rules: (t, d) => `For the ${d.nextDrops}, perfects do not crumble; other landings lose up to ${t.perSide} px from each edge.`
    }),
    sabotage({
      id: 'superglue', category: 'geometry', name: 'Chat Bribe: Superglue', short: 'Glue', harsh: false, dropCounted: true, reducedMotion: 'safe',
      caption: 'Chat took pity… or is setting up a bigger fall.', hint: 'The perfect landing window becomes wider.',
      tuning: { window: 14 },
      rules: (t, d) => `The ${d.nextDrops} get a ${t.window} px perfect window.`
    }),
    sabotage({
      id: 'calipers', category: 'geometry', name: 'Drafting Calipers', short: 'Calipers', harsh: false, dropCounted: true, reducedMotion: 'safe',
      caption: 'The drafting arms have closed in.', hint: 'Helpful: rebounds stay closer to the tower.',
      tuning: { margin: 38 },
      rules: (t, d) => `For the ${d.nextDrops}, rebounds are limited to ${t.margin} px beyond the tower edges.`
    })
  ]);
  const SABOTAGE_BY_ID = Object.freeze(Object.fromEntries(SABOTAGE_CATALOGUE.map(row => [row.id, row])));
  const SABOTAGE_TUNING = Object.freeze(Object.fromEntries(SABOTAGE_CATALOGUE.map(row => [row.id, row.tuning])));
  const T = SABOTAGE_TUNING;
  const idsWhere = test => Object.freeze(SABOTAGE_CATALOGUE.filter(test).map(row => row.id));
  const SABOTAGE_CATEGORIES = Object.freeze(Object.fromEntries(
    [...new Set(SABOTAGE_CATALOGUE.map(row => row.category))].map(category => [category, idsWhere(row => row.category === category)])
  ));
  const SABOTAGE_CATEGORY_BY_ID = Object.freeze(Object.fromEntries(SABOTAGE_CATALOGUE.map(row => [row.id, row.category])));
  const SABOTAGE_IDS = idsWhere(() => true);
  const HARSH_SABOTAGE_IDS = idsWhere(row => row.harsh);
  // Effects held back until the tower is tall enough for them to matter (tune in play).
  const SABOTAGE_MIN_HEIGHT = Object.freeze(Object.fromEntries(SABOTAGE_CATALOGUE.filter(row => row.minHeight > 0).map(row => [row.id, row.minHeight])));
  const DROP_COUNTED_IDS = idsWhere(row => row.dropCounted);
  const REDUCED_MOTION_EXCLUDED_IDS = idsWhere(row => row.reducedMotion === 'excluded');
  const REDUCED_MOTION_SAFE_IDS = idsWhere(row => row.reducedMotion === 'safe');
  // In Teamwork these strike the whole team rather than the player whose turn it is.
  const TEAM_GLOBAL_IDS = idsWhere(row => row.teamGlobal);
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  function countWord(count) {
    return NUMBER_WORDS[count] || String(count);
  }
  // The guide text for a Sabotage. Under `untilDrop` (Teamwork) Effects have no time limit, so the timings
  // are left out and a closing sentence says how long the Effect lasts instead.
  function sabotageRules(id, { untilDrop = false } = {}) {
    const row = SABOTAGE_BY_ID[id];
    if (!row) return '';
    const drops = `next ${EFFECT_DROP_BUDGET} drops`;
    const text = row.rules(row.tuning, {
      forSeconds: untilDrop ? '' : ` for ${EFFECT_SECONDS} seconds`,
      nextDrops: untilDrop ? drops : `${drops} (up to ${DROP_EFFECT_SECONDS} seconds)`
    });
    if (!untilDrop) return text;
    const landings = `next ${countWord(EFFECT_DROP_BUDGET)}`;
    if (row.teamGlobal) return `${text} In Teamwork, the ${landings} team landings, with no time limit.`;
    if (row.dropCounted) return `${text} In Teamwork, the affected player’s ${landings} landings, with no time limit.`;
    return `${text} In Teamwork, until the affected player lands.`;
  }
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
    return effectId === 'superglue' ? T.superglue.window : perfectWindowForSpeed(speed);
  }
  function gravitySlingshotMultiplier(offset) {
    const distance = Number.isFinite(Number(offset)) ? Number(offset) : 0;
    return 1 + T.magnet.pull * Math.exp(-Math.pow(distance / T.magnet.reach, 2));
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
    const floor = Math.min(ceiling, Math.max(MIN_WIDTH, ceiling * T.accordion.narrowest));
    const phaseTurns = Number.isFinite(Number(phase)) ? Number(phase) : 0;
    const cycle = ((time / T.accordion.cycle + phaseTurns) % 1 + 1) % 1;
    const wave = 0.5 - 0.5 * Math.cos(cycle * Math.PI * 2);
    return floor + wave * (ceiling - floor);
  }
  function accordionPhaseForWidth(width, maxWidth) {
    const ceiling = Math.max(MIN_WIDTH, Math.min(WIDTH, Number.isFinite(Number(maxWidth)) ? Number(maxWidth) : MIN_WIDTH));
    const floor = Math.min(ceiling, Math.max(MIN_WIDTH, ceiling * T.accordion.narrowest));
    const bounded = Math.max(floor, Math.min(ceiling, Number.isFinite(Number(width)) ? Number(width) : ceiling));
    const wave = ceiling === floor ? 1 : (bounded - floor) / (ceiling - floor);
    return Math.acos(1 - 2 * wave) / (Math.PI * 2);
  }
  function slowToDartMultiplier(elapsed) {
    const time = Number.isFinite(Number(elapsed)) ? Math.max(0, Number(elapsed)) : 0;
    const { creep, dart, cycle, creepUntil, ramp, dartUntil } = T.slowmo;
    const phase = time % cycle;
    const smooth = value => value * value * (3 - 2 * value);
    if (phase < creepUntil) return creep;
    if (phase < creepUntil + ramp) return creep + (dart - creep) * smooth((phase - creepUntil) / ramp);
    if (phase < dartUntil) return dart;
    return dart - (dart - creep) * smooth((phase - dartUntil) / ramp);
  }
  function slowToDartWindup(elapsed) {
    const time = Number.isFinite(Number(elapsed)) ? Math.max(0, Number(elapsed)) : 0;
    const { cycle, creepUntil, ramp } = T.slowmo;
    const phase = time % cycle;
    if (phase < creepUntil || phase > creepUntil + ramp) return 0;
    return Math.sin(Math.PI * (phase - creepUntil) / ramp);
  }
  function peekabooOpacity(elapsed) {
    const time = Number.isFinite(Number(elapsed)) ? Math.max(0, Number(elapsed)) : 0;
    const { cycle, visible, fade } = T.peekaboo;
    const phase = time % cycle;
    if (phase < visible) return 1;
    if (phase < visible + fade) return 1 - (phase - visible) / fade;
    return 0;
  }
  function rollercoasterOffset(elapsed, phase = 0) {
    const time = Number.isFinite(Number(elapsed)) ? Math.max(0, Number(elapsed)) : 0;
    const phaseTurns = Number.isFinite(Number(phase)) ? Number(phase) : 0;
    return -(T.rollercoaster.rise / 2) * (1 + Math.sin((time / T.rollercoaster.cycle + phaseTurns) * Math.PI * 2));
  }
  function rollercoasterSpeedMultiplier(elapsed, phase = 0) {
    return 1 + (-rollercoasterOffset(elapsed, phase) / T.rollercoaster.rise) * T.rollercoaster.boost;
  }
  function pisaAngle(elapsed, remaining, direction = 1, reducedMotion = false) {
    if (reducedMotion) return 0;
    const time = Number.isFinite(Number(elapsed)) ? Math.max(0, Number(elapsed)) : 0;
    const left = Number.isFinite(Number(remaining)) ? Math.max(0, Number(remaining)) : 0;
    const envelope = Math.min(1, time / 0.15, left / 0.15);
    const sway = Math.sin(time / T.pisa.period * Math.PI * 2) * (T.pisa.degrees * Math.PI / 180);
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
      x: envelope * (Math.sin(time * 43) * T.earthquake.sideways[0] + Math.sin(time * 71) * T.earthquake.sideways[1]),
      y: envelope * (Math.sin(time * 53) * T.earthquake.vertical[0] + Math.sin(time * 89) * T.earthquake.vertical[1])
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
  function caliperBounds(below, moving, margin = T.calipers.margin) {
    if (!below || !moving || !Number.isFinite(Number(moving.width))) return { minLeft: 0, maxLeft: Math.max(0, WIDTH - (Number(moving && moving.width) || 0)) };
    const width = Math.max(MIN_WIDTH, Math.min(WIDTH, Number(moving.width)));
    const worldMax = Math.max(0, WIDTH - width);
    const inset = Math.max(0, Number.isFinite(Number(margin)) ? Number(margin) : T.calipers.margin);
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
    const crumblePerSide = options.crumble === true ? T.crumble.perSide : Math.max(0, Number(options.crumble) || 0);
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
  // One Landing: `left` is where the caller lets the Mover come down (the server's lag-compensated
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
  // A new Mover over the top of `stack`, already carrying the Effects in force (portal wrap, accordion, Decoy).
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
        moving.accordionPhase = accordionPhaseForWidth(width, width) - elapsed / T.accordion.cycle;
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
  // In solo the player's pick counts as SOLO_PICK_WEIGHT votes: extra ballots under derived voter IDs,
  // so the tally, the totals and chooseWinner all see the same weighted vote.
  const SOLO_PICK_WEIGHT = 4;
  function weightSoloPick(votes, voterId = 'you') {
    if (!(votes instanceof Map) || !votes.has(voterId)) return votes;
    const weighted = new Map(votes);
    const choice = votes.get(voterId);
    for (let weight = 2; weight <= SOLO_PICK_WEIGHT; weight += 1) weighted.set(`${voterId}-weight-${weight}`, choice);
    return weighted;
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
  // with absolute millisecond times; callers pass `now`, a random function, and a policy, and
  // adopt the returned list. `ended` lists the Effects an operation removed.
  // Effects without `expiresAt` have no timed expiry: until-drop Effects end on a landing, and
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
  // A landing by `playerId` spends one drop from each applicable drop-counted Effect that is still
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
  // Reverses effectsToWire on a receiver's clock: `elapsed`/`remaining` seconds become timestamps relative to `now`.
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
      // Untimed Effects report their nominal duration only to keep visual envelopes open; `untilDrop` marks them as non-countdown.
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
    if (effects.turbo) return base * T.turbo.multiplier;
    if (effects.rollercoaster && !reduced) return base * rollercoasterSpeedMultiplier(effects.rollercoaster.elapsed, actor.moving && actor.moving.rollerPhase);
    if (effects.slowmo) return base * slowToDartMultiplier(effects.slowmo.elapsed);
    if (effects.drunk) return base * (policy.clampDrunk ? Math.max(T.drunk.stumble[0], Math.min(T.drunk.lurch[1], Number(actor.drunkMultiplier) || 1)) : actor.drunkMultiplier);
    return base;
  }

  function drunkTarget(mode, sample) {
    const [min, max] = mode === 'lurch' ? T.drunk.lurch : T.drunk.stumble;
    return min + sample() * (max - min);
  }
  // The authoritative policy keeps its rounded hold span (.15) so server replays stay exact.
  function drunkHold(sample, policy) {
    const [min, max] = T.drunk.hold;
    return min + sample() * (policy.clampSamples ? .15 : max - min);
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
      const seedHold = () => { actor.drunkHold = drunkHold(sample, policy); };
      if (policy.seedHoldFirst) seedHold();
      actor.drunkTarget = drunkTarget(actor.drunkMode, sample);
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
        actor.drunkTarget = drunkTarget(actor.drunkMode, sample);
        actor.drunkHold = drunkHold(sample, policy);
      }
      actor.drunkMultiplier += (actor.drunkTarget - actor.drunkMultiplier) * (1 - Math.exp(-dt / .11));
      actor.drunkMultiplier = Math.max(T.drunk.stumble[0], Math.min(T.drunk.lurch[1], actor.drunkMultiplier));
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
          actor.moving.accordionPhase = accordionPhaseForWidth(actor.moving.width, width) - elapsed / T.accordion.cycle;
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
    SABOTAGE_CATALOGUE, SABOTAGE_BY_ID, SABOTAGE_TUNING, sabotageRules,
    SABOTAGE_IDS, SABOTAGE_CATEGORIES, SABOTAGE_CATEGORY_BY_ID, TEAM_GLOBAL_IDS,
    HARSH_SABOTAGE_IDS, SABOTAGE_MIN_HEIGHT, DROP_COUNTED_IDS, REDUCED_MOTION_EXCLUDED_IDS, REDUCED_MOTION_SAFE_IDS, PALETTE,
    sabotageAvailableAtHeight, speedForHeight, perfectWindowForSpeed, perfectWindowForEffect, gravitySlingshotMultiplier, advanceMover,
    resizeMover, accordionWidth, accordionPhaseForWidth, slowToDartMultiplier, slowToDartWindup, peekabooOpacity, rollercoasterOffset, rollercoasterSpeedMultiplier, pisaAngle, earthquakeOffset, createShellDecoy, caliperBounds, portalLandingMover,
    makeBase, placeDrop, resolveLanding, spawnMover, pickOptions, voteIntervalForHeight,
    SOLO_PICK_WEIGHT, weightSoloPick, countWord, recordVote, countVotes, chooseWinner
  });
});
