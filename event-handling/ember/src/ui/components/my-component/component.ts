import Component from '@ember/component';
import { action } from '@ember-decorators/object';

export default class MyComponent extends Component {
  textProperty?: string;

  @action
  didChangeTextField(this: MyComponent, event: KeyboardEvent) {
    console.log(event);
    const text = (event.target as HTMLInputElement).value;

    this.set('textProperty', text);
  }
}
