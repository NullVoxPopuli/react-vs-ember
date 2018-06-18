import * as React from 'react';
import { describe } from '@bigtest/mocha';
import { mount } from '@bigtest/react';
import { expect } from 'chai';
import * as sinon from 'sinon';

import { FirstTodoPage } from 'tests/helpers/pages/first-todo';

import TodoDisplay from '../display';

const testId = 'todo-integration-test';
const todo = new FirstTodoPage(`#${testId}`);

describe('Integration | Component | todo', () => {
  describe('mounting', () => {
    beforeEach(async () => {
      const props = {
        todo: { id: 1, text: 'hi', completed: false },
        toggleCompletion: sinon.spy(),
        destroyTodo: sinon.spy(),
        editTodo: sinon.spy()
      };

      await mount(() => <TodoDisplay {...props} />, { mountId: testId });
    });

    it('suceeds', async () => {
      expect(document.querySelector('[data-test-todo]')).to.exist;
    });
  });

  describe('click label', () => {
    let editTodo;

    beforeEach(async () => {
      editTodo = sinon.spy();

      const props = {
        todo: { id: 1, text: 'hi', completed: false },
        toggleCompletion: sinon.spy(),
        destroyTodo: sinon.spy(),
        editTodo
      };

      await mount(() => <TodoDisplay {...props} />, { mountId: testId });

      await todo.clickLabel();
    });


    it('toggles editing', () => {
      expect(todo.isEditing).to.be.true;
    });

    it('input is focussed', () => {
      expect(todo.input.hasFocus).to.be.true;
    });

    describe('a key is pressed', () => {
      beforeEach(async () => {
        await todo.clickLabel();
        // sanity / required state before continuing
        expect(todo.isEditing, 'isEditing').to.be.true;
        expect(todo.input.hasFocus, 'hasFocus').to.be.true;
      });

      describe('enter key', () => {
        beforeEach(async () => {
          await todo.pressEnter();
        });

        it('blurs the field', () => {
          expect(todo.isEditing).to.be.false;
        });

        it('submits the change', () => {
          expect(editTodo).to.have.been.calledWith(1, 'hi');
        });
      });

      describe('escape key', () => {
        beforeEach(async () => {
          await todo.pressEscape();
        });

        it('blurs the field', () => {
          expect(todo.isEditing).to.be.false;
        });

        it('submits the change', () => {
          expect(editTodo).to.have.been.calledWith(1, 'hi');
        });
      });

      describe('tab key', () => {
        beforeEach(async () => {
          await todo.pressTab();
        });

        it('blurs the field', () => {
          expect(todo.isEditing).to.be.false;
        });

        it('submits the change', () => {
          expect(editTodo).to.have.been.calledWith(1, 'hi');
        });
      });
    });
  });

});
