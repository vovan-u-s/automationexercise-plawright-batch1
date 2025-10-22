import { test, Page } from '@playwright/test'
import { BasePage } from '../../pages/basePage'
import { HomePage } from '../../pages/homepage'
import { ProductPage } from '../../pages/productPage'
import { CheckinDress } from '../../pages/checkinDress'

test.describe('Test Case 8: Verifying first product in the list', () => {

    let basePage: BasePage;
    let homePage: HomePage;
    let productPage: ProductPage;
    let checkinDress: CheckinDress;
    test.beforeEach(async ({ page }) => {

        await page.goto('https://automationexercise.com/')
        basePage = new BasePage(page);
        homePage = new HomePage(page);
        productPage = new ProductPage(page);
        checkinDress = new CheckinDress(page);
    })

    test('verifying first product in the list', async ({ page }) => {
        const basePage = new BasePage(page);
        const homePage = new HomePage(page);
        const productPage = new ProductPage(page);
        await homePage.isLogoVisible();
        await basePage.clickOnTopNavigationLink('Products');
        await productPage.isAllProductsTitleVisible();
        await productPage.searchProduct('dress');
        await productPage.clickOnFirstProduct();
        await checkinDress.validateDressDetails();
       
    })
})
