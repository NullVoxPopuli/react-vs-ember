import Component, { tracked } from 'sparkles-component';

export default class SparklesComponent extends Component {
  @tracked baseNumber = 0;
  @tracked multiplier = 2;

  @tracked('baseNumber', 'multiplier')
  get result() {
    return this.baseNumber * this.multiplier;
  }

  increment() { this.baseNumber += 1; }
  decrement() { this.baseNumber -= 1; }

  changeMultiplier(e: KeyboardEvent) {
    const element = e.currentTarget as HTMLInputElement;

    this.multiplier = parseInt(element.value);
  }
}
