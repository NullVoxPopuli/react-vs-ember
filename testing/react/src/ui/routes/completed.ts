import { connect } from 'react-redux';

import { completed } from '@store/todos/selectors';
import { State } from '@store/reducers';

import TodoList from '@ui/components/todo-list';

const mapStateToProps = (state: State) => ({
  todos: completed(state)
});

export default connect(mapStateToProps)(TodoList);
