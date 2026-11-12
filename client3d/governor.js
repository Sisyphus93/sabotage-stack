// Adaptive quality: measures real frame times and trades resolution for smoothness before it trades features.
// Pure state machine (no DOM, no three.js): feed it one frame time at a time, apply the action it returns.
//
//  - nothing happens during warm-up (shader compilation and first uploads are not the steady state)
//  - decisions use a trimmed mean of 50 frames, so a few hitches never count
//  - slow: lower the render scale first, then drop a tier; one step per cooldown
//  - fast (only reachable on high-refresh screens, since 60 Hz caps frames at 16.7 ms): after several fast windows raise the scale, then the tier
//  - a tier that proved too heavy is never tried again in the same session, so the quality can only settle, never oscillate
export class Governor {
  constructor({ tierCount, tier = 0, scale = 1, minScale = 0.65, warmup = 3000, cooldown = 2500, slowMs = 26, fastMs = 14.5, windowSize = 50, upWindows = 4, ignoreAbove = 250 } = {}) {
    Object.assign(this, { tierCount, tier, scale, minScale, warmup, cooldown, slowMs, fastMs, windowSize, upWindows, ignoreAbove });
    this.frames = []; this.startedAt = null; this.lastChange = -Infinity; this.fastWindows = 0; this.blockedTier = Infinity;
  }

  // dtMs: duration of the frame that just finished; now: any monotonic clock in ms. Returns null or an action the caller must apply:
  //   { type: 'scale', scale }            -> set the render scale
  //   { type: 'tier', tier, scale }       -> switch tier, then set the scale
  update(dtMs, now) {
    if (!(dtMs > 0) || dtMs > this.ignoreAbove) return null;
    if (this.startedAt == null) this.startedAt = now;
    if (now - this.startedAt < this.warmup) return null;
    this.frames.push(dtMs);
    if (this.frames.length < this.windowSize) return null;
    const sorted = this.frames.slice().sort((a, b) => a - b); this.frames.length = 0;
    const trim = Math.floor(sorted.length * 0.1); const core = sorted.slice(trim, sorted.length - trim);
    const avg = core.reduce((sum, v) => sum + v, 0) / core.length;
    if (now - this.lastChange < this.cooldown) return null;
    if (avg > this.slowMs) {
      this.fastWindows = 0;
      if (this.scale > this.minScale + 0.05) { this.lastChange = now; this.scale = Math.max(this.minScale, +(this.scale - 0.12).toFixed(2)); return { type: 'scale', scale: this.scale }; }
      if (this.tier > 0) { this.lastChange = now; this.blockedTier = Math.min(this.blockedTier, this.tier); this.tier -= 1; this.scale = 1; return { type: 'tier', tier: this.tier, scale: 1 }; }
      return null;
    }
    if (avg < this.fastMs) {
      this.fastWindows += 1;
      if (this.fastWindows < this.upWindows) return null;
      this.fastWindows = 0;
      if (this.scale < 1) { this.lastChange = now; this.scale = Math.min(1, +(this.scale + 0.12).toFixed(2)); return { type: 'scale', scale: this.scale }; }
      if (this.tier + 1 < this.tierCount && this.tier + 1 < this.blockedTier) { this.lastChange = now; this.tier += 1; this.scale = 0.88; return { type: 'tier', tier: this.tier, scale: 0.88 }; }
      return null;
    }
    this.fastWindows = 0;
    return null;
  }
}
