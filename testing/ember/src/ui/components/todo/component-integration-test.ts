import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import { render, triggerEvent, triggerKeyEvent, pauseTest, blur, focus, find, fillIn, settled, getSettledState  } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { stubService } from 'example-app/tests/helpers';

module('Integration | Component | todo', function(hooks) {
  setupRenderingTest(hooks);

  const editingSelector = 'li.editing';
  const inputSelector = '[data-test-todo-edit]';
  const labelSelector = '[data-test-todo-label]';
  const sampleTodo = { id: 1, text: 'Something that needs to be done' };
  const fakeChangeText = (assert: Assert) => (id: number, text: string) => {
    assert.equal(id, sampleTodo.id);
    assert.equal(text, sampleTodo.text);
  }

  test('click label | toggles editing', async function(assert) {
    assert.expect(4);

    this.set('testTodo', sampleTodo);
    await render(hbs`<Todo @todo={{testTodo}} />`);

    assert.dom(editingSelector).doesNotExist();
    assert.dom(inputSelector).isNotFocused();

    await triggerEvent(labelSelector, 'click');

    assert.dom(editingSelector).exists();
    assert.dom(inputSelector).isFocused();
  });

  test('input field blur | unfocuses the input', async function(assert) {
    assert.expect(2);

    this.set('testTodo', sampleTodo);
    await render(hbs`<Todo @todo={{testTodo}} />`);
    await triggerEvent(labelSelector, 'click');

    assert.dom(inputSelector).isFocused();

    await blur(inputSelector);

    assert.dom(inputSelector).isNotFocused();
  });

  test('input field blur | updates the todo', async function(assert) {
    assert.expect(1);

    stubService('todos', { changeText: fakeChangeText });

    this.set('testTodo', sampleTodo);
    await render(hbs`<Todo @todo={{testTodo}} />`);

    await triggerEvent(labelSelector, 'click');
    await fillIn(inputSelector, 'updated');
    await blur(inputSelector);

    const text = find(labelSelector).textContent.trim();

    assert.equal(text, 'updated');
  });

  test('input keypress tab | finishes editing', async function(assert) {
    assert.expect(2);

    stubService('todos', { changeText: fakeChangeText });

    this.set('testTodo', sampleTodo);
    await render(hbs`<Todo @todo={{testTodo}} />`);

    await triggerEvent(labelSelector, 'click');

    assert.dom(editingSelector).exists();

    await triggerKeyEvent(inputSelector, 'keydown', 9);

    assert.dom(editingSelector).doesNotExist();
  });

  test('input keypress enter | finishes editing', async function(assert) {
    assert.expect(2);

    stubService('todos', { changeText: fakeChangeText });

    this.set('testTodo', sampleTodo);
    await render(hbs`<Todo @todo={{testTodo}} />`);
    await triggerEvent(labelSelector, 'click');

    assert.dom(editingSelector).exists();

    await triggerKeyEvent(inputSelector, 'keydown', 13);

    assert.dom(editingSelector).doesNotExist();
  });

  test('input keypress escape | finishes editing', async function(assert) {
    assert.expect(2);

    stubService('todos', { changeText: fakeChangeText });

    this.set('testTodo', sampleTodo);
    await render(hbs`<Todo @todo={{testTodo}} />`);

    await triggerEvent(labelSelector, 'click');

    assert.dom(editingSelector).exists();

    await triggerKeyEvent(inputSelector, 'keydown', 27);

    assert.dom(editingSelector).doesNotExist();
  });
});
