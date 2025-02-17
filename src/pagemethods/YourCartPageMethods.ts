import { YourCartPage } from "../pageobjects/YourCartPage";
import { Page } from "@playwright/test";

export class YourCartPageMethods {

    yourCartPage: YourCartPage;
    page: Page;

    constructor(page: Page) {
        this.yourCartPage = new YourCartPage(page);
    }

    async getSecondaryHeader(): Promise<string> {
        return await this.yourCartPage.secondaryHeader.textContent();
    }

    async getRemoveButton(): Promise<string> {
        return await this.yourCartPage.removeButton.textContent();
    }

    async getCheckoutButton(): Promise<string> {
        return await this.yourCartPage.checkoutButton.textContent();
    }

    async getContinueShoppingButton(): Promise<string> {
        return this.yourCartPage.continueShoppingButton.textContent();
    }

    async getProductName(): Promise<string> {
        return await this.yourCartPage.productName.textContent();
    }

    async getProductPrice(): Promise<string> {
        return await this.yourCartPage.productPrice.textContent();
    }

    async clickCheckoutButton() {
        await this.yourCartPage.checkoutButton.click();
    }

}

