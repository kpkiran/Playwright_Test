import { Page, Locator } from "@playwright/test";

export class CheckoutPage {

    page: Page;
    title: Locator;
    firstName: Locator;
    lastName: Locator;
    postalCode: Locator;
    cancelButton: Locator;
    continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = this.page.getByTestId("title");
        this.firstName = this.page.getByTestId("firstName");
        this.lastName = this.page.getByTestId("lastName");
        this.postalCode = this.page.getByTestId("postalCode");
        this.cancelButton = this.page.getByTestId("cancel");
        this.continueButton = this.page.getByTestId("continue");

    }
}