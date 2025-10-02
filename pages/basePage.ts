import { Locator, Page } from '@playwright/test'
export class BasePage {
    private page: Page;
    private topNavigationLocator: Locator;
    private dressCategoryLocator: Locator;
    private womenCategoryLocator: Locator;
    private manCategoryLocator: Locator;
    private tshirtsCategoryLocator: Locator;
    private brandsCategoryLocator: Locator;
    constructor(page: Page) {
        this.page = page;
        this.topNavigationLocator = page.locator('ul[class="nav navbar-nav"] li');// ALL TOP NAVIGATION LINKS
        this.dressCategoryLocator = page.locator('a[href="/category_products/1"]');
        this.womenCategoryLocator = page.locator('a[href="#Women"]');
        this.manCategoryLocator = page.locator('a[href="#Men"]');
        this.tshirtsCategoryLocator = page.locator('a[href="/category_products/3"]');
        this.brandsCategoryLocator = page.locator('ul[class="nav nav-pills nav-stacked"] li');
    }
    async clickOnTopNavigationLink(linkName: string) {
        await this.topNavigationLocator.getByText(linkName).click();
    }
    async isCategoryVisible(nameOfCategory: string): Promise<void> {
        await this.dressCategoryLocator.getByText(nameOfCategory).isVisible();
    }
    async navigateToTheDressPage(): Promise<void> {
        await this.womenCategoryLocator.click();
        await this.dressCategoryLocator.click();
    }
    async navigateToTheTShirtsPage(): Promise<void> {
        await this.manCategoryLocator.click();
        await this.tshirtsCategoryLocator.click();

    }
    async clickOnBrand(brandName: string): Promise<void> {
        await this.brandsCategoryLocator.getByText(brandName).click();
    }




}