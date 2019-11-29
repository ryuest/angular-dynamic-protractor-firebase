import { browser, by, element, ExpectedConditions as EC } from 'protractor';

describe('adding a new contact with only a name', () => {
  beforeAll(() => {
    browser.get('https://sports.williamhill.com/betting/en-gb');
  });

  it('should find the add contact button', () => {
    element(by.id('accountTabButton')).click();
    //  element(by.id('loginUsernameInput')).click();
    element(by.id('loginUsernameInput')).sendKeys('WHITA_lurbini');
    element(by.id('loginPasswordInput')).sendKeys('WHNFT001');
    element(by.id('loginButton')).click();

    // const invalidEmailModal = ;

    // browser.wait(EC.textToBePresentInElement(invalidEmailModal, '£170.25'),
    // 20000);   // .-account
    browser.ignoreSynchronization = true;
    browser.waitForAngular();
    browser.sleep(500);
    browser.ignoreSynchronization = false;
    expect(element(by.xpath('//*[@id="accountTabButton"]/span[1]')).isDisplayed()).toBe(true);
    browser.wait(EC.textToBePresentInElement(element(by.xpath('//*[@id="accountTabButton"]/span[1]')), '£171.25'), 20000);
    // 20000);   // .-account
    //  console.log(invalidEmailModal.getText())

    console.log('HERE2');
  });

});
