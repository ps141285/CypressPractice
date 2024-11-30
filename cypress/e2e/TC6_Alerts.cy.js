describe("Handling Alerts",() =>{

//1.java script alert
it('js Simple Alert',()=>{
    
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsAlert()']").click()

    cy.on('window:alert',(t)=>{

        expect(t).to.contains("I am a JS Alert");
    })
    cy.get("#result").should("have.text","You successfully clicked an alert")
  })

  it('js Confirmation Alert-using OK',()=>{
    
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()

    cy.on('window:alert',(t)=>{

        expect(t).to.contains("I am a JS Confirm");
    })
    //cypree autometically closed alert window by using ok button-default
    cy.get("#result").should("have.text","You clicked: Ok")

    
  })

  it('js Confirmation Alert-using CANCEL',()=>{
    
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()

    cy.on('window:alert',(t)=>{

        expect(t).to.contains("I am a JS Confirm");
    })
    cy.on("window:confirm",()=>false)

    
    cy.get("#result").should("have.text","You clicked: Cancel")

    
  })

  it('js Prompt Alert-using OK',()=>{
    
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.window().then((win=>{

        cy.stub(win,"prompt").returns("welcome");
    }))
    cy.get("button[onclick='jsPrompt()']").click();
    //cypress will automeically close prompt alert window using ok button by default 
    cy.on("window:confirm",()=>false)
    cy.get("#result").should("have.text","You entered: welcome")
   
    
  })
 
  it('js Authentication Alert',()=>{
    //first approch 
   /*  cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth:
                                                               {
                                                                username:"admin",
                                                                password:"admin"
                                                               }
                                                             });
        cy.get("div[class='example'] p").should("have.contain","Congratulations!")  */                                                    

    
    //second approch

    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    cy.get("div[class='example'] p").should("have.contain","Congratulations!")

  })
  



})