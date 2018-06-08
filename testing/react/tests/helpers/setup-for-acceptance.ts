import * as puppeteer from 'puppeteer';

import startTestServer from 'tests/support/acceptance/server';
import { ISuiteCallbackContext } from 'mocha';
import { Context } from './context';

export const setupForAcceptance = (parent: ISuiteCallbackContext) => {
  const ctx = new Context();

  before(async () => {
    ctx.server = await startTestServer();

    ctx.browser = await puppeteer.launch();
  });

  after(async () => {
    ctx.browser && ctx.browser.close();

    await ctx.server.shutdown();
  });

  beforeEach(async () => {
    // default size is 800 by 600 px
    ctx.page = await ctx.browser.newPage();
  });


  afterEach(async () => {
    await ctx.page.close()
  });

  return ctx;
};
