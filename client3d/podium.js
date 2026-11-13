// Layout and reveal rules for the multiplayer results podium. Pure functions (no DOM, no three.js) so Node can test them.
import { clamp } from './util.js';

export const REVEAL_RATE = 7.5;   // blocks per second, the same for every tower: the tallest finishes last
export const REVEAL_DELAY = 0.9;  // seconds before the first block lands

// Turns the server's result payload into one entry per tower, in rank order.
export function podiumEntries(payload) {
  const entries = [];
  if (payload && payload.mode === 'teamwork') {
    entries.push({ key: 'team', name: 'The crew', color: '#E3A33B', blocks: payload.blocks || [], fallen: payload.fallen || [], height: Number(payload.height) || 0, winner: true, team: true, score: Number(payload.score) || 0 });
  } else if (payload) {
    const winners = new Set(payload.winnerIds || []);
    (payload.players || []).forEach((p, i) => entries.push({ key: String(p.id != null ? p.id : i), name: String(p.name || 'Player'), color: p.color, blocks: p.blocks || [], fallen: p.fallen || [], height: Number(p.height) || 0, winner: winners.has(p.id), team: false, score: 0 }));
  }
  const slots = podiumSlots(entries.length);
  entries.forEach((entry, i) => { entry.slot = slots[i]; });
  return entries;
}

// First place in the middle, the rest alternating outwards (… 4th, 2nd, 1st, 3rd, 5th …), centred on zero.
export function podiumSlots(n) {
  const offsets = Array.from({ length: n }, (_, i) => (i === 0 ? 0 : (i % 2 ? -1 : 1) * Math.ceil(i / 2)));
  const mid = n ? (Math.min(...offsets) + Math.max(...offsets)) / 2 : 0;
  return offsets.map(offset => offset - mid);
}

// World width shared by the line-up, the column each tower gets, and the common scale of all towers.
export function podiumMetrics(n, maxBlocks) {
  const worldW = n <= 1 ? 560 : n === 2 ? 640 : 760;
  const colW = worldW / Math.max(1, n);
  const maxHeight = Math.max(0, maxBlocks - 1);
  const scale = clamp(Math.min(colW / 400, 400 / ((maxHeight + 2) * 22)), 0.07, 1);
  return { worldW, colW, scale, maxHeight };
}

// How many blocks of a tower are standing after `clock` seconds (always at least the base once the podium exists).
export function revealCount(clock, total, { reduced = false, rate = REVEAL_RATE, delay = REVEAL_DELAY } = {}) {
  if (total <= 0) return 0;
  if (reduced) return total;
  return clamp(Math.floor((clock - delay) * rate) + 1, 1, total);
}

// Rubble appears when the tower reaches the level it fell from; the final misses wait for the top.
// Fallen pieces are chronological, so the revealed ones always form a prefix.
export function revealedFallen(fallen, shown, total) {
  let count = 0;
  while (count < fallen.length) {
    const piece = fallen[count];
    if (shown >= total || (Number.isInteger(piece.level) && piece.level <= shown - 1)) count += 1; else break;
  }
  return count;
}

// The line of 3D type that slams in once every tower has finished climbing. `clean` filters a name down to glyphs the typeface has.
export function headlineFor(entries, clean = text => String(text).toUpperCase()) {
  if (!entries.length) return '';
  if (entries[0].team) return entries[0].score > 0 ? `TEAM SCORE ${entries[0].score}` : 'THE FLOOR WINS';
  const winners = entries.filter(entry => entry.winner);
  if (winners.length === 1) return `${clean(winners[0].name.slice(0, 12)) || 'CHAMPION'} WINS`;
  return 'A TIE AT THE TOP';
}
