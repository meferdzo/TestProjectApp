import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/Home');
    });
    it('should say TestProject', () => {
      expect(page.getParagraphText()).toContain('Home');
    });
  });
});
