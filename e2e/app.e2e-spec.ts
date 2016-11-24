import { DialfrompcPage } from './app.po';

describe('dialfrompc App', function() {
  let page: DialfrompcPage;

  beforeEach(() => {
    page = new DialfrompcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
