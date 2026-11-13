// Orbit control for the home scene: hold the left or right mouse button (or one finger) and drag to turn the whole scene a
// full 360 degrees. A pure state machine (no DOM, no three.js): the stage feeds it pointer samples and reads yaw / pitch back
// every frame, so the rules can be tested in Node.
//
//   yaw    camera angle around the vertical axis, in radians, relative to the default view. Unbounded while dragging.
//   pitch  camera elevation, relative to the default view, clamped to [minPitch, maxPitch].
//
// Dragging right turns the scene to the right (the camera orbits left); dragging down lifts the camera.
import { clamp, easeInOutCubic } from './util.js';

const TAU = Math.PI * 2;

// The sky and the far backdrop follow an orbit almost, but not quite: relative to the camera they swing back and forth by up to
// BACKDROP_DRIFT radians over one full turn, so they drift past like things that are far away. A sine keeps the mapping
// periodic: after a full turn (or a reset) everything is exactly where it started, with no jump.
export const BACKDROP_DRIFT = 0.3;
export const backdropYaw = yaw => yaw - BACKDROP_DRIFT * Math.sin(yaw);

// Wraps an angle into [-PI, PI).
export const wrapAngle = angle => { const a = (angle + Math.PI) % TAU; return (a < 0 ? a + TAU : a) - Math.PI; };

export class OrbitController {
  constructor({ yawPerPixel = 0.0072, pitchPerPixel = 0.0044, minPitch = -0.2, maxPitch = 0.9, friction = 4.2, maxSpeed = 7, flingWindow = 0.1, tapSlop = 5 } = {}) {
    Object.assign(this, { yawPerPixel, pitchPerPixel, minPitch, maxPitch, friction, maxSpeed, flingWindow, tapSlop });
    this.yaw = 0; this.pitch = 0; this.vyaw = 0; this.vpitch = 0;
    this.dragging = false; this.reduced = false; this.touched = false;
    this.samples = []; this.tween = null; this.lastX = 0; this.lastY = 0;
  }

  // True once the view has been turned away from the default (the "Reset view" control follows this).
  get rotated() { return Math.abs(wrapAngle(this.yaw)) > 0.02 || Math.abs(this.pitch) > 0.02; }
  get moving() { return this.dragging || Boolean(this.tween) || Math.abs(this.vyaw) > 0.012 || Math.abs(this.vpitch) > 0.012; }

  setReduced(flag) { this.reduced = Boolean(flag); }

  begin(x, y, t) {
    if (!Number.isFinite(x) || !Number.isFinite(y)) return;
    this.dragging = true; this.touched = true; this.tween = null; this.vyaw = 0; this.vpitch = 0;
    this.lastX = x; this.lastY = y; this.samples.length = 0; this.sample(t);
  }

  // pitch: false for a finger (a vertical swipe must stay free to scroll the page, so touch only turns the scene sideways)
  move(x, y, t, { pitch = true } = {}) {
    if (!this.dragging || !Number.isFinite(x) || !Number.isFinite(y)) return false;
    const dx = x - this.lastX; const dy = y - this.lastY; this.lastX = x; this.lastY = y;
    this.yaw -= dx * this.yawPerPixel;
    if (pitch) this.pitch = clamp(this.pitch + dy * this.pitchPerPixel, this.minPitch, this.maxPitch);
    this.sample(t);
    return dx !== 0 || dy !== 0;
  }

  // Letting go while still moving flings the scene; pausing before letting go leaves it where it is.
  end(t) {
    if (!this.dragging) return;
    this.dragging = false; this.vyaw = 0; this.vpitch = 0;
    const last = this.samples[this.samples.length - 1];
    if (!this.reduced && last && Number.isFinite(t) && t - last.t < 0.06) {
      const from = this.samples.find(s => last.t - s.t <= this.flingWindow) || last; const span = last.t - from.t;
      if (span >= 0.012) {
        this.vyaw = clamp((last.yaw - from.yaw) / span, -this.maxSpeed, this.maxSpeed);
        this.vpitch = clamp((last.pitch - from.pitch) / span, -this.maxSpeed, this.maxSpeed);
      }
    }
    this.samples.length = 0;
  }

  sample(t) {
    if (!Number.isFinite(t)) return;
    this.samples.push({ t, yaw: this.yaw, pitch: this.pitch });
    while (this.samples.length > 2 && t - this.samples[0].t > 0.3) this.samples.shift();
  }

  update(dt) {
    if (!(dt > 0)) return;
    dt = Math.min(dt, 0.05);
    if (this.tween) {
      const tw = this.tween; tw.t += dt; const k = clamp(tw.t / tw.dur); const e = easeInOutCubic(k);
      this.yaw = tw.fromYaw + (tw.toYaw - tw.fromYaw) * e; this.pitch = tw.fromPitch + (tw.toPitch - tw.fromPitch) * e;
      if (k >= 1) { this.tween = null; this.yaw = wrapAngle(this.yaw); }
      return;
    }
    if (this.dragging) return;
    if (this.vyaw || this.vpitch) {
      this.yaw += this.vyaw * dt;
      const next = this.pitch + this.vpitch * dt; this.pitch = clamp(next, this.minPitch, this.maxPitch); if (this.pitch !== next) this.vpitch = 0;
      const decay = Math.exp(-this.friction * dt); this.vyaw *= decay; this.vpitch *= decay;
      if (Math.abs(this.vyaw) < 0.012) this.vyaw = 0;
      if (Math.abs(this.vpitch) < 0.012) this.vpitch = 0;
    }
    if (Math.abs(this.yaw) > TAU) this.yaw = wrapAngle(this.yaw);
  }

  tweenTo(yaw, pitch, duration = 0.6) {
    this.dragging = false; this.vyaw = 0; this.vpitch = 0;
    const dur = Math.max(0.001, this.reduced ? duration * 0.3 : duration);
    this.tween = { t: 0, dur, fromYaw: this.yaw, fromPitch: this.pitch, toYaw: yaw, toPitch: clamp(pitch, this.minPitch, this.maxPitch) };
  }

  // Back to the default view by the shortest way round (nothing to do, and no easing, when it is already there).
  reset(duration = 0.9) {
    if (!this.rotated && !this.tween && !this.dragging && !this.vyaw && !this.vpitch) return;
    this.tweenTo(Math.round(this.yaw / TAU) * TAU, 0, duration);
  }

  // Quarter-turn style steps for the on-screen buttons; pressing twice quickly keeps adding up.
  rotateBy(delta, duration = 0.5) {
    const base = this.tween ? this.tween.toYaw : this.yaw; const pitch = this.tween ? this.tween.toPitch : this.pitch;
    this.tweenTo(base + delta, pitch, duration);
  }

  // Jumps straight back (leaving the scene).
  snap() { this.yaw = 0; this.pitch = 0; this.vyaw = 0; this.vpitch = 0; this.tween = null; this.dragging = false; this.samples.length = 0; }
}
