import { toggle, add } from "example-app/redux-store/todos";

const host = 'localhost:1234';

context('Querying', () => {
  const find = selector => cy.get(selector);
  beforeEach(() => {
    cy.visit(host);
    cy.window().its('__store__').then(store => {
      store.dispatch(add('beforeEach todo 1'));
      store.dispatch(add('beforeEach todo 2'));
      store.dispatch(toggle(1)); // complet todo with id 1
    });
  });

  it('lists all todos', async done => {
    const elements = await find('ul.todo-list li');
    const length = elements.length;

    expect(length).to.eq(3);
    done();
  });

  it('lists only completed todos', done => {
    // cy.
  });

  it('lists only active todos', done => {

  })
});
