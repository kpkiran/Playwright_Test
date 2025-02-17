import { Page, Locator } from "@playwright/test";

export class YourCartPage {

    page: Page;
    secondaryHeader: Locator;
    removeButton: Locator;
    checkoutButton: Locator;
    continueShoppingButton: Locator;
    productName: Locator
    productPrice: Locator

    constructor(page: Page) {
        this.page = page;
        this.secondaryHeader = this.page.getByTestId("secondary-header");
        this.removeButton = this.page.getByTestId("remove-sauce-labs-backpack");
        this.checkoutButton = this.page.getByTestId("checkout");
        this.continueShoppingButton = this.page.getByTestId("continue-shopping");
        this.productName = this.page.getByTestId("inventory-item-name");
        this.productPrice = this.page.locator(".cart_contents_container > div .cart_list > .cart_item .cart_item_label .item_pricebar div");
    }
}