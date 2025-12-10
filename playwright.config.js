// Playwright Test config for static site in workspace root
// It will start a static server at http://localhost:3000 before running tests.
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 30 * 1000,
  testDir: './tests',
  webServer: {
    command: 'npx http-server -c-1 -p 3000',
    port: 3000,
    timeout: 10 * 1000,
    reuseExistingServer: true
  },
  use: {
    headless: true,
    baseURL: 'http://localhost:3000'
  }
});
