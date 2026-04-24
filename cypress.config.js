const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    baseUrl: "https://www.saojoaofarmacias.com.br/",

    setupNodeEvents(on, config) {
      
    },
  },
});
