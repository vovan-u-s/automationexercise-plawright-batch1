import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { BasePage } from '../../pages/BasePage';
import { DressPage } from '../../pages/dressPage';
import { TshirtsPage } from '../../pages/tshirtsPage';
test.describe('Test Case 18: Verify Subscription in Cart page', async () => {
    let homePage: HomePage;
    let basePage: BasePage;
    let dressPage: DressPage;
    let tshirtsPage: TshirtsPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        basePage = new BasePage(page);
        dressPage = new DressPage(page);
        tshirtsPage = new TshirtsPage(page);
        await page.goto('https://automationexercise.com/')

    })
    test('Verify different category', async ({ page }) => {
        await homePage.isLogoVisible();
        await basePage.isCategoryVisible();
        await basePage.navigateToTheDressPage();
        await dressPage.validateDressProductTitle();
        await basePage.navigateToTheTShirtsPage();
        await tshirtsPage.validateTshirtsProductTitle();
    })
})