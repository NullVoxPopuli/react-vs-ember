import { OtherAction, initialState } from './shared';
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


export default function reducer(state = initialState, action: ActionTypes) {
  const handler = actionHandlers[action.type];

  return handler ? handler(state, action as any) : state;
}
