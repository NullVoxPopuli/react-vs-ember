import Component from '@ember/component';
import { connect } from 'ember-redux';
import { selectors } from 'example-app/src/redux-store/todos';
import { State } from 'example-app/src/redux-store/reducers';

const { list } = selectors;


const stateToComputed = (state: State) => ({
  todos: list(state)
});

@connect(stateToComputed)
export default class TodoListComponent extends Component {
  tagName = 'ul';
  classNames = ['todo-list'];
}
