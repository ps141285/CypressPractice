class Login
{
    txt_userName="input[placeholder='Username']"
    txt_password="input[placeholder='Password']"
    btn_login='button[type="submit"]'
    btn_PIM=':nth-child(2) > .oxd-main-menu-item'
    txt_msg='.oxd-topbar-header-breadcrumb > .oxd-text'



    setUserName(username)
    {
        cy.get(this.txt_userName).type(username);
    }

    setPassword(password)
    {
        cy.get(this.txt_password).type(password);
    }

    clickOnSubmit()
    {
        cy.get(this.btn_login).click()
    }

    varifyLogin()
    {
        cy.get(this.btn_PIM).click();
        cy.get(this.txt_msg).should("have.text","PIM");
    }

   
}
export default Login;