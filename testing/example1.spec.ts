import{test, expect} from '@playwright/test';

// test -- to wrt test case n expect -- to wrt asseration/ validation -- framework 

// test("login validation", async function({page}){
//    //test stepts
//    //expect -- validation
// })

// test("login validation", async function({page}){
//     await page.goto("https://practicetestautomation.com/practice-test-login/ ")
//     await page.locator("input#username").fill("student")
//     await page.locator("input#password").fill("Password123")
//     await page.locator("button#submit").click()
//     await expect(page.locator("[class='post-title']")).toBeVisible
// })

test("gamil login", async function({page}){
    await page.goto("https://accounts.google.com/v3/signin/identifier?service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-130962531:1787570093983348")
    await page.locator("div.rFrNMe").nth(2).fill("girshdikshitha@2417.com")
    await page.locator("div button.VfPpkd-LgbsSe").nth(2).click
})
