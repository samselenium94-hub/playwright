import{test}from "@playwright/test"
import landin from "../PageObjectModel/POM 1/landing.page"
import home from "../PageObjectModel/POM 1/home.page"
import troubletickets from "../PageObjectModel/POM 1/troubletickets.page"

import data from "../testData/POM1/e2e.2.json"
test("pom1",async({page})=>{
    let url = data.url
    let username = data.username
    let password = data.password

    let landingpage=new landin(page)
    let homepage=new home(page)
    let trouleticketspage=new troubletickets(page)
    //launch url
    await page.goto(url)
    //username tf
    await landingpage.usernameTF.fill(username)
     //password tf
    await landingpage.passwordTF.fill(password)
    //login --click
    await landingpage.loginbutton.click()

    await homepage.troubleTButton.click()
    await trouleticketspage.createbutton.click()

    

   

})