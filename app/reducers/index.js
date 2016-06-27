'use strict'

import {combineReducers} from 'redux';
import * as locationReducers from 'app/reducers/locationReducers';
import * as weatherReducers from 'app/reducers/weatherReducers';
import {routerReducer} from 'react-router-redux';

const reducers = {...locationReducers, ...weatherReducers};

const rootReducer = combineReducers({...reducers, routing : routerReducer});

export default rootReducer;
