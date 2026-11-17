import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const PORT = 5173;
const BASE_URL = process.env.BASE_URL ?? `http://localhost:${PORT}`;

// Generates Playwright test files from the Gherkin features into .features-gen/
const bddTestDir = defineBddConfig({
  features: 'tests/features/**/*.feature',
  steps: ['tests/steps/**/*.ts', 'tests/fixtures/**/*.ts'],
});

export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  outputDir: 'test-results',
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'spec',
      testDir: 'tests/specs',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'bdd',
      testDir: bddTestDir,
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  // Starts the Vite app under test unless BASE_URL points elsewhere
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: `npm run dev -- --port ${PORT} --strictPort`,
        url: BASE_URL,
        reuseExistingServer: !process.env.CI,
      },
});
