import { DebsocPage } from './app.po';

describe('debsoc App', () => {
  let page: DebsocPage;

  beforeEach(() => {
    page = new DebsocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
