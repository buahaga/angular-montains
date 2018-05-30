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

  getFirstMountain() {
    return element(by.css('.mountain'));
  }

  getPaginatorPrevious() {
    return element(by.css('.previous'));
  }

  getPaginatorNext() {
    return element(by.css('.next'));
  }

  getPaginatorPages() {
    return element.all(by.css('.pagination button'));
  }

  getFilterForm() {
    return element(by.css('form'));
  }

  getSearchInput() {
    return element(by.css('.search-input'));
  }

  getSelectHeight() {
    return element(by.css('.select-height option:nth-child(2)'));
  }

  getSelectName() {
    return element(by.css('.select-name option:nth-child(3)'));
  }

  getFilter6000() {
    return element(by.css('.filter-6000'));
  }

  getFilterSubmitBtn() {
    return element(by.css('.filter-submit'));
  }

  navigateToSearchB() {
    return browser.get('/mountains?search=b');
  }

  async getQueryParams() {
    const url = await browser.driver.getCurrentUrl();
    return url.split('?')[1];
  }

}
