class product{
    constructor(page){
        this.productAddButton = page.locator("//a[@class='btn btn-primary bg-gradient-primary' and @data-target='#aModal']")
        this.productCodeTF = page.locator("//input[@name='prodcode']")
        this.prodNameTF = page.locator("//input[@name='name']")
        this.descriptionTF = page.locator("//textarea[@name='description']")
        this.quantityTF = page.locator("//input[@name='quantity']")
        this.onhandTF = page.locator("//input[@name='onhand']")
        this.priceTF = page.locator("//input[@name='price']")
        this.selectCatagoreyDP = page.locator("//select[@name='category']")
        this.selectSupplierDP = page.locator("//select[@name='supplier']")
        this.datestockin = page.locator("//input[@name='datestock']")
        this.savebutton = page.locator("(//button[@class='btn btn-success'])[5]")
    }
}
export default product