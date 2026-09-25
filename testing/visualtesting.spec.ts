import {test, expect} from '@playwright/test'
test("visual testing", async ({page})=>{
//   await page.goto("https://www.flightaware.com/")
//   await expect(await page.screenshot()).toMatchSnapshot("flight.png")

  await page.goto("https://www.amazon.in/s?i=beauty&rh=n%3A1355016031%2Cp_85%3A10440599031%2Cp_72%3A1318476031%2Cp_36%3A-49900%2Cp_n_g-101014971069111%3A206270883031&s=exact-aware-popularity-rank&dc&ds=v1%3Ap1WUtke0q1yRiqia%2FjdoS1fYvk3%2BpvOMKQvNseYSAfk&_encoding=UTF8&content-id=amzn1.sym.3de2aafc-38a2-44d5-9f11-25207ec3d7da&pd_rd_r=aae2a787-d3b0-45ca-b958-7a41ae021ee6&pd_rd_w=868th&pd_rd_wg=aZT1S&pf_rd_p=3de2aafc-38a2-44d5-9f11-25207ec3d7da&pf_rd_r=4P7R7872E4RC227HZC99&qid=1765283709&rnid=206270882031&ref=pd_hp_d_r_atf_unk")
  await expect(await page.screenshot()).toMatchSnapshot("dettol.png")
})