import { browser, element, by } from 'protractor';

export class Yclee0210Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  verifyNavBarVisible() {
    return element(by.css('nav.navbar')).isDisplayed();
  }

  getMenus() {
    return element.all(by.css('.navbar-nav li'));
  }

  getNthMenuText(index, menus) {
    return menus.get(index).getText();
  }

  getNthMenuCssClass(index, menus) {
    return menus.get(index).getAttribute('class');
  }
}
