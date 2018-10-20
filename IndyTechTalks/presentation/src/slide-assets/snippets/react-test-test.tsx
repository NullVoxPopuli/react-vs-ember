import { describe } from '@bigtest/mocha';
import { visit } from '@bigtest/react';
import { expect } from 'chai';

import { setupApplicationTest } from 'tests/helpers/index';
import app from 'tests/helpers/pages/app';

describe('Acceptance | list filtering', function() {
  setupApplicationTest({
    todos: { all: [
      { id: 1, text: 'not completed', completed: false },
      { id: 2, text: 'also not completed', completed: false },
      { id: 3, text: 'completed', completed: true }
    ] }
  });

  describe('listing all todos', () => {
    beforeEach(async () => {
      await app.clickAll();
    });

    it('displays everything', () => {
      expect(app.allTodosCount).to.eq(3);
    });
  })

  describe('listing active todos', () => {
    beforeEach(async () => {
      await app.clickActive();
    });

    it('displays only the active todos', () => {
      expect(app.allTodosCount).to.eq(2);
    });
  });

  describe('listing only completed todos', () => {
    beforeEach(async () => {
      await app.clickCompleted();
    });

    it('displays only the completed todo', () => {
      expect(app.allTodosCount).to.eq(1);
    });
  });
});
