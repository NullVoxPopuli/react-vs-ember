import Component, { tracked } from 'sparkles-component';
import { service } from '@ember-decorators/service';
import { alias, equal, filterBy, gt } from '@ember-decorators/object/computed';

import Todo from 'react-vs-ember/data/models/todo';
import TodoManager, { ViewFilter } from 'react-vs-ember/services/todo-manager';

export default class extends Component {
  @service todoManager!: TodoManager;

  @alias('todoManager.currentList') todos!: Todo[];
  @alias('todoManager.currentlyViewing') currentlyViewing!: string;
  @equal('currentlyViewing', 'all') showAll!: boolean;
  @equal('currentlyViewing', 'uncompleted') showActive!: boolean;
  @equal('currentlyViewing', 'completed') showCompleted!: boolean;

  @filterBy('todos', 'completed', true) completedTodos!: Todo[];

  @alias('todos.length') todosCount!: number;

  @gt('todosCount', 0) showClearButton!: boolean;

  @tracked('todosCount')
  get itemWord() {
    if (this.todosCount === 0) return 'items';

    return this.todosCount > 1 ? 'items' : 'item';
  }

  clearCompleted() {
    this.todoManager.clearCompleted();
  }

  setFilter(filterFor: ViewFilter) {
    this.todoManager.set('currentlyViewing', filterFor);
  }
}
