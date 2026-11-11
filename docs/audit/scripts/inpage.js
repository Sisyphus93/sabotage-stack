// Functions injected into the audited page by Playwright. NOTHING here is written to the game repo.
// botInit runs via context.addInitScript (before page scripts). It only OBSERVES the game:
//  - wraps window.SabotageStackCore at assignment time so the audit can see the moving block and each placeDrop outcome
//  - wraps window.WebSocket so protocol traffic can be logged and a socket can be closed on demand
//  - records text changes in aria-live / role=status regions (what a screen reader would be offered)
//  - provides an optional auto-drop bot (off by default) that presses the real Drop button
exports.botInit = function botInit() {
  const st = window.__audit = {
    moving: null, below: { left: 80, right: 280 }, drops: [], mode: 'off', tol: 3, gap: 380, lastDropAt: 0, prev: null,
    youVotes: [], ws: [], recv: {}, recvMax: {}, sent: {}, log: [], live: [], t0: performance.now(), myId: null, lastState: null, keepLog: true
  };
  const T = () => Math.round(performance.now() - st.t0);
  try {
    Object.defineProperty(window, 'SabotageStackCore', {
      configurable: true, enumerable: true,
      get() { return st.core; },
      set(core) {
        const w = Object.assign({}, core);
        w.advanceMover = function (moving, dt, speed, mt, opts) {
          if (moving && !moving.decoy) { st.moving = moving; st.speed = speed; st.movedAt = performance.now(); }
          return core.advanceMover(moving, dt, speed, mt, opts);
        };
        w.recordVote = function (votes, event, valid) { if (event && event.voterId === 'you') st.youVotes.push({ t: T(), option: event.option }); return core.recordVote(votes, event, valid); };
        w.makeBase = function () { const b = core.makeBase(); st.below = b; return b; };
        w.placeDrop = function (below, moving, options) {
          const out = core.placeDrop(below, moving, options);
          st.drops.push({ t: T(), status: out.status, perfect: out.perfect, pw: options && options.perfectWindow,
            off: Math.round(((moving.left + moving.width / 2) - (below.left + below.right) / 2) * 10) / 10,
            w: out.placed ? Math.round(out.placed.width) : 0, speed: Math.round(st.speed || 0) });
          if (out.placed) st.below = out.placed;
          return out;
        };
        st.core = Object.freeze(w);
      }
    });
  } catch (e) { st.coreWrapError = String(e); }

  const RealWS = window.WebSocket;
  if (RealWS) {
    const Wrapped = function (url, protocols) {
      const ws = protocols ? new RealWS(url, protocols) : new RealWS(url);
      st.ws.push(ws);
      st.log.push({ t: T(), dir: 'ws', type: 'socket.new' });
      ws.addEventListener('open', () => st.log.push({ t: T(), dir: 'ws', type: 'socket.open' }));
      ws.addEventListener('close', ev => st.log.push({ t: T(), dir: 'ws', type: 'socket.close', code: ev.code }));
      ws.addEventListener('message', ev => {
        let m; try { m = JSON.parse(ev.data); } catch (_) { return; }
        const type = m.type; const size = ev.data.length;
        st.recv[type] = (st.recv[type] || 0) + 1;
        st.recvMax[type] = Math.max(st.recvMax[type] || 0, size);
        if (type === 'room.joined' || type === 'room.resumed') { if (m.playerId) st.myId = m.playerId; }
        const state = m.state || null;
        if (state) {
          st.lastState = state;
          const g = state.game;
          if (g && g.team && Array.isArray(g.team.stack) && g.team.stack.length) st.below = g.team.stack[g.team.stack.length - 1];
          if (g && Array.isArray(g.players) && st.myId) {
            const me = g.players.find(p => p.playerId === st.myId);
            if (me && Array.isArray(me.blocks) && me.blocks.length) st.below = me.blocks[me.blocks.length - 1];
          }
        }
        if (st.keepLog && type !== 'player.position' && type !== 'room.state' && type !== 'server.pong') {
          const e = { t: T(), dir: 'in', type };
          for (const k of ['code', 'playerId', 'id', 'targetPlayerId', 'winner', 'options', 'message', 'turnId', 'reason', 'ignored', 'collapsed', 'role', 'reducedMotion', 'height', 'score', 'dropsRemaining']) if (m[k] != null && k !== 'type') e[k] = m[k];
          if (type === 'vote.resolved' && m.outcome) e.counts = m.outcome.counts;
          if (type === 'vote.updated') e.counts = m.counts;
          if (st.log.length < 1500) st.log.push(e);
        }
      });
      const send = ws.send.bind(ws);
      ws.send = function (data) {
        try {
          const m = JSON.parse(data);
          st.sent[m.type] = (st.sent[m.type] || 0) + 1;
          if (m.type !== 'player.position' && m.type !== 'client.ping' && st.log.length < 1500) {
            const e = { t: T(), dir: 'out', type: m.type };
            for (const k of ['mode', 'code', 'name', 'option', 'auto', 'reducedMotion', 'turnId']) if (m[k] != null) e[k] = m[k];
            st.log.push(e);
          }
        } catch (_) {}
        return send(data);
      };
      return ws;
    };
    Wrapped.prototype = RealWS.prototype;
    for (const k of ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED']) Wrapped[k] = RealWS[k];
    window.WebSocket = Wrapped;
  }

  function watchLive() {
    const seen = new WeakMap();
    const record = el => {
      const text = (el.textContent || '').replace(/\s+/g, ' ').trim();
      if (seen.get(el) === text) return;
      seen.set(el, text);
      if (st.live.length < 4000) st.live.push({ t: T(), region: el.id || el.className || el.tagName, live: el.getAttribute('aria-live') || el.getAttribute('role'), hiddenAncestor: Boolean(el.closest('[aria-hidden="true"]')), text: text.slice(0, 160) });
    };
    const regions = Array.from(document.querySelectorAll('[aria-live], [role="status"], [role="alert"], [role="timer"]'));
    st.liveRegions = regions.map(el => ({ id: el.id || el.className, live: el.getAttribute('aria-live'), role: el.getAttribute('role'), atomic: el.getAttribute('aria-atomic') }));
    for (const el of regions) {
      new MutationObserver(() => record(el)).observe(el, { childList: true, characterData: true, subtree: true });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', watchLive); else watchLive();

  function tick() {
    requestAnimationFrame(tick);
    if (st.mode === 'off' || !st.moving || document.body.dataset.screen !== 'game') { st.prev = null; return; }
    const now = performance.now();
    if (now - (st.movedAt || 0) > 120) { st.prev = null; return; }
    const m = st.moving; const b = st.below; if (!b) return;
    const diff = (m.left + m.width / 2) - (b.left + b.right) / 2;
    const crossed = st.prev != null && Math.sign(st.prev) !== Math.sign(diff) && Math.abs(st.prev - diff) < 60;
    st.prev = diff;
    if (now - st.lastDropAt < st.gap) return;
    let go = false;
    if (st.mode === 'good') go = Math.abs(diff) <= st.tol || crossed;
    else if (st.mode === 'sloppy') go = Math.abs(Math.abs(diff) - (st.sloppyOffset || 14)) <= 4;
    else if (st.mode === 'miss') {
      const noOverlap = m.left > b.right + 3 || m.left + m.width < b.left - 3;
      const atEdge = m.left <= 3 || m.left >= 360 - m.width - 3;
      go = noOverlap || atEdge;
    }
    if (go) {
      st.lastDropAt = now; st.prev = null;
      const btn = document.getElementById('drop-button');
      if (btn) btn.dispatchEvent(new PointerEvent('pointerdown', { pointerType: 'mouse', button: 0, bubbles: true, cancelable: true }));
    }
  }
  requestAnimationFrame(tick);
};

// Runs via page.evaluate. Computes real text contrast from computed styles, target sizes, key element positions.
exports.measure = function measure() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 1;
  const cx = cv.getContext('2d', { willReadFrequently: true });
  const cache = new Map();
  const parse = s => {
    if (cache.has(s)) return cache.get(s);
    cx.clearRect(0, 0, 1, 1); cx.fillStyle = 'rgba(0,0,0,0)'; cx.fillStyle = s; cx.fillRect(0, 0, 1, 1);
    const d = cx.getImageData(0, 0, 1, 1).data; const a = d[3] / 255;
    const c = { r: d[0], g: d[1], b: d[2], a };
    cache.set(s, c); return c;
  };
  const blend = (top, under) => ({ r: top.r * top.a + under.r * (1 - top.a), g: top.g * top.a + under.g * (1 - top.a), b: top.b * top.a + under.b * (1 - top.a), a: 1 });
  const lum = c => { const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b); };
  const ratio = (a, b) => { const la = lum(a), lb = lum(b); return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05); };
  const hex = c => '#' + [c.r, c.g, c.b].map(v => Math.round(v).toString(16).padStart(2, '0')).join('');
  const sel = el => el.tagName.toLowerCase() + (el.id ? '#' + el.id : (el.classList.length ? '.' + Array.from(el.classList).slice(0, 2).join('.') : ''));
  const visible = el => {
    if (!el.getClientRects().length) return false;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || Number(cs.opacity) === 0) return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  };
  function bgOf(el) {
    const chain = []; for (let n = el; n && n.nodeType === 1; n = n.parentElement) chain.push(n);
    let col = { r: 255, g: 255, b: 255, a: 1 }; let img = false; let opacity = 1;
    for (const n of chain.reverse()) {
      const cs = getComputedStyle(n);
      const c = parse(cs.backgroundColor);
      if (c.a > 0) { col = blend(c, col); if (c.a >= 0.99) img = false; }
      if (cs.backgroundImage && cs.backgroundImage !== 'none') img = true;
      opacity *= Number(cs.opacity);
    }
    return { col, img, opacity };
  }
  const openDialog = document.querySelector('dialog[open]');
  const root = openDialog || document.body;
  const texts = []; let minFont = 999; let minFontSel = '';
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
  for (let el = walker.currentNode; el; el = walker.nextNode()) {
    if (['SCRIPT', 'STYLE', 'OPTION', 'SVG', 'PATH', 'USE', 'SYMBOL', 'DIALOG'].includes(el.tagName.toUpperCase()) && el !== root) { if (el.tagName === 'DIALOG') continue; }
    if (el.closest('svg') || el.closest('dialog:not([open])') || el.classList.contains('sr-only')) continue;
    let own = '';
    for (const n of el.childNodes) if (n.nodeType === 3) own += n.nodeValue;
    own = own.replace(/\s+/g, ' ').trim();
    if (!own || !visible(el)) continue;
    const cs = getComputedStyle(el);
    const { col: bg, img, opacity } = bgOf(el);
    const fgRaw = parse(cs.color);
    const fg = blend({ r: fgRaw.r, g: fgRaw.g, b: fgRaw.b, a: fgRaw.a * opacity }, bg);
    const size = parseFloat(cs.fontSize); const weight = parseInt(cs.fontWeight, 10) || 400;
    const large = size >= 24 || (size >= 18.66 && weight >= 700);
    const cr = ratio(fg, bg);
    const disabled = Boolean(el.closest('button:disabled, [aria-disabled="true"]'));
    if (size < minFont) { minFont = size; minFontSel = sel(el) + ' "' + own.slice(0, 24) + '"'; }
    texts.push({ sel: sel(el), text: own.slice(0, 40), fg: hex(fg), bg: hex(bg), cr: Math.round(cr * 100) / 100, size: Math.round(size * 10) / 10, weight, large, need: large ? 3 : 4.5, bgImage: img, disabled, family: cs.fontFamily.split(',')[0].replace(/["']/g, '').trim(), hiddenToAT: Boolean(el.closest('[aria-hidden="true"]')) });
  }
  const fails = texts.filter(t => t.cr < t.need).sort((a, b) => a.cr - b.cr);
  const small = texts.filter(t => t.size < 12).map(t => ({ sel: t.sel, text: t.text, size: t.size, family: t.family, cr: t.cr }));
  const targets = [];
  for (const el of root.querySelectorAll('button, a[href], input, select, summary, [role="button"], [tabindex="0"]')) {
    if (!visible(el) || el.closest('dialog:not([open])')) continue;
    const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
    targets.push({ sel: sel(el), w: Math.round(r.width), h: Math.round(r.height), touchAction: cs.touchAction, disabled: Boolean(el.disabled), label: (el.getAttribute('aria-label') || el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 30) });
  }
  const key = {};
  for (const id of ['game-canvas', 'drop-button', 'vote-card', 'effect-card', 'stats-card', 'multiplayer-card', 'dev-panel', 'theme-select', 'sound-toggle', 'menu-button', 'start-button', 'room-start-button']) {
    const el = document.getElementById(id);
    if (el && visible(el)) { const r = el.getBoundingClientRect(); key[id] = { x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height), inView: r.top >= 0 && r.bottom <= innerHeight + 1 && r.left >= 0 && r.right <= innerWidth + 1 }; }
  }
  const se = document.scrollingElement;
  const after = getComputedStyle(document.body, '::after');
  return {
    screen: document.body.dataset.screen || null, dialog: openDialog ? openDialog.id : null, vw: innerWidth, vh: innerHeight,
    textCount: texts.length, minFont, minFontSel, fails: fails.slice(0, 40), failCount: fails.length, small: small.slice(0, 30),
    targets, under44: targets.filter(t => t.w < 44 || t.h < 44), under24: targets.filter(t => t.w < 24 || t.h < 24),
    key, overflowX: se.scrollWidth > se.clientWidth + 1, scrollW: se.scrollWidth, scrollH: se.scrollHeight,
    grain: { content: after.content, opacity: after.opacity, blend: after.mixBlendMode, image: (after.backgroundImage || '').slice(0, 60), pointerEvents: after.pointerEvents, position: after.position, z: after.zIndex }
  };
};
