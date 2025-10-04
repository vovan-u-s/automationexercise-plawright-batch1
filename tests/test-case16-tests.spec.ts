import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignUpPage } from '../pages/signUpPage';
import { base, faker } from '@faker-js/faker';
import { BasePage } from '../pages/BasePage';
import { ProductPage } from '../pages/productPage.ts';
import { CartPage } from '../pages/cartPage.ts';
import { ContactUsPage } from '../pages/contactUsPage.ts';
import { env, sourceMapsEnabled  } from 'process';  

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
    test('test-case16-tests', async ({ page }) => {
        await homePage.isLogoVisible();
        await basePage.clickOnTopNavigationLink('Signup / Login');
        await signUpPage.signUp(process.env.testEmail!, process.env.password!);
        await basePage.verifyingLoggedAsUser();
        await productPage.addAllProductsToCart();
        await basePage.clickOnTopNavigationLink('Cart');
        await cartPage.isCartPageVisible();
        await cartPage.clickOnProceedToCheckoutButton();
        await cartPage.isDeliveryAddressDetailsVisible();
        await cartPage.enterDescriptionDetailsAndPlaceOrder('Please deliver between 9 AM to 5 PM');
        await cartPage.enterPaymentDetailsAndConfirmOrder('John Doe', '1234 5678 9123 4567', '123', '12', '25');
        await cartPage.isSuccessMessageVisible();
        await basePage.clickOnTopNavigationLink('Delete Account');
        await basePage.isAccountDeletedMessageVisibleAndPushContinue();

    })
})