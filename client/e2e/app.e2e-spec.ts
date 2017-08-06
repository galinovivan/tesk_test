import { TaskPage } from './app.po';

describe('task App', () => {
  let page: TaskPage;

  beforeEach(() => {
    page = new TaskPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
