import {
  interactor, text,
  count, clickable
} from '@bigtest/interactor';

@interactor
export class TodoMVCPage {
  headingText = text('[data-test-page-header]');
  allTodosCount = count('[data-test-todo]');
  completedTodosCount = count('[data-test-todo].completed');
  clickClearCompleted = clickable('[data-test-clear-button]');

}

export default new TodoMVCPage('[data-test-todo-mvc]');
