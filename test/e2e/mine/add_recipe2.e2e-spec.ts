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

describe('adding a new contact with only a name', async () => {
  let page: LoginPage;
  let page2: LoginPage2;
  let publicPage: PublicPage;


  beforeAll(async () => {
    page = new LoginPage();
    page2 = new LoginPage2();
    publicPage = new PublicPage();
    await  page.navigateTo();
    await  browser.waitForAngular();
  });

  it('should find the add contact button', async (done) => {
    
 await page.fillCredentials().then(async () => {

  // td:nth-child(3)

  await element(by.module('')).getText().then((text) => {
      console.log(text);
  }); 
  console.log(' -> HERE1' + page.getTitle());
    //  await    browser.sleep(3000);
  await expect(page.getTitle()).toEqual('Please select a Recipe!').then(async (text) => {
        console.log(text + ' -> HERE2');
      });
      
  await page.clickNewRecipe().then(async () => {
        await element(by.css('app-recipe-list')).element(by.css('div[class="col-xs-12"]')).element(by.css('button[class="btn"]')).click();
        console.log('tryed to click');
      });
  done();  

    }).catch(() => {
        console.log('I AM a PROBMISE ERROR');
    });







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
