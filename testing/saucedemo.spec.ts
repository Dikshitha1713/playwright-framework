import {test, expect} from '@playwright/test'

test("sauces login validation", async ({page}) =>{
    await page.goto("https://sauce-demo.myshopify.com/account/login")
    await page.locator("#customer_email").fill("dikshitha1713@gmail.com")
    await page.locator("#customer_password").fill("testing@123")
    await page.locator('[value="Sign In"]').first().click()
    await page.getByRole("button",{name:"Sign up"}).first().click()
})