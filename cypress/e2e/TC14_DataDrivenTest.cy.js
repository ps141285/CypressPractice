describe("DataDrivenTest",()=>{

    it("data driven test",()=>{
      
        cy.fixture("orangehrm2").then((data)=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
          
            data.forEach((userdata)=>{
                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get("input[placeholder='Password']").type(userdata.password);
                cy.get("button[type='submit']").click();

                if(userdata.username=="Admin" && userdata.password=="admin123")
                {
                    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
                    cy.wait(3000);
                    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("have.text",userdata.expected);
                    
                    cy.get('.oxd-userdropdown-name').click();// for logout
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();//pressing logout button
                }
                else 
                {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                    .should("have.text",userdata.expected)
                }
            })
        })


    })
})