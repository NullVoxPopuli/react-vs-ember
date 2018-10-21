import { combineReducers } from 'redux';

import {
  State as AsyncButtonState,
  reducer as asyncButtonReducer
} from './api-data/some-resource';

export interface State{
  asyncButton: AsyncButtonState
}

export const reducers = combineReducers({
  asyncButton: asyncButtonReducer
});
