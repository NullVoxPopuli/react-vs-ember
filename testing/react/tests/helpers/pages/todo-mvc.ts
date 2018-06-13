import {
  interactor, text,
  clickable,
  fillable, blurrable,
  isVisible
} from '@bigtest/interactor';

@interactor
export class TodoMVCPage {
  headingText = text('h1');
  clickFirstTodo = clickable('ul.todo-list li:first-child');
  fillName = fillable('ul.todo-list li:first-child input');
  blurName = blurrable('ul.todo-list li:first-child input');
  isEditing = isVisible('.editing');
}

export default new TodoMVCPage('[data-test-todo-mvc]');
