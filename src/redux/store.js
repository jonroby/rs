import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";
import middlewares from "./middlewares";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, ...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;
