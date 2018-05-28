import Component from '@ember/component';
import { action } from '@ember-decorators/object';

export default class TodoItemDisplay extends Component {
  @action
  didDoubleClick() {
    this.send('props.startEditing');
    this.send('props.focusInput');
  }

  @action
  didFinishEditing(text: string) {
    this.send('props.editTodo', text);
    this.send('props.doneEditing');
  }
}
