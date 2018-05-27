import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

import { connect } from 'ember-redux';

import { getFilter, getTodosCount, getCompletedCount, getAllTodosCount } from '../reducers/todos';
import { clearCompleted, showAll, showActive, showCompleted } from '../actions/todos';

const stateToComputed = state => ({
  filter: getFilter(state),
  allCount: getAllTodosCount(state),
  todosCount: getTodosCount(state),
  completedCount: getCompletedCount(state)
});

const dispatchToActions = {
  clearCompleted,
  showAll,
  showActive,
  showCompleted
};

class FooterComponent extends Component {
  tagName = '';

  get layout() {
    return hbs`
      <footer class='footer'>
        {{#if (gt allCount 0)}}
          {{yield (hash
            filter=filter
            todosCount=todosCount
            completedCount=completedCount
            clearCompleted=(action "clearCompleted")
            showAll=(action "showAll")
            showActive=(action "showActive")
            showCompleted=(action "showCompleted"))
          }}
        {{/if}}
      </footer>
    `
  }
}

export default connect(stateToComputed, dispatchToActions)(FooterComponent);
