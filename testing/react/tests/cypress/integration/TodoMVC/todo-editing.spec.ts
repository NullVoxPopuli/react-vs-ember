/// <reference types="Cypress" />
const host = 'localhost:1234';


describe('Acceptance | todo editing', () => {
  beforeEach(async () => {
    await cy.visit(host);
  });

  const find = (selector: string): Cypress.Chainable<JQuery<any>> => cy.get(selector);

  const selectors = {
    completed: 'ul.todo-list li.completed',
    todos: 'ul.todo-list li',
    todoInput: 'ul.todo-list li input.edit',
    todoLabels: 'ul.todo-list li label',
    completeCheckbox: (id: string) => `div[data-test-todo-id='${id}'] input.toggle`
  };

  const findAllTodos = () => find(selectors.todos);
  const findFirstTodo = () => find(selectors.todos)[0];
  const firstTodoText = () => findFirstTodo().textContent as string;
  const findFirstLabel = () => find(selectors.todoLabels)[0];


  it('the initial todo can be edited', async () => {
    await findFirstLabel.click();

    const todo = await findFirstTodo();

    expect(todo.classList).to.contain('editing');
  });

  it('the initial todo can have the text change', () => {

  });

  it('the initial todo can be completed', () => {

  });
});
