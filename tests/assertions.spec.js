import{test, expect}from "@playwright/test"
import { execPath } from "node:process"
test("assertion",async({page})=>{
// await page.goto("https://www.amazon.in/",{waitUntil:"load"})
//  //await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More  - Amazon.in")
// //await expect(page).toHaveURL("https://www.amazon.in/")
// await page.waitForTimeout(3000)
//  //await page.locator('//input[@id="twotabsearchtextbox"]').click()
// //await page.waitForTimeout(3000)
// //await expect(page.locator('//input[@id="twotabsearchtextbox"]')).toBeFocused()
// //await expect(page.locator('//input[@id="twotabsearchtextbox"]')).toBeEmpty()
// await page.locator('//img[@alt="HENIJ 1 Pcs Extra Dense Furniture Table Wall Edge Protectors Foam Baby Safety Bumper Guard Protector, Table Protection..."]').scrollIntoViewIfNeeded()
// await expect(page.locator('//img[@alt="HENIJ 1 Pcs Extra Dense Furniture Table Wall Edge Protectors Foam Baby Safety Bumper Guard Protector, Table Protection..."]')).toBeInViewport()

let car = {

    modelname: 'maru@thi',
    colour : ['red', 'blue', 'white'],
    YOL:4580,
type : {
    petrol : '35km/ltr',
    diesel : '45km/ltr'
}

}

expect(car.modelname).toEqual(expect.any(String))
expect(car.YOL).toEqual(expect.anything())
expect(car.colour).toEqual(expect.arrayContaining(['blue','red']))
expect(car.modelname).toEqual(expect.stringContaining('@'))
expect(car.type).toEqual(expect.objectContaining({petrol:expect.any(String)}))










})
