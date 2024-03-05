import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  // globalSetup: "./global-setup.ts",
  testDir: './tests',
  timeout: 90 * 1000,

  reporter:
    [
      ['github'],
      ['html', { open: 'never'}],
      ['junit', {outputFile: "reports/test-results.xml"}]
    ],

  use: {
    trace: 'retain-on-failure',
    // storageState: "./LoginAuth.json",
    browserName: "chromium",
    screenshot: 'on',
    viewport: { width: 1850, height: 970 },
    video: {
      mode: 'retain-on-failure',
      size: {
        width: 1850,
        height: 970
      }
    },
    headless: true,
    launchOptions: {
      channel: 'chrome',
    }
  },

});
