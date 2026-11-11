#!/usr/bin/env node
'use strict';
// Vendors Three.js into sabotage-stack.html so the client stays a single file that runs
// from a server, a LAN address or straight off the disk (file://) with full 3D.
//
//   node scripts/embed-three.js            download three@PINNED, transform, minify, splice into the HTML
//   node scripts/embed-three.js --check    exit 1 if the embedded blob is missing or stale markers exist
//
// The pinned library is transformed from its ES-module build into one classic script that
// assigns window.THREE, then minified with terser (optional: npm i terser; without it the
// raw sources are embedded, which works but is ~2 MB larger). The result lives between the
// THREE_VENDOR markers inside <script type="text/plain" id="three-vendor-source"> so the
// page only evaluates it after a successful WebGL probe (headless test environments skip it).
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const THREE_VERSION = '0.187.0';
const root = path.join(__dirname, '..');
const htmlPath = path.join(root, 'sabotage-stack.html');
const START = '/* THREE_VENDOR_START */';
const END = '/* THREE_VENDOR_END */';

function loadTerser() {
  const candidates = [
    () => require('terser'),
    () => require(path.join(os.homedir(), 'tools', 'node_modules', 'terser')),
    () => require(path.join(root, 'node_modules', 'terser'))
  ];
  for (const load of candidates) {
    try { return load(); } catch (_) { /* try the next location */ }
  }
  return null;
}

function extractStatement(source, pattern, label) {
  const match = pattern.exec(source);
  if (!match) throw new Error(`Could not find the ${label} in the three.js sources`);
  return match;
}

function exportNames(clause) {
  return clause.split(',').map(entry => entry.trim()).filter(Boolean).map(entry => {
    const aliased = /^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$/.exec(entry);
    return aliased ? { local: aliased[1], name: aliased[2] } : { local: entry, name: entry };
  });
}

function transformToGlobal(coreSource, moduleSource) {
  const coreExport = extractStatement(coreSource, /export\s*\{([^{}]*)\}\s*;?\s*$/, 'core export list');
  const coreBody = coreSource.slice(0, coreExport.index).trimEnd();
  const importStatement = extractStatement(moduleSource, /import\s*\{([^{}]*)\}\s*from\s*['"]\.\/three\.core\.js['"];\s*/, 'core import list');
  let body = moduleSource.slice(0, importStatement.index) + moduleSource.slice(importStatement.index + importStatement[0].length);
  const reExportMatch = extractStatement(body, /export\s*\{([^{}]*)\}\s*from\s*['"]\.\/three\.core\.js['"];\s*/, 'core re-export list');
  body = body.slice(0, reExportMatch.index) + body.slice(reExportMatch.index + reExportMatch[0].length);
  const moduleExport = extractStatement(body, /export\s*\{([^{}]*)\}\s*;?\s*$/, 'module export list');
  const moduleBody = body.slice(0, moduleExport.index).trimEnd();
  // Names the module body imports from core, plus core names it re-exports to consumers.
  // Both become bridge variables into the core scope.
  const coreListed = new Map(); // exported name -> core local
  for (const { local, name } of exportNames(coreExport[1])) coreListed.set(name, local);
  const bridged = new Map(); // module-scope binding -> core local
  for (const { local, name } of [...exportNames(importStatement[1]), ...exportNames(reExportMatch[1])]) {
    if (!bridged.has(local)) bridged.set(local, name);
  }
  for (const [local] of bridged) {
    if (!coreListed.has(bridged.get(local))) throw new Error(`Module binding ${local} is not exported by three.core.js`);
  }
  const bridge = [...bridged].map(([local, coreName]) => `var ${local}=coreExports[${JSON.stringify(coreName)}];`).join('');
  // window.THREE exposes the module's public names: its own definitions and the core re-exports.
  const entries = new Map();
  for (const { local, name } of exportNames(reExportMatch[1])) entries.set(name, local);
  for (const { local, name } of exportNames(moduleExport[1])) entries.set(name, local);
  const coreEntries = [...coreListed].map(([name, local]) => `${JSON.stringify(name)}:${local}`).join(',');
  const threeEntries = [...entries].map(([name, local]) => `${JSON.stringify(name)}:${local}`).join(',');
  const banner = `/* Three.js v${THREE_VERSION} (MIT) — vendored by scripts/embed-three.js. https://github.com/mrdoob/three.js */`;
  // Core and module each emit generated top-level names (e.g. _m1$1), so they cannot share
  // one scope. Keep each in its own IIFE and bridge the imported bindings explicitly.
  const output = `${banner}\n(function () {\n'use strict';\nvar coreExports=(function () {\n'use strict';\n${coreBody}\nreturn {${coreEntries}};\n})();\nwindow.THREE=(function () {\n'use strict';\n${bridge}\n${moduleBody}\nreturn {${threeEntries}};\n})();\n})();\n`;
  if (/^\s*(?:import|export)\s/m.test(output.replace(/\/\*[\s\S]*?\*\//g, ''))) {
    throw new Error('Transform left an import/export statement behind');
  }
  return output;
}

function safeForScriptTag(code) {
  // Inside a <script> block the parser stops at "</script"; keep JS string contents intact.
  return code.replace(/<\/script/gi, '<\\/script').replace(/<!--/g, '<\\!--');
}

function build() {
  const scratch = fs.mkdtempSync(path.join(os.tmpdir(), 'three-vendor-'));
  try {
    execFileSync('npm', ['pack', `three@${THREE_VERSION}`, '--silent'], { cwd: scratch, stdio: 'pipe' });
    const tarball = fs.readdirSync(scratch).find(name => name.endsWith('.tgz'));
    if (!tarball) throw new Error('npm pack did not produce a tarball');
    execFileSync('tar', ['-xzf', tarball, 'package/build/three.core.js', 'package/build/three.module.js', 'package/LICENSE'], { cwd: scratch, stdio: 'pipe' });
    const buildDir = path.join(scratch, 'package', 'build');
    const license = fs.readFileSync(path.join(scratch, 'package', 'LICENSE'), 'utf8').trim();
    let code = transformToGlobal(
      fs.readFileSync(path.join(buildDir, 'three.core.js'), 'utf8'),
      fs.readFileSync(path.join(buildDir, 'three.module.js'), 'utf8')
    );
    const terser = loadTerser();
    if (terser) {
      const result = terser.minify_sync
        ? terser.minify_sync(code, { compress: { passes: 2 }, mangle: true, format: { comments: false } })
        : null;
      if (result && result.code) code = result.code;
    } else {
      console.warn('terser not found — embedding unminified three.js (run `npm i terser` to shrink the page).');
    }
    return safeForScriptTag(`/* Three.js v${THREE_VERSION} (MIT) — vendored by scripts/embed-three.js */\n/*\n${license}\n*/\n${code}`);
  } finally {
    fs.rmSync(scratch, { recursive: true, force: true });
  }
}

function splice(html, blob) {
  const start = html.indexOf(START);
  const end = html.indexOf(END);
  if (start === -1 || end === -1 || end < start) throw new Error('THREE_VENDOR markers not found in sabotage-stack.html');
  return html.slice(0, start + START.length) + '\n' + blob + '\n' + html.slice(end);
}

if (require.main === module) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  if (process.argv.includes('--check')) {
    const start = html.indexOf(START);
    const end = html.indexOf(END);
    const ok = start !== -1 && end > start && end - start > 100_000;
    console.log(ok ? 'three.js vendor blob is embedded' : 'three.js vendor blob is missing or tiny');
    process.exit(ok ? 0 : 1);
  }
  const next = splice(html, build());
  fs.writeFileSync(htmlPath, next);
  const size = (next.length / 1024 / 1024).toFixed(2);
  console.log(`Vendored three.js v${THREE_VERSION} into sabotage-stack.html (${size} MB total)`);
}

module.exports = { transformToGlobal, splice, THREE_VERSION };
