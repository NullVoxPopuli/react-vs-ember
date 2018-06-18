import { OtherAction, initialState } from './shared';

import { AddAction, ADD, reducer as addReducer } from './actions/add';
import { ToggleAction, TOGGLE, reducer as toggleReducer } from './actions/toggle';
import { ClearCompletedAction, CLEAR_COMPLETED, reducer as clearComplutedReducer } from './actions/clear-completed';
import { CompleteAction, COMPLETE, reducer as completeReducer } from './actions/complete';
import { DestroyAction, DESTROY, reducer as destroyReducer } from './actions/destroy';
import { EditAction, EDIT, reducer as editReducer } from './actions/edit';

import * as todoSelectors from './selectors';

export { State, Todo } from './shared';
export { add } from './actions/add';
export { toggle } from './actions/toggle';
export { clearCompleted } from './actions/clear-completed';
export { complete } from './actions/complete';
export { destroy } from './actions/destroy';
export { edit } from './actions/edit';

export const selectors = todoSelectors;

type ActionTypes =
  | AddAction
  | ToggleAction
  | ClearCompletedAction
  | CompleteAction
  | DestroyAction
  | EditAction
  | OtherAction

const actionHandlers = {
  [ADD]: addReducer,
  [TOGGLE]: toggleReducer,
  [CLEAR_COMPLETED]: clearComplutedReducer,
  [COMPLETE]: completeReducer,
  [DESTROY]: destroyReducer,
  [EDIT]: editReducer
}


export function reducer(state = initialState, action: ActionTypes) {
  const handler = actionHandlers[action.type];

  return handler ? handler(state, action as any) : state;
}
