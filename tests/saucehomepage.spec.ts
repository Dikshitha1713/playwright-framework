import{test,expect} from '@playwright/test'
import { sauceloginpage } from '../pages/sauceloginpage.js'
import { saucehomepage } from '../pages/saucehomepage.js'
import data from '../TestData/datadrivensauceHP.json' with {type: "json"}


let Loginpage : sauceloginpage
let Saucehomepage : saucehomepage

for (const productData of data)
test(`sauce homepage ${productData.prdname}`, async ({page})=>{

    Loginpage =new sauceloginpage(page)
    Saucehomepage = new saucehomepage(page)

    await Loginpage.launchurl(productData.url)
    await Loginpage.sauceloginbtn()
    await Loginpage.saucelogintoapp(productData.email,productData.password)

    console.log("Current URL:", page.url())

console.log(
    "Login error:",
    await Loginpage.errormsg.textContent()
)

    console.log("Current URL:", page.url())
    await expect(page).toHaveURL("https://sauce-demo.myshopify.com/")

    await expect(Saucehomepage.prodname).toContainText(productData.prdname)
    await expect(Saucehomepage.prodprice).toContainText(productData.prodprice.trim())

    const beforeCartCount = await Saucehomepage.getcartcount()

    await Saucehomepage.clickproduct(productData.prdname)
    await expect(Saucehomepage.viewprodimg).toBeVisible()

    await Saucehomepage.clickproduct(productData.prdname)

    
   const afterCartCount = await Saucehomepage.getcartcount()

   expect(afterCartCount).toBe(beforeCartCount + 1)

    await Saucehomepage.clickproduct(productData.prdname)

   console.log(await Saucehomepage.mycartcount.textContent())
    
})

