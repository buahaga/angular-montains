import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getLogin() {
    return element(by.css('.login'));
  }

  getPassword() {
    return element(by.css('.password'));
  }

  getSubmit() {
    return element(by.css('button'));
  }

  getError() {
    return element(by.css('.error')).getText()
  }

  getMountains() {
    return element.all(by.css('.mountain'));
  }

  getFilterForm() {
    return element(by.css('form'));
  }

  getSearchInput() {
    return element(by.css('.search-input'));
  }

  getFilterSubmitBtn() {
    return element(by.css('.filter-submit'));
  }

}
