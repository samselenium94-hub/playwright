
import{test}from "@playwright/test"
import fs from "fs"
let datafile = fs.readFileSync("C:/Users/Nithin/Desktop/playwright/testData/singlesetdata.json")
let data = JSON.parse(datafile)
// test("get data from json",async({page})=>{
//    data.forEach(d=>{
//     console.log(d.greet)
//    })
//})
   test("getjsondata",async({page})=>{
      await page.goto(data.url)
      await page.locator("input#username").fill(data.username)
      await page.locator("input#password").fill(data.password)
      await page.getByRole("button",{name:"Submit"}).click()
      await page.waitForTimeout(3000)
     // await page.waitForTimeout(3000)
     let title = await page.title()
     console.log(title)
     if(title=="Logged In Successfully | Practice Test Automation"){
      console.log("valid cred")
     }else{
      console.log("invalid cred")
     }

})
test.only("multiple set data",async({page})=>{
   for(let d of data){
      let url=d.url
      let username=d.username
      let password=d.password
       await page.goto(url)
      await page.locator("input#username").fill(username)
      await page.locator("input#password").fill(password)
      await page.getByRole("button",{name:"Submit"}).click()
     // await page.waitForTimeout(3000)
     // await page.waitForTimeout(3000)
     let title = await page.title()
     //console.log(title)
     if(title=="Logged In Successfully | Practice Test Automation"){
      console.log("valid cred")
     }else{
      console.log("invalid cred")
     }

   }
})

