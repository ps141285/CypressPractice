///<reference types="cypress" />
describe("Handling Tabs",()=>{

    it("testing Tabs-Approch 1",()=>{

        cy.visit("https://the-internet.herokuapp.com/windows");//parant tab 

        cy.get(".example>a").invoke('removeAttr',"target").click();//clicking on link

        cy.url().should("include","https://the-internet.herokuapp.com/windows/new");

        cy.wait(5000)

        //perform operation

        cy.go('back');



    })
    it("testing Tabs-Approch 2",()=>{

        cy.visit("https://the-internet.herokuapp.com/windows");//parant tab 

        cy.get(".example>a").then((e)=>{

            let url=e.prop("href")

            cy.visit(url)
        })
        cy.url().should("include","https://the-internet.herokuapp.com/windows/new");

        cy.wait(5000)

        //this approch working only for same domain not for diff domain

        cy.go('back');






    })
})