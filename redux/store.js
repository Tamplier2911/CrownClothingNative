import { applyMiddleware, createStore } from "redux";

// middlewares

// redux-saga
// import createSagaMiddleware from "redux-saga";

// root-reducer
import rootReducer from "./root.reducer";

// creating saga middleware
// const sagaMiddleware = createSagaMiddleware();

// middleware stack
const middlewares = [];

// if (process.env.NODE_ENV === "development") /** apply logger */

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// use saga
// sagaMiddleware.run(rootSaga);
