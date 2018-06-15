import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { ClearCompletedAction } from 'example-app/redux-store/todos/actions/clear-completed';

export interface Props {
  filter: Troolean;
  allCount: number;
  todosCount: number;
  completedCount: number;
  clearCompleted: () => ClearCompletedAction;
}

export default class FooterDisplay extends React.Component<Props> {
  render() {
    const { todosCount, clearCompleted } = this.props;

    const itemWord = todosCount > 1 ? 'items' : 'item';

    const showClearButton = todosCount > 0;

    return (
      <footer className='footer'>

        <span className='todo-count'>
          <strong>{todosCount} {itemWord} left</strong>
        </span>

        <ul className="filters">
          <li>
            <NavLink
              data-test-filter-all
              to={'/'} exact
              activeClassName='selected'
              style={{ cursor: 'pointer' }}>
              All
            </NavLink>
          </li>

          <li>
            <NavLink
              data-test-filter-active
              to={'/active'} exact
              activeClassName='selected'
              style={{ cursor: 'pointer' }}>
              Active
            </NavLink>
          </li>

          <li>
            <NavLink
              data-test-filter-completed
              to={'/completed'} exact
              activeClassName='selected'
              style={{ cursor: 'pointer' }}>
              Completed
            </NavLink>
          </li>
        </ul>

        {showClearButton && (
          <button
            data-test-clear-button
            onClick={clearCompleted}
            className='clear-completed'>Clear completed</button>
        )}
      </footer>
    );
  }
}
