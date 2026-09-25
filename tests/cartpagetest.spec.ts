import{test, expect} from '@playwright/test'

import { loginpage } from '../pages/loginpage.js'
import { dashboardpage } from '../pages/dashboardpage.js'
import { cartpage } from '../pages/cartpage.js'
import items from '../TestData/datadrivencart.json' with {type:"json"}

let Loginpage : loginpage
let Dashboardpage : dashboardpage
let Cartpage : cartpage

test.beforeEach(async ({page})=>{
  Loginpage = new loginpage(page)
  Dashboardpage = new dashboardpage(page)
  Cartpage = new cartpage(page)
  
})
for (let testdata of items)
test(`validate the cartpage for ${testdata.productname}`, async({page})=>{
   await Loginpage.lanuchurl(testdata.url)
   await Loginpage.logintoapplication(testdata.username, testdata.password)

   await Dashboardpage.searchandaddproducttothecart(testdata.productname)

   await expect(Dashboardpage.addtocartsuccessmsg).toContainText("Product Added To Cart")

   await expect(Cartpage.cartcount).toHaveText("1")
   await Cartpage.clickcartpage()

   await expect(Cartpage.productname).toHaveText(testdata.productname)
   await expect(Cartpage.ordernumber).toHaveText(testdata.ordernumber)
   await expect(Cartpage.finalproductprice).toHaveText(testdata.finalproductprice)
   await expect(Cartpage.totalamt).toContainText(testdata.totalamt)
   
   await Cartpage.submitcheckout()
})