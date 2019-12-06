// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

/*global jasmine */
const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 110000,
  specs: [
    './e2e/contacts.e2e-spec.ts'
   // '/Users/jboiko/git5-learning/testing-angular-applications/chapter10/test_debugging/e2e/contact-list.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'https://testing-angular-applications.github.io/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 300000,
    print: function() {}
  },
  useAllAngular2AppRoots: true,

  SELENIUM_PROMISE_MANAGER: false, // Disable the Control Flow
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  onPrepare() {
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
