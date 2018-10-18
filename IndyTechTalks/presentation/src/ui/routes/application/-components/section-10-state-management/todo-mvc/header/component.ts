import Component, { tracked } from 'sparkles-component';
import { service } from '@ember-decorators/service';

import TodoManager from 'react-vs-ember/services/todo-manager';

export default class Header extends Component {
  @service todoManager!: TodoManager;

  @tracked text = '';

  didSubmit() {
    this.todoManager.add(this.text);
    this.text = '';
  }
}
