import { PolicyAngular4Page } from './app.po';

describe('policy-angular4 App', () => {
  let page: PolicyAngular4Page;

  beforeEach(() => {
    page = new PolicyAngular4Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
