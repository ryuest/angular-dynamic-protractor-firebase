import { browser, by, element } from 'protractor';

export class LoginPage2 {
  private credentias = {
    username: 'test',
    password: 'test'
  };

  navigateTo() {
    return browser.get('http://localhost:4200/login');
  }

  fillCredentials(credentias: any = this.credentias) {
    element(by.css('[name="username"]')).sendKeys(credentias.username);
    element(by.css('[name="password"]')).sendKeys(credentias.password);
    element(by.css('.btn-primary')).click();
  }

  getPageTitleText() {
    return element(by.css('app-root h2')).getText();
  }

  getErrorMessage() {
    return element(by.css('.alert-danger')).getText();
  }
}