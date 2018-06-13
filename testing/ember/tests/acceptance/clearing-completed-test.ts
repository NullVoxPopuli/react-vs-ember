import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

import { visit } from '@ember/test-helpers';
import { make, setupFactoryGuy } from 'ember-data-factory-guy';

import Todo from 'example-app/data/models/todo';
import app from 'example-app/tests/helpers/pages/app';

module('Acceptance | Clearing Completed', function(hooks) {
  setupApplicationTest(hooks);
  setupFactoryGuy(hooks);

  module('there are no completed todos', function(hooks) {
    let todosBefore: HTMLElement[];
    let todosAfter: HTMLElement[];

    hooks.beforeEach(async function() {
      make('todo');

      await visit('/');

      todosBefore = app.allTodos();
      await app.clickClearCompleted();
      todosAfter = app.allTodos();
    });

    test('number of todos do not change', function(assert) {
      assert.equal(todosAfter.length, todosBefore.length);
    });
  });

  module('there is one todo that can be completed', function(hooks) {
    let todosBefore: HTMLElement[];
    let todosAfter: HTMLElement[];

    hooks.beforeEach(async function() {
      make('todo', 'completed');

      await visit('/');

      todosBefore = app.allTodos();
      await app.clickClearCompleted();
      todosAfter = app.allTodos();
    });

    test('number of todos is reduced by 1', function(assert) {
      assert.equal(todosAfter.length, todosBefore.length - 1);
    });
  });

  module('there are only completed todos', function(hooks) {
    let todosAfter: HTMLElement[];

    hooks.beforeEach(async function(assert) {
      make('todo', 'completed');
      make('todo');

      await visit('/');

      // just in case there are other todos, mark them as completed
      // (the app's application route creates the initial todo so
      //  the list isn't blank upon app boot)
      const store = this.owner.lookup('service:store');
      const knownTodos = store.peekAll('todo');
      await run(() => { knownTodos.forEach((todo: Todo) => todo.set('completed', true)) });

      const todosBefore = app.allTodos();

      assert.equal(todosBefore.length, knownTodos.length);

      await app.clickClearCompleted();

      todosAfter = app.allTodos();
    });

    test('there are no more todos', function(assert) {
      assert.equal(todosAfter.length, 0);
    });
  });
});
