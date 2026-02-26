import{test}from "@playwright/test"
import landin from "../PageObjectModel/landin.page.js"
import signup from "../PageObjectModel/signup.page.js"
import signin from "../PageObjectModel/signin.page.js"
import home from "../PageObjectModel/home.page.js"
import createticket from "../PageObjectModel/createticket.page.js" 
import testdata from "../testData/e2e1.json"

test("",async({page})=>{
    let random = Math.floor(Math.random() * 10) + 1;
    let url = testdata.url
    let name = testdata.name
    let email = testdata.email
    let email1=random+email
    let password = testdata.password
    let repassword = testdata.repassword
    let contact = testdata.contact
    let subject = testdata.sub
    let discription = testdata.des
    

    page.on("dialogd",async(dialog)=>{
        console.log(await dialog.message())
        await dialog.accept()
    })
    let landingpage = new landin(page)
    let signuppage = new signup(page)
    let signinpage = new signin(page)
    let homepage = new home(page)
    let createticketpage = new createticket(page)
    //launch url
    await page.goto(url)
    await landingpage.signuplink.click()
    //pass name of the textfiled 
    await signuppage.nameTF.fill(name)
    //email TF
    await signuppage.emailTF.fill(email1)
    //password TF
    await signuppage.passwordTF.fill(password)
    //re-password TF
    await signuppage.repasswordTF.fill(repassword)
    //contact TF
    await signuppage.contactTF.fill(contact)
    //gnderradiobutton
    await signuppage.maleRadio.click()
    //submit button
    await signuppage.submitButton.click()
    //alert -get the message

    //e-mail TF
    await signinpage.emailTF.fill(email1)
    //password TF
    await signinpage.passwordTF.fill(password)
    //click on login
    await signinpage.loginButton.click()
    //create ticket -click
    await homepage.createTicketLink.click()
    //add subject to subject TF
    await createticketpage.subjectTF.fill(subject)
    //select an option from task type dropdown
    await createticketpage.tTDropdown.selectOption({value:"ot1"})
    //priority dropdown
    await createticketpage.pDropdown.selectOption({value:"important"})
    //disc textarea
    await createticketpage.discriptionTextarea.fill(discription)
    //send button
    await createticketpage.sendButton.click()
    //alert --mess--accept

    //click on view ticket
    await homepage.viewTicketLink.click()
     //take ss
    await page.screenshot({path:"./screenshot/ticketscreenshot.png"})
   
})