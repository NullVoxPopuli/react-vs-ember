import { expect } from 'chai';
import { setupAppForTesting } from '@bigtest/react';
import {
  interactor,
  clickable, fillable, blurrable
} from '@bigtest/interactor';

import Application from '@ui/application';

@interactor
class TodoMVCPage {
  clickFirstTodo = clickable('ul.todo-list li:first-child');
  fillName = fillable('ul.todo-list li:first-child input');
}

describe('Acceptance | todo editing', () => {
  let app;

  beforeEach(async () => {
    app = await setupAppForTesting(Application);
  });

  it('the initial todo can be edited', () => {
    const page = new TodoMVCPage();
      page.clickFirstTodo()
      .run();

    const edits = app.find('.editable');

    const classes = edits[0].classList;

    expect(classes).to.contain('editing');
  });

  it('the initial todo can have the text change', () => {

  });

  it('the initial todo can be completed', () => {

  });
});
