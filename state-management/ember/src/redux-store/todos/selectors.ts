import { State, Todo } from "example-app/redux-store/todos/shared";

interface SubState {
  todos: State
}

export function list(state: SubState, filter?: boolean): Todo[] {
  // naming could probably be better here...
  // state.{reducer}.{collection in reducer}.filter...
  return state.todos.all.filter(todo => {
    return filter === undefined ? true : filter === todo.completed;
  });
}


export const filter = (state: SubState): boolean | undefined => state.todos.filter;
export const all = (state: SubState): Todo[] => state.todos.all;
export const allCount = (state: SubState): number => state.todos.all.length;
export const completedCount = (state: SubState): number => state.todos.all.filter(t => t.completed).length
