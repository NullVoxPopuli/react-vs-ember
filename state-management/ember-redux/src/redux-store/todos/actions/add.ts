import { namespace, State } from '../shared';

export const ADD = `${namespace}/ADD`;
export type AddAction = { type: string, id: number, text: string };

let nextTodoId = 0;

// Action Creator
export const add = (text: string): AddAction => ({ type: ADD, text, id: nextTodoId++ });

// Reducer
export const reducer = (state: State, action: AddAction) => ({
  ...state,
  all: [
    ...state.all,
    {
      id: action.id,
      text: action.text,
      completed: false
    }
  ]
});
