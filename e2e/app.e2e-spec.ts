import { BookiAngular2Page } from './app.po';

describe('booki-angular2 App', function() {
  let page: BookiAngular2Page;

  beforeEach(() => {
    page = new BookiAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
