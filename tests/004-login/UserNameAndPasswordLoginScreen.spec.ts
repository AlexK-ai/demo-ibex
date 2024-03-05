import test from "@playwright/test";
import LoginPage from "../../pages/LoginPage";


test.describe("Login - User Name and Password in Login Screen", () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateToUrl();
    })

    test(`User Name and Password in Login Screen`, {
        tag: ['@login'],
        annotation: [
            { type: 'Monday Link', description: 'https://ibex-ai-squad.monday.com/boards/5185954234/pulses/5547221590' },
        ],
    }, async () => {
        const testInput = "test input";
        await loginPage.typeUsername(testInput);
        await loginPage.validateUsernameInputValue(testInput)
        await loginPage.typePassword(testInput);
        await loginPage.validatePasswordInputValue(testInput);
    });

});