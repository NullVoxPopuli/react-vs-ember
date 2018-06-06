import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import { render, triggerEvent, triggerKeyEvent, pauseTest, blur, focus, find, fillIn, settled, getSettledState  } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { stubService } from 'example-app/tests/helpers';

module('Integration | Component | todo', function(hooks) {
  setupRenderingTest(hooks);

  const editingSelector = 'li.editing';
  const inputSelector = 'input.edit';
  const labelSelector = 'label[data-test-todo-label]';
  const sampleTodo = { id: 1, text: 'Something that needs to be done' };
  const fakeChangeText = (assert: Assert) => (id: number, text: string) => {
    assert.equal(id, sampleTodo.id);
    assert.equal(text, sampleTodo.text);
  }

  test('click label | toggles editing', async function(assert) {
    assert.expect(4);

    this.set('testTodo', sampleTodo);
    await render(hbs`<Todo @todo={{testTodo}} />`);

    assert.notOk(
      this.element.querySelector(editingSelector),
      'nothing should be editing before any interaction'
    );

    assert.notEqual(
      document.activeElement, find(inputSelector),
      'input should not have focus when not editing'
    );

    await triggerEvent(labelSelector, 'click');

    assert.ok(
      this.element.querySelector(editingSelector),
      'clicking the label should trigger editing'
    );

    assert.equal(
      document.activeElement, find(inputSelector),
      'input should have focus after the label is clicked'
    );

  });

  skip('input field blur | finishes editing', async function(assert) {
    assert.expect(0);
  });

  skip('input field blur | updates the todo', async function(assert) {
    assert.expect(0);
  });

  skip('input keypress tab | finishes editing', async function(assert) {
    assert.expect(2);

    stubService('todos', { changeText: fakeChangeText });

    this.set('testTodo', sampleTodo);
    await render(hbs`<Todo @todo={{testTodo}} />`);

    await triggerEvent(labelSelector, 'click');
    await triggerKeyEvent(inputSelector, 'keydown', 9);
  });

  test('input keypress enter | finishes editing', async function(assert) {
    assert.expect(5);

    stubService('todos', { changeText: fakeChangeText });

    this.set('testTodo', sampleTodo);
    await render(hbs`<Todo @todo={{testTodo}} />`);
    await triggerEvent(labelSelector, 'click');

    assert.ok(
      this.element.querySelector(editingSelector),
      'clicking the label should trigger editing'
    );

    await settled();

    assert.equal(document.activeElement, find(inputSelector), 'input should have focus after the label is clicked');
    find(inputSelector).blur();
    // https://github.com/emberjs/ember-test-helpers/issues/381
    await blur(inputSelector);

    assert.notEqual(document.activeElement, find(inputSelector), 'input should not have focus after a blur');
    await settled();
  });

  skip('input keypress escape | finishes editing', async function(assert) {
    assert.expect(2);

    stubService('todos', { changeText: fakeChangeText });

    this.set('testTodo', sampleTodo);
    await render(hbs`<Todo @todo={{testTodo}} />`);

    await triggerEvent(labelSelector, 'click');
    await focus(inputSelector);
    await triggerKeyEvent(inputSelector, 'keydown', 27);
  });
});
