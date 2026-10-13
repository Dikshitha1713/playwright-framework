# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: rahulsheety.spec.ts >> login validation
- Location: testing\rahulsheety.spec.ts:24:1

# Error details

```
Test timeout of 300000ms exceeded.
```

```
Error: locator.click: Test timeout of 300000ms exceeded.
Call log:
  - waiting for locator('[routerlink="/dashboard/myorders"]')
    - locator resolved to <button tabindex="0" _ngcontent-xas-c38="" class="btn btn-custom" routerlink="/dashboard/myorders">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="payment" _ngcontent-xas-c40="">…</div> from <section class="content" _ngcontent-xas-c40="">…</section> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="payment" _ngcontent-xas-c40="">…</div> from <section class="content" _ngcontent-xas-c40="">…</section> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    731 × waiting for element to be visible, enabled and stable
        - element is visible, enabled and stable
        - scrolling into view if needed
        - done scrolling
        - <div class="payment" _ngcontent-xas-c40="">…</div> from <section class="content" _ngcontent-xas-c40="">…</section> subtree intercepts pointer events
      - retrying click action
        - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e11] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - generic [ref=e28]:
    - generic [ref=e32]:
      - generic [ref=e33]: ZARA COAT 3
      - generic [ref=e34]: $ 11500
      - generic [ref=e35]: "Quantity: 1"
      - list [ref=e37]:
        - listitem [ref=e38]: Apple phone
    - generic [ref=e41]:
      - generic [ref=e42]: Payment Method
      - generic [ref=e43]:
        - generic [ref=e44] [cursor=pointer]: Credit Card
        - generic [ref=e45] [cursor=pointer]: Paypal
        - generic [ref=e46] [cursor=pointer]: SEPA
        - generic [ref=e47] [cursor=pointer]: Invoice
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Personal Information
          - generic [ref=e52]:
            - generic [ref=e54]:
              - generic [ref=e55]: Credit Card Number
              - textbox [ref=e56]: 4542 9931 9292 2293
            - generic [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]: Expiry Date
                - combobox [ref=e60]:
                  - option "01" [selected]
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                - combobox [ref=e61]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                  - option "13"
                  - option "14"
                  - option "15"
                  - option "16" [selected]
                  - option "17"
                  - option "18"
                  - option "19"
                  - option "20"
                  - option "21"
                  - option "22"
                  - option "23"
                  - option "24"
                  - option "25"
                  - option "26"
                  - option "27"
                  - option "28"
                  - option "29"
                  - option "30"
                  - option "31"
              - generic [ref=e62]:
                - generic [ref=e63]: CVV Code ?
                - textbox [ref=e64]: "12345"
            - generic [ref=e66]:
              - generic [ref=e67]: Name on Card
              - textbox [ref=e68]
            - generic [ref=e69]:
              - generic [ref=e70]:
                - generic [ref=e71]: Apply Coupon
                - textbox [ref=e72]
              - button "Apply Coupon" [ref=e75] [cursor=pointer]
        - generic [ref=e76]:
          - generic [ref=e77]: Shipping Information
          - generic [ref=e79]:
            - generic [ref=e80]: dikshitha1713@gmail.com
            - textbox [ref=e81]: dikshitha1713@gmail.com
            - textbox "Select Country" [ref=e84]: india
            - generic [ref=e85]: Place Order
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | 
  3  | test("website test", async({page})=>{
  4  |    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
  5  |     await page.getByText("Register", {exact:true}).click()
  6  |     await page.getByPlaceholder("First Name").last().fill("Dikshitha")
  7  |     await page.getByPlaceholder("Last Name").last().fill("Nagaraj")
  8  |     await page.getByPlaceholder("email@example.com").last().fill("dikshitha1713@gmail.com")
  9  |     await page.getByPlaceholder("enter your number").fill("8495993483")
  10 |     //await page.locator('[formcontrolname="occupation"]').click()
  11 |     await page.locator('[formcontrolname="occupation"]').selectOption({label:"Engineer"})
  12 |     await page.getByRole('button', {name:"radio"}).last()
  13 |     await page.locator("#userPassword").fill("testing@123")
  14 |     await page.locator("#confirmPassword").fill("testing@123")
  15 |     //await page.getByRole("checkbox", {name:"checkbox"}).check()
  16 |     await page.locator('[formcontrolname="required"]').check()
  17 |     await page.locator('[value="Register"]').click()
  18 |     // await expect(page.getByText("Account Created Successfully")).toContainText("Account Created Successfully");
  19 |     // await page.locator('[class="btn btn-primary"]').click()
  20 |     // await expect(page.getByRole("heading", { name: "Log in" }))
  21 |     // .toHaveText("Log in");
  22 | })
  23 | 
  24 | test("login validation", async function({page}){
  25 |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
  26 |     await page.getByPlaceholder("email@example.com").fill("dikshitha1713@gmail.com")
  27 |     await page.getByPlaceholder("enter your passsword").fill("Testing@123")
  28 |     await page.locator("[type='submit']").click()
  29 |     await expect(page.locator('[routerlink="/dashboard/myorders"]')).toBeVisible()
  30 |     await page.locator('[class="fa fa-eye"] ').nth(1).click()
  31 |     await page.getByText("Add to Cart", {exact:true}).click()
  32 |     await page.locator('[routerlink="/dashboard/cart"]').click()
  33 |     await expect(page.locator('[class="itemNumber"]')).toContainText("#6960eac0c941646b7a8b3e68")
  34 |     await page.getByText("Buy Now", {exact:true}).click()
  35 |     await page.locator('[class="input txt"]').first().fill("12345")
  36 |     await page.getByPlaceholder("Select Country").fill("india")
  37 |     //await page.getByPlaceholder("Select Country").click()
  38 |     //await page.locator(".ta-results button span i ").last().click()
  39 |     //const country = page.locator(".ta-results button").filter({ hasText: "India"});
  40 |     //await country.click();
  41 |     await page.locator('[class="btnn action__submit ng-star-inserted"]').click()
  42 |     //await page.getByText("Place Order ", {exact:true}).click()
> 43 |     await page.locator('[routerlink="/dashboard/myorders"]').click()
     |                                                              ^ Error: locator.click: Test timeout of 300000ms exceeded.
  44 |     await page.getByRole('button', {name:'Delete'}).nth(2).click()
  45 |     await page.getByRole('button',{name:'Go Back to Shop'}).click()
  46 | })
```