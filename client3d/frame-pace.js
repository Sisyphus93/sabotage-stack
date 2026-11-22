// Frame pacing for Idle Scenes: a Scene that is not a round in progress draws at most `targetFps` once it has settled
// and the visitor has left it alone for `quietMs`. Pure state machine (no DOM, no three.js), like the governor, so the
// rules are Node-testable.
//
//  - Only idle-capable modes are capped. A round (play, arena) always draws every animation frame.
//  - The cap is render-only: the Stage keeps simulating, sampling input and easing the View at the rAF cadence; this
//    module only decides whether this frame draws.
//  - The decision is time-based (last draw + 1000 / targetFps), not frame parity, so 60, 120 and 144 Hz screens all
//    settle at the same ~30 fps.
//  - A wake (visitor input, View motion, entering a Scene, a tab becoming visible, a resize, or a raw rAF gap such as a
//    tab switch or device sleep) restores full rate on the very next frame.
//  - The governor must keep seeing the normal rAF interval of a drawn frame (see Stage.frame): the cap must never look
//    like a slow device and trigger a quality downgrade.
export const IDLE_MODES = Object.freeze(['hero', 'lobby', 'results', 'celebrate']);

export class FramePace {
  constructor({ targetFps = 30, quietMs = 2500, gapMs = 1000, idleModes = IDLE_MODES } = {}) {
    this.targetFps = targetFps; this.quietMs = quietMs; this.gapMs = gapMs; this.idleModes = idleModes;
    this.lastActivity = null; this.lastDraw = null;
    this.idle = null; // (observable for QA: an Idle Scene that has passed its quiet period)
  }

  get intervalMs() { return 1000 / this.targetFps; }

  // Visitor input, View motion and Scene entry: the next frame draws at full rate and the quiet period starts again.
  wake(timestamp) {
    if (!Number.isFinite(timestamp)) return;
    this.lastActivity = timestamp; this.idle = false;
  }

  // Per-frame decision. `mode` is the current Scene, `settled` says every scripted sequence has finished (the Stage
  // owns that predicate because it knows about flights, intros, reveals and arrivals), `now` is the rAF timestamp.
  // Returns whether to draw this frame.
  shouldDraw({ mode, settled, now }) {
    if (!this.idleModes.includes(mode) || !settled) {
      // Busy or a round: draw every frame, and keep the quiet clock fresh so the cap starts counting once it settles.
      this.lastActivity = now; this.lastDraw = now; this.idle = false;
      return true;
    }
    if (this.lastActivity == null) this.lastActivity = now;
    if (now - this.lastActivity < this.quietMs) { this.lastDraw = now; this.idle = false; return true; }
    this.idle = true;
    if (this.lastDraw == null) { this.lastDraw = now; return true; }
    const since = now - this.lastDraw; const interval = this.intervalMs;
    if (since >= interval) {
      // Keep the sub-interval phase instead of snapping the clock to `now`: on a 144 Hz screen (6.94 ms frames) the
      // ideal 33.33 ms lands between frames, and dropping the extra fraction every time would settle near 28 fps.
      this.lastDraw = now - (since % interval);
      return true;
    }
    return false;
  }
}
