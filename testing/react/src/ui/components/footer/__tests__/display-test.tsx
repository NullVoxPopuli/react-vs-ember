import * as React from 'react';
import { describe } from '@bigtest/mocha';
// import { mount } from '@bigtest/react';
import { expect } from 'chai';

import { CLEAR_COMPLETED } from '@store/todos/actions/clear-completed';

import { mountWithContext } from 'tests/helpers';
import footer from 'tests/helpers/pages/footer';

import FooterDisplay from '../display';

describe('Integration | Component | footer', () => {
  describe('mounting', () => {
    beforeEach(async () => {
      const props = {
        allCount: 0, todosCount: 0, completedCount: 0,
        clearCompleted: () => ({ type: CLEAR_COMPLETED })
      }

      await mountWithContext(() => <FooterDisplay {...props} />);
    });

    it('suceeds', async () => {
      expect(document.querySelector('[data-test-footer]')).to.exist;
    });

  });

  describe('todo-count pluralization', function() {

    it('uses the plural word when there is more than 1 todo', async () => {
      const props = {
        allCount: 2, todosCount: 2, completedCount: 0,
        clearCompleted: () => ({ type: CLEAR_COMPLETED })
      }

      await mountWithContext(() => <FooterDisplay {...props} />);

      expect(footer.countText).to.contain('items');
    });

    it('uses the singular word when there is 1 todo', async () => {
      const props = {
        allCount: 1, todosCount: 1, completedCount: 0,
        clearCompleted: () => ({ type: CLEAR_COMPLETED })
      }

      await mountWithContext(() => <FooterDisplay {...props} />);

      expect(footer.countText).to.contain('item');
    });
  });

  describe('clear button visibility', () => {
    it('shows the clear button when there is more than 0 todos', async () => {
      const props = {
        allCount: 2, todosCount: 1, completedCount: 1,
        clearCompleted: () => ({ type: CLEAR_COMPLETED })
      }

      await mountWithContext(() => <FooterDisplay {...props} />);

      expect(footer.clearButtonIsPresent).to.be.true
    });

    it('does not show the clear button when there are 0 todos', async () => {
      const props = {
        allCount: 2, todosCount: 2, completedCount: 0,
        clearCompleted: () => ({ type: CLEAR_COMPLETED })
      }

      await mountWithContext(() => <FooterDisplay {...props} />);

      expect(footer.clearButtonIsPresent).to.be.false
    });
  })

});
