import {by, ElementArrayFinder, ProtractorBrowser, element} from 'protractor';
import {promise as wdpromise} from 'selenium-webdriver';

import {PageObject} from './base.po';

export enum COL {
  name = 1,
  email = 2,
  phoneNumber = 3
}

export class Contact {
  constructor(
      public name?: string, public email?: string, public tel?: string) {}
}

export class ContactListPageObject extends PageObject {
  static nameCol = 1;
  trs: ElementArrayFinder;

  constructor(browser?: ProtractorBrowser) {
    super(browser);

    let tbody = this.element(by.tagName('tbody'));
   
    this.trs = this.element.all(by.tagName('div'));

  }

  /**
   * Returns the ElementArrayFinder object for the table row. This is an array
   * because there could be more than one entry with the same matching name
   * @param name
   */
  findContact(name: string): ElementArrayFinder {
    return this.trs.filter(elem => {
      return elem.all(by.tagName('td')).get(COL.name).getText().then(text => {
        return text === name;
      });
    });
  }

  getH3() {
    element.all(by.tagName('h3')).filter(function(elem, index) {
      debugger;
      return elem.getText().then(function(text) {
        console.log('HERE' + text)
      return text === 'Third';
      });
      }).first().click();
  }
  /**
   * Returns a promise of a contact array.
   */
  getContacts() {
    return this.trs.map(elem => {
      debugger;
      let contact: Contact = new Contact();
      let tds = elem;
      // We need to get the values of the contact name and email. Since these
      // are in a couple of different promises, we'll  create a promise array.
      let promises: any[] = [];

      // Getting the text returns a promise of a string then the next function
      // sets the contact's name. This function returns void so the final
      // promise saved is of Promise<void>. We set the promise array to be of
      // type any since we do not care about the promise type.
      promises.push(tds.getText().then(text => {
        debugger;
        console.log('text' + text)
        contact.name = text;
      }));
      debugger;
      // Resolve all the promises and return the contact.
      return Promise.all(promises).then(() => {
        return contact;
      });
    })
  }

  /**
   * Returns a promise of comma delimited names
   */
  getContactNames() {
    return this.trs.reduce((acc, curr) => {
      let name = curr.all(by.tagName('td')).get(COL.name);
      return name.getText().then(text => {
        return acc === '' ? text : acc + ', ' + text;
      });
    }, '');
  }
}