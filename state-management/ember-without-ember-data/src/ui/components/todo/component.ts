import Ember from 'ember';
import Component from '@ember/component';
import {inject as service } from '@ember/service';

import TodosService from 'example-app/services/todos';
import Todo from 'example-app/data/models/todo';

const { run: { scheduleOnce } } = Ember;

export default class TodoItem extends Component {
  @service todos!: TodosService;
  todo!: Todo;

  tagName = 'li';
  editing = false;
  classNameBindings = ['todo.completed', 'editing'];

  didClickLabel() {
    this.startEditing();
    this.send('focusInput');
  }

  destroyTodo() {
    this.todos.destroyTodo(this.todo.id);
  }

  didFinishEditing(e: KeyboardEvent) {
    const target = (e.target as HTMLInputElement);
    const text = target.value;

    this.todos.changeText(this.todo.id, text);
    this.doneEditing();
  }

  focusInput(this: TodoItem) {
    scheduleOnce('afterRender', this, () => {
      const element = this.element;
      const input = element.querySelector('input.edit') as HTMLInputElement

      input.focus();
    });
  }

  handleKeydown(this: TodoItem, e: KeyboardEvent) {
    const target = (e.target as HTMLInputElement);

    // Tab, Enter, Escape
    if ([9, 13, 27].includes(e.keyCode)) {
      target.blur();
      this.doneEditing();
    }
  }

  startEditing(this: TodoItem) {
    this.set('editing', true);
  }

  doneEditing(this: TodoItem) {
    this.set('editing', false);
  }

}
