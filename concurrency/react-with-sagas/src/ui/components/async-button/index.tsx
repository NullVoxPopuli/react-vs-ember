import * as React from 'react';
import { connect } from 'react-redux';

import { handleClick } from '@store/button';

import Display from './display';

export default connect(
  (state) => ({
    isRunning: false,
    clickCount: 0,
    lastCoords: ''
  }),
  (dispatch) => ({
    onClick: () => dispatch(handleClick())
  })
)(Display);
