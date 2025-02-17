import { test, expect } from "../fixtures/projectFixtures";
import { CommonUtils } from "../utils/commonUtils";

test.beforeEach(async ({ navigationPageMethods, page }) => {
    await navigationPageMethods.goToLoginURL();
});

test('Verify the login page components', async ({ loginPageMethods, page }) => {

    let commonUtils: CommonUtils = new CommonUtils(page)
    expect(await commonUtils.isElementVisible(await loginPageMethods.getUsername()));
    expect(await commonUtils.isElementVisible(await loginPageMethods.getPassword()));
    expect(await commonUtils.isElementVisible(await loginPageMethods.getLoginButton()));
    expect(await loginPageMethods.getUsername()).toHaveAttribute("placeholder");
    expect(await loginPageMethods.getPassword()).toHaveAttribute("placeholder");
});

test('Incorrect login credentials throws error', async ({ loginPageMethods, page }) => {
    await loginPageMethods.login("test_user", "secret_sauce");
    expect(await loginPageMethods.getErrorMessage()).toBe("Epic sadface: Username and password do not match any user in this service");
});

test('Login to the application with valid credentials', async ({ loginPageMethods, homePageMethods, page }) => {
    await loginPageMethods.login("standard_user", "secret_sauce");
    expect(await homePageMethods.getHomePageHeader()).toBe("Swag Labs");
});