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

  module('the initial todo', function() {
    test('starts in display mode', function(assert) {
      assert.equal(firstTodo.isEditing(), false);
    });

    module('the label is clicked', function(hooks) {
      hooks.beforeEach(async function() {
        await firstTodo.click();
      });

      test('it is in editing mode', function(assert) {
        assert.equal(firstTodo.isEditing(), true);
      });

      module('changing the text', function(hooks) {
        const newText = 'Some new text or something';

        hooks.beforeEach(async function(assert) {
          const hasNewText = firstTodo.label().textContent.includes(newText);
          assert.equal(hasNewText, false);

          await firstTodo.click();
          await firstTodo.fill(newText);
        });

        test('text is updated', async function(assert) {
          assert.ok(firstTodo.label().textContent.includes(newText));
        });
      });
    });

    module('completion', function(hooks) {
      hooks.beforeEach(async function(assert) {
        assert.equal(app.completedTodos().length, 0);

        await firstTodo.toggle();
      });

      test('is marked as completed', async function(assert) {
        assert.equal(app.completedTodos().length, 1);
      });
    });
  });
});
