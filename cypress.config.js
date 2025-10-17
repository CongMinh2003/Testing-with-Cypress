// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });


// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'http://en.qnu.edu.vn',
//     env: {
//       MY_VAR: 'some value'
//     }
//   }
// })


const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://en.qnu.edu.vn',
    chromeWebSecurity: false,  // bỏ chặn bảo mật
    ignoreHttpsErrors: true,   // bỏ qua SSL lỗi
    pageLoadTimeout: 120000,   // chờ tối đa 2 phút
    setupNodeEvents(on, config) {
      // events
    }
  },
})
