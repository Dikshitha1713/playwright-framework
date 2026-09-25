import {test, expect} from '@playwright/test'
import { dashboardpage } from '../pages/dashboardpage.js'
import { loginpage } from '../pages/loginpage.js'

import data from '../TestData/products.json' with { type: "json" };
//console.log(data)


let Loginpage : loginpage
let Dashboardpage : dashboardpage

test.beforeEach(async({page})=>{
  Loginpage = new loginpage(page)
  Dashboardpage = new dashboardpage(page)
  await Loginpage.lanuchurl(data.url)
  await Loginpage.logintoapplication(data.username, data.password)
})

test("dashboardpage" , async({page}) =>{
    await Dashboardpage.searchandaddproducttothecart(data.productname)
    await expect(Dashboardpage.addtocartsuccessmsg).toHaveText("Product Added To Cart")
    
})
test("view product", async({page}) =>{
  await Dashboardpage.serachandvalidateproductdetailes(data.productname, data.productprice)
  await expect(Dashboardpage.viewproductname).toContainText("ADIDAS ORIGINAL")
  await expect(Dashboardpage.viewproductprice).toContainText("$ 11500")
})

/*
const data1 = 
{
  url: 'https://rahulshettyacademy.com/client',
  username: 'dikshitha1713@gmail.com',
  password: 'Testing@123',
  productname: 'ADIDAS ORIGINAL',
  productprice: '$ 11500'
}
console.log(data1.url)
console.log(data1.productname)

*/
