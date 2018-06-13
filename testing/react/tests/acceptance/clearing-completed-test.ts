import { describe } from '@bigtest/mocha';
import { expect } from 'chai';

import { setupApplicationTest } from 'tests/helpers/index';
import app from 'tests/helpers/pages/app';

describe('Acceptance | Clearing Completed', () => {

  describe('there are no completed todos', () => {
    let todosBefore: number;
    let todosAfter: number;

    setupApplicationTest({
      todos: { all: [
        { id: 1, text: 'not completed', completed: false },
        { id: 2, text: 'also not completed', completed: false }
      ] }
    });

    beforeEach(async () => {
      todosBefore = app.allTodosCount;

      expect(todosBefore).to.eq(2);

      await app.clickClearCompleted();
      todosAfter = app.allTodosCount;
    });

    it('number of todos do not change', () => {
      expect(todosAfter).to.eq(todosBefore);
    });
  });

  describe('there is one todo that can be completed', () => {
    let todosBefore: number;
    let todosAfter: number;

    setupApplicationTest({
      todos: { all: [
        { id: 1, text: 'not completed', completed: false },
        { id: 2, text: 'completed', completed: true }
      ] }
    });

    beforeEach(async () => {
      todosBefore = app.allTodosCount;

      expect(todosBefore).to.eq(2);

      await app.clickClearCompleted();
      todosAfter = app.allTodosCount;
    });

    it('number of todos is reduced by 1', () => {
      expect(todosAfter).to.eq(todosBefore - 1);
    });
  });

  describe('there are only completed todos', () => {
    let todosBefore: number;
    let todosAfter: number;

    setupApplicationTest({
      todos: { all: [
        { id: 1, text: 'completed', completed: true },
        { id: 2, text: 'also completed', completed: true }
      ] }
    });

    beforeEach(async () => {
      todosBefore = app.allTodosCount;

      expect(todosBefore).to.eq(2);

      await app.clickClearCompleted();
      todosAfter = app.allTodosCount;
    });

    it('there are no more todos', () => {
      expect(todosAfter).to.eq(0);
    });
  });
});
