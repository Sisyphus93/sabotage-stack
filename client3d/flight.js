// Camera flights: moving between screens is a flight through the same world, not a cut. These are the pure rules (no three.js):
// how long each change takes and how far the camera pulls back and rises on the way, and the blend itself, which carries a
// camera "spec" (what it looks at, where that lands on the screen, how close it is, and its angles) from where the previous screen
// had it to where the new one wants it.
import { clamp, lerp, easeInOutCubic, TAU } from './util.js';

// per change: seconds, how far the camera pulls back (negative: dives in) and rises (pitch, radians) at the middle of the flight, and
// how far the point it looks at lifts
export const FLIGHTS = Object.freeze({
  'hero>play': { dur: 1.7, pull: -0.12, rise: 0.17, lift: 30 }, 'hero>arena': { dur: 1.7, pull: 0.06, rise: 0.15, lift: 40 }, 'hero>lobby': { dur: 1.6, pull: 0.1, rise: 0.12, lift: 60 },
  'play>results': { dur: 1.4, pull: 0.14, rise: 0.05, lift: 0 }, 'results>play': { dur: 1.25, pull: 0.08, rise: 0.04, lift: 0 },
  'results>hero': { dur: 1.9, pull: 0.2, rise: 0.15, lift: 110 }, 'play>hero': { dur: 1.9, pull: 0.2, rise: 0.15, lift: 110 }, 'lobby>hero': { dur: 1.7, pull: 0.16, rise: 0.12, lift: 80 },
  default: { dur: 1.35, pull: 0.12, rise: 0.08, lift: 40 }
});
export const flightFor = (from, to) => FLIGHTS[`${from}>${to}`] || FLIGHTS.default;

// the shortest way round
export function angleLerp(a, b, t) { let d = (b - a) % TAU; if (d > Math.PI) d -= TAU; else if (d < -Math.PI) d += TAU; return a + d * t; }

// spec: { ax, ay, az, sx, sy, ppu, yaw, pitch, roll }. k: 0..1 how far the flight has come. At 0 it is `from`, at 1 exactly `to`; in between it
// eases, and the sin arc pulls the camera back and lifts it, so the move reads as travelling.
export function blendSpec(from, to, k, { pull = 0, rise = 0, lift = 0 } = {}) {
  const t = clamp(k); const e = easeInOutCubic(t); const arc = Math.sin(Math.PI * t);
  return {
    ax: lerp(from.ax, to.ax, e), ay: lerp(from.ay, to.ay, e) + lift * arc, az: lerp(from.az, to.az, e),
    sx: lerp(from.sx, to.sx, e), sy: lerp(from.sy, to.sy, e),
    ppu: Math.exp(lerp(Math.log(from.ppu), Math.log(to.ppu), e)) / Math.max(0.3, 1 + pull * arc),
    yaw: angleLerp(from.yaw, to.yaw, e), pitch: lerp(from.pitch, to.pitch, e) + rise * arc, roll: lerp(from.roll, to.roll, e)
  };
}
