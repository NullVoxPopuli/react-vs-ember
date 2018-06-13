import { findAll } from '@ember/test-helpers';

export default {
  allTodos: () => findAll('[data-test-todo]'),
  completedTodos: () => findAll('[data-test-todo].completed')
}
