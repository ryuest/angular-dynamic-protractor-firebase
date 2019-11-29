import { ProtectedPage } from './protected.po';
import { PublicPage } from '../public/public.po';
import { LoginPage2 } from '../login/login.po';
import { browser, by, element } from 'protractor';

// https://github.com/shootermv/protractor-tutorial project

describe('protractor-tutorial - Protected page', () => {
  let page: ProtectedPage;
  let publicPage: PublicPage;
  let loginPage: LoginPage2;
  beforeEach(() => {
    page = new ProtectedPage();
    publicPage = new PublicPage();
    loginPage = new LoginPage2();
  });

  it('when not authenticated user tries to access “protected” page he should redirect to “login” page and see error ', (done) => {
    publicPage.navigateTo().then(() => {
      browser.sleep(2000);
    });

    publicPage.logOut(); // must be logged out before trying access "protected" page
    page.navigateTo().then(() => {
    browser.sleep(2000);
  });
    expect(loginPage.getPageTitleText()).toEqual('Login');
    done();
  });

  it(`not authenticated user tries to access “protected” page and after being redirected to “login” screen, after successful
   login he should redirect to  “protected”`, () => {
    publicPage.navigateTo();
    publicPage.logOut(); // must be logged out before trying access "protected" page
    page.navigateTo();
    loginPage.fillCredentials();
    expect(page.getPageTitleText()).toEqual('Protected');
  });
});
