
import{test,expect}from "@playwright/test"
test("mouse actions",async({page})=>{
    //---------clickactions-------------------------------------------------------------
    // await page.goto("https://www.amazon.in/")
    // await page.locator("//input[@id='twotabsearchtextbox']").fill("shoes")
    // await page.waitForTimeout(2000)
    // await page.locator("#nav-search-submit-button").click({button:"middle"})
    // await page.waitForTimeout(2000)
//-------------click and hold-------------------------------------------------------------
    // await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
    // await page.locator("//div[@id='circle']").hover()
    // await page.mouse.down()
    // await page.waitForTimeout(2000)
    // await page.mouse.up()
    // await page.waitForTimeout(2000)
 //----------------------------------forceaction or disabled elements-------------------
//     await page.goto("https://demoapps.qspiders.com/ui/radio/disabled?sublist=2")
//   //  await page.locator("//input[@id='attended_ab']").dispatchEvent('click')
//     await page.locator("//input[@id='attended_ab']").click({force:true})
//    // await expect(page.locator("//input[@id='attended_ab']")).toBeChecked()
//    await expect(await page.locator("//input[@id='attended_ab']").isChecked()).toBeTruthy()
//     await page.waitForTimeout(2000)
//--------------------------------------drag and drop----------------------------------
//    await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
//    await page.locator('//div[@class="cursor-move bg-orange-600 w-36 h-11 p-3 text-white absolute react-draggable"]').hover()
//    await page.mouse.down()
//    await page.mouse.move(300,500)
//    await page.waitForTimeout(2000)
 //------------------------scroll-------------------------------------
    //  await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    //  await page.waitForTimeout(2000)
    //  await page.mouse.wheel(400,400)
    //  await page.waitForTimeout(2000)
    //  await page.locator('(//h3[@class="font-bold text-lg py-2"])[14]').scrollIntoViewIfNeeded()
    //  await page.waitForTimeout(2000)
  //---------------------------drag and drop------------------------------------------
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
//     await page.locator("//div[text()='Mobile Charger']").hover()
//     await page.mouse.down()
    
//    // await page.locator('//div[text()="Mobile Accessories"]/parent::div').hover()
//     let dim=await page.locator('//div[text()="Mobile Accessories"]/parent::div').boundingBox()
//     await page.mouse.move(dim.x,dim.y)
//     console.log(dim.x,dim.y)
//     await page.mouse.up()
//     await page.waitForTimeout(4000)

    let source = await page.locator("//div[text()='Mobile Charger']")
    let target = await page.locator('//div[text()="Mobile Accessories"]/parent::div')
    await source.dragTo(target)
    await page.waitForTimeout(3000)
})