
import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://www.makemytrip.com/flights/?cmp=SEM|D|DF|B|Brand|Brand-BrandExact_DT|B_M_Makemytrip_Search_Exact|RSA|&ef_id=:G:s');

  await page.locator("p[data-cy='LoginHeaderText']").click();
  await page.getByPlaceholder('Enter Mobile Number').fill('8495993483');

  await page.locator('button[data-cy="continueBtn"], button:has-text("Continue")').click();

  await expect(page.locator('body')).toContainText(/OTP|Verify/i, { timeout: 20000 });
});






// import {test, expect} from '@playwright/test'

// test("login ", async function ({page}){
// await page.goto("https://www.makemytrip.com/flights/?cmp=SEM|D|DF|B|Brand|Brand-BrandExact_DT|B_M_Makemytrip_Search_Exact|RSA|&ef_id=:G:s")
// await page.locator("//p[@data-cy='LoginHeaderText']").click()
// await page.locator("//input[@placeholder='Enter Mobile Number']").fill("8495993483")
// //await page.getByRole('button',{name:'continueBtn'}).click()
// //await page.getByRole('button', { name: 'Continue' }).click();

// await page.locator("//div[@class='btnContainer appendBottom25']").click()


// //await page.locator("//button[@data-cy="continueBtn"]//span[text()="Continue"]").click()


// //await page.locator("//img[@data-cy='signInByMailButton']").click()
// //await page.locator("//input[@placeholder='Enter Email Address']").fill("dikshitha1713@gmail.com")
// //await page.locator("//div[@class='btnContainer appendBottom25']").click()

// //await expect(page.locator("//p[@class='font14 darkGreyText makeFlex']/preceding-sibling::p")).toBeVisible
// })

