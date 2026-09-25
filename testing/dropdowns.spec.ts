import { test, expect } from "@playwright/test";
test("dropdown handling using single option", async({page})=> {
await page.goto("https://practice.expandtesting.com/dropdown")
const DD = page.locator("#country")
await DD.selectOption("AO")
await DD.selectOption({value:"BS"})
await DD.selectOption({label:"Kenya"})
await DD.selectOption({index:46})
await page.waitForTimeout(2000)

//  const options = DD.locator("option");
//   const count = await options.count();
//   console.log("Total options:", count);

//     for (let i = 0; i < count; i++) {
//        const optionText = await options.nth(i).textContent();
//          console.log(optionText);

//         if (optionText?.trim() === "American Samoa") {
//             console.log("Country found:", optionText);
//             await DD.selectOption({ label: "American Samoa" });
//             break;
//         }
//     }
// await expect(DD).toHaveValue("AS");

const heading1=await page.getByText("Elements per Page:",{exact:true}).textContent()
console.log(heading1)
const DOB = page.locator("#elementsPerPageSelect")
await DOB.selectOption({index:2})

const heading = await page.getByRole("heading", {name:"Simple dropdown"}).innerText()
console.log(heading)
await page.locator("#dropdown").click()
await page.locator("#dropdown").selectOption({label:"Option 2"})

})

test("multiselcet dropdown", async function({page}){
    await page.goto("https://demoqa.com/select-menu?")
    await page.getByText("Standard multi select",{exact:true}).isVisible()
    await page.locator("#cars").click()
    await page.locator("#cars").selectOption(["volvo","opel"])
    await page.locator("#cars").selectOption([{value:"audi"},{label:"Saab"}])
    await page.waitForTimeout(2000)

    await page.getByText("Old Style Select Menu",{exact:true}).isVisible()
    await page.locator("#oldSelectMenu").click()
    await page.locator("#oldSelectMenu").selectOption("7")
})

test("mutiselect using non select tag", async ({page})=>{
   await page.goto("https://demoqa.com/select-menu?")
   await page.getByText("Multiselect drop down",{exact:true}).isVisible()
   await page.locator("div.css-13cymwt-control").last().click()
   await page.locator("#react-select-4-option-0").click()
   await page.locator("#react-select-4-option-3").click()

   const tag = await page.getByText("Select One",{exact:true}).textContent()
   console.log(tag)
   await page.locator("div.css-13cymwt-control").nth(1).click()
   await page.locator("#react-select-3-option-0-0").click()

   const tag1 = await page.getByText("Select Value",{exact:true}).textContent()
   console.log(tag1)
   await page.locator("div.css-13cymwt-control").first().click()
   await page.locator("#react-select-2-option-3").click()
})

