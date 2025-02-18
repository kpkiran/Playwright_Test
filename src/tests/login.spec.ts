import { test, expect } from "../fixtures/projectFixtures";
import { CommonUtils } from "../utils/commonUtils";
import data from './../data/data.json';

let commonUtils: CommonUtils
let username: string
let password: string
let incorrect_username: string

test.beforeEach(async ({ navigationPageMethods, page }) => {
    await navigationPageMethods.goToLoginURL();
    commonUtils = new CommonUtils(page);
    username = data.users[0].username;
    password = data.users[0].password;
    incorrect_username = data.users[1].incorrect_username

});

test('Verify the login page components', async ({ loginPageMethods, page }) => {
    expect(await commonUtils.isElementVisible(await loginPageMethods.getUsername()));
    expect(await commonUtils.isElementVisible(await loginPageMethods.getPassword()));
    expect(await commonUtils.isElementVisible(await loginPageMethods.getLoginButton()));
    expect(await loginPageMethods.getUsername()).toHaveAttribute("placeholder");
    expect(await loginPageMethods.getPassword()).toHaveAttribute("placeholder");
});

test('Incorrect login credentials throws error', async ({ loginPageMethods, page }) => {
    await loginPageMethods.login(commonUtils.encryptCredentials(incorrect_username), commonUtils.encryptCredentials(password));
    expect(await loginPageMethods.getErrorMessage()).toBe("Epic sadface: Username and password do not match any user in this service");
});

test('Login to the application with valid credentials', async ({ loginPageMethods, homePageMethods, page }) => {
    await loginPageMethods.login(commonUtils.encryptCredentials(username), commonUtils.encryptCredentials(password));
    expect(await homePageMethods.getHomePageHeader()).toBe("Swag Labs");
});