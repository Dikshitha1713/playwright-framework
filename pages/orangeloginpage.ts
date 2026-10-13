import type { Locator, Page } from "@playwright/test";

export class orangeloginpage{
    page:Page
    username: Locator
    password: Locator
    login: Locator
    invalidcred : Locator
    homepagelogo : Locator

    constructor(page:Page){
        this.page = page
        this.username = this.page.locator('[name="username"]')
        this.password = this.page.locator('[name="password"]')
        this.login = this.page.getByRole('button',{name:' Login '})
        this.invalidcred = this.page.locator('[role="alert"]')
        this.homepagelogo = this.page.getByAltText("client brand banner")
    }

    async launchurl(url:string){
        this.page.goto(url)
    }
    async orglogintoapp(loginusername:string,loginpassword:string){
        await this.username.fill(loginusername)
        await this.password.fill(loginpassword)
        await this.login.click()
    }
}