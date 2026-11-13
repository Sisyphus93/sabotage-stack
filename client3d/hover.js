// How "awake" the home scene is while the pointer is over it. A pure state machine (no DOM, no three.js).
//
// The stage feeds it, once per frame, where the pointer is in world space (or null when it is not over the scene) and how fast
// it is moving. Everything that reacts to hovering reads the same numbers, so the letters, the crowd, the tower, the camera and
// the sparkle trail always agree on how much attention the scene is paying you:
//
//   energy  0..1   eases up while you hover, eases down more slowly after you leave
//   x, y, z        the pointer position, smoothed (what things lean towards)
//   dwell   s      how long the pointer has hovered almost still (a patient pointer is rewarded)
//   entered        true for the single frame the pointer arrives; enterX says from which side
import { clamp, damp } from './util.js';

export class HoverField {
  constructor() {
    this.energy = 0; this.x = 0; this.y = 0; this.z = 0; this.dwell = 0; this.inside = false;
    this.entered = false; this.enterX = 0; this.sparkCarry = 0;
  }

  // point: { x, y, z? } in world units or null; speed: pointer speed in px/s; blocked: dragging, or over a button / panel.
  update(dt, { point = null, speed = 0, blocked = false, reduced = false } = {}) {
    if (!(dt > 0)) return this;
    dt = Math.min(dt, 0.1);
    const active = Boolean(point) && !blocked;
    this.entered = false;
    if (active && !this.inside) { this.entered = true; this.enterX = point.x; this.x = point.x; this.y = point.y; this.z = point.z || 0; }
    this.inside = active;
    this.energy = damp(this.energy, active ? 1 : 0, active ? 6 : 2.4, dt);
    if (this.energy < 0.002 && !active) this.energy = 0;
    if (active) {
      const k = reduced ? 30 : 13; this.x = damp(this.x, point.x, k, dt); this.y = damp(this.y, point.y, k, dt); this.z = damp(this.z, point.z || 0, k, dt);
      this.dwell = speed < 140 ? Math.min(6, this.dwell + dt) : Math.max(0, this.dwell - dt * 3);
    } else this.dwell = 0;
    return this;
  }

  // How many sparkles the trail should emit this frame: none for a still pointer, a stream for a fast one.
  sparks(dt, speed, reduced = false) {
    if (reduced || !this.inside || !(dt > 0)) { this.sparkCarry = 0; return 0; }
    const rate = clamp((speed - 90) / 900, 0, 1) * 70; // sparkles per second
    this.sparkCarry += rate * Math.min(dt, 0.1);
    const count = Math.min(4, Math.floor(this.sparkCarry)); this.sparkCarry -= Math.floor(this.sparkCarry);
    return count;
  }
}

// Where is a world point relative to the pointer, measured across the screen (in world units, at the pointer's depth)?
// frame: { point, right, up }, the pointer's position on a camera-facing plane and that plane's two axes. Measuring across the
// screen rather than across the scene keeps every proximity effect right however far the view has been orbited.
// Positive dx: the point is to the right of the pointer on screen; positive dy: above it.
export function offsetFromPointer(frame, x, y, z, out = { dx: 0, dy: 0 }) {
  const rx = x - frame.point.x; const ry = y - frame.point.y; const rz = z - frame.point.z; const r = frame.right; const u = frame.up;
  out.dx = rx * r.x + ry * r.y + rz * r.z; out.dy = rx * u.x + ry * u.y + rz * u.z;
  return out;
}
