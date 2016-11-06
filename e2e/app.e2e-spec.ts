import { Yclee0210Page } from './app.po';

describe('yclee0210 App', function() {
  let page: Yclee0210Page;

  beforeEach(() => {
    page = new Yclee0210Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });

  it('should display navbar', () => {
    page.navigateTo();
    expect(page.verifyNavBarVisible()).toEqual(true);
  });

  it('should hav one menu, called Home and it should be active', () => {
    page.navigateTo();
    let firstMenuIndex = 0;
    let navMenus = page.getMenus();

    expect(page.getNthMenuText(firstMenuIndex, navMenus)).toContain('HOME');
    expect(page.getNthMenuCssClass(firstMenuIndex, navMenus)).toContain('active');
  });
});
