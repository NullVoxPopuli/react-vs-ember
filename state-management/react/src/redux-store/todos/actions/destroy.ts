import { namespace, State } from '../shared';

export const DESTROY = `${namespace}/DESTROY`;
export type DestroyAction = { type: string, id: number };

// Action Creator
export const destroy = (id: number): DestroyAction => ({ type: DESTROY, id });

// Reducer
export const reducer = (state: State, action: DestroyAction) => ({
  ...state,
  all: state.all.filter(todo => todo.id !== action.id)
});
