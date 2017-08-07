import { PSGSTAPPPage } from './app.po';

describe('ps-gst-app App', () => {
  let page: PSGSTAPPPage;

  beforeEach(() => {
    page = new PSGSTAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
