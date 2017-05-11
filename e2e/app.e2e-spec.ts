import { SocialSwPage } from './app.po';

describe('social-sw App', function() {
  let page: SocialSwPage;

  beforeEach(() => {
    page = new SocialSwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
