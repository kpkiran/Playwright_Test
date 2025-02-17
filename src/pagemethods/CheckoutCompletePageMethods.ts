import { Page } from "@playwright/test";
import { CheckoutCompletePage } from "../pageobjects/CheckoutCompletePage";

export class CheckoutCompletePageMethods {

    page: Page;
    checkoutCompletePage: CheckoutCompletePage;

    constructor(page: Page) {
        this.checkoutCompletePage = new CheckoutCompletePage(page);
    }

    async getCheckoutCompletePageTitle(): Promise<string> {
        return await this.checkoutCompletePage.checkoutCompleteTitle.textContent();
    }

    async getCheckoutCompletePageThanksMessage() {
        return this.checkoutCompletePage.thankyouMessage;
    }

    async getBackToHomeButton() {
        return this.checkoutCompletePage.backToHomeButton;
    }
}