const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '.',
  timeout: 60_000,
  use: {
    headless: true,
    browserName: 'chromium',
  },
  projects: [
    {
      name: 'Desktop-1440x900',
      use: {
        browserName: 'chromium',
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: 'Laptop-1366x768',
      use: {
        browserName: 'chromium',
        viewport: { width: 1366, height: 768 },
      },
    },
    {
      name: 'iPad-Portrait',
      use: {
        browserName: 'chromium',
        ...devices['iPad (gen 7)'],
      },
    },
    {
      name: 'iPad-Landscape',
      use: {
        browserName: 'chromium',
        ...devices['iPad (gen 7)'],
        viewport: { width: 1024, height: 768 },
        isMobile: false,
      },
    },
    {
      name: 'iPhone-12',
      use: {
        browserName: 'chromium',
        ...devices['iPhone 12'],
      },
    },
    {
      name: 'Galaxy-S9+',
      use: {
        browserName: 'chromium',
        ...devices['Galaxy S9+'],
      },
    },
  ],
});
