import * as puppeteer from 'puppeteer';
import { expect } from 'chai';
import { ISuiteCallbackContext } from 'mocha';

import { host } from 'tests/support/acceptance/config';
import { setupForAcceptance } from 'tests/helpers/setup-for-acceptance';
import { findAll } from 'tests/helpers/dom';

interface Context extends ISuiteCallbackContext {
  browser: puppeteer.Browser;
  page: puppeteer.Page;
}

describe('Acceptance | list filtering', function(this: Context) {
  setupForAcceptance.apply(this);

  it('should load without error', async () => {
    await this.page.goto('https://google.com')

    let text = await this.page.evaluate(() => document.body.textContent)
    expect(text).to.contain('google')
  });

  it('list all todos', async () => {
    await this.page.goto(host);

    const todos = await findAll.apply(this, 'ul.todo-list li');

    expect(todos.length).to.eq(1);
  });

  // test('list only completed todos', () => {
  //
  // });
  //
  // test('list only active todos', () => {
  //
  // });
});
