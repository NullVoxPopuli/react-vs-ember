import { describe, it } from '@bigtest/mocha';
import { setupAppForTesting } from '@bigtest/react';
import { expect } from 'chai';

import Application from '@ui/application';

import { describeApplication } from 'tests/helpers/setup-for-acceptance';
import page from 'tests/helpers/pages/todo-mvc';

// usage: https://github.com/bigtestjs/react/blob/master/tests/setup-app-test.js
describe('Acceptance | Application | renders', () => {

  it('renders', async () => {
    await setupAppForTesting(Application);

    expect(page.headingText).to.equal('todos');
  });

  it('resolves with the app', async () => {
    const app = await setupAppForTesting(Application)

    expect(app).to.be.an.instanceOf(Application);
  });
});
