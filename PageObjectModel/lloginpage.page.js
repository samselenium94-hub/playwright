class loginpage{
     constructor(page){
         this.usernameTextfiled=page.locator("input#username")
         this.passwordTextfield=page.locator("input#password")
         this.submitbutton=page.getByRole("button",{name:"Submit"})
     }
}
export default loginpage