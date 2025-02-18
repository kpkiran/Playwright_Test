import { test, expect } from "../fixtures/projectFixtures";
import { CommonUtils } from "../utils/commonUtils";

test.beforeEach(async ({ navigationPageMethods, page }) => {
    await navigationPageMethods.goToLoginURL();
});

test('Verify the homepage components', async ({ loginPageMethods, page, homePageMethods }) => {
    let commonUtils: CommonUtils = new CommonUtils(page);
    await loginPageMethods.login("standard_user", "secret_sauce");
    expect(await homePageMethods.getHomePageHeader()).toBe("Swag Labs");
    expect(await homePageMethods.getHomePageProductHeader()).toBe("Products");
    commonUtils.isElementVisible(await homePageMethods.getProductSelectList());
    expect(await homePageMethods.getSauceLabsBackPackAddToCart()).toBe('Add to cart');
});

test('Add a product to card', async ({ loginPageMethods, page, homePageMethods,
    yourCartPageMethods, checkoutPageMethods, checkoutOverviewPageMethods, checkoutCompletePageMethods }) => {

    await loginPageMethods.login("standard_user", "secret_sauce");
    let productName = await homePageMethods.getSauceLabsBackPackItemName();
    let productPrice = await homePageMethods.getSauceLabsBackPackPrice();

    await homePageMethods.clickSauceLabsBackPackAddToCart();

    expect(await homePageMethods.getSauceLabsBackPackRemoveButton()).toEqual("Remove");
    expect(await homePageMethods.getShoppingCart()).toEqual("1");

    await homePageMethods.clickShoppingCart();

    expect(await yourCartPageMethods.getCheckoutButton()).toBe("Checkout");
    expect(await yourCartPageMethods.getContinueShoppingButton()).toBe("Continue Shopping");
    expect(await yourCartPageMethods.getProductName()).toEqual(productName);
    expect(await yourCartPageMethods.getProductPrice()).toEqual(productPrice);

    await yourCartPageMethods.clickCheckoutButton();

    expect(await checkoutPageMethods.getTitleText()).toBe("Checkout: Your Information");
    expect(await checkoutPageMethods.getFirstName()).toBeVisible();
    expect(await checkoutPageMethods.getLastName()).toBeVisible();
    expect(await checkoutPageMethods.getPostalCode()).toBeVisible();
    expect(await checkoutPageMethods.getCancelButton()).toBeVisible();
    expect(await checkoutPageMethods.getContinueButton()).toBeVisible();

    await checkoutPageMethods.setFirstName();
    await checkoutPageMethods.setLastName();
    await checkoutPageMethods.setPostalCode();
    await checkoutPageMethods.clickContinueButton();

    expect(await checkoutOverviewPageMethods.getCheckoutOverviewTitle()).toBe("Checkout: Overview");
    expect((await checkoutOverviewPageMethods.getInventoryItemQuantity())).toBe("1");
    expect(await checkoutOverviewPageMethods.getInventoryName()).toBe(productName);
    expect(await checkoutOverviewPageMethods.getInventoryPrice()).toBe(productPrice);
    expect((await checkoutOverviewPageMethods.getItemTotal())).toBe("Item total: " + productPrice);

    await checkoutOverviewPageMethods.clickFinishButton();

    expect(await checkoutCompletePageMethods.getCheckoutCompletePageTitle()).toBe("Checkout: Complete!");
    expect(await checkoutCompletePageMethods.getCheckoutCompletePageThanksMessage()).toBeVisible();
    expect(await checkoutCompletePageMethods.getBackToHomeButton()).toBeVisible();
});