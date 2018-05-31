import Route from '@ember/routing/route';
import { service } from '@ember-decorators/service';

import TodosService from 'example-app/services/todos';

export default class ApplicationRoute extends Route {
  @service todos!: TodosService;

  activate(this: ApplicationRoute) {
    this.todos.add('Without Redux!');
  }
}
