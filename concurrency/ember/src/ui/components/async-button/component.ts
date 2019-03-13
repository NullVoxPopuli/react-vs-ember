import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { timeout } from 'ember-concurrency';
import { task, lastValue } from 'ember-concurrency-decorators';

export default class AsyncButton extends Component {
  @tracked clickCount = 0;

  // get lastCoords() {
  //   return this.clickTask.lastSuccessful.value;
  // }
  @lastValue('clickTask') lastCoords!: string;

  @task
  clickTask = function*(e: MouseEvent) {
    yield timeout(2000);

    this.clickCount++;

    return `${e.x} x ${e.y}`;
  };
}
