import Ember from 'ember';
import Component from '@ember/component';
import { action } from '@ember-decorators/object';

const { run: { scheduleOnce } } = Ember;

export default class TodoItemDisplay extends Component {
  props: any;

  @action
  didDoubleClick() {
    this.props.startEditing();
    this.send('focusInput');
  }

  @action
  didFinishEditing(e: KeyboardEvent) {
    const target = (e.target as HTMLInputElement);
    const text = target.value;

    this.props.editTodo(text);
    this.props.doneEditing();
  }


  @action
  focusInput(this: TodoItemDisplay) {
    scheduleOnce('afterRender', this, () => {
      const element = this.element;
      const input = element.querySelector('input.edit') as HTMLInputElement

      input.focus();
    });
  }

  @action
  handleKeydown(this: TodoItemDisplay, e: KeyboardEvent) {
    if (e.keyCode === 13) {
      const target = (e.target as HTMLInputElement);

      target.blur();
    } else if (e.keyCode === 27) {
      this.send('props.startEditing');
    }
  }
}
