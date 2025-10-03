import { test, Locator, Page } from '@playwright/test'
export class ProductPage {
    private productsPageTitle: Locator;
    private searchBarInput: Locator;
    private searchButton: Locator;
    private searchedProductsTitle: Locator;
    private allProducts: Locator;
    private addingAllProductsToCartButton: Locator;
    constructor(page: Page) {
        this.productsPageTitle = page.getByRole('heading', { name: 'All Products' })
        this.searchBarInput = page.getByRole('textbox', { name: 'Search Product' })
        this.searchButton = page.getByRole('button', { name: '' })
        this.searchedProductsTitle = page.getByRole('heading', { name: 'Searched Products' })
        this.allProducts = page.locator('div[class="col-sm-4"]')
        this.addingAllProductsToCartButton = page.locator('a[class="btn btn-default add-to-cart"]')
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
    async isProductsVisible(): Promise<void> {
        await test.expect(this.allProducts).toBeVisible();
    }
    async addAllProductsToCart(): Promise<void> {
        const counting = await this.allProducts.count();
        for (let i = 0; i < counting; i++) {
            await this.allProducts.nth(i).locator('a[class="btn btn-default add-to-cart"]').click();
        }
    }
}