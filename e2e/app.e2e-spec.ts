import { MyProductivityPage } from './app.po';

describe('my-productivity App', function() {
  let page: MyProductivityPage;

  beforeEach(() => {
    page = new MyProductivityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
