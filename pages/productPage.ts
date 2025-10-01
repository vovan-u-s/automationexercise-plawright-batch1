import { Page, Locator, expect } from '@playwright/test'



export class ProductPage {
    searchBar: Locator;
    searchButton: Locator;
    allProductsTitle: Locator;
    allSearchedProducts: Locator;
    viewProductButton: Locator;
    constructor(page: Page) {
        this.searchBar = page.getByRole('textbox', { name: 'Search Product' })
        this.searchButton = page.getByRole('button', { name: '' })
        this.allProductsTitle = page.getByRole('heading', { name: 'All Products' })
        this.allSearchedProducts = page.locator('div[class="features_items"] div[class="single-products"]');
        this.viewProductButton = page.locator('.nav.nav-pills.nav-justified > li > a').first()
    }
    async isAllProductsTitleVisible(): Promise<void> {
        await this.allProductsTitle.isVisible();
    }
    async searchProduct(productName: string): Promise<void> {
        await this.searchBar.fill(productName);
        await this.searchButton.click();
    }

    async validateAllSearchedProducts(): Promise<void> {
        const count = await this.allSearchedProducts.count();
        expect(count).toBeGreaterThan(0);
        for (let i = 0; i < await this.allSearchedProducts.count(); i++) {
            await expect(this.allSearchedProducts.nth(i)).toBeVisible();
            console.log(count)
        }
    }

    async clickOnFirstProduct(): Promise<void> {
        await this.viewProductButton.click();
    }



}