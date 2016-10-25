import { browser, element, by } from 'protractor';

export class Yclee0210Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
