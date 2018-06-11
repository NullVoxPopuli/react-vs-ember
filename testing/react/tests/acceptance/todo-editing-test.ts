import { beforeEach, describe, it } from '@bigtest/mocha';
import { expect } from 'chai';

import { setupAppForTesting } from '@bigtest/react';

import {
  interactor, text,
  clickable, fillable, blurrable
} from '@bigtest/interactor';

import Application from '@ui/application';

import { describeApplication } from 'tests/helpers/setup-for-acceptance';

@interactor
class TodoMVCPage {
  headingText = text('h1');
  clickFirstTodo = clickable('ul.todo-list li:first-child');
  fillName = fillable('ul.todo-list li:first-child input');
}

describeApplication('Acceptance | todo editing', () => {
  let app;

  it('renders', () => {
    expect(new TodoMVCPage().headingText).to.equal('todos');
  });
  //
  // beforeEach(async () => {
  //   app = await setupAppForTesting(Application);
  // });
  //
  // it('the initial todo can be edited', () => {
  //   const page = new TodoMVCPage();
  //     page.clickFirstTodo()
  //     .run();
  //
  //   const edits = app.find('.editable');
  //
  //   const classes = edits[0].classList;
  //
  //   expect(classes).to.contain('editing');
  // });
  //
  // it('the initial todo can have the text change', () => {
  //
  // });
  //
  // it('the initial todo can be completed', () => {
  //
  // });
});
