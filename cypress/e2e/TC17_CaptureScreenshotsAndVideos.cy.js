describe("MySuit",()=>{

    it("Capture Screenshots and video Test",()=>{

        cy.visit("https://tutorialsninja.com/demo/");

        /* cy.screenshot("homepage");
        cy.wait(5000);
        cy.get("div[id='logo'] h1 a").screenshot('logo') */

        //Automatically capture screenshots and video on failure the test cases 

        cy.get("a[href='https://tutorialsninja.com/demo/index.php?route=product/category&path=33']").click();
        cy.get("div[id='content'] h2").should("have.text","Tablets");


    })
})