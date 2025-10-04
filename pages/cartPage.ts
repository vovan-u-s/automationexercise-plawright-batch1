import{Locator,Page}from '@playwright/test'
export class CartPage{
    private productsInCart:Locator;
    constructor(page:Page){
        this.productsInCart=page.locator('table tbody tr');
    }
    async areAllProductsInCartVisible():Promise<void>{
        const count = await this.productsInCart.count();
        for(let i = 0; i < count; i++){
            await this.productsInCart.nth(i).isVisible();
        }
    }   
}