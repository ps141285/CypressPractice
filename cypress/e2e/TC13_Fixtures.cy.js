describe("My Test Suit",()=>{

    let userdata;
    before(()=>{
        cy.fixture("orangrhrm.json").then((data)=>{
            userdata=data;
        })
    })
    
     it("Handle data from fixture",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        
           
        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);
        cy.get("button[type='submit']").click();

        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.wait(3000);
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("have.text",userdata.expected);

     }) 
       

       
})