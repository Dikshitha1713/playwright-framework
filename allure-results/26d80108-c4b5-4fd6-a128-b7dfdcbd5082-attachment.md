# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orangehome.spec.ts >> homepage validation
- Location: tests\orangehome.spec.ts:19:1

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "load"

```

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('[name="username"]')
    - waiting for "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

# Test source

```ts
  1  | import type { Locator, Page } from "@playwright/test";
  2  | 
  3  | export class orangeloginpage{
  4  |     page:Page
  5  |     username: Locator
  6  |     password: Locator
  7  |     login: Locator
  8  |     invalidcred : Locator
  9  |     homepagelogo : Locator
  10 | 
  11 |     constructor(page:Page){
  12 |         this.page = page
  13 |         this.username = this.page.locator('[name="username"]')
  14 |         this.password = this.page.locator('[name="password"]')
  15 |         this.login = this.page.getByRole('button',{name:' Login '})
  16 |         this.invalidcred = this.page.locator('[role="alert"]')
  17 |         this.homepagelogo = this.page.getByAltText("client brand banner")
  18 |     }
  19 | 
  20 |     async launchurl(url:string){
  21 |         this.page.goto(url)
  22 |     }
  23 |     async orglogintoapp(loginusername:string,loginpassword:string){
> 24 |         await this.username.fill(loginusername)
     |                             ^ Error: locator.fill: Test ended.
  25 |         await this.password.fill(loginpassword)
  26 |         await this.login.click()
  27 |     }
  28 | }
```