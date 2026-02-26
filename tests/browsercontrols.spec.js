
import{chromium, test}from "@playwright/test"
test("browser controls",async({browser})=>{
    
     let context=await browser.newContext()   
     let page=await context.newPage()
   
     let coockie=await context.cookies() 
     await page.goto("https://www.flipkart.com/")
     let time =new Date().getTime()
     await page.screenshot({path:`screenshot/${time}.png`})

     let size =await page.viewportSize()
     await page.setViewportSize({width:1000,height:500})
     let size1 =await page.viewportSize()
     let title=await page.title()
     let url=await page.url()

     console.log(coockie);
     console.log(size)
     console.log(size1)
     console.log(title)
     console.log(url)
})

test("sample",({page})=>{
  console.log("sample test is executed");
  
})