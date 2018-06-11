import { run } from '@ember/runloop';
import { module, test } from 'qunit';

import {
  visit, findAll, click, settled
} from '@ember/test-helpers';

import { setupApplicationTest } from 'ember-qunit';

import { make, setupFactoryGuy } from 'ember-data-factory-guy';
import Todo from 'example-app/data/models/todo';


module('Acceptance | Clearing Completed', function(hooks) {
  setupApplicationTest(hooks);
  setupFactoryGuy(hooks);

  test('when there are no completed todos', async function(assert) {
    assert.expect(1);

    make('todo');

    await visit('/');
    const todosBefore = findAll('[data-test-todo-id]');

    await click('[data-test-clear-button]');

    const todosAfter = findAll('[data-test-todo-id]');

    assert.equal(todosAfter.length, todosBefore.length);
  });

  test('when there is one todo that is completed', async function(assert) {
    assert.expect(1);

    make('todo', 'completed');

    await visit('/');
    const todosBefore = findAll('[data-test-todo-id]');

    await click('[data-test-clear-button]');

    const todosAfter = findAll('[data-test-todo-id]');

    assert.equal(todosAfter.length, todosBefore.length - 1);
  });

  test('when there are only completed todos', async function(assert) {
    assert.expect(2);

    make('todo', 'completed');
    make('todo');

    await visit('/');

    // just in case there are other todos, mark them as completed
    // (the app's application route creates the initial todo so
    //  the list isn't blank upon app boot)
    const store = this.owner.lookup('service:store');
    const knownTodos = store.peekAll('todo');
    await run(() => { knownTodos.forEach((todo: Todo) => todo.set('completed', true)) });

    const todosBefore = findAll('[data-test-todo-id]');

    assert.equal(todosBefore.length, knownTodos.length);

    await click('[data-test-clear-button]');

    const todosAfter = findAll('[data-test-todo-id]');

    assert.equal(todosAfter.length, 0);
  });
});
