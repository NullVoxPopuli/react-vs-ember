import { module, test } from 'qunit';
import { visit, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

import { make, setupFactoryGuy } from 'ember-data-factory-guy';

module('Acceptance | list filtering', function(hooks) {
  setupApplicationTest(hooks);
  setupFactoryGuy(hooks);

  const findAllTodos = () => findAll('ul.todo-list li');
  const findCompletedTodos = () => findAll('ul.todo-list li.completed');

  hooks.beforeEach(function() {
    make('todo', 'completed');
    make('todo');
  });

  test('visiting / | lists all todos', async function(assert) {
    assert.expect(1);

    await visit('/');

    // 2 from the before each, and 1 is created in the application route
    assert.equal(findAllTodos().length, 3);
  });

  test('visiting /completed | lists only the completed todo', async function(assert) {
    assert.expect(2);

    await visit('/completed');

    assert.equal(findAllTodos().length, 1);
    assert.equal(findCompletedTodos().length, 1);
  });

  test('visiting /uncompleted | lists only the todo from the before each', async function(assert) {
    assert.expect(2);

    await visit('/uncompleted');

    assert.equal(findAllTodos().length, 1);
    assert.equal(findCompletedTodos().length, 0);
  });
});
