import{Page, Locator} from '@playwright/test';
import { BasePage } from './BasePage';
export class TshirtsPage extends BasePage{
    private tshirtsProductTitle: Locator;
    constructor(page: Page) {
        super(page);
        this.tshirtsProductTitle = page.getByRole('heading', { name: 'Men - Tshirts Products' })
    }
    async validateTshirtsProductTitle(): Promise<void> {
        await this.tshirtsProductTitle.isVisible();
    }
}