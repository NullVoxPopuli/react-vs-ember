import * as puppeteer from 'puppeteer';

declare namespace NodeJS {
  var browser: puppeteer.Browser;

  interface Global {
    browser: puppeteer.Browser;
  }
}
