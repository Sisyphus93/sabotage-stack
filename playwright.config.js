'use strict';
const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './test/browser',
  workers: 1,
  timeout: 180_000,
  expect: { timeout: 30_000 },
  use: {
    browserName: 'chromium',
    viewport: { width: 960, height: 720 },
    reducedMotion: 'reduce',
    actionTimeout: 30_000,
    trace: { mode: 'retain-on-failure', screenshots: false },
    launchOptions: { args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] }
  }
});
