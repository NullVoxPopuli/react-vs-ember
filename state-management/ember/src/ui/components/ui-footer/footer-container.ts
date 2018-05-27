import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

import { connect } from 'ember-redux';

import { State } from 'example-app/redux-store/reducers';
import {
  selectors,
  clearCompleted, showAll, showActive, showCompleted,
} from 'example-app/redux-store/todos';

const { all, count, allCount, completedCount, filter } = selectors;


const stateToComputed = (state: State) => ({
  filter: filter(state),
  allCount: allCount(state),
  todosCount: count(state),
  completedCount: completedCount(state)
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
