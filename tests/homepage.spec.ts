import { test, expect } from '@playwright/test';

test('Wikipedia homepage shows title and welcome text', async ({ page }) => {
  await page.goto('https://en.wikipedia.org');

  const title = page.locator('#firstHeading');
  await expect(title).toHaveText('Main Page');

  const welcomeText = page.getByText('Welcome to Wikipedia');
  await expect(welcomeText).toBeVisible();
});