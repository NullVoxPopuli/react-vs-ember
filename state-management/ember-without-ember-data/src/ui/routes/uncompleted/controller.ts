import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

import TodosService from 'example-app/services/todos';

export default class UncompletedController extends Controller {
  @service todos!: TodosService;
}
