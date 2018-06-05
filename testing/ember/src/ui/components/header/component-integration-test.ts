import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import { render, fillIn, triggerEvent  } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { stubService } from 'example-app/tests/helpers';

module('Integration | Component | header', function(hooks) {
  setupRenderingTest(hooks);

  test('submitting clears the text field', async function(assert) {
    assert.expect(1);

    stubService('todos', { add() {} });

    await render(hbs`<Header />`);

    const element = this.element.querySelector('input.new-todo') as HTMLInputElement;

    await fillIn(element, 'Something that needs to be done');
    await triggerEvent('header form', 'submit');

    const value = element.value;

    assert.equal(value, '');
  });

  test('submitting sends the text to the todo manager service', async function(assert) {
    assert.expect(1);

    const todoText = 'Something that needs to be done';

    stubService('todos', {
      add(text: string) {
        assert.equal(text, todoText);
      }
    });

    await render(hbs`<Header />`);

    const element = this.element.querySelector('input.new-todo') as HTMLInputElement;

    await fillIn(element, todoText);
    await triggerEvent('header form', 'submit');
  });
});
