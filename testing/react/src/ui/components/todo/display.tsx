import * as React from 'react';

import { Todo } from '@store/todos';
import * as ReactDOM from 'react-dom';

export interface Props {
  todo: Todo;
  toggleCompletion: (id: number) => any;
  destroyTodo: (id: number) => any;
  editTodo: (id: number, text: string) => any;
}

export interface State {
  editing: boolean
}

export default class TodoDisplay extends React.Component<Props, State> {
  state = { editing: false };
  inputRef: HTMLInputElement;

  didFinishEditing = (e:  React.FocusEvent<HTMLInputElement>) => {
    const { editTodo, todo: { id } } = this.props;

    const text = e.target.value;

    editTodo(id, text);
    this.setState({ editing: false });
  }

  handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const code = e.keyCode;

    // Tab, Enter, Escape
    if (9 === code || 13 === code || 27 === code) {
      target.blur();
      this.setState({ editing: false });
    }
  }

  didClickLabel = () => {
    this.inputRef.focus();
    this.setState({ editing: true });
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { editTodo, todo: { id } } = this.props;

    const target = e.target as HTMLInputElement;
    const value = target.value;

    editTodo(id, value);
  }

  classes = () => {
    const { editing } = this.state;
    const { completed } = this.props.todo;

    let result = '';

    if (editing) result += 'editing ';
    if (completed) result += 'completed';

    return result;
  }

  render() {
    const { todo, destroyTodo, toggleCompletion } = this.props;

    return (
      <li data-test-todo className={this.classes()}>
        <div className='view'>
          <input
            data-test-todo-toggle
            type='checkbox'
            checked={todo.completed}
            className='toggle'
            onChange={() => toggleCompletion(todo.id)}
          />

          <label onClick={this.didClickLabel}>{todo.text}</label>

          <button className='destroy' onClick={() => destroyTodo(todo.id)}>
          </button>
        </div>

        <input
          data-test-todo-edit
          type='text'
          className='edit'
          ref={r => this.inputRef = r}
          value={todo.text || ''}
          onChange={this.handleChange}
          onBlur={this.didFinishEditing}
          onKeyDown={this.handleKeydown}
        />
      </li>
    );
  }
}
