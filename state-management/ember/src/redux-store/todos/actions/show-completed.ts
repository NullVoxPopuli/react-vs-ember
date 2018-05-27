import { namespace, State } from '../shared';

export const SHOW_COMPLETED = `${namespace}/SHOW_COMPLETED`;
export type ShowCompletedAction = { type: string };

// Action Creator
export const showCompleted = (): ShowCompletedAction => ({ type: SHOW_COMPLETED });

// Reducer
export const reducer = (state: State, action: ShowCompletedAction) => ({
  ...state,
  filter: true
});
