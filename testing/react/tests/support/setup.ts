import * as puppeteer from 'puppeteer';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import startTestServer from 'tests/support/acceptance/server';

configure({ adapter: new Adapter() });
