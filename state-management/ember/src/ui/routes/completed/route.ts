import DS from 'ember-data';

import Route from '@ember/routing/route';

import Todo from 'example-app/ui/data/models/todo';

export default class CompletedRoute extends Route {
  store!: DS.Store;

  model() {
    return this.store
      .peekAll('todo')
      .filter((todo: Todo) => todo.completed);
  }
}
