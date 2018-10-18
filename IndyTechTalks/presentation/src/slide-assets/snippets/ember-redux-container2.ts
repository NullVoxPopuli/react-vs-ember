import Component from '@ember/component';
import { connect } from 'ember-redux';
import { edit, destroy, toggle } from 'example-app/src/redux-store/todos';

const dispatchToActions = {
  deleteTodo: destroy,
  completeTodo: toggle,
  editTodo: edit
}

@connect(null, dispatchToActions)
export default class TodoItemContainer extends Component {}
