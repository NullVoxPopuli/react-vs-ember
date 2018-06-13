import {
  interactor, text,
} from '@bigtest/interactor';

@interactor
export class TodoMVCPage {
  headingText = text('[data-test-page-header]');
}

export default new TodoMVCPage('[data-test-todo-mvc]');
