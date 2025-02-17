import { Page, Locator } from "@playwright/test";

export class CheckoutCompletePage {

    page: Page;
    checkoutCompleteTitle: Locator;
    thankyouMessage: Locator;
    backToHomeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutCompleteTitle = this.page.getByTestId("title");
        this.thankyouMessage = this.page.getByTestId("complete-header");
        this.backToHomeButton = this.page.getByTestId("back-to-products");
    }

}