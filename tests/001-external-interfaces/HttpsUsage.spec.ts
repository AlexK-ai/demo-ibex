import test from "@playwright/test";
import LoginPage from "../../pages/LoginPage";
import EnvironmentConfig from "../../utils/EnvironmentConfig";

test.describe("External Interface - HTTPS Usage", () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
    })

    test(`Access the software URL`,{
        tag: ["@regression", "@sanity", "@external_interface", "@network"],
    }, async () => {
        await loginPage.navigateToUrl();
        await loginPage.validatePageUrl(EnvironmentConfig.BASE_URL);
    });

    test(`Attempt to access the software using HTTP`,{
        tag: ["@regression", "@sanity", "@external_interface", "@network"],
    }, async () => {
        await loginPage.navigateToUrl(EnvironmentConfig.BASE_URL.replace('https', 'http'));
        await loginPage.validatePageUrl(EnvironmentConfig.BASE_URL);
    });

});