beforeEach(() => {
    cy.fixture("example").then(function(data) 
  {
      this.data = data 
  }) //This is how to get cypress to recognize test data in 'example.json' file  
    
})