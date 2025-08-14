# Playwright BDD Automation Project

## Overview
This project demonstrates the implementation of Cucumber (BDD) using Playwright for test automation.

## Project Structure
```
Playwright_POM_Demo/
├── tests/
│   └── features
|           └── demo.feature
|           └── login.feature
|           └── ScenarioOutline.feature
|   └── reports
|           └── cucumber-report.html
|           └── cucumber.json
|    └── steps
            └── demo.js
            └── login.js
```

## Key Features
- Implementation of Cucumber (BDD)
- Login functionality testing
- Clean and maintainable test structure
- Report generation

## Test Implementation
The project includes a login test that demonstrates:
- The usage of Cucumber
- Reusable login functionality
    - Scenario Outline

### Example Usage Of Scenario Outline
```javascript
Feature: Login for mercury newtours

  Scenario: Login with valid username and password pass value in examples
    Given providing valid url
    When providing valid username as "<name>" and password as "<password>"
    Then clicking the login button

    Examples:
      | name    | password |
      | mercury | mercury  |
      | mercury | mercury  |

When('providing valid username as {string} and password as {string}', async function (name, password) {
    await page.locator("//input[@name='userName']").fill(name);
    await page.locator("//input[@name='password']").fill(password);
```

## Getting Started
1. Install dependencies:
```bash
npm init playwright@latest
```
2. Install playwright:
```bash
npm i @cucumber/cucumber
```

3. Run tests:
```bash
npm run test
OR
npm run test tests/feature/login.feature
```
4. Record tests:
```bash
npx playwright codegen
```
4. Edit settings.json for Cucumber:
```bash
ctrl + ,
In the search bar type in 'cucumber'
Scroll down and click on 'Edit in settings.json'
    Add the relative path of the 'features' folder under the 'cucumber.features' section
    Add the relative path of the 'steps' folder under the 'cucumber.glue' section
        Example
            "cucumber.features": [

                "src/test/**/*.feature",
                "features/**/*.feature",
                "tests/**/*.feature",
                "*specs*/**/*.feature",
                "tests/features/*.feature",
                "tests/cucumber/**/*.feature"
            ],
            "cucumber.glue": [
                
                "src/test/steps/*.js",
                "tests/steps/*.js"
            ]
```

## Best Practices
- Maintainable test
- Clean and moduler code

## Target Application
Tests are designed for the demo site: https://demo.guru99.com/test/newtours

## Resource
Learning resource: https://www.youtube.com/watch?v=zlINGGtEwCk