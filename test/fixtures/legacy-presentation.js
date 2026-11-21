'use strict';
// Frozen pre-refactor behavior oracle. Do not update to mirror production changes.
// Captured before the slim Scene presentation model: the solo pick weighting in the page's resolveVote,
// the vote tally in the page's vote UI, and the Stage's ballotFrom and arena rule (client3d/stage.js).
// Bodies are verbatim apart from the parameters that replace the page's globals.
const Core = require('../../shared/game-core');

// resolveVote: the votes handed to Core.chooseWinner.
function resolveVoteTally(game, multiplayer) {
  let tallyVotes = game.vote.votes;
  if (!multiplayer.active && tallyVotes.has('you')) {
    tallyVotes = new Map(tallyVotes);
    const playerChoice = tallyVotes.get('you');
    for (let weight = 2; weight <= 4; weight += 1) tallyVotes.set(`you-weight-${weight}`, playerChoice);
  }
  return tallyVotes;
}

// The page's vote buttons: counts and total.
function pageVoteTally(game, multiplayer) {
  const voting = Boolean(game.vote && game.phase === 'playing');
  const remoteVote = Boolean(multiplayer.active && game.multiplayer);
  let total = voting ? (remoteVote ? Number(game.vote.totalVotes) || 0 : game.vote.votes.size) : 0;
  const counts = voting ? (remoteVote && game.vote.counts ? game.vote.counts : Core.countVotes(game.vote.votes, game.vote.options)) : {};
  if (voting && !remoteVote && game.vote.votes.has('you')) {
    const choice = game.vote.votes.get('you');
    if (Object.prototype.hasOwnProperty.call(counts, choice)) counts[choice] += 3;
    total += 3;
  }
  return { counts, total };
}

const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
// Stage.ballotFrom, with the theme's colours left out.
function stageBallot(view) {
  const g = view.game; if (!g || !g.vote || g.phase !== 'playing') return null;
  const remote = Boolean(view.mp.active && g.multiplayer); const vote = g.vote; const Core = view.Core;
  const counts = remote && vote.counts ? vote.counts : Core.countVotes(vote.votes, vote.options);
  let total = remote ? Number(vote.totalVotes) || 0 : vote.votes.size;
  const fractions = vote.options.slice(0, 3).map(id => Number(counts[id]) || 0);
  if (!remote && vote.votes.has && vote.votes.has('you')) { const c = vote.votes.get('you'); const idx = vote.options.indexOf(c); if (idx >= 0) fractions[idx] += 3; total += 3; }
  while (fractions.length < 3) fractions.push(0);
  const crowd = remote ? Math.max(5, (view.mp.room && view.mp.room.players ? view.mp.room.players.length : 4) * 1.5) : 22;
  return { voted: clamp(total / crowd), fractions: fractions.map(f => f + 0.0001) };
}

// Stage.pickMode for the game screen, and the page's matching rule for the wide host board.
function stageArena(view) {
  const g = view.game;
  return g && g.multiplayer && g.mode === 'competitive' && view.mp.role !== 'player' ? 'arena' : 'play';
}

module.exports = { resolveVoteTally, pageVoteTally, stageBallot, stageArena };
