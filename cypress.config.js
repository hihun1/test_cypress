const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Cypress Test Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      reportDir: 'cypress/reports/html',
      overwrite: false,
      html: true,
      json: true
    }
  },
  env:
  {
    url: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
});
