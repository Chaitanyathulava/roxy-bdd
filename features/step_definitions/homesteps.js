const { Given, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser, page;

Given('I open the homepage', { timeout: 10000 }, async function () {
  browser = await chromium.launch({ headless: false }); // Visible browser
  const context = await browser.newContext();
  page = await context.newPage();

  // Access your local web server
  await page.goto('http://127.0.0.1:57356/index.html');
});

Then('I should see {string} in the title', async function (expectedTitle) {
  const actualTitle = await page.title();
  if (!actualTitle.includes(expectedTitle)) {
    throw new Error(`Expected "${expectedTitle}" in title, but got "${actualTitle}"`);
  }
  await browser.close();
  console.log('Page title is:', actualTitle);

});
