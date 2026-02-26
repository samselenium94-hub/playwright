import{test,expect}from "@playwright/test"
test("getbymethods",async({page})=>{
//     await page.goto("https://demo.nopcommerce.com/login")
//     await page.getByLabel("Email:",{exact:true}).fill("nn@gmail.com")

//    // ------------------placeholder-----------------------------------------
//    await page.getByPlaceholder("Search store").fill("mobiles")

//    // ----------------------------text---------------------------------------
//    await page.getByText("Electronics").click()

//    //----------------------------alttext--------------------------------
//   // await page.getByAltText("nopCommerce demo store").click()
   //------------------------title-----------------------------------
   await page.goto("https://demo.nopcommerce.com/electronics")
  // await page.getByTitle("Show products in category Camera & photo").first().click()

  //;[l] await page.getByRole("button",{name:'Books'}).click()
   await page.waitForTimeout(2000)
   await expect(page.getByRole("button",{name:'books'})).toBeVisible()


})