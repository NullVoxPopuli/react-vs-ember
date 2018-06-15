import { describe } from '@bigtest/mocha';
import { visit } from '@bigtest/react';
import { expect } from 'chai';

import { setupApplicationTest } from 'tests/helpers';
import firstTodo from 'tests/helpers/pages/first-todo';

describe('Acceptance | todo editing', () => {
  setupApplicationTest();

  describe('the initial todo', () => {
    beforeEach(async () => {
      await visit('/');
    });

    it('starts in display mode', () => {
      expect(firstTodo.isEditing).to.be.false;
    });

    describe('the label is clicked', () => {
      beforeEach(async () => {
        await firstTodo.clickLabel();
      });

      it('is in editing mode', () => {
        expect(firstTodo.isEditing).to.be.true;
      });

      describe('changing the text', () => {
        const newText = 'Some new text or something';

        beforeEach(async () => {
          expect(firstTodo.label).not.contain(newText);

          await firstTodo.fill(newText);
          await firstTodo.blur();
        });

        it('is updated', () => {
          expect(firstTodo.label).to.contain(newText);
        });
      });
    });

    describe('completion', () => {
      beforeEach(async () => {
        expect(firstTodo.isCompleted).to.be.false;

        await firstTodo.toggle();
      });

      it('is completed', () => {
        expect(firstTodo.isCompleted).to.be.true;
      });
    });
  });
});
