import Component from '@ember/component';
import { service } from '@ember-decorators/service';
import { action } from '@ember-decorators/object';

import TodosService from 'example-app/services/todos';

export default class Header extends Component {
  @service todos!: TodosService;

  text = '';

  @action
  didSubmit(this: Header) {
    this.todos.add(this.text);
    this.set('text', '');
  }
}
