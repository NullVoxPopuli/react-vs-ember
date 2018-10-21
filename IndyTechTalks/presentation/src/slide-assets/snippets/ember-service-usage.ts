import { service } from '@ember-decorators/service';

// imports omitted

export default class extends Component {
  @service('todos') todoManager!: TodosService;
  @service router;

  @equal('router.currentRouteName', 'index') showAll!: boolean;

  @alias('todos.length') todosCount!: number;
  @gt('todosCount', 0) showClearButton!: boolean;

  @action
  clearCompleted() {
    this.todoManager.clearCompleted();
  }
}
