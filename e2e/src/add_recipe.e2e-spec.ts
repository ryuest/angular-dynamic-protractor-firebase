import { browser, by, element, ExpectedConditions as EC } from 'protractor';

describe('adding a new contact with only a name', () => {
  beforeAll(() => {
    browser.get('/');
    browser.waitForAngular();
  });

  it('should find the add contact button', () => {
    //  element(by.id('loginUsernameInput')).click();
    element(by.id('email')).sendKeys('ryuest@mail.ru');
    element(by.id('password')).sendKeys('ryuryu88');
    element(by.css('button[class="btn btn-primary"]')).click().then(() => {
      console.log('HERE2');

      browser.wait(EC.visibilityOf(element(by.className('btn-success'))));
    }).then(() => {
      console.log('HERE3');
      element(by.css('.btn-success')).click();
    });



    element(by.id('name')).sendKeys('new auto name');
    element(by.id('imagePath')).sendKeys('https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg');
    element(by.id('description')).sendKeys('new auto desc');

    // Add ingredent
    element(by.css('button[type="button"]')).click();
    element(by.css('div[class="col-xs-8"]')).element(by.css('input[type="text"]')).sendKeys('new apple');
    element(by.css('div[class="col-xs-2"]')).element(by.css('input[type="number"]')).sendKeys('2');
    element(by.css('button[type="submit"]')).click();

    });


  });
