import{test,expect}from "@playwright/test"
test("dynamic",async({page})=>{
    // await page.goto("https://www.amazon.in/")
    // await page.locator("//input[@id='twotabsearchtextbox']").fill("iphone17")
    // await page.keyboard.press("Enter")
    // await page.pause()
    // await page.goto("https://www.makemytrip.global/?cc=in")
    // await page.locator('//span[@class="commonModal__close"]').click()
    // await page.waitForTimeout(3000)
    // await page.locator('//span[@class="lbl_input appendBottom10" and text()="Departure"]').click()
    // await page.locator('//div[@class="DayPicker-Month"]/descendant::div[text()="March 2026"]/ancestor::div[@class="DayPicker-Month"]/descendant::p[text()="9"]').click()
    // await expect(page.locator('//div[@class="DayPicker-Month"]/descendant::div[text()="March 2026"]/ancestor::div[@class="DayPicker-Month"]/descendant::p[text()="9"]')).toHaveText("9")
    // await page.pause()
    let count=0
    await page.goto("https://www.amazon.in/s?k=shoes&crid=133BVX1Z5IS77&sprefix=%2Caps%2C348&ref=nb_sb_ss_recent_2_0_recent")
    await page.locator('//div[@class="sg-col-inner"]/descendant::div[@class="sg-col-inner"]/descendant::span[@class="a-size-base-plus a-color-base"]').first().waitFor()
    let alltext =await page.locator('//div[@class="sg-col-inner"]/descendant::div[@class="sg-col-inner"]/descendant::span[@class="a-size-base-plus a-color-base"]').allTextContents()
    //  for(let text of alltext){
    //        // let texts=text.textContent()
    //         if(count<=5){
    //         console.log(text);               
    //         } 
    //         count++       
            
    //  }
     
})