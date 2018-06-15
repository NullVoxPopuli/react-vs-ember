import { findAll, click } from '@ember/test-helpers';

export default {
  allTodos: () => findAll('[data-test-todo]'),
  completedTodos: () => findAll('[data-test-todo].completed'),
  clickClearCompleted: () => click('[data-test-clear-button]'),

  clickAll: () => click('[data-test-filter-all] a'),
  clickActive: () => click('[data-test-filter-active] a'),
  clickCompleted: () => click('[data-test-filter-completed] a')
}
