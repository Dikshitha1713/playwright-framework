import{test,expect} from '@playwright/test'
import { orangeloginpage } from '../pages/orangeloginpage.js'

import data from '../TestData/orangedata.json' with {type :'json'}

test("verfiy orglogin page", async ({page})=>{
    const orgloginpage = new orangeloginpage (page)
    await orgloginpage.launchurl(data.url)

    await orgloginpage.orglogintoapp(data.loginusername,data.loginpassword)
    await expect(orgloginpage.homepagelogo).toBeVisible()
 
})