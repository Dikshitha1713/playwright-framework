import type { Locator, Page } from "@playwright/test";

export class saucehomepage{
    page:Page
    products : Locator
    prodname : Locator
    prodprice : Locator
    viewprodimg : Locator
    productlist : Locator
    addtocart : Locator
    mycartcount : Locator

    constructor(page:Page){
        this.page = page
        this.products = this.page.locator(".four ")
        this.prodname = this.products.locator("h3")
        this.prodprice = this.products.locator("h4")
        this.viewprodimg = this.page.getByAltText("Product Image")
        this.productlist = this.page.locator("#product-select-option-0")
        this.addtocart = this.page.locator(".add-to-cart")
        this.mycartcount = this.page.getByText("My Cart ").first()
    }


  async getproduct(prdname: string): Promise<Locator> {
    return this.products.filter({ hasText: prdname }).locator("h3")
}  

  async clickproduct(prdname :string){
     await this.products.last().waitFor()
    const prodcounts = await this.products.count()

    for(let i=0; i<prodcounts; i++){
        const prodtext = await this.products.nth(i).locator("h3").textContent()
        if(prodtext === prdname){
          await this.products.nth(i).locator("h3").click()
          break;
        }
    }
  }

  // async tapproduct(){
  //    await this.prodname.click()
  //   } 
    
  // async slectprdandclickprd(prdname : string){
  //   await this.productlist.selectOption({value:prdname})
  //   await this.addtocart.click()
  // }

  async selectprdandclickprd(prdname: string) {

    const dropdowns = this.page.locator("select")
    const dropdownCount = await dropdowns.count()

    for (let i = 0; i < dropdownCount; i++) {

        const dropdown = dropdowns.nth(i)

        const options = await dropdown
            .locator("option")
            .allTextContents()

        const productOption = options.some(
            option => option.trim() === prdname.trim()
        )

        if (productOption) {

            await dropdown.selectOption({
                label: prdname
            })

            break
        }
    }

    await this.addtocart.click()
}

  // async getcartcount():Promise<number>{
  //   const cartcount = await this.mycartcount.textContent()
  //   return Number(cartcount?.trim())
  // }

  async getcartcount(): Promise<number> {

    const cartText = await this.mycartcount.textContent()

    const match = cartText?.match(/\((\d+)\)/)

    return match ? Number(match[1]) : 0
}

}