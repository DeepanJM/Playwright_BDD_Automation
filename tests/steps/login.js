import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';

let browser;
let page;

Given('providing valid url', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    setDefaultTimeout(60000); // Set timeout to 10 seconds
    await page.goto('https://demo.guru99.com/test/newtours');
});

When('providing valid username and password', async function () {
    await page.locator("//input[@name='userName']").fill('mercury');
    await page.locator("//input[@name='password']").fill('mercury');
});

Then('clicking the login button', async function () {
    await page.locator("//input[@name='submit']").click();
    await page.close();
    await browser.close();
});

When('providing valid username as {string} and password as {string}', async function (name, password) {
    await page.locator("//input[@name='userName']").fill(name);
    await page.locator("//input[@name='password']").fill(password);
});