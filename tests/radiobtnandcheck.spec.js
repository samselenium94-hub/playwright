
import{test,expect}from "@playwright/test"
test("radiobutns",async({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
    // await page.locator('//input[@id="attended"]').click()
    // await expect(await page.locator('//input[@id="attended"]')).toBeChecked();
    // await page.waitForTimeout(2000)

    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.locator("//input[@id='domain_a']").check()
    await page.waitForTimeout(3000)
    await expect(await page.locator("//input[@id='domain_a']")).toBeChecked()
    await page.locator("//input[@id='domain_a']").uncheck()
    await page.waitForTimeout(3000)
    await expect(await page.locator("//input[@id='domain_a']").isChecked()).toBeFalsy()
    await page.waitForTimeout(3000)
})
