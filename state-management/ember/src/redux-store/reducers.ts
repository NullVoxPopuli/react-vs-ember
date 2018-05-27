import { combineReducers } from 'redux';

import { reducer as todosReducer } from './todos';

export const reducers = combineReducers({
  todos: todosReducer
});
