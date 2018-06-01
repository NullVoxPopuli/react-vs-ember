import * as React from 'react';

export interface Props {
  todosCount: number;
  allCount: number;
  filter: Troolean;
  completedCount: number;
  showAll: () => void;
  showCompleted: () => void;
  showActive: () => void;
  clearCompleted: () => void;
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
              onClick={showAll}
              className={(isShowingAll && 'selected') || ''}
              style={{ cursor: 'pointer' }}>
              All
            </a>
          </li>

          <li>
            <a
              onClick={showActive}
              className={(isShowingActive && 'selected') || ''}
              style={{ cursor: 'pointer' }}>
              Active
            </a>
          </li>

          <li>
            <a
              onClick={showCompleted}
              className={(isShowingCompleted && 'selected') || ''}
              style={{ cursor: 'pointer' }}>
              Completed
            </a>
          </li>
        </ul>

        {showClearButton && (
          <button onClick={clearCompleted} className='clear-completed'>Clear completed</button>
        )}
      </footer>
    );
  }
}
