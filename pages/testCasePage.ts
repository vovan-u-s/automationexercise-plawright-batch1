import { Page,Locator } from "@playwright/test";
export class TestCasePage{
    testCaseTitle:Locator
    constructor(page: Page) {
        this.testCaseTitle = page.getByRole('heading', { name: 'Test Cases', exact: true })
    }
    async isTestCaseTitleVisible(): Promise<void> {
        await this.testCaseTitle.isVisible();
    }
}