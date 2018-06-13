import * as React from 'react';
import { setupAppForTesting, cleanup } from '@bigtest/react';

import { ReduxProvider } from '@store/index';
import TodoMVC from '@ui/components/todo-mvc';

// the same as @ui/application, but allows
// setting the initial state
class TestWrapper extends React.Component<any, any> {
  render() {
    const { initialState } = this.props;

    return (
      <ReduxProvider initialState={initialState || {}}>
        <TodoMVC />
      </ReduxProvider>
    )
  }
}

export function setupApplicationTest(initialState = {}) {
  beforeEach(async () => {
    this.app = await setupAppForTesting(TestWrapper, {
      mountId: `react-testing-root-${Math.random()}`,
      rootElement: document.createElement('div'),
      props: {
        initialState
      },
    });
  });

  afterEach(async () => {
    await cleanup();
  });
}
