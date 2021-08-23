const { test, expect } = require('@playwright/test');
const { LunchAppPage } = require('../pages/lunchAppPage');

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


  test(`Check if 0 is an invalid price and amount`, async () => {
    lunchAppPage.gotoDishEditing();
    await page.hover('button:has-text("buildclose")');
    await page.click('button:has-text("add")');
    await page.fill('[aria-label="Tiekėjo Pavadinimas"]', "random");
    await page.fill('[aria-label="Spalva"]', 'Red');
    await page.fill('[aria-label="Kaina"]', '0')
    await page.fill('[aria-label="Kiekis"]', '0')
    const answer = await page.textContent(".v-messages__message");
    expect(answer).toBe("Value must be greater than zero.");
  });

  test(`test if the button exists`, async () => {
    lunchAppPage.gotoDishEditing();
    await page.hover('button:has-text("buildclose")');
    const isVisible = await page.isVisible('button:has-text("add")');
    expect(isVisible).toBe(true);
  });


  test(`Check if 101 is an invalid price`, async () => {
    lunchAppPage.gotoDishEditing();
    await page.hover('button:has-text("buildclose")');
    await page.click('button:has-text("add")');
    await page.fill('[aria-label="Tiekėjo Pavadinimas"]', "random");
    await page.fill('[aria-label="Spalva"]', 'Red');
    await page.fill('[aria-label="Kaina"]', '101');
    const answer = await page.textContent(".v-messages__message");
    expect(answer).toBe("Must be less than or equal to 100.");
  });

  test(`Check if 1001 is an invalid amount`, async () => {
    lunchAppPage.gotoDishEditing();
    await page.hover('button:has-text("buildclose")');
    await page.click('button:has-text("add")');
    await page.fill('[aria-label="Tiekėjo Pavadinimas"]', "random");
    await page.fill('[aria-label="Spalva"]', 'Red');
    await page.fill('[aria-label="Kiekis"]', '1001')
    const answer = await page.textContent(".v-messages__message");
    expect(answer).toBe("Must be less than or equal to 1000.");
  });
});