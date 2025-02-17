import { test as baseTest } from "@playwright/test";
import { NavigationPageMethods } from "../pagemethods/NavigationPageMethods";
import { LoginPageMethods } from "../pagemethods/LoginPageMethods";
import { HomePageMethods } from "../pagemethods/HomePageMethods";
import { CommonUtils } from "../utils/commonUtils";
import { YourCartPageMethods } from "../pagemethods/YourCartPageMethods";
import { CheckoutPageMethods } from "../pagemethods/CheckoutPageMethods";
import { CheckoutOverviewPageMethods } from "../pagemethods/CheckoutOverviewPageMethods";
import { CheckoutCompletePageMethods } from "../pagemethods/CheckoutCompletePageMethods";

export const test = baseTest.extend<{
    navigationPageMethods: NavigationPageMethods
    loginPageMethods: LoginPageMethods
    homePageMethods: HomePageMethods
    yourCartPageMethods: YourCartPageMethods
    checkoutPageMethods: CheckoutPageMethods
    checkoutOverviewPageMethods: CheckoutOverviewPageMethods
    checkoutCompletePageMethods: CheckoutCompletePageMethods
}>({

    navigationPageMethods: async ({ page }, use) => {
        const navigationPageMethods = new NavigationPageMethods(page);
        await use(navigationPageMethods);
    },

    loginPageMethods: async ({ page }, use) => {
        const loginPageMethods = new LoginPageMethods(page);
        await use(loginPageMethods);
    },

    homePageMethods: async ({ page }, use) => {
        const homePageMethods = new HomePageMethods(page);
        await use(homePageMethods);
    },

    yourCartPageMethods: async ({ page }, use) => {
        const yourCartPageMethods = new YourCartPageMethods(page);
        await use(yourCartPageMethods);
    },

    checkoutPageMethods: async ({ page }, use) => {
        const checkoutPageMethods = new CheckoutPageMethods(page);
        await use(checkoutPageMethods);
    },

    checkoutOverviewPageMethods: async ({ page }, user) => {
        const checkoutOverviewPageMethods = new CheckoutOverviewPageMethods(page);
        await user(checkoutOverviewPageMethods);
    },

    checkoutCompletePageMethods: async ({ page }, use) => {
        const checkoutCompletePageMethods = new CheckoutCompletePageMethods(page);
        await use(checkoutCompletePageMethods);
    }
});

export { expect } from "@playwright/test";