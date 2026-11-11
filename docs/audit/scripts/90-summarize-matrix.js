const fs = require('fs'); const path = require('path');
const m = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/matrix.json'), 'utf8'));
const L = []; const p = s => L.push(s);
const combos = Object.keys(m.combos);
p('# Matrix summary'); p(`combos: ${combos.length}; console entries: ${m.console.length}`);
// axe
const rules = {};
for (const c of combos) for (const [screen, s] of Object.entries(m.combos[c].screens)) if (s.axe) for (const v of s.axe.violations) {
  const r = rules[v.id] = rules[v.id] || { impact: v.impact, help: v.help, tags: v.tags.join(','), hits: 0, combos: new Set(), screens: new Set(), targets: {}, sample: '' };
  r.combos.add(c); r.screens.add(screen);
  for (const n of v.nodes) { r.hits++; r.targets[n.target] = (r.targets[n.target] || 0) + 1; if (!r.sample) r.sample = n.summary; }
}
p('\n## axe violations by rule');
for (const [id, r] of Object.entries(rules).sort((a, b) => b[1].hits - a[1].hits)) {
  p(`- ${id} [${r.impact}] ${r.help} (${r.tags}) hits=${r.hits} combos=${r.combos.size} screens=${[...r.screens].join('/')}`);
  p('    targets: ' + Object.entries(r.targets).sort((a, b) => b[1] - a[1]).slice(0, 9).map(([t, n]) => `${t}×${n}`).join(' | '));
  p('    themes: ' + [...new Set([...r.combos].map(c => c.split('_')[0]))].join(',') + ' :: ' + r.sample.slice(0, 200));
}
const inc = {};
for (const c of combos) for (const [screen, s] of Object.entries(m.combos[c].screens)) if (s.axe) for (const v of s.axe.incomplete) { inc[v.id] = inc[v.id] || { n: 0, t: new Set() }; inc[v.id].n += v.n; v.targets.forEach(t => inc[v.id].t.add(t)); }
p('\n## axe incomplete (needs manual review)'); for (const [id, v] of Object.entries(inc)) p(`- ${id}: ${v.n} nodes e.g. ${[...v.t].slice(0, 5).join(' | ')}`);
let runs = 0; for (const c of combos) for (const s of Object.values(m.combos[c].screens)) if (s.axe) runs++;
p(`axe runs: ${runs}`);
// contrast
p('\n## computed contrast failures (enabled text, below 4.5 or 3 for large)');
const cf = {};
for (const c of combos) { const theme = c.split('_')[0]; for (const [screen, s] of Object.entries(m.combos[c].screens)) for (const f of s.measure.fails) { if (f.disabled) continue; const k = `${theme}|${f.sel}|${f.text.slice(0, 22)}`; const e = cf[k] = cf[k] || { ...f, theme, screens: new Set(), n: 0 }; e.cr = Math.min(e.cr, f.cr); e.screens.add(screen); e.n++; } }
for (const theme of ['paper', 'sunset', 'primetime']) { const list = Object.values(cf).filter(e => e.theme === theme).sort((a, b) => a.cr - b.cr); p(`### ${theme}: ${list.length} distinct`); for (const e of list.slice(0, 16)) p(`- ${e.cr}:1 (need ${e.need}) ${e.sel} "${e.text.slice(0, 26)}" ${e.size}px/${e.weight} ${e.fg} on ${e.bg}${e.bgImage ? ' +bgimg' : ''}${e.hiddenToAT ? ' [aria-hidden]' : ''} @${[...e.screens].join('/')}`); }
const df = {}; for (const c of combos) { const theme = c.split('_')[0]; for (const [screen, s] of Object.entries(m.combos[c].screens)) for (const f of s.measure.fails) if (f.disabled) { const k = theme + '|' + f.sel; df[k] = Math.min(df[k] || 99, f.cr); } }
p('### disabled-control text (exempt, informational): ' + Object.entries(df).map(([k, v]) => `${k}=${v}`).slice(0, 8).join('; '));
// small fonts
p('\n## text under 12px'); const sf = {};
for (const c of combos) { const [theme, vp] = c.split('_'); for (const [screen, s] of Object.entries(m.combos[c].screens)) for (const f of s.measure.small) { const k = `${theme}|${f.sel}|${f.size}|${f.family}`; (sf[k] = sf[k] || new Set()).add(vp); } }
for (const [k, v] of Object.entries(sf).slice(0, 30)) p(`- ${k} @${[...v].join(',')}`);
p('min font per theme: ' + ['paper', 'sunset', 'primetime'].map(t => t + '=' + Math.min(...combos.filter(c => c.startsWith(t)).flatMap(c => Object.values(m.combos[c].screens).map(s => s.measure.minFont)))).join(' '));
// targets
p('\n## targets under 44px (min w×h across combos; vps)'); const tg = {};
for (const c of combos) { const vp = c.split('_')[1]; for (const [screen, s] of Object.entries(m.combos[c].screens)) for (const t of s.measure.under44) { const e = tg[t.sel] = tg[t.sel] || { w: 999, h: 999, vps: new Set(), screens: new Set(), label: t.label, ta: t.touchAction }; e.w = Math.min(e.w, t.w); e.h = Math.min(e.h, t.h); e.vps.add(vp); e.screens.add(screen); } }
for (const [k, e] of Object.entries(tg)) p(`- ${k} ${e.w}×${e.h} "${e.label}" ta=${e.ta} vps=${[...e.vps].map(v => v.split('x')[0]).join(',')} @${[...e.screens].join('/')}`);
const ta = {}; for (const c of combos) for (const s of Object.values(m.combos[c].screens)) for (const t of s.measure.targets) (ta[t.touchAction] = ta[t.touchAction] || new Set()).add(t.sel);
p('\n## touch-action by value'); for (const [k, v] of Object.entries(ta)) p(`- ${k}: ${[...v].slice(0, 28).join(', ')}`);
// layout
p('\n## overflowX'); for (const c of combos) for (const [screen, s] of Object.entries(m.combos[c].screens)) if (s.measure.overflowX) p(`- ${c} ${screen} scrollW=${s.measure.scrollW} vw=${s.measure.vw}`);
p('\n## key element positions (paper)'); for (const vp of ['360x640', '390x844', '768x1024', '1280x800']) for (const screen of ['game', 'vote']) { const s = m.combos['paper_' + vp].screens[screen]; if (!s) continue; p(`- ${vp} ${screen} scrollH=${s.measure.scrollH}: ` + Object.entries(s.measure.key).map(([k, r]) => `${k}[y${r.y} ${r.w}×${r.h}${r.inView ? '' : ' OFFSCREEN'}]`).join(' ')); }
p('\n## grain overlay'); for (const t of ['paper', 'sunset', 'primetime']) p(`- ${t}: ${JSON.stringify(m.combos[t + '_1280x800'].screens.title.measure.grain)}`);
p('\n## run facts'); for (const c of combos) { const r = m.combos[c]; const d = r.drops || []; p(`- ${c}: theme=${r.themeApplied.data}/${r.themeApplied.select} wrapped=${r.themeApplied.coreWrapped} effect=${r.effect ? r.effect.name + ' | chip=' + r.effect.chip + ' | time=' + r.effect.time : r.midRunError} drops=${d.length} perfect=${d.filter(x => x.perfect).length} pw=${[...new Set(d.map(x => Math.round(x.pw * 100) / 100))].join(',')} maxSpeed=${Math.max(0, ...d.map(x => x.speed))}`); }
const r0 = m.combos['paper_1280x800'];
p('\n## vote text (paper 1280): ' + JSON.stringify(r0.voteText)); p('effect: ' + JSON.stringify(r0.effect)); p('results: ' + r0.resultText);
p('fonts loaded per theme: ' + ['paper', 'sunset', 'primetime'].map(t => t + '=' + m.combos[t + '_1280x800'].themeApplied.fonts.join('/')).join(' ; '));
p('\n## live regions declared: ' + JSON.stringify(r0.liveRegions));
p('## live-region log, solo run (paper 1280)'); for (const e of (r0.live || [])) p(`- ${(e.t / 1000).toFixed(1)}s [${e.region}${e.hiddenAncestor ? ' aria-hidden-ancestor' : ''}] ${e.text.slice(0, 110)}`);
fs.writeFileSync(path.join(__dirname, '../data/matrix-summary.md'), L.join('\n'));
console.log('written', L.length, 'lines');
