import { expect, type Locator, type Page } from '@playwright/test';

export type CounterButton = '+1' | '+2' | '-1' | '-2';

export class CounterPage {
  readonly page: Page;
  readonly title: Locator;
  readonly counterValue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('h1.title');
    this.counterValue = page.locator('#counter-value');
  }

  async goto() {
    await this.page.goto('/');
  }

  async click(button: CounterButton, times = 1) {
    const locator = this.page.getByRole('button', { name: button, exact: true });
    for (let i = 0; i < times; i++) {
      await locator.click();
    }
  }

  async expectValue(value: number) {
    await expect(this.counterValue).toHaveText(String(value));
  }
}
