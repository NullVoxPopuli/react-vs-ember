import { describe, beforeEach, it } from '@bigtest/mocha';
import { expect } from 'chai';
import { setupAppForTesting } from '@bigtest/react';

import Application from '@ui/application';

import firstTodo from 'tests/helpers/pages/first-todo';


describe('Acceptance | todo editing', () => {
  beforeEach(async () => {
    await setupAppForTesting(Application);
  });

  describe('the initial todo', () => {
    it('starts in display mode', () => {
      expect(firstTodo.isEditing).to.be.false;
    });

    describe('the label is clicked', () => {
      beforeEach(async () => {
        await firstTodo.clickLabel();
      });

      it('is in editing mode', async () => {
        expect(firstTodo.isEditing).to.be.true;
      });

      it('can have the text change', async () => {
        const newText = 'Some new text or something';

        expect(firstTodo.label).not.contain(newText);

        await firstTodo.fill(newText);
        await firstTodo.blur();

        expect(firstTodo.label).to.contain(newText);
      });
    });

    it('can be completed', async () => {
      expect(firstTodo.isCompleted).to.be.false;

      await firstTodo.toggle();

      expect(firstTodo.isCompleted).to.be.true;
    });
  });
});
