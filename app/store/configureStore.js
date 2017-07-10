'use strict'

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from 'app/reducers';
import {localStorageMiddleWare} from 'app/functions/localStorageMiddleWare';

let middleware = [thunkMiddleware, localStorageMiddleWare];

if(process.env.NODE_ENV !== 'production') {
    let logger = require('redux-logger');
    const loggerMiddleware = logger.createLogger();
    middleware = [...middleware, loggerMiddleware];
}

const configureStore = initialState => {

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    )
};

export {configureStore};
