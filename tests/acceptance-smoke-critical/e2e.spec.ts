import { test, expect } from '@playwright/test'
import { HomePage } from '../../pages/HomePage';
import { LoginSignUpPage } from '../../pages/loginSignUpPage';
import { BasePage } from '../../pages/BasePage';
import {faker} from '@faker-js/faker'
test.describe('End to End test cases', () => {
    let homePage: HomePage;
    let loginSignUpPage: LoginSignUpPage;
    let basePage: BasePage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginSignUpPage = new LoginSignUpPage(page);
        basePage = new BasePage(page);
        const url = process.env.baseUrl
        const userName = process.env.username
        const password = process.env['password']
        console.log(url)
        await page.goto(url!)
    })
    test('end to end account create and delete flow', async ({ page }) => {
        await page.waitForTimeout(5_000)
        await homePage.isLogoVisible();
        await basePage.clickOnTopNavigationLink('Signup / Login');
        await loginSignUpPage.validateSignUpTitle();

    })
})