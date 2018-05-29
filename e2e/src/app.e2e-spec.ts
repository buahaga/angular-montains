import { browser } from 'protractor';
import { AppPage } from './app.po';

describe('MountainsSearch - App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(page.getParagraphText()).toEqual('Welcome to MountainSearch!');
  });

  it('should return empty password input by default', () => {
    expect(page.getPassword().getText()).toEqual('');
  })

  it('should not log in if password is wrong', () => {
    page.getLogin().sendKeys('admin@gmail.com');
    page.getPassword().sendKeys('1234');
    page.getSubmit().click().then(() => {
      expect(page.getError()).toMatch('Please check e-mail and password are correct!')
      });
  })

  it('should log in if password is right', () => {
    page.getLogin().sendKeys('admin@gmail.com');
    page.getPassword().sendKeys('123');
    page.getSubmit().click().then(() => {
        browser.waitForAngular();
        browser.sleep(1000);
        expect(browser.driver.getCurrentUrl()).toMatch('/mountains')
      });
  })

  it('should display filter form on mountain page', () => {
    expect(page.getFilterForm()).toBeDefined();
  })

  it('should display list of 12 items on mountains page by default', () => {
    expect(page.getMountains().count()).toEqual(12)
  })

  it('should display list of only 7 items if filter form is set to search on "B"', () => {
    page.getSearchInput().sendKeys('B');
    page.getFilterSubmitBtn().click().then(() => {
        browser.waitForAngular();
        browser.sleep(1000);
        expect(page.getMountains().count()).toEqual(7)
      });
  })

});
