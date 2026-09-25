import type { Locator, Page } from "@playwright/test";

export class cartpage{
    page : Page
    cart :Locator
    cartcount : Locator
    products : Locator
    ordernumber: Locator
    finalproductprice : Locator
    productname: Locator
    totalamt :Locator
    checkout :Locator

    constructor(page:Page){
        this.page = page
        this.cart = this.page.locator('[routerlink="/dashboard/cart"]')
        this.cartcount = this.cart.locator("label")
        this.products = this.page.locator("li.items")
        this.ordernumber = this.page.locator("p.itemNumber")
        this.finalproductprice = this.page.locator("li.items .prodTotal p")
        this.productname = this.page.locator("li.items h3")
        this.totalamt = this.page.locator("li.totalRow").nth(1)
        this.checkout = this.page.getByText("Checkout", {exact:true})
    }

    async clickcartpage(){
        await this.cart.click()
    }

  async submitcheckout(){
    await this.checkout.click()
  }
}
