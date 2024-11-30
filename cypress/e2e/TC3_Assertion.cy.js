


describe("Assertion Demo",()=>{
  
    it("Implicit Assertions",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //usin should , and 

       /*  cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm')
       */
        /* cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm') */

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','greenhrm')

        cy.title().should('include','Orange')//orange is contain or not 
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible')//logo is visible or not 
        .and('exist')

        cy.xpath("//a").should('have.length',5)// no of links 

        cy.get("input[placeholder='Username']").type("Admin")//providing value 

        cy.get("input[placeholder='Username']").should("have.value","Admin")//check that provided value 

        cy.get("input[placeholder='Password']").type("admin123")

        cy.get("input[placeholder='Password']").should("have.value","admin123")


    })

    it("Explicit Assertions",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName="efrat hubara";

        cy.get(".oxd-userdropdown-name").then((x)=>{

            let actName=x.text()

             //BDD Style
              expect(actName).to.equal(expName) 
              //expect(actName).to.not.equal(expName) 
            
              
              //TDD Style
              assert.equal(actName,expName)
              //assert.notEqual(actName,expName)


            
            })



    })




})