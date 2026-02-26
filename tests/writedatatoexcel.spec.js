
import{test}from "@playwright/test"
import excel from "exceljs"
import path from "node:path"

test("writedata",async({page})=>{
    let book = await new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../testData/exceldata.xlsx"))
    
})