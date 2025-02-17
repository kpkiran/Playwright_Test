import { Page, Locator } from "@playwright/test"

export class LoginPage {

    page: Page;
    userNameInputField: Locator;
    passwordInputField: Locator;
    loginButton: Locator;
    errorMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.userNameInputField = this.page.getByTestId("username");
        this.passwordInputField = this.page.getByTestId("password");
        this.loginButton = this.page.getByTestId("login-button");
        this.errorMessage = this.page.getByTestId("error");
    }
}