import { test, Page } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { BasePage } from '../../pages/basePage';

test.describe('Test Case 18: View Category Products', async () => {
    let homePage: HomePage;
    let basePage: BasePage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        basePage = new BasePage(page);
        await page.goto('https://automationexercise.com/')

    })
    test('Verify different category', async ({ page }) => {
        await homePage.isLogoVisible();
        await basePage.clickOnTopNavigationLink('Products');
        await basePage.navigateToTheDressPage();
        await basePage.isCategoryVisible('Women - Dress Products')
        await basePage.navigateToTheTShirtsPage();
        await basePage.isCategoryVisible('Men - Tshirts Products');


    })
})