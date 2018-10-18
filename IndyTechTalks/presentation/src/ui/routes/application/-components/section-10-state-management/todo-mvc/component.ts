import Component from 'sparkles-component';
import { service } from '@ember-decorators/service';

import TodoManager from 'react-vs-ember/services/todo-manager';

export default class TodoMVC extends Component {
  @service todoManager!: TodoManager;

  didInsertElement() {
    this.todoManager.add('React vs Ember Demo!');
    this.todoManager.set('currentlyViewing', 'all');
  }
}
