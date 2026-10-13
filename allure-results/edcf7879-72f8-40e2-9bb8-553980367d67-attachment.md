# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sauceloginpage.spec.ts >> saucelogin validation
- Location: tests\sauceloginpage.spec.ts:14:1

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('[name="customer[first_name]"]')

```

# Test source

```ts
  1  | import type { Locator, Page } from "@playwright/test";
  2  | 
  3  | export class sauceloginpage{
  4  | 
  5  |     page :Page
  6  |     signup : Locator
  7  |     firstname : Locator
  8  |     lastname :Locator
  9  |     email : Locator
  10 |     password : Locator
  11 |     create : Locator
  12 |     myaccount : Locator
  13 | 
  14 |     constructor(page:Page){
  15 |         this.page = page
  16 |         this.signup = this.page.getByText("Sign up", {exact:true})
  17 |         this.firstname = this.page.locator('[name="customer[first_name]"]')
  18 |         this.lastname = this.page.locator("#last_name").last()
  19 |         this.email = this.page.getByLabel("Email Address")
  20 |         this.password = this.page.getByLabel("Password")
  21 |         this.create = this.page.locator('[value="Create"]')
  22 |         this.myaccount = this.page.getByText("My Account",{exact:true})
  23 |     }
  24 | 
  25 |     async lanchurl(url:string){
  26 |         await this.page.goto(url)
  27 |     }
  28 | 
  29 |     async signupbtn(){
  30 |         await this.signup.click()
  31 |     }
  32 |     
  33 |     async signupintoapp(firstname:string, lastname:string,email:string,password:string){
> 34 |         await this.firstname.fill(firstname)
     |                              ^ Error: locator.fill: Test ended.
  35 |         await this.lastname.fill(lastname)
  36 |         await this.email.fill(email)
  37 |         await this.password.fill(password)
  38 |         await this.create.click()
  39 |     }
  40 |    
  41 |     
  42 | 
  43 | }
```