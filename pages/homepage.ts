import{Locator,Page} from '@playwright/test'
import { BasePage } from './BasePage'; 
export class HomePage extends BasePage {
    private logoLocator: Locator;
    private viewTheProductsLocator: Locator;
    private recomendedItemsLocator: Locator;
    private addingRecommendedItem: Locator;
    private viewCartButton: Locator;
    private subscription: Locator;
    private toTheTopButton: Locator;
    private fullFledgedMessage: Locator;
    constructor(page: Page) {
        super(page);
        this.logoLocator = page.locator('.col-sm-4').first();
        this.viewTheProductsLocator = page.locator('.nav.nav-pills.nav-justified > li > a').first();
        this.recomendedItemsLocator = page.getByRole('heading', { name: 'recommended items' })
        this.addingRecommendedItem = page.locator('.item > div > .product-image-wrapper > .single-products > .productinfo > .btn').first()
        this.viewCartButton = page.getByRole('link', { name: 'View Cart' })
        this.subscription = page.getByRole('heading', { name: 'Subscription' })
        this.toTheTopButton = page.getByRole('link', { name: '' })
        this.fullFledgedMessage = page.getByRole('heading', { name: 'Full-Fledged practice website' })

        
    }
    async isLogoVisible(): Promise<void> {
       await this.logoLocator.isVisible();
    }
    async clickOnViewTheProducts(): Promise<void> {
        await this.viewTheProductsLocator.click();
    }
    async isRecomendedItemsVisible(): Promise<void> {
        await this.recomendedItemsLocator.isVisible();
    }
    async clickOnAddingRecommendedItem(): Promise<void> {
        await this.addingRecommendedItem.click();
    }
    async clickOnViewCartButton(): Promise<void> {
        await this.viewCartButton.click();
    }
    async isSubscriptionVisible(): Promise<void> {
        await this.subscription.scrollIntoViewIfNeeded();
        await this.subscription.isVisible();
        await this.subscription.scrollIntoViewIfNeeded();
    }
    async clickToTheTopButton(): Promise<void> {
        await this.toTheTopButton.click();
    }
    async isFullFledgedMessageVisible(): Promise<void> {    
        await this.fullFledgedMessage.isVisible();
    }
   
    }
