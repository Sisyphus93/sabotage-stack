// Zoom for the scenes a visitor can turn: the mouse wheel (and the on-screen + / - keys) dolly the camera in and out.
// A pure controller (no DOM, no three.js): the stage feeds it wheel events and reads the eased factor back every frame, so
// the rules can be tested in Node.
//
//   value   the factor applied to the scene's own camera distance: 1 is the default view, 2 is twice as close, 0.5 twice as far.
//   target  where the wheel has asked it to go; value eases towards it (at once under Reduced Motion).
//
// The wheel belongs to the scene only while it can still zoom. Wheeling on against a limit hands the wheel back to the page,
// after a short pause, so the page can always be scrolled again from over the scene.
import { clamp, easeInOutCubic } from './util.js';

export const ZOOM_MIN = 0.5; // the whole world in view
export const ZOOM_MAX = 3.2; // a single block fills the board
const LINE_PX = 33; // a notch of a mouse wheel is ~100 px, or three lines in the browsers that count lines
const PAGE_PX = 480;
const MAX_STEP_PX = 240; // one event never zooms by more than this, however hard the wheel was thrown

// A wheel event's vertical delta in pixels, whatever unit the browser reports it in.
export function wheelPixels(deltaY, deltaMode = 0) {
  let px = Number(deltaY); if (!Number.isFinite(px)) return 0;
  px *= deltaMode === 1 ? LINE_PX : deltaMode === 2 ? PAGE_PX : 1;
  return clamp(px, -MAX_STEP_PX, MAX_STEP_PX);
}

// Rolling the wheel away from you (a negative delta) zooms in. Exponential, so every notch feels the same at every distance.
export const zoomFactor = (px, perPixel = 0.0013) => Math.exp(-px * perPixel);

export class ZoomController {
  constructor({ min = ZOOM_MIN, max = ZOOM_MAX, perPixel = 0.0013, ease = 11, hold = 0.45 } = {}) {
    Object.assign(this, { min, max, perPixel, ease, hold });
    this.value = 1; this.target = 1; this.reduced = false; this.lastMoved = -Infinity; this.tween = null;
  }

  // True once the view has been zoomed away from the default (the "Reset view" control follows this).
  get zoomed() { return Math.abs(Math.log(this.target)) > 0.02; }
  get moving() { return Boolean(this.tween) || Math.abs(Math.log(this.value / this.target)) > 0.0008; }
  get atMin() { return this.target <= this.min * 1.0005; }
  get atMax() { return this.target >= this.max * 0.9995; }

  setReduced(flag) { this.reduced = Boolean(flag); if (this.reduced) this.value = this.target; }

  // One wheel event. Returns true when it was used (the page must not scroll under it), false when it was not: sideways or
  // empty events, and wheeling on against a limit once the spin that reached it has died away.
  wheel(deltaY, deltaMode = 0, t = 0) {
    const px = wheelPixels(deltaY, deltaMode); if (px === 0) return false;
    const next = clamp(this.target * zoomFactor(px, this.perPixel), this.min, this.max);
    if (next === this.target) return Number.isFinite(t) && t - this.lastMoved < this.hold;
    this.target = next; this.lastMoved = Number.isFinite(t) ? t : 0; this.tween = null;
    if (this.reduced) this.value = next;
    return true;
  }

  // The on-screen buttons: a fixed step. Returns whether anything changed.
  zoomBy(factor, t = 0) {
    const next = clamp(this.target * (Number.isFinite(factor) && factor > 0 ? factor : 1), this.min, this.max);
    if (next === this.target) return false;
    this.target = next; this.lastMoved = Number.isFinite(t) ? t : 0; this.tween = null;
    if (this.reduced) this.value = next;
    return true;
  }

  // Back to the default view, over `duration` seconds (at once under Reduced Motion, and when it is already there). The next wheel event takes over again.
  reset(duration = 0.9) {
    this.target = 1;
    if (this.reduced || !(duration > 0) || Math.abs(Math.log(this.value)) < 0.002) { this.value = 1; this.tween = null; return; }
    this.tween = { t: 0, dur: duration, from: Math.log(this.value) };
  }

  // Jumps straight back (leaving the scene).
  snap() { this.value = 1; this.target = 1; this.lastMoved = -Infinity; this.tween = null; }

  update(dt) {
    if (!(dt > 0)) return;
    if (this.reduced) { this.value = this.target; this.tween = null; return; }
    if (this.tween) {
      const tw = this.tween; tw.t += Math.min(dt, 0.05); const k = clamp(tw.t / tw.dur);
      this.value = Math.exp(tw.from * (1 - easeInOutCubic(k)));
      if (k >= 1) { this.tween = null; this.value = 1; }
      return;
    }
    // eased in the logarithm, so a zoom in and the zoom out that undoes it take the same time
    const k = 1 - Math.exp(-this.ease * Math.min(dt, 0.05));
    const next = Math.exp(Math.log(this.value) + (Math.log(this.target) - Math.log(this.value)) * k);
    this.value = Math.abs(Math.log(next / this.target)) < 0.0004 ? this.target : next;
  }
}
