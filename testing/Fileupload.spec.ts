import {test, expect} from '@playwright/test'
import path from 'path'

test("file upload handling", async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole("heading",{name:"Upload Files"}).isVisible()

    //const filepath1 = await path.join(__dirname, '../')

    await page.locator("#singleFileInput").setInputFiles("C:/Users/DIKSHITA/OneDrive/Pictures/Puneeth.jpg")
    //await page.getByRole("button", {name:"Upload Single File"}).click()
    await page.locator('[type="submit"]').first().click()
    await expect(page.locator("#singleFileStatus")).toContainText("Puneeth.jpg,")

    await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/DIKSHITA/OneDrive/Pictures/Screen.png", "C:/Users/DIKSHITA/OneDrive/Pictures/ss11.PNG"])
    await page.getByRole("button", {name:"Upload Multiple Files"}).click()
    await expect(page.locator("#multipleFilesStatus")).toContainText("Multiple files ")
})

// test("upload file", async({page}) =>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     await page.getByRole("heading",{name:"Upload Files"}).isVisible()
    
//     console.log(__dirname)
    
//     const singlefile =  path.join(__dirname, '../TestData/Puneeth.jpg')

//     //const singlefile = path.join(__dirname, "../../testdata/Puneeth.jpg");
//     console.log(singlefile)
//     const multifile = path.join(__dirname, '../TestData/s1.sig.jpg', '../TestData/Screen.png')

//     await page.locator("#singleFileInput").setInputFiles(singlefile)
//     await page.locator("#multipleFilesInput").setInputFiles(multifile)

// })    

// import { test, expect } from '@playwright/test';

// test('Upload a file demo', async ({ page }) => {
//   // Step 1: Navigate to a page with a file input
//   await page.goto('https://the-internet.herokuapp.com/upload');

//   // Step 2: Upload a file from your project folder
//   await page.locator('input[type="file"]').setInputFiles('tests/data/sample.pdf');

//   // Step 3: Click the upload button
//   await page.locator('input[type="submit"]').click();

//   // Step 4: Verify upload success
//   await expect(page.locator('#uploaded-files')).toHaveText('sample.pdf');
// });

// test('Upload a file from directory', async ({ page }) => {
//   // Step 1: Navigate to a demo upload page
//   await page.goto('https://the-internet.herokuapp.com/upload');

//   // Step 2: Build the file path using Node's path module
//   const filePath = path.join(__dirname, '../TestData/Puneeth.jpg');

//   // Step 3: Upload the file
//   await page.locator('input[type="file"]').setInputFiles(filePath);

//   // Step 4: Click the upload button
//   await page.locator('input[type="submit"]').click();

//   // Step 5: Verify upload success
//   await expect(page.locator('#uploaded-files')).toHaveText('sample.pdf');
