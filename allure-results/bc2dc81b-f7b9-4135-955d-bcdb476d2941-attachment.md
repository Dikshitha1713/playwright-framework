# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cartpagetestExcel.spec.ts >> validate the cartpage for ADIDAS ORIGINAL
- Location: tests\cartpagetestExcel.spec.ts:57:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('div .toast-container')
Expected substring: "Product Added To Cart"
Received string:    ""
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('div .toast-container')
    8 × locator resolved to <div id="toast-container" class="toast-bottom-right toast-container"></div>
      - unexpected value ""

```

```yaml
- navigation:
  - link "Automation Automation Practice":
    - /url: ""
    - heading "Automation" [level=3]
    - paragraph: Automation Practice
  - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator.":
    - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
  - list:
    - listitem:
      - button " HOME"
    - listitem
    - listitem:
      - button " ORDERS"
    - listitem:
      - button " Cart 1"
    - listitem:
      - button "Sign Out"
- paragraph: Home | Search
- heading "Filters" [level=4]
- textbox "search"
- heading "Price Range" [level=6]
- textbox "Min Price"
- textbox "Max Price"
- heading "Categories" [level=6]
- text: 
- checkbox
- text: fashion
- checkbox
- text: electronics
- checkbox
- text: household
- heading "Sub Categories" [level=6]
- text: 
- checkbox
- text: t-shirts
- checkbox
- text: shirts
- checkbox
- text: shoes
- checkbox
- text: mobiles
- checkbox
- text: laptops
- heading "Search For" [level=6]
- text: 
- checkbox
- text: men
- checkbox
- text: women Showing 3 results | User can only see maximum 9 products on a page
- img
- heading "ADIDAS ORIGINAL" [level=5]
- text: $ 11500
- button "View"
- button " Add To Cart"
- img
- heading "ZARA COAT 3" [level=5]
- text: $ 11500
- button "View"
- button " Add To Cart"
- img
- heading "iphone 13 pro" [level=5]
- text: $ 55000
- button "View"
- button " Add To Cart"
- list "Pagination":
  - listitem: « Previous page
  - listitem: You're on page 1
  - listitem: Next page »
- text: Design and Developed By - Kunal Sharma
```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test'
  2  | 
  3  | import { loginpage } from '../pages/loginpage.js'
  4  | import { dashboardpage } from '../pages/dashboardpage.js'
  5  | import { cartpage } from '../pages/cartpage.js'
  6  | import { ExcelUtisls } from '../ultils/ExcelUltisls.js'
  7  | 
  8  | import path from 'path'
  9  | import { fileURLToPath } from "url"
  10 | 
  11 | const __filename = fileURLToPath(import.meta.url)
  12 | const __dirname = path.dirname(__filename)
  13 | 
  14 | 
  15 | const filepath = path.join(__dirname, '../TestData/pwexcel.xlsx')
  16 | const sheetname = "cartpage"
  17 | 
  18 | // let items
  19 | // try{
  20 | //    items = ExcelUtisls.getexceldata(filepath, sheetname)
  21 | // }
  22 | // catch(error){
  23 | //   console.log(error)
  24 | // }
  25 | 
  26 | 
  27 | type CartTestData = {
  28 |   url: string;
  29 |   username: string;
  30 |   password: string;
  31 |   productname: string;
  32 |   ordernumber: string;
  33 |   finalproductprice: string;
  34 |   totalamt: string;
  35 | };
  36 | 
  37 | let items: CartTestData[];
  38 | 
  39 | try {
  40 |   items = ExcelUtisls.getexceldata(filepath, sheetname) as CartTestData[];
  41 | } catch (error) {
  42 |   console.error("Failed to read Excel data:", error);
  43 |   throw error;
  44 | }
  45 | 
  46 | let Loginpage : loginpage
  47 | let Dashboardpage : dashboardpage
  48 | let Cartpage : cartpage
  49 | 
  50 | test.beforeEach(async ({page})=>{
  51 |   Loginpage = new loginpage(page)
  52 |   Dashboardpage = new dashboardpage(page)
  53 |   Cartpage = new cartpage(page)
  54 |   
  55 | })
  56 | for (let testdata of items)
  57 | test(`validate the cartpage for ${testdata.productname}`, async({page})=>{
  58 |    await Loginpage.lanuchurl(testdata.url)
  59 |    await Loginpage.logintoapplication(testdata.username, testdata.password)
  60 | 
  61 |    await Dashboardpage.searchandaddproducttothecart(testdata.productname)
  62 | 
> 63 |    await expect(Dashboardpage.addtocartsuccessmsg).toContainText("Product Added To Cart")
     |                                                    ^ Error: expect(locator).toContainText(expected) failed
  64 | 
  65 |    await expect(Cartpage.cartcount).toHaveText("1")
  66 |    await Cartpage.clickcartpage()
  67 | 
  68 |    await expect(Cartpage.productname).toHaveText(testdata.productname)
  69 |    await expect(Cartpage.ordernumber).toHaveText(testdata.ordernumber)
  70 |    await expect(Cartpage.finalproductprice).toHaveText(testdata.finalproductprice)
  71 |    await expect(Cartpage.totalamt).toContainText(testdata.totalamt)
  72 |    
  73 |    await Cartpage.submitcheckout()
  74 | })
```