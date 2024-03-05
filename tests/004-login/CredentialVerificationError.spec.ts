import test, { expect } from "@playwright/test";
import LoginPage from "../../pages/LoginPage";
import HeaderComponent from "../../components/HeaderComponent";


test.describe("Credential Verification Error", () => {

    let loginPage: LoginPage;
    let headerComponent: HeaderComponent;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        headerComponent = new HeaderComponent(page);
        // await loginPage.navigateToUrl();
    })

    test(`Credential Verification Error`, {
        tag: ['@login', '@regression', '@sanity'],
    }, async ({ page }) => {
        await loginPage.loginToSystem("incorrect username", "incorrect password");
        await loginPage.validateUsenameElementHighlight();
        await loginPage.validatePasswordElementHighlight();
        await loginPage.validateErrorMessage();
        await loginPage.loginToSystem();
        await headerComponent.validateLoginWithSuccess();
    });

    test.only(`alex-auto-snup-env Test`, {
        tag: ['@login', '@regression', '@sanity'],
    }, async ({ page }) => {
        await page.goto("https://alex-auto-snup-env.ibex-ai.com/login")
        await expect(page).toHaveTitle("The Galen™ Platform");
        await expect(page.locator('[class="logo"]')).toBeVisible();
    });




});