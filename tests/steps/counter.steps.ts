import { Given, When, Then } from '../fixtures/fixtures';
import type { CounterButton } from '../pages/CounterPage';
import { saveScreenshot } from '../utils/screenshot';

Given('I am on the counter page', async ({ counterPage }) => {
  await counterPage.goto();
});

When('I click the {string} button {int} times', async ({ counterPage }, button: string, times: number) => {
  await counterPage.click(button as CounterButton, times);
});

Then('the counter value should be {int}', async ({ counterPage }, expected: number) => {
  await counterPage.expectValue(expected);
});

Then('I take a screenshot named {string}', async ({ page }, name: string) => {
  await saveScreenshot(page, name);
});
