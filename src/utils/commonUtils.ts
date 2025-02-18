import { Locator, Page } from "@playwright/test";
import { LoginPageMethods } from "../pagemethods/LoginPageMethods";
const CryptoJS = require('crypto-js');

export class CommonUtils {
    loginPageMethods: LoginPageMethods;
    page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async isElementVisible(elementLocator: Locator) {
        await elementLocator.isVisible();
    }

    encryptCredentials(credential: string) {
        const ciphertext = CryptoJS.AES.encrypt(credential, 'my_secret_key');
        return ciphertext;
    }

    decryptCredentials(credential: string) {
        var bytes = CryptoJS.AES.decrypt(credential, 'my_secret_key');
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}
