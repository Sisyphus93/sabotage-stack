// The home view's on-screen controls: the toy dock (Drop block / Trigger sabotage: the title screen is playable), a hint that
// fades away for good after the first drag, and turn-left / reset / turn-right buttons for keyboards, touch screens and anyone
// who prefers clicking. Plain DOM, no three.js.
// The page owns every other element; this one is created by the layer, lives inside #title-screen (so it is hidden whenever
// that screen is) and is removed again when the layer is switched off.
const HINT_KEY = 'sabotage-stack-orbit-hint-v1';

const ICON = {
  left: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  right: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  reset: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12a7 7 0 1 0 2.2-5.1M5 4.5v4h4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  drop: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4.5" y="14" width="15" height="6" rx="1.6" fill="currentColor"/><path d="M12 3.5v7.5M8.4 7.6l3.6 3.6 3.6-3.6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  sabotage: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13.4 2.5 5 13.6h6l-1.2 7.9 8.6-11.6h-6z" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>'
};

export function hintSeen(storage) { try { return Boolean(storage && storage.getItem(HINT_KEY)); } catch (_) { return false; } }
export function rememberHint(storage) { try { if (storage) storage.setItem(HINT_KEY, '1'); } catch (_) { /* private mode */ } }

// hostId / id: where the controls live (the home screen, or the solo results screen, which turns too); dock: the toy keys, home only.
export function createOrbitHud({ doc = document, storage = null, touch = false, hostId = 'title-screen', id = 'orbit-hud', dock: withDock = true, onTurn = () => {}, onReset = () => {}, onToy = () => {} } = {}) {
  const host = doc.getElementById(hostId);
  if (!host) return null;
  const root = doc.createElement('div'); root.id = id; root.className = 'orbit-hud';
  root.setAttribute('role', 'group'); root.setAttribute('aria-label', '3D view controls');
  if (hintSeen(storage)) root.classList.add('is-quiet');

  const hint = doc.createElement('p'); hint.className = 'orbit-hint';
  hint.innerHTML = touch
    ? '<span class="orbit-hint-full">Swipe sideways to turn the scene</span><span class="orbit-hint-short">Swipe to turn</span>'
    : '<span class="orbit-hint-full"><b>Drag</b> with left or right click to turn the scene. Double-click resets.</span><span class="orbit-hint-short"><b>Drag</b> to turn</span>';

  const button = (kind, label, handler) => {
    const el = doc.createElement('button'); el.type = 'button'; el.className = 'button orbit-btn'; el.dataset.orbit = kind;
    el.setAttribute('aria-label', label); el.title = label; el.innerHTML = ICON[kind];
    el.addEventListener('click', handler); return el;
  };
  const left = button('left', 'Turn the 3D scene left', () => onTurn(-Math.PI / 4));
  const reset = button('reset', 'Reset the 3D view', () => onReset());
  const right = button('right', 'Turn the 3D scene right', () => onTurn(Math.PI / 4));
  const row = doc.createElement('div'); row.className = 'orbit-row'; row.append(hint, left, reset, right);

  // The toy dock: two keycaps under the tower. Both work with the pointer and the keyboard (they are real buttons).
  const dock = doc.createElement('div'); dock.className = 'toy-dock'; dock.setAttribute('role', 'group'); dock.setAttribute('aria-label', 'Play with the tower');
  const key = (kind, full, short, title) => {
    const el = doc.createElement('button'); el.type = 'button'; el.className = kind === 'drop' ? 'button button-primary toy-key' : 'button toy-key'; el.dataset.toy = kind; el.title = title;
    el.innerHTML = `${ICON[kind]}<span class="toy-full">${full}</span><span class="toy-short">${short}</span>`;
    el.addEventListener('click', () => onToy(kind)); return el;
  };
  dock.append(key('drop', 'Drop block', 'Drop', 'Drop the moving block (or click the tower)'), key('sabotage', 'Trigger sabotage', 'Sabotage', 'Call a random sabotage down on the tower'));
  if (withDock) root.append(dock, row); else root.append(row);
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
    quiet() { root.classList.add('is-quiet'); rememberHint(storage); },
    // The hint steps aside on its own after a while; it is only remembered for good once someone has actually dragged.
    fade() { root.classList.add('is-quiet'); },
    dispose() { root.remove(); }
  };
}
