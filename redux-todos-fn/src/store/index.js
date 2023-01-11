import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todoReducer';

const middlewares = applyMiddleware(
    // Mylogger
    thunk,
    createLogger({
        collapsed: true,
    })
);
const store = createStore(todoReducer, middlewares);

export default store;