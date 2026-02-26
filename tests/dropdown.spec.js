
import{test,expect}from "@playwright/test"
test("dropdowns",async({page})=>{
    //-----------------------------standarddopdowns------------------------------------
    // await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    // await page.locator("//select[@id='select3']").selectOption({})
    // await page.waitForTimeout(3000)
//---------------------------------multioledropdowns-----------------------------------
    // await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    // await page.locator("//select[@id='select-multiple-native']").selectOption(["Fjallraven - Foldsac...","Mens Casual Premium ..."])
    // await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
    // await page.waitForTimeout(3000)
    //------------------------------------customdropdowns------------------------------
    // await page.goto("https://www.amazon.com/")
    // await page.locator("//input[@id='twotabsearchtextbox']").fill("shoes")
    // await page.keyboard.press('Enter')
    // await page.waitForTimeout(2000)
    // await page.locator('#a-autoid-0-announce').dispatchEvent("click")
    // await page.locator("//li[@class='a-dropdown-item a-declarative']").first().waitFor()
    // let drops=await page.locator("//li[@class='a-dropdown-item a-declarative']").all()
    // console.log(drops)
    // for(let options of drops){
    //     let text =await options.textContent()
    //     if(text.includes("Review")){
    //         await options.click()
    //         await page.waitForTimeout(3000)
    //     }
    // }
    // await page.locator("//a[text()='Price: High to Low']").click()
    // await page.waitForTimeout(3000)
//-------------------------------------------------------------------------------------------
    await page.goto("https://www.amazon.com/")
    await page.locator("//input[@id='twotabsearchtextbox']").fill("shoes")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
    await page.locator("#a-autoid-0-announce").click();
    await page.locator("//a[@class='a-dropdown-link']").first().waitFor()
    await page.locator("//a[@class='a-dropdown-link']").all()
    let text="Price: High to Low"
    await page.locator(`//a[@class='a-dropdown-link' and text()="${text}"]`).click()
    await page.waitForTimeout(3000)

    //-------------------------autosuggestionsdropdowns---------------------------------------------
    //  await page.goto("https://www.amazon.com/")
    //  await page.locator("//input[@id='twotabsearchtextbox']").fill("shoes")
    //  await page.waitForSelector("(//div[@class='s-suggestion-container'])[1]")
//    // await page.locator("//div[@class='s-suggestion-container']").first().waitFor()
//     let drops=await page.locator("//div[@class='s-suggestion-container']").all()
//     for(let dp of drops){
//         let text=await dp.textContent()
//         if(text.includes("for men")){
//             await dp.click()
//             break
//         }
//     }
//     await page.waitForTimeout(3000)
//----------------------------------------------------------------------------------------
    //  await page.keyboard.press("ArrowDown")
    //  await page.keyboard.press("Enter")
    //  await page.waitForTimeout(3000)

})