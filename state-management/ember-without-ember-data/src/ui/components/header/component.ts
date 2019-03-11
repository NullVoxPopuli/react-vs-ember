import Component from '@ember/component';
import { inject as service } from '@ember/service';

import TodosService from 'example-app/services/todos';

export default class Header extends Component {
  @service todos!: TodosService;

  text = '';

  didSubmit(this: Header) {
    this.todos.add(this.text);
    this.set('text', '');
  }
}
