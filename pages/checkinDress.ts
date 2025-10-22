import{test,Page,Locator } from '@playwright/test'
import { BasePage } from './basePage';
export class CheckinDress extends BasePage{
    name: Locator;
    category: Locator;
    price: Locator;
    availability: Locator;
    condition: Locator;
    brand: Locator;
    constructor(page: Page) {
        super(page);
        this.name = page.getByRole('heading', { name: 'Sleeveless Dress' })
        this.category = page.getByText('Category: Women > Dress')
        this.price = page.getByText('Rs.')
        this.availability = page.getByText('Availability: In Stock')
        this.condition = page.getByText('Condition: New')
        this.brand = page.getByText('Brand: Madame')
    }
    async validateDressDetails(): Promise<void> {
        await this.name.isVisible();
        await this.category.isVisible();
        await this.price.isVisible();
        await this.availability.isVisible();
        await this.condition.isVisible();
        await this.brand.isVisible();
    }
}