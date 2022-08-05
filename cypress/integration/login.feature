Feature: Login Functionality

    I want to login

    Background: 
        Given I open nopCommerce login Page

    @Regression
    Scenario: Login with Valid Credentials
         
        When I enter valid email and password
        And click 'Remember Me' and 'Login in' button
        Then Dasboard page should display
        

    Scenario: Login with valid email and invalid password
        
        When I enter valid email and invalid password
            | email               | password |
            | admin@yourstore.com | Male |
        And I submit
        Then I should get an error message

    Scenario: Login with invalid email and valid password
         
        When I enter invalid email as "adminyourstore.com" and valid password as "admin"
        And I submit
        Then I should get an email error message

    Scenario: Login with blank email and password fields
         
        And I leave email and password fields blank  
        And I submit
        Then Error message displays

     
       