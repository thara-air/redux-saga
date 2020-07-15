import { createStore, applyMiddleware } from 'redux';
import { countReducer } from './counter/reducer';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";

//const monitor = window["__SAGA_MONITOR_EXTENSION__"]

function* exampleSaga() {
  console.log("Example saga reached");
}
//{ sagaMonitor: monitor }
const sagaMiddleware = createSagaMiddleware( );

export const store = createStore(countReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(exampleSaga);
