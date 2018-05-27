import { namespace, State } from '../shared';

export const SHOW_ACTIVE = `${namespace}/SHOW_ACTIVE`;
export type ShowActiveAction = { type: string };

// Action Creator
export const showActive = (): ShowActiveAction => ({ type: SHOW_ACTIVE });

// Reducer
export const reducer = (state: State, action: ShowActiveAction) => ({
  ...state,
  filter: false
});
