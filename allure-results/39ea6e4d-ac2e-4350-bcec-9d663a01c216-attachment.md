# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orangehome.spec.ts >> homepage validation
- Location: tests\orangehome.spec.ts:19:1

# Error details

```
Test timeout of 300000ms exceeded.
```

```
Error: locator.click: Test timeout of 300000ms exceeded.
Call log:
  - waiting for locator('[type="submit"]')
    - locator resolved to <button type="submit" data-v-10d463b7="" class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div role="option" data-v-d130bb63="" data-v-13cf171c="" class="oxd-select-option">…</div> from <div data-v-2130bd2a="" class="oxd-form-row">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div role="option" data-v-d130bb63="" data-v-13cf171c="" class="oxd-select-option">…</div> from <div data-v-2130bd2a="" class="oxd-form-row">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    526 × waiting for element to be visible, enabled and stable
        - element is visible, enabled and stable
        - scrolling into view if needed
        - done scrolling
        - <div role="option" data-v-d130bb63="" data-v-13cf171c="" class="oxd-select-option">…</div> from <div data-v-2130bd2a="" class="oxd-form-row">…</div> subtree intercepts pointer events
      - retrying click action
        - waiting 500ms

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
              - paragraph [ref=f2e128]: Hugo Musk
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
              - textbox [ref=f2e176]: diksha
            - generic [ref=f2e178]:
              - generic [ref=f2e179]: User Role
              - generic [ref=f2e183] [cursor=pointer]:
                - generic [ref=f2e184]: "-- Select --"
                - generic [ref=f2e185]: 
            - generic [ref=f2e188]:
              - generic [ref=f2e189]: Employee Name
              - textbox "Type for hints..." [ref=f2e194]: dikshithatester
              - generic [ref=f2e195]: Invalid
            - generic [ref=f2e197]:
              - generic [ref=f2e198]: Status
              - generic [ref=f2e201]:
                - generic [ref=f2e202] [cursor=pointer]:
                  - generic [active] [ref=f2e203]: "-- Select --"
                  - generic [ref=f2e204]: 
                - listbox [ref=f2e206]:
                  - option "-- Select --" [ref=f2e207] [cursor=pointer]
                  - option "Enabled" [ref=f2e208] [cursor=pointer]
                  - option "Disabled" [ref=f2e210] [cursor=pointer]
          - separator [ref=f2e212]
          - generic [ref=f2e213]:
            - button "Reset" [ref=f2e214] [cursor=pointer]
            - button "Search" [ref=f2e215] [cursor=pointer]
      - generic [ref=f2e216]:
        - button " Add" [ref=f2e218] [cursor=pointer]:
          - generic [ref=f2e219]: 
          - text: Add
        - generic [ref=f2e220]:
          - separator [ref=f2e221]
          - generic [ref=f2e222]: (25) Records Found
        - table [ref=f2e225]:
          - rowgroup [ref=f2e226]:
            - row [ref=f2e227]:
              - columnheader "" [ref=f2e228]:
                - generic [ref=f2e230] [cursor=pointer]:
                  - checkbox "" [ref=f2e231]
                  - generic [ref=f2e232]: 
              - columnheader "Username " [ref=f2e234]:
                - text: Username
                - generic [ref=f2e235]:
                  - generic [ref=f2e236] [cursor=pointer]: 
                  - text:  
              - columnheader "User Role " [ref=f2e237]:
                - text: User Role
                - generic [ref=f2e238]:
                  - generic [ref=f2e239] [cursor=pointer]: 
                  - text:  
              - columnheader "Employee Name " [ref=f2e240]:
                - text: Employee Name
                - generic [ref=f2e241]:
                  - generic [ref=f2e242] [cursor=pointer]: 
                  - text:  
              - columnheader "Status " [ref=f2e243]:
                - text: Status
                - generic [ref=f2e244]:
                  - generic [ref=f2e245] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f2e246]
          - rowgroup [ref=f2e247]:
            - row [ref=f2e249]:
              - cell "" [ref=f2e250]:
                - generic [ref=f2e253] [cursor=pointer]:
                  - checkbox "" [ref=f2e254]
                  - generic [ref=f2e255]: 
              - cell "12345we" [ref=f2e257]
              - cell "ESS" [ref=f2e259]
              - cell "test tr" [ref=f2e261]
              - cell "Enabled" [ref=f2e263]
              - cell [ref=f2e265]:
                - generic [ref=f2e266]:
                  - button "" [ref=f2e267] [cursor=pointer]
                  - button "" [ref=f2e269] [cursor=pointer]
            - row [ref=f2e272]:
              - cell "" [ref=f2e273]:
                - generic [ref=f2e277]:
                  - checkbox "" [ref=f2e278]
                  - generic [ref=f2e279]: 
              - cell "Admin" [ref=f2e281]
              - cell "Admin" [ref=f2e283]
              - cell "Hugo Musk" [ref=f2e285]
              - cell "Enabled" [ref=f2e287]
              - cell [ref=f2e289]:
                - generic [ref=f2e290]:
                  - button "" [ref=f2e291] [cursor=pointer]
                  - button "" [ref=f2e293] [cursor=pointer]
            - row [ref=f2e296]:
              - cell "" [ref=f2e297]:
                - generic [ref=f2e300] [cursor=pointer]:
                  - checkbox "" [ref=f2e301]
                  - generic [ref=f2e302]: 
              - cell "Admin1791469207389" [ref=f2e304]
              - cell "Admin" [ref=f2e306]
              - cell "Ranga Akunuri" [ref=f2e308]
              - cell "Enabled" [ref=f2e310]
              - cell [ref=f2e312]:
                - generic [ref=f2e313]:
                  - button "" [ref=f2e314] [cursor=pointer]
                  - button "" [ref=f2e316] [cursor=pointer]
            - row [ref=f2e319]:
              - cell "" [ref=f2e320]:
                - generic [ref=f2e323] [cursor=pointer]:
                  - checkbox "" [ref=f2e324]
                  - generic [ref=f2e325]: 
              - cell "Aj1791469207389" [ref=f2e327]
              - cell "ESS" [ref=f2e329]
              - cell "Ranga Akunuri" [ref=f2e331]
              - cell "Enabled" [ref=f2e333]
              - cell [ref=f2e335]:
                - generic [ref=f2e336]:
                  - button "" [ref=f2e337] [cursor=pointer]
                  - button "" [ref=f2e339] [cursor=pointer]
            - row [ref=f2e342]:
              - cell "" [ref=f2e343]:
                - generic [ref=f2e346] [cursor=pointer]:
                  - checkbox "" [ref=f2e347]
                  - generic [ref=f2e348]: 
              - cell "Aj1791469270386" [ref=f2e350]
              - cell "ESS" [ref=f2e352]
              - cell "Ranga Akunuri" [ref=f2e354]
              - cell "Disabled" [ref=f2e356]
              - cell [ref=f2e358]:
                - generic [ref=f2e359]:
                  - button "" [ref=f2e360] [cursor=pointer]
                  - button "" [ref=f2e362] [cursor=pointer]
            - row [ref=f2e365]:
              - cell "" [ref=f2e366]:
                - generic [ref=f2e369] [cursor=pointer]:
                  - checkbox "" [ref=f2e370]
                  - generic [ref=f2e371]: 
              - cell "Akunuri" [ref=f2e373]
              - cell "Admin" [ref=f2e375]
              - cell "Ranga Akunuri" [ref=f2e377]
              - cell "Enabled" [ref=f2e379]
              - cell [ref=f2e381]:
                - generic [ref=f2e382]:
                  - button "" [ref=f2e383] [cursor=pointer]
                  - button "" [ref=f2e385] [cursor=pointer]
            - row [ref=f2e388]:
              - cell "" [ref=f2e389]:
                - generic [ref=f2e392] [cursor=pointer]:
                  - checkbox "" [ref=f2e393]
                  - generic [ref=f2e394]: 
              - cell "AntonioS1" [ref=f2e396]
              - cell "ESS" [ref=f2e398]
              - cell "12345 @32Sunday" [ref=f2e400]
              - cell "Enabled" [ref=f2e402]
              - cell [ref=f2e404]:
                - generic [ref=f2e405]:
                  - button "" [ref=f2e406] [cursor=pointer]
                  - button "" [ref=f2e408] [cursor=pointer]
            - row [ref=f2e411]:
              - cell "" [ref=f2e412]:
                - generic [ref=f2e415] [cursor=pointer]:
                  - checkbox "" [ref=f2e416]
                  - generic [ref=f2e417]: 
              - cell "BawarIsBest" [ref=f2e419]
              - cell "Admin" [ref=f2e421]
              - cell "Automation Employee" [ref=f2e423]
              - cell "Enabled" [ref=f2e425]
              - cell [ref=f2e427]:
                - generic [ref=f2e428]:
                  - button "" [ref=f2e429] [cursor=pointer]
                  - button "" [ref=f2e431] [cursor=pointer]
            - row [ref=f2e434]:
              - cell "" [ref=f2e435]:
                - generic [ref=f2e438] [cursor=pointer]:
                  - checkbox "" [ref=f2e439]
                  - generic [ref=f2e440]: 
              - cell "Butler" [ref=f2e442]
              - cell "ESS" [ref=f2e444]
              - cell "James Butler" [ref=f2e446]
              - cell "Enabled" [ref=f2e448]
              - cell [ref=f2e450]:
                - generic [ref=f2e451]:
                  - button "" [ref=f2e452] [cursor=pointer]
                  - button "" [ref=f2e454] [cursor=pointer]
            - row [ref=f2e457]:
              - cell "" [ref=f2e458]:
                - generic [ref=f2e461] [cursor=pointer]:
                  - checkbox "" [ref=f2e462]
                  - generic [ref=f2e463]: 
              - cell "FMLName" [ref=f2e465]
              - cell "ESS" [ref=f2e467]
              - cell "Qwerty LName" [ref=f2e469]
              - cell "Enabled" [ref=f2e471]
              - cell [ref=f2e473]:
                - generic [ref=f2e474]:
                  - button "" [ref=f2e475] [cursor=pointer]
                  - button "" [ref=f2e477] [cursor=pointer]
            - row [ref=f2e480]:
              - cell "" [ref=f2e481]:
                - generic [ref=f2e484] [cursor=pointer]:
                  - checkbox "" [ref=f2e485]
                  - generic [ref=f2e486]: 
              - cell "FMLName1" [ref=f2e488]
              - cell "ESS" [ref=f2e490]
              - cell "FName LName" [ref=f2e492]
              - cell "Enabled" [ref=f2e494]
              - cell [ref=f2e496]:
                - generic [ref=f2e497]:
                  - button "" [ref=f2e498] [cursor=pointer]
                  - button "" [ref=f2e500] [cursor=pointer]
            - row [ref=f2e503]:
              - cell "" [ref=f2e504]:
                - generic [ref=f2e507] [cursor=pointer]:
                  - checkbox "" [ref=f2e508]
                  - generic [ref=f2e509]: 
              - cell "Jobinsam@6742" [ref=f2e511]
              - cell "ESS" [ref=f2e513]
              - cell "Jobin Sam" [ref=f2e515]
              - cell "Enabled" [ref=f2e517]
              - cell [ref=f2e519]:
                - generic [ref=f2e520]:
                  - button "" [ref=f2e521] [cursor=pointer]
                  - button "" [ref=f2e523] [cursor=pointer]
            - row [ref=f2e526]:
              - cell "" [ref=f2e527]:
                - generic [ref=f2e530] [cursor=pointer]:
                  - checkbox "" [ref=f2e531]
                  - generic [ref=f2e532]: 
              - cell "kaldish1" [ref=f2e534]
              - cell "ESS" [ref=f2e536]
              - cell "Ibrahim Kaldish" [ref=f2e538]
              - cell "Enabled" [ref=f2e540]
              - cell [ref=f2e542]:
                - generic [ref=f2e543]:
                  - button "" [ref=f2e544] [cursor=pointer]
                  - button "" [ref=f2e546] [cursor=pointer]
            - row [ref=f2e549]:
              - cell "" [ref=f2e550]:
                - generic [ref=f2e553] [cursor=pointer]:
                  - checkbox "" [ref=f2e554]
                  - generic [ref=f2e555]: 
              - cell "kaldish2" [ref=f2e557]
              - cell "ESS" [ref=f2e559]
              - cell "Youssef Kaldish" [ref=f2e561]
              - cell "Enabled" [ref=f2e563]
              - cell [ref=f2e565]:
                - generic [ref=f2e566]:
                  - button "" [ref=f2e567] [cursor=pointer]
                  - button "" [ref=f2e569] [cursor=pointer]
            - row [ref=f2e572]:
              - cell "" [ref=f2e573]:
                - generic [ref=f2e576] [cursor=pointer]:
                  - checkbox "" [ref=f2e577]
                  - generic [ref=f2e578]: 
              - cell "kaldish3" [ref=f2e580]
              - cell "ESS" [ref=f2e582]
              - cell "Zein Kaldish3" [ref=f2e584]
              - cell "Enabled" [ref=f2e586]
              - cell [ref=f2e588]:
                - generic [ref=f2e589]:
                  - button "" [ref=f2e590] [cursor=pointer]
                  - button "" [ref=f2e592] [cursor=pointer]
            - row [ref=f2e595]:
              - cell "" [ref=f2e596]:
                - generic [ref=f2e599] [cursor=pointer]:
                  - checkbox "" [ref=f2e600]
                  - generic [ref=f2e601]: 
              - cell "kaldish4" [ref=f2e603]
              - cell "ESS" [ref=f2e605]
              - cell "yassmein Kaldish" [ref=f2e607]
              - cell "Enabled" [ref=f2e609]
              - cell [ref=f2e611]:
                - generic [ref=f2e612]:
                  - button "" [ref=f2e613] [cursor=pointer]
                  - button "" [ref=f2e615] [cursor=pointer]
            - row [ref=f2e618]:
              - cell "" [ref=f2e619]:
                - generic [ref=f2e622] [cursor=pointer]:
                  - checkbox "" [ref=f2e623]
                  - generic [ref=f2e624]: 
              - cell "kirtik-1791469225729" [ref=f2e626]
              - cell "ESS" [ref=f2e628]
              - cell "kirtik-1791469225729 Sin" [ref=f2e630]
              - cell "Enabled" [ref=f2e632]
              - cell [ref=f2e634]:
                - generic [ref=f2e635]:
                  - button "" [ref=f2e636] [cursor=pointer]
                  - button "" [ref=f2e638] [cursor=pointer]
            - row [ref=f2e641]:
              - cell "" [ref=f2e642]:
                - generic [ref=f2e645] [cursor=pointer]:
                  - checkbox "" [ref=f2e646]
                  - generic [ref=f2e647]: 
              - cell "kirtik-1791469240525" [ref=f2e649]
              - cell "ESS" [ref=f2e651]
              - cell "kirtik-1791469240525 Sin" [ref=f2e653]
              - cell "Disabled" [ref=f2e655]
              - cell [ref=f2e657]:
                - generic [ref=f2e658]:
                  - button "" [ref=f2e659] [cursor=pointer]
                  - button "" [ref=f2e661] [cursor=pointer]
            - row [ref=f2e664]:
              - cell "" [ref=f2e665]:
                - generic [ref=f2e668] [cursor=pointer]:
                  - checkbox "" [ref=f2e669]
                  - generic [ref=f2e670]: 
              - cell "Lakshmikar" [ref=f2e672]
              - cell "Admin" [ref=f2e674]
              - cell "Taf Automation" [ref=f2e676]
              - cell "Enabled" [ref=f2e678]
              - cell [ref=f2e680]:
                - generic [ref=f2e681]:
                  - button "" [ref=f2e682] [cursor=pointer]
                  - button "" [ref=f2e684] [cursor=pointer]
            - row [ref=f2e687]:
              - cell "" [ref=f2e688]:
                - generic [ref=f2e691] [cursor=pointer]:
                  - checkbox "" [ref=f2e692]
                  - generic [ref=f2e693]: 
              - cell "loctest1" [ref=f2e695]
              - cell "ESS" [ref=f2e697]
              - cell "First1 Last1" [ref=f2e699]
              - cell "Enabled" [ref=f2e701]
              - cell [ref=f2e703]:
                - generic [ref=f2e704]:
                  - button "" [ref=f2e705] [cursor=pointer]
                  - button "" [ref=f2e707] [cursor=pointer]
            - row [ref=f2e710]:
              - cell "" [ref=f2e711]:
                - generic [ref=f2e714] [cursor=pointer]:
                  - checkbox "" [ref=f2e715]
                  - generic [ref=f2e716]: 
              - cell "navaneeth9902" [ref=f2e718]
              - cell "ESS" [ref=f2e720]
              - cell "navaneeth9902 Bcf" [ref=f2e722]
              - cell "Enabled" [ref=f2e724]
              - cell [ref=f2e726]:
                - generic [ref=f2e727]:
                  - button "" [ref=f2e728] [cursor=pointer]
                  - button "" [ref=f2e730] [cursor=pointer]
            - row [ref=f2e733]:
              - cell "" [ref=f2e734]:
                - generic [ref=f2e737] [cursor=pointer]:
                  - checkbox "" [ref=f2e738]
                  - generic [ref=f2e739]: 
              - cell "somtest1234_111" [ref=f2e741]
              - cell "ESS" [ref=f2e743]
              - cell "somtest1234_111 somtest1234_111" [ref=f2e745]
              - cell "Enabled" [ref=f2e747]
              - cell [ref=f2e749]:
                - generic [ref=f2e750]:
                  - button "" [ref=f2e751] [cursor=pointer]
                  - button "" [ref=f2e753] [cursor=pointer]
            - row [ref=f2e756]:
              - cell "" [ref=f2e757]:
                - generic [ref=f2e760] [cursor=pointer]:
                  - checkbox "" [ref=f2e761]
                  - generic [ref=f2e762]: 
              - cell "testuser17914680582b69" [ref=f2e764]
              - cell "ESS" [ref=f2e766]
              - cell "A8DCo 010Z" [ref=f2e768]
              - cell "Enabled" [ref=f2e770]
              - cell [ref=f2e772]:
                - generic [ref=f2e773]:
                  - button "" [ref=f2e774] [cursor=pointer]
                  - button "" [ref=f2e776] [cursor=pointer]
            - row [ref=f2e779]:
              - cell "" [ref=f2e780]:
                - generic [ref=f2e783] [cursor=pointer]:
                  - checkbox "" [ref=f2e784]
                  - generic [ref=f2e785]: 
              - cell "user_84726" [ref=f2e787]
              - cell "ESS" [ref=f2e789]
              - cell "Ranga Akunuri" [ref=f2e791]
              - cell "Enabled" [ref=f2e793]
              - cell [ref=f2e795]:
                - generic [ref=f2e796]:
                  - button "" [ref=f2e797] [cursor=pointer]
                  - button "" [ref=f2e799] [cursor=pointer]
            - row [ref=f2e802]:
              - cell "" [ref=f2e803]:
                - generic [ref=f2e806] [cursor=pointer]:
                  - checkbox "" [ref=f2e807]
                  - generic [ref=f2e808]: 
              - cell "user_84729" [ref=f2e810]
              - cell "ESS" [ref=f2e812]
              - cell "A8DCo 010Z" [ref=f2e814]
              - cell "Enabled" [ref=f2e816]
              - cell [ref=f2e818]:
                - generic [ref=f2e819]:
                  - button "" [ref=f2e820] [cursor=pointer]
                  - button "" [ref=f2e822] [cursor=pointer]
    - generic [ref=f2e825]:
      - paragraph [ref=f2e826]: OrangeHRM OS 5.9
      - paragraph [ref=f2e827]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e828] [cursor=pointer]:
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
  14 |     status : Locator
  15 |     statusoption : Locator
  16 |     Enabled : Locator
  17 |     searchbtn : Locator
  18 | 
  19 |     constructor(page:Page){
  20 |         this.page = page
  21 |         this.searchbox = this.page.locator('[placeholder="Search"]')
  22 |         this.adminoption = this.page.locator('[class="oxd-main-menu"]')
  23 |         this.headingtext = this.page.getByRole('heading',{name:"Admin"})
  24 |         this.usermanagementdd = this.page.getByText("User Management ",{exact:true}).last()
  25 |         this.username = this.page.locator("form input.oxd-input")
  26 |         this.userroleselect = this.page.locator('div[class="oxd-select-wrapper"]').first()
  27 |         this.userroleoption = this.page.locator('[role="listbox"]')
  28 |         this.chooseadminoption = this.page.locator('div[role="option"]').nth(1)
  29 |         this.empname = this.page.getByPlaceholder("Type for hints...")
  30 |         this.status = this.page.locator('div[class="oxd-select-wrapper"]').last()
  31 |         this.statusoption = this.page.locator('[role="listbox"]')
  32 |         this.Enabled = this.page.locator('[role="option"]').nth(1)
  33 |         this.searchbtn = this.page.locator('[type="submit"]')
  34 |     }
  35 | 
  36 |     async tapserachbox(searchterm:string){
  37 |         await this.searchbox.fill(searchterm)
  38 |         await this.adminoption.click()  
  39 |     }
  40 |     async updatesystemuser(filterusername:string, empname:string, rolename:string,statusname:string)
  41 |     {
  42 |         await this.username.fill(filterusername)
  43 | 
  44 |         await this.userroleselect.click()
  45 |         await this.userroleoption.last().waitFor()
  46 |         const roleoptioncount = await this.userroleoption.count()
  47 | 
  48 |         for(let i=0; i<roleoptioncount; i++)
  49 |         {
  50 |             const roleoptiontext= (await this.userroleoption.nth(i).innerText()).trim()
  51 |             if(roleoptiontext === rolename)
  52 |             {
  53 |                 await this.userroleoption.nth(i).click()
  54 |                 break
  55 |             }
  56 |         }
  57 |       
  58 |        await this.empname.fill(empname)
  59 | 
  60 |        await this.status.click()
  61 |        await this.statusoption.last().waitFor()
  62 |       const stattusoptioncount =  await this.statusoption.count()
  63 | 
  64 |       for(let i=0; i<stattusoptioncount; i++){
  65 |         const statusoptiontext = (await this.statusoption.nth(i).innerText()).trim()
  66 |         if(statusoptiontext === statusname)
  67 |             await this.Enabled.click()
  68 |         break
  69 |       } 
> 70 |       await this.searchbtn.click()
     |                            ^ Error: locator.click: Test timeout of 300000ms exceeded.
  71 |         
  72 |     }
  73 | }
```