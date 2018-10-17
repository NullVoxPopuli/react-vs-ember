import Component, { tracked } from 'sparkles-component';

export default class SparklesComponent extends Component {
  @tracked clickCount = 0;
  @tracked multiplier = 2;

  @tracked('clickCount', 'multiplier')
  get double() {
    return this.clickCount * this.multiplier;
  }

  increment() { this.clickCount += 1; }
  decrement() { this.clickCount -= 1; }

  changeMultiplier(e: KeyboardEvent) {
    const element = e.currentTarget as HTMLInputElement;

    this.multiplier = parseInt(element.value);
  }
}
