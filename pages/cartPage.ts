import{test,Page,Locator } from '@playwright/test'
export class CartPage {
    subscription: Locator;
    searchBar: Locator;
    button: Locator;
    constructor(page: Page) {
        this.subscription = page.getByRole('heading', { name: 'Subscription' })
        this.searchBar = page.getByRole('textbox', { name: 'Your email address' })
        this.button = page.getByRole('button', { name: '' })
    }
    async validateSubscription(): Promise<void> {
        await this.subscription.isVisible();
    }
    async enterEmail(email: string): Promise<void> {
        await this.searchBar.fill(email);
        await this.button.click();
    }
}
   