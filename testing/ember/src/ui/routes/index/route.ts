import DS from 'ember-data';

import Route from '@ember/routing/route';

export default class ApplicationIndexRoute extends Route {
  store!: DS.Store;

  model() {
    return this.store.peekAll('todo');
  }
}
