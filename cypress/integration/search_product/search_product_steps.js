/// <reference types="Cypress" />
import LoginPage from "../../support/pageObjects/LoginPage";
import SearchProductPage from "../../support/pageObjects/SearchProductPage"
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const searchProductPage = new SearchProductPage()
const loginPage = new LoginPage()

Given("I log in successfully", function(){
    cy.visit(Cypress.env("url"))
    loginPage.getEmail().clear().type(this.data.adminEmail) 
    loginPage.getPassword().clear().type(this.data.adminPassword)
    loginPage.getRememberMe().click()
    // cy.pause()
    loginPage.getLogInButton().click()
})

When("I open Product Page", () => {
    searchProductPage.getCatalogue().first().click().invoke("show")
    cy.get('.fa-angle-left').eq(0).click() 
    searchProductPage.getProductList().scrollIntoView().click()
})     

//Locator: you can use 'class' and 'value' together. E.g. cy.get('.product-card[value="Add to cart"]')
And("I enter name of product as {string}", (ProductName) => {
    searchProductPage.getProductName().type(ProductName)
})    
 
And("I enter other product details", function(){
    searchProductPage.getProductCategory().first().select("Computers").should("have.value", "1") // when there are more than one "select' element on a page 
     searchProductPage.getProductSubCategory().scrollIntoView().click()
     searchProductPage.getManufacturer().select("HP").should("have.value", "2")
    searchProductPage.getVendor().select("Vendor 1").should("have.value", "1")
     searchProductPage.getWarehouse().select("2").should("have.value", "2")
     searchProductPage.getProductType().select("10").should("have.value", "10")
    searchProductPage.getPublishedProduct().select("1").should("have.value", "1") 
})

Then("click 'Search' button", function(){
    searchProductPage.getProductSearchButton().click()
})

//Search by SKU
And("I Enter product SKU as {string} and Search", (ProductSKU) => {
    searchProductPage.getProductSKU().scrollIntoView().type(ProductSKU)
    searchProductPage.getSKUSearchButton().click()
})

Then("Product Edit page displays", function(){
    searchProductPage.getEditPageUrlTitle().should("include","Edit product details")
})



 