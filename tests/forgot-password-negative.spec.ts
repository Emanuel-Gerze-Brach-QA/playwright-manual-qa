import { test, expect } from '@playwright/test';

test('User can submit forgot password form with empty email', async ({ page }) => {

  // Step 1: Open Forgot Password page
  await page.goto('https://the-internet.herokuapp.com/forgot_password');

  // Step 2: Click Retrieve password without entering email
  await page.click('button#form_submit');

  // Step 3: Validate that an error page is displayed
  await expect(page.locator('h1')).toHaveText('Internal Server Error');
});