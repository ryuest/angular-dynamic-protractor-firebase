import {
  browser,
  by,
  element,
  ExpectedConditions as EC
} from 'protractor';
import {
  LoginPage
} from './DDDD.po';

import { LoginPage2 } from '../login/login.po';
import { PublicPage } from '../public/public.po';

// DEBUG node --inspect-brk ./node_modules/.bin/protractor protractor.conf.js 
// debugger

describe('adding a new contact with only a name',  () => {
  let page: LoginPage;

  beforeAll(async () => {
    page = new LoginPage();
    await page.navigateTo();
    
    await browser.waitForAngular();
  });

//  it('when user trying to login with wrong credentials he should stay on “login” page', async () => {
//   
//    await page.fillCredentials();
//    await console.log(expect(page.getPageTitleText()));
//  });

  it('should find the add contact b2222utton', async () => {
    
    // const aa = await element(by.css('label[for="email"]'));
    const firstname = element.all(by.css('label[for="email"]'));
    expect(await firstname.get(0).getText()).toEqual('E-Mail');
    console.log('HERE2222 ' + await firstname.get(0).getText());

    await page.fillCredentials();
    // (async () => {
    browser.ignoreSynchronization = false;
    console.log('HERE');
    // tslint:disable-next-line:max-line-length
   // const elem = await element(by.css('app-recipe-list')).element(by.css('div[class="col-xs-12"]')).element(by.css('button[class="btn"]'));
    // await browser.get('http://localhost:4200/recipes');
    await browser.waitForAngular();
  //  await browser.sleep(3000);
    const firstname2 = element.all(by.css('h3'));
    console.log('HERE333 ' + await firstname2.get(0).getText());
    expect(await firstname2.get(0).getText()).toEqual('E-Mail');
  //  });
    
  //  await elem[0].click();
 //   console.log(response.body);
 //   console.log('Error: --> ' + error);
    


  // td:nth-child(3)


 // const elem = page.getValidElm();
  
 // console.log('aaaaa' + elem);

 









    /*
    
    //  element(by.id('loginUsernameInput')).click();
    element(by.id('email')).sendKeys('ryuest@mail.ru');
    element(by.id('password')).sendKeys('ryuryu88');
    element(by.css('button[class="btn btn-primary"]')).click();
    element(by.css('app-root h1')).getText();
    browser.rootEl = 'div#app-recipe-list';
  //  browser.angularAppRoot('app-recipe-list').then(  () => {
   //   browser.get('/recipes');
   //   browser.waitForAngular();
   //   browser.useAllAngular2AppRoots();
    browser.sleep(6000).then(() => {
    element.all(by.css('.row')).isPresent().then(async () => {
      console.log('HERE2');
      const elem = await element.all(by.css('button[class="btn btn-primary"]'));
      elem[0].click().then(() => {
           browser.sleep(6000);
      });
    });
    });
 //   });


 /*
 element(by.css('button[class="btn btn-primary"]')).click().then(  () => {
      console.log('HERE2');
      browser.getPageSource().then((txt) => {
        console.log('text web -> ' + txt);
      });
      console.log('HERE_clicked');
      console.log('SIZE -->' + element.all(by.className('btn btn-success')));
      const elem = await element.all(by.css('.btn-success'));
//    }).then(() => {
      console.log('HERE3 Size --> ');
      elem[0].getText().then((text) => {
         console.log('NEW PROMISE TEXT ---> ' + text);
       });
      elem[0].click();
 */

    // });


    /*
        element(by.id('name')).sendKeys('new auto name');
        element(by.id('imagePath')).sendKeys('https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg');
        element(by.id('description')).sendKeys('new auto desc');

        // Add ingredent
        element(by.css('button[type="button"]')).click();
        element(by.css('div[class="col-xs-8"]')).element(by.css('input[type="text"]')).sendKeys('new apple');
        element(by.css('div[class="col-xs-2"]')).element(by.css('input[type="number"]')).sendKeys('2');
        element(by.css('button[type="submit"]')).click();
    */
  });


});
