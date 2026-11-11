// Shared launcher for all audit scripts. Tooling (system libs, fonts) lives inside $AUDIT/tooling.
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');
const axeMod = require('@axe-core/playwright');
const AxeBuilder = axeMod.AxeBuilder || axeMod.default;
const { botInit } = require('./inpage');
const AUDIT = path.resolve(__dirname, '..');
const T = path.join(AUDIT, 'tooling');
const env = Object.assign({}, process.env, {
  LD_LIBRARY_PATH: [path.join(T, 'syslibs/usr/lib/x86_64-linux-gnu'), path.join(T, 'syslibs/lib/x86_64-linux-gnu'), process.env.LD_LIBRARY_PATH || ''].join(':'),
  FONTCONFIG_FILE: path.join(T, 'fonts.conf'),
});
const URL = 'http://127.0.0.1:3100/';
const THEME_KEY = 'sabotage-stack-theme-v1';
const THEMES = ['paper', 'sunset', 'primetime'];
const VIEWPORTS = { '360x640': { width: 360, height: 640 }, '390x844': { width: 390, height: 844 }, '768x1024': { width: 768, height: 1024 }, '1280x800': { width: 1280, height: 800 } };
async function launch(extraArgs = []) { return chromium.launch({ env, args: ['--no-sandbox', ...extraArgs] }); }
// New context with theme pre-seeded via addInitScript (paper = no key = default).
async function ctx(browser, { theme = 'paper', vp = '390x844', reducedMotion = false, touch = false, extra = {} } = {}) {
  const c = await browser.newContext(Object.assign({ viewport: VIEWPORTS[vp] || vp, reducedMotion: reducedMotion ? 'reduce' : 'no-preference', hasTouch: touch }, extra));
  await c.addInitScript(botInit);
  if (theme !== 'paper') await c.addInitScript(([k, v]) => { try { localStorage.setItem(k, v); } catch (_) {} }, [THEME_KEY, theme]);
  return c;
}
// Console/pageerror collector. Returns the array it pushes into.
function watch(page, label, sink) {
  page.on('console', m => { const t = m.type(); if (t === 'error' || t === 'warning') sink.push({ label, type: 'console.' + t, text: m.text().slice(0, 300) }); });
  page.on('pageerror', e => sink.push({ label, type: 'pageerror', text: String(e && e.message || e).slice(0, 300) }));
  page.on('requestfailed', r => sink.push({ label, type: 'requestfailed', text: r.url().slice(0, 120) + ' ' + (r.failure() && r.failure().errorText) }));
  return sink;
}
const shot = (page, name, opts = {}) => page.screenshot(Object.assign({ path: path.join(AUDIT, 'screenshots', name + '.png') }, opts));
const save = (name, data) => fs.writeFileSync(path.join(AUDIT, 'data', name), typeof data === 'string' ? data : JSON.stringify(data, null, 2));
async function axe(page) {
  const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice']).analyze();
  return {
    violations: r.violations.map(v => ({ id: v.id, impact: v.impact, help: v.help, tags: v.tags.filter(t => /wcag\d|best/.test(t)),
      nodes: v.nodes.map(n => ({ target: n.target.join(' '), summary: (n.failureSummary || '').replace(/\s+/g, ' ').slice(0, 240), html: n.html.slice(0, 140) })) })),
    incomplete: r.incomplete.map(v => ({ id: v.id, n: v.nodes.length, targets: v.nodes.slice(0, 6).map(n => n.target.join(' ')) })),
    passes: r.passes.length
  };
}
const sleep = ms => new Promise(r => setTimeout(r, ms));
module.exports = { axe, launch, ctx, watch, shot, save, sleep, URL, THEMES, VIEWPORTS, THEME_KEY, AUDIT };
