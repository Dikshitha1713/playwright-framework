import type { Locator, Page } from "@playwright/test";

export class saucesignuppage{

    page :Page
    signup : Locator
    firstname : Locator
    lastname :Locator
    email : Locator
    password : Locator
    create : Locator
    myaccount : Locator

    constructor(page:Page){
        this.page = page
        //this.signup = this.page.getByText("Sign up", {exact:true})
        this.signup = this.page.locator("#customer_register_link").first()
        this.firstname = this.page.locator('[name="customer[first_name]"]')
        this.lastname = this.page.locator("#last_name").last()
        this.email = this.page.locator('[name="customer[email]"]')
        this.password = this.page.locator('[name="customer[password]"]')
        //this.create = this.page.locator(".action_bottom")
        this.create = this.page.locator('[value="Create"]')
        //this.myaccount = this.page.getByText("My Account",{exact:true})
        this.myaccount = this.page.locator("div .desktop  a").nth(3)
    }

    async lanchurl(url:string){
        await this.page.goto(url)
    }

    async signupbtn(){
        await this.signup.click()
    }
    
    async signupintoapp(firstname:string, lastname:string,email:string,password:string){
        await this.firstname.fill(firstname)
        await this.lastname.fill(lastname)
        await this.email.fill(email)
        await this.password.fill(password)
        await this.create.click()
    }
   
    

}