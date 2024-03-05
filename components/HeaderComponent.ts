import test, { Page, expect } from "@playwright/test";

export default class HeaderComponent {

    private logoElement = this.page.locator('[class="logo"]');
    private casesElement = this.page.locator("[class='breadcrumbs'] [class='item cases']");
    private logOutElement = this.page.locator("button[class='logout']");

    constructor(protected page: Page) {

    }

    public async validateLoginWithSuccess(){
        await test.step("Validating successfull login", async() => {
            await this.validateIbexLogoIsVisible();
            await this.validateLogoutButtonIsVisible();
        });
    }

    public async validateIbexLogoIsVisible() {
        await test.step("Validating 'Ibex Logo' is visible", async() => {
            await expect(this.logoElement).toBeVisible();
        })
    }

    public async validateLogoutButtonIsVisible() {
        await test.step("Validating 'Log Out' button is visible", async() => {
            await expect(this.logOutElement).toBeVisible();
        })
    }
}