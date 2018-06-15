import * as React from 'react';
import { Router } from 'react-router-dom';
import createHistory from 'history/createMemoryHistory';

import { setupAppForTesting } from '@bigtest/react';

import { ReduxProvider } from '@store/index';
import TodoMVC from '@ui/components/todo-mvc';

// the same as @ui/application, but allows
// setting the initial state
class TestWrapper extends React.Component<any, any> {
  render() {
    const { initialState, history } = this.props;

    return (
      <ReduxProvider initialState={initialState || {}}>
        <Router history={history}>
          <TodoMVC />
        </Router>
      </ReduxProvider>
    )
  }
}

export function setupApplicationTest(initialState = {}, history = undefined) {
  beforeEach(async function() {
    const historyForTesting = history || createHistory();

    this.app = await setupAppForTesting(TestWrapper, {
      props: {
        initialState,
        history: historyForTesting
      },
    });
  });
}
