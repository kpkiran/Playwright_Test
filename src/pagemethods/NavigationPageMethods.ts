import { sauce_demo_url } from "../config/config";
import { Page } from "@playwright/test";

export class NavigationPageMethods {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async goToLoginURL() {
        await this.page.goto(sauce_demo_url);
    }
}