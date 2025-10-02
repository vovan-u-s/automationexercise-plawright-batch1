import{Locator,Page}from '@playwright/test'
export class BasePage{
private page:Page;
private topNavigationLocator:Locator;

constructor(page:Page){
    this.page=page;
    this.topNavigationLocator=page.locator('ul[class="nav navbar-nav"] li');// ALL TOP NAVIGATION LINKS

}
async clickOnTopNavigationLink(linkName:string){
    await this.topNavigationLocator.getByText(linkName).click();
}
async verifyingLoggedAsUser(): Promise<void> {
      await this.topNavigationLocator.getByText('Logged in as').innerText();
}
}