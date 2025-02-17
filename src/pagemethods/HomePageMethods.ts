import { HomePage } from "../pageobjects/HomePage";
import { Page } from "@playwright/test";

export class HomePageMethods {

    homepage: HomePage;
    page: Page;

    constructor(page: Page) {
        this.homepage = new HomePage(page)
    }

    async getHomePageHeader(): Promise<string> {
        return await this.homepage.homePageHeader.textContent();
    }

    async getHomePageProductHeader(): Promise<string> {
        return await this.homepage.homePageProductHeader.textContent();
    }

    async getProductSelectList(): Promise<any> {
        return this.homepage.productSelectList;
    }

    async getSauceLabsBackPackItemName(): Promise<string> {
        return await this.homepage.sauceLabsBackPackItemName.textContent();
    }

    async getSauceLabsBackPackPrice(): Promise<any> {
        return await this.homepage.sauceLabsBackPackPrice.textContent();
    }

    async getSauceLabsBackPackAddToCart(): Promise<string> {
        return await this.homepage.sauceLabsBackPackAddToCart.textContent();
    }

    async getSauceLabsBackPackRemoveButton(): Promise<string> {
        return await this.homepage.sauceLabsBackPackRemoveButton.textContent();
    }

    async getShoppingCart(): Promise<any> {
        return await this.homepage.shopingCart.textContent();
    }

    async clickSauceLabsBackPackAddToCart() {
        await this.homepage.sauceLabsBackPackAddToCart.click();
    }

    async clickSauceLabsBackPackRemoveButton() {
        await this.homepage.sauceLabsBackPackAddToCart.click();
    }

    async clickShoppingCart() {
        await this.homepage.shopingCart.click();
    }

}