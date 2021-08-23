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



  test(`Check if 0 is an invalid price and amount`, async () => {
    lunchAppPage.gotoDishEditing();
    await page.hover('button:has-text("buildclose")');
    await page.click('button:has-text("add")');
    console.log(lunchAppPage.generateRandomString());
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
    const isVisible = await page.isVisible('');
    expect(isVisible).toBe(true);
  });


  test('Test to check if adding new supplier functionality is working', async () => {
    lunchAppPage.gotoDishEditing();
    await page.hover('button:has-text("buildclose")');
    await page.click('button:has-text("add")');

    await page.fill('[aria-label="Tiekėjo Pavadinimas"]', 'dsa');
    // Click [aria-label="Tiekėjo Pavadinimas"]
    await page.click('[aria-label="Tiekėjo Pavadinimas"]');
    // Fill [aria-label="Tiekėjo Pavadinimas"]
    await page.fill('[aria-label="Tiekėjo Pavadinimas"]', 'dsadasd');
    // Fill [aria-label="Spalva"]
    await page.fill('[aria-label="Spalva"]', 'red');
    // Click [aria-label="Spalva"]
    await page.click('[aria-label="Spalva"]');
    // Fill [aria-label="Kaina"]
    await page.fill('[aria-label="Kaina"]', '6');
    // Click [aria-label="Kaina"]
    await page.click('[aria-label="Kaina"]');
    await page.fill('[aria-label="Kiekis"]', '4');
    await page.click('[aria-label="Kiekis"]');
    await page.fill('[aria-label="Patiekalo pavadinimas"]', 'fdsf');
    await page.fill('[aria-label="Vertimas"]', 'dfds');
    await page.click('[aria-label="Vertimas"]');
    await page.fill('[aria-label="Vertimas"]', 'dfdssdf');
    await page.click('text=delete_forever');
    await page.click('text=Pagrindiniai Patiekalai (Main Dishes)restaurantmore_vert >> button');

    await page.waitForNavigation();
    await page.waitForNavigation();
    await page.waitForNavigation();
    await page.waitForNavigation();
    await page.waitForNavigation();
    await page.waitForNavigation();
    await page.waitForNavigation();
    await page.waitForNavigation();
    await page.waitForNavigation();
    await page.waitForNavigation();
  });

});