import { HelloMyEditorPage } from './app.po';

describe('hello-my-editor App', function() {
  let page: HelloMyEditorPage;

  beforeEach(() => {
    page = new HelloMyEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
