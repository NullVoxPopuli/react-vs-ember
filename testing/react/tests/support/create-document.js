import { JSDOM } from 'jsdom';

function createDocument() {
  const dom = new JSDOM(`
    <!DOCTYPE html>
    <html>
      <head></head>
      <body></body>
    </html>
  `);

  const window = dom.window;
  global.document = dom.window.document;
  global.window = window;

  Object.keys(window).forEach((key) => {
    if (!(key in global)) {
      global[key] = window[key];
    }
  });

  return document;
}

export default createDocument;
