import { expect, Locator, Page } from '@playwright/test'
import { BasePage } from './BasePage';
export class LoginSignUpPage extends BasePage {
    private signUpTitle: Locator;
    private readonly expectedSignUpTitleText = "New User Signup!";

    constructor(page: Page) {
        super(page);
        this.signUpTitle = page.getByRole('heading', { name: this.expectedSignUpTitleText })
    }
    async validateSignUpTitle(): Promise<void> {
        await expect(this.signUpTitle).toBeVisible();
        await expect(this.signUpTitle).toHaveText(this.expectedSignUpTitleText);
    }
}
