import {test, expect} from '@playwright/test'
import { loginpage } from '../pages/loginpage.js'

const url = "https://rahulshettyacademy.com/client"
const username = "dikshitha1713@gmail.com"
const password = "Testing@123"
const wrongpassword = "test"
const emptyUN = " "
const emptyPW = " "

let Loginpage : loginpage

test.beforeEach(async ({page})=>{
   Loginpage = new loginpage(page)
   await Loginpage.lanuchurl(url)
})

test("loginpage",{tag : '@smoke'}, async ({page})=>{
   await Loginpage.logintoapplication(username, password)
   await expect(Loginpage.homepageidentifer).toBeVisible()
})

test("@smoke @regression invalid login", async({page})=>{
    await Loginpage.logintoapplication(username, wrongpassword)
    await expect(Loginpage.errormsg).toBeVisible()
})

test("Empty UN",{tag :['@smoke','@regression']}, async({page})=>{
    await Loginpage.logintoapplication("", password)
    await expect(Loginpage.emailrequired).toBeVisible()
})

test("Empty PW", async({page})=>{
    await Loginpage.logintoapplication(username, "")
    await expect(Loginpage.passwordrequired).toBeVisible()
})
