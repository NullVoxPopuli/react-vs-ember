import DS from 'ember-data';
import Service from '@ember/service';
import { service } from '@ember-decorators/service';

import Todo from 'example-app/data/models/todo';

type ID =
  | string
  | number;

export default class TodosService extends Service {
  @service store!: DS.Store;

  all() {
    return this.store.peekAll('todo');
  }

  completed() {
    return this.all().filter(todo => todo.completed);
  }

  lastId = 0;
  add(text: string) {
    const todo = {
      id: this.lastId++,
      completed: false,
      text
    };

    this.store.createRecord('todo', todo);
  }

  find(id: ID): Todo | null {
    return this.store.peekRecord('todo', id);
  }

  destroyTodo(id: ID) {
    const record = this.find(id);

    if (record) {
      record.deleteRecord();
    }
  }

  clearCompleted() {
    this.completed().forEach(todo => {
      todo.deleteRecord();
    });
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
    return this.completed().length;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'todos': TodosService;
  }
}
