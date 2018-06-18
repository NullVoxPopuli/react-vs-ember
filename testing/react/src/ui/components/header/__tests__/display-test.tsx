import * as React from 'react';
import { describe } from '@bigtest/mocha';
import { mount } from '@bigtest/react';
import { expect } from 'chai';
import * as sinon from 'sinon';

import header from 'tests/helpers/pages/header';

import HeaderDisplay from '../display';

describe('Integration | Component | header', () => {
  describe('mounting', () => {
    beforeEach(async () => {
      const props = { addTodo: sinon.spy() }

      await mount(() => <HeaderDisplay {...props} />);
    });

    it('suceeds', async () => {
      expect(document.querySelector('[data-test-header]')).to.exist;
    });
  });

  describe('addTodo', () => {
    let addTodo;

    beforeEach(async () => {
      addTodo = sinon.spy();
      const props = { addTodo };

      await mount(() => <HeaderDisplay {...props} />);
      await header.fill('something to do');
      await header.submit();
    });

    it('hitting enter calls addTodo', () => {
      expect(addTodo).to.have.been.calledWith('something to do');
    });
  });
});
