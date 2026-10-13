# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orangehome.spec.ts >> homepage validation
- Location: tests\orangehome.spec.ts:19:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('div.oxd-select-text').last()
Expected: "Enabled"
Received: "-- Select --"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('div.oxd-select-text').last()
    13 × locator resolved to <div data-v-67d2aedf="" data-v-13cf171c="" class="oxd-select-text oxd-select-text--active">…</div>
       - unexpected value "-- Select --"

```

```yaml
- text: "-- Select -- "
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import { orangeloginpage } from '../pages/orangeloginpage.js'
  3  | import { orangehomepage } from '../pages/orangehomepage.js'
  4  | 
  5  | import data from '../TestData/orangedata.json' with {type: 'json'}
  6  | 
  7  | let orgloginpage: orangeloginpage
  8  | let orghomepage: orangehomepage
  9  | 
  10 | test.beforeEach(async ({page}) =>{
  11 |      orgloginpage = new orangeloginpage (page)
  12 |      orghomepage  = new orangehomepage (page)
  13 | 
  14 |     await orgloginpage.launchurl(data.url)
  15 |     await orgloginpage.orglogintoapp(data.loginusername,data.loginpassword)
  16 | })
  17 | 
  18 | 
  19 | test("homepage validation", async ({page}) =>{
  20 |    await orghomepage.tapserachbox(data.searchterm)
  21 | 
  22 | 
  23 |    await expect(orghomepage.headingtext).toBeVisible()
  24 |    await orghomepage.updatesystemuser(data.filterusername, 
  25 |     data.rolename,data.empname,data.employeename,data.statusname)
  26 | 
> 27 |    await expect(orghomepage.enabledtext).toHaveText("Enabled")
     |                                          ^ Error: expect(locator).toHaveText(expected) failed
  28 |    //await expect(orghomepage.info).toBeVisible()
  29 | 
  30 |    
  31 | })
```