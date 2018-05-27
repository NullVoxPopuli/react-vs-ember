import Component from '@ember/component';
import { connect } from 'ember-redux';
import { selectors } from 'example-app/redux-store/todos';
import { State } from 'example-app/redux-store/reducers';

const { list } = selectors;

class TodoListComponent extends Component {
  tagName = 'ul';
  classNames = ['todo-list'];
}

const stateToComputed = (state: State) => ({
  todos: list(state)
});

export default connect(stateToComputed)(TodoListComponent);
