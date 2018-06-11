import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';


const jsdom = new JSDOM(`
  <!doctype html>
  <html>
    <body></body>
  </html>
`);

const { window } = jsdom;

(global as any).window = window;
(global as any).document = window.document;
(global as any).navigator = {
  userAgent: 'node.js',
};

configure({ adapter: new Adapter() });
