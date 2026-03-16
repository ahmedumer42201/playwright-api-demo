import { defineConfig } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './src',
  testIgnore: ['**/ui.demo.flow.spec.ts'],
  timeout: 30_000,
  retries: 1,
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['list'],
  ],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: isCI ? true : false,
    launchOptions: {
      slowMo: isCI ? 0 : 1500,
    },
  },
});