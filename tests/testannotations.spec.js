import {test}from "@playwright/test"
test("annotations",async({page,browserName})=>{
    test.skip(browserName==="firefox")
    console.log("annotaion 1")
})
test("annotations2",async({page})=>{
    console.log("annotaion 2")
})
test("annotations3",async({page})=>{
    await page.goto("https://www.amazon.in/")
})
test("annotations4",async({page})=>{
    test.setTimeout(3000)
    console.log("annotaion 4")
})
test("annotations5",async({page})=>{
    test.slow()
    console.log("annotaion 5")
})