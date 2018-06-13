import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

import firstTodo from 'example-app/tests/helpers/pages/first-todo';
import app from 'example-app/tests/helpers/pages/app';

module('Acceptance | todo editing', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function() {
    await visit('/');
  });

  test('the initial todo can be edited', async function(assert) {
    assert.expect(1);

    await firstTodo.click();

    assert.ok(firstTodo.isEditing());
  });

  test('the initial todo can have the text changed', async function(assert) {
    assert.expect(2);

    await firstTodo.click();

    const newText = 'Some new text or something';

    assert.notOk(firstTodo.label().textContent.includes(newText));

    await firstTodo.fill(newText);

    assert.ok(firstTodo.label().textContent.includes(newText));
  });

  test('the initial todo can be completed', async function(assert) {
    assert.expect(2);

    assert.equal(app.completedTodos().length, 0);

    await firstTodo.toggle();

    assert.equal(app.completedTodos().length, 1);
  });
});
