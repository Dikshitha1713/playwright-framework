import{test,expect} from '@playwright/test'

test("website test", async({page})=>{
   await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.getByText("Register", {exact:true}).click()
    await page.getByPlaceholder("First Name").last().fill("Dikshitha")
    await page.getByPlaceholder("Last Name").last().fill("Nagaraj")
    await page.getByPlaceholder("email@example.com").last().fill("dikshitha1713@gmail.com")
    await page.getByPlaceholder("enter your number").fill("8495993483")
    //await page.locator('[formcontrolname="occupation"]').click()
    await page.locator('[formcontrolname="occupation"]').selectOption({label:"Engineer"})
    await page.getByRole('button', {name:"radio"}).last()
    await page.locator("#userPassword").fill("testing@123")
    await page.locator("#confirmPassword").fill("testing@123")
    //await page.getByRole("checkbox", {name:"checkbox"}).check()
    await page.locator('[formcontrolname="required"]').check()
    await page.locator('[value="Register"]').click()
    // await expect(page.getByText("Account Created Successfully")).toContainText("Account Created Successfully");
    // await page.locator('[class="btn btn-primary"]').click()
    // await expect(page.getByRole("heading", { name: "Log in" }))
    // .toHaveText("Log in");
})

test.only("login validation", async function({page}){
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.getByPlaceholder("email@example.com").fill("dikshitha1713@gmail.com")
    await page.getByPlaceholder("enter your passsword").fill("Testing@123")
    await page.locator("[type='submit']").click()
    await expect(page.locator('[routerlink="/dashboard/myorders"]')).toBeVisible()
    await page.locator('[class="fa fa-eye"] ').nth(1).click()
    await page.getByText("Add to Cart", {exact:true}).click()
    await page.locator('[routerlink="/dashboard/cart"]').click()
    await expect(page.locator('[class="itemNumber"]')).toContainText("#6960eac0c941646b7a8b3e68")
    await page.getByText("Buy Now", {exact:true}).click()
    await page.locator('[class="input txt"]').first().fill("12345")

    await page.getByPlaceholder("Select Country").fill("ind")//search text

    const options = page.locator('[class="ta-results list-group ng-star-inserted"] span')
  
    const count = await options.count()
    console.log("count of options", count)
   for(let i=0; i<count;i++){
    console.log(await options.nth(i).innerText())
    
   }
    for(let i =0; i<count; i++){
       const optiontext = await options.nth(i).innerText()
       if (optiontext === ' Indonesia'){
        await options.nth(i).click()
        break
       }
    }


    //const country = page.locator(".ta-results button").filter({ hasText: "India"});
    //await country.click();
    //await page.locator('[class="btnn action__submit ng-star-inserted"]').click()
    await page.getByText("Place Order ", {exact:true}).click()
    // await page.locator('[routerlink="/dashboard/myorders"]').click()
    // await page.getByRole('button', {name:'Delete'}).nth(2).click()
    // await page.getByRole('button',{name:'Go Back to Shop'}).click()
})