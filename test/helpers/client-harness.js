// Boots the REAL sabotage-stack.html in jsdom, backed by a real Skia canvas so pixels can be measured.
const fs = require('fs');
const { JSDOM, VirtualConsole } = require('jsdom');
const { createCanvas } = require('@napi-rs/canvas');
const { rng: seeded } = require('./rng');
async function boot(htmlPath, { url = 'http://localhost:3000/', seed = 1, reducedMotion = false, WebSocketImpl = null, storage = null, manualAnimationFrame = false, AudioContextImpl = null, windowSetup = null } = {}) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const errors = []; const vc = new VirtualConsole();
  vc.on('jsdomError', e => errors.push('jsdomError: ' + (e.detail && e.detail.stack || e.stack || e.message)));
  vc.on('error', (...a) => errors.push('console.error: ' + a.join(' ')));
  const canvases = new Map();
  const animationFrames = new Map(); let nextAnimationFrameId = 0; let animationTimestamp = 0;
  const dom = new JSDOM(html, {
    url, runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: vc,
    beforeParse(window) {
      window.Math.random = seeded(seed);
      window.matchMedia = q => ({ matches: reducedMotion && /reduce/.test(q), media: q, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){} });
      window.HTMLCanvasElement.prototype.getContext = function () {
        if (!canvases.has(this)) {
          const c = createCanvas(360, 520);
          canvases.set(this, c);
        }
        return canvases.get(this).getContext('2d');
      };
      if (!window.HTMLDialogElement.prototype.showModal) {
        window.HTMLDialogElement.prototype.showModal = function(){ this.setAttribute('open',''); };
        window.HTMLDialogElement.prototype.close = function(){ this.removeAttribute('open'); };
      }
      if (storage && typeof storage === 'object') {
        try { for (const [key, value] of Object.entries(storage)) window.localStorage.setItem(key, String(value)); } catch (_) { /* unavailable storage is covered by the app fallback */ }
      }
      if (manualAnimationFrame) {
        window.requestAnimationFrame = callback => { const id = ++nextAnimationFrameId; animationFrames.set(id, callback); return id; };
        window.cancelAnimationFrame = id => animationFrames.delete(id);
      }
      if (WebSocketImpl) window.WebSocket = WebSocketImpl;
      if (AudioContextImpl) window.AudioContext = AudioContextImpl;
      if (typeof windowSetup === 'function') windowSetup(window);
      window.__errors = errors;
      window.addEventListener('error', e => errors.push('window.onerror: ' + e.message));
      window.addEventListener('unhandledrejection', e => errors.push('unhandledrejection: ' + e.reason));
    }
  });
  const { window } = dom;
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const advanceAnimation = (milliseconds, frameStep = 50) => {
    if (!manualAnimationFrame) throw new Error('manualAnimationFrame must be enabled to advance animation time');
    let remaining = milliseconds;
    while (remaining > 0) {
      const step = Math.min(frameStep, remaining);
      animationTimestamp += step;
      const callbacks = [...animationFrames.values()]; animationFrames.clear();
      for (const callback of callbacks) callback(animationTimestamp);
      remaining -= step;
    }
  };
  await sleep(200);
  return { dom, window, document: window.document, errors, sleep, advanceAnimation,
    canvasFor: el => canvases.get(el),
    pixel(el, x, y){ const c = canvases.get(el); const d = c.getContext('2d').getImageData(x, y, 1, 1).data; return [d[0],d[1],d[2],d[3]]; },
    png(el){ return canvases.get(el).toBuffer('image/png'); },
    close(){ window.close(); } };
}
module.exports = { boot, seeded };
