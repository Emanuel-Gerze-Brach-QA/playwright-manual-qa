wright Usage Notes

Playwright is used in this project as a support tool for manual QA activities.

The goal is not advanced automation, but translating common manual test flows into stable, repeatable automated checks.

## What is automated

Examples of automated scenarios include:
- Negative login flows (invalid credentials)
- Required field validation for forms
- Basic navigation flows between pages

These scenarios were chosen because they:
- Are critical to user experience
- Are highly regression-prone
- Are easy to validate without relying on fragile UI details

## Playwright scope

Playwright usage in this project focuses on:
- Page navigation
- User input and form submission
- Validation of user-visible feedback (messages, titles, confirmations)

Advanced topics such as CI/CD integration, framework design, or Page Object patterns
are intentionally out of scope for this repository.