import { Locator, Page } from '@playwright/test';
import { LoginPage } from '../pageobjects/LoginPage';
import { CommonUtils } from '../utils/commonUtils';

export class LoginPageMethods {

    loginPage: LoginPage;
    page: Page;
    commonUtils: CommonUtils;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
        this.page = page;
        this.commonUtils = new CommonUtils(page);
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
        let dusername = this.commonUtils.decryptCredentials(username);
        await this.enterUsername(dusername);

        let dpassword = this.commonUtils.decryptCredentials(password)
        await this.enterPassword(dpassword);
        await this.clickLoginButton();
    }


}