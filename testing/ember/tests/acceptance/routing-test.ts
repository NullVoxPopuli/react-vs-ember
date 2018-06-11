import { module, test } from 'qunit';
import { visit, click, currentURL, currentRouteName } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | routing', function(hooks) {
  setupApplicationTest(hooks);

  test('click All', async function(assert) {
    assert.expect(1);

    // should be different route than what is being tested
    await visit('completed');
    await click('[data-test-filter-all] a');

    assert.equal(currentRouteName(), 'index');
  });

  test('click Active', async function(assert) {
    assert.expect(1);

    await visit('/');
    await click('[data-test-filter-active] a');

    assert.equal(currentRouteName(), 'uncompleted');
  });

  test('click Completed', async function(assert) {
    assert.expect(1);

    await visit('/');
    await click('[data-test-filter-completed] a');

    assert.equal(currentRouteName(), 'completed');
  });

});
