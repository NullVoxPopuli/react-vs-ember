import Model from 'ember-data/model';
import { attr } from '@ember-decorators/data';

export default class Todo extends Model {
  @attr('string') text?: string;
  @attr('boolean') completed: boolean = false;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data' {
  interface ModelRegistry {
    'todo': Todo;
  }
}
