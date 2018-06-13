import { describe } from '@bigtest/mocha';
import { expect } from 'chai';

import { setupApplicationTest } from 'tests/helpers';
import app from 'tests/helpers/pages/app';

describe('Acceptance | Clearing Completed', () => {
  setupApplicationTest();

  describe('there are no completed todos', () => {
    test('number of todos do not change', () => {

    });
  });

  describe('there is one todo that can be completed', () => {
    test('number of todos is reduced by ', () => {

    });
  });

  describe('there are only completed todos', () => {
    test('there are no more todos', () => {

    });
  });
});
