import { TweetsPage } from './app.po';

describe('tweets App', () => {
  let page: TweetsPage;

  beforeEach(() => {
    page = new TweetsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
