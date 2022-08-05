/// <reference types="Cypress" />
import LoginPage from "../../support/pageObjects/LoginPage"
import "cypress-iframe"
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const loginPage = new LoginPage()


Given("I open nopCommerce login Page", () => {
    cy.visit(Cypress.env("url"))
})

When("I enter valid email and password", function(){
    loginPage.getEmail().clear().type(this.data.adminEmail) 
    loginPage.getPassword().clear().type(this.data.adminPassword)
}) //Email and password are from example.json file 

And("click 'Remember Me' and 'Login in' button", function(){
    loginPage.getRememberMe().click()
    // cy.pause()
    loginPage.getLogInButton().click()
})    

Then("Dasboard page should display", function(){
    loginPage.getUrl().should("include", "admin")
    loginPage.getPageTitle().should("include", "Dashboard")
})

//Valid email and Invalid Password
When("I enter valid email and invalid password", function(dataTable){
    loginPage.getEmail().clear().type(dataTable.rawTable[1][0]) 
    loginPage.getPassword().clear().type(dataTable.rawTable[1][1])
})

And("I submit", function(){
    loginPage.getLogInButton().click()
})

Then("I should get an error message", function(){
    // loginPage.getErrorMessage().should("have.text", "Login was unsuccessful. Please correct the errors and try again. The credentials provided are incorrect")
    loginPage.getPasswordErrorMessage().then(function(element) 
        {
            const actualText = element.text()
            expect(actualText.includes("unsuccessful")).to.be.true
        })
})

//Invalid email and valid Password
When("I enter invalid email as {string} and valid password as {string}", (Email, Password) => {
    loginPage.getEmail().clear().type(Email) 
    loginPage.getPassword().clear().type(Password)
})
//   

Then("I should get an email error message", function(){
    loginPage.getEmailErrorMessage().should("have.text", "Wrong email")
}) 

//Blank Login
And("I leave email and password fields blank", function(){
    loginPage.getEmail().clear()
    loginPage.getPassword().clear()
})

Then("Error message displays", function(){
    loginPage.getBlankLoginErrorMessage().should("have.text", "Please enter your email")
})