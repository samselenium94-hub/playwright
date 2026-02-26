
import{test}from "@playwright/test"
import excel from "exceljs"
import path from "node:path"

test("read single data",async({page})=>{
        let book = new excel.Workbook()
         await book.xlsx.readFile(path.join(__dirname,"../testData/exceldata.xlsx"))
        let sheet=await book.getWorksheet("Sheet1")
        let data=await sheet.getRow(1).getCell(1).toString()
        console.log(data)
})

test("read multiple data",async({page})=>{
        let book = await new excel.Workbook()
        await book.xlsx.readFile(path.join(__dirname,"../testData/exceldata.xlsx"))
        let sheet = await book.getWorksheet("Sheet2")
        for(let row=1; row<=sheet.actualRowCount; row++){
                for(let col = 1; col<=sheet.actualColumnCount; col++){
                        let data = sheet.getRow(row).getCell(col).toString()
                        console.log(data)
                }
        }      
})

test.only("read data to script",async({page})=>{
        let book = await new excel.Workbook()
        await book.xlsx.readFile(path.join(__dirname,"../testData/exceldata.xlsx"))
        let sheet = book.getWorksheet("Sheet1")
        let alldata = []
        for(let r=1; r<=sheet.actualRowCount; r++){
                let row = sheet.getRow(r)
                let url = row.getCell(1).toString()
                let usn = row.getCell(2).toString()
                let pwd = row.getCell(3).toString()
                alldata.push({url:url, usn:usn, pwd:pwd})
        }
       // console.log(alldata)
       for(let data of alldata){
            await page.goto(data.url)
            let p2 = page.waitForEvent("popup")
            await page.locator("//a[text()='Bakery Shop Management System']").click()
           // await page.waitForTimeout(3000)
            let page2 = await p2
            await page2.locator("#username").fill(data.usn)
            await page2.locator("#password").fill(data.pwd)
            await page2.waitForTimeout(3000)
       }

})