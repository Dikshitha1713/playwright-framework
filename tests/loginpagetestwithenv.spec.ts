import {test, expect} from '@playwright/test'
import { loginpage } from '../pages/loginpage.js'

import { Env } from '../ultils/Env.js'

let Loginpage : loginpage

test.beforeEach(async ({page})=>{
   Loginpage = new loginpage(page)
   await Loginpage.lanuchurl(Env.baseurl!)
})

test("loginpage", async ({page})=>{
   await Loginpage.logintoapplication(Env.username!, Env.password!)
   await expect(Loginpage.homepageidentifer).toBeVisible()
})

test("invalid login", async({page})=>{
    await Loginpage.logintoapplication(Env.username!, Env.incorrect_password!)
    await expect(Loginpage.errormsg).toBeVisible()
})

test("Empty UN", async({page})=>{
    await Loginpage.logintoapplication("", Env.password!)
    await expect(Loginpage.emailrequired).toBeVisible()
})

test("Empty PW", async({page})=>{
    await Loginpage.logintoapplication(Env.username!, "")
    await expect(Loginpage.passwordrequired).toBeVisible()
})
