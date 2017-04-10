'use strict'

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from 'app/reducers';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';

const routerMW = routerMiddleware(browserHistory);

let middleware = [routerMW, thunkMiddleware];

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
