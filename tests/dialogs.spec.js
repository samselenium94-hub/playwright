
import{test,expect}from "@playwright/test"
test("dialog",async({page})=>{
    //------------------validation of dialogs--------------------------------------------------------------------------
     await page.goto("https://testautomationpractice.blogspot.com/")
    // await page.getByRole("button",{name:"Simple Alert"}).click()
    // await page.waitForTimeout(2000)
    // await page.getByRole("button",{name:"Confirmation Alert"}).click()
    // await page.waitForTimeout(2000)
    // await expect(page.locator("#demo")).toContainText("Cancel")
    // await page.getByRole("button",{name:"Prompt Alert"}).click()
    // await page.waitForTimeout(2000)
    // await expect(page.locator("#demo")).toContainText("cancelled ")
//---------------------------------------------------app1-----------------------------------------------------------------
    // page.on("dialogs",async(dialog)=>{dialog.accept("Ram")})
    // await page.getByRole("button",{name:"Simple Alert"}).click()
    // await page.getByRole("button",{name:"Confirmation Alert"}).click()
    // await page.getByRole("button",{name:"Prompt Alert"}).click()
//--------------------------------------------------------------------------------------

    page.on("dialogs",async(dialog)=>{
        if(dialog.type()=="alert"){
        console.log(await dialog.message())
        await dialog.accept()
    }else if(dialog.type()=='confirm'){
        await dialog.accept()
    }else if(dialog.type()=='prompt'){
        await dialog.accept('ram')
    }
})
await page.getByRole("button",{name:"Simple Alert"}).click()
    await page.waitForTimeout(3000)
    await page.getByRole("button",{name:"Confirmation Alert"}).click()
    await page.waitForTimeout(2000)
  //  await expect(page.locator("#demo")).toContainText("OK")
    await page.getByRole("button",{name:"Prompt Alert"}).click()
    await page.waitForTimeout(3000)
   // await expect(await page.locator("#demo").textContent()).toBe("Hello ram! How are you today?")
    

})


