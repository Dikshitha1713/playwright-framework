import{test, expect} from '@playwright/test'
import path from "path"
import fs from 'fs'
test("file download handling", async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.getByRole("button", {name:"Generate and Download PDF File"}).click()
    const downloadresult = page.waitForEvent('download')
    await page.locator("a#pdfDownloadLink").click()
    const download= await downloadresult
    const downloaddir = path.join(__dirname, '../downloads')
    const filename = download.suggestedFilename()
    const filepath = path.join(downloaddir, filename)
    //console.log(filepath)
    await download.saveAs(filepath)
    await expect(filepath).toContain(filename)
    await expect(fs.existsSync(filepath)).toBeTruthy()
})