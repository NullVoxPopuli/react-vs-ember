import { namespace, State } from '../shared';

export const COMPLETE = `${namespace}/COMPLETE`;
export type CompleteAction = { type: string, id: number };

// Action Creator
export const complete = (id: number): CompleteAction => ({ type: COMPLETE, id });

// Reducer
export const reducer = (state: State, action: CompleteAction) => ({
  ...state,
  all: state.all.map(todo => {
    if (todo.id === action.id) {
      return { ...todo, completed: true };
    }

    return todo;
  })
});
