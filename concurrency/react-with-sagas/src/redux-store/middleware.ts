import { Store, Middleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects';

import { saga as asyncButtonSaga } from './api-data/some-resource';

// const createSaga = createSagaMiddleware.default ?
//   createSagaMiddleWare.default :
//   createSagaMiddleWare;

const sagaMiddleware = createSagaMiddleware();

function * rootSaga() {
  yield all([
    asyncButtonSaga()
  ]);
}

export const setup = (store: Store<any>) => {
  sagaMiddleware.run(rootSaga);
};

export const middleware: Middleware[] =  [
  sagaMiddleware
]
