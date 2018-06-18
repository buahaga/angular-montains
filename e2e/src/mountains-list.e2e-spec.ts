import { browser } from 'protractor';
import { AppPage } from './app-page.po';

describe('MountainsSearch - App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateToMountainsList();
  });

  it('should not change list of items if paginator clicked to previous by default', () => {
    page.getPaginatorPrevious().click().then(() => {
      browser.waitForAngular();
      expect(page.getFirstMountain().getText()).toEqual('1. Cup Lichen');
    });
  });

  it('should change list of items if paginator clicked to next', () => {
    page.getPaginatorNext().click().then(() => {
      browser.waitForAngular();
      expect(page.getFirstMountain().getText()).toEqual('11. Cream Avens');
    });
  });

  it('should render 7 pagination buttons', () => {
    page.getPaginatorPages().then((btn) => {
      expect(btn.length).toBe(7);
    });
  });

  it('should go to selected page if page-button clicked', () => {
    page.getPaginatorPages().then((btn) => {
      btn[2].click().then(() => {
        browser.waitForAngular();
        expect(page.getFirstMountain().getText()).toEqual('11. Cream Avens');
      });
    });
  });

  it('should display filter form on mountain page', () => {
    expect(page.getFilterForm()).toBeDefined();
  });

  it('should display list of only 5 items if filter form is set to search on "B"', () => {
    page.getSearchInput().sendKeys('A');
    page.getFilterSubmitBtn().click().then(() => {
      browser.waitForAngular();
      expect(page.getMountains().count()).toEqual(5);
    });
  });

  it('should display specified first item on page if filter by height set to "heighest first"', () => {
    page.getSelectHeight().click();
    page.getFilterSubmitBtn().click().then(() => {
      browser.waitForAngular();
      expect(page.getFirstMountain().getText()).toEqual('68. Palo De Cachimbo');
    });
  });

  it('should display specified first item on page if filter by name set to "Z-A"', () => {
    page.getSelectName().click();
    page.getFilterSubmitBtn().click().then(() => {
      browser.waitForAngular();
      expect(page.getFirstMountain().getText()).toEqual('119. Wydler\'s Ticktrefoil');
    });
  });

  it('should display specified first item on page if filter by height choosen to "6000"', () => {
    page.getFilter6000().click();
    page.getFilterSubmitBtn().click().then(() => {
      browser.waitForAngular();
      expect(page.getFirstMountain().getText()).toEqual('4. Parry\'s Lousewort');
    });
  });

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
  });

  it('should set queryParams if filter set', () => {
    page.getFilter6000().click();
    page.getFilterSubmitBtn().click().then(() => {
      browser.waitForAngular();
      expect(page.getQueryParams()).toMatch('?heigherThen=6000');
    });
  });

  it('should not move range left on drag', () => {
    browser.actions()
      .mouseMove(page.getFirstRange(), { x: 5, y: 5 })
      .mouseDown()
      .mouseMove({ x: -40, y: 0 })
      .perform();
    expect(page.getFirstRange().getCssValue('left')).toEqual('0px');
  });

  it('should change range position on drag', () => {
    browser.actions()
      .mouseMove(page.getFirstRange(), { x: 5, y: 5 })
      .mouseDown()
      .mouseMove({ x: 40, y: 0 })
      .perform();
    expect(page.getFirstRange().getCssValue('left')).toEqual('40px');
  });

  it('should not change range more then max length of the range', () => {
    browser.actions()
      .mouseMove(page.getFirstRange(), { x: 5, y: 5 })
      .mouseDown()
      .mouseMove({ x: 95, y: 0 })
      .perform();
    expect(page.getFirstRange().getCssValue('left')).toEqual('90px');
  });

  it('should not change postion on collision', () => {
    browser.actions()
      .mouseMove(page.getFirstRange(), { x: 5, y: 5 })
      .mouseDown()
      .mouseMove({ x: 40, y: 0 })
      .mouseUp()
      .mouseMove(page.getSecondRange(), { x: 5, y: 5 })
      .mouseDown()
      .mouseMove({ x: -45, y: 0 })
      .perform();
    expect(page.getSecondRange().getCssValue('left')).toEqual('50px');
  });

});
