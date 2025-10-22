import{test} from '@playwright/test'
import { HomePage } from '../../pages/homepage';
import { ProductPage } from '../../pages/productPage';
import { BasePage } from '../../pages/basePage';
import { beforeEach } from 'node:test';

test.describe('Test Case 9: Search Product',()=>{
    let homePage:HomePage;
    let productPage:ProductPage;
    let basePage:BasePage;
    test.beforeEach(async({page})=>{
        homePage=new HomePage(page);
        productPage=new ProductPage(page);
        basePage=new BasePage(page);
        await page.goto('https://automationexercise.com/')
    
    })
    test('searching products test',async({page})=>{
        await homePage.isLogoVisible();
        await basePage.clickOnTopNavigationLink('Products');
        await productPage.isAllProductsTitleVisible();
        await productPage.searchBar.fill('dress');
        await productPage.searchButton.click();
        await productPage.validateAllSearchedProducts();
        // Add assertion to verify search results if needed
    })
})