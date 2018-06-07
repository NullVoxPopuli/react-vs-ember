import { Store, Middleware } from "redux";

// This project does not need sagas, as
// as async behavior will be covered in a subsequent blog post


// import createSagaMiddleWare from 'redux-saga';

// const createSaga = createSagaMiddleWare.default ?
//   createSagaMiddleWare.default :
//   createSagaMiddleWare;

// const sagaMiddleware = createSaga();

export const setup = (store: Store<any>) => {
  // sagaMiddleware.run(addAsync);
};

export const middleware: Middleware[] =  [
  // sagaMiddleware
]
