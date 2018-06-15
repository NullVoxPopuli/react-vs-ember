import { connect } from 'react-redux';

import { all } from '@store/todos/selectors';
import { State } from '@store/reducers';

import TodoList from '@ui/components/todo-list';

const mapStateToProps = (state: State) => ({
  todos: all(state)
});

export default connect(mapStateToProps)(TodoList);
