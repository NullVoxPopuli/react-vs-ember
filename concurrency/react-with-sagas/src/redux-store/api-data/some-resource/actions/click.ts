import { delay } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects';
import { namespace, State } from '../shared';

// Actions
export const CLICK = `${namespace}/CLICK`;
export const CLICK_STARTED = `${namespace}/CLICK_STARTED`;
export const CLICK_FINISHED = `${namespace}/CLICK_FINISHED`;
export type ClickAction = { type: string, clickX: number, clickY: number };

// Action Creators
export const click = (clickX: number, clickY: number): ClickAction => ({ type: CLICK, clickX, clickY });


// Reducer
export const reducer = (state: State, action: ClickAction) => {
  console.log(state, action);
  switch(action.type) {
    case CLICK_STARTED:
      return {
        ...state,
        isRunning: true
      }
    case CLICK_FINISHED:
      return {
        ...state,
        isRunning: false,
        clickCount: state.clickCount + 1,
        lastCoords: `${action.clickX} x ${action.clickY}`
      }
    default:
      return state;
  }
};

// Saga
function * performClickHandler(action: ClickAction) {
  const { clickX, clickY } = action;

  yield put({ type: CLICK_STARTED, clickX, clickY });
  yield delay(2000);
  yield put({ type: CLICK_FINISHED, clickX, clickY });
}

export function * saga() {
  yield takeLatest(CLICK, performClickHandler);
}
