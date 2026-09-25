import type { Locator, Page } from "@playwright/test";

export class loginpage{
    page :Page
    username :Locator
    password :Locator
    loginbtn :Locator
    homepageidentifer :Locator
    errormsg : Locator
    emailrequired : Locator
    passwordrequired : Locator

    constructor(page :Page){
        this.page = page
        this.username= this.page.getByPlaceholder("email@example.com")
        this.password = this.page.getByPlaceholder("enter your passsword")
        this.loginbtn = this.page.locator(".btn.btn-block.login-btn")
        this.homepageidentifer = this.page.locator('[routerlink="/dashboard/"]')
        this.errormsg = this.page.getByLabel("Incorrect email or password.")
        this.emailrequired = this.page.locator(".invalid-feedback").first()
        this.passwordrequired =this.page.locator(".invalid-feedback").last()

    }

    async lanuchurl(url:string){
        await this.page.goto(url)
    }

    async logintoapplication(username:string, password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginbtn.click()
    }

    async invalidlogin(username:string, password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginbtn.click()
    }

    async incorrectusername(username:string, password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginbtn.click()
    }
    async incorrectpassword(username:string, password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginbtn.click()
    }
}