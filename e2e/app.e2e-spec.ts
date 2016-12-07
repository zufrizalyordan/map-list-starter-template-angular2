import { MapListTemplatePage } from './app.po';

describe('map-list-template App', function() {
  let page: MapListTemplatePage;

  beforeEach(() => {
    page = new MapListTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
