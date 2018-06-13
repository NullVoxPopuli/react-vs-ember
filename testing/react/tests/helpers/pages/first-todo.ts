import {
  interactor, text,
  clickable,
  fillable, blurrable,
  isPresent
} from '@bigtest/interactor';

const firstTodo = '[data-test-todo]';

@interactor
export class FirstTodoPage {
  clickLabel = clickable(`${firstTodo} label`);
  label = text(`${firstTodo} label`);
  fill = fillable(`${firstTodo} [data-test-todo-edit]`);
  blur = blurrable(`${firstTodo} [data-test-todo-edit]`);
  isEditing = isPresent(`${firstTodo}.editing`);
  isCompleted = isPresent(`${firstTodo}.completed`);
  toggle = clickable(`${firstTodo} [data-test-todo-toggle]`);
}

export default new FirstTodoPage(`[data-test-todo-mvc]`);
