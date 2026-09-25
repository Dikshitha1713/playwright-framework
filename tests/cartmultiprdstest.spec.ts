import {test, expect} from '@playwright/test'
import { loginpage } from '../pages/loginpage.js'
import { carmultiprdspage } from '../pages/cartmultiprdspage.js'

import data from "../TestData/datadrivencart1.json" with {type:"json"}

let Loginpage : loginpage
let Cartmultiprdspage : carmultiprdspage

test.beforeEach(async ({page}) =>{
   Loginpage = new loginpage(page)
   Cartmultiprdspage = new carmultiprdspage(page)
    
})
test("validate multiple product cart flow", async({page})=>{
    await Loginpage.lanuchurl(data.url)
    await Loginpage.logintoapplication(data.username, data.password)
    
    let expectcartcount = 0
    for(let step of data.actions){
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


