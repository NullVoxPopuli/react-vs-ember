import * as React from 'react';

import { TodosContext } from '@contexts/todos';
import TodoDisplay from './display';

export interface Props {
  todo: Todo
}

export default class TodoContainer extends React.Component<Props> {
  render() {
    return (
      <TodosContext.Consumer>
        {({ destroy, edit, toggle }) => {
          const innerProps = {
            todo: this.props.todo,
            destroyTodo: destroy,
            editTodo: edit,
            toggleCompletion: toggle
          }
          return <TodoDisplay { ...innerProps } />
        }}
      </TodosContext.Consumer>
    );
  }
}
