// Phase 2/4: keyboard-only run, dialogs, focus visibility, reflow/zoom/landscape, touch gestures, grain overlay, sound, idle run.
const { launch, ctx, watch, shot, save, sleep, URL, THEMES, AUDIT } = require('./lib');
const { measure } = require('./inpage');
const { PNG } = require('pngjs');
const out = { console: [], errors: [], keyboard: {}, focus: {}, reflow: {}, touch: {}, grain: {}, sound: {}, idle: {}, firstRun: {} };
async function phase(name, fn) { try { await fn(); console.log('ok', name); } catch (e) { out.errors.push({ phase: name, error: String(e.message).slice(0, 300) }); console.log('PHASE ERROR', name, String(e.message).slice(0, 200)); } }
const active = page => page.evaluate(() => { const e = document.activeElement; if (!e) return null; return (e.id ? '#' + e.id : e.tagName.toLowerCase() + (e.className && typeof e.className === 'string' ? '.' + e.className.split(' ')[0] : '')) + (e.closest('dialog[open]') ? ' (in dialog)' : ''); });
async function tabList(page, n, key = 'Tab') { const list = []; for (let i = 0; i < n; i++) { await page.keyboard.press(key); list.push(await active(page)); } return list; }
async function tabTo(page, sel, max = 40) { for (let i = 0; i < max; i++) { await page.keyboard.press('Tab'); if (await page.evaluate(s => document.activeElement === document.querySelector(s), sel)) return i + 1; } return -1; }
const voteState = page => page.evaluate(() => ({ state: document.getElementById('vote-state-label').textContent, sub: document.getElementById('vote-subtitle').textContent, buttons: Array.from(document.querySelectorAll('.vote-option')).map(b => ({ cls: b.className, pressed: b.getAttribute('aria-pressed'), label: b.getAttribute('aria-label'), count: (b.querySelector('.vote-count') || {}).textContent, disabled: b.disabled })), drops: window.__audit.drops.length, focus: document.activeElement && (document.activeElement.id || document.activeElement.className) }));
const lum = (r, g, b) => { const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
const focusInfo = () => {
  const e = document.activeElement; if (!e || e === document.body) return null;
  const cs = getComputedStyle(e);
  let bg = 'rgb(255,255,255)'; for (let n = e.parentElement; n; n = n.parentElement) { const c = getComputedStyle(n).backgroundColor; if (c && !/rgba\(0, 0, 0, 0\)|transparent/.test(c)) { bg = c; break; } }
  const r = e.getBoundingClientRect();
  return { el: e.id || e.className, matches: e.matches(':focus-visible'), outline: `${cs.outlineStyle} ${cs.outlineWidth} ${cs.outlineColor}`, offset: cs.outlineOffset, shadow: cs.boxShadow.slice(0, 70), parentBg: bg, ownBg: cs.backgroundColor, w: Math.round(r.width), h: Math.round(r.height) };
};
const rgb = s => { const m = String(s).match(/[\d.]+/g) || [0, 0, 0]; return m.slice(0, 3).map(Number); };
const cr = (a, b) => { const la = lum(...rgb(a)), lb = lum(...rgb(b)); return Math.round((Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05) * 100) / 100; };

(async () => {
  const browser = await launch();

  // ---------- A. keyboard-only run (paper 1280x800)
  await phase('keyboard', async () => {
    const K = out.keyboard; const c = await ctx(browser, { theme: 'paper', vp: '1280x800' }); const page = await c.newPage(); watch(page, 'keyboard', out.console);
    await page.goto(URL); await sleep(500);
    K.titleTabOrder = await tabList(page, 12);
    K.titleShiftTab = await tabList(page, 2, 'Shift+Tab');
    await page.goto(URL); await sleep(400);
    K.tabsToHow = await tabTo(page, '#how-button');
    await page.keyboard.press('Enter'); await sleep(350);
    K.how = { open: await page.$eval('#how-dialog', d => d.open), focusOnOpen: await active(page) };
    K.how.tabCycle = await tabList(page, 5);
    K.how.escapedOutOfDialog = K.how.tabCycle.some(x => x && !/in dialog/.test(x));
    await page.keyboard.press('Escape'); await sleep(250);
    K.how.afterEscape = { open: await page.$eval('#how-dialog', d => d.open), focus: await active(page) };
    await tabTo(page, '#join-game-button');
    await page.keyboard.press('Enter'); await sleep(350);
    K.join = { open: await page.$eval('#join-dialog', d => d.open), focusOnOpen: await active(page) };
    K.join.tabCycle = await tabList(page, 7);
    await page.keyboard.press('Escape'); await sleep(250);
    K.join.afterEscape = { open: await page.$eval('#join-dialog', d => d.open), focus: await active(page) };
    // invalid join submit feedback
    await page.keyboard.press('Enter'); await sleep(300);
    await page.keyboard.type('zzzz'); await page.keyboard.press('Tab'); await page.keyboard.type('Kay'); await page.keyboard.press('Enter'); await sleep(1500);
    K.join.badCode = { status: await page.textContent('#join-status'), open: await page.$eval('#join-dialog', d => d.open), focus: await active(page), codeValue: await page.inputValue('#join-room-code') };
    await shot(page, 'join-badcode_paper_1280x800');
    await page.keyboard.press('Escape'); await sleep(300);
    K.afterJoinEscape = { screen: await page.evaluate(() => document.body.dataset.screen), status: await page.textContent('#multiplayer-status'), conn: await page.textContent('#connection-mode-label') };
    // solo with keyboard
    await page.goto(URL); await sleep(400);
    await tabTo(page, '#start-button');
    const t0 = Date.now(); await page.keyboard.press('Enter');
    await page.waitForFunction(() => document.body.dataset.screen === 'game'); K.startToGameMs = Date.now() - t0;
    K.focusAfterStart = await active(page);
    await sleep(600); const d0 = await page.evaluate(() => window.__audit.drops.length);
    await page.keyboard.press('Space'); await sleep(200);
    K.spaceDrops = (await page.evaluate(() => window.__audit.drops.length)) - d0;
    K.gameTabOrder = await tabList(page, 9);
    await page.focus('#drop-button');
    await page.evaluate(() => { window.__audit.mode = 'good'; });
    await page.waitForFunction(() => { const b = document.querySelector('.vote-option'); return b && !b.disabled; }, null, { timeout: 15000 });
    await sleep(300);
    const v0 = await voteState(page);
    await page.keyboard.press('Digit1'); await sleep(250);
    const v1 = await voteState(page);
    await page.evaluate(() => document.activeElement.blur()); await sleep(50);
    await page.keyboard.press('Digit2'); await sleep(250);
    const v2 = await voteState(page);
    K.digitKeys = { focusBefore: v0.focus, beforeState: v0.state, afterDigit1_focusOnDropButton: { state: v1.state, sub: v1.sub, buttons: v1.buttons.map(b => b.cls + '|' + b.pressed) }, afterDigit2_focusOnBody: { state: v2.state, sub: v2.sub, buttons: v2.buttons.map(b => b.cls + '|' + b.pressed) }, labels: v2.buttons.map(b => b.label) };
    await shot(page, 'keyboard-vote_paper_1280x800');
    // wait for next vote, then Space/Enter on a focused vote button
    await page.waitForFunction(() => { const b = document.querySelector('.vote-option'); return b && b.disabled; }, null, { timeout: 9000 });
    await page.waitForFunction(() => { const b = document.querySelector('.vote-option'); return b && !b.disabled; }, null, { timeout: 15000 });
    await page.evaluate(() => { window.__audit.mode = 'off'; });
    await page.focus('.vote-option[data-option-index="2"]'); await sleep(60);
    const s0 = await voteState(page);
    await page.keyboard.press('Space'); await sleep(250);
    const s1 = await voteState(page);
    await page.keyboard.press('Enter'); await sleep(250);
    const s2 = await voteState(page);
    K.voteButtonKeys = { focus: s0.focus, space: { dropsDelta: s1.drops - s0.drops, state: s1.state, btn3: s1.buttons[2].cls + '|' + s1.buttons[2].pressed }, enter: { dropsDelta: s2.drops - s1.drops, state: s2.state, btn3: s2.buttons[2].cls + '|' + s2.buttons[2].pressed } };
    // Space on Menu button while playing
    await page.focus('#menu-button'); const m0 = await page.evaluate(() => ({ d: window.__audit.drops.length, s: document.body.dataset.screen }));
    await page.keyboard.press('Space'); await sleep(250);
    const m1 = await page.evaluate(() => ({ d: window.__audit.drops.length, s: document.body.dataset.screen }));
    K.spaceOnMenuButton = { before: m0, after: m1 };
    await page.evaluate(() => { window.__audit.mode = 'miss'; });
    await page.waitForFunction(() => document.body.dataset.screen === 'results', null, { timeout: 30000 }); await sleep(1600);
    K.results = { focus: await active(page), tabOrder: await tabList(page, 5), live: await page.evaluate(() => window.__audit.live.slice(-6)) };
    await page.focus('#again-button'); await page.keyboard.press('Enter'); await sleep(500);
    K.playAgain = { screen: await page.evaluate(() => document.body.dataset.screen), focus: await active(page) };
    await page.keyboard.press('Escape'); await sleep(300);
    K.escapeInGame = await page.evaluate(() => document.body.dataset.screen);
    await c.close();
  });

  // ---------- B. focus visibility per theme
  for (const theme of THEMES) await phase('focus:' + theme, async () => {
    const c = await ctx(browser, { theme, vp: '1280x800' }); const page = await c.newPage();
    await page.goto(URL); await sleep(400);
    const stops = [];
    for (let i = 0; i < 9; i++) { await page.keyboard.press('Tab'); const f = await page.evaluate(focusInfo); if (f) { f.outlineVsParent = cr(f.outline, f.parentBg); f.outlineVsOwn = cr(f.outline, f.ownBg); stops.push(f); } if (i === 2) await shot(page, `focus-title_${theme}_1280x800`); }
    await page.click('#start-button'); await sleep(500);
    const game = [];
    for (const sel of ['#drop-button', '#game-canvas', '#menu-button']) { await page.focus(sel); await page.keyboard.press('Shift+Tab'); await page.keyboard.press('Tab'); const f = await page.evaluate(focusInfo); if (f) { f.outlineVsParent = cr(f.outline, f.parentBg); f.outlineVsOwn = cr(f.outline, f.ownBg); game.push(f); } if (sel === '#drop-button') await page.locator('#control-row').screenshot({ path: require('path').join(AUDIT, 'screenshots', `focus-drop_${theme}_1280x800.png`) }); }
    out.focus[theme] = { title: stops, game };
    await c.close();
  });

  // ---------- C. reflow / zoom / landscape / rotate
  for (const [name, vp] of [['zoom200_640x400', { width: 640, height: 400 }], ['zoom400_320x256', { width: 320, height: 256 }], ['landscape_844x390', { width: 844, height: 390 }], ['landscape_667x375', { width: 667, height: 375 }]]) await phase('reflow:' + name, async () => {
    const c = await ctx(browser, { theme: 'paper', vp, touch: name.startsWith('land') }); const page = await c.newPage(); watch(page, name, out.console);
    await page.goto(URL); await sleep(400);
    const R = out.reflow[name] = {};
    const m = async () => { const x = await page.evaluate(measure); return { overflowX: x.overflowX, scrollW: x.scrollW, scrollH: x.scrollH, key: x.key, minFont: x.minFont, under44: x.under44.length }; };
    R.title = await m(); await shot(page, `title_paper_${name}`);
    await page.click('#how-button'); await sleep(300); R.how = await m(); R.howDialog = await page.$eval('#how-dialog', d => { const r = d.getBoundingClientRect(); return { w: Math.round(r.width), h: Math.round(r.height), scrollable: d.scrollHeight > d.clientHeight || !!Array.from(d.querySelectorAll('*')).find(e => e.scrollHeight > e.clientHeight + 2 && /auto|scroll/.test(getComputedStyle(e).overflowY)), closeInView: (() => { const b = document.getElementById('close-how').getBoundingClientRect(); return b.top >= 0 && b.bottom <= innerHeight; })() }; }); await shot(page, `how_paper_${name}`);
    await page.keyboard.press('Escape');
    await page.evaluate(() => { window.__audit.mode = 'good'; });
    await page.click('#start-button'); await sleep(2500); R.game = await m(); await shot(page, `game_paper_${name}`); await shot(page, `game-full_paper_${name}`, { fullPage: true });
    await page.evaluate(() => { window.__audit.mode = 'miss'; });
    await page.waitForFunction(() => document.body.dataset.screen === 'results', null, { timeout: 30000 }); await sleep(1500); R.results = await m(); await shot(page, `results_paper_${name}`);
    await c.close();
  });
  await phase('rotate', async () => {
    const c = await ctx(browser, { theme: 'paper', vp: '390x844', touch: true }); const page = await c.newPage(); watch(page, 'rotate', out.console);
    await page.goto(URL); await sleep(300); await page.evaluate(() => { window.__audit.mode = 'good'; }); await page.click('#start-button'); await sleep(2500);
    const before = await page.evaluate(() => ({ d: window.__audit.drops.length, r: document.getElementById('game-canvas').getBoundingClientRect().toJSON(), bw: document.getElementById('game-canvas').width }));
    await page.setViewportSize({ width: 844, height: 390 }); await sleep(2500);
    const after = await page.evaluate(() => ({ d: window.__audit.drops.length, r: document.getElementById('game-canvas').getBoundingClientRect().toJSON(), bw: document.getElementById('game-canvas').width, screen: document.body.dataset.screen, scrollY: scrollY }));
    const mm = await page.evaluate(measure);
    out.reflow.rotate = { before: { drops: before.d, w: Math.round(before.r.width), h: Math.round(before.r.height) }, after: { drops: after.d, w: Math.round(after.r.width), h: Math.round(after.r.height), top: Math.round(after.r.top), screen: after.screen }, key: mm.key };
    await shot(page, 'game-rotated_paper_844x390');
    await c.close();
  });

  // ---------- D. touch gestures: does touch-action:none block scroll / pinch?
  await phase('touch', async () => {
    const c = await ctx(browser, { theme: 'paper', vp: '390x844', touch: true, extra: { isMobile: true, deviceScaleFactor: 2 } }); const page = await c.newPage(); watch(page, 'touch', out.console);
    await page.goto(URL); await sleep(400);
    const cdp = await c.newCDPSession(page);
    out.touch.viewportMeta = await page.$eval('meta[name="viewport"]', m => m.content);
    const scrollTry = async (label, x, y) => { await page.evaluate(() => scrollTo(0, 0)); await sleep(100); let err = null; try { await cdp.send('Input.synthesizeScrollGesture', { x, y, yDistance: -260, speed: 1200, gestureSourceType: 'touch' }); } catch (e) { err = String(e.message).slice(0, 80); } await sleep(250); const sy = await page.evaluate(() => Math.round(scrollY)); return { label, x, y, scrolledTo: sy, err }; };
    const pinchTry = async (label, x, y) => { let err = null; try { await cdp.send('Input.synthesizePinchGesture', { x, y, scaleFactor: 2, relativeSpeed: 800, gestureSourceType: 'touch' }); } catch (e) { err = String(e.message).slice(0, 80); } await sleep(250); const s = await page.evaluate(() => Math.round(visualViewport.scale * 100) / 100); try { await cdp.send('Input.synthesizePinchGesture', { x: 195, y: 60, scaleFactor: 0.4, relativeSpeed: 800, gestureSourceType: 'touch' }); } catch (_) {} await sleep(200); return { label, scaleAfter: s, err }; };
    const pos = async sel => page.$eval(sel, e => { const r = e.getBoundingClientRect(); return [Math.round(r.left + r.width / 2), Math.round(r.top + r.height / 2)]; });
    out.touch.titleScrollH = await page.evaluate(() => document.scrollingElement.scrollHeight);
    const T = out.touch.tests = [];
    T.push(await scrollTry('title: start on body text', ...(await pos('.hero-description'))));
    T.push(await scrollTry('title: start on Play solo button', ...(await pos('#start-button'))));
    T.push(await pinchTry('title: pinch on body text', ...(await pos('.hero-description'))));
    T.push(await pinchTry('title: pinch on Play solo button', ...(await pos('#start-button'))));
    await page.evaluate(() => { window.__audit.mode = 'good'; }); await page.click('#start-button'); await sleep(1200);
    out.touch.gameScrollH = await page.evaluate(() => document.scrollingElement.scrollHeight);
    T.push(await scrollTry('game: start on canvas', ...(await pos('#game-canvas'))));
    T.push(await scrollTry('game: start on Drop button', ...(await pos('#drop-button'))));
    T.push(await scrollTry('game: start on control help text', ...(await pos('#control-help'))));
    T.push(await scrollTry('game: start on header', 120, 60));
    T.push(await pinchTry('game: pinch on canvas', ...(await pos('#game-canvas'))));
    out.touch.scrollableBandsPx = await page.evaluate(() => { scrollTo(0, 0); const cvs = document.getElementById('game-canvas').getBoundingClientRect(); const d = document.getElementById('drop-button').getBoundingClientRect(); return { viewportH: innerHeight, canvasTop: Math.round(cvs.top), canvasBottom: Math.round(cvs.bottom), canvasW: Math.round(cvs.width), dropTop: Math.round(d.top), dropBottom: Math.round(d.bottom), dropRight: Math.round(d.right) }; });
    // tap on canvas via real touch
    const d0 = await page.evaluate(() => { window.__audit.mode = 'off'; return window.__audit.drops.length; });
    const [cx, cy] = await pos('#game-canvas'); await page.touchscreen.tap(cx, cy); await sleep(250);
    out.touch.tapCanvasDrops = (await page.evaluate(() => window.__audit.drops.length)) - d0;
    await c.close();
  });

  // ---------- E. grain / scanline overlay effect on text (pixel measurement)
  for (const theme of THEMES) await phase('grain:' + theme, async () => {
    const c = await ctx(browser, { theme, vp: '1280x800' }); const page = await c.newPage();
    await page.goto(URL); await sleep(500);
    const stat = async sel => { const buf = await page.locator(sel).first().screenshot(); const png = PNG.sync.read(buf); const L = []; for (let i = 0; i < png.data.length; i += 4) L.push(lum(png.data[i], png.data[i + 1], png.data[i + 2])); L.sort((a, b) => a - b); const lo = L[Math.floor(L.length * 0.02)], hi = L[Math.floor(L.length * 0.98)]; return { lo: Math.round(lo * 1000) / 1000, hi: Math.round(hi * 1000) / 1000, contrast: Math.round((hi + 0.05) / (lo + 0.05) * 100) / 100 }; };
    const withO = { hero: await stat('.hero-description'), small: await stat('#teamwork-button .soon') };
    await page.addStyleTag({ content: 'body::after{display:none !important}' }); await sleep(150);
    const without = { hero: await stat('.hero-description'), small: await stat('#teamwork-button .soon') };
    out.grain[theme] = { withOverlay: withO, withoutOverlay: without };
    await c.close();
  });

  // ---------- F. sound toggle + persistence, cue sheet
  await phase('sound', async () => {
    const c = await ctx(browser, { theme: 'paper', vp: '1280x800' }); const page = await c.newPage(); watch(page, 'sound', out.console);
    await page.goto(URL); await sleep(400);
    const read = () => page.evaluate(() => ({ pressed: document.getElementById('sound-toggle').getAttribute('aria-pressed'), label: document.getElementById('sound-label').textContent, aria: document.getElementById('sound-toggle').getAttribute('aria-label'), status: document.getElementById('sound-status').textContent, ls: Object.keys(localStorage), ss: Object.keys(sessionStorage) }));
    out.sound.initial = await read();
    await page.click('#sound-toggle'); await sleep(400); out.sound.afterToggle = await read();
    await page.reload(); await sleep(500); out.sound.afterReload = await read();
    out.sound.cueSheet = await page.evaluate(() => { try { const j = JSON.parse(document.getElementById('audio-cue-sheet').textContent); return Array.isArray(j) ? j.map(x => x.id || x.event || JSON.stringify(x).slice(0, 40)) : Object.keys(j.cues || j); } catch (e) { return String(e); } });
    await c.close();
  });

  // ---------- G. idle solo run (no input at all) + first-run timing
  await phase('idle', async () => {
    const c = await ctx(browser, { theme: 'paper', vp: '390x844', touch: true }); const page = await c.newPage(); watch(page, 'idle', out.console);
    const tLoad = Date.now(); await page.goto(URL); await page.waitForSelector('#start-button'); out.firstRun.loadMs = Date.now() - tLoad;
    out.firstRun.titleButtons = await page.evaluate(() => Array.from(document.querySelectorAll('#title-screen button')).filter(b => b.offsetParent).map(b => b.textContent.replace(/\s+/g, ' ').trim()));
    await page.evaluate(() => { window.__audit.t0 = performance.now(); });
    await page.click('#start-button'); await sleep(250);
    out.firstRun.atStart = await page.evaluate(() => ({ screen: document.body.dataset.screen, hint: document.getElementById('canvas-hint').textContent, hintVisible: !document.getElementById('canvas-hint').hidden, help: document.getElementById('control-help').textContent, voteCountdown: document.getElementById('vote-countdown').textContent, effectCaption: document.getElementById('effect-caption').textContent, dialogs: document.querySelectorAll('dialog[open]').length }));
    await sleep(2750); await page.locator('#game-stage').screenshot({ path: require('path').join(AUDIT, 'screenshots', 'autodrop-ring_paper_390x844.png') });
    const tl = [];
    for (let i = 0; i < 80; i++) { const s = await page.evaluate(() => ({ screen: document.body.dataset.screen, n: window.__audit.drops.length, h: document.getElementById('height-display').textContent, toast: document.getElementById('canvas-toast').textContent })); if (!tl.length || tl[tl.length - 1].n !== s.n || tl[tl.length - 1].screen !== s.screen) tl.push({ t: Math.round(3 + i * 0.5), ...s }); if (s.screen === 'results') break; await sleep(500); }
    out.idle.timeline = tl; out.idle.drops = await page.evaluate(() => window.__audit.drops);
    await c.close();
  });

  await browser.close();
  save('keyboard-a11y.json', out);
  console.log('errors', out.errors.length, 'console', out.console.length);
  console.log('A11Y COMPLETE');
})().catch(e => { console.error('FATAL', e); save('keyboard-a11y.json', out); process.exit(1); });
