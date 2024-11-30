// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<reference types="cypress" />
///<reference types="cypress-xpath" />

import '@4tw/cypress-drag-drop';


Cypress.Commands.add('getiframe',(iframe)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should("be.visible")
    .then(cy.wrap);
})

//custom command for clicking on link using label

Cypress.Commands.add("clicklink",(label)=>{
    cy.get('a').contains(label).click({force: true});
})

//overwrite the command

/*  Cypress.Commands.overwrite("contains",(originalFn,subject,filter,text,options={})=>{
    //determine if the filter argument was passed
    if(typeof text==='object')
    {
        options=text
        text=filter
        filter=undefined
    }
    options.matchCase=false

    return originalFn(subject,filter,text,options)
}) */

    //custom command for login

    Cypress.Commands.add("loginapp",(email,password)=>{
        
        cy.get("#input-email").type(email);
        cy.get("#input-password").type(password);
        cy.get("input[value='Login']").click();
      

    })