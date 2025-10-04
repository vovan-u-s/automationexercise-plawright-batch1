import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignUpPage } from '../pages/signUpPage';
import { base, faker } from '@faker-js/faker';
import { BasePage } from '../pages/BasePage';
import { ProductPage } from '../pages/productPage.ts';
import { CartPage } from '../pages/cartPage.ts';
import { ContactUsPage } from '../pages/contactUsPage.ts';
import { sourceMapsEnabled } from 'process';

test.describe('Test Case 22:Verified Product in cart page ', () => {
    let homePage: HomePage;
    let signUpPage: SignUpPage;
    let basePage: BasePage;
    let productPage: ProductPage;
    let cartPage: CartPage;

    let contactUsPage: ContactUsPage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        signUpPage = new SignUpPage(page);
        basePage = new BasePage(page);
        cartPage = new CartPage(page);
        contactUsPage = new ContactUsPage(page);
        productPage = new ProductPage(page);

        await page.goto(process.env.baseUrl!);
    })
    test('test-case22-tests', async ({ page }) => {

        await homePage.isRecomendedItemsVisible();
        await homePage.clickOnAddingRecommendedItem();
        await homePage.clickOnViewCartButton();
        await cartPage.areAllProductsInCartVisible();

    })
    test('test-case25-tests-alt', async ({ page }) => {
        await homePage.isLogoVisible();
        await homePage.isSubscriptionVisible();
        await homePage.clickToTheTopButton();
        await homePage.isFullFledgedMessageVisible();
    })

    test('test-case26-tests', async ({ page }) => {
        await homePage.isLogoVisible();
        await homePage.isSubscriptionVisible();
        await homePage.isFullFledgedMessageVisible();
    })
}) 