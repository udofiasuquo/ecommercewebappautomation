/// <reference types="Cypress" />
import LoginPage from "../../support/pageObjects/LoginPage"
import SearchProductPage from "../../support/pageObjects/SearchProductPage"

before(() => {
  // root-level hook
  // runs once before all tests
  cy.fixture("example").then(function(data) 
  {
      this.data = data 
  }) //This is how to get cypress to recognize test data in 'example.json' file  
}) 

const loginPage = new LoginPage()
const searchProductPage = new SearchProductPage()

describe("Login", function(){

  it("Verify that user can launch url successfully", function(){
    cy.visit(Cypress.env("url"))
  })
    
  it("Verify that user can log in successfully", function(){
    cy.visit(Cypress.env("url"))
    loginPage.getEmail().clear().type(this.data.adminEmail)
    loginPage.getPassword().clear().type(this.data.adminPassword)
    loginPage.getRememberMe().click()
    // cy.pause()
    loginPage.getLogInButton().click()
    cy.url().should("include", "admin")
  })
  
  it("Verify that user can search product By filling details", function(){
    cy.visit(Cypress.env("url"))
    loginPage.getEmail().clear().type(this.data.adminEmail)
    loginPage.getPassword().clear().type(this.data.adminPassword)
    loginPage.getRememberMe().click()
    // cy.pause()
    loginPage.getLogInButton().click()
    searchProductPage.getCatalogue().first().click().invoke("show")
    cy.get('.fa-angle-left').eq(0).click() 
    searchProductPage.getProductList().scrollIntoView().click()
    cy.title().should("include", "Products")

    // searchProductPage.getProductName().type(this.data.productName)
     cy.get("#SearchProductName").type("HP Spectre XT Pro UltraBook")


     
    // searchProductPage.getProductCategory().select("1").should("have.value", "1") 
     cy.get("select").first().select("Computers").should("have.value", "1") // when there are more than one "select' element on a page 
     cy.get('#SearchIncludeSubCategories').scrollIntoView().click()
    
     cy.get("#SearchManufacturerId").select("HP").should("have.value", "2")
     cy.get("#SearchVendorId").select("Vendor 1").should("have.value", "1")
     cy.get("#SearchWarehouseId").select("2").should("have.value", "2")
     cy.get("#SearchProductTypeId").select("10").should("have.value", "10")
     cy.get("#SearchPublishedId").select("1").should("have.value", "1")
    cy.get("#search-products").click()
    }) 

  it("Verify that user can search product by SKU", function(){
    cy.visit(Cypress.env("url"))
    loginPage.getEmail().clear().type(this.data.adminEmail)
    loginPage.getPassword().clear().type(this.data.adminPassword)
    loginPage.getRememberMe().click()
    // cy.pause()
    loginPage.getLogInButton().click()
    searchProductPage.getCatalogue().first().click().invoke("show")
    cy.get('.fa-angle-left').eq(0).scrollIntoView().click() 
    searchProductPage.getProductList().scrollIntoView().click()
    cy.get("#GoDirectlyToSku").scrollIntoView().type("COMP_CUST")
    cy.get("#go-to-product-by-sku").click() 
    })
})