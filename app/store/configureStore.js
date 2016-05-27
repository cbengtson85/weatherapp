'use strict'

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'
import rootReducer from 'app/reducers';

const loggerMiddleware = createLogger();

const configureStore = initialState => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
};

export default configureStore;
