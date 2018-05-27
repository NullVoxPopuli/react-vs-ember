import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

import { connect } from 'ember-redux';

import { add as addTodo } from 'example-app/redux-store/todos';

class HeaderComponent extends Component {
  text = '';
  tagName = '';

  get layout() {
    return hbs`
      <header class='header'>
        {{yield (hash text=text addTodo=(action "addTodo"))}}
      </header>
    `;
  }
}

const dispatchToActions = {
  addTodo
}

export default connect(null, dispatchToActions)(HeaderComponent);
