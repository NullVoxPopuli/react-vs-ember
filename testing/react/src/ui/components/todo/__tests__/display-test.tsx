import * as React from 'react';
import { describe } from '@bigtest/mocha';
import { mount } from '@bigtest/react';
import { expect } from 'chai';
import * as sinon from 'sinon';

import header from 'tests/helpers/pages/header';

import TodoDisplay from '../display';

describe('Integration | Component | todo', () => {
  describe('mounting', () => {
    beforeEach(async () => {
      const props = {
        todo: { id: 1, text: 'hi', completed: false },
        toggleCompletion: sinon.spy(),
        destroyTodo: sinon.spy(),
        editTodo: sinon.spy()
      };

      await mount(() => <TodoDisplay {...props} />);
    });

    it('suceeds', async () => {
      expect(document.querySelector('[data-test-todo]')).to.exist;
    });
  });

});
