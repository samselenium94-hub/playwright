
import{test,expect}from "@playwright/test"
test("handle new tab",async({browser})=>{
        let context=await browser.newContext(
            // {httpCredentials:{
            //     username:'admin',
            //     password:'admin'
            // }}
        )

        // https:admin:admn@//basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/
        let page = await context.newPage()
        await page.goto("https://www.flipkart.com/")
        await page.locator("(//input[@class='nw1UBF v1zwn25'])[1]").fill("jackets")
        await page.keyboard.press("Enter")
        let [win] = await Promise.all([
            page.waitForEvent("popup"),
            page.locator("(//img[@class='MZeksS'])[1]").click()
        ])
        await win.locator("//div[text()='Add to cart']").click()
        await expect(await win.locator("//div[text()='Add to cart']")).toBeVisible()
        await expect(win.url()).not.toBe("https://www.flipkart.com/")
        await page.waitForTimeout(3000)
        
})
        test.only("windowhandles",async({browser})=>{
        let context=await browser.newContext()
        let page = await context.newPage()
        await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0")
        let [window] = await Promise.all([
            page.waitForEvent('popup'),
            page.locator("(//button[text()='view more'])[1]").click()])
        await page.waitForTimeout(2000) 
        let title1=await window.title()
        await expect(title1).not.toBe(page.title())
        await window.locator("//button[text()='Add to Cart']").click() 
      //  await page.locator('//h1[@class="text-3xl font-bold mb-2"]')
        await page.waitForTimeout(3000) 
        await window.locator("//section[@class='relative']/ *[local-name()='svg']").click()   
        await expect(window.locator('//h3[@class="font-medium"]')).toContainText("Luxury")
    
})