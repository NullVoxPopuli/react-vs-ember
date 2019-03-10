import { namespace, State } from '../shared';

export const ADD = `${namespace}/ADD`;
export type AddAction = { type: string, id: number, text: string };

let nextTodoId = 0;

// Action Creator
export const add = (text: string): AddAction => ({ type: ADD, text, id: nextTodoId++ });

const theForbiddenTodo = 'make another TodoMVC App';

// Reducer
export const reducer = (state: State, action: AddAction) => {
  if (action.text === theForbiddenTodo) {
    return state;
  }

  return {
    ...state,
    all: [
      ...state.all,
      {
        id: action.id,
        text: action.text,
        completed: false
      }
   ]
  }
};
