import { namespace, State } from '../shared';

export const EDIT = `${namespace}/EDIT`;
export type EditAction = { type: string, id: number, text: string };

// Action Creator
export const edit = (id: number, text: string): EditAction => ({ type: EDIT, id, text });

// Reducer
export const reducer = (state: State, action: EditAction) => ({
  ...state,
  all: state.all.map(todo => {
    if (todo.id === action.id) {
      return { ...todo, text: action.text };
    }

    return todo;
  })
});
