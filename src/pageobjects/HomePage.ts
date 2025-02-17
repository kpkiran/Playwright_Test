import { Page, Locator } from "@playwright/test";

export class HomePage {

    page: Page;
    homePageHeader: Locator;
    homePageProductHeader: Locator;
    productSelectList: Locator;
    sauceLabsBackPackItemName: Locator;
    sauceLabsBackPackPrice: Locator;
    sauceLabsBackPackAddToCart: Locator;
    sauceLabsBackPackRemoveButton: Locator
    shopingCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homePageHeader = this.page.locator(".app_logo");
        this.homePageProductHeader = this.page.locator("[data-test='title']");
        this.productSelectList = this.page.getByTestId("product-sort-container");
        this.sauceLabsBackPackItemName = this.page.locator(".inventory_container .inventory_item:nth-child(1) .inventory_item_description .inventory_item_label a .inventory_item_name");
        this.sauceLabsBackPackPrice = this.page.locator(".inventory_container .inventory_item:nth-child(1) .inventory_item_description .pricebar div");
        this.sauceLabsBackPackAddToCart = this.page.getByTestId("add-to-cart-sauce-labs-backpack");
        this.sauceLabsBackPackRemoveButton = this.page.getByTestId("remove-sauce-labs-backpack");
        this.shopingCart = this.page.getByTestId("shopping-cart-badge");
    }

}