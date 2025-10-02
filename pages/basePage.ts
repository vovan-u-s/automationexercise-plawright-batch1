import { Locator, Page } from '@playwright/test'
export class BasePage {
    private page: Page;
    private topNavigationLocator: Locator;
    private categoryLocator: Locator;
    private womenCategoryLocator: Locator;
    private manCategoryLocator: Locator;
    constructor(page: Page) {
        this.page = page;
        this.topNavigationLocator = page.locator('ul[class="nav navbar-nav"] li');// ALL TOP NAVIGATION LINKS
        this.categoryLocator = page.locator('h2[class="title text-center"]');
        this.womenCategoryLocator = page.locator('h4[class="panel-title"]').first();
        this.manCategoryLocator = page.locator('div[class="panel panel-default"]')
        
    }
    async clickOnTopNavigationLink(linkName: string) {
        await this.topNavigationLocator.getByText(linkName).click();
    }
     async isCategoryVisible(nameOfCategory: string): Promise<void> {
        await this.categoryLocator.getByText(nameOfCategory).isVisible();
    }
    async navigateToTheDressPage(category: string): Promise<void> {
        await this.womenCategoryLocator.getByText(category).click();
    }
    async navigateToTheTShirtsPage(menCategory: string): Promise<void> {
        await this.manCategoryLocator.getByText(menCategory).click();
    }
  
}



