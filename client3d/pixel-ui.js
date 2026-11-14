// The pixel-grid feel of the page's own UI, the DOM half (the stepped hovers themselves are CSS under html.has-3d; the logic is in the pure
// modules next to this one). Installed from index.js beside tactile.js and icon-turn.js and disposed with them. Plain DOM, no three.js, and safe
// where there is no canvas at all (jsdom, getContext() === null): the effects that need one simply do not happen.
//
//  1. a snapped 16 x 16 cursor trail on one fixed, click-through canvas (pixel-trail.js), mouse only, menu screens only
//  2. the colours a hovered player row floods with (CSS cannot read a child's inline colour), and the hovers that reach the 3D layer
//  3. the wordmark's pixel jitter: the text becomes a few <rect>s for three ticks and comes back
//  4. which vote row the pointer (or the keyboard) is on, told to the stage so the candidate's sculpture can play its palette wave
//  5. a primary menu button under the pointer, told to the stage so the backdrop pattern can tick
//
// Input is never touched: every listener is passive, nothing is prevented, nothing captures the pointer, the overlay is pointer-events: none,
// and nothing here reacts while a mouse button is down. Reduced Motion (html[data-motion="reduced"]) is read at the moment of use, not at install.
import { TrailModel } from './pixel-trail.js';
import { isMenuContext } from './pixel-gate.js';
import { normalizeTheme } from './palette.js';
import { parseColor, readableOn, TEXT_COLORS } from './pixel-contrast.js';
import { coarseRects, cellFor, jitterOffsets, parseShadow, JITTER } from './pixel-wordmark.js';

const SVG_NS = 'http://www.w3.org/2000/svg';
const TEXT_INPUT = 'input:not([type]), input[type="text"], input[type="search"], input[type="email"], input[type="url"], input[type="tel"], input[type="password"], input[type="number"], textarea';
export const NO_TRAIL = `[data-no-trail], select, ${TEXT_INPUT}, [contenteditable=""], [contenteditable="true"]`;
const PLAYER_ROW = '.room-player-list li';

// hover / now / hooks / rng / timers are for the page's own wiring and for tests: whether this device has hover (default: it is not touch-first), a clock in ms,
// what to tell the stage ({ onVoteHover(index), onPrimaryHover() }), a random source, and the scheduler ({ set(fn, ms) -> id, clear(id) }) for the jitter's ticks.
export function installPixelUi({ doc = document, win = window, hover, now, hooks = {}, rng = Math.random, timers } = {}) {
  const root = doc.documentElement;
  // anything but a touch-first device (a finger has no hover); injectable because the test page's matchMedia says no to everything
  const canHover = hover !== undefined ? Boolean(hover) : !(win.matchMedia && win.matchMedia('(pointer: coarse)').matches);
  const clock = typeof now === 'function' ? now : () => win.performance.now();
  const reduced = () => root.dataset.motion === 'reduced';
  const theme = () => normalizeTheme(root.dataset.theme);
  const hostView = () => { const host = win.SabotageStackHost; try { return host && typeof host.view === 'function' ? host.view() : null; } catch (_) { return null; } };
  const menu = () => isMenuContext(hostView() || { screen: doc.body && doc.body.dataset ? doc.body.dataset.screen : 'title' });
  const everyMs = (fn, ms) => (timers && timers.set ? timers.set(fn, ms) : win.setInterval(fn, ms)); const stopEvery = id => (timers && timers.clear ? timers.clear(id) : win.clearInterval(id));
  const mouseLike = event => !event.pointerType || event.pointerType === 'mouse';
  const within = (el, selector) => (el && el.closest ? el.closest(selector) : null);
  const entered = (event, el) => !(event.relatedTarget && el.contains && el.contains(event.relatedTarget)); // mouseenter, from a delegated pointerover

  // ---- 1. the cursor trail ----------------------------------------------------------------------------------------------------
  const trail = new TrailModel(); let canvas = null; let ctx = null; let raf = 0; let trailOk = true;
  const trailHost = () => doc.fullscreenElement || doc.querySelector('dialog[open]') || doc.body; // what is on screen: the fullscreen element, a modal's top layer, or the page
  function ensureCanvas() {
    if (!trailOk) return false;
    if (!canvas) {
      const c = doc.createElement('canvas'); const g = c.getContext ? c.getContext('2d') : null;
      if (!g) { trailOk = false; return false; } // no 2D canvas here (jsdom): no trail
      c.className = 'pixel-trail'; c.setAttribute('aria-hidden', 'true'); c.setAttribute('data-no-trail', ''); c.style.pointerEvents = 'none'; canvas = c; ctx = g;
    }
    const host = trailHost(); if (canvas.parentNode !== host) host.appendChild(canvas);
    return true;
  }
  function paint(rects) {
    if (!canvas || !ctx) return;
    const dpr = Math.max(1, Number(win.devicePixelRatio) || 1); const w = Math.round((win.innerWidth || 0) * dpr); const h = Math.round((win.innerHeight || 0) * dpr);
    if (canvas.width !== w) canvas.width = w; if (canvas.height !== h) canvas.height = h;
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.imageSmoothingEnabled = false; ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const r of rects) { // whole device pixels, edges rounded so neighbouring squares never leave a seam
      const x0 = Math.round(r.x * dpr); const y0 = Math.round(r.y * dpr); const x1 = Math.round((r.x + r.w) * dpr); const y1 = Math.round((r.y + r.h) * dpr);
      ctx.fillStyle = r.color; ctx.fillRect(x0, y0, Math.max(1, x1 - x0), Math.max(1, y1 - y0));
    }
  }
  function draw() {
    raf = 0; if (!canvas) return;
    const t = clock(); const off = reduced() || !menu();
    if (off) trail.clear(); else trail.prune(t);
    paint(off ? [] : trail.rects(t));
    if (!off && trail.cells.length) raf = win.requestAnimationFrame(draw); // the loop sleeps as soon as nothing is alive
  }
  const wake = () => { if (!raf) raf = win.requestAnimationFrame(draw); };

  // ---- 4. the vote row under the pointer / the keyboard focus, for the palette wave ---------------------------------------------
  let pointerVote = -1; let focusVote = -1; let toldVote = -1;
  const tellVote = () => { const index = pointerVote >= 0 ? pointerVote : focusVote; if (index !== toldVote) { toldVote = index; if (hooks.onVoteHover) hooks.onVoteHover(index); } };
  const voteIndex = el => { const row = within(el, '.vote-option'); if (!row || row.disabled) return -1; const n = Number(row.dataset.optionIndex); return Number.isInteger(n) ? n : -1; };

  const onMove = event => {
    if (!mouseLike(event)) return;
    if (canHover) { pointerVote = voteIndex(event.target); tellVote(); } // the wave does not wait for a menu screen: a vote only exists in a round
    if (!canHover || event.buttons || reduced() || !menu()) return; // no trail with a button held (a turn or a drop is under way), under Reduced Motion, or in a live round
    if (within(event.target, NO_TRAIL)) return;
    if (!ensureCanvas()) return;
    if (trail.push(event.clientX, event.clientY, clock(), theme())) wake();
  };
  const onLeave = () => { pointerVote = -1; tellVote(); };

  // ---- 2. rows that flood with a player's colour ---------------------------------------------------------------------------------
  const painted = new Set();
  function paintRow(row) {
    const dot = row.querySelector('.player-color-dot'); if (!dot) return;
    const bg = win.getComputedStyle(dot).backgroundColor; const rgb = parseColor(bg); if (!rgb) return;
    const key = `${bg}|${theme()}`; if (row.dataset.floodKey === key) return;
    const text = TEXT_COLORS[theme()];
    row.style.setProperty('--row-accent', bg); row.style.setProperty('--row-fg', readableOn(rgb, text.light, text.dark));
    row.dataset.floodKey = key; painted.add(row);
  }

  // ---- 3. the wordmark -------------------------------------------------------------------------------------------------------------
  let cache = null; const jitter = { timer: 0, brand: null, svg: null, tick: 0, main: [], shade: [], rects: [], cell: 1, shadow: null };
  function rasterize(word) {
    const cs = win.getComputedStyle(word); const raw = word.textContent || ''; const text = cs.textTransform === 'uppercase' ? raw.toUpperCase() : raw;
    const box = word.getBoundingClientRect(); const w = Math.ceil(box.width); const h = Math.ceil(box.height);
    if (!text.trim() || !(w > 0 && h > 0)) return null; // display: none on a phone, or nothing to show
    const font = `${cs.fontStyle || 'normal'} ${cs.fontWeight || '400'} ${cs.fontSize || '16px'} ${cs.fontFamily || 'sans-serif'}`;
    if (doc.fonts && typeof doc.fonts.check === 'function') { try { if (!doc.fonts.check(font, text)) return null; } catch (_) { /* odd font strings: draw anyway */ } } // wait for the theme's own face, never draw its fallback
    const key = [theme(), font, cs.letterSpacing, cs.textTransform, cs.color, cs.textShadow, text, w, h].join('|');
    if (cache && cache.key === key) return cache;
    const c = doc.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext ? c.getContext('2d', { willReadFrequently: true }) : null;
    if (!g) return null; // no 2D canvas: no jitter
    g.font = font; if ('letterSpacing' in g && cs.letterSpacing && cs.letterSpacing !== 'normal') g.letterSpacing = cs.letterSpacing;
    g.fillStyle = '#000'; g.textAlign = 'left'; g.textBaseline = 'alphabetic';
    const m = g.measureText(text); const fontPx = parseFloat(cs.fontSize) || 16;
    const baseline = Number.isFinite(m.fontBoundingBoxAscent) && Number.isFinite(m.fontBoundingBoxDescent) ? (h - (m.fontBoundingBoxAscent + m.fontBoundingBoxDescent)) / 2 + m.fontBoundingBoxAscent : h / 2 + fontPx * 0.35;
    g.fillText(text, 0, baseline);
    const cell = cellFor(fontPx); const grid = coarseRects(g.getImageData(0, 0, w, h).data, w, h, cell);
    if (!grid.rects.length) return null;
    cache = { key, w, h, cell, rects: grid.rects, color: cs.color, shadow: parseShadow(cs.textShadow) };
    return cache;
  }
  function place(offsets) {
    const { cell, rects, shadow, main, shade } = jitter;
    for (let i = 0; i < rects.length; i += 1) {
      const x = (rects[i].gx + offsets.dx[i]) * cell; const y = (rects[i].gy + offsets.dy[i]) * cell;
      main[i].setAttribute('x', x); main[i].setAttribute('y', y);
      if (shadow) { shade[i].setAttribute('x', x + shadow.x); shade[i].setAttribute('y', y + shadow.y); }
    }
  }
  function endJitter() {
    if (jitter.timer) stopEvery(jitter.timer); jitter.timer = 0;
    if (jitter.svg) jitter.svg.remove();
    if (jitter.brand) jitter.brand.classList.remove('is-pixelating');
    jitter.svg = null; jitter.brand = null; jitter.main = []; jitter.shade = []; jitter.rects = [];
  }
  function startJitter(brand) {
    if (jitter.brand || !canHover || reduced() || !menu()) return; // ignore re-entry while it runs
    const word = brand.querySelector('.brand-word'); if (!word) return;
    const data = rasterize(word); if (!data) return;
    const at = brand.getBoundingClientRect(); const wb = word.getBoundingClientRect();
    const svg = doc.createElementNS(SVG_NS, 'svg'); svg.setAttribute('class', 'brand-pixels'); svg.setAttribute('aria-hidden', 'true'); svg.setAttribute('focusable', 'false'); svg.setAttribute('shape-rendering', 'crispEdges');
    svg.setAttribute('viewBox', `0 0 ${data.w} ${data.h}`); svg.setAttribute('width', String(data.w)); svg.setAttribute('height', String(data.h));
    Object.assign(svg.style, { position: 'absolute', left: `${Math.round(wb.left - at.left)}px`, top: `${Math.round(wb.top - at.top)}px`, pointerEvents: 'none', overflow: 'visible', color: data.color });
    const group = (fill, list) => { const g = doc.createElementNS(SVG_NS, 'g'); for (const r of data.rects) { const e = doc.createElementNS(SVG_NS, 'rect'); e.setAttribute('width', String(data.cell)); e.setAttribute('height', String(data.cell)); e.setAttribute('fill', fill); e.setAttribute('x', String(r.gx * data.cell)); e.setAttribute('y', String(r.gy * data.cell)); g.appendChild(e); list.push(e); } svg.appendChild(g); };
    Object.assign(jitter, { brand, svg, tick: 0, main: [], shade: [], rects: data.rects, cell: data.cell, shadow: data.shadow });
    if (data.shadow) group(data.shadow.color, jitter.shade); // the hard text shadow of the pixel themes, kept so the swap does not lose it
    group('currentColor', jitter.main);
    brand.classList.add('is-pixelating'); brand.appendChild(svg);
    jitter.timer = everyMs(() => {
      jitter.tick += 1; place(jitterOffsets(jitter.tick, jitter.rects.length, rng));
      if (jitter.tick >= JITTER.ticks) endJitter(); // the last tick has put every rect back exactly; now the real text returns
    }, JITTER.intervalMs);
  }

  // ---- the delegated pointer / focus events -------------------------------------------------------------------------------------------
  const onOver = event => {
    if (!mouseLike(event) || !canHover) return;
    const target = event.target; if (!target || !target.closest) return;
    const row = target.closest(PLAYER_ROW); if (row) paintRow(row); // hover flood: the row's own colour (CSS does the rest, and works during play)
    const brand = target.closest('.brand'); if (brand && entered(event, brand)) startJitter(brand);
    const primary = target.closest('.button-primary'); if (primary && !primary.disabled && entered(event, primary) && !reduced() && menu() && hooks.onPrimaryHover) hooks.onPrimaryHover();
  };
  const onFocusIn = event => {
    const target = event.target; if (!target || !target.closest) return;
    const brand = target.closest('.brand'); if (brand) startJitter(brand);
    const index = voteIndex(target); if (index < 0) return;
    let visible = true; try { visible = target.matches(':focus-visible'); } catch (_) { /* no :focus-visible: treat it as keyboard focus */ }
    if (visible) { focusVote = index; tellVote(); } // a click leaves focus behind on the row; only the keyboard counts as "on" it
  };
  const onFocusOut = event => { if (voteIndex(event.target) >= 0 || focusVote >= 0) { focusVote = -1; tellVote(); } };
  const onResize = () => { if (canvas && trail.cells.length) wake(); };
  const onFullscreen = () => { if (canvas && canvas.parentNode) { const host = trailHost(); if (canvas.parentNode !== host) host.appendChild(canvas); } };

  const passive = { passive: true };
  win.addEventListener('pointermove', onMove, passive); win.addEventListener('resize', onResize, passive);
  doc.addEventListener('pointerover', onOver, passive); doc.addEventListener('focusin', onFocusIn, passive); doc.addEventListener('focusout', onFocusOut, passive);
  doc.addEventListener('fullscreenchange', onFullscreen, passive); root.addEventListener('pointerleave', onLeave, passive);
  // the theme's own face may still be loading at install: warm the wordmark once it is there, so the first hover is not the one that waits
  if (doc.fonts && doc.fonts.ready && typeof doc.fonts.ready.then === 'function') doc.fonts.ready.then(() => { const word = doc.querySelector('.brand-word'); if (word && canHover) { try { rasterize(word); } catch (_) { /* warm-up only */ } } }, () => {});

  return {
    get trailActive() { return trailOk && canHover && !reduced() && menu(); }, // the stage drops its own sparkle stream while this is true: one trail, not two
    get canvas() { return canvas; },
    get jittering() { return Boolean(jitter.brand); },
    trail,
    dispose() {
      win.removeEventListener('pointermove', onMove); win.removeEventListener('resize', onResize);
      doc.removeEventListener('pointerover', onOver); doc.removeEventListener('focusin', onFocusIn); doc.removeEventListener('focusout', onFocusOut);
      doc.removeEventListener('fullscreenchange', onFullscreen); root.removeEventListener('pointerleave', onLeave);
      if (raf) win.cancelAnimationFrame(raf); raf = 0; trail.clear(); if (canvas) canvas.remove(); canvas = null; ctx = null;
      endJitter(); cache = null;
      for (const row of painted) { row.style.removeProperty('--row-accent'); row.style.removeProperty('--row-fg'); delete row.dataset.floodKey; } painted.clear();
      pointerVote = -1; focusVote = -1; tellVote();
    }
  };
}
