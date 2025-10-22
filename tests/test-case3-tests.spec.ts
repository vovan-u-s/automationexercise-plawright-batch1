import {test} from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { SignUpPage } from '../pages/signUpPage';
import {faker} from '@faker-js/faker';
import { BasePage } from '../pages/basePage';

test.describe('Test Case 3: Login User with incorrect email and password',()=>{
    let homePage:HomePage;
    let signUpPage:SignUpPage;
    let basePage:BasePage;
    const randomEmail=faker.internet.email();
    const randomPassword=faker.internet.password();


    test.beforeEach(async({page})=>{
        homePage=new HomePage(page);
        signUpPage=new SignUpPage(page);
        basePage=new BasePage(page);
        await page.goto('https://automationexercise.com/');

    });

    test('User should see logged message and error message with incorrect email and password',async()=>{
        await homePage.isLogoVisible();
        await basePage.clickOnTopNavigationLink('Signup / Login');
        await signUpPage.isSignUpPageTitleVisible();
        await signUpPage.signUp(randomEmail,randomPassword);
        await signUpPage.isIncorrectLoginDataMessageVisible();
    });
});