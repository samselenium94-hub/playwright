class login{
    constructor(page){
        this.usernameTF=page.locator("//input[@name='user']")
        this.passwordTF=page.locator("//input[@name='password']")
        this.loginButton=page.getByRole("button",{name:"Login"})
    }
}
export default login