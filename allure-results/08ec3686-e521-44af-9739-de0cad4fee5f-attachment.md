# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: saucelogin.spec.ts >> saucelogin
- Location: tests\saucelogin.spec.ts:9:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://sauce-demo.myshopify.com/"
Received: "https://sauce-demo.myshopify.com/account/login"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://sauce-demo.myshopify.com/account/login"

```

```yaml
- banner:
  - search:
    - button "Submit"
    - textbox "Search"
  - navigation:
    - link "Search":
      - /url: /search
    - link "About Us":
      - /url: /pages/about-us
    - link "Log In":
      - /url: /account/login
    - link "Sign up":
      - /url: /account/register
  - link "My Cart (0)":
    - /url: "#"
  - link "Check Out":
    - /url: /cart
  - heading "Sauce Demo" [level=1]:
    - link "Sauce Demo":
      - /url: /
      - img "Sauce Demo"
  - heading "Just a demo site showing off what Sauce can do." [level=3]
- navigation:
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "Catalog":
        - /url: /collections/all
    - listitem:
      - link "Blog":
        - /url: /blogs/news
    - listitem:
      - link "About Us":
        - /url: /pages/about-us
    - listitem:
      - link "Wish list":
        - /url: "#sauce-show-wish-list"
    - listitem:
      - link "Refer a friend":
        - /url: "#sauce-show-refer-friend"
  - link:
    - /url: http://www.facebook.com/shopify
  - link:
    - /url: http://www.twitter.com/sauce_io
  - link:
    - /url: http://www.instagram.com/shopify
  - link:
    - /url: http://www.pinterest.com/chrisjhoughton/awesome-facebook-integration/
  - link:
    - /url: /blogs/news.atom
- link "Home":
  - /url: /
- text: —
- link "Login":
  - /url: /account/login
- heading "Customer Login" [level=1]
- text: Email Address
- textbox "Email Address": dikshitha1713@gmail.com
- text: Password
- textbox "Password": sauce123
- paragraph:
  - link "Forgot your password?":
    - /url: "#"
- button "Sign In"
- contentinfo:
  - navigation:
    - heading "Footer" [level=2]
    - link "Search":
      - /url: /search
    - link "About Us":
      - /url: /pages/about-us
  - heading "About Us" [level=2]
  - paragraph:
    - strong:
      - text: This is a demo site created for
      - link "Sauce":
        - /url: http://sauceapp.io
    - text: ", an awesome new way to make your Shopify site social. Sauce allows you to let customers to share what they purchase to their friends, and see what their friends have purchased or \"wanted\" on your store."
  - img "We accept Amex"
  - img "We accept Visa"
  - img "We accept Mastercard"
  - text: Copyright © 2026 Sauce Demo.
  - link "Shopping Cart by Shopify":
    - /url: https://www.shopify.co.uk/tour/shopping-cart?utm_campaign=poweredby&utm_medium=shopify&utm_source=onlinestore
  - text: .
  - navigation:
    - link "Search":
      - /url: /search
    - link "About Us":
      - /url: /pages/about-us
- img "Protected by hCaptcha"
- text: Protected by hCaptcha
- list:
  - listitem:
    - link "Privacy":
      - /url: https://hcaptcha.com/privacy
  - listitem:
    - text: ·
    - link "Terms":
      - /url: https://hcaptcha.com/terms
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import { sauceloginpage } from '../pages/sauceloginpage.js'
  3  | 
  4  | const url = "https://sauce-demo.myshopify.com/"
  5  | const email = "dikshitha1713@gmail.com"
  6  | const password = "sauce123"
  7  | const invalidpassword = "sauce"
  8  | 
  9  | test("saucelogin", async({page})=>{
  10 | 
  11 | //    const navigationTiming = await page.evaluate(() => {
  12 | //     return performance.getEntriesByType('navigation');
  13 | //            });
  14 | 
  15 | //         console.log(navigationTiming);
  16 |      
  17 |     const starttime = performance.now()
  18 | 
  19 |     const Loginpage =new sauceloginpage(page)
  20 |     await Loginpage.launchurl(url)
  21 |     await Loginpage.sauceloginbtn()
  22 |     await Loginpage.saucelogintoapp(email,password)  
  23 | 
> 24 |     await expect(page).toHaveURL("https://sauce-demo.myshopify.com/")
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  25 | 
  26 |     const endtime = performance.now()
  27 |     console.log(`login flow ${endtime -starttime} ms`)
  28 | })    
  29 | 
  30 | test("sauce invalid login", async({page})=>{
  31 |     const starttim = Date.now()
  32 | 
  33 |     const Loginpage =new sauceloginpage(page)
  34 | 
  35 | //  page.on('console', msg => {
  36 | //         console.log('Browser:', msg.type(), msg.text());
  37 | //     });
  38 | 
  39 |     await Loginpage.launchurl(url)
  40 |     await Loginpage.sauceloginbtn()
  41 |     await Loginpage.saucelogintoapp(email,invalidpassword)  
  42 |     //await expect(Loginpage.errormsg).toContainText("Incorrect email or password.")
  43 | 
  44 |     const endtim = Date.now()
  45 |     console.log(`invalid flow ${endtim - starttim} ms`)
  46 |     
  47 | })
```