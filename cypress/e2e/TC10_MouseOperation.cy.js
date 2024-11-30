
require("@4tw/cypress-drag-drop")
describe("Handle Mouse Operation",()=>{

    it("mouse hover",()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get("div[id='HTML3'] a:nth-child(1)").should('not.be.visible')

        cy.get('div.dropdown-content').invoke('show');
        cy.get("div[id='HTML3'] a:nth-child(1)").should('be.visible')
        cy.get("div[id='HTML3'] a:nth-child(2)").should('be.visible')
        
       
     })

     it("Right-Click",()=>{

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        //Approch 1
        cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu")
        cy.get('.context-menu-icon-copy > span').should("be.visible")
       
        //Approch 2
        cy.get(".context-menu-one.btn.btn-neutral").rightclick({ force: true });
        cy.get('.context-menu-icon-copy > span').should("be.visible")
       
    });

    it("Double-Click",()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("button[ondblclick='myFunction1()']").dblclick()
        cy.get('#field2').should("have.value","Hello World!")
   
       
    });

    it("Drag and Drop using plugin",()=>{

        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get('#box1').drag('#box101', { force: true });
    });

    it("Scroll Down the page",()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("div[id='HTML12'] h2[class='title']").scrollIntoView({duration:5000})
        cy.get("div[id='HTML12'] h2[class='title']").should("be.visible")

        cy.get("div[id='HTML15'] h2[class='title']").scrollIntoView({duration:4000})
        cy.get("div[id='HTML15'] h2[class='title']").should("be.visible")
    

        
        
    });
})