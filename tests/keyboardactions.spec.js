
import{test,expect}from "@playwright/test"
test("keyboardactions",async({page})=>{
    //  await page.goto("https://demoapps.qspiders.com/ui/?scenario=1")
    //  //await page.locator("//input[@id='name']").type("nithin")
    //  //await page.type("//input[@id='name']","nithin")
    //  await page.locator("//input[@id='name']").click()
    // // await page.keyboard.type("nithin")
    // await page.keyboard.insertText("Nithin")
    //  await page.waitForTimeout(2000)
    //  await page.keyboard.down("Space")
    //  await page.keyboard.up("Space")
    //  await page.keyboard.down("R")
    //  await page.keyboard.up("R")
    //  await page.waitForTimeout(2000)
    //  await page.keyboard.press("Tab")
    //  await page.keyboard.type("nr@gmail.com")
    //  await page.keyboard.press("Control+A")
    //  await page.keyboard.press("Control+C")
    //  await page.keyboard.press("Tab")
    //  await page.keyboard.press("Control+V")
    //  await page.waitForTimeout(2000)
    await page.goto("https://www.amazon.in/")
   // await page.keyboard.press("ArrowDown")
   
        await page.keyboard.press('ArrowDown')
    for(let i=1; i<5; i++){
          await page.waitForTimeout(4000)
    await page.keyboard.press('ArrowDown')
    await page.waitForTimeout(4000)
    }
  
   
})