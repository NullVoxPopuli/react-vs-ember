import * as React from 'react';

import { connect } from 'react-redux';

import {
  selectors,
  clearCompleted,
  showAll, showActive, showCompleted
} from '@store/todos';
import { State } from '@store/reducers';

import FooterDisplay from './display';

const { count, allCount, completedCount, filter } = selectors;

const mapStateToProps = (state: State) => ({
  filter: filter(state),
  allCount: allCount(state),
  todosCount: count(state),
  completedCount: completedCount(state)
});

const mapDispatchToProps = {
  clearCompleted,
  showAll,
  showActive,
  showCompleted
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterDisplay);
