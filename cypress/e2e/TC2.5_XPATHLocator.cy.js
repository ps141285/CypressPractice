

describe('XPATHLocators',() => {

  it('find number of product',()=>{

    cy.visit("https://tutorialsninja.com/demo/")
    cy.xpath("//body//div[@id='common-home']//div[@class='row']//div[@class='row']//div").should('have.length',20)
   
    })

    it('chained xpath',()=>{

        cy.visit("https://tutorialsninja.com/demo/")
        cy.xpath("//body//div[@id='common-home']//div[@class='row']//div[@class='row']").xpath('.//div').should('have.length',20)
       
     })
})