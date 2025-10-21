import{Locator,Page} from '@playwright/test'
import { BasePage } from './BasePage'; 
export class HomePage extends BasePage {
    private logoLocator: Locator;
    testCaseButton:Locator
    constructor(page: Page) {
        super(page);
        this.logoLocator = page.locator('.col-sm-4').first()
        this.testCaseButton = page.getByRole('button', { name: 'Test Cases' })
    }
    async isLogoVisible(): Promise<void> {
       await this.logoLocator.isVisible();
    }
    async clickOnTestCaseButton(): Promise<void> {
        await this.testCaseButton.click();
    }
    
}