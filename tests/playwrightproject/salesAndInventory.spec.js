import{test,expect}from "@playwright/test"
import login from "../../PageObjectModel/SAN POM/login.page.js"
import home from "../../PageObjectModel/SAN POM/home.page.js"
import employee from "../../PageObjectModel/SAN POM/employee.page.js"
import supplier from "../../PageObjectModel/SAN POM/supplier.page.js"
import product from "../../PageObjectModel/SAN POM/product.paeg.js"
import inventory from "../../PageObjectModel/SAN POM/inventory.page.js"


import testdata from "../../testData/SAN/saleAndINventorFT.json"
import data from "../../testData/SAN/saleandinventoryST.json"
import tdata from "../../testData/SAN/saleandinventoryIT.json"
import values from "../../testData/SAN/saleAndInventoryproduct.json"

//Smoke Testing--------------------------------------------------------------------------------------------------------------------
//click on url sales and inventory login page should be displayed
test("SAN ST",async({page})=>{
    let url = data.url
    await page.goto(url)
    await page.waitForTimeout(4000)
    await expect(page).toHaveTitle("Sales And Inventory")
//Enter valid cedentials and click on logon button, sales and inventory dashboard should be displayed
    let loginpage = new login(page)
    let username = data.username
    let password = data.password
    await loginpage.usernameTF.fill(username)
    await loginpage.passwordTF.fill(password)
    await loginpage.loginButton.click()
    await expect(page).toHaveTitle("Sales and Inventory System")
})



//functional testing--------------------------------------------------------------------------------------------
//to verify that username textfield should accept valid input
//to verify that password textfield should accept valid input

test("SAN FT",async({page})=>{
   
    let loginpage= new login(page)
for(let key in testdata){
    for(let data of testdata[key]){

      await page.goto(data.url)
      //await page.setDefaultTimeout(40000)
      await loginpage.usernameTF.fill(data.username)
      await loginpage.passwordTF.fill(data.password)
      await loginpage.loginButton.click()
      await page.waitForTimeout(5000)
      let title = await page.title()
      if(title=="Sales and Inventory System"){
        console.log("valid credentials")
        }else{
            console.log("invalid credintials")
        }
    }
}
})

//Integration Testing
//login as admin, click on empolyee button enter all the deatils and click on save,
//click on supplier button enter all the details of the supplier and click on save, click on product button, in the drop down check whether
// added supplier is present or notand enter all the details and then click on save.
// click on inventory button and in the search textfiled search for the product that has been added, check whether
// the added product is present or not.
 test.only("SAN IT",async({page})=>{
    let random = Math.floor(Math.random() * 100) + 1;
    let url = tdata.url
    let username = tdata.username
    let password = tdata.password
    let firstname = tdata.firstname
    let lastname = tdata.lastname
    let email1 = tdata.email
    let email = random+email1
    let phone1 = tdata.phone
    let phone = random+phone1
    let hiredTF = tdata.hireddate
    let companyname1 = data.compname
    let companyname = random+companyname1
    let phoneTF = data.phone

    let prodcode1 = values.productcode
    let prodcode = prodcode1+random
    let name1 = values.name
    let pname = name1+random
    let description = values.descrption
    let quantity = values.quantity
    let onhand = values.onhand
    let price = values.price

    let loginpage = new login(page)
    let homepage = new home(page)
    let employeepage = new employee(page)
    let supplierpage = new supplier(page)
    let productpage = new product(page)
    let inventorypage = new inventory(page)

    await page.goto(url)
    await loginpage.usernameTF.fill(username)
    await loginpage.passwordTF.fill(password)
    await loginpage.loginButton.click()
    await homepage.employeeButton.click()
    await page.waitForTimeout(4000)
    await employeepage.employeeAddBtn.click()
    await employeepage.firstnameTF.fill(firstname)
    await employeepage.lastnameTF.fill(lastname)
    await employeepage.genderDP.selectOption({value:"Male"})
    await employeepage.emailTF.fill(email)
    await employeepage.phoneTF.fill(phone)
    await employeepage.selctJobDP.selectOption({value:"2"})
    await employeepage.hiredTF.fill(hiredTF)
    await employeepage.selectProvinanceDP.selectOption("Abra")
    await employeepage.selectCityDP.selectOption("Bangued")
    await employeepage.saveButton.click()

    await homepage.supplierButton.click()
    await supplierpage.supllierAddButton.click()
    await supplierpage.companynmaeTF.fill(companyname)
    await supplierpage.selectProvinanceDP.selectOption("Abra")
    await supplierpage.selectCityDP.selectOption("Bangued")
    await supplierpage.phoneTF.fill(phone1)
    await supplierpage.savebutton.click()

    await homepage.productButton.click()
    await productpage.productAddButton.click()
    await productpage.productCodeTF.fill(prodcode)
    await productpage.prodNameTF.fill(pname)
    await productpage.descriptionTF.fill(description)
    await productpage.quantityTF.fill(quantity)
    await productpage.onhandTF.fill(onhand)
    await productpage.priceTF.fill(price)
    await productpage.selectCatagoreyDP.selectOption({value:"9"})
    await productpage.selectSupplierDP.selectOption(companyname)
    await page.waitForTimeout(3000)
    await expect(productpage.selectSupplierDP).toContainText(companyname)
    await page.waitForTimeout(3000)
    //assertion
     await productpage.datestockin.click()
    await productpage.datestockin.type("10-05-1995")
    await productpage.savebutton.click()
    await page.waitForTimeout(3000)

    await homepage.inventoryButton.click()
    await inventorypage.searchTF.fill(pname)
    await page.waitForTimeout(3000)
    await expect(inventorypage.searchTF).toContainText(pname)
    await page.waitForTimeout(3000)
    //assertion
    
    


 })



