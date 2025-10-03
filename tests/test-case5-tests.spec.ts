import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignUpPage } from '../pages/signUpPage';
import { faker } from '@faker-js/faker';
import { BasePage } from '../pages/BasePage';

test.describe('Test Case 5: Sign Up with Username with  email ', () => {
    let homePage: HomePage;
    let signUpPage: SignUpPage;
    let basePage: BasePage;
    const randomEmail = faker.internet.email();
    const randomPassword = faker.internet.password();


    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        signUpPage = new SignUpPage(page);
        basePage = new BasePage(page);
        await page.goto('https://automationexercise.com/');

    });

    test('User should see logged message with correct email and password', async ({ page }) => {

        await page.goto('https://automationexercise.com/');
        await homePage.isLogoVisible();
        await basePage.clickOnTopNavigationLink('Signup / Login');
        await signUpPage.isNewUserSignUpMessageVisible();
        await signUpPage.providingNameAndEmailAndClickOnSignUpButton(process.env.myUserName!, process.env.testEmail!);
        await signUpPage.isSignUpMessageVisible();
        
       
    })
})