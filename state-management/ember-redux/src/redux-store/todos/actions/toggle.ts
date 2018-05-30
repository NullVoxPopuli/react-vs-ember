import { namespace, State } from '../shared';

export const TOGGLE = `${namespace}/TOGGLE`;
export type ToggleAction = { type: string, id: number }

// Action Creator
export const toggle = (id: number): ToggleAction => ({ type: TOGGLE, id });

// Reducer
export const reducer = (state: State, action: ToggleAction) => ({
  ...state,
  all: state.all.map(todo => {
    if (todo.id === action.id) {
      return { ...todo, completed: !todo.completed};
    }

    return todo;
  })
});
