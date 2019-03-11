import Service from '@ember/service';
import uuid from 'uuid';
import { tracked } from '@glimmer/tracking';

interface Todo {
  id: string;
  completed: boolean;
  text: string;
}

export default class TodosService extends Service {
  @tracked todos: Todo[] = [];

  get all() {
    return this.todos;
  }

  get completed() {
    return this.all.filter(todo => todo.completed);
  }

  get uncompleted() {
    return this.all.filter(todo => !todo.completed);
  }

  add(text: string) {
    this.todos = this.todos.concat({
      id: uuid(),
      completed: false,
      text
    });
  }

  find(id: string): Todo | undefined {
    return this.todos.find(todo => todo.id === id);
  }

  destroyTodo(id: string) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed)
  }

  changeText(id: string, text: string) {
    const todo = this.find(id);

    if (todo) {
      todo.text = text;
    }
  }

  length() {
    return this.todos.length;
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
