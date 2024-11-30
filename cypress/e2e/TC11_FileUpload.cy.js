import 'cypress-file-upload'
describe("Handling File Upload",()=>{

it("Single File Upload",()=>{
  
    cy.visit('http://the-internet.herokuapp.com/upload');
    //cy.get("#file-upload").attachFile("QA Team Lead .pdf");
    cy.get("#file-upload").attachFile({filePath:'QA Team Lead .pdf',fileName:'test1'});//if you wanna change file name 
    
    cy.get("#file-submit").click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should("have.text","File Uploaded!");

})

it("File Uploading using Drag and Drop",()=>{
  
    cy.visit('http://the-internet.herokuapp.com/upload');
    cy.get("#drag-drop-upload").attachFile("QA Team Lead .pdf",{subjectType:"drag-n-drop"});
    cy.wait(5000)
    cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span").contains("QA Team Lead .pdf")

})

it("Multiple File Uploading",()=>{
  
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
    cy.get("#filesToUpload").attachFile(["Mohit Jangra-CV-2022-07-19.pdf","QA Team Lead .pdf"]);

    cy.wait(5000)
    cy.get(':nth-child(6) > strong').contains("Files You Selected:");
})

it("File Upload-shadow DOM",()=>{
  
    cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
    cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile("QA Team Lead .pdf")
    cy.wait(5000)
    cy.get(".smart-item-name",{includeShadowDom:true}).contains("QA Team Lead .pdf")
})



})