import{Locator,Page} from '@playwright/test'
import { BasePage } from './BasePage'; 
export class HomePage extends BasePage {
    private logoLocator: Locator;
    private viewTheProductsLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.logoLocator = page.locator('.col-sm-4').first();
        this.viewTheProductsLocator = page.locator('.nav.nav-pills.nav-justified > li > a').first()
    }
    async isLogoVisible(): Promise<void> {
       await this.logoLocator.isVisible();
    }
    async clickOnViewTheProducts(): Promise<void> {
        await this.viewTheProductsLocator.click();
    }
    
}