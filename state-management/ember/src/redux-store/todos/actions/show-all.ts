import { namespace, State } from '../shared';

export const SHOW_ALL = `${namespace}/SHOW_ALL`;
export type ShowAllAction = { type: string };

// Action Creator
export const showAll = (): ShowAllAction => ({ type: SHOW_ALL });

// Reducer
export const reducer = (state: State, action: ShowAllAction) => ({
  ...state,
  filter: undefined
});
