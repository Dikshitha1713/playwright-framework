import {test, expect} from '@playwright/test'
test("alerts handling", async function({page}){
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole("heading", {name:"Alerts & Popups"}).isVisible()
    page.on("dialog", (Dialoge)=>{
        console.log(Dialoge.message())
        Dialoge.accept("Dikshitha")
    })
    await page.locator("#alertBtn").first().click()
    await page.locator("#confirmBtn").first().click()
    await expect(page.locator("#demo")).toHaveText("You pressed OK!")
    await page.locator("#promptBtn").first().click()

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    console.log(await page.getByRole("heading", {name:"JavaScript Alerts"}).textContent())
    await page.getByRole("button", {name:"Click for JS Alert"}).click()
    await expect(page.locator("#result")).toHaveText("You successfully clicked an alert")
    await page.getByRole("button", {name:"Click for JS Confirm"}).click()
    await expect(page.locator("#result")).toHaveText("You clicked: Ok")
    await page.getByRole("button", {name:"Click for JS Prompt"}).click()

})