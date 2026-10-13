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

Locator: locator('[role="option"]').nth(1)
Expected: "Enabled"
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('[role="option"]').nth(1)
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Admin" [level=6]
  - heading "/ User Management" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Bilol Doe
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: User Management 
      - listitem: Job 
      - listitem: Organization 
      - listitem: Qualifications 
      - listitem:
        - link "Nationalities":
          - /url: "#"
      - listitem:
        - link "Corporate Branding":
          - /url: "#"
      - listitem: Configuration 
      - button ""
- heading "System Users" [level=5]
- button ""
- separator
- text: Username
- textbox: diksha
- text: User Role Admin  Employee Name
- textbox "Type for hints...": Some
- text: Invalid Status Enabled 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (23) Records Found
- table:
  - rowgroup:
    - row " Username  User Role  Employee Name  Status  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Username "
      - columnheader "User Role "
      - columnheader "Employee Name "
      - columnheader "Status "
      - columnheader "Actions"
  - rowgroup:
    - row " ' OR '1'='1 ESS QaEval Sq115515 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "' OR '1'='1"
      - cell "ESS"
      - cell "QaEval Sq115515"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " abcd_20261009132938742 Admin Orange Test Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "abcd_20261009132938742"
      - cell "Admin"
      - cell "Orange Test"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " abcd_CWacAXJW Admin Orange Test Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "abcd_CWacAXJW"
      - cell "Admin"
      - cell "Orange Test"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " abcd_DGbGQUST Admin Orange Test Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "abcd_DGbGQUST"
      - cell "Admin"
      - cell "Orange Test"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " abc_BBIZKNFJ Admin Orange Test Disabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "abc_BBIZKNFJ"
      - cell "Admin"
      - cell "Orange Test"
      - cell "Disabled"
      - cell " ":
        - button ""
        - button ""
    - row " abc_CHVaHXNI Admin Orange Test Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "abc_CHVaHXNI"
      - cell "Admin"
      - cell "Orange Test"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " abc_DQOELEWF Admin Orange Test Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "abc_DQOELEWF"
      - cell "Admin"
      - cell "Orange Test"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " abc_GNNVPBEF Admin Orange Test Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "abc_GNNVPBEF"
      - cell "Admin"
      - cell "Orange Test"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " abc_GTQLIAdI Admin Orange Test Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "abc_GTQLIAdI"
      - cell "Admin"
      - cell "Orange Test"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " abc_HECSFMfY Admin Orange Test Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "abc_HECSFMfY"
      - cell "Admin"
      - cell "Orange Test"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " abc_KYACMKHV Admin Orange Test Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "abc_KYACMKHV"
      - cell "Admin"
      - cell "Orange Test"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Admin Admin Bilol Doe Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "Bilol Doe"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " autoUser_CdPEVCVa Admin Orange Test Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "autoUser_CdPEVCVa"
      - cell "Admin"
      - cell "Orange Test"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " basacarahbha Admin bala ravi Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "basacarahbha"
      - cell "Admin"
      - cell "bala ravi"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Demo12 Admin AutoTest AgentRun7391 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Demo12"
      - cell "Admin"
      - cell "AutoTest AgentRun7391"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " FMLName ESS Qwerty LName Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "FMLName"
      - cell "ESS"
      - cell "Qwerty LName"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " FMLName1 ESS FName LName Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "FMLName1"
      - cell "ESS"
      - cell "FName LName"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Jobinsam@6742 ESS Jobin Sam Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Jobinsam@6742"
      - cell "ESS"
      - cell "Jobin Sam"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " JohnKing0442 ESS Daniel Wilson Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "JohnKing0442"
      - cell "ESS"
      - cell "Daniel Wilson"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " K8mX2vQ9nL4pT7rY1cD6wH3jF5sU8eB_CBEJUSZV Admin Orange Test Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "K8mX2vQ9nL4pT7rY1cD6wH3jF5sU8eB_CBEJUSZV"
      - cell "Admin"
      - cell "Orange Test"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " qadis113530 ESS QaEval T113530 Disabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "qadis113530"
      - cell "ESS"
      - cell "QaEval T113530"
      - cell "Disabled"
      - cell " ":
        - button ""
        - button ""
    - row " qaeval113224 ESS QaEval Log113224 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "qaeval113224"
      - cell "ESS"
      - cell "QaEval Log113224"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " user2586621 ESS TimeF25866 TimeL25866 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "user2586621"
      - cell "ESS"
      - cell "TimeF25866 TimeL25866"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
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
> 27 |    expect(orghomepage.enabled).toHaveText("Enabled")
     |                                ^ Error: expect(locator).toHaveText(expected) failed
  28 | 
  29 |    
  30 | })
```