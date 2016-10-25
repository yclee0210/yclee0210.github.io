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
});
