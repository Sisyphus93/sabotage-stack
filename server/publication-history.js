'use strict';

// Gameplay histories are append-only until their array is replaced or shrunk.
// Each view has a fixed length over a private, append-only store of detached
// entries. Appending allocates only the tail, not another history-sized array.
// The Proxy remains a JSON array: full syncs enumerate it only when requested.
// Shrinkage is noticed when a publication samples it; shortening and refilling
// to the same length between publications is undetectable, so gameplay must
// only append or replace a history, never rewrite one in place.
const sources = new WeakMap();
const views = new WeakMap();

function freeze(value) {
  if (value && typeof value === 'object') {
    for (const child of Object.values(value)) freeze(child);
    Object.freeze(value);
  }
  return value;
}

function captureValue(value) {
  // Match clone()'s wire semantics for an entry JSON cannot represent.
  if (value === undefined) return null;
  return freeze(JSON.parse(JSON.stringify(value)));
}

function captureHistory(source) {
  let cached = sources.get(source);
  if (!cached || source.length < cached.store.length) cached = { store: [], view: null };
  if (cached.view && cached.store.length === source.length) return cached.view;
  const store = cached.store;
  for (let i = store.length; i < source.length; i++) store.push(captureValue(source[i]));
  const length = store.length;
  const target = [];
  // Keep the real target empty: growing its length can allocate a holey backing
  // array proportional to history. Only JSON/array consumers need virtual keys.
  const indexOf = key => typeof key === 'string' && /^(0|[1-9]\d*)$/.test(key) && Number(key) < length ? Number(key) : null;
  const view = new Proxy(target, {
    get(array, key, receiver) {
      if (key === 'length') return length;
      const index = indexOf(key);
      return index === null ? Reflect.get(array, key, receiver) : store[index];
    },
    has(array, key) { return indexOf(key) !== null || Reflect.has(array, key); },
    ownKeys() { return [...Array.from({ length }, (_, i) => String(i)), 'length']; },
    getOwnPropertyDescriptor(array, key) {
      if (key === 'length') return { ...Reflect.getOwnPropertyDescriptor(array, key), value: length };
      const index = indexOf(key);
      return index === null ? Reflect.getOwnPropertyDescriptor(array, key)
        : { value: store[index], writable: false, enumerable: true, configurable: true };
    },
    set() { return false; },
    defineProperty() { return false; },
    deleteProperty() { return false; },
    setPrototypeOf() { return false; },
    preventExtensions() { return false; }
  });
  cached.view = view;
  sources.set(source, cached);
  views.set(view, { store, length });
  return view;
}

function sharedHistoryPrefixLength(before, after) {
  const a = views.get(before);
  const b = views.get(after);
  return a && b && a.store === b.store && a.length <= b.length ? a.length : null;
}

module.exports = { captureValue, captureHistory, sharedHistoryPrefixLength };
