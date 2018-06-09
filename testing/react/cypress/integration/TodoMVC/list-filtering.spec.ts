/// <reference types="Cypress" />

// const { expect } = require('chai');
// import { host } from 'tests/support/acceptance/config';
const host = 'localhost:1234';

context('Querying', () => {
  beforeEach(() => {
    cy.visit(host);
  })

  // The most commonly used query is 'cy.get()', you can
  // think of this like the '$' in jQuery

  it('cy.get() - query DOM elements', (done) => {
    cy.get('ul.todo-list li')
      .then(e => {
        const length = e.length;

        expect(length).to.eq(1);
        done();
      });
  });
});
