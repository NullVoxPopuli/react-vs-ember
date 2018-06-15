import { module, test } from 'qunit';
import { visit, click, currentURL, currentRouteName } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

import app from 'example-app/tests/helpers/pages/app';

module('Acceptance | routing', function(hooks) {
  setupApplicationTest(hooks);

  test('click All', async function(assert) {
    assert.expect(1);

    // should be different route than what is being tested
    await visit('completed');
    await app.clickAll();

    assert.equal(currentRouteName(), 'index');
  });

  test('click Active', async function(assert) {
    assert.expect(1);

    await visit('uncompleted');
    await app.clickActive();

    assert.equal(currentRouteName(), 'uncompleted');
  });

  test('click Completed', async function(assert) {
    assert.expect(1);

    await visit('/');
    await app.clickCompleted();

    assert.equal(currentRouteName(), 'completed');
  });

});
