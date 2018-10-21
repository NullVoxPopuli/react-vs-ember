import Component, { tracked } from 'sparkles-component';
import { service } from '@ember-decorators/service';
import { computed } from '@ember-decorators/object';
import { alias } from '@ember-decorators/object/computed';

export default class extends Component {
  @service router;

  @computed('router.currentURL')
  get currentRoute() {
    const url = this.router.currentURL;
    const withoutQuery = url.split('?')[0];

    return withoutQuery;
  }


  @alias('router.currentRouteName') routeName!: string;
}
