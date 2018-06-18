import { browser } from 'protractor';
import { AppPage } from './app-page.po';

describe('MountainsSearch - App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateToMountain();
  });

  it('should change carousel position on click by carousel prev button', () => {
    browser.actions()
      .mouseMove(page.getCarouselPrev(), { x: 5, y: 5 }).click().perform();
    expect(page.getCarouselLeftPosition()).toBeLessThan(0);
  });

  it('should change carousel position on click by carousel next button', () => {
    browser.actions()
      .mouseMove(page.getCarouselNext(), { x: 5, y: 5 }).click().perform();
    expect(page.getCarouselLeftPosition()).toBeLessThan(0);
  });

  it('should change carousel position on click by controls in slider bottom', () => {
    browser.actions()
      .mouseMove(page.getFourthControlItem(), { x: 3, y: 3 }).click().perform();
    expect(page.getCarouselLeftPosition()).toBeLessThan(0);
  });

});
