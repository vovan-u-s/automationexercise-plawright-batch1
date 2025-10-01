import { test, Page } from '@playwright/test'
import { BasePage } from '../../pages/BasePage'
import { CartPage } from '../../pages/cartPage';
import { HomePage } from '../../pages/HomePage'


test.describe('Test Case 8: Verifying first product in the list', () => {

    let basePage: BasePage;
    let cartPage: CartPage;
    let homePage: HomePage;
    test.beforeEach(async ({ page }) => {

        await page.goto('https://automationexercise.com/')
        basePage = new BasePage(page);
        cartPage = new CartPage(page);
        homePage = new HomePage(page);
    })
    test('verifying cart page', async ({ page }) => {
        const basePage = new BasePage(page);
        const cartPage = new CartPage(page);
        const homePage = new HomePage(page);
        await homePage.isLogoVisible();
        await basePage.clickOnTopNavigationLink('Cart');
        await cartPage.validateSubscription();
        await cartPage.enterEmail('test@example.com');
    })
})