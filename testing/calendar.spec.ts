import{test, expect} from '@playwright/test'
test("calendar handling", async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#datepicker").first().click()

    const targetmonth = "March"
    const targetyear = "2027"
    const tragetdate = "17"

    const month =  page.locator(".ui-datepicker-month") 
    const year =  page.locator(".ui-datepicker-year")
    const nextbtn = page.locator('[data-handler="next"]')

    while(true){
        if((await month.textContent() === targetmonth) && (await year.textContent() === targetyear)){
       await page.locator('[data-date="17"]').click()
        break
        }
        await nextbtn.click()
    }
  await page.waitForTimeout(5000)


  await page.locator(".hasDatepicker").last().click()
  await page.locator(".ui-datepicker-month").selectOption({label:"Apr"})
  await page.locator(".ui-datepicker-year").selectOption("2025")
  await page.locator('[data-date="24"]').click()

  await page.getByPlaceholder('Start Date').fill('2020-01-14');
  await page.getByPlaceholder('End Date').fill('2028-12-29');
  await page.locator('[onclick="calculateRange()"]').click();
  await expect(page.locator("#result")).toContainText("You selected a range")
})