class createticket{
    constructor(page){
        this.subjectTF=page.locator("#subject")
        this.tTDropdown=page.locator("//select[@name='tasktype']")
        this.pDropdown=page.locator("//select[@name='priority']")
        this.discriptionTextarea=page.locator("//textarea[@name='description']")
        this.sendButton=page.locator("//input[@name='send']")
    }
}
export default createticket