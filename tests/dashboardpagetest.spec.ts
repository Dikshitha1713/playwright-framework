import {test, expect} from '@playwright/test'
import { dashboardpage } from '../pages/dashboardpage.js'
import { loginpage } from '../pages/loginpage.js'

const url = "https://rahulshettyacademy.com/client"
const username = "dikshitha1713@gmail.com"
const password = "Testing@123"
const productname = "ADIDAS ORIGINAL"
const productprice = "$ 11500"

let Loginpage : loginpage
let Dashboardpage : dashboardpage

test.beforeEach(async({page})=>{
  Loginpage = new loginpage(page)
  Dashboardpage = new dashboardpage(page)
  await Loginpage.lanuchurl(url)
  await Loginpage.logintoapplication(username, password)
})

test("dashboardpage" , async({page}) =>{
    await Dashboardpage.searchandaddproducttothecart(productname)
    await expect(Dashboardpage.addtocartsuccessmsg).toHaveText("Product Added To Cart")
    
})
test("view product", async({page}) =>{
  await Dashboardpage.serachandvalidateproductdetailes(productname, productprice)
  await expect(Dashboardpage.viewproductname).toContainText("ADIDAS ORIGINAL")
  await expect(Dashboardpage.viewproductprice).toContainText("$ 11500")
})
