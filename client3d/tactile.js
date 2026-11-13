// The tactile UI's behaviour (the keycap look itself is CSS, under html.has-3d):
//  * a key on the keyboard presses the key on the screen that is named after it: Space sinks the DROP bar, 1 / 2 / 3 sink the vote
//    keys, for as long as the finger holds them down (the layer adds and removes .is-pressed; the page's own handling is untouched)
//  * the frosted decks (the menu, every side card, the results cards) tilt a couple of degrees towards the pointer while it is over
//    them, like a pane hanging in the air, and settle back to their resting pose (turned slightly inward, see the CSS) when it leaves.
//    The tilt is written to --tx / --ty (degrees) so it adds to that resting angle instead of replacing the card's transform.
// Plain DOM, no three.js. Reduced Motion (the page's html[data-motion="reduced"]) and touch-first devices get no tilt at all.
const DECKS = '.home-copy, .side-card, .result-info, .multiplayer-results, .preview-card';
const VOTE_KEYS = { Digit1: 0, Numpad1: 0, Digit2: 1, Numpad2: 1, Digit3: 2, Numpad3: 2 };
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

export function installTactileUi({ doc = document, win = window, maxTilt = 2.2, hover } = {}) {
  const root = doc.documentElement;
  const reduced = () => root.dataset.motion === 'reduced';
  // anything but a touch-first device (a finger has no hover; touch events are ignored below as well)
  const canHover = hover !== undefined ? Boolean(hover) : !(win.matchMedia && win.matchMedia('(pointer: coarse)').matches);

  // ---- keys
  const pressed = new Set();
  const typing = el => Boolean(el) && (/^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName) || Boolean(el.isContentEditable));
  const press = el => { if (el && !el.disabled) { el.classList.add('is-pressed'); pressed.add(el); } };
  const releaseAll = () => { for (const el of pressed) el.classList.remove('is-pressed'); pressed.clear(); };
  const isVoteKey = code => Object.prototype.hasOwnProperty.call(VOTE_KEYS, code);
  const onKeyDown = event => {
    if (event.repeat || doc.body.dataset.screen !== 'game' || typing(event.target)) return;
    if (event.code === 'Space') press(doc.getElementById('drop-button'));
    else if (isVoteKey(event.code)) press(doc.querySelector(`.vote-option[data-option-index="${VOTE_KEYS[event.code]}"]`));
  };
  const onKeyUp = event => { if (event.code === 'Space' || isVoteKey(event.code)) releaseAll(); };

  // ---- decks
  const tilt = { el: null, rx: 0, ry: 0, tx: 0, ty: 0, raf: 0 };
  const flat = el => { if (el) { el.style.removeProperty('--tx'); el.style.removeProperty('--ty'); el.classList.remove('is-tilting'); } };
  const settle = () => {
    tilt.raf = 0; const el = tilt.el; if (!el) return;
    tilt.rx += (tilt.tx - tilt.rx) * 0.16; tilt.ry += (tilt.ty - tilt.ry) * 0.16;
    const home = tilt.tx === 0 && tilt.ty === 0 && Math.abs(tilt.rx) < 0.01 && Math.abs(tilt.ry) < 0.01;
    if (home) { tilt.rx = tilt.ry = 0; flat(el); tilt.el = null; return; }
    el.style.setProperty('--tx', tilt.rx.toFixed(3)); el.style.setProperty('--ty', tilt.ry.toFixed(3));
    tilt.raf = win.requestAnimationFrame(settle);
  };
  const wake = () => { if (!tilt.raf && tilt.el) tilt.raf = win.requestAnimationFrame(settle); };
  const level = () => { tilt.tx = 0; tilt.ty = 0; wake(); };
  const onMove = event => {
    if (!canHover || event.pointerType === 'touch') return;
    const deck = event.target && event.target.closest ? event.target.closest(DECKS) : null;
    if (!deck || reduced()) { level(); return; }
    if (tilt.el && tilt.el !== deck) { flat(tilt.el); tilt.rx = tilt.ry = 0; }
    const r = deck.getBoundingClientRect(); if (!(r.width > 0 && r.height > 0)) return;
    const nx = clamp((event.clientX - r.left) / r.width * 2 - 1, -1, 1); const ny = clamp((event.clientY - r.top) / r.height * 2 - 1, -1, 1);
    tilt.el = deck; deck.classList.add('is-tilting'); tilt.tx = -ny * maxTilt; tilt.ty = nx * maxTilt; wake();
  };
  const onLeave = () => level();

  win.addEventListener('keydown', onKeyDown); win.addEventListener('keyup', onKeyUp); win.addEventListener('blur', releaseAll);
  doc.addEventListener('pointermove', onMove); root.addEventListener('pointerleave', onLeave);
  return {
    get tilting() { return tilt.el; },
    dispose() {
      win.removeEventListener('keydown', onKeyDown); win.removeEventListener('keyup', onKeyUp); win.removeEventListener('blur', releaseAll);
      doc.removeEventListener('pointermove', onMove); root.removeEventListener('pointerleave', onLeave);
      if (tilt.raf) win.cancelAnimationFrame(tilt.raf); tilt.raf = 0; flat(tilt.el); tilt.el = null; releaseAll();
    }
  };
}
