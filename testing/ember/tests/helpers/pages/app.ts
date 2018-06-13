import { findAll, click } from '@ember/test-helpers';

export default {
  allTodos: () => findAll('[data-test-todo]'),
  completedTodos: () => findAll('[data-test-todo].completed'),
  clickClearCompleted: () => click('[data-test-clear-button]')
}
