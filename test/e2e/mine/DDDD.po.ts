import {
  browser,
  by,
  element
} from 'protractor';

export class LoginPage {

  private credentias = {
    username: 'test@test.ru',
    password: 'testtest88'
  };

  navigateTo() {
    return browser.get('/');
  }

  fillCredentials(credentias: any = this.credentias) {
    element(by.css('app-auth #email')).sendKeys(credentias.username);
    element(by.id('password')).sendKeys(credentias.password);
    return element(by.css('button[class="btn btn-primary"]')).click();
  }

  getPageTitleText() {
    return element(by.css('app-re3333cipe-start')).element(by.css('h3')).getText();
  }

  async getTitle() {
    await element(by.css('app-recipe-start')).element(by.css('h3')).getText().then((text) => {
      console.log('inside' + text);
      return text;
    });
  }

  clickNewRecipe() {
      return element(by.css('app-rec333ipe-list')).element(by.css('div[class="col-xs-12"]')).element(by.css('button[class="btn"]')).click();
  }

  async getValidElm() {
await element.all(by.css('div[class="col-md-7"]')).each((item) => {
      item.element(by.css('h3')).getText().then((text) => {
        return 'dddd' + text;
      });
    });
  }


}
