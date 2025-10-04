import { Locator, Page, expect } from '@playwright/test';
export class CartPage {
    private productsInCart: Locator;
    private quantityInputChecking: Locator;
    private removeButton: Locator;
    private emptyCartMessage: Locator;
    constructor(page: Page) {
        this.productsInCart = page.locator('table tbody tr');
        this.quantityInputChecking = page.locator('button[class="disabled"]');
        this.removeButton = page.getByRole('cell', { name: '' }).locator('a')
        this.emptyCartMessage = page.getByText('Cart is empty! Click here to')

    }
    async areAllProductsInCartVisible(): Promise<void> {
        const count = await this.productsInCart.count();
        for (let i = 0; i < count; i++) {
            await this.productsInCart.nth(i).isVisible();
        }
    }
    async verifyProductQuantity(expectedQuantity: string): Promise<void> {
        await expect(this.quantityInputChecking).toHaveText(expectedQuantity);
    }
    async removeProductFromCart(): Promise<void> {
        for (let i = 0; i < await this.removeButton.count(); i++) {
            await this.removeButton.nth(i).click(); 
        }   
    }
    async isCartEmptyMessageVisible(): Promise<void> {
        await expect(this.emptyCartMessage).toBeVisible();
    }
}