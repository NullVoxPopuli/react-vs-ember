import * as React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import {
  selectors,
  clearCompleted
} from '@store/todos';
import { State } from '@store/reducers';

import FooterDisplay from './display';

const { activeCount, allCount, completedCount } = selectors;

const mapStateToProps = (state: State) => ({
  allCount: allCount(state),
  todosCount: activeCount(state),
  completedCount: completedCount(state)
});

const mapDispatchToProps = {
  clearCompleted
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(FooterDisplay);
