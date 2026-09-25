import {test, expect} from '@playwright/test'
import { loginpage } from '../pages/loginpage.js'

const url = "https://rahulshettyacademy.com/client"
const username = "dikshitha1713@gmail.com"
const password = "Testing@123"
const wrongpassword = "test"
const emptyUN = " "
const emptyPW = " "


test("loginpage", async ({page})=>{
   const Loginpage = new loginpage(page)
   await Loginpage.lanuchurl(url)
   await Loginpage.logintoapplication(username, password)
   await expect(Loginpage.homepageidentifer).toBeVisible()
})

test("invalid login", async({page})=>{
    const invalidlogin = new loginpage(page)
    await invalidlogin.lanuchurl(url)
    await invalidlogin.logintoapplication(username, wrongpassword)
    await expect(invalidlogin.errormsg).toBeVisible()
})

test("Empty UN", async({page})=>{
    const EmptyUN = new loginpage(page)
    await EmptyUN.lanuchurl(url)
    await EmptyUN.logintoapplication("", password)
    await expect(EmptyUN.emailrequired).toBeVisible()
})

test("Empty PW", async({page})=>{
    const EmptyPW = new loginpage(page)
    await EmptyPW.lanuchurl(url)
    await EmptyPW.logintoapplication(username, "")
    await expect(EmptyPW.passwordrequired).toBeVisible()
})
