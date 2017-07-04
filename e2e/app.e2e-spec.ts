import { HomepagePage } from './app.po';

describe('homepage App', () => {
  let page: HomepagePage;

  beforeEach(() => {
    page = new HomepagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
