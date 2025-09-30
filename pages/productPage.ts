import { Page, Locator ,expect} from '@playwright/test'



export class ProductPage {
    searchBar: Locator;
    searchButton: Locator;
    allProductsTitle: Locator;
    allSearchedProducts: Locator;
    constructor(page: Page) {
        this.searchBar = page.getByRole('textbox', { name: 'Search Product' })
        this.searchButton = page.getByRole('button', { name: '' })
        this.allProductsTitle = page.getByRole('heading', { name: 'All Products' })
        this.allSearchedProducts = page.locator('div[class="features_items"] div[class="single-products"]');
    }
    async isAllProductsTitleVisible(): Promise<void> {
        await this.allProductsTitle.isVisible();
    }

    async validateAllSearchedProducts(): Promise<void> {
        await expect(this.allSearchedProducts).toBeVisible();
        const count = await this.allSearchedProducts.count();
        console.log(`Number of searched products: ${count}`);
        
    }

}