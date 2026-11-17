import path from 'node:path';
import type { Page } from '@playwright/test';

export const SCREENSHOTS_DIR = path.resolve('screenshots');

/** Saves a full-page screenshot to screenshots/<name>-<timestamp>.png */
export async function saveScreenshot(page: Page, name: string) {
  const safeName = name.replace(/[^a-z0-9-_]+/gi, '_').toLowerCase();
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filePath = path.join(SCREENSHOTS_DIR, `${safeName}-${timestamp}.png`);
  await page.screenshot({ path: filePath, fullPage: true });
  return filePath;
}
