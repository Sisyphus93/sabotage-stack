// The scenes' on-screen view controls: the dock (home only: Trigger sabotage, chat strikes the title on demand), a hint that
// fades away for good after the first drag, zoom out / zoom in, and turn-left / reset / turn-right buttons for keyboards, touch
// screens and anyone who prefers clicking. Plain DOM, no three.js.
// The page owns every other element; this one is created by the layer, lives inside #title-screen (so it is hidden whenever
// that screen is) and is removed again when the layer is switched off.
const HINT_KEY = 'sabotage-stack-orbit-hint-v1';
export const ZOOM_STEP = 1.3; // what one press of a zoom button does

const ICON = {
  left: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  right: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  reset: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12a7 7 0 1 0 2.2-5.1M5 4.5v4h4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  drop: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4.5" y="14" width="15" height="6" rx="1.6" fill="currentColor"/><path d="M12 3.5v7.5M8.4 7.6l3.6 3.6 3.6-3.6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  sabotage: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13.4 2.5 5 13.6h6l-1.2 7.9 8.6-11.6h-6z" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>',
  minus: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5.5 12h13" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/></svg>',
  plus: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 5.5v13M5.5 12h13" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/></svg>'
};

export function hintSeen(storage, key = HINT_KEY) { try { return Boolean(storage && storage.getItem(key)); } catch (_) { return false; } }
export function rememberHint(storage, key = HINT_KEY) { try { if (storage) storage.setItem(key, '1'); } catch (_) { /* private mode */ } }

// hostId / id: where the controls live (the home screen, the solo results screen or the game screen: all of them turn and zoom); dock: the toy keys, home only.
// layout 'corner': one row, hint first, anchored by its bottom-right corner. 'stage': the hint above the buttons, anchored by its top-right corner (the game screen).
// hint: { mouse, touch } markup for the hint pill (each holds an .orbit-hint-full and an .orbit-hint-short span); hintKey: where its retirement is remembered.
export function createOrbitHud({ doc = document, storage = null, touch = false, hostId = 'title-screen', id = 'orbit-hud', dock: withDock = true, layout = 'corner', hint: hintCopy = null, hintKey = HINT_KEY, onTurn = () => {}, onReset = () => {}, onZoom = () => {}, onToy = () => {} } = {}) {
  const host = doc.getElementById(hostId);
  if (!host) return null;
  const root = doc.createElement('div'); root.id = id; root.className = 'orbit-hud';
  root.setAttribute('role', 'group'); root.setAttribute('aria-label', '3D view controls');
  if (layout === 'stage') root.classList.add('is-stage');
  if (hintSeen(storage, hintKey)) root.classList.add('is-quiet');

  const hint = doc.createElement('p'); hint.className = 'orbit-hint';
  const copy = {
    touch: (hintCopy && hintCopy.touch) || '<span class="orbit-hint-full">Swipe sideways to turn the scene</span><span class="orbit-hint-short">Swipe to turn</span>',
    mouse: (hintCopy && hintCopy.mouse) || '<span class="orbit-hint-full"><b>Drag</b> with left or right click to turn the scene, <b>scroll</b> to zoom. Double-click resets.</span><span class="orbit-hint-short"><b>Drag</b> to turn, <b>scroll</b> to zoom</span>'
  };
  hint.innerHTML = touch ? copy.touch : copy.mouse;

  const button = (kind, label, handler, attr = 'orbit', icon = kind) => {
    const el = doc.createElement('button'); el.type = 'button'; el.className = 'button orbit-btn'; el.dataset[attr] = kind;
    el.setAttribute('aria-label', label); el.title = label; el.innerHTML = ICON[icon];
    el.addEventListener('click', handler); return el;
  };
  const left = button('left', 'Turn the 3D scene left', () => onTurn(-Math.PI / 4));
  const reset = button('reset', 'Reset the 3D view', () => onReset());
  const right = button('right', 'Turn the 3D scene right', () => onTurn(Math.PI / 4));
  const zoomOut = button('out', 'Zoom the 3D scene out', () => onZoom(1 / ZOOM_STEP), 'zoom', 'minus');
  const zoomIn = button('in', 'Zoom the 3D scene in', () => onZoom(ZOOM_STEP), 'zoom', 'plus');
  const row = doc.createElement('div'); row.className = 'orbit-row';
  if (layout === 'stage') row.append(zoomOut, zoomIn, left, reset, right); else row.append(hint, zoomOut, zoomIn, left, reset, right);

  // The dock: one keycap under the title, for anyone without a hover (a phone) or who just wants chat to strike now. A real button.
  const dock = doc.createElement('div'); dock.className = 'toy-dock'; dock.setAttribute('role', 'group'); dock.setAttribute('aria-label', 'Play with the title');
  const key = (kind, full, short, title) => {
    const el = doc.createElement('button'); el.type = 'button'; el.className = 'button toy-key'; el.dataset.toy = kind; el.title = title;
    el.innerHTML = `${ICON[kind]}<span class="toy-full">${full}</span><span class="toy-short">${short}</span>`;
    el.addEventListener('click', () => onToy(kind)); return el;
  };
  dock.append(key('sabotage', 'Trigger sabotage', 'Sabotage', 'Let chat sabotage the title right now'));
  if (layout === 'stage') root.append(hint, row); else if (withDock) root.append(dock, row); else root.append(row);
  host.appendChild(root);

  let x = NaN; let y = NaN;
  return {
    root,
    // The bottom-right corner of the 3D region, in viewport pixels. Written only when it moves.
    place(nx, ny) {
      if (Math.abs(nx - x) < 0.75 && Math.abs(ny - y) < 0.75) return;
      x = nx; y = ny; root.style.left = `${Math.round(nx)}px`; root.style.top = `${Math.round(ny)}px`;
    },
    setRotated(flag) { root.classList.toggle('is-rotated', Boolean(flag)); },
    // After the first real drag the hint is no longer needed, here or on later visits.
    quiet() { root.classList.add('is-quiet'); rememberHint(storage, hintKey); },
    // The hint steps aside on its own after a while; it is only remembered for good once someone has actually dragged.
    fade() { root.classList.add('is-quiet'); },
    dispose() { root.remove(); }
  };
}
