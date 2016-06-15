'use strict'

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'
import rootReducer from 'app/reducers';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';

const loggerMiddleware = createLogger();
const routerMW = routerMiddleware(browserHistory);

const configureStore = initialState => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            routerMW,
            thunkMiddleware,
            loggerMiddleware
        )
    )
};

export {configureStore};
