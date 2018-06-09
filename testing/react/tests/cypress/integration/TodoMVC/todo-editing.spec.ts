/// <reference types="Cypress" />
const host = 'localhost:1234';


describe('Acceptance | todo editing', () => {
  beforeEach(() => {
    cy.visit(host);
  });

  const find = (selector: string): CyThennable => cy.get(selector);

  const selectors = {
    completed: 'ul.todo-list li.completed',
    todos: 'ul.todo-list li',
    todoInput: 'ul.todo-list li input.edit',
    todoLabels: 'ul.todo-list li label',
    completeCheckbox: (id: string) => `div[data-test-todo-id='${id}'] input.toggle`
  };

  const findAllTodos = () => find(selectors.todos);
  const findLabels = () => find(selectors.todoLabels);


  it('the initial todo can be edited', done => {
    findAllTodos()
      .first()
      .find('label').click()
      .then(() => findAllTodos())
      .then(todos => {
        const todo = todos[0];

        expect(todo.classList).to.contain('editing');

        done();
      });
  });

  it('the initial todo can have the text change', done => {
    findAllTodos()
      .then(todos => {
        const todo = todos[0];

        expect(todo.classList).to.contain('editing');

        done();
      });
  });

  it('the initial todo can be completed', () => {

  });
});
