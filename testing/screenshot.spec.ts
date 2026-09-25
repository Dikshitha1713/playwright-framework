import{test, expect} from '@playwright/test'
test("screenshot handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path: 'screenshots/page.png'})
    await page.getByRole("button", {name:'START'}).screenshot({path:'screenshots/element.png'})
    await page.screenshot({path:'screenshots/fullpage.png', fullPage:true})
})