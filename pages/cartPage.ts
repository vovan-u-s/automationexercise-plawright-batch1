import { Locator, Page, expect } from '@playwright/test';
export class CartPage {
    private page: Page;
    private productsInCart: Locator;
    private quantityInputChecking: Locator;
    private removeButton: Locator;
    private emptyCartMessage: Locator;
    private cartPageVisible: Locator;
    private processToCheckoutButton: Locator;
    private deliveryaddressDetails: Locator;
    private descriptionDetails: Locator;
    private placeOrderButton: Locator;
    private nameOnCardInput: Locator;
    private cardNumberInput: Locator;
    private cvcInput: Locator;
    private expirationMonthInput: Locator;
    private expirationYearInput: Locator;
    private payAndConfirmOrderButton: Locator;
    private successMessage: Locator;
    constructor(page: Page) {
        this.page = page;
        this.productsInCart = page.locator('table tbody tr');
        this.quantityInputChecking = page.locator('button[class="disabled"]');
        this.removeButton = page.getByRole('cell', { name: '' }).locator('a')
        this.emptyCartMessage = page.getByText('Cart is empty! Click here to')
        this.cartPageVisible = page.getByText('Shopping Cart')
        this.processToCheckoutButton = page.getByText('Proceed To Checkout')
        this.deliveryaddressDetails = page.getByText('Your delivery address .')
        this.descriptionDetails = page.locator('textarea[name="message"]')
        this.placeOrderButton = page.getByRole('link', { name: 'Place Order' })
        this.nameOnCardInput = page.locator('input[name="name_on_card"]')
        this.cardNumberInput = page.locator('input[name="card_number"]')
        this.cvcInput = page.getByRole('textbox', { name: 'ex.' })
        this.expirationMonthInput = page.getByRole('textbox', { name: 'MM' })
        this.expirationYearInput = page.getByRole('textbox', { name: 'YYYY' })
        this.payAndConfirmOrderButton = page.getByRole('button', { name: 'Pay and Confirm Order' })
        this.successMessage = page.getByText('Order Placed!')

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
        while (await this.productsInCart.count() > 0) {
            await this.removeButton.first().click({delay:500});
          
        }
    }
    async isCartEmptyMessageVisible(): Promise<void> {
        await expect(this.emptyCartMessage).toBeVisible();

    }
    async isCartPageVisible(): Promise<void> {
        await expect(this.cartPageVisible).toBeVisible();
    }
    async clickOnProceedToCheckoutButton(): Promise<void> {
        await this.processToCheckoutButton.click();
    }
    async isDeliveryAddressDetailsVisible(): Promise<void> {
        await expect(this.deliveryaddressDetails).not.toBeEmpty(); 
    }
    async enterDescriptionDetailsAndPlaceOrder(description: string): Promise<void> {
        await this.descriptionDetails.fill(description);
        await this.placeOrderButton.click();
    }
    async enterPaymentDetailsAndConfirmOrder(nameOnCard: string, cardNumber: string, cvc: string, expirationMonth: string, expirationYear: string): Promise<void> {
        await this.nameOnCardInput.fill(nameOnCard);
        await this.cardNumberInput.fill(cardNumber);
        await this.cvcInput.fill(cvc);
        await this.expirationMonthInput.fill(expirationMonth);
        await this.expirationYearInput.fill(expirationYear);
        await this.payAndConfirmOrderButton.click();
    }
    async isSuccessMessageVisible(): Promise<void> {
        await expect(this.successMessage).toBeVisible();
    }
}