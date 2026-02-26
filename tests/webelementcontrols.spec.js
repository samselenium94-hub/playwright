import{test}from "@playwright/test"
test("webelements",async({page})=>{
    await page.goto("https://www.flipkart.com/")
 //   await page.getByRole("textbox", { name: 'Search for Products, Brands' }).fill("laptops")
    await page.locator("//input[@name='q']").first().fill("laptops")
    await page.locator("//button[@class='XFwMiH']").first().click()
    //-------------------atributrvalue----------------------------------
    // let atri=await page.locator(".RG5Slk").first().getAttribute('class')
    // console.log(atri)
    //------------------------allTextContents()-------------------------------------
    //await page.locator(".RG5Slk").first().waitFor()
    // let i=await page.locator(".RG5Slk").allTextContents()
    // console.log(i)
    //-----------------------------all()------------------------------------------------
    // await page.locator(".RG5Slk").first().waitFor()
    // let a=await page.locator(".RG5Slk").all()
    // console.log(a)
    //  await page.pause(4000)
    //-------------------------------isvisible()---------------------------------------
    // await page.locator(".RG5Slk").first().waitFor()
    // let v=await page.locator(".RG5Slk").first().isVisible()
    // console.log(v)
    // //-----------------------------isEnabled()-------------------------------------------
    // await page.locator(".RG5Slk").first().waitFor()
    // let e =await page.locator(".RG5Slk").first().isEnabled()
    // console.log(e)
    // //----------------------------isdisplayed()------------------------------------------
    // await page.locator(".RG5Slk").first().waitFor()
    // let d= await page.locator(".RG5Slk").first().isDisabled()
    // console.log(d)
    //------------------------------isEditable()-------------------------------------
    // await page.locator(".RG5Slk").first().waitFor()
    // let e1= await page.locator(".RG5Slk").first().isEditable()
    // console.log(e1)
    await page.locator("//input[@class='MocAag']").fill("core i5")
    await page.locator("//label[@class='BMOCJ3 StZidb']/descendant::div[.='Core i5']").click()
    await page.locator("//label[@class='BMOCJ3 StZidb']/descendant::div[.='Core i5']").waitFor()
    let check=await page.locator("//label[@class='BMOCJ3 StZidb']/descendant::div[.='Core i5']").isChecked()
    console.log(check)
})