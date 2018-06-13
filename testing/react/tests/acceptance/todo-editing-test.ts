require('tests/support/setup');

import { describe, beforeEach, it } from '@bigtest/mocha';
import { expect } from 'chai';

import { setupAppForTesting } from '@bigtest/react';

import Application from '@ui/application';

import { describeApplication } from 'tests/helpers/setup-for-acceptance';
import page from 'tests/helpers/pages/todo-mvc';


describe('Acceptance | todo editing', () => {
  beforeEach(async () => {
    await setupAppForTesting(Application);
  });

  describe('the initial todo', () => {
    beforeEach(async () => {
      await page.clickFirstTodo
    });

    it('can be edited', async () => {
      expect(page.isEditing()).to.be.true;
    });
  })
  //
  // it('the initial todo can have the text change', () => {
  //
  // });
  //
  // it('the initial todo can be completed', () => {
  //
  // });
});
