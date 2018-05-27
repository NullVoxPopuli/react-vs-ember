import { Component } from 'ember';
import { connect } from 'ember-redux';
import { getTodos } from '../reducers/todos';

class TodoListComponent extends Component {
  tagName = 'ul',
  classNames = 'todo-list'
}

const stateToComputed = state => ({
  todos: getTodos(state)
});

export default connect(stateToComputed)(TodoListComponent);
