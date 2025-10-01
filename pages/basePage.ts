import { Locator, Page } from '@playwright/test'
export class BasePage {
    private page: Page;
    private topNavigationLocator: Locator;
    private categoryLocator: Locator;
    private womenCategoryLocator: Locator;
    private dressCategoryLocator: Locator;
    private manCategoryLocator: Locator;
    private tshirtsCategoryLocator: Locator;
    private tShirtsTitleLocator: Locator;
    constructor(page: Page) {
        this.page = page;
        this.topNavigationLocator = page.locator('ul[class="nav navbar-nav"] li');// ALL TOP NAVIGATION LINKS
        this.categoryLocator = page.getByRole('heading', { name: 'Category' })
        this.womenCategoryLocator = page.getByRole('heading', { name: ' Women' })
        this.dressCategoryLocator = page.getByRole('link', { name: 'Dress' })
        this.manCategoryLocator = page.getByRole('heading', { name: ' Men' })
        this.tshirtsCategoryLocator = page.getByRole('link', { name: 'Tshirts' })
        this.tShirtsTitleLocator = page.getByRole('heading', { name: 'Men - Tshirts Products' })
    }
    async clickOnTopNavigationLink(linkName: string) {
        await this.topNavigationLocator.getByText(linkName).click();
    }
     async isCategoryVisible(): Promise<void> {
        await this.categoryLocator.isVisible();
    }
    async navigateToTheDressPage(): Promise<void> {
        await this.womenCategoryLocator.click();
        await this.dressCategoryLocator.click();
    }
    async navigateToTheTShirtsPage(): Promise<void> {
        await this.manCategoryLocator.click();
        await this.tshirtsCategoryLocator.click();
    }
  
}



