/// <reference types="Cypress" />

const host = 'localhost:1234';

context('Querying', () => {
  beforeEach(() => {
    cy.visit(host);
  });

  it('lists all todos', done => {
    cy.get('ul.todo-list li')
      .then(e => {
        const length = e.length;

        expect(length).to.eq(1);
        done();
      });
  });

  it('lists only completed todos', done => {

  });

  it('lists only active todos', done => {

  })
});
