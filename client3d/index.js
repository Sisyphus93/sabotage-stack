// Entry point of the 3D layer (bundled to public/stack3d.js). It attaches to the page through window.SabotageStackHost,
// which the page itself defines. The 3D world is the only way to see the game: if WebGL is missing or the stage cannot start,
// the page says so and asks the visitor to try another browser.
import { Stage } from './stage.js';
import { webglSupported } from './engine.js';
import { renderIconSprites, applyIconSprites, applyGlyphSprites, restoreFlatIcons } from './icons3d.js';
import { snapshotTower } from './snapshot.js';
import { createOnceSoon } from './once-soon.js';
import { installTactileUi } from './tactile.js';
import { installIconTurn } from './icon-turn.js';
import { installPixelUi } from './pixel-ui.js';
import { loadFace, faceReady } from './text3d.js';

async function boot() {
  const host = window.SabotageStackHost;
  if (!host || window.__stack3d) return;
  const params = new URLSearchParams(window.location.search);
  const supported = webglSupported();
  const doc = document; const root = doc.documentElement;
  let canvas = null; let stage = null; let raf = 0; let failures = 0; let iconTheme = ''; let tactile = null; let iconTurn = null; let pixel = null; let onVisibility = null; let onResize = null;

  function showUnavailable() {
    if (doc.getElementById('webgl-required')) return;
    const notice = doc.createElement('div');
    notice.id = 'webgl-required'; notice.setAttribute('role', 'alert');
    const heading = doc.createElement('h1'); heading.textContent = 'Sabotage Stack needs WebGL 2';
    const text = doc.createElement('p');
    text.textContent = 'Your browser cannot show the 3D world. Turn on hardware acceleration or open the game in a recent Chrome, Firefox, Safari or Edge, then reload.';
    notice.append(heading, text);
    doc.body.append(notice);
    root.classList.add('needs-webgl');
  }

  // Bakes the page's sabotage icons from the 3D models once the stage is up (and again after a theme change). It is asked for on
  // every frame until it has happened, so it must be a latch, not a debounce (see once-soon.js).
  const iconBake = createOnceSoon(() => {
    if (!stage) return;
    const theme = stage.theme; // the theme now, which may not be the one that asked for the bake
    iconTheme = theme; // also when baking fails: stay with the page's own icons rather than retrying every frame
    try { const sprites = renderIconSprites(theme, { size: 192 }); applyIconSprites(doc, sprites); applyGlyphSprites(doc, sprites); } catch (error) { console.warn('3D icon sprites unavailable', error); }
  }, 160);
  function bakeIcons() { if (stage && stage.theme !== iconTheme) iconBake.request(); }

  function tick(ts) {
    raf = requestAnimationFrame(tick);
    if (!stage || doc.hidden) { if (stage) stage.last = 0; return; }
    try { stage.frame(ts, { render: !window.__stack3dNoRender }); failures = 0; if (stage.theme !== iconTheme) bakeIcons(); }
    catch (error) {
      failures += 1; console.error('3D frame failed', (error && error.stack) || error);
      if (failures >= 3) { console.warn('3D stopped after repeated frame errors.'); disable(); showUnavailable(); }
    }
  }

  function enable() {
    if (!supported || stage) return Boolean(stage);
    try {
      canvas = doc.createElement('canvas'); canvas.id = 'stage3d'; canvas.setAttribute('aria-hidden', 'true');
      doc.body.insertBefore(canvas, doc.body.firstChild);
      stage = new Stage({ canvas, host, tier: params.get('tier'), scale: Number(params.get('scale')) || 1 });
    } catch (error) {
      console.warn('3D could not start.', error);
      if (canvas) canvas.remove(); canvas = null; stage = null; return false;
    }
    host.setActive(true);
    // An Idle Scene may be drawing at a capped rate: a tab that becomes visible, or a resized window, must draw at full
    // rate on its very next frame.
    onVisibility = () => { if (!doc.hidden && stage) stage.wake(); };
    onResize = () => { if (stage) stage.wake(); };
    doc.addEventListener('visibilitychange', onVisibility); window.addEventListener('resize', onResize);
    tactile = installTactileUi({ doc, win: window }); iconTurn = installIconTurn({ doc });
    pixel = installPixelUi({ doc, win: window, hooks: { onVoteHover: index => { if (stage) stage.setVoteHover(index); }, onPrimaryHover: () => { if (stage) stage.tickPattern(); } } });
    stage.gridTrail = () => Boolean(pixel && pixel.trailActive); // one trail, not two: the stage's sparkles step aside while the grid trail is on
    window.__stack3d = stage; cancelAnimationFrame(raf); raf = requestAnimationFrame(tick);
    return true;
  }

  function disable() {
    cancelAnimationFrame(raf); iconBake.cancel();
    if (onVisibility) { doc.removeEventListener('visibilitychange', onVisibility); onVisibility = null; }
    if (onResize) { window.removeEventListener('resize', onResize); onResize = null; }
    if (tactile) { tactile.dispose(); tactile = null; }
    if (iconTurn) { iconTurn.dispose(); iconTurn = null; }
    if (pixel) { pixel.dispose(); pixel = null; }
    if (stage) { try { stage.dispose(); } catch (_) { /* context already gone */ } }
    if (canvas) canvas.remove();
    stage = null; canvas = null; iconTheme = ''; window.__stack3d = null;
    restoreFlatIcons(doc); host.setActive(false);
    document.documentElement.style.cursor = '';
  }

  host.snapshot = (target, data) => (stage ? snapshotTower(stage, target, data) : false);
  // The first scene must never show a blank or half-named headline: fetch just the active theme's face before the stage is
  // built. A failed fetch resolves false (loadFace never rejects), and the layer still starts with that theme's non-text scene.
  if (supported) {
    for (let attempt = 0; attempt < 5; attempt += 1) {
      const theme = host.view().theme;
      if (faceReady(theme)) break;
      await loadFace(theme);
      if (host.view().theme === theme) break;
    }
    // If the visitor kept changing theme, wait once more for whatever is active now; loadFace times out on its own.
    const active = host.view().theme;
    if (!faceReady(active)) await loadFace(active);
  }
  if (!supported || !enable()) showUnavailable();
  window.__stack3dBoot = { enable, disable, supported };
}

const start = () => boot().catch(error => console.warn('3D could not start.', error));
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
