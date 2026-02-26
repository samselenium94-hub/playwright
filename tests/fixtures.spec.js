
import{test} from "@playwright/test"
test("fixtures",async({browserName,browser})=>{
    console.log(browserName); 
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://www.amazon.in/")

})

