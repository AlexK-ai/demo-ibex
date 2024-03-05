import test, { Page, expect } from "@playwright/test";
import HeaderComponent from "../components/HeaderComponent";
import EnvironmentConfig from "../utils/EnvironmentConfig";

export default class LoginPage {

    private usernameTextfield = this.page.locator('input[name="username"]');
    private passwordTextfield = this.page.locator('input[name="password"]');
    private usernameLabel = this.page.locator("label[name='username']");
    private passwordLabel = this.page.locator("label[name='password']");
    private loginButton = this.page.getByRole("button", { name: "Log In" });
    private errorMessageElement = this.page.locator('[class="error-message"]')
    private expectedLoginErrorMessage = "The user name or password are incorrect";

    constructor(protected page: Page) {
    }


    async navigateToUrl(url: string = EnvironmentConfig.BASE_URL) {
        await test.step(`Performing navigation to '${url}'`, async () => {
            await this.page.goto(url);
            await this.page.waitForLoadState('networkidle');
        });
    }

    async validatePageUrl(expectedUrl: string) {
        await test.step(`Validating that an expected URL is: '${expectedUrl}'`, async () => {
            await expect.poll(async () => {
                return this.page.url();
            }, {
                message: `Actual URL: '${this.page.url()}', expected URL: '${expectedUrl}'`
            }).toContain(expectedUrl);
        });
    }

    async loginToSystem(username: string = EnvironmentConfig.DEFAULT_USERNAME, password: string = EnvironmentConfig.DEFAULT_PASSWORD) {
        await test.step(`Performing a login with username: '${username}' and password: '${password}'`, async () => {
            await this.typeUsername(username);
            await this.typePassword(password)
            await this.clickLoginButton();
        })


    }

    async typeUsername(username: string = EnvironmentConfig.DEFAULT_USERNAME) {
        await test.step(`Typing '${username}' into 'username' textfield`, async () => {
            await this.usernameTextfield.fill(username);
        })
    }

    async typePassword(password: string = EnvironmentConfig.DEFAULT_PASSWORD) {
        await test.step(`Typing '${password}' into 'username' textfield`, async () => {
            await this.passwordTextfield.fill(password);
        })
    }

    async clickLoginButton() {
        await test.step("Clicking the 'Log In' button", async () => {
            await this.loginButton.click();
            await this.page.waitForLoadState("networkidle");
        })
    }

    async validateUsernameInputValue(username: string) {
        await test.step(`Validating that 'username' textfield has an expected input value of '${username}'`, async () => {
            await expect(this.usernameTextfield).toHaveValue(username);
        })
    }

    async validatePasswordInputValue(password: string) {
        await test.step(`Validating that 'password' textfield has an expected input value of '${password}'`, async () => {
            await expect(this.passwordTextfield).toHaveValue(password);
        })
    }


    public async validateUsenameElementHighlight() {
        await test.step(`Validating that border of 'usename' textfield is highlighted`, async () => {
            await expect(this.usernameLabel).toHaveAttribute("class", "error");
        })
    }

    public async validatePasswordElementHighlight() {
        await test.step(`Validating that border of 'password' textfield is highlighted`, async () => {
            await expect(this.passwordLabel).toHaveAttribute("class", "error");
        })
    }

    public async validateErrorMessage(errorMessgae: string = this.expectedLoginErrorMessage) {
        await test.step(`Validating that login error message is: '${errorMessgae}'`, async () => {
            await expect(this.errorMessageElement).toContainText(errorMessgae)
        })
    }



}