class signup{
    constructor(page){
        this.nameTF=page.locator("#name")
        this.emailTF=page.locator("#email")
        this.passwordTF=page.locator("#password")
        this.repasswordTF=page.locator("#cpassword")
        this.contactTF=page.locator("#txtpassword")
        this.maleRadio=page.locator("//input[@name='gender' and @value='m']")
        this.femaleRadio=page.locator("//input[@name='gender' and @value='f']")
        this.submitButton=page.getByRole("button",{name:"Submit"})
    }
}
export default signup