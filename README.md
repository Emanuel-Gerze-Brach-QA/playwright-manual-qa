# Playwright – Manual QA Support Project

This repository contains a small Playwright project created to support **manual QA activities**.
It demonstrates how common manual test flows can be translated into simple, stable, and repeatable automated checks.

The focus of this project is **QA thinking and behavior validation**, not building complex automation frameworks.

---

## Purpose

The goal of this repository is to show how a Manual QA Engineer can use Playwright to:

- Support regression testing
- Validate critical user flows
- Test negative scenarios and error handling
- Focus on user-visible behavior rather than fragile UI or implementation details

Automation here is used strictly as a **support tool for manual QA**, not as a replacement.

---

## Implemented QA Scenarios

### 1. Homepage content validation
Validates that:
- The application loads successfully
- Core page content is displayed correctly

Purpose:
Ensure basic availability and correct rendering of essential content.

---

### 2. Navigation flow validation
Validates that:
- Users can navigate between pages using primary links
- Navigation leads to the expected destinations

Purpose:
Prevent broken user journeys caused by incorrect routing or links.

---

### 3. Negative login scenario – error handling
Validates that:
- Invalid credentials are rejected
- Clear error feedback is displayed to the user

Purpose:
Verify proper authentication error handling and user feedback.

---

### 4. Negative forgot password scenario – required field validation
Validates that:
- Submitting the form without an email triggers an error page
- The application responds in a controlled and predictable way

Purpose:
Test negative input handling and ensure system stability when required data is missing.

---

## Playwright usage (manual QA–focused)

Playwright is used to automate common manual QA flows.
Tests follow the same structure as manual test cases:

- Navigate to the page
- Perform user actions (input, click, submit)
- Validate observable behavior and feedback

### Example: Negative forgot password flow

```ts
await page.goto('https://the-internet.herokuapp.com/forgot_password');
await page.click('button#form_submit');
await expect(page.locator('h1')).toHaveText('Internal Server Error');

QA intent:

Validate required field handling
Ensure visible feedback is presented to the user
Confirm that the application does not fail silently


Key QA Principles Applied

Tests reflect real manual QA scenarios
Assertions focus on user-visible behavior
Negative and edge-case scenarios are prioritized
Implementation details (DOM structure, internal redirects) are avoided
Tests are kept simple, readable, and easy to explain



How to run tests

npm install
npx playwright test


Notes
This project is intentionally lightweight.
It is designed to demonstrate manual QA maturity with basic automation support, not advanced automation engineering patterns.