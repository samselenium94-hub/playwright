class landin{
    constructor(page){
        this.usernameTF=page.locator("//input[@name='user_name']")
        this.passwordTF=page.locator("//input[@name='user_password']")
        this.loginbutton=page.locator("#submitButton")
    }
}
export default landin 