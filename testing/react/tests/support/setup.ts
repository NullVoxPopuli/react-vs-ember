import * as puppeteer from 'puppeteer';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import startTestServer from 'tests/support/acceptance/server';

configure({ adapter: new Adapter() });

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

(global as any).window = window;
(global as any).document = window.document;
