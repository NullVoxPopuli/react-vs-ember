import * as React from 'react';
import { TodosContext } from '~/contexts/todos';
import FooterDisplay from './display';

export default class FooterContainer extends React.Component {
  render() {
    return (
      <TodosContext.Consumer>
        {({ todos, clearCompleted, showAll, showActive, showCompleted }) => {
          const innerProps = {
            clearCompleted, showAll, showActive, showCompleted
          }

          return <FooterDisplay { ...innerProps }/>;
        }}
      </TodosContext.Consumer>
    );
  }
}
