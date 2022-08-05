class LoginPage {
     
    getEmail() 
    {
         return cy.get('input[type="email"]')
    }
    getPassword() 
    {
         return cy.get('input[name="Password"]')
    }
    getRememberMe()
    {
          return cy.get('input[value="true"]')
    }
    getLogInButton() 
    {
         return cy.get('.login-button')
    }

    getUrl() 
    {
         return cy.url()
    }

     getPageTitle() 
    {
         return cy.title()
    }
    getPasswordErrorMessage()
    {
     return cy.get(".message-error")
    }
    getEmailErrorMessage()
    {
     return cy.contains("Wrong email")
    }
    getBlankLoginErrorMessage()
    {
     return cy.get("#Email-error")
    }
}

export default LoginPage;  