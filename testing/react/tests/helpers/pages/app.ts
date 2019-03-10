import {
  interactor, text,
  count, clickable, isPresent,
  collection
} from '@bigtest/interactor';

@interactor
export class TodoMVCPage {
  constructor(selector: string) {}

  headingText = text('[data-test-page-header]');
  allTodosCount = count('[data-test-todo]');
  completedTodosCount = count('[data-test-todo].completed');
  clickClearCompleted = clickable('[data-test-clear-button]');
  clearCompletedIsPresent = isPresent('[data-test-clear-button]');

  clickAll = clickable('[data-test-filter-all]');
  clickActive = clickable('[data-test-filter-active]');
  clickCompleted = clickable('[data-test-filter-completed]');

  todos = collection('[data-test-todo]', {
    text: text('label'),
  });
}

export default new TodoMVCPage('[data-test-todo-mvc]');
