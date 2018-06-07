import * as React from 'react';
import { connect } from 'react-redux';

import { edit, destroy, toggle } from '@store/todos';

import TodoDisplay from './display';

const mapDispatchToProps = (dispatch) => ({
  destroyTodo: (id: number) => dispatch(destroy(id)),
  toggleCompletion: (id: number) => dispatch(toggle(id)),
  editTodo: (id: number, text: string) => dispatch(edit(id, text))
});

export default connect(null, mapDispatchToProps)(TodoDisplay);
