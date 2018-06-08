import * as puppeteer from 'puppeteer';

import startTestServer from 'tests/support/acceptance/server';

export const setupForAcceptance = function() {
  before(async () => {
    this.server = await startTestServer();

    this.browser = await puppeteer.launch();
  });

  after(async () => {
    this.browser.close();

    await this.server.shutdown();
  });

  beforeEach(async () => {
    this.page = await this.browser.newPage()
  });


  afterEach(async () => {
    await this.page.close()
  });
}
