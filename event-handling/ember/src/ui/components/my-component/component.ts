import Component from '@ember/component';
import { action } from '@ember-decorators/object';

export default class MyComponent extends Component {
  textProperty?: string;

  @action
  didChangeTextField(this: MyComponent, event) {
    const text = event.target.value;

    this.set('textProperty', text);
  }
}
