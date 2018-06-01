import * as React from 'react';

import { list, TodosContext } from '@contexts/todos';
import TodoItem from '@ui/components/todo';

export default class TodoList extends React.Component {
  render() {
    return (
      <ul className='todo-list'>
        <TodosContext.Consumer>
          {({ todos }) => todos.map((t, i) => <TodoItem key={i} todo={t} />)}
        </TodosContext.Consumer>
      </ul>
    );
  }
}
