import { Browser, BrowserContext, Page, chromium, expect } from "@playwright/test";
import EnvironmentConfig from "./utils/EnvironmentConfig";



async function globalSetup() {

    const browser: Browser = await chromium.launch();

    const context: BrowserContext = await browser.newContext();

    const page: Page = await context.newPage();



    await page.goto(EnvironmentConfig.BASE_URL);

    await page.locator('input[name="username"]').fill('ibex');

    await page.locator('input[name="password"]').fill('ibexibex');

    await page.getByRole('button', { name: 'Log In' }).click();

    await page.waitForLoadState('networkidle');

    await expect(page).toHaveTitle('The Galen™ Platform');

    await expect(page.locator('header [class="logo"]')).toBeVisible({timeout: 30000});



    await page.context().storageState({path: "./LoginAuth.json"});

    await browser.close();

}



export default globalSetup;