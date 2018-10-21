import * as React from 'react';
import { connect } from 'react-redux';

import { click } from '../../../redux-store/api-data/some-resource';
import { State } from '../../../redux-store/reducers';

import Display from './display';

export default connect(
  (state: State) => {
    const info = state.asyncButton;

    return {
      isRunning: info.isRunning,
      clickCount: info.clickCount,
      lastCoords: info.lastCoords
    }
  },
  (dispatch) => ({
    onClick: (e: React.MouseEvent<HTMLElement>) => dispatch(click(e.pageX, e.pageY))
  })
)(Display);
