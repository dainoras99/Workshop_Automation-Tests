const { test, expect } = require('@playwright/test');
const { LunchAppPage } = require('../pages/lunchAppPage');
const username = "admin5@sourceryacademy.com";
const password = "nera svarbus57";

test.describe('', () => {
  let page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    lunchAppPage = new LunchAppPage(page);
  });
  test.beforeEach(async () => {
    await lunchAppPage.goto();
    await lunchAppPage.initiateLogin();
  });

  test('Administrator login', async () => {
    const adminLabel = await page.textContent('.v-subheader.theme--dark');
    expect(adminLabel).toMatch('Admin 5');
  });
  
});