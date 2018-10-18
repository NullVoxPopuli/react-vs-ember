import Ember from 'ember';
import Component, { tracked } from 'sparkles-component';

import { service } from '@ember-decorators/service';

import Todo from 'react-vs-ember/data/models/todo';
import TodoManager from 'react-vs-ember/services/todo-manager';

const { run: { scheduleOnce } } = Ember;

export default class TodoItem extends Component {
  @service todoManager!: TodoManager;
  todo!: Todo;

  @tracked editing = false;

  didClickLabel() {
    this.editing = true;
    this.focusTodoTextInput();
  }

  destroyTodo() {
    this.todoManager.destroyTodo(this.args.todo.id);
  }


  toggleCompleted(e: Event) {
    const value = e.target.checked;

    this.args.todo.set('completed', value);
  }

  didFinishEditing(e: KeyboardEvent) {
    const target = (e.target as HTMLInputElement);
    const text = target.value;

    this.todoManager.changeText(this.args.todo.id, text);
    this.editing = false;
  }

  focusInput() {
    this.focusTodoTextInput();
  }


  handleKeyDown(e: KeyboardEvent) {
    const target = (e.target as HTMLInputElement);

    // Tab, Enter, Escape
    if ([9, 13, 27].includes(e.keyCode)) {
      target.blur();
      this.editing = false;
    }
  }


  private focusTodoTextInput() {
    scheduleOnce('afterRender', this, () => {
      const element = this.element;
      const input = element.querySelector('input.edit') as HTMLInputElement;

      input.focus();
    });
  }

}
