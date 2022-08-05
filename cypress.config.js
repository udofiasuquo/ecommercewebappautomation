const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 100000,
  reporter: 'mochawesome',
  env: {
    url: 'https://admin-demo.nopcommerce.com/login',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/integration/*{.feature,.js}',
  },
});
