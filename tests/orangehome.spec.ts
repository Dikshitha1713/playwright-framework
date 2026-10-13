import{test,expect} from '@playwright/test'
import { orangeloginpage } from '../pages/orangeloginpage.js'
import { orangehomepage } from '../pages/orangehomepage.js'

import data from '../TestData/orangedata.json' with {type: 'json'}

let orgloginpage: orangeloginpage
let orghomepage: orangehomepage

test.beforeEach(async ({page}) =>{
     orgloginpage = new orangeloginpage (page)
     orghomepage  = new orangehomepage (page)

    await orgloginpage.launchurl(data.url)
    await orgloginpage.orglogintoapp(data.loginusername,data.loginpassword)
})


test("homepage validation", async ({page}) =>{
   await orghomepage.tapserachbox(data.searchterm)


   await expect(orghomepage.headingtext).toBeVisible()
   await orghomepage.updatesystemuser(data.filterusername, 
    data.rolename,data.empname,data.employeename,data.statusname)

   //await expect(orghomepage.enabledtext).toHaveText("Enabled")
   //await expect(orghomepage.info).toBeVisible()

   
})