import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';

export default class AsyncButton extends Component {
  clickCount = 0;

  didClick = task(function * () {
    yield timeout(2000);

    this.set('clickCount', this.clickCount + 1);
  });
}
