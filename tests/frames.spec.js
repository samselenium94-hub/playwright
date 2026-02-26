
import{test,expect}from "@playwright/test"
test("frames",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    let frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    await frame1.locator('//input[@name="mytext1"]').fill("chichu")
    await expect(await frame1.locator('//input[@name="mytext1"]').inputValue()).toContain("chich")
   //------------framelocator------------------------------------------------------
   let frame2 =await page.frameLocator("//frame[@src='frame_2.html']").locator("//input[@name='mytext2']")
    frame2.fill
})