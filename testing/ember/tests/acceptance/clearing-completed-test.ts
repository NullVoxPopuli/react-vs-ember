import { module, test } from 'qunit';

import {
  visit, findAll, click
} from '@ember/test-helpers';

import { setupApplicationTest } from 'ember-qunit';

import { make, setupFactoryGuy } from 'ember-data-factory-guy';


module('Acceptance | Clearing Completed', function(hooks) {
  setupApplicationTest(hooks);
  setupFactoryGuy(hooks);

  test('when there are no completed todos', async function(assert) {
    make('todo');

    await visit('/');
    const todosBefore = findAll('[data-test-todo-id]');

    await click('[data-test-clear-button]');

    const todosAfter = findAll('[data-test-todo-id]');

    assert.equal(todosAfter.length, todosBefore.length);
  });

  test('when there is one todo that is completed', async function(assert) {

  });

  test('when there are only completed todos', async function(assert) {

  });
});
