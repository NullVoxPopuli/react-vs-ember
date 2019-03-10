import { describe, it } from '@bigtest/mocha';
import { setupAppForTesting, visit, location } from '@bigtest/react';
import { expect } from 'chai';

import Application from '@ui/application';

import { setupApplicationTest } from 'tests/helpers/index';
import page from 'tests/helpers/pages/app';
import header from 'tests/helpers/pages/header';

const theForbiddenTodo = 'make another TodoMVC App';

// usage: https://github.com/bigtestjs/react/blob/master/tests/setup-app-test.js
describe(`Acceptance | Cannot make a todo titled "${theForbiddenTodo}"`, () => {
  setupApplicationTest({ todo: { all: [] } });

  describe('The user wants to add a todo', () => {
    beforeEach(async () => {
      await visit('/')
    });

    it('navigates to /', () => {
      expect(location().pathname).to.eq('/');
    });

    describe(`the user types in ${theForbiddenTodo}`, () => {
      beforeEach(async () => {
        await header.fill(theForbiddenTodo);
        await header.submit();
      });

      it('text field becomes empty', () => {
        expect(header.fieldText).to.equal('');
      });


      it(`the list does not contain ${theForbiddenTodo}`, () => {
        const todos = page.todos();

        expect(todos.length).to.equal(1);

        const text = todos.map(todo => todo.text).join('');

        expect(text).to.not.include(theForbiddenTodo);
      });
    });
  });
});
