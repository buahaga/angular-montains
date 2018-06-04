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
        expect(browser.driver.getCurrentUrl()).toMatch('/mountains')
      });
  })

  it('should display filter form on mountain page', () => {
    expect(page.getFilterForm()).toBeDefined();
  })

  it('should display list of 10 items on mountains page by default', () => {
    expect(page.getMountains().count()).toEqual(10)
  })

  it('should not change list of items if paginator clicked to previous by default', () => {
    page.getPaginatorPrevious().click().then(() => {
        browser.waitForAngular();
        expect(page.getFirstMountain().getText()).toEqual('1. Cup Lichen')
      });
  })

  it('should change list of items if paginator clicked to next', () => {
    page.getPaginatorNext().click().then(() => {
        browser.waitForAngular();
        expect(page.getFirstMountain().getText()).toEqual('11. Cream Avens')
      });
  })

  it('should render 7 pagination buttons', () => {
    page.getPaginatorPages().then((btn) => {
      expect(btn.length).toBe(7);
    })
  })

  it('should go to selected page if page-button clicked', () => {
    page.getPaginatorPages().then((btn) => {
      btn[2].click().then(() => {
        browser.waitForAngular();
        expect(page.getFirstMountain().getText()).toEqual('11. Cream Avens')
      })
    })
  })

  it('should display list of only 5 items if filter form is set to search on "B"', () => {
    page.getSearchInput().sendKeys('A');
    page.getFilterSubmitBtn().click().then(() => {
        browser.waitForAngular();
        expect(page.getMountains().count()).toEqual(5)
      });
  })

  it('should display specified first item on page if filter by height set to "heighest first"', () => {
    page.getSelectHeight().click();
    page.getFilterSubmitBtn().click().then(() => {
        browser.waitForAngular();
        expect(page.getFirstMountain().getText()).toEqual('68. Palo De Cachimbo')
      });
  })

  it('should display specified first item on page if filter by name set to "Z-A"', () => {
    page.getSelectName().click();
    page.getFilterSubmitBtn().click().then(() => {
        browser.waitForAngular();
        expect(page.getFirstMountain().getText()).toEqual('119. Wydler\'s Ticktrefoil')
      });
  })

  it('should display specified first item on page if filter by height choosen to "6000"', () => {
    page.getFilter6000().click();
    page.getFilterSubmitBtn().click().then(() => {
        browser.waitForAngular();
        expect(page.getFirstMountain().getText()).toEqual('4. Parry\'s Lousewort')
      });
  })

  it('should display specified fitst item on page if all filters are selected', () => {
    page.getSearchInput().sendKeys('F');
    page.getSelectHeight().click();
    page.getSelectName().click();
    page.getFilter6000().click();
    page.getFilterSubmitBtn().click().then(() => {
        browser.waitForAngular();
        expect(page.getFirstMountain().getText()).toEqual('71. Fourspike Heliotrope');
        expect(page.getMountains().count()).toEqual(4);
      });
  })

  it('should set queryParams if filter set', () => {
    page.getFilter6000().click();
    page.getFilterSubmitBtn().click().then(() => {
        browser.waitForAngular();
        expect(page.getQueryParams()).toMatch('?heigherThen=6000');
      });
  })

  // it('should set search input to "B" if url has queryParams', () => {
  //   page.navigateToSearchB().then(() => {
  //       browser.waitForAngular();
  //       browser.sleep(3000);
  //       expect(page.getSearchInput().getText()).toMatch('b');
  //     });
  // })

});
