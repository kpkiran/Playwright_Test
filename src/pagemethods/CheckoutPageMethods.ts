import { YourCartPage } from "../pageobjects/YourCartPage";
import { Page } from "@playwright/test";
import { CheckoutPage } from "../pageobjects/CheckoutPage";

export class CheckoutPageMethods {

    checkoutPage: CheckoutPage;
    page: Page;

    constructor(page: Page) {
        this.checkoutPage = new CheckoutPage(page);
    }

    async getTitleText(): Promise<any> {
        return await this.checkoutPage.title.textContent();
    }

    async getFirstName(): Promise<any> {
        return await this.checkoutPage.firstName;
    }

    async setFirstName() {
        await this.checkoutPage.firstName.fill("John");
    }

    async getLastName(): Promise<any> {
        return await this.checkoutPage.lastName;
    }

    async setLastName() {
        await this.checkoutPage.lastName.fill("Cena");
    }

    async getPostalCode(): Promise<any> {
        return await this.checkoutPage.postalCode;
    }

    async setPostalCode() {
        await this.checkoutPage.postalCode.fill("12345");
    }

    async getCancelButton(): Promise<any> {
        return this.checkoutPage.cancelButton;
    }

    async getContinueButton(): Promise<any> {
        return this.checkoutPage.continueButton;
    }

    async clickContinueButton() {
        await this.checkoutPage.continueButton.click();
    }
}