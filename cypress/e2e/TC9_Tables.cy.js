///<reference types="cypress" />
describe("Handling Tables",()=>{

beforeEach("Login",()=>{
   
    cy.visit("https://demo.opencart.com/admin/index.php",{ failOnStatusCode: false })
    cy.get("#input-username").type("demo")
    cy.get("#input-password").type("demo")
    cy.get("button[type='submit']").click()
    //customer main menu
    cy.get("#menu-customer>a").click()
    cy.get("#menu-customer>ul>li:first-child").click()//customer child item 
})
 it("check numbers row and colum",()=>{

    cy.get("table[class='table table-bordered table-hover']>tbody>tr").should("have.length","10")
    cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should("have.length","7")

})

it("check cell data from specific row and colum",()=>{

    cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
    .contains("minhkhoi@gmail.com");

})
it("Read all the row and colum data in the first page ",()=>{

    cy.get("table[class='table table-bordered table-hover']>tbody>tr")
    .each(($row,index,$rows)=>{

        cy.wrap($row).within(()=>{

            cy.get("td").each(($col,index,$cols)=>{
                cy.log($col.text());
            })
        })
    })

})

it("Pagination",()=>{

    //find total number of pages
     let totalpages ;
    cy.get(".col-sm-6.text-end").then((e)=>{
        let mytext=e.text(); //Showing 1 to 10 of 11599 (1160 Pages)
       totalpages= mytext.substring( mytext.indexOf("(")+1, mytext.indexOf("pages")-1);
       cy.log("total number of pages in table =========>"+totalpages);
    }) 
    
    //let totalpages=5;

   /*  for(let p=1;p<=totalpages;p++)
    {
        if(totalpages>1)
        {
            cy.log("Active page is ======>"+p)
            cy.get("ul[class='pagination]>li:nth-child("+p+")").click();
            cy.wait(5000)

            cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row,index,$rows)=>{
                cy.wrap($row).within()=>{
                    cy.get("td:nth-child(3)").then((e)=>{
                        cy.log(e.text())
                    })
                }
            })
        }
    } */
}) 


})