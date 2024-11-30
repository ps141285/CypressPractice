import Login from "../PageObjects/LoginPage";
describe("POM",()=>{

    it("LoginTest",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        
           
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();

        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.wait(3000);
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("have.text","PIM");
    })
    it.only("LoginTest",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
         const ln=new Login();
         ln.setUserName("Admin");
         ln.setPassword("admin123")
         ln.clickOnSubmit();
         ln.varifyLogin();     
           
        
    })
})