import{test} from '@playwright/test'
import { HomePage } from '../pages/HomePage';
import { TestCasePage } from '../pages/testCasePage';
test.describe('Homepage Test',()=>{
    test('Verify that home page is visible successfully',async({page})=>{
        const homePage=new HomePage(page);
        await homePage.isLogoVisible();
        await homePage.clickOnTestCaseButton();
        const testCasePage=new TestCasePage(page);
        await testCasePage.isTestCaseTitleVisible();
    })
})