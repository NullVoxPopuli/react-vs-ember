import Component from '@ember/component';
import { action } from '@ember-decorators/object';

import { connect } from 'ember-redux';
import { edit, destroy, toggle } from 'example-app/src/redux-store/todos';

const dispatchToActions = (dispatch: any) => ({
  deleteTodo: (id: number) => dispatch(destroy(id)),
  completeTodo: (id: number) => dispatch(toggle(id)),
  editTodo: (id: number, text: string) => dispatch(edit(id, text))
});

@connect(null, dispatchToActions)
export default class TodoItemContainer extends Component {
  tagName = 'li';
  editing = false;
  classNameBindings = ['todo.completed', 'editing'];

  @action
  startEditing(this: TodoItemContainer) {
    this.set('editing', true);
  }

  @action
  doneEditing(this: TodoItemContainer) {
    this.set('editing', false);
  }
}
