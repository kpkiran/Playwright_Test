import { Page, Locator } from "@playwright/test";

export class CheckoutOverviewPage {

    page: Page;
    checkoutOverviewTitle: Locator;
    inventoryItem: Locator;
    inventoryItemQty: Locator;
    inventoryName: Locator;
    inventoryPrice: Locator;
    priceTotal: Locator;
    itemTotal: Locator;
    tax: Locator;
    total: Locator;
    cancelButton: Locator;
    finishButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutOverviewTitle = this.page.getByTestId("title");
        this.inventoryItem = this.page.getByTestId("inventory-item");
        this.inventoryItemQty = this.page.getByTestId("item-quantity");
        this.inventoryName = this.page.getByTestId("inventory-item-name");
        this.inventoryPrice = this.page.getByTestId("inventory-item-price");
        this.priceTotal = this.page.getByTestId("total-info-label");
        this.itemTotal = this.page.getByTestId("subtotal-label");
        this.tax = this.page.getByTestId("tax-label");
        this.total = this.page.getByTestId("total-label");
        this.cancelButton = this.page.getByTestId("cancel");
        this.finishButton = this.page.getByTestId("finish");

    }
}