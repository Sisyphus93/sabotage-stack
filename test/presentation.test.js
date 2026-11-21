'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const Core = require('../shared/game-core');
const Legacy = require('./fixtures/legacy-presentation');
const { rng } = require('./helpers/rng');
const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'sabotage-stack.html'), 'utf8');
const stageSource = fs.readFileSync(path.join(ROOT, 'client3d', 'stage.js'), 'utf8');
const copy = value => JSON.parse(JSON.stringify(value));

function pageSlice(startMarker, endMarker) {
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker, start);
  assert.ok(start >= 0 && end > start, `page markers ${startMarker} … ${endMarker}`);
  return html.slice(start, end);
}
// The page's voteTally and watchingArena, run against a supplied game and multiplayer session.
function pageRig() {
  const context = { Core, game: null, multiplayer: null };
  vm.runInNewContext(`${pageSlice('    function voteTally() {', '    // Bridge for the optional 3D layer')}
    Object.assign(globalThis, { voteTally, watchingArena });`, context);
  return context;
}
// A random moment of a vote, solo or in a room, with or without the player's own pick.
function scenario(r) {
  const options = Core.SABOTAGE_IDS.filter(() => r() < 0.3).slice(0, 1 + Math.floor(r() * 3));
  while (options.length < 3 && r() < 0.8) { const id = Core.SABOTAGE_IDS[Math.floor(r() * 16)]; if (!options.includes(id)) options.push(id); }
  const votes = new Map();
  for (let i = 0, n = Math.floor(r() * 30); i < n; i += 1) votes.set(`chat-${i}`, r() < 0.9 ? options[Math.floor(r() * options.length)] : 'stale');
  if (r() < 0.6) votes.set('you', r() < 0.9 ? options[Math.floor(r() * options.length)] : 'stale');
  const counts = r() < 0.8 ? Object.fromEntries(options.map(id => [id, Math.floor(r() * 9)])) : undefined;
  const vote = r() < 0.9 ? { options, votes, counts, totalVotes: r() < 0.9 ? Math.floor(r() * 30) : undefined } : null;
  const game = { vote, phase: r() < 0.85 ? 'playing' : 'collapse', multiplayer: r() < 0.4, mode: r() < 0.5 ? 'competitive' : 'teamwork' };
  const mp = { active: r() < 0.4, role: ['host', 'player', 'spectator'][Math.floor(r() * 3)], room: r() < 0.5 ? { players: Array.from({ length: Math.floor(r() * 8) }) } : null };
  return { game, mp };
}
const freshGame = game => ({ ...game, vote: game.vote && { ...game.vote, votes: new Map(game.vote.votes), counts: game.vote.counts && { ...game.vote.counts } } });

test('the solo pick is weighted exactly as resolveVote weighted it', () => {
  const r = rng(5);
  for (let i = 0; i < 5000; i += 1) {
    const { game, mp } = scenario(r);
    if (!game.vote) continue;
    const legacyGame = freshGame(game);
    const expected = Legacy.resolveVoteTally(legacyGame, mp);
    const actual = mp.active ? game.vote.votes : Core.weightSoloPick(game.vote.votes);
    assert.deepEqual([...actual], [...expected]);
    assert.equal(actual === game.vote.votes, expected === legacyGame.vote.votes, 'the live ballots are copied only when weighted');
  }
  assert.ok(html.includes('const outcome = Core.chooseWinner(multiplayer.active ? game.vote.votes : Core.weightSoloPick(game.vote.votes), game.vote.options);'));
});

test('the page tally, the 3D ballot and the arena rule match the frozen code', async () => {
  const { Stage } = await import(path.join(ROOT, 'client3d', 'stage.js'));
  const page = pageRig();
  const r = rng(17);
  const seen = { solo: 0, room: 0, pick: 0, idle: 0, arena: 0 };
  for (let i = 0; i < 8000; i += 1) {
    const { game, mp } = scenario(r);
    page.game = freshGame(game); page.multiplayer = mp;
    const tally = page.voteTally();
    const legacyTally = Legacy.pageVoteTally(freshGame(game), mp);
    if (tally) {
      assert.deepEqual(copy({ counts: tally.counts, total: tally.total }), copy(legacyTally), `step ${i}: vote buttons`);
      assert.equal(tally.pick, !(mp.active && game.multiplayer) && game.vote.votes.get('you') || null, `step ${i}: your pick`);
    }
    else assert.deepEqual(legacyTally, { counts: {}, total: 0 }, `step ${i}: no vote`);
    const view = { game: page.game, mp, Core, ballot: tally, arena: page.watchingArena() };
    const ballot = Stage.prototype.ballotFrom.call({ theme: 'paper' }, view);
    const legacyBallot = Legacy.stageBallot({ game: freshGame(game), mp, Core });
    if (ballot) delete ballot.colors;
    assert.deepEqual(copy(ballot), copy(legacyBallot), `step ${i}: 3D ballot`);
    assert.equal(Stage.prototype.pickMode.call({}, { ...view, screen: 'game' }), Legacy.stageArena({ game, mp }), `step ${i}: arena`);
    if (!tally) seen.idle += 1; else if (mp.active && game.multiplayer) seen.room += 1; else seen.solo += 1;
    if (tally && game.vote.votes.has('you') && !(mp.active && game.multiplayer)) seen.pick += 1;
    if (view.arena) seen.arena += 1;
  }
  for (const [what, count] of Object.entries(seen)) assert.ok(count > 0, `the script reaches ${what}`);
});

test('the page hands the Stage its tally and arena rule, and the Stage keeps no copy of either', () => {
  assert.ok(html.includes('stackHostView.ballot = voteTally(); stackHostView.arena = watchingArena();'));
  assert.ok(html.includes('const { counts, total, pick } = voteTally() || { counts: {}, total: 0, pick: null };'), 'the vote buttons use the same tally');
  assert.ok(!/\+= 3/.test(stageSource) && !/'you'/.test(stageSource), 'no solo weighting or ballot reading in the Stage');
  assert.ok(!/mode === 'competitive' && view\.mp\.role/.test(stageSource), 'no arena rule in the Stage');
  assert.ok(!/window\.SabotageStack\b/.test(stageSource), 'Sabotage names come from the catalogue, not a second global');
  assert.equal((html.match(/game\.mode === 'competitive' && multiplayer\.role !== 'player'/g) || []).length, 1, 'one arena rule in the page');
});

test('the pick labels quote the weight the tally uses', () => {
  assert.equal(Core.SOLO_PICK_WEIGHT, 4);
  for (const text of ['`Your pick ×${Core.SOLO_PICK_WEIGHT}`', '`, your pick worth ${Core.countWord(Core.SOLO_PICK_WEIGHT)} votes`', "×${Core.SOLO_PICK_WEIGHT}. You can change it."]) assert.ok(html.includes(text), text);
  const script = html.slice(html.indexOf('    /* SHARED_REPLICATION_END */'));
  assert.ok(!/×4|worth four/.test(script.slice(0, script.indexOf('</script>'))), 'the page script never types the weight');
});
