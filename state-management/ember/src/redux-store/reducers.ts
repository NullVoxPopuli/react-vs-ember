import { combineReducers } from 'redux';

import {
  State as TodoState,
  reducer as todosReducer
} from './todos';

export interface State{
  todos: TodoState
}

export const reducers = combineReducers({
  todos: todosReducer
});
