// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {
  SpecReporter
} = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 10000,
    specs: [
    //  './test/e2e/**/udemy1.e2e-spec.ts'
      './test/e2e/mine/add_recipe.e2e-spec.ts'
    ],
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
    //    'mobileEmulation': {
    //      'deviceName': 'iPhone 8'
    //    },
      }
    },
      directConnect: true,
      baseUrl: 'http://localhost:4200/',
      framework: 'jasmine',
      SELENIUM_PROMISE_MANAGER: false,
      jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 15000,
        print: function () {}
      },
      onPrepare: async () => {
        require('ts-node').register({
          project: require('path').join(__dirname, './test/e2e/tsconfig.e2e.json')
        });
        jasmine.getEnv().addReporter(new SpecReporter({
          spec: {
            displayStacktrace: true
          }
        }));
      }
    };