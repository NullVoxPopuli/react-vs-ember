import { namespace, State } from '../shared';

export const CLEAR_COMPLETED = `${namespace}/CLEAR_COMPLETED`;
export type ClearCompletedAction = { type: string };

// Action Creator
export const clearCompleted = (): ClearCompletedAction => ({ type: CLEAR_COMPLETED });

// Reducer
export const reducer = (state: State, action: ClearCompletedAction) => ({
  ...state,
  all: state.all.filter(todo => todo.completed === false)
});
