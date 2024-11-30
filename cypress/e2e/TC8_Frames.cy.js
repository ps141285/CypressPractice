import 'cypress-iframe'
describe("Handling Frames",()=>{

    it("Testing Frame-Approch 1",()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")

       const iframe= cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should("be.visible")
        .then(cy.wrap);

        iframe.type("manoj bhadoriya {ctrl+a}");
        cy.get('[aria-label="Bold"]').click();

    } )

    it("Testing IFrame-Approch 2",()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")
       
        cy.getiframe("#mce_0_ifr").type("manoj bhadoriya {ctrl+a}")
        cy.get('[aria-label="Bold"]').click();

    } )
    it("Testing IFrame-Approch 3",()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")
       
        cy.frameLoaded("#mce_0_ifr");

        cy.iframe("#mce_0_ifr").type("welcome  {ctrl+a}")

        cy.get('[aria-label="Bold"]').click();


        

    } )
})