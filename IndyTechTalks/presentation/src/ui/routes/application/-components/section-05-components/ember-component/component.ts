import Component from '@ember/component';
import { computed, action } from '@ember-decorators/object';

export default class EmberComponent extends Component {
  clickCount = 0;
  multiplier = 2;

  @computed('clickCount', 'multiplier')
  get double() {
    return this.clickCount * this.multiplier;
  }

  @action increment() { this.set('clickCount', this.clickCount + 1); }
  @action decrement() { this.set('clickCount', this.clickCount - 1); }

  @action changeMultiplier(e: KeyboardEvent) {
    const element = e.currentTarget as HTMLInputElement;

    this.set('multiplier', parseInt(element.value));
  }
}
