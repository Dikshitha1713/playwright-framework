import {test, expect} from '@playwright/test'
import { saucesignuppage } from '../pages/saucesignuppage.js'

const url = "https://sauce-demo.myshopify.com/"
const firstname = "dikshitha"
const lastname = "puneeth"
const email = "dikshitha1713@gmail.com"
const password = "sauce123"


let Saucesignuppage :saucesignuppage

test("sauceRegi validation", async ({ page }) => {

    Saucesignuppage = new saucesignuppage(page)
    await Saucesignuppage.lanchurl(url)
    await Saucesignuppage.signupbtn()
    await Saucesignuppage.signupintoapp(firstname,lastname,email,password)
    await expect (Saucesignuppage.myaccount).toBeVisible() 
})

