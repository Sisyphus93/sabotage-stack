'use strict';
// Node-side typeface loading for the pure-logic tests: the browser fetches each face on demand, while these tests install
// the committed assets directly so the synchronous geometry functions have a face before they are called.
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..', '..');
const KEYS = ['paper', 'sunset', 'primetime'];

async function installTypefaces() {
  const { installFace } = await import(path.join(ROOT, 'client3d', 'text3d.js'));
  for (const key of KEYS) {
    const file = path.join(ROOT, 'client3d', 'assets', `typeface-${key}.json`);
    installFace(key, JSON.parse(fs.readFileSync(file, 'utf8')));
  }
}

module.exports = { installTypefaces, KEYS };
