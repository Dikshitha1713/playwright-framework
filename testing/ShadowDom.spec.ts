import {test, expect} from '@playwright/test'
test("shadow handling", async ({page})=>{
    await page.goto("https://playwrightlab.github.io/")

    await page.getByText("Menu ▾").hover()
    await page.getByText("Shadow DOM", {exact:true}).first().click()

    await page.getByRole("heading", {name:" Shadow DOM Elements"}).scrollIntoViewIfNeeded()
    await page.locator("#shadowInput").fill("practice shawdow dom")
    await page.locator("#shadowBtn").click()
    await expect(page.locator("#shadowResult")).toContainText("practice shawdow dom")

    await page.locator("#nestedShadowTitle").isVisible()
    await page.locator("#innerBtn").click()
    await expect(page.locator("#innerResult")).toContainText("Inner button clicked")

})