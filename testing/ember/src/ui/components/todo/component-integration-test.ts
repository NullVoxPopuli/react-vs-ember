import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import { render, fillIn, triggerEvent  } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { stubService } from 'example-app/tests/helpers';

module('Integration | Component | todo', function(hooks) {
  setupRenderingTest(hooks);

  test('doubleClick label | toggles editing', async function(assert) {

  });

  test('input field blur | finishes editing', async function(assert) {

  });

  test('input field blur | updates the todo', async function(assert) {

  });

  test('input keypress tab | finishes editing', async function(assert) {

  });

  test('input keypress enter | finishes editing', async function(assert) {
    assert.expect(2);

    const sampleTodo = { id: 1, text: 'Something that needs to be done' };

    stubService('todos', {
      changeText(id: number, text: string) {
        assert.equal(id, sampleTodo.id);
        assert.equal(text, sampleTodo.text);
      }
    });

    this.set('testTodo', sampleTodo);
    await render(hbs`<Todo @todo={{testTodo}}/>`);

    const element = this.element.querySelector('input.new-todo') as HTMLInputElement;

    // await fillIn(element, todoText);
    await triggerEvent('header form', 'submit');
  });

  test('input keypress escape | finishes editing', async function(assert) {

  });
});
