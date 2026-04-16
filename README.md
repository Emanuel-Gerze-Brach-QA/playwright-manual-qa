# Playwright – Manual QA Support Project

This repository contains a small Playwright project created to support manual QA activities.

## Purpose

The goal of this project is not to build a full automation framework, but to demonstrate how Playwright can be used by a Manual QA Engineer to:
- automate stable regression checks
- validate critical UI content
- support exploratory and manual testing

## What is covered

- End-to-end UI test using Playwright
- Focus on stable, user-visible elements
- Cross-browser execution (Chromium, Firefox, WebKit)

## Example test

The current test validates:
- Wikipedia homepage loads correctly
- The main page title is displayed
- A stable welcome message is visible to users

## How to run tests

```bash
npm install
npx playwright test
