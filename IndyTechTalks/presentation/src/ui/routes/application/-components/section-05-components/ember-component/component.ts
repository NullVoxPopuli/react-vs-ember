// BEGIN-SNIPPET ember-component.ts
import Component from '@ember/component';
import { computed, action } from '@ember-decorators/object';

export default class EmberComponent extends Component {
  baseNumber = 0;
  multiplier = 2;

  @computed('clickCount', 'multiplier')
  get result() {
    return this.baseNumber * this.multiplier;
  }

  @action increment() { this.set('baseNumber', this.baseNumber + 1); }
  @action decrement() { this.set('baseNumber', this.baseNumber - 1); }

  @action changeMultiplier(e: KeyboardEvent) {
    const element = e.currentTarget as HTMLInputElement;

    this.set('multiplier', parseInt(element.value));
  }
}
// END-SNIPPET
