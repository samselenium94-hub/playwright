class employee{
    constructor(page){
        this.employeeAddBtn = page.locator("(//a[@class='btn btn-primary bg-gradient-primary'])[1]")
        this.firstnameTF = page.locator("(//input[@name='firstname'])[3]")
        this.lastnameTF = page.locator("(//input[@name='lastname'])[3]")
        this.genderDP = page.locator("(//select[@name='gender'])[1]")
        this.phoneTF = page.locator("(//input[@name='phonenumber'])[3]")
        this.emailTF = page.locator("(//input[@name='email'])[1]")
        this.selctJobDP=page.locator("//select[@name='jobs']")
        this.hiredTF = page.locator("#FromDate")
        this.selectProvinanceDP = page.locator("select#province")
        this.selectCityDP = page.locator("select#city")
        this.saveButton = page.locator("(//button[@class='btn btn-success'])[3]")
    }
}
export default employee