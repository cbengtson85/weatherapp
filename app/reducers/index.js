'use strict'

import {combineReducers} from 'redux';
import * as locationReducers from 'app/reducers/locationReducers';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({...locationReducers, routing : routerReducer});

export default rootReducer;
