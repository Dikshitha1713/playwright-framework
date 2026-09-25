import {test, expect} from'@playwright/test'

test("browser fixture", async({browser})=>{

    // browser will not lanch automatically -- just it ll recogine the browser
    // 1st we need to create the instance (lanch browser)
    // we need to create page 

    // use case-- same workflow testing , multiple pages on the same broswer

   const context =await browser.newContext() // create the broswer instance
   const page = await context.newPage() // creates the page 
   await page.goto("https://google.com")

   const page1 = await context.newPage() // creates the page 
   await page1.goto("https://facebook.com")

   const page2 = await context.newPage() // creates the page 
   await page2.goto("https://linkedin.com")

   const context1 = await browser.newContext()
   const page4 = await context1.newPage()
   await page4.goto("https://instagram.com")
})

// test("page fixture", async({page})=>{

// })