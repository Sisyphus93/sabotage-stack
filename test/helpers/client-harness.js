// Boots the REAL sabotage-stack.html in jsdom, backed by a real Skia canvas so pixels can be measured.
const fs = require('fs');
const { JSDOM, VirtualConsole } = require('jsdom');
const { createCanvas } = require('@napi-rs/canvas');
const { rng: seeded } = require('./rng');
async function boot(htmlPath, { url = 'http://localhost:3000/', seed = 1, reducedMotion = false, WebSocketImpl = null, storage = null } = {}) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const errors = []; const vc = new VirtualConsole();
  vc.on('jsdomError', e => errors.push('jsdomError: ' + (e.detail && e.detail.stack || e.stack || e.message)));
  vc.on('error', (...a) => errors.push('console.error: ' + a.join(' ')));
  const canvases = new Map();
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
      if (WebSocketImpl) window.WebSocket = WebSocketImpl;
      window.__errors = errors;
      window.addEventListener('error', e => errors.push('window.onerror: ' + e.message));
      window.addEventListener('unhandledrejection', e => errors.push('unhandledrejection: ' + e.reason));
    }
  });
  const { window } = dom;
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  await sleep(200);
  return { dom, window, document: window.document, errors, sleep,
    canvasFor: el => canvases.get(el),
    pixel(el, x, y){ const c = canvases.get(el); const d = c.getContext('2d').getImageData(x, y, 1, 1).data; return [d[0],d[1],d[2],d[3]]; },
    png(el){ return canvases.get(el).toBuffer('image/png'); },
    close(){ window.close(); } };
}
module.exports = { boot, seeded };
