import {
  interactor, text,
  clickable,
  fillable, blurrable,
  isPresent, triggerable, find
} from '@bigtest/interactor';

const firstTodo = '[data-test-todo]';

@interactor
export class FirstTodoPage {
  constructor(selector?: string) {}

  clickLabel = clickable(`${firstTodo} label`);
  label = text(`${firstTodo} label`);
  fill = fillable(`${firstTodo} [data-test-todo-edit]`);
  blur = blurrable(`${firstTodo} [data-test-todo-edit]`);
  isEditing = isPresent(`${firstTodo}.editing`);
  isCompleted = isPresent(`${firstTodo}.completed`);
  toggle = clickable(`${firstTodo} [data-test-todo-toggle]`);
  input = find(`${firstTodo} [data-test-todo-edit]`);

  pressTab = triggerable(`${firstTodo} [data-test-todo-edit]`, 'keydown', { keyCode: 9 });
  pressEnter = triggerable(`${firstTodo} [data-test-todo-edit]`, 'keydown', { keyCode: 13 });
  pressEscape = triggerable(`${firstTodo} [data-test-todo-edit]`, 'keydown', { keyCode: 27 });
}

export default new FirstTodoPage(`[data-test-todo-mvc]`);
