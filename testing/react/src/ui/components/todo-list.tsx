import * as React from 'react';
import { connect } from 'react-redux';

import { list } from '@store/todos/selectors';
import { State } from '@store/reducers';
import { Todo } from '@store/todos';
import TodoItem from '@ui/components/todo';

export interface Props {
  todos: Todo[];
}

const mapStateToProps = (state: State) => ({
  todos: list(state)
});

// @connect(mapStateToProps)
/* export default */ class TodoList extends React.Component<Props> {
  render() {
    const { todos } = this.props;

    return (
      <ul className='todo-list'>
        {todos.map((t, i) => <TodoItem key={i} todo={t} />)}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(TodoList);
