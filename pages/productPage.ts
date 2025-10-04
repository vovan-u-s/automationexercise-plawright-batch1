import { test, Locator, Page } from '@playwright/test'
export class ProductPage {
    private productsPageTitle: Locator;
    private searchBarInput: Locator;
    private searchButton: Locator;
    private searchedProductsTitle: Locator;
    private allProducts: Locator;
    private addingAllProductsToCartButton: Locator;
    private continueButton: Locator;
    constructor(page: Page) {
        this.productsPageTitle = page.getByRole('heading', { name: 'All Products' })
        this.searchBarInput = page.getByRole('textbox', { name: 'Search Product' })
        this.searchButton = page.getByRole('button', { name: '' })
        this.searchedProductsTitle = page.getByRole('heading', { name: 'Searched Products' })
        this.allProducts = page.locator('div[class="productinfo text-center"]')
        this.addingAllProductsToCartButton = page.locator('div[class="productinfo text-center"] a')
        this.continueButton = page.locator('button[class="btn btn-success close-modal btn-block"]')
    }
    async isProductsPageTitleVisible(products: string): Promise<void> {
        await test.expect(this.productsPageTitle).toHaveText(products);
    }
    async isSearchedProductsTitleVisible(): Promise<void> {
        await test.expect(this.searchedProductsTitle).toBeVisible();
    }
    async searchProduct(productName: string): Promise<void> {
        await this.searchBarInput.fill(productName);
        await this.searchButton.click();
    }
    async isAllProductsVisible(): Promise<void> {
        for (let i = 0; i <  await this.allProducts.count(); i++) {
            await test.expect(this.allProducts.nth(i)).toBeVisible();
        }
    }
    async addAllProductsToCart(): Promise<void> {
        for (let i = 0; i < await this.addingAllProductsToCartButton.count(); i++) {
            await this.addingAllProductsToCartButton.nth(i).click();
            await this.continueButton.click();
        }
    }
    async addToCart(): Promise<void> {
        await this.continueButton.click()
    }
}