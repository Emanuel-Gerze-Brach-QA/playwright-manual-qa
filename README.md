# Manual QA – Playwright Support Repository

This repository showcases how **Play used to support **manual QA workflows** through lightweight, focused automation.

The purpose of this project is **not** to build a full automation framework, but to demonstrate how a Manual QA Engineer can translate real testing scenarios into stable and repeatable automated checks.

---

## Purpose of this repository

This project demonstrates:
- Manual QA thinking applied to automation
- Testing of critical and regression‑prone user flows
- Validation of user‑visible behavior instead of internal implementation details
- Focus on negative scenarios and error handling

Automation is used strictly as a **support tool for manual QA**, not as a replacement for exploratory or functional testing.

---

## Testing scope

The automated checks in this repository focus on:
- Form submission and validation
- Authentication error handling
- Navigation and basic user flows
- Required field and negative scenarios

Visual layout, styling, and fragile DOM structures are intentionally avoided.

---

## Example: Negative forgot password scenario

```ts
await page.goto('https://the-internet.herokuapp.com/forgot_password');
await page.click('button#form_submit');
await expect(page.locator('h1')).toHaveText('Internal Server Error');
