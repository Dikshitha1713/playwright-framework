import {test, expect} from '@playwright/test';

test("mouse operations", async({page})=>{
const website=("https://the-internet.herokuapp.com/?utm_source=chatgpt.com")
await page.goto(website)
console.log(website)

await page.getByText("Context Menu", {exact:true}).click()
await expect(page).toHaveURL("https://the-internet.herokuapp.com/context_menu")

await page.locator("#hot-spot").click({button:"right"})

await page.goto (website)
await page.getByText("JavaScript Alerts",{exact:true}).click()
await expect(page).toHaveURL("https://the-internet.herokuapp.com/javascript_alerts")

await page.getByText("Click for JS Alert", {exact:true}).click({button:'right'})
await page.getByText("Click for JS Prompt", {exact:true}).click({button:'right'})

await page.goto (website)
await page.getByText("Drag and Drop", {exact:true}).click()
await expect(page).toHaveURL("https://the-internet.herokuapp.com/drag_and_drop")

const sourceelement = page.locator("#column-a")
const targetelement = page.locator("#column-b")

await sourceelement.dragTo(targetelement)
await expect(page.getByText("A", {exact:true})).toContainText("A")

await page.goto(website)
await page.getByText("Hovers", {exact:true}).click()
await expect(page).toHaveURL("https://the-internet.herokuapp.com/hovers")

await page.getByRole("img",{name: "User Avatar"}).first().hover()
await expect(page.getByText("name: user1", {exact:true})).toHaveText("name: user1")

await page.getByRole('img',{name:"User Avatar"}).last().hover()
const name3 = await page.getByText("name: user3",{exact:true}).textContent()
console.log(name3)

await page.goto(website)
await page.getByText("Typos", {exact:true}).click()
await expect(page.locator("//div[@class='example'] //p").first()).toContainText("demonstrates")

await page.goto(website)
await page.getByText("A/B Testing",{exact:true}).click()
const textdisplay =  await page.locator("h3").textContent()
console.log(textdisplay)

await page.goto(website)
await page.getByText("Checkboxes",{exact:true}).click()
await expect(page.getByText("Checkboxes",{exact:true})).toHaveText("Checkboxes")
await page.getByRole('checkbox').nth(1).uncheck()
await expect(page.getByRole('checkbox').nth(1)).not.toBeChecked()
const checkbox1=  page.getByRole('checkbox').nth(0)
await checkbox1.check()
await expect(page.getByRole('checkbox').nth(0)).toBeChecked()


await page.goto(website)
await page.getByText("Inputs",{exact:true}).click()
await expect(page.getByText("Number",{exact:true})).toBeVisible()
await page.getByRole('spinbutton').fill("123456")
await expect(page.getByRole("spinbutton")).toHaveValue("123456")
const num = await page.getByRole('spinbutton').inputValue()
console.log(num)

await page.goto(website)
await page.getByText("Dynamic Controls",{exact:true}).click()
await page.getByRole("checkbox").check()
await page.getByRole("button", {name:"Remove"}).click()
const checkboxremove = await page.getByText("It's gone!",{exact:true}).textContent()
console.log(checkboxremove)
await page.getByRole("button",{name:"Add"}).click()
const checkboxadd = await page.getByText("It's back!").textContent()
console.log(checkboxadd)
await page.getByRole("checkbox").check()
await page.getByRole('heading',{name:"Enable/disable"}).isVisible()
await page.getByRole("button",{name:"Enable"}).click()
await page.getByText("It's enabled!",{exact:true}).textContent()
await page.getByRole("button",{name:"Disable"}).click()
await expect(page.getByText("It's disabled!",{exact:true})).toHaveText("It's disabled!")

await page.goto(website)
await page.getByText("Dropdown",{exact:true}).click()
const DD= page.locator("select#dropdown")
await DD.selectOption("1")
await DD.selectOption({index:2})

await page.goto("https://testautomationpractice.blogspot.com/")
console.log(await page.getByRole("heading", {name:"Double Click"}).textContent())
await page.getByRole("button", {name:"Copy Text"}).dblclick()
await expect(page.locator("#field2")).toHaveValue("Hello World!")

})



