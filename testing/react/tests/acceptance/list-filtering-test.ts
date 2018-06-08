import * as puppeteer from 'puppeteer';
import { expect } from 'chai';

import { host } from 'tests/support/acceptance/config';

describe('Acceptance | list filtering', () => {
  let page, browser;
  var url = host;

  beforeEach(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
  });


  afterEach(async () => {
    await page.close()
  })

  it('should load without error', async () => {
    await page.goto('https://google.com')

     let text = await page.evaluate(() => document.body.textContent)
     expect(text).to.contain('google')
   })

  it('list all todos', async () => {
    await page.goto(url);

    const todos = page.$eval('ul.todo-list li');

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
