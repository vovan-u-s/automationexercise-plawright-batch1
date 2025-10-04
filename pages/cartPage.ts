import{Locator,Page}from '@playwright/test'
export class CartPage{
    private productsInCart:Locator;
    private quantityInputChecking:Locator;
    constructor(page:Page){
        this.productsInCart=page.locator('table tbody tr');
        this.quantityInputChecking=page.locator('button[class="disabled"]');
    }
    async areAllProductsInCartVisible():Promise<void>{
        const count = await this.productsInCart.count();
        for(let i = 0; i < count; i++){
            await this.productsInCart.nth(i).isVisible();
        }
    }   
    async verifyProductQuantity(expectedQuantity:string):Promise<void>{
        await this.quantityInputChecking.first().innerText().then(async(actualQuantity)=>{
            if(actualQuantity.trim()===expectedQuantity){
                console.log(`Quantity verification passed: Expected = ${expectedQuantity}, Actual = ${actualQuantity}`);
            }else{
                console.error(`Quantity verification failed: Expected = ${expectedQuantity}, Actual = ${actualQuantity}`);
            }

        });
    }
}