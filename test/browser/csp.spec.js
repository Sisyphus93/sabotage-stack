'use strict';
const { test, expect } = require('@playwright/test');
const { createGameServer } = require('../../server');

let app; let origin;
test.beforeAll(async () => {
  app = createGameServer();
  await new Promise(resolve => app.server.listen(0, '127.0.0.1', resolve));
  origin = `http://127.0.0.1:${app.server.address().port}`;
});
test.afterAll(async () => { if (app) await app.close(); });

async function openGame(browser, route = '/', background = false) {
  const context = await browser.newContext();
  const errors = [];
  await context.addInitScript(() => {
    window.cspViolations = [];
    document.addEventListener('securitypolicyviolation', event => window.cspViolations.push({ directive: event.effectiveDirective, blocked: event.blockedURI }));
    window.addEventListener('unhandledrejection', event => window.cspViolations.push({ rejection: String(event.reason) }));
  });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  const sockets = [];
  page.on('websocket', socket => sockets.push(socket.url()));
  await page.goto(`${origin}${route}?tier=low&scale=0.5`);
  await expect(page.locator('#stage3d')).toBeAttached();
  await expect.poll(() => page.evaluate(() => {
    const gl = document.querySelector('#stage3d')?.getContext('webgl2');
    return Boolean(gl && !gl.isContextLost() && window.SabotageStackHost?.active);
  })).toBe(true);
  if (background) {
    // Use the existing QA draw-only switch after real rendering/icon baking. Keep simulation and WebSockets live
    // while other tabs compile their shaders on the shared software GPU; render each round again before asserting.
    await expect(page.locator('.brand-mark svg image[href^="data:"]')).toHaveCount(1);
    await page.evaluate(() => { window.__stack3dNoRender = true; });
  }
  return { page, context, errors, sockets };
}

async function assertClean(client) {
  await client.page.evaluate(async () => {
    window.__stack3dNoRender = false;
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
  await expect(client.page.locator('#stage3d')).toBeAttached();
  await expect(client.page.locator('#webgl-required')).toHaveCount(0);
  // Icon baking is deferred until after the first rendered frame. Wait for its images, not merely load/networkidle.
  await expect(client.page.locator('.brand-mark svg image[href^="data:"]')).toHaveCount(1);
  await client.page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map(image => image.decode()));
    await Promise.all([...document.querySelectorAll('svg image')].map(async node => {
      const image = new Image(); image.src = node.getAttribute('href'); await image.decode();
    }));
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
  expect(await client.page.evaluate(() => window.cspViolations)).toEqual([]);
  expect(client.errors).toEqual([]);
}

test('every theme loads its fonts from same-origin files and a repeat navigation reuses the cache', async ({ browser }) => {
  const context = await browser.newContext();
  const errors = [];
  await context.addInitScript(() => {
    window.cspViolations = [];
    document.addEventListener('securitypolicyviolation', event => window.cspViolations.push({ directive: event.effectiveDirective, blocked: event.blockedURI }));
  });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  const themes = {
    paper: [['Fraunces', 400], ['Fraunces', 700], ['Caveat', 400], ['DM Sans', 400]],
    sunset: [['Press Start 2P', 400], ['VT323', 400]],
    primetime: [['Alfa Slab One', 400], ['Barlow Condensed', 500], ['Barlow Condensed', 700]]
  };
  try {
    await page.goto(`${origin}/?tier=low&scale=0.5`);
    await page.waitForFunction(() => window.SabotageStack && typeof window.SabotageStack.setTheme === 'function');
    for (const [theme, families] of Object.entries(themes)) {
      const checks = await page.evaluate(async ({ theme, families }) => {
        window.SabotageStack.setTheme(theme);
        const result = [];
        for (const [family, weight] of families) {
          const text = family === 'Barlow Condensed' ? 'SABOTAGE STACK' : 'Sabotage Stack';
          const loaded = await document.fonts.load(`${weight} 16px "${family}"`, text);
          result.push({ family, weight, loaded: loaded.length, available: document.fonts.check(`${weight} 16px "${family}"`, text) });
        }
        await document.fonts.ready;
        return result;
      }, { theme, families });
      for (const face of checks) {
        expect(face.loaded, `${theme}: ${face.weight} ${face.family} loaded`).toBeGreaterThan(0);
        expect(face.available, `${theme}: ${face.weight} ${face.family} available`).toBe(true);
      }
    }
    expect(await page.evaluate(() => window.cspViolations)).toEqual([]);
    expect(errors).toEqual([]);

    await page.goto(`${origin}/?tier=low&scale=0.5`);
    await page.evaluate(() => document.fonts.ready);
    const cachedFonts = await page.evaluate(() => performance.getEntriesByType('resource')
      .filter(entry => entry.name.endsWith('.woff2'))
      .map(entry => ({ name: entry.name, transferSize: entry.transferSize })));
    expect(cachedFonts.length).toBeGreaterThan(0);
    expect(cachedFonts.filter(entry => entry.transferSize !== 0)).toEqual([]);
    expect(await page.evaluate(() => window.cspViolations)).toEqual([]);
    expect(errors).toEqual([]);
  } finally { await context.close(); }
});

test('the first scene fetches only its own theme face; a switch fetches the other once and keeps it', async ({ browser }) => {
  const context = await browser.newContext();
  const errors = [];
  await context.addInitScript(() => {
    window.cspViolations = [];
    document.addEventListener('securitypolicyviolation', event => window.cspViolations.push({ directive: event.effectiveDirective, blocked: event.blockedURI }));
    window.addEventListener('unhandledrejection', event => window.cspViolations.push({ rejection: String(event.reason) }));
  });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  const faces = () => page.evaluate(() => performance.getEntriesByType('resource')
    .map(entry => entry.name).filter(name => name.includes('/public/typefaces/')));
  const count = async key => (await faces()).filter(name => name.includes(`typeface-${key}-`)).length;
  const switchTo = async theme => {
    await page.evaluate(name => window.SabotageStack.setTheme(name), theme);
    await expect.poll(() => page.evaluate(() => window.__stack3d?.theme)).toBe(theme);
    await expect.poll(() => page.evaluate(() => {
      const title = window.__stack3d?.title;
      return Boolean(title?.mesh && title.mesh.count > 100 && title.letters.length > 0);
    })).toBe(true);
  };
  try {
    await page.goto(`${origin}/?tier=low&scale=0.5`);
    await expect(page.locator('#stage3d')).toBeAttached();
    await expect.poll(() => page.evaluate(() => window.__stack3d?.theme)).toBe('paper');
    // The stage is built only after the active face has arrived, so the first scene is complete and the other faces are untouched.
    expect(await faces()).toHaveLength(1);
    expect(await count('paper')).toBe(1);
    expect(await count('sunset')).toBe(0);
    expect(await count('primetime')).toBe(0);
    // The switch checks are about fetching and building text, not drawing on a software GPU; keep the frame loop cheap.
    await page.evaluate(() => { window.__stack3dNoRender = true; });

    await switchTo('sunset');
    await expect.poll(() => count('sunset')).toBe(1);
    await switchTo('primetime');
    await expect.poll(() => count('primetime')).toBe(1);
    // Going back uses the in-memory face: no second request.
    await switchTo('sunset');
    await switchTo('paper');
    await expect.poll(() => count('paper')).toBe(1);
    await expect.poll(() => count('sunset')).toBe(1);
    await expect.poll(() => count('primetime')).toBe(1);
    expect(await faces()).toHaveLength(3);

    expect(await page.evaluate(() => window.cspViolations)).toEqual([]);
    expect(errors).toEqual([]);
  } finally { await context.close(); }
});

test('a failed typeface fetch leaves the 3D layer running without errors or an unhandled rejection', async ({ browser }) => {
  const context = await browser.newContext();
  const pageErrors = [];
  await context.addInitScript(() => {
    window.cspViolations = [];
    document.addEventListener('securitypolicyviolation', event => window.cspViolations.push({ directive: event.effectiveDirective, blocked: event.blockedURI }));
    window.addEventListener('unhandledrejection', event => window.cspViolations.push({ rejection: String(event.reason) }));
  });
  const page = await context.newPage();
  page.on('pageerror', error => pageErrors.push(error.message));
  await page.route('**/public/typefaces/*.json', route => route.fulfill({ status: 500, contentType: 'application/json', body: '{}' }));
  try {
    await page.goto(`${origin}/?tier=low&scale=0.5`);
    await expect(page.locator('#stage3d')).toBeAttached();
    await expect(page.locator('#webgl-required')).toHaveCount(0);
    await expect.poll(() => page.evaluate(() => Boolean(window.__stack3d))).toBe(true);
    await page.evaluate(() => { window.__stack3dNoRender = true; });
    const advanced = await page.evaluate(async () => {
      const stage = window.__stack3d; const before = stage.time;
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      return stage.time >= before && !stage.disposed;
    });
    expect(advanced).toBe(true);
    // The theme still switches and its non-text scene renders; only the lettering is omitted.
    await page.evaluate(() => window.SabotageStack.setTheme('sunset'));
    await expect.poll(() => page.evaluate(() => window.__stack3d?.theme)).toBe('sunset');
    await expect(page.locator('#webgl-required')).toHaveCount(0);
    expect(pageErrors).toEqual([]);
    expect(await page.evaluate(() => window.cspViolations)).toEqual([]);
  } finally { await context.close(); }
});

test('real 3D solo client can drop a Mover without CSP violations', async ({ browser }) => {
  const client = await openGame(browser);
  try {
    await client.page.locator('#solo-auto-drop-select').selectOption('off');
    await client.page.locator('#start-button').click();
    await expect(client.page.locator('body')).toHaveAttribute('data-screen', 'game');
    await client.page.locator('#drop-button').click();
    await expect.poll(() => client.page.evaluate(() => document.body.dataset.screen === 'results' || Number(document.querySelector('#height-display').textContent) > 0)).toBe(true);
    await assertClean(client);
  } finally { await client.context.close(); }
});

for (const mode of ['teamwork', 'competitive']) {
  test(`real 3D ${mode} host and players join and start over same-host WebSockets`, async ({ browser }) => {
    const clients = [];
    try {
      const host = await openGame(browser, '/sabotage-stack.html', true); clients.push(host);
      await host.page.locator(`[data-host-mode="${mode}"]`).click();
      await expect(host.page.locator('#room-code-display')).toHaveText(/^[A-Z]{4}$/);
      const code = (await host.page.locator('#room-code-display').textContent()).trim();
      for (const name of ['Ada', 'Bo']) {
        const player = await openGame(browser, '/', true); clients.push(player);
        await player.page.locator('#join-game-button').click();
        await player.page.locator('#join-room-code').fill(code);
        await player.page.locator('#join-display-name').fill(name);
        await player.page.locator('#join-form button[type="submit"]').click();
        await expect(player.page.locator('body')).toHaveAttribute('data-screen', 'lobby');
      }
      await expect(host.page.locator('#room-start-button')).toBeEnabled();
      await host.page.locator('#room-start-button').click();
      for (const client of clients) {
        await expect(client.page.locator('body')).toHaveAttribute('data-screen', 'game');
        expect(client.sockets).toContain(origin.replace('http:', 'ws:') + '/ws');
        await assertClean(client);
        await client.page.evaluate(() => { window.__stack3dNoRender = true; });
      }
    } finally { await Promise.allSettled(clients.map(client => client.context.close())); }
  });
}
