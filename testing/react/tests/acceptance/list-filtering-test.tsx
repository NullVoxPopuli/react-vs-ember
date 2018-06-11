import { expect } from 'chai';

describe('Acceptance | list filtering', function() {

  // it('list all todos', async () => {
  //   await ctx.visit(host);
  //
  //   // await ctx.screenshot();
  //   const todos = await ctx.findAll('ul.todo-list li');
  //
  //   expect(todos.length).to.eq(1);
  // });

  // test('list only completed todos', () => {
  //
  // });
  //
  // test('list only active todos', () => {
  //
  // });
});


import 'mocha';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { expect } from 'chai';
// import { Greeting } from '../greeting'
import Application from '@ui/application';

describe('A basic test', function () {
  let node: HTMLDivElement;

  before('setup', function () {
    node = document.createElement('div');
    document.body.appendChild(node);
  })

  after('teardown', function () {
    ReactDOM.unmountComponentAtNode(node);
    document.body.removeChild(node);
  })

  it('renders', function () {
    ReactDOM.render(<Application />, node);
    const todos = document.querySelectorAll('ul.todo-list li');

    expect(todos.length).to.eq(1);
  })
})
