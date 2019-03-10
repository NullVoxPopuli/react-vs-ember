import * as React from 'react';

import { TodosContext, ITodos } from '@contexts/todos';

import TodoMVC from './components/todo-mvc';

import './styles/app.scss';

type State = ITodos

// heavily based off of
// https://reactjs.org/docs/context.html#updating-context-from-a-nested-component
export default class Application extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      todos: [{
        id: 0, text: 'Todo from context', completed: false
      }],
      showCompletedFilter: undefined,
      add: this.addTodo,
      clearCompleted: this.clearCompleted,
      complete: this.complete,
      destroy: this.destroyTodo,
      edit: this.edit,
      showAll: this.showAll,
      showActive: this.showActive,
      showCompleted: this.showCompleted,
      toggle: this.toggleTodo
    }
  }

  addTodo = (text: string) => {
    const todos = this.state.todos;

    this.setState({
      todos: [
        ...todos,
        { id: todos.length, text, completed: false }
      ]
    });
  }

  clearCompleted = () => {
    const todos = this.state.todos.filter(t => !t.completed);

    this.setState({ todos });
  }

  complete = (id: number) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }

      return todo;
    });

    this.setState({ todos });
  }

  destroyTodo = (id: number) => {
    const todos = this.state.todos.filter(t => t.id !== id);

    this.setState({ todos });
  }

  edit = (id: number, text: string) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text };
      }

      return todo;
    });

    this.setState({ todos });
  }

  showAll = () => {
    this.setState({ showCompletedFilter: undefined });
  }

  showActive = () => {
    this.setState({ showCompletedFilter: true });
  }

  showCompleted = () => {
    this.setState({ showCompletedFilter: false });
  }

  toggleTodo = (id: number) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });

    this.setState({ todos });
  }

  render() {
    return (
      <TodosContext.Provider value={this.state}>
        <TodoMVC />
      </TodosContext.Provider>
    );
  }
}
