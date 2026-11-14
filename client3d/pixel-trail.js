// The snapped cursor trail, the pure half (no DOM, no canvas, so it is unit-tested in Node; pixel-ui.js draws it).
//
// The pointer is snapped to a 16 x 16 grid. Every new cell the pointer enters drops one square that lives 420 ms and shrinks in three
// whole steps, always centred in its cell, then is gone: 16 x 16 for the first 140 ms, 8 x 8 (inset 4) for the next 140, 4 x 4 (inset 6)
// for the last 140. No easing: a square is one size or the next. At most 14 are alive at once. The colours cycle through the six block
// colours that are not cream, mapped to the theme the pointer was in when the square was dropped.
import { themedBlockColor, normalizeTheme } from './palette.js';

export const CELL = 16;
export const MAX_CELLS = 14;
export const LIFE_MS = 420;
// the page's block colours without the cream one (palette.js maps them for Sunset and Prime Time)
export const TRAIL_BLOCKS = Object.freeze(['#E3A33B', '#2F8478', '#7FA6BD', '#D5472F', '#7A6AA6', '#C96F8A']);
export const STEPS = Object.freeze([
  Object.freeze({ until: 140, size: 16, inset: 0 }),
  Object.freeze({ until: 280, size: 8, inset: 4 }),
  Object.freeze({ until: 420, size: 4, inset: 6 })
]);

export const snapCell = v => Math.floor(v / CELL);
// the size a square has at this age (ms), or null once it is gone
export function stepAt(ageMs) { for (const s of STEPS) if (ageMs < s.until) return s; return null; }

export class TrailModel {
  constructor({ max = MAX_CELLS, life = LIFE_MS } = {}) {
    this.max = max; this.life = life; this.cells = []; this.lastX = NaN; this.lastY = NaN; this.count = 0;
  }

  // The pointer is at (x, y) in CSS px at `now` ms. Returns true when it dropped a square (it entered a new cell).
  push(x, y, now, theme = 'paper') {
    if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(now)) return false;
    const cx = snapCell(x); const cy = snapCell(y);
    if (cx === this.lastX && cy === this.lastY) return false; // still in the same cell: nothing new
    this.lastX = cx; this.lastY = cy;
    this.prune(now);
    this.cells.push({ cx, cy, born: now, color: themedBlockColor(normalizeTheme(theme), TRAIL_BLOCKS[this.count % TRAIL_BLOCKS.length]) });
    this.count += 1;
    while (this.cells.length > this.max) this.cells.shift(); // the oldest goes first
    return true;
  }

  prune(now) { if (this.cells.length) this.cells = this.cells.filter(c => now - c.born < this.life); return this.cells.length; }

  alive(now) { return this.cells.some(c => now - c.born < this.life); }

  // the squares to draw at `now`, oldest first (the newest lies on top): whole CSS pixels, [{ x, y, w, h, color }]
  rects(now) {
    const out = [];
    for (const c of this.cells) {
      const s = stepAt(now - c.born); if (!s) continue;
      out.push({ x: c.cx * CELL + s.inset, y: c.cy * CELL + s.inset, w: s.size, h: s.size, color: c.color });
    }
    return out;
  }

  clear() { this.cells.length = 0; this.lastX = NaN; this.lastY = NaN; }
}
