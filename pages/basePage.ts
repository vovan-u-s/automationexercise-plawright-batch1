import{expect, Locator,Page}from '@playwright/test'
export class BasePage{
private page:Page;
private topNavigationLocator:Locator;
private accountDeletedMessage:Locator;
private continueButton:Locator;

constructor(page:Page){
    this.page=page;
    this.topNavigationLocator=page.locator('ul[class="nav navbar-nav"] li');// ALL TOP NAVIGATION LINKS
    this.accountDeletedMessage=page.getByText('Account Deleted!')
    this.continueButton=page.getByRole('link', { name: 'Continue' })
}
async clickOnTopNavigationLink(linkName:string){
    await this.topNavigationLocator.getByText(linkName).click();
}
async verifyingLoggedAsUser(): Promise<void> {
      await this.topNavigationLocator.getByText('Logged in as').innerText();
}
async isAccountDeletedMessageVisibleAndPushContinue(): Promise<void> {
    await expect(this.accountDeletedMessage).toBeVisible();
    await this.continueButton.click();
}
}