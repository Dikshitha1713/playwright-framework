import{test, expect} from '@playwright/test'
test("keyboard operations handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder("Enter Name").fill("Dikshita")
    await page.keyboard.press('ArrowLeft')
    await page.keyboard.type('h')
    await page.keyboard.press('ArrowRight')
    await page.keyboard.type(" -user")
    await expect(page.getByPlaceholder("Enter Name")).toHaveValue("Dikshitha -user")
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+c')
    await page.keyboard.press('Tab')
    await page.keyboard.press("Control+v")

    await page.keyboard.press("Tab")
    await page.keyboard.type("12345")
    await page.keyboard.press('Backspace')
    await page.keyboard.type('0')

    await page.keyboard.press('Shift+Tab')
    await page.keyboard.type("@gmail")

    await page.keyboard.press('ArrowLeft')
    await page.keyboard.down('Shift')
    await page.keyboard.press('3')
    await page.keyboard.press('KeyM')
    await page.keyboard.up('Shift')

    await page.keyboard.press('Control+A')
    await page.keyboard.press('Delete')

    await page.keyboard.type(".com")
})