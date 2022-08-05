Feature: Search Product Functionality

    Background:
        Given I log in successfully


    Scenario:  Searching Product By Details
        When I open Product Page
        And I enter name of product as "HP Spectre XT Pro UltraBook"
        And I enter other product details
        Then click 'Search' button

    Scenario: Searching Product By SKU
        When I open Product Page
        And I Enter product SKU as "COMP_CUST" and Search
        Then Product Edit page displays
