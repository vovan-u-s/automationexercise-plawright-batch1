import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignUpPage } from '../pages/signUpPage';
import { base, faker } from '@faker-js/faker';
import { BasePage } from '../pages/BasePage';
import { ProductPage } from '../pages/productPage.ts';
import { CartPage } from '../pages/cartPage.ts';

test.describe('Test Case 5: Sign Up with Username with  email ', () => {
    let homePage: HomePage;
    let signUpPage: SignUpPage;
    let basePage: BasePage;
    let productPage: ProductPage;
    let cartPage: CartPage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        signUpPage = new SignUpPage(page);
        basePage = new BasePage(page);
        cartPage = new CartPage(page);
        productPage = new ProductPage(page);

        await page.goto(process.env.baseUrl!);
    })
    test('cart quantity verification', async ({ page }) => {
        await homePage.isLogoVisible();
        await homePage.clickOnViewTheProducts();
        await productPage.isProductDetailsVisible();
        await productPage.enterQuantity('4');
        await productPage.clickOnAddToCartButton();
        await cartPage.verifyProductQuantity('4');
    })


})