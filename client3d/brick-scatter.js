// How the brick title scatters under the pointer, in whole-brick steps. Pure (no DOM, no three.js); title-stack.js applies it.
//
// Every brick within three brick-widths of the pointer (measured across the screen) is pushed straight away from it, by up to 1.5 cells
// at the pointer itself and by less the further out it stands. A cell is one brick course (the height of a row of bricks). The push is not
// applied directly: each brick is on a damped spring, v = (v + (target - x) * 0.12) * 0.8, x += v, so it bulges out and settles back
// into its slot once the pointer moves on. What is DRAWN is that position rounded to whole cells, refreshed on a fixed 30 Hz tick, so the
// wall moves in steps like a pixel grid and never glides. A brick that is back home with nothing pushing it falls asleep and costs nothing.
export const SCATTER = Object.freeze({
  radiusBricks: 3,   // how far the pointer reaches, in brick widths
  maxCells: 1.5,     // the strongest push, in cells
  stiffness: 0.12,   // the spring: v = (v + (target - x) * stiffness) * damping
  damping: 0.8,
  hz: 30,            // the fixed tick the springs run on and the drawn offsets change on
  rest: 0.04         // below this (position and speed, in cells) a brick is home
});

const TAU = Math.PI * 2;

// Where the brick wants to be, in cells, relative to its slot: straight away from the pointer, strongest right under it. dx, dy: the
// brick's offset from the pointer across the screen (positive dx: to its right; positive dy: above it), in the same units as radius.
// A brick exactly under the pointer has no "away": `seed` picks a direction for it (the golden angle, so neighbours differ).
export function scatterTarget(dx, dy, radius, maxCells, out = { x: 0, y: 0 }, seed = 0) {
  const d = Math.hypot(dx, dy);
  if (!(radius > 0) || !(d < radius)) { out.x = 0; out.y = 0; return out; }
  const push = maxCells * (1 - d / radius);
  if (d < 1e-6) { const a = (seed * 2.399963229728653) % TAU; out.x = Math.cos(a) * push; out.y = Math.sin(a) * push; return out; }
  out.x = dx / d * push; out.y = dy / d * push;
  return out;
}

// One tick of the spring, exactly as the brief has it. s: { x, y, vx, vy } in cells.
export function springStep(s, tx, ty, stiffness = SCATTER.stiffness, damping = SCATTER.damping) {
  s.vx = (s.vx + (tx - s.x) * stiffness) * damping; s.vy = (s.vy + (ty - s.y) * stiffness) * damping;
  s.x += s.vx; s.y += s.vy;
  return s;
}

// whole cells, rounding half away from zero (Math.round alone would make +1.5 and -1.5 differ)
export function quantize(v) { const q = Math.round(Math.abs(v)); return q === 0 ? 0 : v < 0 ? -q : q; }

// at rest: close to its slot, hardly moving, and nothing pushing it any more
export function asleep(s, tx = 0, ty = 0, eps = SCATTER.rest) {
  return tx === 0 && ty === 0 && Math.abs(s.x) < eps && Math.abs(s.y) < eps && Math.abs(s.vx) < eps && Math.abs(s.vy) < eps;
}

// A fixed-rate clock: feed it the frame time, it says how many ticks are due. Never more than `maxSteps` at once (a stalled tab must not
// run the springs for seconds when it wakes up).
export class FixedTick {
  constructor(hz = SCATTER.hz, maxSteps = 3) { this.step = 1 / hz; this.max = maxSteps; this.acc = 0; }
  advance(dt) {
    if (!(dt > 0)) return 0;
    this.acc += Math.min(dt, 0.25);
    let n = 0;
    while (this.acc + 1e-9 >= this.step && n < this.max) { this.acc -= this.step; n += 1; }
    if (n === this.max) this.acc = 0; // whatever is still owed after a stall is dropped, not paid back in a burst
    return n;
  }
  reset() { this.acc = 0; }
}
