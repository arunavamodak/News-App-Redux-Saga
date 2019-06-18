import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { changeNews } from "../reducer/reducer";

// Create saga middle-ware
export const sagaMiddleware = createSagaMiddleware();

export const createMystore = () =>
  createStore(changeNews, applyMiddleware(sagaMiddleware));
