import { test, expect } from '../fixtures/fixtures';
import { saveScreenshot } from '../utils/screenshot';

test.describe('Counter', () => {
  test.beforeEach(async ({ counterPage }) => {
    await counterPage.goto();
  });

  test('shows the welcome title and starts at 0', async ({ counterPage }) => {
    await expect(counterPage.title).toContainText('Your first project is up and running');
    await counterPage.expectValue(0);
  });

  test('increments and decrements the counter', async ({ counterPage, page }) => {
    await counterPage.click('+1');
    await counterPage.click('+2');
    await counterPage.expectValue(3);

    await counterPage.click('-1');
    await counterPage.click('-2');
    await counterPage.expectValue(0);

    await saveScreenshot(page, 'counter-after-increment-decrement');
  });

  test('wraps back past 100', async ({ counterPage }) => {
    await counterPage.click('+2', 50);
    await counterPage.expectValue(0);
  });
});
