/// <reference types="Cypress" />

import { toggle, add } from "example-app/redux-store/todos";

const host = 'localhost:1234';

context('Acceptance | list filtering', () => {
  const find = selector => cy.get(selector);

  beforeEach(async () => {
    await cy.visit(host);

    const store = await cy.window().its('__store__');

    store.dispatch(add('beforeEach todo 1'));
    store.dispatch(add('beforeEach todo 2'));
    store.dispatch(toggle(1)); // complet todo with id 1
  });

  it('lists all todos', async done => {
    await find('.filters a').first().click();

    const elements = await find('ul.todo-list li');
    const length = elements.length;

    expect(length).to.eq(3);
    done();
  });

  it('lists only completed todos', async done => {
    await find('.filters a').last().click();

    const elements = await find('ul.todo-list li');
    const length = elements.length;

    expect(length).to.eq(2);
    done();
  });

  it('lists only active todos', async done => {
    await find('.filters a').click();

    const elements = await find('ul.todo-list li');
    const length = elements.length;

    expect(length).to.eq(2);
    done();
  });
});
