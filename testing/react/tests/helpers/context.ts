import * as puppeteer from 'puppeteer';

export class Context {
  browser: puppeteer.Browser;
  page: puppeteer.Page;
  server: any;

  async findAll(selector: string): Promise<string[]>  {
    // const body = await this.page.evaluate(() => document.body.innerHTML);


    return await this.page.evaluate(s => document.querySelectorAll(s), selector);
  }


  async find(selector: string): Promise<HTMLElement> {
    return await this.page.evaluate(() => document.querySelector(selector));
  };

  async visit(url: string) {
    return await this.page.goto(url);
  }

  async screenshot(options: any = {}) {
    return await this.page.screenshot({
      path: 'screenshot.ping',
      fullPage: true,
      ...options
    });
  }

  async textFor(selector: undefined | string): Promise<string> {
    const elements = await this.findAll(selector || 'body');

    return (elements || []).join();
  }
}
