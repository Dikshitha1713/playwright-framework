import type { Locator, Page } from "@playwright/test";

export class orangehomepage{
    page:Page
    searchbox : Locator
    adminoption : Locator
    headingtext : Locator
    usermanagementdd :Locator
    username :Locator
    userroleselect : Locator
    userroleoption :Locator
    chooseadminoption :Locator
    empname :Locator
    empoptions:Locator
    status : Locator
    statusoption : Locator
    enabledtext : Locator
    searchuserbtn : Locator
    info: Locator
    resetbtn: Locator
    addbtn: Locator

    constructor(page:Page){
        this.page = page
        this.searchbox = this.page.locator('[placeholder="Search"]')
        this.adminoption = this.page.locator('[class="oxd-main-menu"]')
        this.headingtext = this.page.getByRole('heading',{name:"Admin"})
        this.usermanagementdd = this.page.getByText("User Management ",{exact:true}).last()
        this.username = this.page.locator("form input.oxd-input")
        this.userroleselect = this.page.locator('div[class="oxd-select-wrapper"]').first()
        this.userroleoption = this.page.locator('[role="listbox"] [role="option"]')
        this.chooseadminoption = this.page.locator('div[role="option"]').nth(1)
        this.empname = this.page.getByPlaceholder("Type for hints...")
        this.empoptions = this.page.locator('[role="listbox"] [role="option"]')
        this.status = this.page.locator('div[class="oxd-select-wrapper"]').last()
        this.statusoption = this.page.locator('[role="listbox"] [role="option"]').nth(1)
        this.enabledtext = this.page.locator("div.oxd-select-text").last()
        this.searchuserbtn = this.page.locator('button[type="submit"]')
        this.info = this.page.locator('[id="oxd-toaster_1"]')
        this.resetbtn = this.page.locator(".oxd-button--ghost")
        this.addbtn = this.page.locator(".oxd-button--secondary").last()

    }

    async tapserachbox(searchterm:string){
        await this.searchbox.fill(searchterm)
        await this.adminoption.click()  
    }
    async updatesystemuser(filterusername:string, rolename:string,empname:string,empolyeename:string, statusname:string)
    {
        await this.username.fill(filterusername)

        await this.userroleselect.click()
        await this.userroleoption.last().waitFor()
        const roleoptioncount = await this.userroleoption.count()

        for(let i=0; i<roleoptioncount; i++)
        {
            const roleoptiontext= (await this.userroleoption.nth(i).innerText()).trim()
            if(roleoptiontext === rolename)
            {
                await this.userroleoption.nth(i).click()
                break
            }
        }
      
       await this.empname.fill(empname)
       await this.empoptions.last().waitFor()
       const empoptionscount = await this.empoptions.count()
       
       for(let i=0; i<empoptionscount; i++)
       {
        const empoptiontext = (await (this.empoptions.nth(i).innerText())).trim()
        if(empoptiontext === empolyeename)
        {
           await this.empoptions.nth(i).click()
        }
       }

       await this.status.click()
       await this.statusoption.last().waitFor()
      const stattusoptioncount =  await this.statusoption.count()

      for(let i=0; i<stattusoptioncount; i++){
        const statusoptiontext = (await this.statusoption.nth(i).innerText()).trim()
        if(statusoptiontext === statusname)
            await this.statusoption.nth(i).click()
        break
      } 
      await this.searchuserbtn.click()
      console.log("Search button clicked successfully")

      await this.resetbtn.click()
      await this.addbtn.click()
        
    }
}