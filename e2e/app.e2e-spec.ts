import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  it('should display welcome message', async () => {
    await browser.get('/');
    expect(await element(by.css('app-root h1')).getText()).toEqual('Welcome to proyecto_1!');
  });
});
