import Ember from 'ember';
import Component from '@ember/component';
import { action } from '@ember-decorators/object';
import hbs from 'htmlbars-inline-precompile';


import { connect } from 'ember-redux';
import { edit, destroy, complete } from 'example-app/redux-store/todos';

const { run: { scheduleOnce } } = Ember;


const dispatchToActions = {
  deleteTodo: destroy,
  completeTodo: complete,
  editTodo: edit
}

// export default connect(null, dispatchToActions)(TodoItemContainer);

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

  @action
  focusInput(this: TodoItemContainer) {
    scheduleOnce('afterRender', this, () => {
      const element = this.element;
      const input = element.querySelector('input.edit') as HTMLInputElement

      input.focus();
    });
  }

  @action
  handleKeydown(this: TodoItemContainer, e: KeyboardEvent) {
    if (e.keyCode === 13) {
      const target = (e.target as HTMLInputElement);

      target.blur();
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
