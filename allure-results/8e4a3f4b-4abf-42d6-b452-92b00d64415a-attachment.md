# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sauceloginpage.spec.ts >> saucelogin validation
- Location: tests\sauceloginpage.spec.ts:14:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('My Account', { exact: true })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('My Account', { exact: true })

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
- link "Register":
  - /url: "#"
- heading "Create Account" [level=1]
- text: First Name
- textbox: dikshitha
- text: Last Name
- textbox: puneeth
- text: Email Address
- textbox: dikshitha1713@gmail.com
- text: Password
- textbox: sauce123
- button "Create"
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
  1  | import {test, expect} from '@playwright/test'
  2  | import { sauceloginpage } from '../pages/sauceloginpage.js'
  3  | 
  4  | const url = "https://sauce-demo.myshopify.com/"
  5  | const firstname = "dikshitha"
  6  | const lastname = "puneeth"
  7  | const email = "dikshitha1713@gmail.com"
  8  | const password = "sauce123"
  9  | 
  10 | 
  11 | let Saucelogin :sauceloginpage
  12 | 
  13 | 
  14 | test("saucelogin validation" , async ({page})=>{
  15 |     Saucelogin =new sauceloginpage(page)
  16 |     await Saucelogin.lanchurl(url)
  17 |     await Saucelogin.signupbtn()
  18 |     await Saucelogin.signupintoapp(firstname,lastname,email,password)
> 19 |     await expect (Saucelogin.myaccount).toBeVisible()
     |                                         ^ Error: expect(locator).toBeVisible() failed
  20 |   
  21 | })
```