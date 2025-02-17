import { Page } from "@playwright/test";
import { CheckoutOverviewPage } from "../pageobjects/CheckoutOverviewPage";

export class CheckoutOverviewPageMethods {

    checkoutOverviewPage: CheckoutOverviewPage
    page: Page

    constructor(page: Page) {
        this.checkoutOverviewPage = new CheckoutOverviewPage(page);
    }

    async getCheckoutOverviewTitle(): Promise<string> {
        return await this.checkoutOverviewPage.checkoutOverviewTitle.textContent();
    }

    async getInventoryItem(): Promise<string> {
        return await this.checkoutOverviewPage.inventoryItem.textContent();
    }

    async getInventoryItemQuantity(): Promise<any> {
        return await this.checkoutOverviewPage.inventoryItemQty.textContent();
    }

    async getInventoryName(): Promise<string> {
        return await this.checkoutOverviewPage.inventoryName.textContent();
    }

    async getInventoryPrice(): Promise<string> {
        return await this.checkoutOverviewPage.inventoryPrice.textContent();
    }

    async getPriceTotal(): Promise<string> {
        return await this.checkoutOverviewPage.priceTotal.textContent();
    }

    async getItemTotal(): Promise<string> {
        return await this.checkoutOverviewPage.itemTotal.textContent();
    }

    async getTax(): Promise<string> {
        return await this.checkoutOverviewPage.tax.textContent();
    }

    async getTotal(): Promise<string> {
        return await this.checkoutOverviewPage.total.textContent();
    }

    async clickCancelButton() {
        return this.checkoutOverviewPage.cancelButton.click();
    }

    async clickFinishButton() {
        return this.checkoutOverviewPage.finishButton.click();
    }

}