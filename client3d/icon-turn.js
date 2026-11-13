// Icons in the panels get thickness and a slow turn. Every <svg><use href="#sabotage-symbol-…"> the page shows (the vote options, the
// running sabotage, the guide, the practice list, the caption pill) is wrapped in a small 3D holder: the page's own element stays
// the front face (so everything the page does to it keeps working), a few darker copies sit behind it to give the token its
// thickness, and the holder turns slowly, back and forth, in CSS. The copies follow the front face's href with an observer.
// Plain DOM, no three.js. Reduced Motion keeps the thickness (a fixed little turn) and drops the movement.
const SELECTOR = 'svg > use[href^="#sabotage-symbol-"]';
export const ICON_LAYERS = 4;

export function enhanceIcon(doc, use) {
  const front = use.parentNode; if (!front || front.dataset.turn || front.closest('.icon-turn')) return null;
  front.dataset.turn = 'front';
  const holder = doc.createElement('span'); holder.className = 'icon-turn';
  front.parentNode.insertBefore(holder, front); holder.appendChild(front);
  const copies = [];
  for (let i = 1; i <= ICON_LAYERS; i += 1) {
    const copy = front.cloneNode(true); copy.removeAttribute('id'); copy.removeAttribute('class'); copy.removeAttribute('data-turn');
    copy.setAttribute('aria-hidden', 'true'); copy.setAttribute('focusable', 'false'); copy.classList.add('icon-back'); copy.style.setProperty('--layer', String(i));
    const cu = copy.querySelector('use'); if (cu) { cu.removeAttribute('id'); cu.removeAttribute('class'); }
    holder.appendChild(copy); copies.push(cu);
  }
  const sync = () => { const href = use.getAttribute('href'); for (const cu of copies) if (cu && cu.getAttribute('href') !== href) cu.setAttribute('href', href); };
  const MO = observerOf(doc); const observer = MO ? new MO(sync) : null;
  if (observer) observer.observe(use, { attributes: true, attributeFilter: ['href'] });
  holder.style.setProperty('--turn-delay', `${-((Math.abs(hash(use)) % 90) / 10).toFixed(1)}s`); // not all in step
  return { holder, front, observer, undo() { if (observer) observer.disconnect(); for (const c of holder.querySelectorAll('.icon-back')) c.remove(); holder.parentNode.insertBefore(front, holder); holder.remove(); delete front.dataset.turn; } };
}

const observerOf = doc => (doc.defaultView && doc.defaultView.MutationObserver) || (typeof MutationObserver === 'function' ? MutationObserver : null);
let counter = 0; const ids = new WeakMap();
function hash(node) { if (!ids.has(node)) { counter += 1; ids.set(node, counter * 37 + 11); } return ids.get(node); }

export function installIconTurn({ doc = document } = {}) {
  const made = new Set();
  const scan = root => { if (!root || !root.querySelectorAll) return; for (const use of root.querySelectorAll(SELECTOR)) { const r = enhanceIcon(doc, use); if (r) made.add(r); } };
  scan(doc);
  // buttons built later (the practice list, the guide) are enhanced as they appear
  const WO = observerOf(doc); const watcher = WO ? new WO(records => { for (const r of records) for (const node of r.addedNodes) if (node.nodeType === 1) { if (node.matches && node.matches(SELECTOR)) { const e = enhanceIcon(doc, node); if (e) made.add(e); } else scan(node); } }) : null;
  if (watcher && doc.body) watcher.observe(doc.body, { childList: true, subtree: true });
  return { get count() { return made.size; }, rescan() { scan(doc); }, dispose() { if (watcher) watcher.disconnect(); for (const e of made) e.undo(); made.clear(); } };
}
