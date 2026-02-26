import{test,expect}from "@playwright/test"
test("locators",async({page})=>{
   await page.goto("https://practicetestautomation.com/practice-test-login/")
//    await page.locator("input#username").fill("student")
//    await page.locator("input#password").fill("Password123")
//    await page.locator(".btn").click()

    await page.locator("//input[@name='username']").fill("student")
   // await expect(page.locator("//input[@name='username']")).toBeEditable()
    await page.locator("//input[@type='password']").fill("Password123")
   await page.locator("//button[.='Submit']").click()
// await expect(page.locator("//button[.='Submit']")).toBeEditable()
//await expect(page.locator("//button[.='Submit']")).toBeFocused()
})