import { Locator, Page } from '@playwright/test'

export class ContactUsPage {
    private getInTouchText: Locator;
    private namebar: Locator;
    private emailbar: Locator
    private subjectbar: Locator;
    private messagebar: Locator;
    private uploadFileButton: Locator;
    private submitButton: Locator;
    private successMessage: Locator;
    private homeButton: Locator;

    constructor(page: Page){
        this.getInTouchText = page.getByRole('heading', { name: 'Get In Touch' })
        this.namebar = page.getByRole('textbox', { name: 'Name' })
        this.emailbar = page.getByRole('textbox', { name: 'Email', exact: true })
        this.subjectbar = page.getByRole('textbox', { name: 'Subject' })
        this.messagebar = page.getByRole('textbox', { name: 'Your Message Here' })
        this.uploadFileButton = page.getByRole('button', { name: 'Choose File' })
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.successMessage = page.locator('div.status.alert.alert-success')
        this.homeButton = page.locator('a.btn.btn-success')


    }
    async isGetInTouchTextVisible(): Promise<void> {
        await this.getInTouchText.isVisible();
    }
    async enterName(name: string,email:string,subject:string,message:string): Promise<void> {
        await this.namebar.fill(name);
        await this.emailbar.fill(email);
        await this.subjectbar.fill(subject);
        await this.messagebar.fill(message);
    }

    async uploadFile(filePath: string): Promise<void> {
        await this.uploadFileButton.setInputFiles(filePath);
    }

    async submitForm(): Promise<void> {
        await this.submitButton.click();
    }

    async submitFormAndHandleAlert(page: Page): Promise<void> {
        // Listen for dialog (alert) and accept it
        page.once('dialog', async dialog => {
            console.log(`Alert message: ${dialog.message()}`);
            await dialog.accept();
        });
        
        await this.submitButton.click();
    }
    async isSuccessMessageVisible(): Promise<void> {
        await this.successMessage.isVisible();
    }

    async clickHomeButton(): Promise<void> {
        await this.homeButton.click();
    }
}
