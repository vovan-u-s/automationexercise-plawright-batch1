import { Locator, Page } from "@playwright/test";
export class SignUpPage {
    private mrRadio: Locator;
    private mrsRadio: Locator;
    private passwordField: Locator;
    private daysSelect: Locator;
    private monthsSelect: Locator
    private yearsSelect: Locator;
    private newsletterCheckbox: Locator;
    private specialOffersCheckbox: Locator
    private firstNameField: Locator;
    private lastNameField: Locator;
    private companyField: Locator;
    private address1Field: Locator;
    private address2Field: Locator;
    private cityField: Locator;
    private zipcodeField: Locator;
    private mobileNumberField: Locator
    private countryField: Locator;
    private stateField: Locator
    private createAccountButton: Locator;
    accountInformationtitle: Locator;
    constructor(page: Page) {
        this.mrRadio = page.getByRole('radio', { name: 'Mr.' })
        this.mrsRadio = page.getByRole('radio', { name: 'Mrs.' })
        this.passwordField = page.getByRole('textbox', { name: 'Password *' })
        this.daysSelect = page.locator('#days')
        this.monthsSelect = page.locator('#months')
        this.yearsSelect = page.locator('#years')
        this.newsletterCheckbox = page.getByRole('checkbox', { name: 'Sign up for our newsletter!' })
        this.specialOffersCheckbox = page.getByRole('checkbox', { name: 'Receive special offers from' })
        this.firstNameField = page.getByRole('textbox', { name: 'First name *' })
        this.lastNameField = page.getByRole('textbox', { name: 'Last name *' })
        this.companyField = page.getByRole('textbox', { name: 'Company', exact: true })
        this.address1Field = page.getByRole('textbox', { name: 'Address * (Street address, P.' })
        this.address2Field = page.getByRole('textbox', { name: 'Address 2' })
        this.countryField = page.getByLabel('Country *')
        this.stateField = page.getByRole('textbox', { name: 'State *' })
        this.cityField = page.getByRole('textbox', { name: 'City * Zipcode *' })
        this.zipcodeField = page.locator('#zipcode')
        this.mobileNumberField = page.getByRole('textbox', { name: 'Mobile Number *' })
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' })
        this.accountInformationtitle = page.getByText('Enter Account Information')
    }
    async fillSignUpForm(name: string, email: string, password: string): Promise<void> {
        await this.mrRadio.check();
        await this.passwordField.fill(password);
        await this.daysSelect.selectOption('10');
    }
    async fillAddressDetails(
        firstName: string,
        lastName: string,
        company: string,
        address1: string,
        address2: string,
        country: string,
        state: string,
        city: string,
        zipcode: string,
        mobileNumber: string
    ): Promise<void> {
        await this.firstNameField.fill(firstName)
        await this.lastNameField.fill(lastName)
        await this.companyField.fill(company)
        await this.address1Field.fill(address1)
        await this.address2Field.fill(address2)
        await this.countryField.selectOption(country)
        await this.stateField.fill(state)
        await this.cityField.fill(city)
        await this.zipcodeField.fill(zipcode)
        await this.mobileNumberField.fill(mobileNumber)
    }
    async clickCreateAccountButton(): Promise<void> {
        await this.createAccountButton.click()
    }



















}







