class supplier{
    constructor(page){
        this.supllierAddButton = page.locator("//a[@data-target='#supplierModal']")
        this.companynmaeTF = page.locator("//input[@name='companyname']")
        this.selectProvinanceDP = page.locator("(//select[@id='province'])[1]")
        this.selectCityDP = page.locator("(//select[@id='city'])[1]")
        this.phoneTF = page.locator("(//input[@name='phonenumber'])[1]")
        this.savebutton = page.locator("(//i[@class='fa fa-check fa-fw'])[1]")
    }
}
export default supplier