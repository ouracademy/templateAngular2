import { OurTemplatePage } from './app.po';

describe('our-template App', function() {
  let page: OurTemplatePage;

  beforeEach(() => {
    page = new OurTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
