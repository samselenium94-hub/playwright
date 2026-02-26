import{test}from "@playwright/test"
import loginpage from "../PageObjectModel/lloginpage.page.js"
import logindata from "../testData/logindata.json"
test("",async({page})=>{
    let Lpage =  new loginpage(page)
    let url=logindata.url
    let usn=logindata.usn
    let pwd=logindata.pwd
    
    await page.goto(url)
    await Lpage.usernameTextfiled.fill(usn)
    await Lpage.passwordTextfield.fill(pwd)
    await Lpage.submitbutton.click()

})