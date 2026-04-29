const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    viewportWidth: 1366,
    viewportHeight: 768,
    baseUrl: "https://www.saojoaofarmacias.com.br/",

    setupNodeEvents(on, config) {
      
    },
  },
});
