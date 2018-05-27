import Ember from 'ember';
import Component from '@ember/component';
import { action } from '@ember/object';
import hbs from 'htmlbars-inline-precompile';


import { connect } from 'ember-redux';
import { editTodo, deleteTodo, completeTodo } from '../actions/todos';

const { run: { scheduleOnce } } = Ember;


const dispatchToActions = {
  deleteTodo,
  completeTodo,
  editTodo
}

// export default connect(null, dispatchToActions)(TodoItemContainer);

@connect(null, dispatchToActions)
export default class TodoItemContainer extends Component {
  tagName = 'li';
  editing = false;
  classNameBindings: ['todo.completed', 'editing'];

  @action
  startEditing() {
    this.set('editing', true);
  }

  @action
  doneEditing() {
    this.set('editing', false);
  }

  @action
  focusInput() {
    scheduleOnce('afterRender', this, () => {
      this.element.querySelector('input.edit').focus();
    });
  }

  @action
  handleKeydown(e) {
    if (e.keyCode === 13) {
      e.target.blur();
    } else if (e.keyCode === 27) {
      this.set('editing', false);
    }
  }

  get layout() {
    return hbs`
      {{yield (hash
        deleteTodo=(action "deleteTodo" todo.id)
        completeTodo=(action "completeTodo" todo.id)
        editTodo=(action "editTodo" todo.id)
        handleKeydown=(action "handleKeydown")
        focusInput=(action "focusInput")
        startEditing=(action "startEditing")
        doneEditing=(action "doneEditing"))
      }}
    `;
  }
}
