import * as React from 'react';

import { ReduxProvider } from '../redux-store';
import TodoMVC from './components/todo-mvc';

import './styles/app.scss';

export default class Application extends React.Component {

  render() {
    return (
      <ReduxProvider>
        <TodoMVC />
      </ReduxProvider>
    );
  }
}
