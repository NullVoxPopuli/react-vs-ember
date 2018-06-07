import * as React from 'react';
import { connect } from 'react-redux';

import { add as addTodo } from '@store/todos';
import { AddAction } from '@store/todos/actions/add';

import HeaderDisplay from './display';

export interface State {
  text: string;
}

export interface Props {
  addTodo: (text: string) => AddAction;
}

export default connect(null, { addTodo })(HeaderDisplay)
