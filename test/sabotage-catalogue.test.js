'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const Core = require('../shared/game-core');
const { TEAM_GLOBAL_EFFECTS } = require('../server/round-engine');
const { LegacyCore, LegacyPage, LegacyServer } = require('./fixtures/legacy-catalogue');
const { rng } = require('./helpers/rng');
const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'sabotage-stack.html'), 'utf8');
const copy = value => JSON.parse(JSON.stringify(value));
const load = name => import(path.join(ROOT, 'client3d', name));

function pageSlice(startMarker, endMarker) {
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker, start);
  assert.ok(start >= 0 && end > start, `page markers ${startMarker} … ${endMarker}`);
  return html.slice(start, end);
}
// The page's catalogue view and its vote-winner announcement, run against the shipped core.
function pageRig() {
  const context = { window: { SabotageStackCore: Core }, game: null, spoken: [] };
  vm.runInNewContext(`${pageSlice('    const Core = window.SabotageStackCore;', '    /* SHARED_REPLICATION_START */')}
    function effectById(id) { return id ? SABOTAGE_BY_ID.get(id) || null : null; }
    function announceGame(text) { spoken.push(text); }
    ${pageSlice('    function announceVoteWinner(id) {', '    function announceEffectEnd(id) {')}
    Object.assign(globalThis, { SABOTAGES, WIDTH, HEIGHT, BLOCK_H, BASELINE, MIN_WIDTH, PERFECT_WINDOW, PALETTE, announceVoteWinner });`, context);
  return context;
}

// ---- The catalogue reproduces every list it replaced.

test('the derived rule lists match the frozen ones', () => {
  for (const key of ['SABOTAGE_IDS', 'SABOTAGE_CATEGORIES', 'SABOTAGE_CATEGORY_BY_ID', 'SABOTAGE_MIN_HEIGHT', 'EFFECT_SECONDS', 'DROP_EFFECT_SECONDS', 'EFFECT_DROP_BUDGET']) {
    assert.deepEqual(copy(Core[key]), copy(LegacyCore[key]), key);
  }
  for (const key of ['HARSH_SABOTAGE_IDS', 'DROP_COUNTED_IDS', 'REDUCED_MOTION_EXCLUDED_IDS', 'REDUCED_MOTION_SAFE_IDS']) {
    assert.deepEqual([...Core[key]].sort(), [...LegacyCore[key]].sort(), key);
  }
  assert.deepEqual([...TEAM_GLOBAL_EFFECTS].sort(), [...LegacyServer.TEAM_GLOBAL_EFFECTS].sort());
  assert.deepEqual(Core.SABOTAGE_CATALOGUE.map(row => row.id), [...Core.SABOTAGE_IDS], 'the catalogue order is the rule order');
});

test('the page view, hints and short names match the frozen page text', () => {
  const page = pageRig();
  assert.deepEqual(copy(page.SABOTAGES).map(item => item.id), [...Core.SABOTAGE_IDS]);
  const legacy = new Map(LegacyPage.SABOTAGES.map(item => [item.id, copy(item)]));
  assert.equal(page.SABOTAGES.length, legacy.size);
  for (const item of copy(page.SABOTAGES)) {
    const { hint, short, ...rest } = item;
    assert.deepEqual(rest, legacy.get(item.id), item.id);
    assert.equal(hint, LegacyPage.VOTE_EFFECT_HINTS[item.id], `${item.id} hint`);
    assert.equal(short, LegacyPage.STAGE_VOTE_SHORT_NAMES[item.id], `${item.id} short name`);
  }
  for (const key of ['WIDTH', 'HEIGHT', 'BLOCK_H', 'BASELINE', 'MIN_WIDTH', 'PERFECT_WINDOW', 'PALETTE']) {
    assert.deepEqual(copy(page[key]), copy(LegacyCore[key]), `the page reads ${key} from the core`);
  }
});

test('vote-winner announcements match the frozen page in every mode', () => {
  const page = pageRig();
  const games = [null, { multiplayer: false, mode: 'solo' }, { multiplayer: true, mode: 'competitive' }, { multiplayer: true, mode: 'teamwork' }, { multiplayer: false, mode: 'teamwork' }];
  for (const id of [...Core.SABOTAGE_IDS, 'unknown', '']) for (const game of games) {
    page.game = game; page.spoken.length = 0;
    page.announceVoteWinner(id);
    assert.deepEqual(copy(page.spoken), copy(LegacyPage.announceVoteWinner(id, { game })), `${id} in ${game && game.mode}`);
  }
  assert.ok(!/\.replace\(\/ for \d+ seconds/.test(html), 'no announcement strips timings out of the guide text');
});

test('sabotageRules derives its timings from the lifecycle durations', () => {
  const text = Core.sabotageRules('portal');
  assert.match(text, new RegExp(`next ${Core.EFFECT_DROP_BUDGET} drops \\(up to ${Core.DROP_EFFECT_SECONDS} seconds\\)`));
  assert.match(Core.sabotageRules('turbo'), new RegExp(` for ${Core.EFFECT_SECONDS} seconds\\.$`));
  assert.match(Core.sabotageRules('turbo'), new RegExp(`×${Core.SABOTAGE_TUNING.turbo.multiplier} `));
  assert.equal(Core.sabotageRules('unknown'), '');
  for (const id of Core.SABOTAGE_IDS) assert.doesNotMatch(Core.sabotageRules(id, { untilDrop: true }), /up to \d+ seconds| for \d+ seconds/, id);
});

// ---- Behaviour that now reads SABOTAGE_TUNING is unchanged, number for number.

test('the tuned helpers match the frozen core exactly', () => {
  const r = rng(61);
  const same = (actual, expected, label) => assert.deepEqual(copy(actual), copy(expected), label);
  for (let i = 0; i < 20000; i += 1) {
    const t = r() * 12; const width = 30 + r() * 330; const max = 30 + r() * 330; const phase = r() * 3 - 1;
    for (const name of ['slowToDartMultiplier', 'slowToDartWindup', 'peekabooOpacity']) assert.ok(Object.is(Core[name](t), LegacyCore[name](t)), `${name}(${t})`);
    for (const name of ['rollercoasterOffset', 'rollercoasterSpeedMultiplier']) assert.ok(Object.is(Core[name](t, phase), LegacyCore[name](t, phase)), name);
    assert.ok(Object.is(Core.accordionWidth(t, max, phase), LegacyCore.accordionWidth(t, max, phase)), 'accordionWidth');
    assert.ok(Object.is(Core.accordionPhaseForWidth(width, max), LegacyCore.accordionPhaseForWidth(width, max)), 'accordionPhaseForWidth');
    const offset = (r() - 0.5) * 400;
    assert.ok(Object.is(Core.gravitySlingshotMultiplier(offset), LegacyCore.gravitySlingshotMultiplier(offset)), 'gravitySlingshotMultiplier');
    const speed = 100 + r() * 300;
    for (const id of ['superglue', '', 'turbo']) assert.ok(Object.is(Core.perfectWindowForEffect(speed, id), LegacyCore.perfectWindowForEffect(speed, id)), 'perfectWindowForEffect');
    const remaining = r() * 5; const direction = r() < 0.5 ? -1 : 1; const reduced = r() < 0.2;
    assert.ok(Object.is(Core.pisaAngle(t, remaining, direction, reduced), LegacyCore.pisaAngle(t, remaining, direction, reduced)), 'pisaAngle');
    same(Core.earthquakeOffset(t, remaining, reduced), LegacyCore.earthquakeOffset(t, remaining, reduced), 'earthquakeOffset');
    const left = r() * 300; const below = { left, right: left + 20 + r() * 200, level: 3 };
    const moving = { left: r() * (360 - width), width, direction, level: 4, portalWrap: r() < 0.2 };
    same(Core.caliperBounds(below, moving), LegacyCore.caliperBounds(below, moving), 'caliperBounds');
    const perfectWindow = 3 + r() * 10;
    for (const crumble of [true, false, 3]) same(Core.placeDrop(below, moving, { crumble, perfectWindow }), LegacyCore.placeDrop(below, moving, { crumble, perfectWindow }), 'placeDrop');
    const stack = [Core.makeBase(), { ...below, width: below.right - below.left }];
    const effects = { accordion: r() < 0.5 ? { elapsed: t } : null, double: r() < 0.3 ? {} : null, portal: r() < 0.3 ? {} : null };
    same(Core.spawnMover(stack, { fromLeft: direction > 0, color: '#000', effects, reduced }), LegacyCore.spawnMover(stack, { fromLeft: direction > 0, color: '#000', effects, reduced }), 'spawnMover');
  }
});

test('Mover behaviour under every Sabotage matches the frozen core, step for step', () => {
  for (const policyName of Object.keys(Core.MOVER_POLICIES)) for (const id of Core.SABOTAGE_IDS) {
    const script = rng(id.length * 31 + policyName.length);
    const make = () => ({ moving: { left: 40, width: 120, direction: 1, level: 3, rollerPhase: 0.3 }, drunkClock: 0, drunkHold: 0.6, drunkMode: 'stumble', drunkFrom: 1, drunkTarget: 0.4, drunkMultiplier: 1 });
    const below = { left: 100, right: 260, level: 2 };
    const actors = [make(), make()];
    const seeds = [script(), script(), script(), script()];
    [Core, LegacyCore].forEach((core, side) => {
      let k = 0;
      core.beginMoverBehavior(actors[side], below, id, { random: () => seeds[k++ % seeds.length], policy: core.MOVER_POLICIES[policyName] });
    });
    assert.deepEqual(copy(actors[0]), copy(actors[1]), `${policyName} ${id}: begin`);
    for (let step = 0; step < 400; step += 1) {
      const dt = [1 / 64, 1 / 32, 1 / 16][step % 3]; const elapsed = step / 40; const reduced = step % 97 < 10;
      const draws = [script(), script(), script(), script()];
      [Core, LegacyCore].forEach((core, side) => {
        let k = 0;
        core.stepMoverBehavior(actors[side], below, 6, { dt, effects: { [id]: { elapsed } }, reduced, random: () => draws[k++ % draws.length], policy: core.MOVER_POLICIES[policyName] });
      });
      assert.deepEqual(copy(actors[0]), copy(actors[1]), `${policyName} ${id}: step ${step}`);
      const speeds = [Core, LegacyCore].map((core, side) => core.landingSpeed(actors[side], below, 6, { [id]: { elapsed } }, reduced, core.MOVER_POLICIES[policyName]));
      assert.ok(Object.is(speeds[0], speeds[1]), `${policyName} ${id}: speed at step ${step}`);
    }
  }
});

// ---- Completeness: a Sabotage in the catalogue has everything the game shows for it.

test('every Sabotage has wording, artwork, a 3D icon and a title reaction', async () => {
  const { ICON_IDS } = await load('icons3d.js');
  const { TITLE_EFFECT_IDS, titlePose } = await load('title-effects.js');
  assert.deepEqual([...ICON_IDS].sort(), [...Core.SABOTAGE_IDS].sort(), 'client3d sculpts exactly the catalogue');
  assert.deepEqual([...TITLE_EFFECT_IDS].sort(), [...Core.SABOTAGE_IDS].sort(), 'the title reacts to exactly the catalogue');
  const categories = new Set(['kinetic', 'trajectory', 'optical', 'geometry']);
  for (const row of Core.SABOTAGE_CATALOGUE) {
    assert.ok(categories.has(row.category), `${row.id} category`);
    for (const key of ['name', 'short', 'caption', 'hint']) assert.ok(typeof row[key] === 'string' && row[key].trim(), `${row.id} ${key}`);
    for (const untilDrop of [false, true]) assert.ok(Core.sabotageRules(row.id, { untilDrop }).length > 20, `${row.id} rules`);
    assert.ok(['normal', 'excluded', 'safe'].includes(row.reducedMotion), `${row.id} reducedMotion`);
    assert.ok(Object.isFrozen(row) && Object.isFrozen(row.tuning), `${row.id} is frozen`);
    assert.match(html, new RegExp(`<symbol id="sabotage-symbol-${row.id}"`), `${row.id} has an SVG symbol`);
    assert.equal(titlePose(row.id, 2, 4.4).id, row.id, `${row.id} title pose`);
  }
});

test('the How to play text agrees with the lifecycle durations and the drop-counted Sabotages', () => {
  const sentence = html.match(/In Solo and Competitive, most sabotages last[^<]*?There is no time cap\./);
  assert.ok(sentence, 'the How to play sentence about durations');
  const text = sentence[0];
  assert.ok(text.includes(`most sabotages last ${Core.EFFECT_SECONDS} seconds`), 'timed duration');
  assert.ok(text.includes(`up to ${Core.EFFECT_DROP_BUDGET} drops or ${Core.DROP_EFFECT_SECONDS} seconds`), 'drop-counted duration');
  assert.ok(text.includes(`next ${Core.EFFECT_DROP_BUDGET} landings`) && text.includes(`next ${Core.EFFECT_DROP_BUDGET} team landings`), 'Teamwork landings');
  for (const id of Core.DROP_COUNTED_IDS) assert.match(text, new RegExp(id, 'i'), `${id} is named as drop-counted`);
  for (const id of Core.TEAM_GLOBAL_IDS) assert.match(text, new RegExp(`${id} lasts for the next ${Core.EFFECT_DROP_BUDGET} team landings`, 'i'), `${id} strikes the whole team`);
});

test('the 3D stage reads the zoom scale from the catalogue', () => {
  assert.ok(!html.includes('const zoomTarget'), 'the page keeps no zoom scale of its own');
  assert.ok(fs.readFileSync(path.join(ROOT, 'client3d', 'stage.js'), 'utf8').includes("const zoomTarget = effectId === 'zoom' ? view.Core.SABOTAGE_TUNING.zoom.scale : 1;"));
  assert.ok(!/const (VOTE_EFFECT_HINTS|STAGE_VOTE_SHORT_NAMES) =/.test(html), 'no second table of Sabotage wording');
});
