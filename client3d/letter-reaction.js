// The title's letter reaction to the pointer, the pure half (no DOM, no three.js): its numbers live here, the springs in title-stack.js.
//
// This is the smooth layer of the title's pointer reaction, and it is deliberately NOT stepped: each letter near the pointer leans away from
// it, sinks back a hair (a "push") and swells a little, and a letter hops when the pointer sweeps past it fast. Every letter is on its own
// damped spring, so the motion glides and settles. The brick scatter (brick-scatter.js) is the stepped detail layer on top.
import { smoothstep } from './util.js';

export const LETTER_REACTION = Object.freeze({
  strength: 1,        // ONE constant for the whole letter reaction: 0 is off, 1 as restored, 2 twice as much (the brick scatter is not scaled)
  near: 190,          // across the screen: a letter reacts within this distance of the pointer, fading to nothing by 0 (smoothstep)
  lean: -0.16,        // rz (rad) at full `near`: the letter tips sideways, away from the pointer
  sink: -0.1,         // rx (rad) at full `near`: it tips back a little, so the wall opens towards the pointer
  push: 4,            // times that sink, this drops the letter (l.y += push * 0.4)
  swell: 0.05,        // the letter grows by this much (5 %) right under the pointer
  hopSpeed: 700,      // a pointer faster than this (px/s) over a letter near it makes that letter hop
  hopNear: 0.55,      // ...only this near (how close, 1 = under the pointer)
  hopMin: 170,        // the hop's velocity, px/s: hopMin + pointer speed * hopSpeedGain
  hopSpeedGain: 0.05,
  hopMax: 420,
  hopKick: 2.4,       // the slant a hop kicks in (rad/s, added to the letter's vrz)
  spring: 150,        // k / c of the lean (rz, rad) and sink (rx, rad) springs
  damping: 10,
  swellDamp: 12,      // the swell's spring (a plain damp(), not a spring)
  hopGravity: 2400,   // px/s^2 pulling a hopping letter back down
  hopBounce: 0.3,     // ...and how much of the fall it gives back (a second, smaller hop)
  hopBounceMin: 160,  // a fall slower than this just stops
  breatheAmp: 0.8,    // px: the idle breathing (off under Reduced Motion)
  rippleAmp: 2.4      // px times the HoverField's energy: the "awake" ripple that runs through the letters
});

// Below this `near`, a letter's legs of the ripple are under a third of a pixel and a brick of it within reach of the pointer is rare: the
// scatter skips the letter (title-stack.js scatterTick).
export const LITTLE = 0.15;


const TAU = Math.PI * 2;
const wrap = a => { const q = a / TAU; return (q - Math.floor(q)) * TAU; }; // 0..2π

// What one letter's reaction needs this frame, for all the letters at once. Nothing at all under Reduced Motion or with no pointer: every
// target is 0, so the springs simply settle and sleep.
// letters: anything with cx, seed, tier, rippleBase and rippleIndex. frame: the pointer's { point, right, up } or null. centers(i) -> where
// letter i's centre is now, its tier transform included, as [x, y, z]. opts: { pointerSpeed, energy, reduced, strength } from update().
// Adds to each letter: tz (target lean), tx (target sink), push, swellTarget, breathe (px) and ripple (px, times the energy).
export function sampleLetters(letters, frame, centers, { pointerSpeed = 0, energy = 0, reduced = false, strength = LETTER_REACTION.strength, near = null, t = 0 } = {}) {
  const R = LETTER_REACTION; const n = letters.length;
  const react = Boolean(frame) && !reduced && strength > 0;
  const px = react ? frame.point.x : 0; const py = react ? frame.point.y : 0; const pz = react ? frame.point.z : 0;
  const rx = react ? frame.right.x : 0; const ry = react ? frame.right.y : 0; const rz = react ? frame.right.z : 0; // (unit axes: a vector difference gives the dots)
  const ux = react ? frame.up.x : 0; const uy = react ? frame.up.y : 0; const uz = react ? frame.up.z : 0;
  if (near) for (let i = 0; i < n; i += 1) near[i] = 0;
  for (let i = 0; i < n; i += 1) {
    const l = letters[i]; l.tz = 0; l.tx = 0; l.push = 0; l.swellTarget = 0;
    if (react) {
      const c = centers(i); const vx = c[0] - px; const vy = c[1] - py; const vz = c[2] - pz;
      const dx = vx * rx + vy * ry + vz * rz; const dy = vx * ux + vy * uy + vz * uz; // across the screen, exactly as offsetFromPointer
      const k = smoothstep(R.near, 0, Math.sqrt(dx * dx + dy * dy)); if (near) near[i] = k;
      if (k > 0) {
        const dir = dx >= 0 ? 1 : -1; // it leans off the pointer: -sign(dx), the old -Math.sign(off.dx || 1)
        l.tz = -dir * k * R.lean * strength; l.tx = -k * R.sink * strength;
        l.push = k * (1 + pointerSpeed * 0.01) * R.push * strength; l.swellTarget = k * R.swell * strength;
        if (k > R.hopNear && pointerSpeed > R.hopSpeed && l.vhop <= 0 && l.hop < 0.5) { // a fast sweep past a letter near the pointer: it hops
          l.vhop = Math.min(R.hopMax, R.hopMin + pointerSpeed * R.hopSpeedGain); l.vrz += -dir * R.hopKick * strength;
        }
      }
    }
    // the idle breathing and the awake ripple, as they always were: one sin and one cos a letter (the coefficients depend on the frame's time,
    // which is why they are read here, once, together with the pointer's)
    l.breathe = reduced ? 0 : Math.round(R.breatheAmp * Math.sin(1.4 * t + l.seed) * 20) / 20; // (0.8 px, in steps of 0.05: under a tenth of a pixel, and it is what lets an idle letter sleep)
    l.ripple = reduced ? 0 : Math.round(energy * R.rippleAmp * (0.5 + 0.5 * Math.sin(4.6 * t - 0.013 * l.cx + 1.3 * l.tier)) * 200) / 200;
  }
}
