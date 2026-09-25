import {test, expect} from '@playwright/test'
test("newtab & newwindows handling", async ({page}) => {
    // await page.goto("https://demo.automationtesting.in/Windows.html")
    // await page.getByRole("button", {name:"    click   "}).click()
    // const newpage =await page.waitForEvent('popup')
    // await newpage.getByText("Downloads", {exact:true}).click()
    // await newpage.getByRole("heading", {name:"Selenium Clients and WebDriver Language Bindings"}).textContent()
    // await expect (newpage.getByRole("heading", {name:"Selenium Clients and WebDriver Language Bindings"})).toContainText("Selenium Clients")
    // await page.bringToFront()
    // await page.getByText("Home",{exact:true}).click()
    // await page.getByPlaceholder("Email id for Sign Up").fill("abc@gmail.com")

    /*await newpage.getByText("other languages exist", {exact:true}).click() 
    i cant open this coz the newpage has been closed*/

    // const page1 = page.waitForEvent('popup')
    // await page.getByRole("button", {name:"    click   "}).click()
    // const newpage1 = await page1
    // await newpage1.getByText("About", {exact:true}).click()
    // await newpage1.getByText("History", {exact:true}).click()


    await page.goto("https://demo.automationtesting.in/Windows.html")
    await page.getByText("Open New Seperate Windows", {exact:true}).click()
    await page.getByRole("button", {name:"click"}).click()
    const newwindow = await page.waitForEvent("popup")
    await newwindow.getByRole("button", {name:"About"}).click()
    await newwindow.getByText("Sponsor Us", {exact:true}).click()
})
