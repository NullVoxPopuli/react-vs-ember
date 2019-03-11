import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

import TodosService from 'example-app/services/todos';

export default class Header extends Component {
  @service todos!: TodosService;

  @tracked text = '';

  didSubmit(this: Header) {
    this.todos.add(this.text);
    this.text = '';
  }
}
