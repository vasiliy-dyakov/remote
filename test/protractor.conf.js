exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js',
    'protractor-screenshots.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  chromeOnly: true,

  baseUrl: 'http://localhost:4000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
