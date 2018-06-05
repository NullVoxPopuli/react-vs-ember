import { combineReducers, Reducer } from 'redux';

import {
  State as TodoState,
  reducer as todosReducer
} from './todos';

export interface State{
  todos: TodoState
}

export const reducers: Reducer<State> = combineReducers({
  todos: todosReducer
});
