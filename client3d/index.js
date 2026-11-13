// Entry point of the 3D layer (bundled to public/stack3d.js). It attaches to the page through window.SabotageStackHost,
// which the page itself defines; if anything is missing or fails, the original 2D game keeps running untouched.
import { Stage } from './stage.js';
import { webglSupported } from './engine.js';
import { renderIconSprites, applyIconSprites, restoreFlatIcons } from './icons3d.js';
import { snapshotTower } from './snapshot.js';
import { createOnceSoon } from './once-soon.js';

const VIEW_KEY = 'sabotage-stack-view-v1';

function storedView() { try { return window.localStorage.getItem(VIEW_KEY) || '3d'; } catch (_) { return '3d'; } }
function storeView(value) { try { window.localStorage.setItem(VIEW_KEY, value); } catch (_) { /* private mode: the choice lasts for this page view */ } }

function boot() {
  const host = window.SabotageStackHost;
  if (!host || window.__stack3d) return;
  const params = new URLSearchParams(window.location.search);
  const forcedOff = params.get('3d') === 'off' || params.get('view') === 'flat';
  let wanted = forcedOff ? 'flat' : params.get('3d') === 'on' ? '3d' : storedView();
  const supported = webglSupported();
  const doc = document; const root = doc.documentElement;
  let canvas = null; let stage = null; let raf = 0; let failures = 0; let iconTheme = '';

  const toggle = doc.createElement('button');
  toggle.type = 'button'; toggle.id = 'view-toggle'; toggle.className = 'button view-toggle';
  const bar = doc.querySelector('.top-tools'); if (bar) bar.insertBefore(toggle, bar.firstChild);
  if (!supported) toggle.hidden = true;

  function syncToggle(active) {
    toggle.setAttribute('aria-pressed', active ? 'true' : 'false');
    toggle.textContent = active ? '3D view' : 'Flat view';
    toggle.setAttribute('aria-label', active ? '3D view is on. Activate to switch to the flat 2D view.' : 'Flat view is on. Activate to switch to the 3D view.');
  }

  // Bakes the page's sabotage icons from the 3D models once the stage is up (and again after a theme change). It is asked for on
  // every frame until it has happened, so it must be a latch, not a debounce (see once-soon.js).
  const iconBake = createOnceSoon(() => {
    if (!stage) return;
    const theme = stage.theme; // the theme now, which may not be the one that asked for the bake
    iconTheme = theme; // also when baking fails: stay with the page's own icons rather than retrying every frame
    try { applyIconSprites(doc, renderIconSprites(theme, { size: 192 })); } catch (error) { console.warn('3D icon sprites unavailable', error); }
  }, 160);
  function bakeIcons() { if (stage && stage.theme !== iconTheme) iconBake.request(); }

  function tick(ts) {
    raf = requestAnimationFrame(tick);
    if (!stage || doc.hidden) { if (stage) stage.last = 0; return; }
    try { stage.frame(ts, { render: !window.__stack3dNoRender }); failures = 0; if (stage.theme !== iconTheme) bakeIcons(); }
    catch (error) {
      failures += 1; console.error('3D frame failed', (error && error.stack) || error);
      if (failures >= 3) { console.warn('Falling back to the flat view.'); disable(true); }
    }
  }

  function enable() {
    if (!supported || stage) return Boolean(stage);
    try {
      canvas = doc.createElement('canvas'); canvas.id = 'stage3d'; canvas.setAttribute('aria-hidden', 'true');
      doc.body.insertBefore(canvas, doc.body.firstChild);
      stage = new Stage({ canvas, host, tier: params.get('tier'), scale: Number(params.get('scale')) || 1 });
    } catch (error) {
      console.warn('3D could not start; staying flat.', error);
      if (canvas) canvas.remove(); canvas = null; stage = null; return false;
    }
    root.classList.add('has-3d'); host.setActive(true); syncToggle(true);
    window.__stack3d = stage; cancelAnimationFrame(raf); raf = requestAnimationFrame(tick);
    return true;
  }

  function disable(remember) {
    cancelAnimationFrame(raf); iconBake.cancel();
    if (stage) { try { stage.dispose(); } catch (_) { /* context already gone */ } }
    if (canvas) canvas.remove();
    stage = null; canvas = null; iconTheme = ''; window.__stack3d = null;
    root.classList.remove('has-3d'); restoreFlatIcons(doc); host.setActive(false); syncToggle(false);
    document.documentElement.style.cursor = '';
  }

  toggle.addEventListener('click', () => {
    if (stage) { storeView('flat'); disable(); } else if (enable()) storeView('3d');
  });

  host.snapshot = (target, data) => (stage ? snapshotTower(stage, target, data) : false);
  if (supported && wanted === '3d') enable(); else syncToggle(false);
  window.__stack3dBoot = { enable, disable, supported };
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
