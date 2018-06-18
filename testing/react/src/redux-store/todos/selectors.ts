import { State, Todo } from "example-app/redux-store/todos/shared";

interface SubState {
  todos: State
}

export const all = (state: SubState): Todo[] => state.todos.all;
export const active = (state: SubState): Todo[] => all(state).filter(t => !t.completed);
export const completed = (state: SubState): Todo[] => all(state).filter(t => t.completed);

export const allCount = (state: SubState): number => all(state).length;
export const activeCount = (state: SubState): number => active(state).length;
export const completedCount = (state: SubState): number => completed(state).length;
