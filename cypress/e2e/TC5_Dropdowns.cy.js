///<reference types="cypress" />

describe("Handle Dropdowns", ()=>{
 
    it("Testing Dropdowns", ()=>{
       
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country").select("Italy")
        .should("have.value","Italy")

       })
    it("Testing Bootstrap Dropdowns", ()=>{
       
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container").click()

        cy.get('.select2-search__field').type("Italy").type('{enter}')

        cy.get("#select2-billing_country-container")
        .should("have.text","Italy")

        

       })

       it("Testing Autosuggest Dropdowns", ()=>{
       
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("Delhi")

        cy.get(".suggestion-title").contains("Delhi University").click()
     })

     it("Testing Dynamic Autosuggest Dropdowns", ()=>{
       
        cy.visit("https://www.google.com/")

        cy.get("textarea[name='q']").type("cypress automation")

        cy.wait(5000)

        cy.get("div.wM6W7d>span").should("have.length",13)

        cy.get("div.wM6W7d>span").each( ($el,index,$list)=>{
            if($el.text()=="cypress automation interview questions")
            {
                cy.wrap($el).click()
            }
        })
        cy.get("textarea[name='q']").should("have.value","cypress automation interview questions")
      
     })









})