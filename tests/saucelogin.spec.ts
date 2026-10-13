import{test,expect} from '@playwright/test'
import { sauceloginpage } from '../pages/sauceloginpage.js'

const url = "https://sauce-demo.myshopify.com/"
const email = "dikshitha1713@gmail.com"
const password = "sauce123"
const invalidpassword = "sauce"

test("saucelogin", async({page})=>{

//    const navigationTiming = await page.evaluate(() => {
//     return performance.getEntriesByType('navigation');
//            });

//         console.log(navigationTiming);
     
    const starttime = performance.now()

    const Loginpage =new sauceloginpage(page)
    await Loginpage.launchurl(url)
    await Loginpage.sauceloginbtn()
    await Loginpage.saucelogintoapp(email,password)  

    await expect(page).toHaveURL("https://sauce-demo.myshopify.com/")

    const endtime = performance.now()
    console.log(`login flow ${endtime -starttime} ms`)
})    

test("sauce invalid login", async({page})=>{
    const starttim = Date.now()

    const Loginpage =new sauceloginpage(page)

//  page.on('console', msg => {
//         console.log('Browser:', msg.type(), msg.text());
//     });

    await Loginpage.launchurl(url)
    await Loginpage.sauceloginbtn()
    await Loginpage.saucelogintoapp(email,invalidpassword)  
    //await expect(Loginpage.errormsg).toContainText("Incorrect email or password.")

    const endtim = Date.now()
    console.log(`invalid flow ${endtim - starttim} ms`)
    
})