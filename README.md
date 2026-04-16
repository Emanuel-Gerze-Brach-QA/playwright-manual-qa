# Playwright – Manual QA Support Project

This repository contains a small Playwright project created to support **manual QA activities**, not to build a full automation framework.

## Purpose

The goal of this project is to demonstrate how a Manual QA Engineer can use Playwright to:
- automate **stable regression checks**
- validate **critical user flows**
- support exploratory and manual testing with reliable, repeatable checks

Automation here is used as a **support tool**, not as a replacement for manual QA.

## What is covered

- End-to-end UI tests using Playwright
- Focus on **robust assertions** and real application behavior
- Cross-browser execution (Chromium, Firefox, WebKit)

## Implemented tests

### 1. Homepage content validation
Validates that:
- Wikipedia homepage loads correctly
- The main page heading is displayed
- A stable, user-visible welcome message is present

### 2. Navigation flow validation
Validates that:
- A user can navigate from the homepage to the “About Wikipedia” page
- Redirects are handled correctly
- Page content is verified using **robust, non-fragile assertions**

## How to run tests

```bash
npm install
npx playwright test
``