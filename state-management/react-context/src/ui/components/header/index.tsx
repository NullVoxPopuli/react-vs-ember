import * as React from 'react';

import HeaderDisplay from './display';
import { TodosContext } from '@contexts/todos';

export default class HeaderContainer extends React.Component {
  render() {
    return (
      <TodosContext.Consumer>
        {({ add }) => <HeaderDisplay addTodo={add} />}
      </TodosContext.Consumer>
    );
  }
}
