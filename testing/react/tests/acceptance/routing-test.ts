import { describe } from '@bigtest/mocha';
import { visit, location } from '@bigtest/react';
import { expect } from 'chai';

import { setupApplicationTest } from 'tests/helpers/index';
import app from 'tests/helpers/pages/app';

describe('Acceptance | routing', () => {
  setupApplicationTest();

  describe('click All', () => {
    beforeEach(async () => {
      // should be different route than what is being tested
      await visit('/completed');
      await app.clickAll();
    });

    it('navigates to /', () => {
      expect(location().pathname).to.eq('/');
    });
  });

  describe('click Active', () => {
    beforeEach(async () => {
      await visit('/');
      await app.clickActive();
    });

    it('navigates to /active', () => {
      expect(location().pathname).to.eq('/active');
    });
  });

  describe('click Completed', () => {
    beforeEach(async () => {
      await visit('/');
      await app.clickCompleted();
    });

    it('navigates to /completed', () => {
      expect(location().pathname).to.eq('/completed');
    });
  });

});
