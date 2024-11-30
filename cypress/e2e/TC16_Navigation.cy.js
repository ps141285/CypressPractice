describe("MySuit",()=>{

    it("Navigation Test",()=>{

        cy.visit("https://tutorialsninja.com/demo/");
        cy.title().should('eq','Your Store')

        cy.get("a[href='https://tutorialsninja.com/demo/index.php?route=product/category&path=33']").click();
        cy.get("div[id='content'] h2").should("have.text","Cameras");

        cy.go('back')
        cy.title().should('eq','Your Store')

        cy.go('forward')
        cy.get("div[id='content'] h2").should("have.text","Cameras");

        cy.go(-1)
        cy.title().should('eq','Your Store')

        cy.go(1)
        cy.get("div[id='content'] h2").should("have.text","Cameras");

        cy.reload();


    })
})