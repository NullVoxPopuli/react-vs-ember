import * as React from 'react';

import { ReduxProvider } from '../redux-store';
import AsyncButton from './components/async-button';

import './styles/app.scss';

export default class Application extends React.Component {

  render() {
    return (
      <ReduxProvider>
        <AsyncButton />
      </ReduxProvider>
    );
  }
}
