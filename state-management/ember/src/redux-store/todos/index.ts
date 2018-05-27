import { OtherAction, initialState, State, Todo } from './shared';
import { AddAction, ADD, reducer as addReducer } from './actions/add';
import { ToggleAction, TOGGLE, reducer as toggleReducer } from './actions/toggle';

export { add } from './actions/add';
export { toggle } from './actions/toggle';


type ActionTypes =
  | AddAction
  | ToggleAction
  | OtherAction

const actionHandlers = {
  [ADD]: addReducer,
  [TOGGLE]: toggleReducer
}


export function reducer(state = initialState, action: ActionTypes) {
  const handler = actionHandlers[action.type];

  return handler ? handler(state, action as any) : state;
}

export function getTodos(state: { todos: State }, filter?: boolean): Todo[] {
  // naming could probably be better here...
  // state.{reducer}.{collection in reducer}.filter...
  return state.todos.all.filter(todo => {
    return filter === undefined ? true : filter === todo.completed;
  });
}

export function allTodos()
