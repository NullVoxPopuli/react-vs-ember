import * as React from 'react';

import { Todo } from '@store/todos';
import TodoItem from '@ui/components/todo';

export interface Props {
  todos: Todo[];
}

export default class TodoList extends React.Component<Props> {
  render() {
    const { todos } = this.props;

    return (
      <ul className='todo-list'>
        {todos.map((t, i) => <TodoItem key={i} todo={t} />)}
      </ul>
    );
  }
}
