import * as React from 'react';
import { Router } from 'react-router-dom';
import createHistory from 'history/createMemoryHistory';

import { setupAppForTesting, mount } from '@bigtest/react';

import { ReduxProvider } from '@store/index';
import TodoMVC from '@ui/components/todo-mvc';

// the same as @ui/application, but allows
// setting the initial state
class TestWrapper extends React.Component<any, any> {
  render() {
    const { initialState, history } = this.props;
    // mount the whole app by default, but allow testing individual
    // components.
    const ComponentToTest = this.props.component || TodoMVC;
    const componentProps = this.props.componentProps || {};

    return (
      <ReduxProvider initialState={initialState || {}}>
        <Router history={history}>
          <ComponentToTest {...componentProps } />
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

// Mounting with context is needed because some components,
// esp those from react-router-dom (such as NavLink)
// require that they be rendered within a Route within a Router.
export const mountWithContext = (component, props = {}, state = {}, history = undefined) => {
  return mount(() => (
    <TestWrapper
      component={component}
      componentProps={props}
      initialState={state}
      history={history || createHistory()}
    />
  ), {
    mountId: 'integration-testing-root'
  });
}
