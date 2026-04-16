
import { test, expect } from '@playwright/test';

test('User can navigate to About Wikipedia page', async ({ page }) => {
  await page.goto('https://en.wikipedia.org');

  await page.getByRole('link', { name: 'About Wikipedia' }).click();

  await expect(page).toHaveURL(/Wikipedia:About/);

  const heading = page.locator('#firstHeading');
  await expect(heading).toContainText('About');
});
