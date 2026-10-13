import { test, expect } from '@playwright/test'
import { saucehomepage } from '../pages/saucehomepage.js'
import data from '../TestData/datadrivensauceHP.json' with { type: "json" }

for (const productData of data) {

    test(`sauce homepage ${productData.prdname}`, async ({ page }) => {

        const Saucehomepage = new saucehomepage(page)

        await page.goto(productData.url)

        // Validate product name
        const product = await Saucehomepage.getproduct(productData.prdname)

        await expect(product)
            .toHaveText(productData.prdname)

        // Validate product price
        await expect(product.locator("..").locator("h4"))
            .toHaveText(productData.prodprice.trim())

        // Get cart count before adding
        const beforeCartCount =
            await Saucehomepage.getcartcount()

        // Click product
        await Saucehomepage.clickproduct(productData.prdname)

        // Validate product image
        await expect(Saucehomepage.viewprodimg)
            .toBeVisible()

        // Select product and Add to Cart
        await Saucehomepage.selectprdandclickprd(
            productData.prdname
        )

       // Wait until cart count increases
    await expect.poll(() => Saucehomepage.getcartcount()).toBe(beforeCartCount + 1)
    })
}