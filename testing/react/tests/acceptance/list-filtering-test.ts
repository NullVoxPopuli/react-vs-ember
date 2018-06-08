import * as puppeteer from 'puppeteer';
import { expect } from 'chai';
import { ISuiteCallbackContext } from 'mocha';

import { host } from 'tests/support/acceptance/config';
import { setupForAcceptance } from 'tests/helpers/setup-for-acceptance';

describe('Acceptance | list filtering', function() {
  const ctx = setupForAcceptance(this);

  // it('should load without error', async () => {
  //   await ctx.visit('https://google.com')
  //
  //   // let text = await ctx.textFor('body');
  //
  //   expect(text).to.contain('google')
  // });

  it('list all todos', async () => {
    await ctx.visit(host);

    await ctx.screenshot();
    const todos = await ctx.findAll('ul.todo-list li');

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
