import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
export class SignUpPage extends BasePage{
    private emailInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private incorrectLoginDataMessage: Locator;
    private sigUpPageTitle:Locator;
    private deletedAccountMessage:Locator;
    private newUserSignUpMessage:Locator;
    private nameInput:Locator;
    private emailInputing:Locator;
    private signUpButton:Locator;
    private singUpMessage:Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.incorrectLoginDataMessage = page.getByText('Your email or password is')
        this.sigUpPageTitle=page.getByRole('heading', { name: 'Login to your account' })
        this.deletedAccountMessage=page.locator('h2[data-qa="account-deleted"]');
        this.newUserSignUpMessage=page.getByRole('heading', { name: 'New User Signup!' })
        this.nameInput=page.getByRole('textbox', { name: 'Name' })
        this.emailInputing=page.locator('form').filter({ hasText: 'Email Address already exist!' }).getByPlaceholder('Email Address')
        this.signUpButton=page.getByRole('button', { name: 'Signup' })
        this.singUpMessage=page.getByText('Email Address already exist!')
    }

    async signUp(email: string, password: string): Promise<void> {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
        async isSignUpPageTitleVisible(): Promise<void> {
        await this.sigUpPageTitle.isVisible();
    }
    async isIncorrectLoginDataMessageVisible(): Promise<void> {
        await this.incorrectLoginDataMessage.isVisible();
    }

    async isDeletedAccountMessageVisible(): Promise<void> {
        await this.deletedAccountMessage.isVisible();
    }
        async isNewUserSignUpMessageVisible(): Promise<void> {
        await this.newUserSignUpMessage.isVisible();
    }
    async providingNameAndEmailAndClickOnSignUpButton(name: string, email: string): Promise<void> {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.signUpButton.click();
    }
    async isSignUpMessageVisible(): Promise<void> {
        await this.singUpMessage.isVisible();
    }


}
















