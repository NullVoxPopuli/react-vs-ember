import { State, Todo } from "example-app/redux-store/todos/shared";

interface SubState {
  todos: State
}

export function list(state: SubState): Todo[] {
  const filter = state.todos.filter;

  // naming could probably be better here...
  // state.{reducer}.{collection in reducer}.filter...
  return state.todos.all.filter(todo => {
    return filter === undefined ? true : filter === todo.completed;
  });
}


export const filter = (state: SubState): boolean | undefined => state.todos.filter;
export const all = (state: SubState): Todo[] => state.todos.all;
export const active = (state: SubState): Todo[] => all(state).filter(t => !t.completed);
export const completed = (state: SubState): Todo[] => all(state).filter(t => t.completed);

export const count = (state: SubState): number => list(state).length;
export const allCount = (state: SubState): number => all(state).length;
export const completedCount = (state: SubState): number => completed(state).length;
