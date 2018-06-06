import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

import { click, findAll, find, fillIn } from '@ember/test-helpers';

module('Acceptance | todo editing', function(hooks) {
  setupApplicationTest(hooks);

  const selectors = {
    completed: 'ul.todo-list li.completed',
    todos: 'ul.todo-list li',
    todoInput: 'ul.todo-list li input.edit',
    todoLabels: 'ul.todo-list li label',
    completeCheckbox: (id: string) => `div[data-test-todo-id='${id}'] input.toggle`
  };

  const findAllTodos = (): HTMLElement => findAll(selectors.todos);
  const findFirstTodo = (): HTMLElement => findAll(selectors.todos)[0];
  const firstTodoText = () => findFirstTodo().textContent as string;
  const findFirstLabel = (): HTMLElement => findAll(selectors.todoLabels)[0];

  hooks.beforeEach(async function() {
    await visit('/');
  });

  test('the initial todo can be edited', async function(assert) {
    assert.expect(1);

    await click(findFirstLabel());

    assert.ok(findFirstTodo().classList.contains('editing'));
  });

  test('the initial todo can have the text changed', async function(assert) {
    assert.expect(2);

    await click(findFirstLabel());

    const input = findFirstTodo().querySelector('input.edit') as HTMLInputElement;
    const newText = 'Some new text or something';

    assert.notOk(
      firstTodoText().includes(newText),
      'New text should not have been set yet'
    );

    await fillIn(input, newText);

    assert.ok(firstTodoText().includes(newText));
  });

  test('the initial todo can be completed', async function(assert) {
    assert.expect(2);

    const todo = findAll(`${selectors.todos} div`)[0] as HTMLElement;
    const id = todo.getAttribute('data-test-todo-id') as string;
    const selector = selectors.completeCheckbox(id);
    const toggle = find(selector);

    assert.equal(findAll(selectors.completed).length, 0);

    await click(toggle);

    assert.equal(findAll(selectors.completed).length, 1);
  });
});
