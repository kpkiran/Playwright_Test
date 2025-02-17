import { Locator, Page } from "@playwright/test";
import { LoginPageMethods } from "../pagemethods/LoginPageMethods";

export class CommonUtils {
    loginPageMethods: LoginPageMethods;
    page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async isElementVisible(elementLocator: Locator) {
        await elementLocator.isVisible();
    }

}
