describe('CSSLocators', () =>
    {
   it('csslocators', () => {

       cy.visit("https://tutorialsninja.com/demo/")

       cy.get("[placeholder='Search']").type("mac")

       cy.get("button[class='btn btn-default btn-lg']").click()

       cy.get("div[id='content'] h2").contains("Products meeting the search criteria")

       
       

   })
  
 })

