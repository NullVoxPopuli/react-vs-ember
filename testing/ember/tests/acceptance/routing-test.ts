import { module, test } from 'qunit';
import { visit, click, currentURL, currentRouteName } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | routing', function(hooks) {
  setupApplicationTest(hooks);

  test('click All', async function(assert) {
    await visit('completed'); // should be different route than what is being tested
    await click('[data-test-filter-all] a');

    assert.equal(currentRouteName(), 'index');
  });

  test('click Active', async function(assert) {
    await visit('/');
    await click('[data-test-filter-active] a');

    assert.equal(currentRouteName(), 'uncompleted');
  });

  test('click Completed', async function(assert) {
    await visit('/');
    await click('[data-test-filter-completed] a');

    assert.equal(currentRouteName(), 'completed');
  });

});
