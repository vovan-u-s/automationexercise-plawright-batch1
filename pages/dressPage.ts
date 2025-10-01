import{Page, Locator} from '@playwright/test';
import { BasePage } from './BasePage';
export class DressPage extends BasePage{
    private dressProductTitle: Locator;
    constructor(page: Page) {
        super(page);
        this.dressProductTitle = page.getByRole('heading', { name: 'Women - Dress Products' })
    }
    async validateDressProductTitle(): Promise<void> {
        await this.dressProductTitle.isVisible();
    }
}