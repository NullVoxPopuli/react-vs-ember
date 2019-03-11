import * as React from 'react';

export interface ITodos {
  todos: Todo[];
  showCompletedFilter: Troolean;
  add: (text: string) => void;
  clearCompleted: () => void;
  complete: (id: number) => void;
  destroy: (id: number) => void;
  edit: (id: number, text: string) => void;
  showAll: () => void;
  showActive: () => void;
  showCompleted: () => void;
  toggle: (id: number) => void;
}

export const defaultValue: ITodos = {
  todos: [],
  showCompletedFilter: undefined,
  add: () => {},
  clearCompleted: () => {},
  complete: () => {},
  destroy: () => {},
  edit: () => {},
  showActive: () => {},
  showAll: () => {},
  showCompleted: () => {},
  toggle: () => {}
}

export const TodosContext = React.createContext(defaultValue);


export function list(todos: Todo[], showCompleted: Troolean): Todo[] {

  // naming could probably be better here...
  // state.{reducer}.{collection in reducer}.filter...
  return todos.filter(todo => {
    return showCompleted === undefined ? true : showCompleted === todo.completed;
  });
}

export const count = (todos: Todo[], showCompleted: Troolean): number => list(todos, showCompleted).length;
export const allCount = (todos: Todo[]): number => todos.length;
export const completedCount = (todos: Todo[]): number => todos.filter(t => t.completed).length;
