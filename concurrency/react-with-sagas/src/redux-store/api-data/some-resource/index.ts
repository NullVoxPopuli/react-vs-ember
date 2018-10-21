import { OtherAction, initialState } from './shared';

import {
  ClickAction,
  CLICK, CLICK_STARTED, CLICK_FINISHED,
  reducer as clickReducer
} from './actions/click';

export { State } from './shared';
export { click, saga } from './actions/click';

type ActionTypes =
  | ClickAction;

const actionHandlers = {
  [CLICK]: clickReducer,
  [CLICK_STARTED]: clickReducer,
  [CLICK_FINISHED]: clickReducer
}


export function reducer(state = initialState, action: ActionTypes) {
  const handler = actionHandlers[action.type];

  return handler ? handler(state, action as any) : state;
}
