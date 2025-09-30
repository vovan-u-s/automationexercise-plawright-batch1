import { test } from '@playwright/test'
import { HomePage } from '../pages/HomePage';
import { TestCasePage } from '../pages/testCasePage';
import { BasePage } from '../pages/BasePage';
test.describe('Homepage Test', () => {
    test('Verify that home page is visible successfully', async ({ page }) => {
        await page.goto('https://automationexercise.com/');
        const homePage = new HomePage(page) ;
        let basePage=new BasePage(page);
        await basePage.clickOnTopNavigationLink('Test Cases');
        await homePage.isLogoVisible();
        await homePage.clickOnTestCaseButton();
        const testCasePage = new TestCasePage(page);
        await testCasePage.isTestCaseTitleVisible();
    })
})