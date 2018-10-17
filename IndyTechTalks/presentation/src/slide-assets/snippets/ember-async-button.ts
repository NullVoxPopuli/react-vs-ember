import Component from '@ember/component';
import { reads } from '@ember-decorators/object/computed';
import { timeout } from 'ember-concurrency';
import { task } from 'ember-concurrency-decorators';

export default class AsyncButton extends Component {
  clickCount = 0;

  @reads('clickTask.lastSuccessful.value') lastCoords!: string;

  @task * clickTask(this: AsyncButton, e: MouseEvent) {
    yield timeout(2000);

    this.set('clickCount', this.clickCount + 1);

    return `${e.x} x ${e.y}`;
  };
}
