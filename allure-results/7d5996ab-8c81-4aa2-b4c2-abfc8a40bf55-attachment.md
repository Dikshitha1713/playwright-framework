# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orangehome.spec.ts >> homepage validation
- Location: tests\orangehome.spec.ts:19:1

# Error details

```
Error: locator.click: Error: strict mode violation: locator('.oxd-button--secondary') resolved to 2 elements:
    1) <button type="submit" data-v-10d463b7="" class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space">…</button> aka getByRole('button', { name: 'Search' })
    2) <button type="button" data-v-10d463b7="" class="oxd-button oxd-button--medium oxd-button--secondary">…</button> aka getByRole('button', { name: ' Add' })

Call log:
  - waiting for locator('.oxd-button--secondary')

```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - generic:
    - complementary [ref=f2e4]:
      - navigation "Sidepanel" [ref=f2e5]:
        - generic [ref=f2e6]:
          - link [ref=f2e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f2e9]
          - text: 
        - generic [ref=f2e10]:
          - generic [ref=f2e11]:
            - generic [ref=f2e12]:
              - textbox "Search" [ref=f2e15]
              - button "" [ref=f2e16] [cursor=pointer]
            - separator [ref=f2e18]
          - list [ref=f2e19]:
            - listitem [ref=f2e20]:
              - link "Admin" [ref=f2e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f2e25]:
              - link "PIM" [ref=f2e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f2e41]:
              - link "Leave" [ref=f2e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f2e46]:
              - link "Time" [ref=f2e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f2e54]:
              - link "Recruitment" [ref=f2e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f2e62]:
              - link "My Info" [ref=f2e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f2e70]:
              - link "Performance" [ref=f2e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f2e80]:
              - link "Dashboard" [ref=f2e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f2e85]:
              - link "Directory" [ref=f2e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f2e90]:
              - link "Maintenance" [ref=f2e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f2e96]:
              - link "Claim" [ref=f2e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f2e105]:
              - link "Buzz" [ref=f2e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f2e110]:
      - generic [ref=f2e111]:
        - generic [ref=f2e112]:
          - text: 
          - generic [ref=f2e113]:
            - heading "Admin" [level=6] [ref=f2e114]
            - heading "/ User Management" [level=6] [ref=f2e115]
        - link [ref=f2e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e118] [cursor=pointer]
        - list [ref=f2e124]:
          - listitem [ref=f2e125]:
            - generic [ref=f2e126] [cursor=pointer]:
              - img "profile picture" [ref=f2e127]
              - paragraph [ref=f2e128]: SavedFirst JEJEJE
              - generic [ref=f2e129]: 
      - navigation "Topbar Menu" [ref=f2e131]:
        - list [ref=f2e132]:
          - listitem [ref=f2e133] [cursor=pointer]:
            - generic [ref=f2e134]:
              - text: User Management
              - generic [ref=f2e135]: 
          - listitem [ref=f2e136] [cursor=pointer]:
            - generic [ref=f2e137]:
              - text: Job
              - generic [ref=f2e138]: 
          - listitem [ref=f2e139] [cursor=pointer]:
            - generic [ref=f2e140]:
              - text: Organization
              - generic [ref=f2e141]: 
          - listitem [ref=f2e142] [cursor=pointer]:
            - generic [ref=f2e143]:
              - text: Qualifications
              - generic [ref=f2e144]: 
          - listitem [ref=f2e145] [cursor=pointer]:
            - link "Nationalities" [ref=f2e146]:
              - /url: "#"
          - listitem [ref=f2e147] [cursor=pointer]:
            - link "Corporate Branding" [ref=f2e148]:
              - /url: "#"
          - listitem [ref=f2e149] [cursor=pointer]:
            - generic [ref=f2e150]:
              - text: Configuration
              - generic [ref=f2e151]: 
          - button "" [ref=f2e153] [cursor=pointer]
  - generic [ref=f2e155]:
    - generic [ref=f2e157]:
      - generic [ref=f2e158]:
        - generic [ref=f2e159]:
          - heading "System Users" [level=5] [ref=f2e161]
          - button "" [ref=f2e164] [cursor=pointer]
        - separator [ref=f2e166]
        - generic [ref=f2e168]:
          - generic [ref=f2e170]:
            - generic [ref=f2e172]:
              - generic [ref=f2e173]: Username
              - textbox [ref=f2e176]
            - generic [ref=f2e178]:
              - generic [ref=f2e179]: User Role
              - generic [ref=f2e183] [cursor=pointer]:
                - generic [ref=f2e184]: "-- Select --"
                - generic [ref=f2e185]: 
            - generic [ref=f2e188]:
              - generic [ref=f2e189]: Employee Name
              - textbox "Type for hints..." [ref=f2e194]
            - generic [ref=f2e196]:
              - generic [ref=f2e197]: Status
              - generic [ref=f2e201] [cursor=pointer]:
                - generic [ref=f2e202]: "-- Select --"
                - generic [ref=f2e203]: 
          - separator [ref=f2e205]
          - generic [ref=f2e206]:
            - button "Reset" [active] [ref=f2e207] [cursor=pointer]
            - button "Search" [ref=f2e208] [cursor=pointer]
      - generic [ref=f2e209]:
        - button " Add" [ref=f2e211] [cursor=pointer]:
          - generic [ref=f2e212]: 
          - text: Add
        - generic [ref=f2e213]:
          - separator [ref=f2e214]
          - generic [ref=f2e215]: (71) Records Found
        - table [ref=f2e218]:
          - rowgroup [ref=f2e219]:
            - row [ref=f2e220]:
              - columnheader "" [ref=f2e221]:
                - generic [ref=f2e223] [cursor=pointer]:
                  - checkbox "" [ref=f2e224]
                  - generic [ref=f2e225]: 
              - columnheader "Username " [ref=f2e227]:
                - text: Username
                - generic [ref=f2e228]:
                  - generic [ref=f2e229] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=f2e230]:
                - text: User Role
                - generic [ref=f2e231]:
                  - generic [ref=f2e232] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=f2e233]:
                - text: Employee Name
                - generic [ref=f2e234]:
                  - generic [ref=f2e235] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f2e236]:
                - text: Status
                - generic [ref=f2e237]:
                  - generic [ref=f2e238] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f2e239]
          - rowgroup [ref=f2e240]:
            - row [ref=f2e242]:
              - cell "" [ref=f2e243]:
                - generic [ref=f2e246] [cursor=pointer]:
                  - checkbox "" [ref=f2e247]
                  - generic [ref=f2e248]: 
              - cell "abcd_CWacAXJW" [ref=f2e250]
              - cell "Admin" [ref=f2e252]
              - cell "Orange Test" [ref=f2e254]
              - cell "Enabled" [ref=f2e256]
              - cell [ref=f2e258]:
                - generic [ref=f2e259]:
                  - button "" [ref=f2e260] [cursor=pointer]
                  - button "" [ref=f2e262] [cursor=pointer]
            - row [ref=f2e265]:
              - cell "" [ref=f2e266]:
                - generic [ref=f2e269] [cursor=pointer]:
                  - checkbox "" [ref=f2e270]
                  - generic [ref=f2e271]: 
              - cell "abcd_DGbGQUST" [ref=f2e273]
              - cell "Admin" [ref=f2e275]
              - cell "Orange Test" [ref=f2e277]
              - cell "Enabled" [ref=f2e279]
              - cell [ref=f2e281]:
                - generic [ref=f2e282]:
                  - button "" [ref=f2e283] [cursor=pointer]
                  - button "" [ref=f2e285] [cursor=pointer]
            - row [ref=f2e288]:
              - cell "" [ref=f2e289]:
                - generic [ref=f2e292] [cursor=pointer]:
                  - checkbox "" [ref=f2e293]
                  - generic [ref=f2e294]: 
              - cell "abcd_EJLVVKXI" [ref=f2e296]
              - cell "Admin" [ref=f2e298]
              - cell "Orange Test" [ref=f2e300]
              - cell "Enabled" [ref=f2e302]
              - cell [ref=f2e304]:
                - generic [ref=f2e305]:
                  - button "" [ref=f2e306] [cursor=pointer]
                  - button "" [ref=f2e308] [cursor=pointer]
            - row [ref=f2e311]:
              - cell "" [ref=f2e312]:
                - generic [ref=f2e315] [cursor=pointer]:
                  - checkbox "" [ref=f2e316]
                  - generic [ref=f2e317]: 
              - cell "abcd_FEFYBcIQ" [ref=f2e319]
              - cell "Admin" [ref=f2e321]
              - cell "Orange Test" [ref=f2e323]
              - cell "Enabled" [ref=f2e325]
              - cell [ref=f2e327]:
                - generic [ref=f2e328]:
                  - button "" [ref=f2e329] [cursor=pointer]
                  - button "" [ref=f2e331] [cursor=pointer]
            - row [ref=f2e334]:
              - cell "" [ref=f2e335]:
                - generic [ref=f2e338] [cursor=pointer]:
                  - checkbox "" [ref=f2e339]
                  - generic [ref=f2e340]: 
              - cell "abc_BBIZKNFJ" [ref=f2e342]
              - cell "Admin" [ref=f2e344]
              - cell "Orange Test" [ref=f2e346]
              - cell "Disabled" [ref=f2e348]
              - cell [ref=f2e350]:
                - generic [ref=f2e351]:
                  - button "" [ref=f2e352] [cursor=pointer]
                  - button "" [ref=f2e354] [cursor=pointer]
            - row [ref=f2e357]:
              - cell "" [ref=f2e358]:
                - generic [ref=f2e361] [cursor=pointer]:
                  - checkbox "" [ref=f2e362]
                  - generic [ref=f2e363]: 
              - cell "abc_BOSLeMOX" [ref=f2e365]
              - cell "Admin" [ref=f2e367]
              - cell "Orange Test" [ref=f2e369]
              - cell "Enabled" [ref=f2e371]
              - cell [ref=f2e373]:
                - generic [ref=f2e374]:
                  - button "" [ref=f2e375] [cursor=pointer]
                  - button "" [ref=f2e377] [cursor=pointer]
            - row [ref=f2e380]:
              - cell "" [ref=f2e381]:
                - generic [ref=f2e384] [cursor=pointer]:
                  - checkbox "" [ref=f2e385]
                  - generic [ref=f2e386]: 
              - cell "abc_BXHFXGMN" [ref=f2e388]
              - cell "Admin" [ref=f2e390]
              - cell "Orange Test" [ref=f2e392]
              - cell "Enabled" [ref=f2e394]
              - cell [ref=f2e396]:
                - generic [ref=f2e397]:
                  - button "" [ref=f2e398] [cursor=pointer]
                  - button "" [ref=f2e400] [cursor=pointer]
            - row [ref=f2e403]:
              - cell "" [ref=f2e404]:
                - generic [ref=f2e407] [cursor=pointer]:
                  - checkbox "" [ref=f2e408]
                  - generic [ref=f2e409]: 
              - cell "abc_CHVaHXNI" [ref=f2e411]
              - cell "Admin" [ref=f2e413]
              - cell "Orange Test" [ref=f2e415]
              - cell "Enabled" [ref=f2e417]
              - cell [ref=f2e419]:
                - generic [ref=f2e420]:
                  - button "" [ref=f2e421] [cursor=pointer]
                  - button "" [ref=f2e423] [cursor=pointer]
            - row [ref=f2e426]:
              - cell "" [ref=f2e427]:
                - generic [ref=f2e430] [cursor=pointer]:
                  - checkbox "" [ref=f2e431]
                  - generic [ref=f2e432]: 
              - cell "abc_DdSCcVAL" [ref=f2e434]
              - cell "Admin" [ref=f2e436]
              - cell "Orange Test" [ref=f2e438]
              - cell "Enabled" [ref=f2e440]
              - cell [ref=f2e442]:
                - generic [ref=f2e443]:
                  - button "" [ref=f2e444] [cursor=pointer]
                  - button "" [ref=f2e446] [cursor=pointer]
            - row [ref=f2e449]:
              - cell "" [ref=f2e450]:
                - generic [ref=f2e453] [cursor=pointer]:
                  - checkbox "" [ref=f2e454]
                  - generic [ref=f2e455]: 
              - cell "abc_DQOELEWF" [ref=f2e457]
              - cell "Admin" [ref=f2e459]
              - cell "Orange Test" [ref=f2e461]
              - cell "Enabled" [ref=f2e463]
              - cell [ref=f2e465]:
                - generic [ref=f2e466]:
                  - button "" [ref=f2e467] [cursor=pointer]
                  - button "" [ref=f2e469] [cursor=pointer]
            - row [ref=f2e472]:
              - cell "" [ref=f2e473]:
                - generic [ref=f2e476] [cursor=pointer]:
                  - checkbox "" [ref=f2e477]
                  - generic [ref=f2e478]: 
              - cell "abc_FCPWGZOY" [ref=f2e480]
              - cell "Admin" [ref=f2e482]
              - cell "Orange Test" [ref=f2e484]
              - cell "Enabled" [ref=f2e486]
              - cell [ref=f2e488]:
                - generic [ref=f2e489]:
                  - button "" [ref=f2e490] [cursor=pointer]
                  - button "" [ref=f2e492] [cursor=pointer]
            - row [ref=f2e495]:
              - cell "" [ref=f2e496]:
                - generic [ref=f2e499] [cursor=pointer]:
                  - checkbox "" [ref=f2e500]
                  - generic [ref=f2e501]: 
              - cell "abc_FOLYacaY" [ref=f2e503]
              - cell "Admin" [ref=f2e505]
              - cell "Orange Test" [ref=f2e507]
              - cell "Enabled" [ref=f2e509]
              - cell [ref=f2e511]:
                - generic [ref=f2e512]:
                  - button "" [ref=f2e513] [cursor=pointer]
                  - button "" [ref=f2e515] [cursor=pointer]
            - row [ref=f2e518]:
              - cell "" [ref=f2e519]:
                - generic [ref=f2e522] [cursor=pointer]:
                  - checkbox "" [ref=f2e523]
                  - generic [ref=f2e524]: 
              - cell "abc_GFfBfNBb" [ref=f2e526]
              - cell "Admin" [ref=f2e528]
              - cell "Orange Test" [ref=f2e530]
              - cell "Enabled" [ref=f2e532]
              - cell [ref=f2e534]:
                - generic [ref=f2e535]:
                  - button "" [ref=f2e536] [cursor=pointer]
                  - button "" [ref=f2e538] [cursor=pointer]
            - row [ref=f2e541]:
              - cell "" [ref=f2e542]:
                - generic [ref=f2e545] [cursor=pointer]:
                  - checkbox "" [ref=f2e546]
                  - generic [ref=f2e547]: 
              - cell "abc_GNNVPBEF" [ref=f2e549]
              - cell "Admin" [ref=f2e551]
              - cell "Orange Test" [ref=f2e553]
              - cell "Enabled" [ref=f2e555]
              - cell [ref=f2e557]:
                - generic [ref=f2e558]:
                  - button "" [ref=f2e559] [cursor=pointer]
                  - button "" [ref=f2e561] [cursor=pointer]
            - row [ref=f2e564]:
              - cell "" [ref=f2e565]:
                - generic [ref=f2e568] [cursor=pointer]:
                  - checkbox "" [ref=f2e569]
                  - generic [ref=f2e570]: 
              - cell "abc_GTQLIAdI" [ref=f2e572]
              - cell "Admin" [ref=f2e574]
              - cell "Orange Test" [ref=f2e576]
              - cell "Enabled" [ref=f2e578]
              - cell [ref=f2e580]:
                - generic [ref=f2e581]:
                  - button "" [ref=f2e582] [cursor=pointer]
                  - button "" [ref=f2e584] [cursor=pointer]
            - row [ref=f2e587]:
              - cell "" [ref=f2e588]:
                - generic [ref=f2e591] [cursor=pointer]:
                  - checkbox "" [ref=f2e592]
                  - generic [ref=f2e593]: 
              - cell "abc_HAZJNAKJ" [ref=f2e595]
              - cell "Admin" [ref=f2e597]
              - cell "Orange Test" [ref=f2e599]
              - cell "Enabled" [ref=f2e601]
              - cell [ref=f2e603]:
                - generic [ref=f2e604]:
                  - button "" [ref=f2e605] [cursor=pointer]
                  - button "" [ref=f2e607] [cursor=pointer]
            - row [ref=f2e610]:
              - cell "" [ref=f2e611]:
                - generic [ref=f2e614] [cursor=pointer]:
                  - checkbox "" [ref=f2e615]
                  - generic [ref=f2e616]: 
              - cell "abc_HEbCLSeV" [ref=f2e618]
              - cell "Admin" [ref=f2e620]
              - cell "Orange Test" [ref=f2e622]
              - cell "Disabled" [ref=f2e624]
              - cell [ref=f2e626]:
                - generic [ref=f2e627]:
                  - button "" [ref=f2e628] [cursor=pointer]
                  - button "" [ref=f2e630] [cursor=pointer]
            - row [ref=f2e633]:
              - cell "" [ref=f2e634]:
                - generic [ref=f2e637] [cursor=pointer]:
                  - checkbox "" [ref=f2e638]
                  - generic [ref=f2e639]: 
              - cell "abc_HECSFMfY" [ref=f2e641]
              - cell "Admin" [ref=f2e643]
              - cell "Orange Test" [ref=f2e645]
              - cell "Enabled" [ref=f2e647]
              - cell [ref=f2e649]:
                - generic [ref=f2e650]:
                  - button "" [ref=f2e651] [cursor=pointer]
                  - button "" [ref=f2e653] [cursor=pointer]
            - row [ref=f2e656]:
              - cell "" [ref=f2e657]:
                - generic [ref=f2e660] [cursor=pointer]:
                  - checkbox "" [ref=f2e661]
                  - generic [ref=f2e662]: 
              - cell "abc_HSSLFBBA" [ref=f2e664]
              - cell "Admin" [ref=f2e666]
              - cell "Orange Test" [ref=f2e668]
              - cell "Enabled" [ref=f2e670]
              - cell [ref=f2e672]:
                - generic [ref=f2e673]:
                  - button "" [ref=f2e674] [cursor=pointer]
                  - button "" [ref=f2e676] [cursor=pointer]
            - row [ref=f2e679]:
              - cell "" [ref=f2e680]:
                - generic [ref=f2e683] [cursor=pointer]:
                  - checkbox "" [ref=f2e684]
                  - generic [ref=f2e685]: 
              - cell "abc_KYACMKHV" [ref=f2e687]
              - cell "Admin" [ref=f2e689]
              - cell "Orange Test" [ref=f2e691]
              - cell "Enabled" [ref=f2e693]
              - cell [ref=f2e695]:
                - generic [ref=f2e696]:
                  - button "" [ref=f2e697] [cursor=pointer]
                  - button "" [ref=f2e699] [cursor=pointer]
            - row [ref=f2e702]:
              - cell "" [ref=f2e703]:
                - generic [ref=f2e707]:
                  - checkbox "" [ref=f2e708]
                  - generic [ref=f2e709]: 
              - cell "Admin" [ref=f2e711]
              - cell "Admin" [ref=f2e713]
              - cell "SavedFirst JEJEJE" [ref=f2e715]
              - cell "Enabled" [ref=f2e717]
              - cell [ref=f2e719]:
                - generic [ref=f2e720]:
                  - button "" [ref=f2e721] [cursor=pointer]
                  - button "" [ref=f2e723] [cursor=pointer]
            - row [ref=f2e726]:
              - cell "" [ref=f2e727]:
                - generic [ref=f2e730] [cursor=pointer]:
                  - checkbox "" [ref=f2e731]
                  - generic [ref=f2e732]: 
              - cell "Areeba Malik" [ref=f2e734]
              - cell "ESS" [ref=f2e736]
              - cell "Areeba Malik" [ref=f2e738]
              - cell "Enabled" [ref=f2e740]
              - cell [ref=f2e742]:
                - generic [ref=f2e743]:
                  - button "" [ref=f2e744] [cursor=pointer]
                  - button "" [ref=f2e746] [cursor=pointer]
            - row [ref=f2e749]:
              - cell "" [ref=f2e750]:
                - generic [ref=f2e753] [cursor=pointer]:
                  - checkbox "" [ref=f2e754]
                  - generic [ref=f2e755]: 
              - cell "autoUser_CdPEVCVa" [ref=f2e757]
              - cell "Admin" [ref=f2e759]
              - cell "Orange Test" [ref=f2e761]
              - cell "Enabled" [ref=f2e763]
              - cell [ref=f2e765]:
                - generic [ref=f2e766]:
                  - button "" [ref=f2e767] [cursor=pointer]
                  - button "" [ref=f2e769] [cursor=pointer]
            - row [ref=f2e772]:
              - cell "" [ref=f2e773]:
                - generic [ref=f2e776] [cursor=pointer]:
                  - checkbox "" [ref=f2e777]
                  - generic [ref=f2e778]: 
              - cell "autoUser_HTTbLTdA" [ref=f2e780]
              - cell "Admin" [ref=f2e782]
              - cell "Orange Test" [ref=f2e784]
              - cell "Enabled" [ref=f2e786]
              - cell [ref=f2e788]:
                - generic [ref=f2e789]:
                  - button "" [ref=f2e790] [cursor=pointer]
                  - button "" [ref=f2e792] [cursor=pointer]
            - row [ref=f2e795]:
              - cell "" [ref=f2e796]:
                - generic [ref=f2e799] [cursor=pointer]:
                  - checkbox "" [ref=f2e800]
                  - generic [ref=f2e801]: 
              - cell "basacarahbha" [ref=f2e803]
              - cell "Admin" [ref=f2e805]
              - cell "bala ravi" [ref=f2e807]
              - cell "Enabled" [ref=f2e809]
              - cell [ref=f2e811]:
                - generic [ref=f2e812]:
                  - button "" [ref=f2e813] [cursor=pointer]
                  - button "" [ref=f2e815] [cursor=pointer]
            - row [ref=f2e818]:
              - cell "" [ref=f2e819]:
                - generic [ref=f2e822] [cursor=pointer]:
                  - checkbox "" [ref=f2e823]
                  - generic [ref=f2e824]: 
              - cell "bimasakti" [ref=f2e826]
              - cell "ESS" [ref=f2e828]
              - cell "bima sakti" [ref=f2e830]
              - cell "Enabled" [ref=f2e832]
              - cell [ref=f2e834]:
                - generic [ref=f2e835]:
                  - button "" [ref=f2e836] [cursor=pointer]
                  - button "" [ref=f2e838] [cursor=pointer]
            - row [ref=f2e841]:
              - cell "" [ref=f2e842]:
                - generic [ref=f2e845] [cursor=pointer]:
                  - checkbox "" [ref=f2e846]
                  - generic [ref=f2e847]: 
              - cell "BLVTNEAb" [ref=f2e849]
              - cell "Admin" [ref=f2e851]
              - cell "Berthold BeefsteakLN_CeCER" [ref=f2e853]
              - cell "Enabled" [ref=f2e855]
              - cell [ref=f2e857]:
                - generic [ref=f2e858]:
                  - button "" [ref=f2e859] [cursor=pointer]
                  - button "" [ref=f2e861] [cursor=pointer]
            - row [ref=f2e864]:
              - cell "" [ref=f2e865]:
                - generic [ref=f2e868] [cursor=pointer]:
                  - checkbox "" [ref=f2e869]
                  - generic [ref=f2e870]: 
              - cell "Butler" [ref=f2e872]
              - cell "ESS" [ref=f2e874]
              - cell "James Butler" [ref=f2e876]
              - cell "Enabled" [ref=f2e878]
              - cell [ref=f2e880]:
                - generic [ref=f2e881]:
                  - button "" [ref=f2e882] [cursor=pointer]
                  - button "" [ref=f2e884] [cursor=pointer]
            - row [ref=f2e887]:
              - cell "" [ref=f2e888]:
                - generic [ref=f2e891] [cursor=pointer]:
                  - checkbox "" [ref=f2e892]
                  - generic [ref=f2e893]: 
              - cell "CaOdeEGD" [ref=f2e895]
              - cell "ESS" [ref=f2e897]
              - cell "Linda AndersonLN_DHBNO" [ref=f2e899]
              - cell "Disabled" [ref=f2e901]
              - cell [ref=f2e903]:
                - generic [ref=f2e904]:
                  - button "" [ref=f2e905] [cursor=pointer]
                  - button "" [ref=f2e907] [cursor=pointer]
            - row [ref=f2e910]:
              - cell "" [ref=f2e911]:
                - generic [ref=f2e914] [cursor=pointer]:
                  - checkbox "" [ref=f2e915]
                  - generic [ref=f2e916]: 
              - cell "CCOeaEOY" [ref=f2e918]
              - cell "ESS" [ref=f2e920]
              - cell "Reinhard PathfinderLN_DJZBR" [ref=f2e922]
              - cell "Enabled" [ref=f2e924]
              - cell [ref=f2e926]:
                - generic [ref=f2e927]:
                  - button "" [ref=f2e928] [cursor=pointer]
                  - button "" [ref=f2e930] [cursor=pointer]
            - row [ref=f2e933]:
              - cell "" [ref=f2e934]:
                - generic [ref=f2e937] [cursor=pointer]:
                  - checkbox "" [ref=f2e938]
                  - generic [ref=f2e939]: 
              - cell "DCFZOJde" [ref=f2e941]
              - cell "Admin" [ref=f2e943]
              - cell "Berthold BeefsteakLN_DJAbe" [ref=f2e945]
              - cell "Enabled" [ref=f2e947]
              - cell [ref=f2e949]:
                - generic [ref=f2e950]:
                  - button "" [ref=f2e951] [cursor=pointer]
                  - button "" [ref=f2e953] [cursor=pointer]
            - row [ref=f2e956]:
              - cell "" [ref=f2e957]:
                - generic [ref=f2e960] [cursor=pointer]:
                  - checkbox "" [ref=f2e961]
                  - generic [ref=f2e962]: 
              - cell "Demo12" [ref=f2e964]
              - cell "Admin" [ref=f2e966]
              - cell "AutoTest AgentRun7391" [ref=f2e968]
              - cell "Enabled" [ref=f2e970]
              - cell [ref=f2e972]:
                - generic [ref=f2e973]:
                  - button "" [ref=f2e974] [cursor=pointer]
                  - button "" [ref=f2e976] [cursor=pointer]
            - row [ref=f2e979]:
              - cell "" [ref=f2e980]:
                - generic [ref=f2e983] [cursor=pointer]:
                  - checkbox "" [ref=f2e984]
                  - generic [ref=f2e985]: 
              - cell "demo123" [ref=f2e987]
              - cell "ESS" [ref=f2e989]
              - cell "Orange Test" [ref=f2e991]
              - cell "Enabled" [ref=f2e993]
              - cell [ref=f2e995]:
                - generic [ref=f2e996]:
                  - button "" [ref=f2e997] [cursor=pointer]
                  - button "" [ref=f2e999] [cursor=pointer]
            - row [ref=f2e1002]:
              - cell "" [ref=f2e1003]:
                - generic [ref=f2e1006] [cursor=pointer]:
                  - checkbox "" [ref=f2e1007]
                  - generic [ref=f2e1008]: 
              - cell "Dinesh001" [ref=f2e1010]
              - cell "ESS" [ref=f2e1012]
              - cell "John Doe" [ref=f2e1014]
              - cell "Enabled" [ref=f2e1016]
              - cell [ref=f2e1018]:
                - generic [ref=f2e1019]:
                  - button "" [ref=f2e1020] [cursor=pointer]
                  - button "" [ref=f2e1022] [cursor=pointer]
            - row [ref=f2e1025]:
              - cell "" [ref=f2e1026]:
                - generic [ref=f2e1029] [cursor=pointer]:
                  - checkbox "" [ref=f2e1030]
                  - generic [ref=f2e1031]: 
              - cell "DNPOQYPX" [ref=f2e1033]
              - cell "ESS" [ref=f2e1035]
              - cell "Doremon Nobita XukaLN_FZPPG" [ref=f2e1037]
              - cell "Enabled" [ref=f2e1039]
              - cell [ref=f2e1041]:
                - generic [ref=f2e1042]:
                  - button "" [ref=f2e1043] [cursor=pointer]
                  - button "" [ref=f2e1045] [cursor=pointer]
            - row [ref=f2e1048]:
              - cell "" [ref=f2e1049]:
                - generic [ref=f2e1052] [cursor=pointer]:
                  - checkbox "" [ref=f2e1053]
                  - generic [ref=f2e1054]: 
              - cell "DVAVQXUA" [ref=f2e1056]
              - cell "ESS" [ref=f2e1058]
              - cell "Linda AndersonLN_DfDDK" [ref=f2e1060]
              - cell "Enabled" [ref=f2e1062]
              - cell [ref=f2e1064]:
                - generic [ref=f2e1065]:
                  - button "" [ref=f2e1066] [cursor=pointer]
                  - button "" [ref=f2e1068] [cursor=pointer]
            - row [ref=f2e1071]:
              - cell "" [ref=f2e1072]:
                - generic [ref=f2e1075] [cursor=pointer]:
                  - checkbox "" [ref=f2e1076]
                  - generic [ref=f2e1077]: 
              - cell "EcfGDfOf" [ref=f2e1079]
              - cell "Admin" [ref=f2e1081]
              - cell "Linda AndersonLN_BVWMS" [ref=f2e1083]
              - cell "Enabled" [ref=f2e1085]
              - cell [ref=f2e1087]:
                - generic [ref=f2e1088]:
                  - button "" [ref=f2e1089] [cursor=pointer]
                  - button "" [ref=f2e1091] [cursor=pointer]
            - row [ref=f2e1094]:
              - cell "" [ref=f2e1095]:
                - generic [ref=f2e1098] [cursor=pointer]:
                  - checkbox "" [ref=f2e1099]
                  - generic [ref=f2e1100]: 
              - cell "EDaMXFGe" [ref=f2e1102]
              - cell "Admin" [ref=f2e1104]
              - cell "Berthold BeefsteakLN_PEZMZ" [ref=f2e1106]
              - cell "Disabled" [ref=f2e1108]
              - cell [ref=f2e1110]:
                - generic [ref=f2e1111]:
                  - button "" [ref=f2e1112] [cursor=pointer]
                  - button "" [ref=f2e1114] [cursor=pointer]
            - row [ref=f2e1117]:
              - cell "" [ref=f2e1118]:
                - generic [ref=f2e1121] [cursor=pointer]:
                  - checkbox "" [ref=f2e1122]
                  - generic [ref=f2e1123]: 
              - cell "EEfMSTdC" [ref=f2e1125]
              - cell "ESS" [ref=f2e1127]
              - cell "Linda AndersonLN_FYKfW" [ref=f2e1129]
              - cell "Enabled" [ref=f2e1131]
              - cell [ref=f2e1133]:
                - generic [ref=f2e1134]:
                  - button "" [ref=f2e1135] [cursor=pointer]
                  - button "" [ref=f2e1137] [cursor=pointer]
            - row [ref=f2e1140]:
              - cell "" [ref=f2e1141]:
                - generic [ref=f2e1144] [cursor=pointer]:
                  - checkbox "" [ref=f2e1145]
                  - generic [ref=f2e1146]: 
              - cell "ELETBJVP" [ref=f2e1148]
              - cell "Admin" [ref=f2e1150]
              - cell "Linda AndersonLN_DPPGO" [ref=f2e1152]
              - cell "Enabled" [ref=f2e1154]
              - cell [ref=f2e1156]:
                - generic [ref=f2e1157]:
                  - button "" [ref=f2e1158] [cursor=pointer]
                  - button "" [ref=f2e1160] [cursor=pointer]
            - row [ref=f2e1163]:
              - cell "" [ref=f2e1164]:
                - generic [ref=f2e1167] [cursor=pointer]:
                  - checkbox "" [ref=f2e1168]
                  - generic [ref=f2e1169]: 
              - cell "eNBHNSSY" [ref=f2e1171]
              - cell "ESS" [ref=f2e1173]
              - cell "Linda AndersonLN_BDJEf" [ref=f2e1175]
              - cell "Enabled" [ref=f2e1177]
              - cell [ref=f2e1179]:
                - generic [ref=f2e1180]:
                  - button "" [ref=f2e1181] [cursor=pointer]
                  - button "" [ref=f2e1183] [cursor=pointer]
            - row [ref=f2e1186]:
              - cell "" [ref=f2e1187]:
                - generic [ref=f2e1190] [cursor=pointer]:
                  - checkbox "" [ref=f2e1191]
                  - generic [ref=f2e1192]: 
              - cell "EYVKMeGc" [ref=f2e1194]
              - cell "ESS" [ref=f2e1196]
              - cell "Yuki NakamuraLN_EFJZB" [ref=f2e1198]
              - cell "Enabled" [ref=f2e1200]
              - cell [ref=f2e1202]:
                - generic [ref=f2e1203]:
                  - button "" [ref=f2e1204] [cursor=pointer]
                  - button "" [ref=f2e1206] [cursor=pointer]
            - row [ref=f2e1209]:
              - cell "" [ref=f2e1210]:
                - generic [ref=f2e1213] [cursor=pointer]:
                  - checkbox "" [ref=f2e1214]
                  - generic [ref=f2e1215]: 
              - cell "FGETeYad" [ref=f2e1217]
              - cell "Admin" [ref=f2e1219]
              - cell "Berthold BeefsteakLN_CZVZc" [ref=f2e1221]
              - cell "Enabled" [ref=f2e1223]
              - cell [ref=f2e1225]:
                - generic [ref=f2e1226]:
                  - button "" [ref=f2e1227] [cursor=pointer]
                  - button "" [ref=f2e1229] [cursor=pointer]
            - row [ref=f2e1232]:
              - cell "" [ref=f2e1233]:
                - generic [ref=f2e1236] [cursor=pointer]:
                  - checkbox "" [ref=f2e1237]
                  - generic [ref=f2e1238]: 
              - cell "FJeCHLKU" [ref=f2e1240]
              - cell "Admin" [ref=f2e1242]
              - cell "Linda AndersonLN_HERHN" [ref=f2e1244]
              - cell "Enabled" [ref=f2e1246]
              - cell [ref=f2e1248]:
                - generic [ref=f2e1249]:
                  - button "" [ref=f2e1250] [cursor=pointer]
                  - button "" [ref=f2e1252] [cursor=pointer]
            - row [ref=f2e1255]:
              - cell "" [ref=f2e1256]:
                - generic [ref=f2e1259] [cursor=pointer]:
                  - checkbox "" [ref=f2e1260]
                  - generic [ref=f2e1261]: 
              - cell "FMLName" [ref=f2e1263]
              - cell "ESS" [ref=f2e1265]
              - cell "Qwerty LName" [ref=f2e1267]
              - cell "Enabled" [ref=f2e1269]
              - cell [ref=f2e1271]:
                - generic [ref=f2e1272]:
                  - button "" [ref=f2e1273] [cursor=pointer]
                  - button "" [ref=f2e1275] [cursor=pointer]
            - row [ref=f2e1278]:
              - cell "" [ref=f2e1279]:
                - generic [ref=f2e1282] [cursor=pointer]:
                  - checkbox "" [ref=f2e1283]
                  - generic [ref=f2e1284]: 
              - cell "FMLName1" [ref=f2e1286]
              - cell "ESS" [ref=f2e1288]
              - cell "FName LName" [ref=f2e1290]
              - cell "Enabled" [ref=f2e1292]
              - cell [ref=f2e1294]:
                - generic [ref=f2e1295]:
                  - button "" [ref=f2e1296] [cursor=pointer]
                  - button "" [ref=f2e1298] [cursor=pointer]
            - row [ref=f2e1301]:
              - cell "" [ref=f2e1302]:
                - generic [ref=f2e1305] [cursor=pointer]:
                  - checkbox "" [ref=f2e1306]
                  - generic [ref=f2e1307]: 
              - cell "HeHeHe Helicote DBURDYGL" [ref=f2e1309]
              - cell "Admin" [ref=f2e1311]
              - cell "Wolfgang SchneiderLN_CdSDH" [ref=f2e1313]
              - cell "Disabled" [ref=f2e1315]
              - cell [ref=f2e1317]:
                - generic [ref=f2e1318]:
                  - button "" [ref=f2e1319] [cursor=pointer]
                  - button "" [ref=f2e1321] [cursor=pointer]
            - row [ref=f2e1324]:
              - cell "" [ref=f2e1325]:
                - generic [ref=f2e1328] [cursor=pointer]:
                  - checkbox "" [ref=f2e1329]
                  - generic [ref=f2e1330]: 
              - cell "HEWNSScb" [ref=f2e1332]
              - cell "Admin" [ref=f2e1334]
              - cell "Alexandre AndersonLN_DEOeD" [ref=f2e1336]
              - cell "Disabled" [ref=f2e1338]
              - cell [ref=f2e1340]:
                - generic [ref=f2e1341]:
                  - button "" [ref=f2e1342] [cursor=pointer]
                  - button "" [ref=f2e1344] [cursor=pointer]
            - row [ref=f2e1347]:
              - cell "" [ref=f2e1348]:
                - generic [ref=f2e1351] [cursor=pointer]:
                  - checkbox "" [ref=f2e1352]
                  - generic [ref=f2e1353]: 
              - cell "HKSfHGCD" [ref=f2e1355]
              - cell "ESS" [ref=f2e1357]
              - cell "Admin_GEMPWLMZ User_dMJXWdOe" [ref=f2e1359]
              - cell "Enabled" [ref=f2e1361]
              - cell [ref=f2e1363]:
                - generic [ref=f2e1364]:
                  - button "" [ref=f2e1365] [cursor=pointer]
                  - button "" [ref=f2e1367] [cursor=pointer]
            - row [ref=f2e1370]:
              - cell "" [ref=f2e1371]:
                - generic [ref=f2e1374] [cursor=pointer]:
                  - checkbox "" [ref=f2e1375]
                  - generic [ref=f2e1376]: 
              - cell "HLVSAGZA" [ref=f2e1378]
              - cell "Admin" [ref=f2e1380]
              - cell "Linda AndersonLN_CVIRE" [ref=f2e1382]
              - cell "Enabled" [ref=f2e1384]
              - cell [ref=f2e1386]:
                - generic [ref=f2e1387]:
                  - button "" [ref=f2e1388] [cursor=pointer]
                  - button "" [ref=f2e1390] [cursor=pointer]
        - navigation "Pagination Navigation" [ref=f2e1393]:
          - list [ref=f2e1394]:
            - listitem [ref=f2e1395]:
              - button "1" [ref=f2e1396] [cursor=pointer]
            - listitem [ref=f2e1397]:
              - button "2" [ref=f2e1398] [cursor=pointer]
            - listitem [ref=f2e1399]:
              - button "" [ref=f2e1400] [cursor=pointer]
    - generic [ref=f2e1402]:
      - paragraph [ref=f2e1403]: OrangeHRM OS 5.9
      - paragraph [ref=f2e1404]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e1405] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import type { Locator, Page } from "@playwright/test";
  2  | 
  3  | export class orangehomepage{
  4  |     page:Page
  5  |     searchbox : Locator
  6  |     adminoption : Locator
  7  |     headingtext : Locator
  8  |     usermanagementdd :Locator
  9  |     username :Locator
  10 |     userroleselect : Locator
  11 |     userroleoption :Locator
  12 |     chooseadminoption :Locator
  13 |     empname :Locator
  14 |     empoptions:Locator
  15 |     status : Locator
  16 |     statusoption : Locator
  17 |     enabledtext : Locator
  18 |     searchuserbtn : Locator
  19 |     info: Locator
  20 |     resetbtn: Locator
  21 |     addbtn: Locator
  22 | 
  23 |     constructor(page:Page){
  24 |         this.page = page
  25 |         this.searchbox = this.page.locator('[placeholder="Search"]')
  26 |         this.adminoption = this.page.locator('[class="oxd-main-menu"]')
  27 |         this.headingtext = this.page.getByRole('heading',{name:"Admin"})
  28 |         this.usermanagementdd = this.page.getByText("User Management ",{exact:true}).last()
  29 |         this.username = this.page.locator("form input.oxd-input")
  30 |         this.userroleselect = this.page.locator('div[class="oxd-select-wrapper"]').first()
  31 |         this.userroleoption = this.page.locator('[role="listbox"] [role="option"]')
  32 |         this.chooseadminoption = this.page.locator('div[role="option"]').nth(1)
  33 |         this.empname = this.page.getByPlaceholder("Type for hints...")
  34 |         this.empoptions = this.page.locator('[role="listbox"] [role="option"]')
  35 |         this.status = this.page.locator('div[class="oxd-select-wrapper"]').last()
  36 |         this.statusoption = this.page.locator('[role="listbox"] [role="option"]').nth(1)
  37 |         this.enabledtext = this.page.locator("div.oxd-select-text").last()
  38 |         this.searchuserbtn = this.page.locator('button[type="submit"]')
  39 |         this.info = this.page.locator('[id="oxd-toaster_1"]')
  40 |         this.resetbtn = this.page.locator(".oxd-button--ghost")
  41 |         this.addbtn = this.page.locator(".oxd-button--secondary")
  42 | 
  43 |     }
  44 | 
  45 |     async tapserachbox(searchterm:string){
  46 |         await this.searchbox.fill(searchterm)
  47 |         await this.adminoption.click()  
  48 |     }
  49 |     async updatesystemuser(filterusername:string, rolename:string,empname:string,empolyeename:string, statusname:string)
  50 |     {
  51 |         await this.username.fill(filterusername)
  52 | 
  53 |         await this.userroleselect.click()
  54 |         await this.userroleoption.last().waitFor()
  55 |         const roleoptioncount = await this.userroleoption.count()
  56 | 
  57 |         for(let i=0; i<roleoptioncount; i++)
  58 |         {
  59 |             const roleoptiontext= (await this.userroleoption.nth(i).innerText()).trim()
  60 |             if(roleoptiontext === rolename)
  61 |             {
  62 |                 await this.userroleoption.nth(i).click()
  63 |                 break
  64 |             }
  65 |         }
  66 |       
  67 |        await this.empname.fill(empname)
  68 |        await this.empoptions.last().waitFor()
  69 |        const empoptionscount = await this.empoptions.count()
  70 |        
  71 |        for(let i=0; i<empoptionscount; i++)
  72 |        {
  73 |         const empoptiontext = (await (this.empoptions.nth(i).innerText())).trim()
  74 |         if(empoptiontext === empolyeename)
  75 |         {
  76 |            await this.empoptions.nth(i).click()
  77 |         }
  78 |        }
  79 | 
  80 |        await this.status.click()
  81 |        await this.statusoption.last().waitFor()
  82 |       const stattusoptioncount =  await this.statusoption.count()
  83 | 
  84 |       for(let i=0; i<stattusoptioncount; i++){
  85 |         const statusoptiontext = (await this.statusoption.nth(i).innerText()).trim()
  86 |         if(statusoptiontext === statusname)
  87 |             await this.statusoption.nth(i).click()
  88 |         break
  89 |       } 
  90 |       await this.searchuserbtn.click()
  91 |       console.log("Search button clicked successfully")
  92 | 
  93 |       await this.resetbtn.click()
> 94 |       await this.addbtn.click()
     |                         ^ Error: locator.click: Error: strict mode violation: locator('.oxd-button--secondary') resolved to 2 elements:
  95 |         
  96 |     }
  97 | }
```