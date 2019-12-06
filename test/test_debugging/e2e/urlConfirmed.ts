import {
  browser
} from 'protractor';

    export default function f1(hyperlinkId, expectedUrl){

        //we want to click the hyperlink, and then do something afterwards
        return hyperlinkId.click().then(function () {
        
            //wrap browser wait functionality in a custom promise
            return new Promise(function (resolve) {
              
              //wait on the url to change to the expected value
              browser.driver.wait(function () {
        
                //only return true if url contains expected url
                return browser.driver.getCurrentUrl().then(function (url) {
                  return url == expectedUrl;
                });
              }, 10000).then(function () {
                //resolve the promise only once the browser has confrimed the url changed
                resolve();
              });
            });
          });      
}     
