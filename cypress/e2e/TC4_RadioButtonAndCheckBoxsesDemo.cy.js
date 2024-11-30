///<reference types="cypress" />

describe("check UI Elements",()=>{

it("checking Radio button",()=>{

     cy.visit("https://testautomationpractice.blogspot.com/")
     cy.get("input#male").should("be.visible")
     cy.get("input#female").should("be.visible")

     //selecting radio button
     cy.get("input#male").check().should("be.checked")
     cy.get("input#female").should("not.be.checked")


     cy.get("input#female").check().should("be.checked")
     cy.get("input#male").should("not.be.checked")



})

it("testing CheckBoxses",()=>{

    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get("input#monday").should("be.visible")
    //selecting single checkbox
    cy.get("input#monday").check().should("be.checked")
    //unselect the checkbox
    cy.get("input#monday").uncheck().should("not.be.checked")
    //selecting all the checkboxses
    cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")
    //unselecting all the checkboxses
    cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")
    //how to select single checkbox 
    cy.get("input.form-check-input[type='checkbox']").first().check().should("be.checked")//first checkbox
    cy.get("input.form-check-input[type='checkbox']").last().check().should("be.checked")//last check box


})




})