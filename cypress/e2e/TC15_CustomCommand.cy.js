describe("custom command",()=>{
     
    it("handling links",()=>{

        cy.visit("https://tutorialsninja.com/demo/");
        //this is direct approch
        // cy.get("div[id='content'] div:nth-child(1) div:nth-child(1) div:nth-child(2) h4:nth-child(1) a:nth-child(1)").click();
       

        //custom command use =======>check function in command.js 
        cy.clicklink("MacBook")
        cy.get("div[id='content'] h1").should("have.text","MacBook");
    })

    it.skip("overwriting exsisting commands",()=>{

        cy.visit("https://tutorialsninja.com/demo/");

        cy.clicklink("MacBook");
        cy.get("div[id='content'] h1").should("have.text","MACBOOK");
    })

    it("Login Custom Command",()=>{

        cy.visit("https://tutorialsninja.com/demo/");

        cy.clicklink("My Account");
        cy.clicklink("Login");
   
        cy.loginapp("manojpratap21@gmail.com","manoj@123");
        cy.get("h2:nth-child(1)").should("have.text","My Account");
      

      });
});