//hooks in cypress
//before
//after
//beforeeach
//aftereach

describe("MyTestSuit",()=>{
 
    before(()=>{

        cy.log("**** launch application ***")
    })
    after(()=>{

        cy.log("**** Closed Application ****")
    })
    beforeEach(()=>{

        cy.log("*** Login ***")
    })

    afterEach(()=>{

        cy.log("**** Logout ****")
    })

    it("search",()=>{
        
        cy.log("**** searching product ***")

    })

    it("Advanced search",()=>{
        
        cy.log("*** Adv search for product ***")

    })

    it("Product List",()=>{
         
        cy.log("*** get Product List ***")

    })
})