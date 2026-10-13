import{test, expect} from '@playwright/test'

test("validating checkboxes", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
     
   //select specific day by using lable 
    await page.getByLabel("Monday").check()
    await expect(page.getByLabel("Monday")).toBeVisible()
    await expect(page.getByLabel("Monday")).toBeEnabled()

    await expect(page.getByLabel("Monday")).toBeChecked()

    //capture all the checkboxes
    const days = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] 
    const checkboxes = days.map(index => page.getByLabel(index)) 

    expect(checkboxes.length).toBe(7)

    // select all the checkboxes
    for(const checkbox of checkboxes){
        await checkbox.check()
        await expect(checkbox).toBeChecked()
    }

    // unselect last 3 check boxes
     for(const checkbox of checkboxes.slice(-3)){
        await checkbox.uncheck()
        await expect(checkbox).not.toBeChecked()
    }

    // disselect all the checkboxes
    for(const checkbox of checkboxes){
        await checkbox.uncheck()
        await expect(checkbox).not.toBeChecked()
    }

    // toggle checkbox : if checked : uncheck, if unchecked : check , assert state flipped

    for(const checkbox of checkboxes){ // true
       if(await checkbox.isChecked()){
        await checkbox.uncheck()
        await expect(checkbox).not.toBeChecked()
       }
       else{
        await checkbox.uncheck()
        await expect(checkbox).not.toBeChecked()
       }
    } 

    // randomly select check boxes [1, 3, 6]

    const indexs = [1,3,6]
    for(let i of indexs){
        await checkboxes[i]!.check()
        await expect(checkboxes[i]!).toBeChecked()
    }
})

test("validate the single select dd", async ({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/")

 await page.locator("#country").selectOption("Japan")

 // check no of options in the dd

 const dropdownsoptions = page.locator("#country option")
 await expect(dropdownsoptions).toHaveCount(10)

 // check the option present in the dd
 const optiontext = (await dropdownsoptions.allTextContents()).map(text => text.trim())
 console.log(optiontext)

 //printing options from the dropdwon 

 for(let options of optiontext){
    console.log(options)
 }
})

test("multi select dd", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#colors").selectOption(['Red','White','Green'])

   await expect(page.locator("#colors option")).toHaveCount(7)

   const optionsdropdown = (page.locator("#colors option"))
   const optionstext = (await optionsdropdown.allTextContents()).map(text =>text.trim())
   console.log(optionstext)

   for(let options of optionstext){
    console.log(options)
   }
    
})

test("sorted dropdowns",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")


   //const dropdownoptions = page.locator("#colors option")  
   const dropdownoptions = page.locator("#animals option") 
    const optiontext = (await dropdownoptions.allTextContents()).map(text => text.trim())
    
    // const originallist = optiontext
    // const sortedlist = optiontext.sort()

    const originallist = [...optiontext]
    const sortedlist = [...optiontext].sort()

    console.log("original list", originallist )
    console.log("sorted list", sortedlist)

    expect (originallist).toEqual(sortedlist)

})

test.only("validate the table", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const table = await page.locator('[name="BookTable"]').allInnerTexts()
    console.log("tabletext" , table)
    
    const rows = page.locator('[name="BookTable"] tbody tr')
    await expect(rows).toHaveCount(7)

    const rowscount = await rows.count()
    console.log(rowscount)
    expect(rowscount).toBe(7)

    const colums = rows.locator('th')
    const columscount = await colums.count()

    // read data from the 2nd row 

    const secondrowcell = rows.nth(2).locator('td')
    const secondrowtext = await secondrowcell.allInnerTexts()
    console.log("all 2ndrow text", secondrowtext) // or loop as well

    for(let text of secondrowtext){
        console.log(text)
    }

    // read all the data excluding header

    const allrowsdata= await rows.all()
    for(let rows of allrowsdata.slice(1))
    {
       const cols = await rows.locator('td').allInnerTexts()
       console.log(cols.join('\t'))
    }


})