import {
  browser,
  by,
  element,
  ExpectedConditions as EC
} from 'protractor';

// import { f1 } from './urlConfirmed';
import f1 from './urlConfirmed';


describe('contacts test', () => {


  beforeEach(() => {
    return browser.waitForAngularEnabled(true).then(
      () => {
        return browser.get('http://localhost:4200/auth')
      });
  });



  it('should open the dialog with waitForAngular', async () => {

    const username = 'test@test.ru'
    const password = 'testtest88'
    await element.all(by.css('label')).then((element) => {
      debugger
    
        expect(element[0].getText()).toEqual("ABC");
        console.log('HA')
      
    }) 
    debugger
    let email = element(by.css('app-auth #email'))
    
    email.sendKeys(username);
    debugger
    let pw = element(by.id('password'))
    pw.sendKeys(password);
    debugger
    let feedButton = element(by.css('button[class="btn btn-primary"]'))
    debugger

    // await feedButton.click()

    // browser.waitForAngular()

    // await browser.wait(() => {
    //   return element(by.css('app-recipe-start')).isPresent()
    //} ,5000 );
    


    await f1(feedButton, "http://localhost:4200/recipes").then(() => {
      console.log('done for -> ' + feedButton)
      
    })

    // });

 //   debugger
 //   let dialogTitle = element(by.css('app-recipe-start h3'))
    debugger
    let dialogText = element(by.css('hghghgh'))
      debugger
      const text = "Please select a Recipe!"
      console.log('text ___ >>>' + text)
   //   let dialogText = text;
      debugger
      expect(dialogText).toContain('Latest posts from Craig Service')
    
    debugger

    debugger

    let closeButton = element(by.css('app-recipe-list .btn'))
    debugger
    await closeButton.click();
    debugger

    // Wait for the close animation to finish.
 
  });


  /*
  it('should open the dialog with waitForAngular', (done) => {
    let feedButton = element(by.css('button.feed-button'));
    let closeButton = element(by.css('button[mat-dialog-close]'))
    let dialogTitle = element(by.css('app-contact-feed h2.mat-dialog-title'))

    return feedButton.click()
        .then(() => {
          return dialogTitle.getText();
        })
        .then((dialogText) => {
          expect(dialogText).toContain('Latest posts from Craig Service')

          // This closes the dialog, but we need to wait for the animation to
          // complete, even with automatic angular waiting enable.
          return closeButton.click();
        })
        .then(() => {
          // Wait for the close animation to finish.
          return browser.wait(
              EC.stalenessOf(dialogTitle), 3000, 'Waiting for dialog to close');
        })
        .then(() => {
          return dialogTitle.isPresent();
        })
        .then((dialogTitleIsPresent) => {
          expect(dialogTitleIsPresent).toBeFalsy();
          done();
        });
  })

  it('should open the dialog with waitForAngular', async () => {
    let feedButton = element(by.css('button.feed-button'));
    let closeButton = element(by.css('button[mat-dialog-close]'))
    let dialogTitle = element(by.css('app-contact-feed h2.mat-dialog-title'));

    await feedButton.click()
    let dialogText = await dialogTitle.getText();
    expect(dialogText).toContain('Latest posts from Craig Service')
    debugger

        // This closes the dialog, but we need to wait for the animation to
        // complete, even with automatic angular waiting enable.
        await closeButton.click();

    // Wait for the close animation to finish.
    await browser.wait(
        EC.stalenessOf(dialogTitle), 3000, 'Waiting for dialog to close');
    let dialogTitleIsPresent = await dialogTitle.isPresent();
    expect(dialogTitleIsPresent).toBeFalsy();
  });

  

  it('mine', (done) => {
    
      const username = 'test@test.ru'
      const password = 'testtest88'
    //  browser.get('http://localhost:4200/auth')
    element(by.css('app-auth #email')).sendKeys(username);
    element(by.id('password')).sendKeys(password);
    let feedButton = element(by.css('button[class="btn btn-primary"]')).getWebElement().then(element => {
      element.click();
    })
    let dialogTitle2 = element(by.css('.lp-table-of-content-main-container'))

    return feedButton.click()
    .then(() => {
      browser.sleep(3000)
        let h3Top = element(by.css('app-recipe-start h3'))
        return h3Top.getText()
        .then((text) => {
          console.log('done text ' + text)
          done()
        });
    
      console.log('done')
      })

      
  
 /*   
    .then(() => {
      // Wait for the close animation to finish.
      return browser.wait(
          EC.presenceOf(element(by.css('app-recipe-start h3'))), 3000, 'Waiting for dialog to close');
    }).catch(error => {
      console.log(error.message, 'test1');
    })
   
    
    .then(() => {
          
          let dialogTitle = element(by.css('app-recipe-start h3'))
          
          return dialogTitle.getText()

        .then((dialogText) => {
          expect(dialogText).toContain('Latest posts from Craig Service')

          let closeButton = element(by.css('app-recipe-list .btn'))
          return closeButton.click()       
        .then((dialogText) => {
          expect(dialogText).toBeFalsy()
          done()
        })
      })
  })
*/
  // })
})