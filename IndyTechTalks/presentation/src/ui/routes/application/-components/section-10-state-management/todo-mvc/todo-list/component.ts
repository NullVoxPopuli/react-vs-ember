import Component from 'sparkles-component';
import { reads } from '@ember-decorators/object/computed';

import { service } from '@ember-decorators/service';

import Todo from 'react-vs-ember/data/models/todo';
import TodoManager from 'react-vs-ember/services/todo-manager';

export default class TodoList extends Component {
  @service todoManager!: TodoManager;

  @reads('todoManager.currentList') todos!: Todo[];
}
