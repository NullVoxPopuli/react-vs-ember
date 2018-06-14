import * as React from 'react';
import { ClearCompletedAction } from 'example-app/redux-store/todos/actions/clear-completed';
import { ShowActiveAction } from 'example-app/redux-store/todos/actions/show-active';
import { ShowAllAction } from 'example-app/redux-store/todos/actions/show-all';
import { ShowCompletedAction } from 'example-app/redux-store/todos/actions/show-completed';

export interface Props {
  filter: Troolean;
  allCount: number;
  todosCount: number;
  completedCount: number;
  clearCompleted: () => ClearCompletedAction;
  showAll: () => ShowAllAction;
  showActive: () => ShowActiveAction;
  showCompleted: () => ShowCompletedAction;
}

export default class FooterDisplay extends React.Component<Props> {
  render() {
    const {
      todosCount, filter,
      showAll, showCompleted, showActive, clearCompleted
    } = this.props;

    const itemWord = todosCount > 1 ? 'items' : 'item';

    const isShowingAll = filter === undefined;
    const isShowingActive = filter === false;
    const isShowingCompleted = filter === true;

    const showClearButton = todosCount > 0;

    return (
      <footer className='footer'>

        <span className='todo-count'>
          <strong>{todosCount} {itemWord} left</strong>
        </span>

        <ul className="filters">
          <li>
            <a
              data-test-filter-all
              onClick={showAll}
              className={(isShowingAll && 'selected') || ''}
              style={{ cursor: 'pointer' }}>
              All
            </a>
          </li>

          <li>
            <a
              data-test-filter-active
              onClick={showActive}
              className={(isShowingActive && 'selected') || ''}
              style={{ cursor: 'pointer' }}>
              Active
            </a>
          </li>

          <li>
            <a
              data-test-filter-completed
              onClick={showCompleted}
              className={(isShowingCompleted && 'selected') || ''}
              style={{ cursor: 'pointer' }}>
              Completed
            </a>
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
