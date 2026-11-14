// The diagonal palette-swap wave over a block sculpture, the pure half (no three.js; candidates.js paints the instances).
//
// A vote candidate is a pixel-grid sculpture: bricks { x, y, len, color, raised } from icon-voxel.js. Hovering its row sweeps a wave across
// it from the top-left to the bottom-right: each brick swaps at (x + y) / maxDiag * 360 ms, trading the sculpture's two most common colours
// (the raised ink lines never change). Leaving sweeps it back, from the far corner. Interrupted halfway, every brick simply heads for the
// new goal at the new schedule, so the wave never jumps.
export const WAVE_S = 0.36;

// the colours of the sculpture's fills (not its raised ink lines), most common first (ties: by name, so it is deterministic)
export function colorCounts(bricks) {
  const counts = new Map();
  for (const b of bricks) if (!b.raised) counts.set(b.color, (counts.get(b.color) || 0) + 1);
  return [...counts].sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1));
}

// the two colours that trade places, or null when the sculpture has only one fill colour
export function swapPair(bricks) { const c = colorCounts(bricks); return c.length >= 2 ? [c[0][0], c[1][0]] : null; }

// how far along the top-left -> bottom-right diagonal each brick stands, 0..1 (x from the left edge, y down from the top edge)
export function diagonalFractions(bricks) {
  const n = bricks.length; const out = new Float32Array(n); if (!n) return out;
  let minX = Infinity; let maxY = -Infinity; let maxD = 0;
  for (const b of bricks) { minX = Math.min(minX, b.x); maxY = Math.max(maxY, b.y); }
  for (let i = 0; i < n; i += 1) { out[i] = (bricks[i].x - minX) + (maxY - bricks[i].y); maxD = Math.max(maxD, out[i]); }
  if (maxD > 0) for (let i = 0; i < n; i += 1) out[i] /= maxD;
  return out;
}

// when each brick swaps, in seconds after the wave starts; `reverse` runs the wave from the far corner back
export function waveDelays(bricks, total = WAVE_S, reverse = false) {
  const f = diagonalFractions(bricks); const out = new Float32Array(f.length);
  for (let i = 0; i < f.length; i += 1) out[i] = (reverse ? 1 - f[i] : f[i]) * total;
  return out;
}

export class PaletteWave {
  constructor(bricks, { total = WAVE_S } = {}) {
    this.bricks = bricks; this.total = total; this.pair = swapPair(bricks); this.n = bricks.length;
    this.swappable = new Uint8Array(this.n);
    if (this.pair) for (let i = 0; i < this.n; i += 1) this.swappable[i] = !bricks[i].raised && (bricks[i].color === this.pair[0] || bricks[i].color === this.pair[1]) ? 1 : 0;
    this.fraction = diagonalFractions(bricks);
    this.state = new Uint8Array(this.n);  // 1: showing the swapped colour
    this.from = new Uint8Array(this.n);   // what it showed when the wave last changed direction
    this.goal = 0; this.t0 = 0; this.active = false;
  }

  // The pointer arrived (on = true) or left. `immediate` skips the sweep (Reduced Motion: the colours simply change).
  setHover(on, now, { immediate = false } = {}) {
    const goal = on ? 1 : 0;
    if (goal === this.goal) return false;
    this.goal = goal;
    if (!this.pair) return false;
    if (immediate) { this.state.fill(0); if (goal) for (let i = 0; i < this.n; i += 1) this.state[i] = this.swappable[i]; this.active = false; return true; }
    this.from.set(this.state); this.t0 = now; this.active = true;
    return true;
  }

  // Advances the wave to `now` (seconds); true when any brick changed colour.
  update(now) {
    if (!this.active) return false;
    const elapsed = now - this.t0; let changed = false;
    for (let i = 0; i < this.n; i += 1) {
      if (!this.swappable[i]) continue;
      const delay = (this.goal ? this.fraction[i] : 1 - this.fraction[i]) * this.total;
      const next = elapsed >= delay ? this.goal : this.from[i];
      if (next !== this.state[i]) { this.state[i] = next; changed = true; }
    }
    if (elapsed >= this.total) this.active = false;
    return changed;
  }

  // the colour brick i shows right now
  colorOf(i) {
    const b = this.bricks[i];
    if (!this.state[i] || !this.pair) return b.color;
    return b.color === this.pair[0] ? this.pair[1] : this.pair[0];
  }
}
