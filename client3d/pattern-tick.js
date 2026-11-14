// The backdrop's pattern tick, pure. Hovering a primary button on a menu screen nudges the world's printed pattern (the Sunset floor grid's
// scroll, the Prime Time sunburst's rays) forward in three discrete jumps, 85 ms apart, instead of letting it glide. Both patterns run on one
// time value, so a jump is just a step added to it; the jumps stay in the pattern (the phase of a scrolling pattern is arbitrary, so nothing
// has to snap back).
export const TICK = Object.freeze({ jumps: 3, intervalMs: 85 });
// seconds of pattern time one jump adds, per theme: about a third of the pattern's own period (a third of a grid cell; a third of a ray).
// Paper has no printed pattern behind the stage.
export const TICK_STEP = Object.freeze({ paper: 0, sunset: 0.43, primetime: 8.7 });

export class PatternTick {
  constructor() { this.base = 0; this.t0 = -Infinity; this.running = false; }

  // Starts the three jumps at `now` (seconds). False while one run is still going.
  trigger(now) {
    this.settle(now);
    if (this.running) return false;
    this.running = true; this.t0 = now;
    return true;
  }

  settle(now) {
    if (this.running && now - this.t0 >= TICK.jumps * TICK.intervalMs / 1000) { this.running = false; this.base += TICK.jumps; }
  }

  // how many jumps have happened in all by `now`: the first lands as the run starts, the rest 85 ms apart
  jumps(now) {
    this.settle(now);
    if (!this.running) return this.base;
    return this.base + Math.min(TICK.jumps, Math.floor((now - this.t0) * 1000 / TICK.intervalMs + 1e-9) + 1);
  }
}
