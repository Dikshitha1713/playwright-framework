import type { Locator, Page } from "@playwright/test";

export class sauceloginpage{
    page:Page
    login : Locator
    email : Locator
    password : Locator
    signin : Locator
    errormsg : Locator

    constructor(page:Page){
    this.page = page
    this.login = this.page.locator("#customer_login_link").first()
    this.email = this.page.locator("#customer_email")
    this.password = this.page.locator("#customer_password")
    this.signin = this.page.locator('[value="Sign In"]')
    //this.errormsg = this.page.getByText("Incorrect email or password.", {exact: true})
    this.errormsg = this.page.locator("div[class='errors'] ul li")
    //this.errormsg = this.page.locator(".errors")
    }

   async launchurl(url:string){
    await this.page.goto(url)
   }
    
    async sauceloginbtn(){
        await this.login.click()
    }

    async saucelogintoapp(email:string,password:string){
         await this.email.fill(email)
         await this.password.fill(password)
         await this.signin.click()
    }

     async sauceinvalidlogintoapp(email:string,password:string){
         await this.email.fill(email)
         await this.password.fill(password)
         await this.signin.click()
    }

}