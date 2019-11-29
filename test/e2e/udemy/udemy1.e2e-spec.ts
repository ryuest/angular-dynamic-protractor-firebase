import {
    browser,
    by,
    element
  } from 'protractor';

describe('Protractor Alert steps', () => {

   function selectItems(product) {
    element.all(by.tagName('app-card')).each((item) => {

      item.element(by.css('h4 a')).getText().then((text) => {
        if (text === 'Samsung Note 8') {
          item.element(by.css('button[class*="btn-info"]')).click();
        }
      });
    });
  }

   it('Open NonAngular js website Alerts', () => {

    browser.get('https://qaclickacademy.github.io/protocommerce/');

    element(by.name('name')).sendKeys('Mystudents');
    element(by.css('input[name=\'email\']')).sendKeys('mystudents@gmail.com');
    element(by.id('exampleInputPassword1')).sendKeys('password2');
    element(by.css('input[type=\'checkbox\']')).click();
    element(by.cssContainingText('[id=\'exampleFormControlSelect1\'] option', 'Female')).click();
    element.all(by.name('inlineRadioOptions')).first().click();
    element(by.buttonText('Submit')).click().then(() => {
      element(by.css('div[class*=\'success\']')).getText().then((text) => {
        console.log(text);
      });
    });
    element(by.name('name')).clear();
    element(by.name('name')).sendKeys('M').then(() => {
      element(by.css('[class=\'alert alert-danger\']')).getText().then((text) => {
        console.log(text);
      });
    });
    element(by.linkText('Shop')).click();
    selectItems('Samsung Note 8');
    selectItems('iphone X');

    element(by.partialLinkText('Checkout')).getText().then((text) => {
      const res = text.split('(');
      const x = Number(res[1].trim().charAt(0));


      const y = x + 1;
      console.log(y);
      expect(res[1].trim().charAt(0)).toBe('2');
    });

  });

});
