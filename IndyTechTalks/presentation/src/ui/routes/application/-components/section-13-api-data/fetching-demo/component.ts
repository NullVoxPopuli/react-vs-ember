import Component from 'sparkles-component';
import { service } from '@ember-decorators/service';
import { computed } from '@ember-decorators/object';

export default class extends Component {
  @service router;

  @computed('router.currentURL')
  get route() {
    const url = this.router.currentURL;
    const withoutQuery = url.split('?')[0];

    return withoutQuery;
  }
}
