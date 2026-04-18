
import { test, expect } from '@playwright/test';

test('User sees error message when login credentials are invalid', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'invalid_user');
  await page.fill('#password', 'invalid_pass');

  await page.click('button[type="submit"]');

  const errorMessage = page.locator('#flash');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Your username is invalid');
});
