import Ember from 'ember';
import Component from '@ember/component';
import { action } from '@ember-decorators/object';

import { connect } from 'ember-redux';
import { edit, destroy, toggle } from 'example-app/src/redux-store/todos';

const { run: { scheduleOnce } } = Ember;


const dispatchToActions = {
  deleteTodo: destroy,
  completeTodo: toggle,
  editTodo: edit
}

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
}
