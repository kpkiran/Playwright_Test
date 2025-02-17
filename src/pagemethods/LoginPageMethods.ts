import { Locator, Page } from '@playwright/test';
import { LoginPage } from '../pageobjects/LoginPage';

export class LoginPageMethods {

    loginPage: LoginPage;
    page: Page;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
        this.page = page;
    }

    async getUsername(): Promise<Locator> {
        return this.loginPage.userNameInputField;
    }

    async getPassword(): Promise<Locator> {
        return this.loginPage.passwordInputField;
    }

    async getLoginButton(): Promise<Locator> {
        return this.loginPage.loginButton;
    }

    async getErrorMessage(): Promise<any> {
        return await this.loginPage.errorMessage.textContent();
    }

    async enterUsername(username: string): Promise<void> {
        await this.loginPage.userNameInputField.fill(username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.loginPage.passwordInputField.fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.loginPage.loginButton.click();
    }

    async login(username: string, password: string): Promise<any> {

        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }


}