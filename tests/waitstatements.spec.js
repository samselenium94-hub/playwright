import{test,expect}from "@playwright/test"
test("wait statements",async({page})=>{
    
    // await page.goto("https://www.amazon.in/")
    // await page.locator("//input[@id='twotabsearchtextbox']").fill("jackets")
    // await page.locator("//div[@role='row']",{hasText:' for boys'}).waitFor({state:'visible'})
    // let j=await page.locator("//div[@role='row']").allTextContents()
    // console.log(j)

//     await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
//     await page.fill("//textarea[@class='w-full h-40 p-2 border rounded-lg mb-4']","Im downloading")
//    let [downloadfile]=await Promise.all([
//      page.waitForEvent('download'),
//      page.click("#downloadButton") ])
//     console.log(await downloadfile.path())

    await page.goto("https://www.amazon.com")
    //await page.locator("//input[@id='twotabsearchtextbox']").fill("asus laptops")
    await expect(page.locator("//span[text()='& Orders']")).toContainText("& Or")
    
   //await page.waitForSelector("#glow-ingress-line2",{timeout:2000})
   await expect(page.locator("//span[text()='& Orders']")).toContainClass("nav-line-2")
   await expect(page.locator("//span[text()='& Orders']")).toHaveCount(1)
  // await page.locator("#glow-ingress-line2").click()
   
     
      
    
})