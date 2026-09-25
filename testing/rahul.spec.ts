import{test, expect} from '@playwright/test'

test("Practice" ,async function({page}){
await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
const logo =await page.getByRole('img', {name:'logoClass'}).isVisible()
console.log(logo)


//await page.locator("img.logoClass").isVisible()
const heading = await page.getByRole("heading",{name:"Practice Page"}).textContent()
console.log(heading)


//await page.locator("//h1[text()='Practice Page']").textContent()
//await expect(page.locator("//h1[text()='Practice Page']")).toHaveText("Practice Page")
await page.locator("//legend[text() ='Radio Button Example']").textContent()
await expect(page.locator("//legend[text() ='Radio Button Example']")).toContainText("Radio Button")
const radiobtn = page.locator('[value="radio1"]')
//const radiobtn = page.getByRole("radio",{name:"Radio1"}) y not this
await radiobtn.click()
await expect(radiobtn).toBeChecked()
const radio3=  page.locator('[value="radio3"]')
//const radio3 = page.getByRole('radio', { name: 'Radio3' });
//const radio3 = page.getByLabel("Radio3")   
await radio3.check()
await expect(radio3).toBeChecked()

//await page.getByRole('radio', {name:'Radio2'}).check()
await page.getByLabel(" Radio2").click()

const text= await page.locator("//legend[text() ='Checkbox Example']").textContent()
console.log(text)

await expect(page.locator("//legend[text() ='Checkbox Example']")).toContainText("Checkbox")

await page.locator("#checkBoxOption1").check()
await expect(page.locator("#checkBoxOption1")).toBeChecked()

await page.locator("#checkBoxOption1").uncheck()
await page.locator("#checkBoxOption3").check()
await expect(page.locator("#checkBoxOption3")).toBeChecked()

const example = await page.getByText("Suggession Class Example",{exact:true}).textContent()
console.log(example)

await page.getByPlaceholder("Type to Select Countries").fill("india")
//await page.locator("#ui-id-45").click()
})




