import Component from '@ember/component';
import { connect } from 'ember-redux';
import { edit, destroy, toggle } from 'example-app/src/redux-store/todos';

const dispatchToActions = (dispatch) => ({
  deleteTodo: (id: number) => dispatch(destroy(id)),
  completeTodo: (id: number) => dispatch(toggle(id)),
  editTodo: (id: number, text: string) => dispatch(edit(id, text))
});

class TodoItemContainer extends Component {}
export default connect(null, dispatchToActions)(TodoItemsContainer);
