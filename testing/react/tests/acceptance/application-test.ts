import { describe, it } from '@bigtest/mocha';
import { setupAppForTesting } from '@bigtest/react';
import { expect } from 'chai';

import Application from '@ui/application';

import page from 'tests/helpers/pages/app';

// usage: https://github.com/bigtestjs/react/blob/master/tests/setup-app-test.js
describe('Acceptance | Application | renders', () => {
  let app;

  beforeEach(async () => {
    app = await setupAppForTesting(Application);
  })

  it('renders', async () => {
    expect(page.headingText).to.equal('todos');
  });

  it('resolves with the app', async () => {
    expect(app).to.be.an.instanceOf(Application);
  });
});
