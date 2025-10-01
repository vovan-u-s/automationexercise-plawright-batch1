import { Locator, Page } from '@playwright/test'
import { BasePage } from './BasePage';
export class HomePage extends BasePage {
    private logoLocator: Locator;
   
    constructor(page: Page) {
        super(page);
        this.logoLocator = page.locator('.col-sm-4').first()
    
    }
    async isLogoVisible(): Promise<void> {
        await this.logoLocator.isVisible();
    }
}