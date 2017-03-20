import { CivilExamAppPage } from './app.po';

describe('civil-exam-app App', () => {
  let page: CivilExamAppPage;

  beforeEach(() => {
    page = new CivilExamAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
