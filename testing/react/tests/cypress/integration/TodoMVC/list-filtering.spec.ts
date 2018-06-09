/// <reference types="Cypress" />

import { toggle, add } from "example-app/redux-store/todos";

const host = 'localhost:1234';

context('Acceptance | list filtering', () => {
  const find = selector => cy.get(selector);

  beforeEach(() => {
    cy.visit(host);

    cy.window().its('__store__').then(store => {
      store.dispatch(add('beforeEach todo 1'));
      store.dispatch(add('beforeEach todo 2'));
      store.dispatch(toggle(1)); // complet todo with id 1
    });

  });

  it('lists all todos', done => {
    find('.filters a')
      .contains('All').click()
      .then(() => find('ul.todo-list li'))
      .then(elements => {
        const length = elements.length;

        expect(length).to.eq(3);
        done();
      });
  });

  it('lists only completed todos', done => {
    find('.filters a')
      .contains('Completed').click()
      .then(() => find('ul.todo-list li'))
      .then(elements => {
        const length = elements.length;

        expect(length).to.eq(1);
        done();
      });
  });

  it('lists only active todos', done => {
    find('.filters a')
      .contains('Active').click()
      .then(() => find('ul.todo-list li'))
      .then(elements => {
        const length = elements.length;

        expect(length).to.eq(2);
        done();
      });
  });
});
