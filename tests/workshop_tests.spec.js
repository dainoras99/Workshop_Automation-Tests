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
    await lunchAppPage.gotoMainPage();
    await lunchAppPage.initiateLogin();

  });



  test('Test to check if adding new supplier functionality is working', async () => {
    lunchAppPage.gotoDishEditing();
    await page.hover('button:has-text("buildclose")');
    await page.click('button:has-text("add")');
    console.log(lunchAppPage.generateRandomString());
    await page.fill('[aria-label="Tiekėjo Pavadinimas"]', "random");
    await page.fill('[aria-label="Spalva"]', 'Red');
    await page.fill('[aria-label="Kaina"]', "")
    await page.waitForNavigation();
    await page.waitForNavigation();
    await page.waitForNavigation();
    await page.waitForNavigation();
    await page.waitForNavigation();
    await page.waitForNavigation();
    await page.waitForNavigation();
  });

});