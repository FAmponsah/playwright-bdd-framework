import { test as base, createBdd } from 'playwright-bdd';
import { CounterPage } from '../pages/CounterPage';
import { saveScreenshot } from '../utils/screenshot';

type Fixtures = {
  counterPage: CounterPage;
  screenshotOnFailure: void;
};

export const test = base.extend<Fixtures>({
  counterPage: async ({ page }, use) => {
    await use(new CounterPage(page));
  },

  // Captures a screenshot into screenshots/ whenever a test fails
  screenshotOnFailure: [
    async ({ page }, use, testInfo) => {
      await use();
      if (testInfo.status !== testInfo.expectedStatus) {
        await saveScreenshot(page, `FAILED-${testInfo.title}`);
      }
    },
    { auto: true },
  ],
});

export { expect } from '@playwright/test';
export const { Given, When, Then } = createBdd(test);
