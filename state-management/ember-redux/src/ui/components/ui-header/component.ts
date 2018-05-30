import Component from '@ember/component';
import { action } from '@ember-decorators/object';
import { connect } from 'ember-redux';

import { add as addTodo } from 'example-app/src/redux-store/todos';

const dispatchToActions = { addTodo };

@connect(null, dispatchToActions)
export default class Header extends Component {
  text = '';

  @action
  didSubmit(this: Header) {
    this.actions.addTodo(this.text);
    this.set('text', '');
  }
}
