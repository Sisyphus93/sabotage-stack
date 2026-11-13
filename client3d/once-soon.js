// "Do this once, soon": request() as often as you like (every frame, even) and the work runs once, `delay` ms after the FIRST
// request that found nothing pending. Requests made while one is pending change nothing.
//
// This is deliberately not a debounce. A debounce restarts its timer on every request, so when requests arrive every frame
// (16 ms) and the delay is longer than that (160 ms), it never fires at all; the page's sabotage icons were baked from the 3D
// models this way and stayed flat on every display fast enough to draw a frame every 16 ms. No DOM, no three.js.
export function createOnceSoon(work, delay, timers = { set: (fn, ms) => setTimeout(fn, ms), clear: id => clearTimeout(id) }) {
  let handle = null;
  return {
    // true when this request scheduled the work, false when one was already waiting
    request() {
      if (handle !== null) return false;
      handle = timers.set(() => { handle = null; work(); }, delay);
      return true;
    },
    // forget a waiting request (the work never runs); a later request() schedules afresh
    cancel() { if (handle !== null) { timers.clear(handle); handle = null; } },
    get pending() { return handle !== null; },
  };
}
