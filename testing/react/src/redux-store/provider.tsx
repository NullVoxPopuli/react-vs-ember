import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, Store, compose } from 'redux';

import { reducers } from './reducers';
import { middleware, setup as setupMiddleware } from './middleware';
import { default as enhancers } from './enhancers';

export interface IProps {
  initialState?: any;
}

export default class ReduxProvider extends React.Component<IProps> {
  store: Store;

  constructor(props) {
    super(props);

    const { initialState } = props;

    // this is intentionally a class property.
    // we don't want the store re-created during any
    // lifecycle event.
    this.store = this.initRedux(initialState);
  }

  initRedux(initialState: any): Store {
    const state = {
      ...(initialState || {})
    };

    const store = createStore(
      reducers,
      state,
      compose(
        // sagas, maybe thunks, etc
        applyMiddleware(...middleware),
        // e.g.: dev tools
        enhancers
      )
    )

    // Start sagas, etc
    setupMiddleware(store);

    if (window.Cypress) {
      window.__store__ = store;
    }

    return store;
  }

  render() {
    return <Provider store={this.store}>{this.props.children}</Provider>
  }
}
