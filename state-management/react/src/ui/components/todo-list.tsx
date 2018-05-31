import * as React from 'react';
import { connect } from 'react-redux';

import { list } from '@store/todos/selectors';
import { State } from '@store/reducers';
import Todo from '@ui/components/todo';

const mapStateToProps = (state: State) => ({
  todos: list(state)
});

@connect(mapStateToProps)
export default class TodoList extends React.Component {
  render() {
    const { todos } = this.props;

    return (
      <ul className='todo-list'>
        {todos.map((t, i) => <Todo key={i} todo={t} />)}
      </ul>
    );
  }
}
