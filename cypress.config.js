// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'https://en.qnu.edu.vn',
//     chromeWebSecurity: false,  // bỏ chặn bảo mật
//     ignoreHttpsErrors: true,   // bỏ qua SSL lỗi
//     pageLoadTimeout: 120000,   // chờ tối đa 2 phút
//     setupNodeEvents(on, config) {
//       // events
//     }
//   },
// })


const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://en.qnu.edu.vn',

    // Tùy chọn Cypress
    chromeWebSecurity: false,
    ignoreHttpsErrors: true,
    pageLoadTimeout: 120000,
    video: true,                     // bật video record (tuỳ chọn)
    screenshotOnRunFailure: true,    // tự chụp khi fail

    // <<--- CHỈ GỌI setupNodeEvents MỘT LẦN --->
    setupNodeEvents(on, config) {
      // kích hoạt Allure writer
      allureWriter(on, config);

      // (Nếu cần thêm event khác, thêm ở đây)
      // Ví dụ lấy env từ process: config.env.MY_VAR = process.env.MY_VAR;

      return config;
    }
  },

  env: {
    allure: true,
    allureResultsPath: 'allure-results' // nơi Allure lưu kết quả
  }
});


// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'https://en.qnu.edu.vn',
//     setupNodeEvents(on, config) {
//       require('@shelex/cypress-allure-plugin')(on, config);
//       return config;
//     },
//     supportFile: 'cypress/support/e2e.js'
//   }
// });