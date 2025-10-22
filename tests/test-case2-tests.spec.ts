import { test } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { SignUpPage } from '../pages/signUpPage';
import { base, faker } from '@faker-js/faker';
import { BasePage } from '../pages/basePage';

test.describe('Test Case 3: Login User with correct email and password', () => {
    let homePage: HomePage;
    let signUpPage: SignUpPage;
    let basePage: BasePage;



    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        signUpPage = new SignUpPage(page);
        basePage = new BasePage(page);


    })
    test('User should see logged message with correct email and password', async ({ page }) => {
        
        await page.goto('https://automationexercise.com/');
        await homePage.isLogoVisible();
        await basePage.clickOnTopNavigationLink('Signup / Login');
        await signUpPage.isSignUpPageTitleVisible();
        await signUpPage.signUp( process.env.testEmail!, process.env.password!);
        await basePage.verifyingLoggedAsUser();
        await basePage.clickOnTopNavigationLink('Delete Account');
        await signUpPage.isDeletedAccountMessageVisible();




    })
});