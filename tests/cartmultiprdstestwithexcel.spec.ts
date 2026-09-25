import {test, expect} from '@playwright/test'
import { loginpage } from '../pages/loginpage.js'
import { carmultiprdspage } from '../pages/cartmultiprdspage.js'
import { ExcelUtisls } from '../ultils/ExcelUltisls.js'


import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filepath = path.join(__dirname, '../TestData/pwexcel.xlsx')
const sheetname = "cartmultipage"

let data :any
try{
     data = ExcelUtisls.getexceldata(filepath,sheetname)
}
catch(error){
    console.log(error)
}

let Loginpage : loginpage
let Cartmultiprdspage : carmultiprdspage

test.beforeEach(async ({page}) =>{
   Loginpage = new loginpage(page)
   Cartmultiprdspage = new carmultiprdspage(page)
    
})
test("validate multiple product cart flow", async({page})=>{
    const loginData = data[0]
    await Loginpage.lanuchurl(loginData.url)
    await Loginpage.logintoapplication(loginData.username, loginData.password)
    
    let expectcartcount = 0
    for(let step of data){
        if(step.action === "add"){
            await Cartmultiprdspage.addprods(step.productname!)
            await expect(Cartmultiprdspage.prdaddedtocartmsg).toContainText("Product Added To Cart")
            expectcartcount++
            await expect(Cartmultiprdspage.cartcount).toHaveText(expectcartcount.toString())
            //await expect(Cartmultiprdspage.cartcount).toContainText(step.cartcount!)
        }
        if(step.action === "cart"){
            await Cartmultiprdspage.tapcart()
            //await expect(Cartmultiprdspage.viewproductname).toHaveValue(step.productname!)
        }
        if(step.action === "delete"){
            await Cartmultiprdspage.tapdelete()
        await expect(Cartmultiprdspage.deletetheprdmsg).toContainText("No Product in Your Cart")
          expectcartcount = 0
        }
        if(step.action === "continue"){
            await Cartmultiprdspage.tapcontinuebtn()
        }
        
        if(step.action === "checkout"){
            await Cartmultiprdspage.tapcheckout()
        }
    }
    
})


