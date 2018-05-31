import DS from 'ember-data';
import Service from '@ember/service';
import { service } from '@ember-decorators/service';

import Todo from 'example-app/ui/data/models/todo';

// 3-way boolean?
type Troolean =
  | boolean
  | undefined;

type ID =
  | string
  | number;

export default class TodosService extends Service {
  @service store!: DS.Store;

  showCompleted: Troolean = undefined;

  all() {
    return this.store.peekAll('todo');
  }

  add(text: string) {
    const todo = {
      id: this.all().length,
      completed: false,
      text
    };

    this.store.createRecord('todo', todo);
  }

  find(id: ID): Todo | null {
    return this.store.peekRecord('todo', id);
  }

  remove(id: ID) {
    const record = this.find(id);

    if (record) {
      record.deleteRecord();
    }
  }

  changeText(id: ID, text: string) {
    const todo = this.find(id);

    if (todo) {
      todo.set('text', text);
    }
  }

  length() {
    return this.store.peekAll('todo').length;
  }

  numCompleted() {
    return this.store
      .peekAll('todo')
      .filter(todo => todo.completed)
      .length;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'todos': TodosService;
  }
}
