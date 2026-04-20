# QA Testing Notes

This document explains the QA mindset and reasoning behind the automated checks in this repository.

## How I choose scenarios to automate

I focus on automating scenarios that:
- Are critical to user experience
- Are regression-prone
- Validate observable system behavior
- Reflect real manual QA workflows

I intentionally avoid automating:
- UI layout or visual design
- Fragile DOM structures
- Implementation-specific details with low regression value

## Focus on negative scenarios

Negative and edge-case scenarios are prioritized because:
- They are more likely to break during changes
- They expose validation gaps and error handling issues
- They directly impact user trust and system stability

Examples include:
- Submitting forms with missing required input
- Invalid authentication attempts
- Verifying predictable system responses to incorrect user actions

## Automation as manual QA support

Automation in this repository is intentionally lightweight.
Its role is to:
- Support manual regression testing
- Provide fast feedback on critical flows
- Increase confidence before releases

Automation does not replace exploratory or manual testing.