class home{
    constructor(page){
        this.customerButton = page.locator("//span[text()='Customer']")
        this.employeeButton = page.locator("//span[text()='Employee']")
        this.productButton = page.locator("//span[text()='Product']")
        this.inventoryButton = page.locator("//span[text()='Inventory']")
        this.transactionButton = page.locator("//span[text()='Transaction']")
        this.supplierButton = page.locator("//span[text()='Supplier']")
        this.accountButton = page.locator("//span[text()='Accounts']")
    }
}
export default home