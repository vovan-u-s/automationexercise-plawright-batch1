import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignUpPage } from '../pages/signUpPage';
import { base, faker } from '@faker-js/faker';
import { BasePage } from '../pages/BasePage';
import { ProductPage } from '../pages/productPage.ts';
import { CartPage } from '../pages/cartPage.ts';
import { ContactUsPage } from '../pages/contactUsPage.ts';

test.describe('Test Case 5: Sign Up with Username with  email ', () => {
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
    test('get in touch with us test', async ({ page }) => {
        await homePage.isLogoVisible();
        await basePage.clickOnTopNavigationLink('Contact us');
        await contactUsPage.enterName('vovan_u_s', 'vova@gmail.com', 'Subject', 'Message');
        await contactUsPage.uploadFile('tests/test-case13-tests.spec.ts');
        await contactUsPage.submitFormAndHandleAlert(page);
        await contactUsPage.isSuccessMessageVisible();
        await contactUsPage.clickHomeButton();
    })
})