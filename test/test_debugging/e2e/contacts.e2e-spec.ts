import {
  browser,
  by,
  element,
  ExpectedConditions as EC
} from 'protractor';

import { ContactListPageObject } from '../pageObjects/contact-list.po';

// import { f1 } from './urlConfirmed';
import f1 from './urlConfirmed';


describe('contacts test', () => {

  let contactList: ContactListPageObject;

  beforeEach(() => {
    return browser.waitForAngularEnabled(true).then(
      () => {
        return browser.get('https://testing-angular-applications.github.io/#/')
      });
  });



  it('should open the dialog with waitForAngular', async () => {

    

    const username = 'test@test.ru'
    const password = 'testtest88'
   
    
 //   let email = element(by.css('app-auth #email'))
    
 //   email.sendKeys(username);
    
 //   let pw = element(by.id('password'))
 //   pw.sendKeys(password);
    
 //   let feedButton = element(by.css('button[class="btn btn-primary"]'))
    

    // await feedButton.click()

    // browser.waitForAngular()

    // await browser.wait(() => {
    //   return element(by.css('app-recipe-start')).isPresent()
    //} ,5000 );
    


  //  await f1(feedButton, "http://localhost:4200/recipes").then(() => {
  //    console.log('done for -> ' + feedButton)
      
  //  })

   // contactList = new ContactListPageObject();
   // contactList.getH3();

  
    debugger;
    
     await element.all(by.tagName('td')).filter((elem, index) => {
      debugger;
      return elem.getText().then(function(text) {
        console.log('HERE' + text)
      return text === 'Third';
      });
      })


    // });

   
    debugger
     await element(by.tagName('td')).getText().then((text: string) => {
      debugger;
      console.log('<<<<<<<-------------->>>>>>>>>>');
      console.log(text);
      expect(text.match(/craig.services@example.com/)).toBe(false);
      debugger;
    });

  });

    /*
    let closeButton = element(by.css('app-recipe-list .btn'))
    debugger
    return closeButton.click();
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