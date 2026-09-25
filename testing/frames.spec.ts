import {test, expect} from '@playwright/test'
// test("iframes handling", async({page})=>{
//     await page.goto("https://demo.automationtesting.in/Frames.html")
//     const framepage = page.frameLocator("#singleframe") //singleframe
//     await framepage.locator("[type='text']").first().fill("single frame")
//     await page.waitForTimeout(2000)

//     await page.getByText("Video").hover()
//     await page.getByText("Youtube").first().click()

//     await page.getByText("SwitchTo").hover()
//     await page.getByText("Frames").first().click()

//     // nested frame
//     await page.getByText("Iframe with in an Iframe").click()
//     const outerframe = page.frameLocator("#Multiple iframe")
//     const innerframe = outerframe.frameLocator(".iframe-container iframe")

// await innerframe.locator("[type='text']").first().fill("nested frame")
// })

test("frames", async({page}) =>{
    await page.goto("https://automatewithbipin.com/")
    await page.getByText("iFrame", {exact:true}).click()

    const FP=  page.frameLocator("#simpleFrame")
    await FP.locator("#frameButton").first().click()
    await expect(FP.locator("#frameMsg")).toContainText("Button inside ")

    await page.getByText("iframe id = formFrame",{exact:true}).textContent()
    const fromframe = page.frameLocator("#formFrame")
    await fromframe.locator("#frameName").first().fill("FRAMES")

    await page.locator("//div[text() = 'frameA']").isVisible()
    const frameA = page.frameLocator("iframe#frameA")
    await frameA.getByRole("button", {name:'Action'}).click()
    //await frameA.locator("button#frameAction").first().click()
    const frameB = page.frameLocator("iframe#frameB")
     await frameB.locator("button#frameAction").first().click()
})
// test("internet frames", async({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/frames")
//     await page.getByText("Nested Frames", {exact:true}).click()
//     //const frame = page.frameLocator('[name="frame-left"]')
//     //await expect(frame.locator("body").first()).toHaveText("LEFT");

//     const frame1 = page.frame({ name: "frame-left" });
//     await expect(frame1!.locator("body")).toHaveText("LEFT");
// })