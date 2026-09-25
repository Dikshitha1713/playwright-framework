import {test, expect} from '@playwright/test'
import { dashboardpage } from '../pages/dashboardpage.js'
import { loginpage } from '../pages/loginpage.js'
import { ExcelUtisls } from '../ultils/ExcelUltisls.js'

import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filepath = path.join(__dirname, "../TestData/pwexcel.xlsx")
const sheetname = "Sheet1"

let products
try{
  const products = ExcelUtisls.getexceldata(filepath,sheetname)
  //console.log(products)
  //console.log(Object.keys(products[0]))
}
catch(error){
  console.log(error)
}

let Loginpage : loginpage
let Dashboardpage : dashboardpage


test.beforeEach(async({page})=>{
  Loginpage = new loginpage(page)
  Dashboardpage = new dashboardpage(page)
  
  
})
for(let data of products)
test(`dashboardpage for ${data.productname}` , async({page}) =>{
    await Loginpage.lanuchurl(data.url)
    await Loginpage.logintoapplication(data.username, data.password)
    await Dashboardpage.searchandaddproducttothecart(data.productname)
    await expect(Dashboardpage.addtocartsuccessmsg).toHaveText("Product Added To Cart")
    
})
for(let data of products)
test(`view product for ${data.productname}, ${data.productprice}`, async({page}) =>{
  await Loginpage.lanuchurl(data.url)
  await Loginpage.logintoapplication(data.username, data.password)
  await Dashboardpage.serachandvalidateproductdetailes(data.productname, data.productprice)
  await expect(Dashboardpage.viewproductname).toContainText(data.productname)
  await expect(Dashboardpage.viewproductprice).toHaveText(`${data.productprice}`)
  
})


/*const array= [
  {
    url: 'https://rahulshettyacademy.com/client',
    username: 'dikshitha1713@gmail.com',
    password: 'Testing@123',
    productname: 'ADIDAS ORIGINAL',
    productprice: '$ 11500'
  },
  {
    url: 'https://rahulshettyacademy.com/client',
    username: 'dikshitha1713@gmail.com',
    password: 'Testing@123',
    productname: 'ZARA COAT 3',
    productprice: '$ 11500'
  },
  {
    url: 'https://rahulshettyacademy.com/client',
    username: 'dikshitha1713@gmail.com',
    password: 'Testing@123',
    productname: 'iphone 13 pro',
    productprice: '$ 55000'
  }
]

console.log(array[0])
console.log(array[0].productname)

for( let elements of array){
  console.log(elements.productname)
}
*/

  
  