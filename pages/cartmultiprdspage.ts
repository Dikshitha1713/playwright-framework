import type { Locator, Page } from "@playwright/test";

export class carmultiprdspage{
   page: Page
   products: Locator
   cart : Locator
   cartcount : Locator
   prdaddedtocartmsg : Locator
   viewproductname : Locator
   delete : Locator
   deletetheprdmsg : Locator
   continuebtn : Locator
   checkoutbtn : Locator

   constructor(page:Page){
    this.page = page
    this.products = this.page.locator("div.card-body")
    this.cart = this.page.locator('[routerlink="/dashboard/cart"]')
    this.cartcount = this.cart.locator("label")
    this.prdaddedtocartmsg = this.page.getByText("Product Added To Cart ", {exact:true}).last()
    this.viewproductname = this.page.locator("div .rtl-text h2")
    this.delete = this.page.locator("button.btn-danger")
    this.deletetheprdmsg = this.page.locator("div.toast-error")
    this.continuebtn = this.page.getByText("Continue Shopping", {exact:true})
    this.checkoutbtn = this.page.getByText("Checkout", {exact:true})
   }
   async addprods(productname:string){
    await this.products.last().waitFor()
    const prdcount = await this.products.count()

    for(let i=0; i<prdcount; i++){
       const prdtext = await this.products.nth(i).locator("b").textContent()
       if(prdtext === productname){
        await this.products.nth(i).locator("button").last().click()
        break;
       }
    }

   }
   async tapcart(){
    await this.cart.click()
   }
   
   async tapdelete(){
     await this.delete.click()
   }
   
   async tapcontinuebtn(){
      await this.continuebtn.click()
   }

   async tapcheckout(){
    await this.checkoutbtn.click()
   }
}