import {test, expect} from '@playwright/test'

test("sauces login validation", async ({page}) =>{
    await page.goto("https://sauce-demo.myshopify.com/account/login")
    await page.locator("#customer_email").fill("dikshitha1713@gmail.com")
    await page.locator("#customer_password").fill("testing@123")
    await page.locator('[value="Sign In"]').click()
})
test("test1", async ({page}) =>{
    await page.goto("https://sauce-demo.myshopify.com/account/login")
    await page.locator("#customer_email").fill("dikshitha1722@gmail.com")
    await page.locator("#customer_password").fill("testing@123")
    await page.locator('[value="Sign In"]').click()
})
test("test2", async ({page}) =>{
    await page.goto("https://sauce-demo.myshopify.com/account/login")
    await page.locator("#customer_email").fill("dikshithagirish2417@gmail.com")
    await page.locator("#customer_password").fill("testing@123")
    await page.locator('[value="Sign In"]').click()
})

