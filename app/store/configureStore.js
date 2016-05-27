'use strict'

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'app/reducers';

const configureStore = initialState => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware)
    )
};

export default configureStore;
