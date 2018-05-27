import { OtherAction, initialState } from './shared';

import { AddAction, ADD, reducer as addReducer } from './actions/add';
import { ToggleAction, TOGGLE, reducer as toggleReducer } from './actions/toggle';
import { ClearCompletedAction, CLEAR_COMPLETED, reducer as clearComplutedReducer } from './actions/clear-completed';
import { CompleteAction, COMPLETE, reducer as completeReducer } from './actions/complete';
import { DestroyAction, DESTROY, reducer as destroyReducer } from './actions/destroy';
import { EditAction, EDIT, reducer as editReducer } from './actions/edit';
import { ShowActiveAction, SHOW_ACTIVE, reducer as showActiveReducer } from './actions/show-active';
import { ShowAllAction, SHOW_ALL, reducer as showAllReducer } from './actions/show-all';
import { ShowCompletedAction, SHOW_COMPLETED, reducer as showCompletedReducer } from './actions/show-completed';

import * as todoSelectors from './selectors';

export { State, Todo } from './shared';
export { add } from './actions/add';
export { toggle } from './actions/toggle';
export { clearCompleted } from './actions/clear-completed';
export { complete } from './actions/complete';
export { destroy } from './actions/destroy';
export { edit } from './actions/edit';
export { showActive } from './actions/show-active';
export { showAll } from './actions/show-all';
export { showCompleted } from './actions/show-completed';


export const selectors = todoSelectors;

type ActionTypes =
  | AddAction
  | ToggleAction
  | ClearCompletedAction
  | CompleteAction
  | DestroyAction
  | EditAction
  | ShowActiveAction
  | ShowAllAction
  | ShowCompletedAction
  | OtherAction

const actionHandlers = {
  [ADD]: addReducer,
  [TOGGLE]: toggleReducer,
  [CLEAR_COMPLETED]: clearComplutedReducer,
  [COMPLETE]: completeReducer,
  [DESTROY]: destroyReducer,
  [EDIT]: editReducer,
  [SHOW_ACTIVE]: showActiveReducer,
  [SHOW_ALL]: showAllReducer,
  [SHOW_COMPLETED]: showCompletedReducer
}


export function reducer(state = initialState, action: ActionTypes) {
  const handler = actionHandlers[action.type];

  return handler ? handler(state, action as any) : state;
}
