import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import createDocument from './create-document';

// createDocument();
configure({ adapter: new Adapter() });
