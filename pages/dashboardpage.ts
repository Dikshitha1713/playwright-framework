import type { Locator, Page } from "@playwright/test";
import {expect} from "@playwright/test";

export class dashboardpage{
    page :Page
    products :Locator
    addtocartsuccessmsg :Locator
    viewproductname : Locator
    viewproductprice :Locator

    constructor(page:Page){
    this.page = page
    this.products = this.page.locator("div .card-body")
    this.addtocartsuccessmsg = this.page.locator("div .toast-container")
    this.viewproductname = this.page.locator("div .rtl-text h2")
    this.viewproductprice = this.page.locator("div .rtl-text h3")
    }

    async searchandaddproducttothecart(productname:string){
        await this.products.last().waitFor()
        const productscount = await this.products.count()

        for(let i=0; i<productscount; i++){
           const producttext = await this.products.nth(i).locator(" b").textContent()
           if(producttext === productname){
              await this.products.nth(i).locator("button").last().click()
              break;
           }
        }
    }

    async serachandvalidateproductdetailes(prodcutname:string, productprice:string){
        await this.products.last().waitFor()
        const productcount = await this.products.count()

        for(let i=0; i<productcount; i++){
            const producttext = await this.products.nth(i).locator("b").textContent()
            if(producttext === prodcutname){
              await this.products.nth(i).locator("button").first().click()
              break;
            }
        }
        
    }
   
}