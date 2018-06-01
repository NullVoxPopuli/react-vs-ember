import * as React from 'react';

import { TodosContext, allCount, count, completedCount } from '@contexts/todos';

import FooterDisplay from './display';

export default class FooterContainer extends React.Component {
  render() {
    return (
      <TodosContext.Consumer>
        {({
          showCompletedFilter, todos,
          clearCompleted, showAll, showActive, showCompleted
        }) => {
          const innerProps = {
            clearCompleted,
            showAll,
            showActive,
            showCompleted,
            filter: showCompletedFilter,
            allCount: allCount(todos),
            todosCount: count(todos, showCompletedFilter),
            completedCount: completedCount(todos)
          }

          return <FooterDisplay { ...innerProps }/>;
        }}
      </TodosContext.Consumer>
    );
  }
}
